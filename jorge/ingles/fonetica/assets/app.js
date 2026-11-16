(function(){
'use strict';
var PH=window.PH={};
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
/* ---------- tema ---------- */
var root=document.documentElement;
var th=ls('ph-theme'); if(th) root.setAttribute('data-theme',th);
PH.toggleTheme=function(){
  var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);
  var n=dark?'light':'dark'; root.setAttribute('data-theme',n); ls('ph-theme',n);
};
/* ---------- audio ---------- */
PH.accent=ls('ph-accent')||'en-GB';
var voices=[];
function loadVoices(){ if('speechSynthesis' in window) voices=speechSynthesis.getVoices()||[]; }
loadVoices();
if('speechSynthesis' in window){ speechSynthesis.onvoiceschanged=loadVoices; }
function pick(lang){
  var en=voices.filter(function(v){return /^en[-_]/i.test(v.lang)||/^en$/i.test(v.lang)});
  var ex=en.filter(function(v){return v.lang.replace('_','-').toLowerCase()===lang.toLowerCase()});
  var pool=ex.length?ex:en; if(!pool.length) return null;
  var score=function(v){var n=v.name.toLowerCase();return (/natural|neural|online/.test(n)?4:0)+(/google/.test(n)?3:0)+(/microsoft/.test(n)?2:0)+(v.localService?0:1)};
  pool.sort(function(a,b){return score(b)-score(a)});
  return pool[0];
}
/* Sin voz inglesa en el navegador (pasa en Opera GX y otros): se reproduce el audio por internet. */
try{var mr=document.createElement('meta');mr.name='referrer';mr.content='no-referrer';document.head.appendChild(mr)}catch(e){}
var player=null, sayId=0;
function synth(text,rate,v){
  try{speechSynthesis.cancel()}catch(e){}
  var u=new SpeechSynthesisUtterance(text); u.lang=PH.accent; if(v)u.voice=v; u.rate=rate||0.85; speechSynthesis.speak(u);
}
function playUrl(url,ok,fail){
  var a=new Audio(), done=false, to;
  function end(good){ if(done)return; done=true; clearTimeout(to); a.onerror=a.onplaying=null; if(good){ok()}else{try{a.pause()}catch(e){} fail()} }
  a.preload='auto'; a.onplaying=function(){end(true)}; a.onerror=function(){end(false)};
  to=setTimeout(function(){end(false)},5000);
  try{ a.src=url; player=a; var p=a.play(); if(p&&p.catch)p.catch(function(){end(false)}) }catch(e){end(false)}
}
function online(text,fail){
  var id=++sayId; if(player){try{player.pause()}catch(e){}}
  var hide=function(){banner(false)};
  var g='https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl='+(PH.accent==='en-US'?'en-US':'en-GB')+'&q='+encodeURIComponent(String(text).slice(0,190));
  playUrl(g,hide,function(){
    if(id!==sayId)return;
    var w=String(text).trim().toLowerCase();
    if(!/^[a-z'\-]+$/.test(w)||!window.fetch){fail();return}
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+encodeURIComponent(w)).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){
      var urls=[]; (j||[]).forEach(function(en){(en.phonetics||[]).forEach(function(ph){if(ph.audio)urls.push(ph.audio)})});
      if(!urls.length||id!==sayId){fail();return}
      var want=PH.accent==='en-US'?/-us\.mp3/:/-uk\.mp3/; urls.sort(function(a,b){return (want.test(b)?1:0)-(want.test(a)?1:0)});
      playUrl(urls[0],hide,fail);
    }).catch(function(){fail()});
  });
}
PH.say=function(text,rate){
  var has='speechSynthesis' in window; if(has) loadVoices();
  var v=has?pick(PH.accent):null;
  if(v){ if(player){try{player.pause()}catch(e){}} synth(text,rate,v); return }
  online(text,function(){ if(has&&voices.length) synth(text,rate,null); banner(true) });
};
PH.diag=function(){
  loadVoices();
  var en=voices.filter(function(v){return /^en/i.test(v.lang)});
  return {total:voices.length,en:en.length,names:en.slice(0,6).map(function(v){return v.name+' ('+v.lang+')'}),api:'speechSynthesis' in window};
};
function banner(show){
  var b=document.getElementById('audiobanner'); if(!b) return;
  b.style.display=show?'block':'none';
}
document.addEventListener('click',function(e){
  var t=e.target.closest('[data-say]'); if(!t) return;
  PH.say(t.getAttribute('data-say'));
  t.classList.add('on'); setTimeout(function(){t.classList.remove('on')},700);
});
/* ---------- controles de cabecera ---------- */
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('[data-accent]').forEach(function(b){
    b.setAttribute('aria-pressed',b.getAttribute('data-accent')===PH.accent);
    b.addEventListener('click',function(){
      PH.accent=b.getAttribute('data-accent'); ls('ph-accent',PH.accent);
      document.querySelectorAll('[data-accent]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
      PH.say(PH.accent==='en-GB'?'British English':'American English');
    });
  });
  var tb=document.getElementById('themebtn'); if(tb) tb.addEventListener('click',PH.toggleTheme);
  var dg=document.getElementById('diag'); 
  if(dg){ document.getElementById('diagbtn').addEventListener('click',function(){
    PH.say('Hello! This is a test of the English voice.');
    setTimeout(function(){var d=PH.diag(); dg.textContent=!d.api?'Este navegador no tiene síntesis de voz.':(d.en? 'Voces en inglés encontradas: '+d.en+' — '+d.names.join(', '):'Este navegador no tiene voz en inglés (voces totales: '+d.total+'). Los audios se reproducen por internet; si no has oído nada, revisa la conexión.');},600);
  });}
});
/* ---------- normalizadores ---------- */
PH.normIPA=function(s,loose){
  s=(s||'').toString().trim();
  s=s.replace(/[\/\[\]ˈˌ'’.\s·]/g,'').replace(/:/g,'ː').replace(/ʧ/g,'tʃ').replace(/ʤ/g,'dʒ').replace(/ɡ/g,'g').replace(/ɛ/g,'e').replace(/oʊ/g,'əʊ').replace(/ɚ/g,'ɜː').replace(/ɝ/g,'ɜː').replace(/ɹ/g,'r');
  if(loose){ s=s.replace(/ɪr$/,'ɪə').replace(/er$/,'eə').replace(/ʊr$/,'ʊə').replace(/ɜr$/,'ɜː').replace(/ɑr$/,'ɑː').replace(/ɔr$/,'ɔː'); }
  return s;
};
PH.normWord=function(s){return (s||'').toString().toLowerCase().replace(/[^a-z'\- ]/g,'').replace(/\s+/g,' ').trim()};
PH.normText=function(s){return (s||'').toString().toLowerCase().replace(/[’]/g,"'").replace(/[^a-z0-9' ]/g,' ').replace(/\s+/g,' ').trim()};
/* ---------- teclado fonético ---------- */
var KEYS=[['Consonantes',['θ','ð','ʃ','ʒ','ŋ','tʃ','dʒ','j']],['Vocales',['iː','ɪ','ʊ','uː','e','ə','ɜː','ɔː','æ','ʌ','ɑː','ɒ']],['Diptongos',['eɪ','aɪ','ɔɪ','aʊ','əʊ','ɪə','eə','ʊə']],['Otros',['ˈ','ː','/']]];
var last=null, panel=null;
function build(){
  panel=document.createElement('div'); panel.id='ipakb';
  panel.setAttribute('style','position:fixed;left:0;right:0;bottom:0;z-index:50;background:var(--surface);border-top:2px solid var(--fg);padding:8px 10px;display:none;box-shadow:0 -6px 20px rgba(0,0,0,.15)');
  var h='<div style="display:flex;gap:6px 14px;flex-wrap:wrap;align-items:center;justify-content:center;max-width:66rem;margin:auto">';
  KEYS.forEach(function(g){h+='<div style="display:flex;gap:4px;flex-wrap:wrap;align-items:center"><span class="k" style="margin-right:2px">'+g[0]+'</span>';g[1].forEach(function(k){h+='<button type="button" class="ipa" data-k="'+k+'" style="min-width:36px;height:36px;border:1px solid var(--line);background:var(--bg);color:var(--fg);border-radius:8px;font-size:1.15rem;cursor:pointer">'+k+'</button>'});h+='</div>'});
  h+='<button type="button" data-k="⌫" style="height:36px;border:1px solid var(--line);background:var(--bg);color:var(--fg);border-radius:8px;padding:0 10px;cursor:pointer">⌫</button><button type="button" data-k="✕" style="height:36px;border:1px solid var(--line);background:var(--bg);color:var(--fg);border-radius:8px;padding:0 10px;cursor:pointer">cerrar</button></div>';
  panel.innerHTML=h; document.body.appendChild(panel);
  panel.addEventListener('mousedown',function(e){e.preventDefault()});
  panel.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return; var k=b.getAttribute('data-k');
    if(k==='✕'){panel.style.display='none';return}
    if(!last) return;
    var i=last.selectionStart==null?last.value.length:last.selectionStart, j=last.selectionEnd==null?i:last.selectionEnd;
    if(k==='⌫'){ if(i===j&&i>0){i--} last.value=last.value.slice(0,i)+last.value.slice(j); last.setSelectionRange(i,i); }
    else { last.value=last.value.slice(0,i)+k+last.value.slice(j); last.setSelectionRange(i+k.length,i+k.length); }
    last.focus(); last.dispatchEvent(new Event('input',{bubbles:true}));
  });
}
document.addEventListener('focusin',function(e){
  var t=e.target; if(t&&t.matches&&t.matches('input[data-ipa]')){ if(!panel) build(); last=t; panel.style.display='block'; document.body.style.paddingBottom='96px'; }
});
})();
