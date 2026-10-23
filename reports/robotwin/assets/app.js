(function () {
  "use strict";
  var root = document.body.getAttribute("data-root") || "./";

  // Open every <details> that contains the hash target, so deep links land on visible content.
  function openTarget() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    var node = el;
    while (node) { if (node.tagName === "DETAILS") node.open = true; node = node.parentElement; }
    if (el.tagName === "DETAILS") el.open = true;
    el.scrollIntoView({ block: "start" });
  }
  window.addEventListener("hashchange", openTarget);
  openTarget();

  // Expand / collapse all.
  document.querySelectorAll("[data-toggle-all]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("data-toggle-all") === "open";
      document.querySelectorAll("details").forEach(function (d) { d.open = open; });
    });
  });

  // Search over the prebuilt index.
  var box = document.getElementById("search-box");
  var list = document.getElementById("search-results");
  if (!box || !list) return;
  var index = null, remote = false;
  var inline = document.getElementById("search-data");
  if (inline) { try { index = JSON.parse(inline.textContent); } catch (e) { index = null; } }
  function load(cb) {
    if (index) return cb(index);
    // No inline index on this page: fetch search.json (local builds); on the published, encrypted
    // site there is none, so Enter hands the query to the index page, which carries the index inline.
    fetch(root + "search.json").then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (j) { index = j; cb(j); })
      .catch(function () { remote = true; list.innerHTML = '<li class="where">Press Enter to search from the index page</li>'; list.hidden = false; });
  }
  function query() { return box.value.trim().toLowerCase(); }
  function esc(s) { return s.replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function snippet(text, terms) {
    var low = text.toLowerCase(), pos = -1;
    for (var i = 0; i < terms.length; i++) { pos = low.indexOf(terms[i]); if (pos >= 0) break; }
    var start = Math.max(0, pos - 70), end = Math.min(text.length, (pos < 0 ? 0 : pos) + 130);
    var s = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
    s = esc(s);
    terms.forEach(function (t) { if (t) s = s.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
    return s;
  }
  function run() {
    var q = query();
    if (q.length < 2) { list.hidden = true; list.innerHTML = ""; return; }
    var terms = q.split(/\s+/).filter(Boolean);
    load(function (idx) {
      var hits = idx.map(function (rec) {
        var hay = (rec.campaign + " " + rec.section + " " + rec.text).toLowerCase();
        var ok = terms.every(function (t) { return hay.indexOf(t) >= 0; });
        if (!ok) return null;
        var score = terms.reduce(function (s, t) { return s + (rec.section.toLowerCase().indexOf(t) >= 0 ? 3 : 0) + (rec.campaign.toLowerCase().indexOf(t) >= 0 ? 2 : 0) + 1; }, 0);
        return { rec: rec, score: score };
      }).filter(Boolean).sort(function (a, b) { return b.score - a.score; }).slice(0, 25);
      list.innerHTML = hits.length ? hits.map(function (h) {
        return '<li><a href="' + root + h.rec.url + '"><div class="where">' + esc(h.rec.campaign) + " · " + esc(h.rec.section) + '</div><div class="snip">' + snippet(h.rec.text, terms) + "</div></a></li>";
      }).join("") : '<li class="where">No matches</li>';
      list.hidden = false;
    });
  }
  box.addEventListener("input", run);
  box.addEventListener("focus", run);
  box.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && remote && query().length >= 2) location.href = root + "index.html?q=" + encodeURIComponent(box.value.trim());
  });
  // Query handed over by a report page (?q=...): fill the box and search.
  var handed = new URLSearchParams(location.search).get("q");
  if (handed && index) { box.value = handed; run(); box.focus(); }
  document.addEventListener("click", function (e) { if (!e.target.closest(".search")) list.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") list.hidden = true; if (e.key === "/" && document.activeElement !== box && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); box.focus(); } });
})();
