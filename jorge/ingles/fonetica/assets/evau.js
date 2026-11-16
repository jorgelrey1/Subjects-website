(function(){
'use strict';
var PH=window.PH, D=window.EVAU||[];
function el(t,c,h){var e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
var app, byId={};
D.forEach(function(e){byId[e.id]=e});
function best(id){var b=ls('ph-evau-'+id); return b===null||b===undefined?null:parseFloat(b)}
function fmt(x){return (Math.round(x*100)/100).toString().replace('.',',')}
function optLabel(o){var s=o.replace(/^\/|\/$/g,''); return /^[A-Za-z ]+$/.test(s)&&s.length>3?s:'/'+s+'/'}
function normOpt(o){return PH.normIPA(o.replace(/^\/|\/$/g,''),true)}
/* ---------- índice ---------- */
var filter='all';
function list(){
  document.title='Exámenes PAU · Phonetics';
  app.innerHTML='';
  var done=0,total=D.length,sum=0;
  D.forEach(function(e){var b=best(e.id); if(b!==null){done++; sum+=b}});
  var head=el('div','hero fam-dip','<div class="k">🎓 PAU</div><h1>Exámenes de fonética</h1><p>Los <b>'+total+' modelos</b> de junio 2002 a julio 2026. Elige uno, <b>escribe tus respuestas</b> y pulsa <b>Corregir</b>. Cada examen vale <b>1 punto</b> (4 respuestas × 0,25).</p>');
  var stats=el('div','evstats','<span class="pill cl">✅ '+done+' / '+total+' hechos</span>'+(done?'<span class="pill nu">⭐ Media de tus mejores: '+fmt(sum/done)+' / 1</span>':''));
  head.appendChild(stats); app.appendChild(head);
  var box=el('div','box tip','<h3>Sobre los textos</h3><p>En muchos modelos el enunciado habla de «<i>the text</i>» pero el texto no se entregó. Para poder practicar, he <b>escrito textos propios</b> (marcados <span class="pill nu">✍️ texto propio</span>): <b>no son los oficiales</b>, pero tienen el tema del título y siempre contienen respuestas válidas. Los modelos sin texto no lo necesitan.</p>');
  app.appendChild(box);
  var bar=el('div','evbar');
  [['all','Todos'],['text','✍️ Con texto propio'],['notext','Sin texto'],['todo','⏳ Sin hacer']].forEach(function(f){
    var b=el('button','btn'+(filter===f[0]?' pri':''),f[1]); b.type='button'; b.onclick=function(){filter=f[0]; list()}; bar.appendChild(b)});
  var rnd=el('button','btn','🎲 Examen al azar'); rnd.type='button'; rnd.onclick=function(){var pool=D.filter(function(e){return best(e.id)===null}); if(!pool.length)pool=D; location.hash='#'+pool[Math.floor(Math.random()*pool.length)].id}; bar.appendChild(rnd);
  app.appendChild(bar);
  var years={};
  D.forEach(function(e){
    if(filter==='text'&&!e.own) return; if(filter==='notext'&&e.own) return; if(filter==='todo'&&best(e.id)!==null) return;
    (years[e.year]=years[e.year]||[]).push(e)});
  Object.keys(years).sort(function(a,b){return b-a}).forEach(function(y){
    var sec=el('section','evyear'); sec.appendChild(el('h2','',y));
    var g=el('div','evgrid');
    years[y].forEach(function(e){
      var b=best(e.id);
      var a=el('a','evcard '+(e.own?'fam-end':'fam-cons'));
      a.href='#'+e.id;
      a.innerHTML='<b>'+esc(e.label.replace(/ — Segunda convocatoria.*?(?= — Texto|$)/,' (2ª conv. 2019/20)'))+'</b>'+(e.topic?'<span class="tp">'+esc(e.topic)+'</span>':'')+'<span class="pills">'+(e.own?'<span class="pill nu">✍️ texto propio</span>':'<span class="pill cl">sin texto</span>')+(b!==null?'<span class="pill '+(b>=0.75?'nu':'cl')+'">'+fmt(b)+' / 1</span>':'')+'</span>';
      g.appendChild(a)});
    sec.appendChild(g); app.appendChild(sec)});
  if(!Object.keys(years).length) app.appendChild(el('p','muted','No hay exámenes con ese filtro.'));
}
/* ---------- examen ---------- */
function exam(e){
  document.title=e.label+' · PAU';
  app.innerHTML='';
  var idx=D.indexOf(e);
  var nav=el('div','evnav');
  var back=el('a','btn','← Todos los exámenes'); back.href='#'; nav.appendChild(back);
  if(idx>0){var p=el('a','btn','◀ '+D[idx-1].label.split(' — ').slice(0,1).join('')); p.href='#'+D[idx-1].id; p.title=D[idx-1].label; nav.appendChild(p)}
  if(idx<D.length-1){var n=el('a','btn','▶'); n.href='#'+D[idx+1].id; n.title=D[idx+1].label; n.setAttribute('aria-label','Siguiente: '+D[idx+1].label); nav.appendChild(n)}
  app.appendChild(nav);
  app.appendChild(el('div','hero fam-dip','<div class="k">🎓 PAU</div><h1>'+esc(e.label)+'</h1>'+(e.topic?'<p class="evtopic">📰 <b>'+esc(e.topic)+'</b></p>':'')));
  app.appendChild(el('div','box tip','<h3>Reglas del examen</h3><p>• Hay <b>4 respuestas</b> que dar, de <b>0,25</b> cada una (total 1 punto). Si una pregunta pide dos palabras, cada palabra vale 0,25.<br>• Las palabras que escribas deben <b>salir del texto</b>.<br>• Si piden la <b>línea</b>, escribe el número de la línea donde está la palabra.<br>• En las de elegir, pulsa la opción correcta.</p>'));
  var qhost=el('div','evq');
  if(e.own){
    var t=el('div','evtext');
    t.appendChild(el('div','evtext-h','<span class="pill nu">✍️ texto propio</span> <span class="muted small">Texto de creación propia, <b>no oficial</b>.</span>'));
    var body=el('ol','lines');
    e.lines.forEach(function(l,i){
      var li=el('li','',esc(l)); /* en el examen no se puede escuchar la pronunciación */
      li.value=i+1; body.appendChild(li)});
    t.appendChild(body); app.appendChild(t);
  } else {
    app.appendChild(el('div','box ok','<h3>Este modelo no necesita texto</h3><p>Todas las preguntas son sobre palabras que aparecen en el propio enunciado.</p>'));
  }
  app.appendChild(qhost);
  var rows=[];
  e.qs.forEach(function(q,qi){ rows.push(question(q,qi,qhost)) });
  var bar=el('div','set-bar');
  var bC=el('button','btn pri','✔ Corregir'), bR=el('button','btn','↺ Reiniciar'), bS=el('button','btn','👁 Ver soluciones');
  [bC,bR,bS].forEach(function(b){b.type='button';bar.appendChild(b)});
  var res=el('div','res-line'); res.setAttribute('aria-live','polite');
  app.appendChild(bar); app.appendChild(res);
  bC.onclick=function(){
    var sc=0; rows.forEach(function(r){sc+=r.check()*0.25});
    res.className='res-line show '+(sc===1?'good':sc>=0.75?'mid':'low');
    res.innerHTML='<b>Nota: '+fmt(sc)+' / 1</b> '+(sc===1?'🎉 ¡Examen perfecto!':sc>=0.75?'👍 Muy bien. Mira las que fallaste.':'💪 Repasa la teoría y repite el examen.');
    var b=best(e.id); if(b===null||sc>b){ls('ph-evau-'+e.id,String(sc))}
  };
  bR.onclick=function(){exam(e); window.scrollTo(0,0)};
  bS.onclick=function(){rows.forEach(function(r){r.solve()})};
  var nx=el('div','evnav'); 
  if(idx<D.length-1){var a=el('a','btn pri','Siguiente examen ▶'); a.href='#'+D[idx+1].id; nx.appendChild(a)}
  app.appendChild(nx);
}
function question(q,qi,host){
  var d=el('div','it evi'); host.appendChild(d);
  var h='<span class="num">'+(qi+1)+'</span><div class="evb"><p class="evp">'+esc(q.prompt)+'</p>';
  if(q.t==='c'){
    h+='<div class="opts"></div><div class="fb"></div></div>'; d.innerHTML=h;
    var og=d.querySelector('.opts'), sel=null, fb=d.querySelector('.fb'), btns=[];
    q.opts.forEach(function(o){var b=el('button','opt'+(/^[A-Za-z]{4,}$/.test(o)?'':' ipa'),esc(optLabel(o))); b.type='button'; b.setAttribute('aria-pressed','false'); b.onclick=function(){if(d.classList.contains('done'))return; sel=o; btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')})}; btns.push(b); og.appendChild(b)});
    var acc=q.ans.map(function(a){return a.replace(/^\/|\/$/g,'')});
    function isOk(){return sel!==null&&acc.indexOf(sel.replace(/^\/|\/$/g,''))>=0}
    function why(){return (q.exp?'<br><span class="muted small">'+esc(q.exp)+'</span>':'')+(q.note==='raining'?'<br><span class="muted small">En «raining» la <b>n</b> de «rain» suena /n/ y la de «-ing» suena /ŋ/; se acepta cualquiera de las dos.</span>':'')+(q.note==='baths'?'<br><span class="muted small">En inglés británico es normalmente /bɑːðz/ (z); algunos diccionarios admiten /bɑːθs/ (s). Se aceptan las dos (mira «Dudas»).</span>':'')}
    return {check:function(){var ok=isOk(); d.classList.remove('ok','ko'); d.classList.add('done',ok?'ok':'ko'); fb.innerHTML=(ok?'✓ Correcto':'✗ La respuesta es <b class="ipa">'+esc(acc.map(function(a){return optLabel(a)}).join(' o '))+'</b>')+why(); return ok?1:0},
            solve:function(){d.classList.add('done'); fb.innerHTML='→ <b class="ipa">'+esc(acc.map(function(a){return optLabel(a)}).join(' o '))+'</b>'+why()}};
  }
  /* palabras */
  h+='<div class="evw">'; for(var i=0;i<q.n;i++){ h+='<span class="evpair"><input type="text" class="tin w1" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Palabra '+(i+1)+'" placeholder="palabra">'+(q.line?'<input type="text" inputmode="numeric" class="tin ln" autocomplete="off" aria-label="Línea de la palabra '+(i+1)+'" placeholder="línea">':'')+'</span>' }
  h+='</div><div class="fb"></div></div>'; d.innerHTML=h;
  var ws=[].slice.call(d.querySelectorAll('.w1')), lns=[].slice.call(d.querySelectorAll('.ln')), fb2=d.querySelector('.fb');
  var vk=Object.keys(q.valid);
  function listing(){return vk.slice(0,12).map(function(w){return '<b>'+esc(w)+'</b> <span class="muted small">(l. '+q.valid[w].join(', ')+')</span>'}).join(' · ')}
  function pastNote(){return q.mode==='past'?'':''}
  return {check:function(){
      var seen={},good=0,msgs=[];
      ws.forEach(function(inp,i){
        var w=PH.normWord(inp.value), lv=lns[i]?parseInt(lns[i].value,10):null; inp.classList.remove('ok','ko'); if(lns[i])lns[i].classList.remove('ok','ko');
        var ok=false, m='';
        if(!w) m='vacía';
        else if(seen[w]) m='«'+esc(w)+'» está repetida';
        else if(!q.valid[w]) m='«'+esc(w)+'» no vale (o no está en el texto)';
        else if(q.line&&(lv==null||isNaN(lv))) m='«'+esc(w)+'» sí vale, pero falta la línea';
        else if(q.line&&q.valid[w].indexOf(lv)<0) {m='«'+esc(w)+'» sí vale, pero está en la línea '+q.valid[w].join(' o ');}
        else ok=true;
        if(w) seen[w]=1;
        inp.classList.add(ok?'ok':'ko'); if(lns[i]&&w) lns[i].classList.add(ok?'ok':'ko');
        if(ok) good++; else msgs.push(m);
      });
      var all=good===q.n;
      d.classList.remove('ok','ko'); d.classList.add('done',all?'ok':'ko');
      fb2.innerHTML=(all?'✓ Correcto':'✗ '+msgs.join('; '))+'<br><span class="muted small">Palabras válidas en este texto: '+listing()+'</span>';
      return good},
    solve:function(){d.classList.add('done'); fb2.innerHTML='Válidas en este texto: '+listing()}};
}
function route(){
  var id=(location.hash||'').replace('#','');
  if(id&&byId[id]) exam(byId[id]); else list();
  window.scrollTo(0,0);
}
document.addEventListener('DOMContentLoaded',function(){app=document.getElementById('evau-app'); window.addEventListener('hashchange',route); route()});
})();
