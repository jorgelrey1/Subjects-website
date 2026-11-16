(function(){
'use strict';
var G=window.GRAM={data:{},topics:window.TOPICS||[]};
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function marked(m){return m.split(/(\[[^\]]*\])/).map(function(p){return p.charAt(0)==='['?'<mark>'+esc(p.slice(1,-1))+'</mark>':esc(p)}).join('')}
/* ---------- tema claro/oscuro ---------- */
var root=document.documentElement, th=ls('gr-theme'); if(th) root.setAttribute('data-theme',th);
function toggleTheme(){var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);var n=dark?'light':'dark';root.setAttribute('data-theme',n);ls('gr-theme',n)}
/* ---------- normalizacion y comparacion ---------- */
var HAD={};'better been known done seen gone taken given written eaten told said got left met paid heard had made found lost thought brought bought spoken broken chosen begun come run won sold sent kept felt held sat stood caught taught built spent lent drunk flown driven worn fallen forgotten hidden ridden shown thrown grown'.split(' ').forEach(function(w){HAD[w]=1});
var HAS={been:1,got:1,gone:1,had:1,done:1,already:1,just:1,never:1,ever:1,lost:1,left:1,taken:1,given:1,finished:1,become:1,made:1,seen:1};
function expand(w,next){
  w=w.toLowerCase(); var m;
  if(w==="can't"||w==='cannot')return['can','not'];
  if(w==="won't")return['will','not'];
  if(w==="shan't")return['shall','not'];
  if(w==="let's")return['let','us'];
  if((m=w.match(/^(.+)n't$/)))return[m[1],'not'];
  if((m=w.match(/^(.+)'re$/)))return[m[1],'are'];
  if((m=w.match(/^(.+)'m$/)))return[m[1],'am'];
  if((m=w.match(/^(.+)'ve$/)))return[m[1],'have'];
  if((m=w.match(/^(.+)'ll$/)))return[m[1],'will'];
  if((m=w.match(/^(.+)'d$/))){var nx=(next||'').toLowerCase().replace(/[^a-z]/g,'');var had=nx!=='rather'&&(HAD[nx]||/ed$/.test(nx));return[m[1],had?'had':'would']}
  if((m=w.match(/^(he|she|it|that|there|what|who|where|here|how)'s$/))){var n2=(next||'').toLowerCase().replace(/[^a-z]/g,'');return[m[1],HAS[n2]?'has':'is']}
  return[w];
}
/* tokeniza; punct=true conserva , ; como unidades comparables */
function tokenize(s,punct){
  s=(s||'').replace(/[’‘´`]/g,"'").replace(/[“”]/g,'"').trim();
  var raw=s.split(/\s+/).filter(Boolean), toks=[], seq=[];
  raw.forEach(function(r){
    var core=r.replace(/^[.,;:!?"()\-–—]+/,'').replace(/[.,;:!?"()]+$/,'');
    var trail=core?r.slice(r.lastIndexOf(core)+core.length):r;
    toks.push({d:r,core:core,trail:trail});
  });
  toks.forEach(function(t,i){
    var nx=toks[i+1]?toks[i+1].core:''; t.u=t.core?expand(t.core,nx):[];
    t.u=t.u.map(function(x){return x.replace(/^'+|'+$/g,'')}).filter(Boolean);
    t.u.forEach(function(k){seq.push({k:k,di:i})});
    if(punct){var m=t.trail.match(/[,;]/g);if(m)m.forEach(function(c){seq.push({k:c,di:i,p:1})})}
  });
  return {toks:toks,seq:seq};
}
function keys(s){return tokenize(s,false).seq.map(function(x){return x.k})}
function same(a,b){if(a.length!==b.length)return false;for(var i=0;i<a.length;i++)if(a[i].k!==b[i].k)return false;return true}
function lcsOps(a,b){ /* a=alumno, b=modelo */
  var n=a.length,m=b.length,i,j,L=[];
  for(i=0;i<=n;i++){L.push(new Array(m+1).fill(0))}
  for(i=n-1;i>=0;i--)for(j=m-1;j>=0;j--)L[i][j]=a[i].k===b[j].k?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  var ops=[];i=0;j=0;
  while(i<n&&j<m){
    if(a[i].k===b[j].k){ops.push({t:'eq',a:a[i]});i++;j++}
    else if(L[i+1][j]>=L[i][j+1]){ops.push({t:'del',a:a[i]});i++}
    else{ops.push({t:'ins',b:b[j]});j++}
  }
  while(i<n){ops.push({t:'del',a:a[i++]})}
  while(j<m){ops.push({t:'ins',b:b[j++]})}
  return ops;
}
function dist(ops){var d=0;ops.forEach(function(o){if(o.t!=='eq')d++});return d}
/* une el comienzo dado con lo escrito, sin duplicarlo si el alumno lo ha pegado */
function fullText(start,rest){
  if(!start)return rest;
  var us=keys(start), ur=keys(rest), pre=ur.length>=us.length;
  var EQ={is:'s',has:'s',would:'d',had:'d'};
  if(pre)for(var i=0;i<us.length;i++)if(us[i]!==ur[i]&&!(EQ[us[i]]&&EQ[us[i]]===EQ[ur[i]])){pre=false;break}
  return pre?rest:start+' '+rest;
}
function check(item,typed){
  if(!keys(typed).length)return {r:'empty'};
  var pun=/p/.test(item.fl||'');
  var user=tokenize(fullText(item.s,typed),pun), raw=tokenize(typed,pun), best=null;
  for(var i=0;i<item.a.length;i++){
    var a=item.a[i], full=a.charAt(0)==='=';
    /* respuestas que empiezan por "=" son frases completas (no usan el comienzo dado) */
    var mod=tokenize(full?a.slice(1):(item.s?item.s+' ':'')+a,pun), u=full?raw:user;
    if(same(u.seq,mod.seq))return {r:'ok'};
    var ops=lcsOps(u.seq,mod.seq), d=dist(ops);
    if(!best||d<best.d)best={d:d,ops:ops,i:i,mod:mod,u:u};
  }
  return {r:'no',best:best,user:best.u};
}
function renderDiff(res){
  var bad={}, out=[], seen={}, extra=[], falta=[];
  res.best.ops.forEach(function(o){if(o.t==='del'){bad[o.a.di]=1;extra.push(o.a.k)}else if(o.t==='ins')falta.push(o.b.k)});
  res.best.ops.forEach(function(o){
    if(o.t==='ins'){out.push('<ins>＋'+esc(o.b.k)+'</ins>');return}
    var di=o.a.di; if(seen[di])return; seen[di]=1;
    var d=res.user.toks[di].d;
    out.push(bad[di]?'<del>'+esc(d)+'</del>':esc(d));
  });
  var msg=[];
  if(extra.length)msg.push('Sobra o está mal: <b>'+esc(extra.join(' '))+'</b>');
  if(falta.length)msg.push('Falta: <b>'+esc(falta.join(' '))+'</b>');
  return {html:out.join(' '),msg:msg.join(' · ')};
}
G.check=check;
/* ---------- estado guardado ---------- */
function loadState(id){try{return JSON.parse(ls('gr-'+id)||'{}')}catch(e){return {}}}
function saveState(id,st){ls('gr-'+id,JSON.stringify(st))}
G.stateOf=function(id,d){
  var st=loadState(id), ok=0,no=0,tot=0;
  ['clase','extra','evau'].forEach(function(sec){(d[sec]||[]).forEach(function(it,i){
    tot++; var s=st[sec+i]; if(!s)return;
    if(s.o){ok++;return}
    var r=check(it,s.a||''); if(r.r==='ok')ok++; else if(r.r==='no')no++;
  })});
  return {ok:ok,no:no,tot:tot};
};
/* ---------- registro de datos ---------- */
G.register=function(id,d){
  function norm(a,ev){return a.map(function(x){
    var o=ev?{e:x[0],q:x[1],s:x[2],a:x[3],n:x[4],fl:x[5]}:{q:x[0],s:x[1],a:x[2],n:x[3],fl:x[4]};
    o.s=o.s||''; return o});}
  d.clase=norm(d.clase||[],false); d.extra=norm(d.extra||[],false); d.evau=norm(d.evau||[],true);
  G.data[id]=d;
};
/* ---------- pintar ---------- */
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function bar(cur){
  var h='<header class="bar"><div class="bar-in"><a class="brand" href="index.html">📗 Gramática</a><nav class="nav"><a href="index.html">🏠 Inicio</a><select id="jump" aria-label="Ir a otro tema"><option value="">Ir a otro tema…</option>';
  G.topics.forEach(function(t){h+='<option value="'+t.id+'.html"'+(t.id===cur?' selected':'')+'>'+t.n+'. '+esc(t.title)+'</option>'});
  h+='</select></nav><button type="button" class="ib" id="themebtn" title="Claro / oscuro" aria-label="Cambiar tema claro u oscuro">🌓</button></div></header>';
  return h;
}
function wireBar(){
  var tb=document.getElementById('themebtn'); if(tb)tb.addEventListener('click',toggleTheme);
  var j=document.getElementById('jump'); if(j)j.addEventListener('change',function(){if(j.value)location.href=j.value});
}
G.initIndex=function(){
  var app=document.getElementById('app');
  var h=bar('')+'<main class="wrap"><div class="hero"><h1>Gramática y Use of English</h1><p>Materiales del cuaderno de clase pasados a la web. En cada tema encuentras la <b>teoría</b>, los <b>ejercicios de clase</b>, <b>ejercicios extra</b> nuevos y los <b>ejercicios de PAU</b> del cuaderno. Escribes la respuesta, la página la corrige y te marca <b>en qué has fallado</b>.</p></div><section><h2>Temas</h2><div class="tiles" style="margin-top:12px" id="tiles"></div></section>';
  h+='<section class="box tip"><h3>Cómo se corrige</h3><ul style="margin:6px 0;padding-left:1.2rem"><li>Escribes <b>solo lo que falta</b>: la frase empieza con las palabras que da el cuaderno. Si pegas la frase entera, también vale.</li><li>Da igual mayúsculas, punto final y contracciones (<i>isn’t</i> = <i>is not</i>). En los ejercicios donde las comas o el punto y coma importan, se tienen en cuenta.</li><li>Si fallas, ves tu frase con lo que <del style="color:var(--bad)">sobra</del> o está mal y lo que <ins style="color:var(--good);text-decoration:none"><b>＋falta</b></ins>, más la respuesta modelo.</li><li>Puede haber otras respuestas correctas que la página no conozca: si crees que la tuya vale, pulsa <b>«Mi respuesta también es válida»</b> o consúltalo con la profesora.</li><li>Tu progreso se guarda <b>solo en este navegador</b>.</li></ul><p style="margin-top:8px"><button class="btn ghost sm" id="resetall" type="button">Borrar todo mi progreso</button></p></section>';
  h+='<p class="foot">Los ejercicios de PAU son los del cuaderno (con la convocatoria al lado). Las respuestas modelo las he redactado yo: no son las oficiales.</p></main>';
  app.innerHTML=h; wireBar();
  var tiles=document.getElementById('tiles');
  G.topics.forEach(function(t){
    var d=G.data[t.id]; if(!d)return;
    var s=G.stateOf(t.id,d);
    var a=el('a','tile');a.href=t.id+'.html';a.style.setProperty('--h',t.h);
    a.innerHTML='<h3><span class="num">'+t.n+'</span> '+t.icon+' '+esc(t.title)+'</h3><p>'+esc(t.blurb)+'</p><div class="cnt">'+d.clase.length+' de clase · '+d.extra.length+' extra · '+d.evau.length+' PAU</div><div class="meter" title="'+s.ok+' bien · '+s.no+' mal"><i style="width:'+(s.tot?Math.round(100*s.ok/s.tot):0)+'%"></i></div><div class="cnt">'+s.ok+' acertados de '+s.tot+'</div>';
    tiles.appendChild(a);
  });
  document.getElementById('resetall').addEventListener('click',function(){if(confirm('¿Borrar todas las respuestas guardadas en este navegador?')){G.topics.forEach(function(t){try{localStorage.removeItem('gr-'+t.id)}catch(e){}});location.reload()}});
};
G.initTopic=function(id){
  var d=G.data[id], t=G.topics.filter(function(x){return x.id===id})[0], app=document.getElementById('app');
  if(!d||!t){app.textContent='No se han cargado los datos del tema.';return}
  document.documentElement.style.setProperty('--h',t.h);
  var i=G.topics.indexOf(t), prev=G.topics[i-1], next=G.topics[i+1];
  var pn='<div class="pn">'+(prev?'<a href="'+prev.id+'.html">← '+prev.n+'. '+esc(prev.title)+'</a>':'<span></span>')+(next?'<a href="'+next.id+'.html">'+next.n+'. '+esc(next.title)+' →</a>':'<span></span>')+'</div>';
  var h=bar(id)+'<main class="wrap"><div class="thead"><div class="k">Tema '+t.n+' de '+G.topics.length+'</div><h1>'+t.icon+' '+esc(t.title)+'</h1></div>';
  h+='<nav class="tabs" aria-label="Secciones del tema"><a href="#teoria">📘 Teoría</a>'+(d.clase.length?'<a href="#clase">📄 De clase ('+d.clase.length+')</a>':'')+(d.extra.length?'<a href="#extra">✨ Extra ('+d.extra.length+')</a>':'')+'<a href="#evau">🎓 PAU ('+d.evau.length+')</a></nav>';
  h+='<section class="sec" id="teoria"><h2>📘 Teoría</h2><div class="theory">'+d.theory+'</div></section>';
  var secs=[['clase','📄 Ejercicios de clase','cl','Del cuaderno'],['extra','✨ Ejercicios extra','nu','Nuevos'],['evau','🎓 Ejercicios de PAU','ev','Examen real']];
  secs.forEach(function(s){ if(!d[s[0]].length)return; h+='<section class="sec" id="'+s[0]+'"><h2>'+s[1]+' <span class="pill '+s[2]+'">'+s[3]+'</span></h2><div id="host-'+s[0]+'"></div></section>'; });
  h+=pn+'</main>';
  app.innerHTML=h; wireBar();
  var st=loadState(id);
  secs.forEach(function(s){ if(d[s[0]].length)buildSec(id,s[0],d,st); });
  if(location.hash){var e=document.getElementById(location.hash.slice(1)); if(e)e.scrollIntoView()}
};
function buildSec(id,sec,d,st){
  var host=document.getElementById('host-'+sec), items=d[sec], rule=d.rule||'';
  var intro=sec==='extra'?'<p class="muted small" style="margin-bottom:8px">Ejercicios nuevos para practicar más este tema. No son de examen real.</p>':(sec==='evau'?'<p class="muted small" style="margin-bottom:8px">Frases reales de los exámenes, tal como están en el cuaderno (junto a cada una, la convocatoria).</p>':'');
  host.innerHTML=intro+'<div class="sbar"><span class="sc" id="sc-'+sec+'"></span><div class="sp meter"><i id="mt-'+sec+'"></i></div><div class="filt" role="group" aria-label="Filtrar"><button type="button" data-f="all" aria-pressed="true">Todos</button><button type="button" data-f="pend" aria-pressed="false">Pendientes</button><button type="button" data-f="no" aria-pressed="false">Fallados</button></div><button type="button" class="btn sm" data-act="all">Comprobar todo</button><button type="button" class="btn ghost sm" data-act="reset">Reiniciar</button></div><ol class="qs" style="margin-top:10px"></ol>';
  var ol=host.querySelector('ol'), lis=[], filter='all';
  items.forEach(function(it,i){
    var li=el('li','q'); li.id=sec+i;
    var src=sec==='evau'?'<span class="src">'+esc(it.e)+'</span>':'';
    li.innerHTML='<div class="qn">'+(i+1)+'</div><div class="qb"><div class="orig">'+marked(it.q)+' '+src+'</div><div class="ans">'+(it.s?'<span class="start">'+esc(it.s)+'</span>':'')+'<input type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Respuesta '+(i+1)+'" placeholder="'+(it.s?'sigue la frase…':'escribe la frase completa…')+'"><button type="button" class="btn sm" data-a="chk">Comprobar</button><button type="button" class="btn ghost sm" data-a="sol">Solución</button></div><div class="fb" aria-live="polite"></div></div>';
    var s=st[sec+i]; if(s&&s.a)li.querySelector('input').value=s.a;
    ol.appendChild(li); lis.push(li);
  });
  function status(i){var s=st[sec+i]; if(!s)return ''; if(s.o)return 'ok'; if(!s.a)return ''; var r=check(items[i],s.a); return r.r==='ok'?'ok':(r.r==='no'?'no':'')}
  function full(it,a){return a.charAt(0)==='='?a.slice(1):(it.s?it.s+' ':'')+a}
  function modelHtml(it){
    var m='<div class="model"><b>Respuesta modelo:</b> '+esc(full(it,it.a[0]))+'</div>';
    if(it.a.length>1)m+='<div class="note" style="margin-top:2px">Otras formas válidas: '+it.a.slice(1,4).map(function(a){return '<i>'+esc(full(it,a))+'</i>'}).join(' · ')+'</div>';
    return m;
  }
  function paint(i,mode){
    var li=lis[i], it=items[i], fb=li.querySelector('.fb'), inp=li.querySelector('input'), s=st[sec+i]||{};
    var stt=status(i); li.classList.remove('ok','no'); if(stt)li.classList.add(stt);
    if(mode==='sol'){fb.innerHTML=modelHtml(it)+(it.n?'<div class="note">'+esc(it.n)+'</div>':'');return}
    var r=check(it,inp.value);
    if(r.r==='empty'){fb.innerHTML='<span class="v w">Escribe tu respuesta primero</span>';return}
    if(r.r==='ok'){fb.innerHTML='<span class="v g">✔ ¡Correcto!</span>'+(it.n?'<div class="note">'+esc(it.n)+'</div>':'');return}
    if(s.o){fb.innerHTML='<span class="v g">✔ Marcada como válida</span>'+modelHtml(it);return}
    var df=renderDiff(r);
    fb.innerHTML='<span class="v b">✘ Revisa esto</span><div class="diff">'+df.html+'</div>'+(df.msg?'<div>'+df.msg+'</div>':'')+modelHtml(it)+(it.n?'<div class="note">'+esc(it.n)+'</div>':'')+(rule?'<div class="rule">'+rule+'</div>':'')+'<div class="self"><button type="button" class="btn ghost sm" data-a="own">Mi respuesta también es válida</button></div>';
  }
  function applyFilter(){lis.forEach(function(li,i){var s=status(i);var hide=(filter==='pend'&&s)||(filter==='no'&&s!=='no');li.classList.toggle('hid',!!hide)})}
  function update(){
    var ok=0,no=0; items.forEach(function(_,i){var s=status(i);if(s==='ok')ok++;else if(s==='no')no++});
    document.getElementById('sc-'+sec).textContent='✔ '+ok+' · ✘ '+no+' · '+(items.length-ok-no)+' pendientes de '+items.length;
    document.getElementById('mt-'+sec).style.width=Math.round(100*ok/items.length)+'%';
    applyFilter();
  }
  function doCheck(i){
    var inp=lis[i].querySelector('input');
    st[sec+i]={a:inp.value}; saveState(id,st); paint(i,true); update(); return status(i);
  }
  host.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b)return;
    var f=b.getAttribute('data-f'); if(f){filter=f;host.querySelectorAll('[data-f]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});applyFilter();return}
    var act=b.getAttribute('data-act');
    if(act==='all'){items.forEach(function(_,i){if(lis[i].querySelector('input').value.trim())doCheck(i)});return}
    if(act==='reset'){if(!confirm('¿Borrar tus respuestas de esta sección?'))return;items.forEach(function(_,i){delete st[sec+i];lis[i].querySelector('input').value='';lis[i].querySelector('.fb').innerHTML='';lis[i].classList.remove('ok','no')});saveState(id,st);update();return}
    var li=b.closest('li.q'); if(!li)return; var i=lis.indexOf(li), a=b.getAttribute('data-a');
    if(a==='chk')doCheck(i);
    else if(a==='sol'){var fb=li.querySelector('.fb'); if(fb.querySelector('.model')&&!fb.querySelector('.diff')&&!fb.querySelector('.v')){fb.innerHTML=''}else paint(i,'sol')}
    else if(a==='own'){st[sec+i]={a:li.querySelector('input').value,o:1};saveState(id,st);paint(i,true);update()}
  });
  host.addEventListener('keydown',function(e){
    if(e.key!=='Enter'||e.target.tagName!=='INPUT')return;
    var li=e.target.closest('li.q'),i=lis.indexOf(li), r=doCheck(i);
    if(r==='ok'){for(var j=i+1;j<lis.length;j++){if(!lis[j].classList.contains('hid')){lis[j].querySelector('input').focus();break}}}
  });
  items.forEach(function(_,i){if(st[sec+i]&&st[sec+i].a)paint(i,true)});
  update();
}
})();
