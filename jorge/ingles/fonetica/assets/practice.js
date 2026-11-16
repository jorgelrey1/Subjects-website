(function(){
'use strict';
var PH=window.PH, DATA=window.PRACTICA||[], LEX=window.LEX||{};
var SPK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>';
function el(t,c,h){var e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function marked(m){return m.split(/(\[[^\]]*\])/).map(function(p){return p.charAt(0)==='['?'<mark>'+esc(p.slice(1,-1))+'</mark>':esc(p)}).join('')}
function plain(m){return m.replace(/[\[\]]/g,'')}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
var EXP=[["i'm","i am"],["i'll","i will"],["it's","it is"],["who's","who is"],["they're","they are"],["she's","she is"],["he's","he is"],["i've","i have"],["we're","we are"],["you're","you are"]];
function normSent(s){s=PH.normText(s); EXP.forEach(function(p){s=s.replace(new RegExp('\\b'+p[0].replace("'","'")+'\\b','g'),p[1])}); return s.replace(/\s+/g,' ').trim()}
function ipaLabel(v){return '/'+v+'/'}

function wordChip(w,hide){
  if(hide) return '<button type="button" class="w" data-say="'+esc(plain(w))+'"><span>Escuchar</span>'+SPK+'</button>';
  return '<button type="button" class="w" data-say="'+esc(plain(w))+'"><span>'+marked(w)+'</span>'+SPK+'</button>';
}

function buildSet(set,host){
  var wrap=el('details','set fam-'+(set.fam||'cons')); wrap.id='set-'+set.id;
  var best=ls('ph-best-'+set.id);
  var sum=el('summary','set-h');
  var n=countItems(set);
  sum.innerHTML='<span class="set-t">'+esc(set.title)+'</span><span class="pill '+(set.source==='clase'?'cl':'nu')+'">'+(set.source==='clase'?'📄 De clase':'✨ Nuevo')+'</span><span class="muted small">'+n+(set.type==='findwords'?' sonidos':' preguntas')+'</span><span class="best small" id="best-'+set.id+'">'+(best?'Mejor: '+esc(best):'')+'</span>';
  wrap.appendChild(sum);
  var body=el('div','set-b'); wrap.appendChild(body);
  var built=false;
  wrap.addEventListener('toggle',function(){ if(wrap.open&&!built){built=true;render(set,body)} });
  host.appendChild(wrap);
}
function countItems(set){
  if(set.type==='findwords') return set.sounds.length;
  var c=0; set.items.forEach(function(i){c+=i.parts?i.parts.length:1}); return c;
}
function render(set,body){
  var state={items:(set.items||[]).slice(), checked:false};
  var instr=el('p','instr',set.instr||''); body.appendChild(instr);
  if(set.note) body.appendChild(el('p','hand','📝 '+set.note));
  var list=el('div','items '+(set.type==='findwords'?'fw':'')); body.appendChild(list);
  var bar=el('div','set-bar');
  var bCheck=el('button','btn pri','✔ Corregir'), bReset=el('button','btn','↺ Reiniciar'), bShuf=el('button','btn','🔀 Mezclar'), bSol=el('button','btn','👁 Ver soluciones');
  [bCheck,bShuf,bReset,bSol].forEach(function(b){b.type='button';bar.appendChild(b)});
  var res=el('div','res-line'); res.setAttribute('aria-live','polite');
  body.appendChild(bar); body.appendChild(res);
  var rows=[];
  function draw(){
    list.innerHTML=''; rows=[]; res.textContent=''; res.className='res-line'; state.checked=false;
    if(set.type==='findwords'){ set.sounds.forEach(function(s){rows.push(rowFind(s,list))}); return }
    state.items.forEach(function(it,idx){ rows.push(rowItem(set,it,idx,list)) });
  }
  function check(){
    var ok=0,tot=0,unk=0;
    rows.forEach(function(r){var x=r.check(); ok+=x.ok; tot+=x.tot; unk+=x.unk||0});
    state.checked=true;
    res.className='res-line show '+(ok===tot?'good':ok>=tot*0.7?'mid':'low');
    res.innerHTML='<b>'+ok+' / '+tot+'</b> '+(ok===tot?'🎉 ¡Perfecto!':ok>=tot*0.7?'👍 Muy bien. Repasa las que están en rojo.':'💪 Sigue practicando: mira la teoría y pulsa Reiniciar.')+(unk?'<br><span class="muted small">'+unk+' palabra(s) no están en mi lista: revísalas tú.</span>':'');
    var key='ph-best-'+set.id, prev=ls(key), pn=prev?parseInt(prev,10):-1;
    if(ok>pn){ ls(key,ok+'/'+tot); var b=document.getElementById('best-'+set.id); if(b) b.textContent='Mejor: '+ok+'/'+tot; }
  }
  bCheck.onclick=check;
  bReset.onclick=function(){draw()};
  bShuf.onclick=function(){state.items=shuffle(state.items); draw()};
  bSol.onclick=function(){rows.forEach(function(r){r.solve&&r.solve()})};
  if(set.type==='findwords') bShuf.style.display='none';
  draw();
}
/* ---------- filas ---------- */
function rowItem(set,it,idx,list){
  var d=el('div','it'); list.appendChild(d);
  var t=set.type;
  var num='<span class="num">'+(idx+1)+'</span>';
  if(t==='choice'||t==='listen'){
    var opts=it.opts||set.opts, hide=(t==='listen'||set.hide);
    d.innerHTML=num+'<div class="it-w">'+(it.prompt?'<span class="ipa big">'+esc(it.prompt)+'</span>':wordChip(it.w,hide))+'</div><div class="opts"></div><span class="fb"></span>';
    var og=d.querySelector('.opts'), sel=null;
    opts.forEach(function(o){var b=el('button','opt'+(set.optIpa===false?'':' ipa'),esc(set.optLabel?set.optLabel(o):o)); b.type='button'; b.setAttribute('aria-pressed','false'); b.onclick=function(){ if(d.classList.contains('done'))return; sel=o; [].forEach.call(og.children,function(x){x.setAttribute('aria-pressed',x===b)}) }; og.appendChild(b)});
    return {check:function(){var ok=(sel===it.ans); d.classList.add('done',ok?'ok':'ko'); var fb=d.querySelector('.fb'); fb.innerHTML=ok?'✓':'✗ → <b class="ipa">'+esc(set.optLabel?set.optLabel(it.ans):it.ans)+'</b>'+(hide&&!it.prompt?' <i>('+esc(plain(it.w))+')</i>':''); if(hide&&!it.prompt){d.querySelector('.it-w').innerHTML=wordChip(it.w,false)} return {ok:ok?1:0,tot:1}},
            solve:function(){var fb=d.querySelector('.fb'); fb.innerHTML='→ <b class="ipa">'+esc(set.optLabel?set.optLabel(it.ans):it.ans)+'</b>'}};
  }
  if(t==='ipa2word'){
    var parts=it.parts||[it];
    var h=num+'<div class="parts">';
    parts.forEach(function(p,i){h+='<div class="part"><span class="ipa big">/'+esc(p.ipa)+'/</span><input type="text" class="tin" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Palabra para /'+esc(p.ipa)+'/"><span class="fb"></span></div>'});
    d.innerHTML=h+'</div>';
    var ins=d.querySelectorAll('input'), fbs=d.querySelectorAll('.fb');
    return {check:function(){var ok=0; parts.forEach(function(p,i){var v=PH.normWord(ins[i].value), acc=p.ans.map(PH.normWord), good=acc.indexOf(v)>=0; if(good)ok++; ins[i].classList.remove('ok','ko'); ins[i].classList.add(good?'ok':'ko'); fbs[i].innerHTML=good?'✓':'✗ → <b>'+esc(p.ans.join(' / '))+'</b>'}); return {ok:ok,tot:parts.length}},
            solve:function(){parts.forEach(function(p,i){fbs[i].innerHTML='→ <b>'+esc(p.ans.join(' / '))+'</b>'})}};
  }
  if(t==='symbol'){
    d.innerHTML=num+'<div class="it-w sw">'+wordChip(it.w,false)+'</div><input type="text" class="tin ipa" data-ipa="1" inputmode="none" autocomplete="off" spellcheck="false" aria-label="Símbolo del sonido marcado en '+esc(plain(it.w))+'" placeholder="/ /"><span class="fb"></span>';
    var inp=d.querySelector('input'), fb=d.querySelector('.fb');
    return {check:function(){var v=PH.normIPA(inp.value,true), acc=it.ans.map(function(a){return PH.normIPA(a,true)}), good=!!v&&acc.indexOf(v)>=0; inp.classList.remove('ok','ko'); inp.classList.add(good?'ok':'ko'); fb.innerHTML=good?'✓':'✗ → <b class="ipa">/'+esc(it.ans[0])+'/</b>'; return {ok:good?1:0,tot:1}},
            solve:function(){fb.innerHTML='→ <b class="ipa">/'+esc(it.ans[0])+'/</b>'}};
  }
  if(t==='sentence'){
    d.innerHTML=num+'<div class="sent"><span class="ipa big">/'+esc(it.ipa)+'/</span><input type="text" class="tin wide" autocomplete="off" spellcheck="false" aria-label="Frase en inglés"><span class="fb"></span></div>';
    var si=d.querySelector('input'), sf=d.querySelector('.fb');
    return {check:function(){var v=normSent(si.value), good=!!v&&it.ans.some(function(a){return normSent(a)===v}); si.classList.remove('ok','ko'); si.classList.add(good?'ok':'ko'); sf.innerHTML=good?'✓':'✗ → <b>'+esc(it.ans[0])+'</b>'; return {ok:good?1:0,tot:1}},
            solve:function(){sf.innerHTML='→ <b>'+esc(it.ans[0])+'</b>'}};
  }
  return {check:function(){return {ok:0,tot:0}}};
}
function rowFind(sound,list){
  var d=el('div','it fwrow'); list.appendChild(d);
  d.innerHTML='<div class="fw-s"><span class="sym2 ipa">/'+esc(sound.ipa)+'/</span><span class="muted small">'+esc(sound.hint||'')+'</span></div><div class="fw-in"><input class="tin" type="text" autocomplete="off" spellcheck="false" aria-label="Palabra 1 con /'+esc(sound.ipa)+'/"><input class="tin" type="text" autocomplete="off" spellcheck="false" aria-label="Palabra 2"><input class="tin" type="text" autocomplete="off" spellcheck="false" aria-label="Palabra 3"></div><div class="fb fw-fb"></div>';
  var ins=d.querySelectorAll('input'), fb=d.querySelector('.fw-fb');
  function has(w){var s=LEX[w]; if(s===undefined) return null; return s.split(',').indexOf(sound.ipa)>=0}
  return {check:function(){
      var seen={},ok=0,unk=0,out=[];
      [].forEach.call(ins,function(i){var w=PH.normWord(i.value); i.classList.remove('ok','ko','un'); if(!w){return}
        if(seen[w]){i.classList.add('ko'); out.push('<span class="ko">'+esc(w)+' (repetida)</span>'); return} seen[w]=1;
        var r=has(w); if(r===null){unk++; i.classList.add('un'); out.push('<span class="un">'+esc(w)+' ?</span>')}
        else if(r){ok++; i.classList.add('ok'); out.push('<span class="ok">'+esc(w)+' ✓</span>')}
        else {i.classList.add('ko'); out.push('<span class="ko">'+esc(w)+' ✗</span>')}});
      fb.innerHTML=out.join(' ')||'<span class="muted">Escribe 3 palabras</span>';
      var filled=out.length; return {ok:ok,tot:Math.max(filled-unk,0),unk:unk};},
    solve:function(){fb.innerHTML='Ejemplos: '+(sound.examples||[]).map(function(w){return '<b>'+esc(w)+'</b>'}).join(', ')}};
}
/* ---------- arranque ---------- */
document.addEventListener('DOMContentLoaded',function(){
  var groups={};
  DATA.forEach(function(s){ var h=document.getElementById('sets-'+s.group); if(h) buildSet(s,h) });
  if(location.hash){var t=document.querySelector(location.hash); if(t&&t.tagName==='DETAILS') t.open=true}
});
})();
