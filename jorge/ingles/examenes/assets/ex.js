(function(){
'use strict';
var E=window.EX={};
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function marked(m){return m.split(/(\[[^\]]*\])/).map(function(p){return p.charAt(0)==='['?'<mark>'+esc(p.slice(1,-1))+'</mark>':esc(p)}).join('')}
/* ---------- tema claro/oscuro ---------- */
var root=document.documentElement, th=ls('ex-theme'); if(th) root.setAttribute('data-theme',th);
function toggleTheme(){var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);var n=dark?'light':'dark';root.setAttribute('data-theme',n);ls('ex-theme',n)}
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

/* ================= EXAMENES: datos y estado ================= */
var EXAMS=window.EXAMS_LIST||[];
E.exams={};
E.register=function(id,d){E.exams[id]=d};
function loadSt(id){try{return JSON.parse(ls('ex-'+id)||'{}')}catch(e){return {}}}
function saveSt(id,st){ls('ex-'+id,JSON.stringify(st))}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function wordsOf(s){return (s||'').toLowerCase().replace(/[’‘´`]/g,"'").split(/[^a-z0-9']+/).filter(Boolean)}
function pad(n){return (n<10?'0':'')+n}
function fmt(x){return (Math.round(x*100)/100).toString().replace('.',',')}
function topBar(title,back){
  return '<header class="bar"><div class="bar-in"><a class="brand" href="index.html">📝 Exámenes PAU</a><nav class="nav">'+
    (back?'<a href="index.html">🏠 Inicio</a>':'')+(title?'<span class="small muted bt">'+esc(title)+'</span>':'')+'</nav>'+
    '<span id="tbox" class="tbox" hidden></span><button type="button" class="ib" id="themebtn" title="Claro / oscuro" aria-label="Cambiar tema claro u oscuro">🌓</button></div></header>';
}
function wireTheme(){var tb=document.getElementById('themebtn'); if(tb)tb.addEventListener('click',toggleTheme)}

/* ================= PORTADA ================= */
E.initIndex=function(){
  var app=document.getElementById('app'), h=topBar('',false)+'<main class="wrap"><div class="hero"><h1>Exámenes reales de PAU</h1><p>Exámenes completos de la UCLM (Castilla-La Mancha), transcritos tal cual del original escaneado. Se hacen como el examen de verdad: <b>1 h 30 min</b>, cuatro partes y una redacción. Escribes las respuestas, pulsas <b>Corregir</b> y la página te dice qué has acertado, dónde has fallado y cuántos puntos llevas.</p></div><section><h2>Exámenes</h2><div class="tiles" style="margin-top:12px" id="tiles"></div></section>';
  h+='<section class="box tip"><h3>Cómo funciona</h3><ul style="margin:6px 0;padding-left:1.2rem"><li><b>Parte I (Reading, 2 puntos):</b> verdadero o falso <b>y</b> copiar del texto la frase que lo demuestra. Sin la evidencia no hay puntos, como en el examen.</li><li><b>Parte II (Lexicon y Phonetics, 2 puntos):</b> sinónimos del texto y preguntas de pronunciación.</li><li><b>Parte III (Use of English, 3 puntos):</b> 9 frases, se corrigen <b>solo las 6 primeras</b> que respondas.</li><li><b>Parte IV (Writing, 3 puntos):</b> redacción de 150 palabras como mínimo. La página cuenta palabras y avisa de errores típicos, pero <b>no puede ponerle nota</b>: hay un botón que prepara la redacción para que te la corrijan.</li></ul><p class="small muted" style="margin-top:8px">Las respuestas correctas las he deducido yo del texto y de la gramática; <b>no son las oficiales</b> de la UCLM. Si una respuesta tuya correcta sale como fallo, pulsa «Mi respuesta también es válida».</p><p style="margin-top:8px"><button class="btn ghost sm" id="resetall" type="button">Borrar todo mi progreso</button></p></section></main>';
  app.innerHTML=h; wireTheme();
  var tiles=document.getElementById('tiles');
  EXAMS.forEach(function(x){
    var d=E.exams[x.id]; if(!d)return; var st=loadSt(x.id), sc=score(d,st);
    var a=el('a','tile'); a.href=x.id+'.html'; a.style.setProperty('--h',x.h);
    a.innerHTML='<h3>'+x.icon+' '+esc(x.title)+'</h3><p>'+esc(d.reading.title)+'</p><div class="cnt">Curso 2025/2026 · 90 minutos</div><div class="cnt">'+(st.done?'Última corrección: <b>'+fmt(sc.auto)+' / 7</b> en las partes I–III':'Sin corregir todavía')+'</div>';
    tiles.appendChild(a);
  });
  document.getElementById('resetall').addEventListener('click',function(){if(confirm('¿Borrar todos los exámenes guardados en este navegador?')){EXAMS.forEach(function(x){try{localStorage.removeItem('ex-'+x.id)}catch(e){}});location.reload()}});
};

/* ================= CORRECCION ================= */
/* evidencia: la que copia el alumno debe salir del texto y coincidir con la del modelo */
function evidenceOk(d,typed,item){
  var ut=wordsOf(typed); if(ut.length<3)return {ok:false,why:'short'};
  var textSet={}; d.reading.lines.forEach(function(l){wordsOf(l).forEach(function(w){textSet[w]=1})});
  var inText=ut.filter(function(w){return textSet[w]}).length/ut.length;
  if(inText<.8)return {ok:false,why:'notcopied'};
  var uset={}; ut.forEach(function(w){uset[w]=1});
  for(var i=0;i<item.ev.length;i++){
    var mt=wordsOf(item.ev[i].t).filter(function(w){return w.length>2||true});
    var cov=mt.filter(function(w){return uset[w]}).length/mt.length;
    if(cov>=.6)return {ok:true};
  }
  return {ok:false,why:'other'};
}
function gradeTF(d,st,i){
  var it=d.tf[i], s=(st.tf&&st.tf[i])||{}, max=.5;
  if(!s.v)return {pts:0,max:max,empty:1,html:'<span class="v w">Sin responder</span>'+tfModel(it)};
  var right=(s.v==='T')===it.v, ev=(s.e||'').trim();
  var own=st.own&&st.own['tf'+i];
  var e=evidenceOk(d,ev,it);
  if(right&&(e.ok||own))return {pts:max,max:max,ok:1,html:'<span class="v g">✔ +0,5</span> '+(own&&!e.ok?'<i>Evidencia aceptada por ti.</i>':'Correcto: '+(it.v?'TRUE':'FALSE')+' y evidencia válida.')+tfModel(it,1)};
  var m='<span class="v b">✘ 0</span> ';
  if(!right)m+='La respuesta es <b>'+(it.v?'TRUE':'FALSE')+'</b>, no '+(s.v==='T'?'TRUE':'FALSE')+'. ';
  else if(!ev)m+='Has acertado <b>'+(it.v?'TRUE':'FALSE')+'</b>, pero <b>falta la evidencia</b>: sin copiar la frase del texto no hay puntos (como en el examen). ';
  else if(e.why==='notcopied')m+='Has acertado '+(it.v?'TRUE':'FALSE')+', pero la evidencia <b>no está copiada del texto</b>. Hay que copiar la frase tal cual, no explicarla con tus palabras. ';
  else m+='Has acertado '+(it.v?'TRUE':'FALSE')+', pero esa frase del texto <b>no demuestra</b> la respuesta. ';
  return {pts:0,max:max,html:m+tfModel(it,1)+(right?'<div class="self"><button type="button" class="btn ghost sm" data-own="tf'+i+'">Mi evidencia también vale</button></div>':'')};
}
function tfModel(it,show){
  return '<div class="model"><b>Respuesta modelo:</b> '+(it.v?'TRUE':'FALSE')+' — <i>“'+esc(it.ev[0].t)+'”</i> <span class="src">línea'+(/[–-]/.test(it.ev[0].l)?'s ':' ')+esc(it.ev[0].l)+'</span></div>'+(it.why?'<div class="note">'+esc(it.why)+'</div>':'');
}
function normWord(s){return (s||'').toLowerCase().replace(/[’‘´`]/g,"'").replace(/[^a-z' -]/g,'').replace(/\s+/g,' ').trim()}
function gradeLex(d,st,i){
  var it=d.lex[i], v=(st.lex&&st.lex[i])||'', max=.25;
  if(!normWord(v))return {pts:0,max:max,empty:1,html:'<span class="v w">Sin responder</span>'+lexModel(it)};
  var okw=it.a.indexOf(normWord(v))>=0, own=st.own&&st.own['lex'+i];
  if(okw||own)return {pts:max,max:max,ok:1,html:'<span class="v g">✔ +0,25</span> '+(own&&!okw?'Aceptada por ti.':'Correcto.')+lexModel(it,1)};
  return {pts:0,max:max,html:'<span class="v b">✘ 0</span> «'+esc(v)+'» no coincide con lo esperado.'+lexModel(it)+'<div class="self"><button type="button" class="btn ghost sm" data-own="lex'+i+'">Mi respuesta también es válida</button></div>'};
}
function lexModel(it,short){
  var extra=it.a.filter(function(x){return x!==it.a[0]}).slice(0,4);
  return '<div class="model"><b>Sinónimo:</b> '+esc(it.a[0])+(it.from?' <span class="src">'+esc(it.from)+'</span>':'')+'</div>'+(extra.length&&!short?'<div class="note">También valen: '+esc(extra.join(', '))+'</div>':'');
}
function lineWords(d){ /* palabra -> lineas donde aparece */
  var map={}; d.reading.lines.forEach(function(l,i){wordsOf(l.replace(/[—–]/g,' ')).forEach(function(w){(map[w]=map[w]||[]);if(map[w].indexOf(i+1)<0)map[w].push(i+1)})}); return map;
}
function gradePho(d,st,i){
  var it=d.pho[i], s=(st.pho&&st.pho[i]), max=.25;
  if(it.type==='diph'){
    s=s||{}; var w=normWord(s.w||''), ln=parseInt(s.l,10);
    var model='<div class="model"><b>Por ejemplo:</b> '+it.examples.map(function(x){return esc(x)}).join(' · ')+'</div><div class="note">'+esc(it.why||'')+'</div>';
    if(!w||!ln)return {pts:0,max:max,empty:1,html:'<span class="v w">Escribe la palabra <b>y</b> el número de línea</span>'+model};
    var okw=it.words.indexOf(w)>=0, lines=lineWords(d)[w]||[];
    if(okw&&lines.indexOf(ln)>=0)return {pts:max,max:max,ok:1,html:'<span class="v g">✔ +0,25</span> «'+esc(w)+'» tiene el sonido '+esc(it.sound)+' y está en la línea '+ln+'.'+model};
    var m='<span class="v b">✘ 0</span> ';
    if(!okw)m+='«'+esc(w)+'» no tiene el sonido '+esc(it.sound)+' (o no está entre las palabras que he previsto). ';
    else m+='«'+esc(w)+'» sí tiene el sonido, pero <b>no está en la línea '+ln+'</b>. Aparece en la línea '+lines.join(', ')+'. ';
    var own=st.own&&st.own['pho'+i];
    if(own)return {pts:max,max:max,ok:1,html:'<span class="v g">✔ +0,25</span> Aceptada por ti.'+model};
    return {pts:0,max:max,html:m+model+'<div class="self"><button type="button" class="btn ghost sm" data-own="pho'+i+'">Mi respuesta también es válida</button></div>'};
  }
  if(!s)return {pts:0,max:max,empty:1,html:'<span class="v w">Sin responder</span><div class="model"><b>Respuesta:</b> '+esc(it.a)+'</div><div class="note">'+esc(it.why)+'</div>'};
  if(s===it.a)return {pts:max,max:max,ok:1,html:'<span class="v g">✔ +0,25</span> '+esc(it.a)+'<div class="note">'+esc(it.why)+'</div>'};
  return {pts:0,max:max,html:'<span class="v b">✘ 0</span> Has marcado '+esc(s)+'.<div class="model"><b>Respuesta:</b> '+esc(it.a)+'</div><div class="note">'+esc(it.why)+'</div>'};
}
function uoeItem(d,i){var u=d.uoe[i];return {s:u[0],a:u[1],n:u[2]}}
function uoeAnswered(st,i){return !!(st.uoe&&st.uoe[i]&&keys(st.uoe[i]).length)}
function uoeCounted(d,st){ /* indices de las 6 primeras respondidas */
  var c=[]; for(var i=0;i<d.uoe.length;i++)if(uoeAnswered(st,i)&&c.length<6)c.push(i); return c;
}
function fullOf(it,a){return a.charAt(0)==='='?a.slice(1):(it.s?it.s+' ':'')+a}
function gradeUoe(d,st,i){
  var it=uoeItem(d,i), max=.5, counted=uoeCounted(d,st).indexOf(i)>=0, typed=(st.uoe&&st.uoe[i])||'';
  var rule=d.uoeRules&&d.uoeRules[i]; var ruleH=rule?'<div class="rule">'+rule+'</div>':'';
  function model(){var m='<div class="model"><b>Respuesta modelo:</b> '+esc(fullOf(it,it.a[0]))+'</div>';if(it.a.length>1)m+='<div class="note" style="margin-top:2px">Otras válidas: '+it.a.slice(1,3).map(function(a){return '<i>'+esc(fullOf(it,a))+'</i>'}).join(' · ')+'</div>';return m+(it.n?'<div class="note">'+esc(it.n)+'</div>':'')}
  if(!uoeAnswered(st,i))return {pts:0,max:max,empty:1,skip:1,html:'<span class="v w">No respondida · no puntúa</span>'};
  var r=check(it,typed), own=st.own&&st.own['uoe'+i];
  var okk=r.r==='ok'||own;
  var tag=counted?'':' <span class="v w">Extra: no puntúa (solo se corrigen las 6 primeras)</span>';
  if(okk)return {pts:counted?max:0,max:max,ok:1,extra:!counted,html:'<span class="v g">✔ '+(counted?'+0,5':'0 (extra)')+'</span>'+(own&&r.r!=='ok'?' Aceptada por ti.':' ¡Correcto!')+tag+(it.n?'<div class="note">'+esc(it.n)+'</div>':'')};
  var df=renderDiff(r);
  return {pts:0,max:max,extra:!counted,html:'<span class="v b">✘ 0</span>'+tag+'<div class="diff">'+df.html+'</div>'+(df.msg?'<div>'+df.msg+'</div>':'')+model()+ruleH+'<div class="self"><button type="button" class="btn ghost sm" data-own="uoe'+i+'">Mi respuesta también es válida</button></div>'};
}
function score(d,st){
  var r={p1:0,p2:0,p3:0,auto:0,wr:null};
  d.tf.forEach(function(_,i){r.p1+=gradeTF(d,st,i).pts});
  d.lex.forEach(function(_,i){r.p2+=gradeLex(d,st,i).pts});
  d.pho.forEach(function(_,i){r.p2+=gradePho(d,st,i).pts});
  d.uoe.forEach(function(_,i){r.p3+=gradeUoe(d,st,i).pts});
  r.auto=r.p1+r.p2+r.p3;
  var g=parseFloat(((st.wr&&st.wr.grade)||'').toString().replace(',','.'));
  if(!isNaN(g)&&g>=0&&g<=3)r.wr=g;
  return r;
}

/* ================= REDACCION: avisos automaticos ================= */
var CONN=['however','moreover','in addition','furthermore','firstly','secondly','finally','on the one hand','on the other hand','in conclusion','to sum up','to conclude','as a result','therefore','for example','for instance','besides','although','even though','despite','whereas','while','because','in my opinion','i believe','i think','in my view','nevertheless','as long as','unless','if '];
var COMMON=[
 [/\bin the other hand\b/i,'«in the other hand» → <b>on the other hand</b>'],
 [/\bpeople is\b/i,'«people is» → <b>people are</b>'],
 [/\bpeoples\b/i,'«peoples» → <b>people</b>'],
 [/\bmore better\b|\bmore easier\b|\bmore bigger\b/i,'No se dice «more better / more easier»: <b>better / easier</b>'],
 [/\bI am agree\b/i,'«I am agree» → <b>I agree</b>'],
 [/\bdepends? of\b/i,'«depend of» → <b>depend on</b>'],
 [/\bmake sports?\b/i,'«make sport» → <b>do sport</b>'],
 [/\bdiscuss about\b/i,'«discuss about» → <b>discuss</b> (sin about)'],
 [/\bhave \d+ years\b/i,'«have 15 years» → <b>am 15 years old</b>'],
 [/\bI can to\b|\bcan to\b/i,'Después de «can» no va «to»'],
 [/\bdont\b|\bcant\b|\bdoesnt\b|\bisnt\b|\bwont\b|\bdidnt\b/i,'Falta el apóstrofo (don’t, can’t…) — y en un texto formal mejor <b>do not, cannot</b>'],
 [/\balot\b/i,'«alot» → <b>a lot</b>'],
 [/\bthe mobiles?\b(?! phones?)/i,'«mobile» solo → <b>mobile phone</b>'],
 [/\bmore and more people\b/i,null],
 [/\bsince \d+ years\b/i,'«since 3 years» → <b>for 3 years</b>'],
 [/(^|[.!?]\s+)i\s/m,'El pronombre <b>I</b> siempre va en mayúscula'],
 [/\b(a|an) (\w+s)\b(?=\s+(are|were|have)\b)/i,null]
];
var STOP='the a an and or but of to in on at for with is are was were be been it this that these those they them their he she his her we you your i my me our not no do does did have has had will would can could may might should as by from so if than then there here what which who when where how also very more most much many some any all one'.split(' ');
function analyse(text,minw){
  var words=text.match(/[A-Za-z’'][A-Za-z’'-]*/g)||[], n=words.length;
  var paras=text.split(/\n\s*\n/).map(function(p){return p.trim()}).filter(Boolean);
  var lower=' '+text.toLowerCase().replace(/[’]/g,"'")+' ', found=[];
  CONN.forEach(function(c){if(lower.indexOf(c.charAt(c.length-1)===' '?' '+c:' '+c+' ')>=0||lower.indexOf(' '+c.trim()+',')>=0||lower.indexOf(' '+c.trim()+' ')>=0)if(found.indexOf(c.trim())<0)found.push(c.trim())});
  var cnt={}; words.forEach(function(w){w=w.toLowerCase();if(STOP.indexOf(w)<0&&w.length>3)cnt[w]=(cnt[w]||0)+1});
  var rep=Object.keys(cnt).filter(function(w){return cnt[w]>=5}).sort(function(a,b){return cnt[b]-cnt[a]}).slice(0,5).map(function(w){return w+' ×'+cnt[w]});
  var sents=text.split(/[.!?]+/).map(function(s){return s.trim()}).filter(Boolean);
  var long=sents.filter(function(s){return (s.match(/\S+/g)||[]).length>35}).length;
  var contr=(text.match(/\b\w+['’](t|s|re|ve|ll|d|m)\b/gi)||[]).length;
  var warns=[]; COMMON.forEach(function(c){if(c[1]&&c[0].test(text))warns.push(c[1])});
  var avg=sents.length?Math.round(n/sents.length):0;
  return {n:n,paras:paras.length,conn:found,rep:rep,long:long,contr:contr,warns:warns,sents:sents.length,avg:avg};
}
function wrReport(a,minw){
  function row(ok,txt){return '<li class="'+(ok?'g':'b')+'">'+(ok?'✔':'✘')+' '+txt+'</li>'}
  var h='<ul class="chk">';
  h+=row(a.n>=minw,'<b>'+a.n+'</b> palabras (mínimo '+minw+')'+(a.n<minw?' → te faltan '+(minw-a.n):''));
  h+=row(a.paras>=3,'<b>'+a.paras+'</b> párrafos'+(a.paras<3?' → separa con una línea en blanco: introducción, desarrollo y conclusión':''));
  h+=row(a.conn.length>=4,'Conectores usados: <b>'+a.conn.length+'</b>'+(a.conn.length?' ('+esc(a.conn.join(', '))+')':'')+(a.conn.length<4?' → usa al menos 4 distintos (however, moreover, in addition, as a result, in conclusion…)':''));
  h+=row(a.sents>=6&&a.avg<=28,'Longitud media de frase: <b>'+a.avg+'</b> palabras'+(a.long?' · '+a.long+' frase(s) de más de 35 palabras: divídelas':''));
  h+=row(a.rep.length===0,'Repeticiones'+(a.rep.length?': <b>'+esc(a.rep.join(', '))+'</b> → busca sinónimos':': ninguna palabra se repite demasiado'));
  h+=row(a.contr===0,'Contracciones: <b>'+a.contr+'</b>'+(a.contr?' → en una redacción formal escribe la forma completa (do not, it is…)':''));
  h+='</ul>';
  if(a.warns.length)h+='<div class="box wb" style="margin-top:8px"><b>Errores típicos detectados:</b><ul style="margin:4px 0;padding-left:1.2rem">'+a.warns.map(function(w){return '<li>'+w+'</li>'}).join('')+'</ul></div>';
  else if(a.n>20)h+='<p class="small muted" style="margin-top:6px">No he detectado ninguno de los errores típicos que busco (no significa que no haya otros).</p>';
  return h;
}
function promptFor(d,optN,text,a){
  var o=d.writing.opts.filter(function(x){return x.n===optN})[0];
  return 'Corrige esta redacción de un examen de inglés de la PAU (UCLM, Castilla-La Mancha, 2º Bachillerato). La hizo mi hijo en el examen «'+d.label+'» (Parte IV, 3 puntos, mínimo 150 palabras, sin diccionario). En el examen real las faltas de ortografía, gramática y vocabulario penalizan hasta -1,5 puntos de este ejercicio.\n\n'+
  'TEMA (OPTION '+o.n+'): '+o.t+'\n\nREDACCIÓN ('+a.n+' palabras):\n"""\n'+text.trim()+'\n"""\n\n'+
  'Dame, en español: 1) una nota orientativa sobre 3 puntos, desglosada en contenido y tarea, organización y conectores, gramática, vocabulario y ortografía, y cuánto restarían las faltas (máximo -1,5); 2) la lista de errores con la corrección y la regla de gramática que lo explica; 3) la misma redacción corregida, cambiando lo mínimo para que siga siendo suya; 4) tres cosas concretas para practicar.';
}

/* ================= PAGINA DE EXAMEN ================= */
function fmtTime(s){s=Math.max(0,s);return pad(Math.floor(s/60))+':'+pad(s%60)}
E.initExam=function(id){
  var d=E.exams[id], app=document.getElementById('app');
  if(!d){app.textContent='No se han cargado los datos del examen.';return}
  var meta=EXAMS.filter(function(x){return x.id===id})[0]||{h:215};
  document.documentElement.style.setProperty('--h',meta.h);
  var st=loadSt(id); st.tf=st.tf||{}; st.lex=st.lex||{}; st.pho=st.pho||{}; st.uoe=st.uoe||{}; st.own=st.own||{}; st.wr=st.wr||{opt:0,text:'',grade:''}; st.timer=st.timer||{rem:5400,end:0};
  var h=topBar(d.label,true)+'<main class="wrap exam">';
  h+='<div class="thead"><div class="k">UCLM · Prueba de acceso a la Universidad · Curso 2025/2026 · Materia: Inglés</div><h1>'+esc(d.label)+'</h1></div>';
  h+='<section class="box tip" id="timerbox"><div class="trow"><div><b>Cronómetro del examen</b><div class="small muted">Duración oficial: 1 hora y 30 minutos. Sin diccionario ni apuntes. Responde en inglés.</div></div><div class="tbig" id="tbig">90:00</div><div class="tbtn"><button type="button" class="btn sm" id="tgo">▶ Empezar</button><button type="button" class="btn ghost sm" id="trs">↺ Reiniciar</button></div></div></section>';
  h+='<details class="box" open><summary><b>Instrucciones del examen</b></summary><ul style="margin:6px 0;padding-left:1.2rem"><li>La prueba consta de cuatro partes: hay que hacer las partes I y II sobre la lectura, elegir 6 frases de rephrasing (parte III) y escribir una redacción eligiendo una opción de las dos propuestas (parte IV).</li><li>Las preguntas deberán ser respondidas en inglés, en el cuadernillo que se entrega.</li><li>No se permite el uso del diccionario ni de ningún otro material didáctico.</li><li>Las faltas de ortografía, gramática y vocabulario penalizarán la nota del ejercicio de redacción (parte IV) hasta -1,5 puntos.</li><li>Duración de la prueba: 1 hora y 30 minutos.</li></ul><p class="small muted">Texto de las instrucciones tal como aparece en el examen.</p></details>';
  /* reading */
  h+='<section class="sec" id="reading"><h2>📖 Reading</h2><article class="reading"><h3 class="rtitle">'+esc(d.reading.title)+'</h3>';
  var para=[],lines=d.reading.lines,starts=d.reading.starts;
  starts.forEach(function(s,pi){
    var end=(starts[pi+1]||lines.length+1)-1, p='<p>';
    for(var n=s;n<=end;n++){p+='<span class="ln" aria-label="línea '+n+'">'+n+'</span>'+esc(lines[n-1])+' '}
    para.push(p+'</p>');
  });
  h+=para.join('')+'<p class="srcline"><i>'+esc(d.reading.source)+'</i></p></article><p class="small muted">Los números pequeños marcan el principio de cada línea del examen original, para la pregunta de fonética sobre el número de línea.</p></section>';
  /* parte I */
  h+='<section class="sec" id="p1"><h2>Part I · Questions <span class="pill ev">2 puntos</span></h2><p><b>READING COMPREHENSION.</b> (2 POINTS) (0.5 points for each correct answer). Add TRUE or FALSE and copy the evidence from the text to support your answer. No marks are given for only TRUE or FALSE. No marks are given for T or F.</p><ol class="qs" id="tfs">';
  d.tf.forEach(function(it,i){
    h+='<li class="q" data-k="tf'+i+'"><div class="qn">'+(i+1)+'</div><div class="qb"><div>'+esc(it.q)+'</div><div class="radios" role="radiogroup" aria-label="Pregunta '+(i+1)+'"><label><input type="radio" name="tf'+i+'" value="T"> TRUE</label><label><input type="radio" name="tf'+i+'" value="F"> FALSE</label></div><textarea rows="2" class="ta" placeholder="Evidence: copia aquí del texto la frase que lo demuestra…" aria-label="Evidencia '+(i+1)+'" spellcheck="false"></textarea><div class="fb" aria-live="polite"></div></div></li>';
  });
  h+='</ol></section>';
  /* parte II */
  h+='<section class="sec" id="p2"><h2>Part II · Lexicon / Phonetics <span class="pill ev">2 puntos</span></h2><h3>A. LEXICON. (1 POINT)</h3><p>(0.25 points for each correct answer) Find a synonym for each of the following words.</p><ol class="qs" id="lexs">';
  d.lex.forEach(function(it,i){
    h+='<li class="q" data-k="lex'+i+'"><div class="qn">'+(i+1)+'</div><div class="qb"><div class="ans"><b>'+esc(it.q)+':</b><input type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Sinónimo '+(i+1)+'" placeholder="synonym…"></div><div class="fb" aria-live="polite"></div></div></li>';
  });
  h+='</ol><h3 style="margin-top:8px">B. PHONETICS. (1 POINT)</h3><p>(0.25 points for each correct answer) Answer these four questions.</p><ol class="qs" id="phos">';
  d.pho.forEach(function(it,i){
    h+='<li class="q" data-k="pho'+i+'"><div class="qn">'+(i+1)+'</div><div class="qb"><div>'+it.q+'</div>';
    if(it.type==='diph')h+='<div class="ans"><input type="text" class="pw" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="word" aria-label="Palabra" style="max-width:12rem"><input type="number" class="pl" min="1" max="60" placeholder="line nº" aria-label="Número de línea" style="max-width:7rem"></div>';
    else h+='<div class="radios">'+it.opts.map(function(o){return '<label><input type="radio" name="pho'+i+'" value="'+esc(o)+'"> <span class="ipa">'+esc(o)+'</span></label>'}).join('')+'</div>';
    h+='<div class="fb" aria-live="polite"></div></div></li>';
  });
  h+='</ol></section>';
  /* parte III */
  h+='<section class="sec" id="p3"><h2>Part III · Use of English <span class="pill ev">3 puntos</span></h2><p><b>USE OF ENGLISH. (3 POINTS)</b> (0.5 points for each correct answer). Choose <u>SIX</u> of these sentences and rewrite them starting with the words given. Only the first six will be corrected. No points will be given for the extra ones. Clearly identify the sentences you choose using the numbers here.</p><div class="sbar"><span class="sc" id="uoecount"></span></div><ol class="qs" id="uoes">';
  d.uoe.forEach(function(u,i){
    h+='<li class="q" data-k="uoe'+i+'"><div class="qn">'+(i+1)+'</div><div class="qb"><div class="orig">'+marked(d.uoeQ[i])+'</div><div class="ans">'+(u[0]?'<span class="start">'+esc(u[0])+'</span>':'')+'<input type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Frase '+(i+1)+'" placeholder="'+(u[0]?'sigue la frase…':'escribe la pregunta completa…')+'"></div><div class="fb" aria-live="polite"></div></div></li>';
  });
  h+='</ol></section>';
  /* parte IV */
  var W=d.writing;
  h+='<section class="sec" id="p4"><h2>Part IV · Writing <span class="pill ev">3 puntos</span></h2><p><b>Write <u>ONE</u> of these two compositions (3 POINTS). If you write two, no points will be given to the second one. Your composition must have at least <u>150 words</u>.</b></p><div class="radios big" role="radiogroup" aria-label="Opción de redacción">'+W.opts.map(function(o){return '<label class="opt"><input type="radio" name="wopt" value="'+o.n+'"> <span><b>OPTION '+o.n+'.</b> '+esc(o.t)+'</span></label>'}).join('')+'</div>'+
   '<textarea id="wtext" class="ta wta" rows="14" placeholder="Write your composition here…" spellcheck="false" aria-label="Redacción"></textarea>'+
   '<div class="sbar"><span class="sc" id="wcount">0 palabras</span><div class="sp meter"><i id="wmeter"></i></div><span class="small muted" id="wsaved"></span></div>'+
   '<div class="pbtn"><button type="button" class="btn ghost" id="wcopy">📋 Copiar redacción + instrucciones para corregirla</button></div><div id="wrep" aria-live="polite"></div>'+
   '<details class="box"><summary><b>Cómo se valora una redacción (guía orientativa, no oficial)</b></summary><ul style="margin:6px 0;padding-left:1.2rem"><li><b>Tarea y contenido:</b> respondes a lo que se pide (ventajas <i>y</i> desventajas; tu opinión razonada) con ideas y ejemplos.</li><li><b>Organización:</b> introducción, 2–3 párrafos de desarrollo y conclusión; conectores variados.</li><li><b>Gramática y vocabulario:</b> frases correctas, tiempos verbales bien usados, vocabulario variado y preciso.</li><li><b>Ortografía y puntuación.</b> Según las instrucciones, los fallos pueden restar <b>hasta 1,5 puntos</b>.</li><li><b>Mínimo 150 palabras.</b> Y si escribes las dos opciones, no puntúa la segunda.</li></ul></details>'+
   '<details class="box"><summary><b>Ver una redacción modelo de cada opción</b> (propuesta mía, ~170 palabras)</summary>'+W.models.map(function(m){return '<h3 style="margin-top:10px">Option '+m.n+'</h3>'+m.t.split('\n\n').map(function(p){return '<p style="margin-top:6px">'+esc(p)+'</p>'}).join('')}).join('')+'<p class="small muted" style="margin-top:8px">No la copies: sirve para ver la estructura y los conectores. Léela <b>después</b> de escribir la tuya.</p></details>'+
   '<div class="box"><label for="wgrade"><b>Nota de tu redacción (0–3)</b> cuando te la hayan corregido:</label> <input type="text" id="wgrade" inputmode="decimal" style="width:5rem;font:inherit;padding:5px 8px;border-radius:8px;border:1.5px solid var(--line);background:var(--bg);color:var(--fg)" aria-label="Nota de la redacción"> <span class="small muted">(se suma al total)</span></div></section>';
  /* resultado */
  h+='<section class="sec" id="res"><h2>🏁 Resultado</h2><div class="pbtn"><button type="button" class="btn" data-part="all">✔ Corregir el examen</button><button type="button" class="btn ghost" id="reset">Borrar mis respuestas de este examen</button></div><div id="resbox"></div></section></main>';
  app.innerHTML=h; wireTheme();

  var root=app, $=function(s){return root.querySelector(s)};
  /* restaurar */
  d.tf.forEach(function(_,i){var s=st.tf[i];if(!s)return;var li=$('[data-k=tf'+i+']');if(s.v){var r=li.querySelector('input[value='+s.v+']');if(r)r.checked=true}li.querySelector('textarea').value=s.e||''});
  d.lex.forEach(function(_,i){if(st.lex[i])$('[data-k=lex'+i+'] input').value=st.lex[i]});
  d.pho.forEach(function(it,i){var s=st.pho[i];if(!s)return;var li=$('[data-k=pho'+i+']');if(it.type==='diph'){li.querySelector('.pw').value=s.w||'';li.querySelector('.pl').value=s.l||''}else{Array.prototype.forEach.call(li.querySelectorAll('input[type=radio]'),function(r){if(r.value===s)r.checked=true})}});
  d.uoe.forEach(function(_,i){if(st.uoe[i])$('[data-k=uoe'+i+'] input').value=st.uoe[i]});
  if(st.wr.opt){var ro=$('input[name=wopt][value="'+st.wr.opt+'"]');if(ro)ro.checked=true}
  $('#wtext').value=st.wr.text||''; $('#wgrade').value=st.wr.grade||'';
  function save(){saveSt(id,st)}
  function updUoeCount(){var c=uoeCounted(d,st).length, tot=0;for(var i=0;i<d.uoe.length;i++)if(uoeAnswered(st,i))tot++;
    $('#uoecount').innerHTML='Has respondido <b>'+tot+'</b> frase'+(tot===1?'':'s')+' · se corrigen las 6 primeras'+(tot>6?' <span class="v w">las de más no puntúan</span>':'');}
  function updWords(){var n=(($('#wtext').value.match(/[A-Za-z’'][A-Za-z’'-]*/g))||[]).length;$('#wcount').textContent=n+' palabras (mínimo 150)';var m=$('#wmeter');m.style.width=Math.min(100,Math.round(n/1.5))+'%';m.style.background=n>=150?'var(--good)':'var(--c)'}
  updUoeCount(); updWords();
  /* entradas */
  root.addEventListener('input',function(e){
    var t=e.target, li=t.closest('li.q'), k=li&&li.getAttribute('data-k');
    if(k&&k.indexOf('tf')===0){var i=+k.slice(2);st.tf[i]=st.tf[i]||{};if(t.type==='radio')st.tf[i].v=t.value;else st.tf[i].e=t.value}
    else if(k&&k.indexOf('lex')===0)st.lex[+k.slice(3)]=t.value;
    else if(k&&k.indexOf('pho')===0){var j=+k.slice(3);if(d.pho[j].type==='diph'){st.pho[j]=st.pho[j]||{};if(t.classList.contains('pw'))st.pho[j].w=t.value;else st.pho[j].l=t.value}else st.pho[j]=t.value}
    else if(k&&k.indexOf('uoe')===0){st.uoe[+k.slice(3)]=t.value;updUoeCount()}
    else if(t.name==='wopt')st.wr.opt=+t.value;
    else if(t.id==='wtext'){st.wr.text=t.value;updWords()}
    else if(t.id==='wgrade'){st.wr.grade=t.value;paintResult()}
    save();
  });
  /* corregir */
  function paintItem(k,g){var li=$('[data-k='+k+']');var fb=li.querySelector('.fb');fb.innerHTML=g.html;li.classList.remove('ok','no');if(g.ok)li.classList.add('ok');else if(!g.empty&&!g.skip)li.classList.add('no')}
  function doPart(p){
    if(p==='p1'||p==='all')d.tf.forEach(function(_,i){paintItem('tf'+i,gradeTF(d,st,i))});
    if(p==='p2'||p==='all'){d.lex.forEach(function(_,i){paintItem('lex'+i,gradeLex(d,st,i))});d.pho.forEach(function(_,i){paintItem('pho'+i,gradePho(d,st,i))})}
    if(p==='p3'||p==='all')d.uoe.forEach(function(_,i){paintItem('uoe'+i,gradeUoe(d,st,i))});
    st.done=1;st.graded=st.graded||{};st.graded[p]=1;save();paintResult();
  }
  function paintResult(){
    var s=score(d,st), tot=s.auto+(s.wr||0), box=$('#resbox');
    if(!st.done){box.innerHTML='<p class="muted">Cuando hayas terminado, pulsa «Corregir el examen»: se corrigen todas las partes a la vez.</p>';return}
    function r(n,t,x,m){return '<tr><td>'+n+'</td><td class="num">'+fmt(x)+' / '+m+'</td></tr>'}
    box.innerHTML='<div class="tw"><table class="t"><tr><th>Parte</th><th>Puntos</th></tr>'+r('I · Reading',0,s.p1,2)+r('II · Lexicon / Phonetics',0,s.p2,2)+r('III · Use of English',0,s.p3,3)+'<tr><td>IV · Writing</td><td class="num">'+(s.wr===null?'<span class="muted">pendiente de corrección</span>':fmt(s.wr)+' / 3')+'</td></tr><tr><th>Total'+(s.wr===null?' (sin redacción)':'')+'</th><th class="num">'+fmt(tot)+' / '+(s.wr===null?'7':'10')+'</th></tr></table></div><p class="small muted" style="margin-top:6px">Las partes I–III las corrige la página con respuestas propuestas por mí, no oficiales. La redacción se puntúa aparte: copia tu texto con el botón de la Parte IV, hazla corregir y escribe aquí la nota.</p>';
  }
  paintResult();
  if(st.graded){ /* repintar correcciones previas */
    ['p1','p2','p3'].forEach(function(p){if(st.graded[p]||st.graded.all)doPart(p)});
  }
  root.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b)return;
    if(b.dataset.part){doPart(b.dataset.part);if(b.dataset.part==='all'){wrCheck();$('#res').scrollIntoView()}return}
    if(b.dataset.own){st.own[b.dataset.own]=1;save();doPart('all');return}
    if(b.id==='reset'){if(!confirm('¿Borrar tus respuestas de este examen?'))return;try{localStorage.removeItem('ex-'+id)}catch(er){}location.reload();return}
  });
  function wrCheck(){var t=$('#wtext').value;$('#wrep').innerHTML=t.trim()?'<h3 style="margin:10px 0 4px">Revisión automática</h3>'+wrReport(analyse(t,150),150)+'<p class="small muted">Esto no es una nota: no entiende de contenido ni de todos los errores de gramática.</p>':'<p class="muted">No has escrito la redacción.</p>'}
  root.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b)return;
    if(b.id==='wcopy'){
      var t2=$('#wtext').value; if(!t2.trim()){$('#wrep').innerHTML='<p class="muted">Escribe tu redacción primero.</p>';return}
      var opt=st.wr.opt||W.opts[0].n, txt=promptFor(d,opt,t2,analyse(t2,150));
      function done(){$('#wrep').innerHTML='<div class="box tip"><b>✔ Copiado.</b> Pégalo en una conversación con Claude (o envíaselo a tu profesora). Si no se ha copiado, selecciona este texto:<textarea class="ta" rows="8" readonly style="margin-top:6px">'+esc(txt)+'</textarea></div>'}
      if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done,function(){done()});else done();
      return;
    }
  });
  /* cronometro */
  var tb=$('#tbig'), go=$('#tgo'), rs=$('#trs'), iv=null, tbox=document.getElementById('tbox');
  function remain(){return st.timer.end?Math.round((st.timer.end-Date.now())/1000):st.timer.rem}
  function tick(){var r=remain();tb.textContent=fmtTime(r);tb.classList.toggle('late',r<=0);tb.classList.toggle('low',r>0&&r<=600);
    if(tbox){tbox.hidden=!(st.timer.end||st.timer.rem<5400);tbox.textContent='⏱ '+fmtTime(r);tbox.classList.toggle('late',r<=0)}
    if(r<=0&&iv){clearInterval(iv);iv=null;go.textContent='▶ Seguir';st.timer.end=0;st.timer.rem=0;save();tb.title='Tiempo agotado'}}
  function run(){iv=setInterval(tick,1000)}
  go.addEventListener('click',function(){
    if(st.timer.end){st.timer.rem=remain();st.timer.end=0;clearInterval(iv);iv=null;go.textContent='▶ Seguir'}
    else{if(st.timer.rem<=0)st.timer.rem=900;st.timer.end=Date.now()+st.timer.rem*1000;go.textContent='⏸ Pausar';run()}
    save();tick();
  });
  rs.addEventListener('click',function(){clearInterval(iv);iv=null;st.timer={rem:5400,end:0};go.textContent='▶ Empezar';save();tick()});
  if(st.timer.end){go.textContent='⏸ Pausar';run()}else if(st.timer.rem<5400&&st.timer.rem>0)go.textContent='▶ Seguir';
  tick();
};
})();
