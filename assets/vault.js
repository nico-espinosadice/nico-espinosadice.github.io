/* Media vault client (2026-10-25). Report pages mark media as <video data-vault-src="media/<slug>/clips/x.mp4"> (also
   <img>, <a>). Local build: no vault/manifest.json next to index.html, so the element gets the plain path. Published
   site: every media file is an AES-GCM blob (reports/_build/vault.py); the key is derived from the report password by the
   StatiCrypt prompt (staticrypt_template.html) and kept as a non-extractable CryptoKey in IndexedDB. A clip is fetched
   and decrypted the first time it scrolls near the viewport; one object URL per file. If no key is stored (IndexedDB
   cleared, or the page was remembered but the key was not), a small prompt asks for the password once. */
(function () {
  "use strict";
  var root = document.body.getAttribute("data-root") || "./";
  var els = Array.prototype.slice.call(document.querySelectorAll("[data-vault-src],[data-vault-poster]"));
  if (!els.length) return;

  var manifest = null, index = null, key = null, urls = {}, jobs = {};
  var b64 = function (s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); };

  // --- IndexedDB key store (shared with the StatiCrypt prompt) -------------------------------------------------------
  var DB = "report-vault";
  function db() {
    return new Promise(function (ok, bad) {
      var r = indexedDB.open(DB, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("keys"); };
      r.onsuccess = function () { ok(r.result); };
      r.onerror = function () { bad(r.error); };
    });
  }
  function kv(mode, f) {
    return db().then(function (d) {
      return new Promise(function (ok, bad) {
        var t = d.transaction("keys", mode), q = f(t.objectStore("keys"));
        t.oncomplete = function () { ok(q && q.result); };
        t.onerror = function () { bad(t.error); };
      });
    });
  }
  var keyId = function () { return "vault|" + manifest.kdf.salt; };
  function loadKey() { return kv("readonly", function (s) { return s.get(keyId()); }).catch(function () { return null; }); }
  function saveKey(k) { return kv("readwrite", function (s) { return s.put(k, keyId()); }).catch(function () {}); }
  window.__vaultDeriveKey = function (password, kdf) {
    return crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]).then(function (km) {
      return crypto.subtle.deriveKey({ name: "PBKDF2", hash: kdf.hash, salt: b64(kdf.salt), iterations: kdf.iterations },
        km, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    });
  };

  // --- Decrypt --------------------------------------------------------------------------------------------------------
  function decryptEntry(file) {
    return fetch(root + "vault/" + file + "?v=" + encodeURIComponent(manifest.built)).then(function (r) {
      if (!r.ok) throw new Error("missing " + file);
      return r.arrayBuffer();
    }).then(function (buf) {
      var packed = new Uint8Array(buf);
      return crypto.subtle.decrypt({ name: "AES-GCM", iv: packed.slice(0, 12) }, key, packed.slice(12));
    }).then(function (plain) {
      return new Response(new Blob([plain]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
    });
  }
  function mediaUrl(path) {
    if (urls[path]) return Promise.resolve(urls[path]);
    var e = index.media[path];
    if (!e) return Promise.reject(new Error("not in the vault: " + path));
    if (!jobs[path]) {
      jobs[path] = decryptEntry(e.file).then(function (d) {
        urls[path] = URL.createObjectURL(new Blob([d], { type: e.mime }));
        return urls[path];
      });
    }
    return jobs[path];
  }

  // --- Element wiring -------------------------------------------------------------------------------------------------
  function setSource(el, url) {
    var attr = el.tagName === "A" ? "href" : "src";
    el.setAttribute(attr, url);
    el.classList.remove("vault-pending");
    if (el.tagName === "VIDEO" && el.hasAttribute("data-autoplay")) el.play().catch(function () {});
  }
  function resolve(el) {
    var poster = el.getAttribute("data-vault-poster");
    if (poster) {
      if (!manifest) el.setAttribute("poster", root + poster);
      else mediaUrl(poster).then(function (u) { el.setAttribute("poster", u); }).catch(function () {});
    }
    var path = el.getAttribute("data-vault-src");
    if (!path) { el.classList.remove("vault-pending"); return; }
    if (!manifest) { setSource(el, root + path); return; }
    mediaUrl(path).then(function (u) { setSource(el, u); }).catch(function (e) {
      el.classList.add("vault-failed");
      el.setAttribute("title", "could not load " + path + ": " + e.message);
    });
  }
  function wireAll() {
    // Elements near the viewport resolve at once; the rest wait for the intersection observer.
    var near = [], later = [];
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      (r.top < innerHeight * 2 && r.bottom > -600 ? near : later).push(el);
    });
    near.forEach(resolve);
    if (!later.length) return;
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); resolve(en.target); } });
      }, { rootMargin: "600px 0px" });
      later.forEach(function (el) { io.observe(el); });
    } else {
      later.forEach(resolve);
    }
  }

  // --- Password prompt (only when the vault exists and no key is stored) -----------------------------------------------
  function askPassword() {
    var box = document.createElement("div");
    box.className = "vault-prompt";
    box.innerHTML = '<form><span>Clips are encrypted. Enter the report password to load them.</span>' +
      '<input type="password" autocomplete="current-password" placeholder="Password" aria-label="Report password">' +
      '<button type="submit">Unlock clips</button><em></em></form>';
    document.body.appendChild(box);
    var form = box.querySelector("form"), input = box.querySelector("input"), msg = box.querySelector("em");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.textContent = "Unlocking…";
      window.__vaultDeriveKey(input.value, manifest.kdf).then(function (k) {
        key = k;
        return decryptEntry(manifest.index);
      }).then(function (d) {
        index = JSON.parse(new TextDecoder().decode(d));
        saveKey(key);
        box.remove();
        wireAll();
      }).catch(function () { key = null; msg.textContent = "Wrong password."; input.focus(); });
    });
    input.focus();
  }

  els.forEach(function (el) { el.classList.add("vault-pending"); });
  if (location.protocol === "file:") { manifest = null; wireAll(); return; }  // local file build: plain media, no fetch
  fetch(root + "vault/manifest.json", { cache: "no-store" }).then(function (r) {
    if (!r.ok) throw new Error("no vault");
    return r.json();
  }).then(function (m) {
    manifest = m;
    return loadKey().then(function (k) {
      if (!k) { askPassword(); return; }
      key = k;
      return decryptEntry(manifest.index).then(function (d) {
        index = JSON.parse(new TextDecoder().decode(d));
        wireAll();
      }).catch(function () { key = null; askPassword(); });
    });
  }).catch(function () {
    manifest = null;  // local build: plain files under media/
    wireAll();
  });
})();
