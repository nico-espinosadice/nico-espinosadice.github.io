const STATUS_COLOR={done:"#0ca30c","in_progress":"#2a78d6",todo:"#8a8880",blocked:"#d03b3b",pending:"#8a8880"};
const STAGES=["expert_data","suboptimal_data","metadata","pretraining","zero_shot_eval","oft","oft_eval"];
const STAGE_LABEL={expert_data:"E",suboptimal_data:"S",metadata:"M",pretraining:"P",zero_shot_eval:"Z",oft:"O",oft_eval:"I"};
async function loadReports(){
  if(window.REPORTS&&window.REPORTS.reports)return window.REPORTS.reports;
  try{const r=await fetch("reports.json");return (await r.json()).reports;}catch(e){return [];}
}
function matches(rep,q){if(!q)return true;
  const hay=[rep.title,rep.task,rep.data_mix,rep.metadata_study,rep.headline,rep.headline_full,rep.experiment_id,...(rep.arms||[])].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());}
function escapeHtml(s){
  return String(s||"").replace(/[&<>"']/g,function(c){
    return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c];
  });
}
function inlineMd(s){
  return escapeHtml(s)
    .replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/`([^`]+)`/g,"<code>$1</code>");
}
function cardBlurb(s){
  s=String(s||"").trim();
  if(!s)return "";
  const para=s.split(/\n\s*\n/)[0];
  const one=para.replace(/\s+/g," ").replace(/^[\s★]+/,"").replace(/^(\*(?!\*)\s*)+/,"").trim();
  const max=280;
  if(one.length<=max)return one;
  const chunk=one.slice(0,max);
  let cut=-1;
  [". ","? ","! "].forEach(function(sep){
    const j=chunk.lastIndexOf(sep);
    if(j>=Math.floor(max*0.45))cut=Math.max(cut,j+sep.length);
  });
  if(cut<0){
    const minKeep=Math.max(40,Math.floor(max*0.2));
    [" — "].forEach(function(sep){
      const j=chunk.lastIndexOf(sep);
      if(j>=minKeep)cut=Math.max(cut,j+sep.length);
    });
  }
  if(cut>0)return one.slice(0,cut).trim();
  const sp=chunk.lastIndexOf(" ");
  return (sp>0?chunk.slice(0,sp):chunk).replace(/[ ,;:—-]+$/,"")+"…";
}
function progressBar(prog){return '<span class="progress">'+STAGES.map(function(s){
  const st=(prog||{})[s]||"todo";
  return '<i title="'+s+': '+st+'" style="background:'+(STATUS_COLOR[st]||"#8a8880")+'">'+STAGE_LABEL[s]+'</i>';}).join("")+'</span>';}
function card(rep){
  const st=(rep.status||"—").replace(/\s/g,".");
  const title=rep.title||rep.experiment_id||"";
  const subRaw=String(rep.subtitle||"").trim();
  const subNorm=subRaw.replace(/\s+/g," ");
  const titleNorm=String(title).replace(/\s+/g," ");
  const idNorm=String(rep.experiment_id||"").replace(/ \| /g,"|");
  const subShow=subRaw && subNorm!==titleNorm && subNorm.replace(/ \| /g,"|")!==idNorm;
  const blurb=inlineMd(cardBlurb(rep.headline));
  return '<a class="card" href="'+escapeHtml(rep.href)+'">'
    +'<div class="card-top"><span class="badge s-'+st+'">'+escapeHtml(rep.status||"—")+'</span><span class="meta">'+escapeHtml(rep.date||"")+'</span></div>'
    +'<h3 class="idtitle">'+escapeHtml(title)+'</h3>'
    +(subShow?'<div class="subtitle">'+escapeHtml(subRaw)+'</div>':'')
    +'<div class="meta">'+escapeHtml([rep.task,rep.data_volume||rep.data_mix,rep.metadata_study].filter(Boolean).join(" · "))+'</div>'
    +(blurb?'<p class="headline">'+blurb+'</p>':'')
    +progressBar(rep.progress)
    +'<div class="arms">'+(rep.arms||[]).map(function(a){return '<span>'+escapeHtml(a)+'</span>';}).join("")+'</div></a>';}
/* Campaign dates are M-D (no leading zeros, no year). Lexicographic sort puts 8-5 before 8-10. */
function parseCampaignDate(d){
  const m=String(d||"").match(/^(\d{1,2})-(\d{1,2})$/);
  return m?[+m[1],+m[2]]:[0,0];
}
function cmpCampaignDateDesc(a,b){
  const [am,ad]=parseCampaignDate(a),[bm,bd]=parseCampaignDate(b);
  return (bm-am)||(bd-ad);
}
function cmpSortDesc(a,b,key){
  if(key==="date")return cmpCampaignDateDesc(a.date,b.date)||String(b.slug||"").localeCompare(String(a.slug||""));
  return String(b[key]||"").localeCompare(String(a[key]||""));
}
function render(reports){
  const q=document.getElementById("q").value;
  const groupBy=document.getElementById("groupBy").value;
  const sortBy=document.getElementById("sortBy").value;
  const active=[].slice.call(document.querySelectorAll(".chip.on")).map(function(c){return c.dataset.status;});
  let rows=reports.filter(function(r){return matches(r,q)&&(!active.length||active.indexOf(r.status)>=0);});
  const key={updated:"last_updated_utc",date:"date",status:"status",task:"task"}[sortBy]||"date";
  rows.sort(function(a,b){return cmpSortDesc(a,b,key);});
  const grid=document.getElementById("grid");
  if(!rows.length){grid.innerHTML='<p class="empty">No reports match.</p>';return;}
  if(groupBy==="none"){grid.innerHTML='<div class="cards">'+rows.map(card).join("")+'</div>';return;}
  const groups={};rows.forEach(function(r){const g=r[groupBy]||"(none)";(groups[g]=groups[g]||[]).push(r);});
  const gkeys=Object.keys(groups);
  gkeys.sort(groupBy==="date"?cmpCampaignDateDesc:undefined);
  grid.innerHTML=gkeys.map(function(g){
    return '<section><h2>'+g+'</h2><div class="cards">'+groups[g].map(card).join("")+'</div></section>';}).join("");}
loadReports().then(function(reports){
  const statuses=Array.from(new Set(reports.map(function(r){return r.status;}).filter(Boolean)));
  document.getElementById("filters").innerHTML=statuses.map(function(s){return '<button class="chip" data-status="'+s+'">'+s+'</button>';}).join("");
  document.querySelectorAll(".chip").forEach(function(c){c.onclick=function(){c.classList.toggle("on");render(reports);};});
  ["q","groupBy","sortBy"].forEach(function(id){document.getElementById(id).addEventListener("input",function(){render(reports);});});
  render(reports);
});
