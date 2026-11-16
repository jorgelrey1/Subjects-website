GRAM.register("too-enough",{
rule:"<b>too</b> + adjetivo (va ANTES) ≈ <b>not</b> + adjetivo contrario + <b>enough</b> (va DESPUÉS). Cambia el adjetivo por su opuesto y la frase afirmativa pasa a negativa (y al revés).",
theory:`
<div class="box"><p>En el cuaderno: <b>too</b> = <i>demasiado</i> (algo negativo). <b>enough</b> = <i>suficiente</i>. Las dos frases dicen lo mismo, pero con el <b>adjetivo contrario</b>:</p>
<div class="tw"><table class="t" style="margin-top:8px"><tr><th>Con TOO (afirmativa)</th><th>Con ENOUGH (negativa)</th></tr>
<tr><td>Tom <b>is too</b> weak to work.</td><td>Tom <b>is not strong enough</b> to work.</td></tr>
<tr><td>The road <b>is too narrow</b> for cars.</td><td>The road <b>isn’t wide enough</b> for cars.</td></tr></table></div></div>
<h3>Cómo transformar</h3>
<ul>
<li>Si la frase tiene <b>too</b> → pasa a <b>not … enough</b> y pon el adjetivo <b>opuesto</b> (weak → strong, short → tall, old → young, expensive → cheap).</li>
<li>Si la frase tiene <b>not … enough</b> → pasa a <b>too</b> (afirmativa) y pon el adjetivo <b>opuesto</b> (wide → narrow, tall → short).</li>
<li>El sujeto, el tiempo verbal y lo que va después (<i>to work</i>, <i>for cars</i>…) <b>no cambian</b>.</li>
<li>Posición: <span class="en">too</span> <b>antes</b> del adjetivo; <span class="en">enough</span> <b>después</b> del adjetivo.</li>
<li>Con verbos, el adjetivo es un adverbio: <i>She didn’t run <b>fast enough</b></i> → <i>She ran <b>too slowly</b></i>.</li>
</ul>
<h3>Pares de adjetivos opuestos útiles</h3>
<div class="tw"><table class="t"><tr><th>big ↔ small</th><th>tall ↔ short</th><th>old ↔ young</th><th>hot ↔ cold</th><th>easy ↔ difficult</th></tr><tr><td>heavy ↔ light</td><td>fast ↔ slow</td><td>expensive ↔ cheap</td><td>safe ↔ dangerous</td><td>wide ↔ narrow</td></tr></table></div>
<div class="box plus"><p>Con <b>sustantivos</b> usamos <i>enough</i> <b>delante</b>: <i>enough money</i>, <i>enough time</i>. Y <i>too much</i> (incontables) / <i>too many</i> (contables): <i>too much noise</i>, <i>too many people</i>. Con <i>for + persona + to</i> se indica quién: <i>It’s too hot <b>for me to</b> sleep</i>.</p></div>
`,
clase:[
["It's too dangerous for you to stay here.","It",["is not safe enough for you to stay here"]],
["The rope isn't long enough to reach the wall.","The rope",["is too short to reach the wall"]],
["This grass is too wet for us to sit on.","This grass",["is not dry enough for us to sit on"]],
["Our apartment isn't large enough to fit his whole family.","Our apartment",["is too small to fit his whole family"]],
["This place is too noisy to study.","This place",["is not quiet enough to study"]],
["She didn't run fast enough to win.","She ran",["too slowly to win"]]
],
extra:[
["The tea is too hot to drink.","The tea",["is not cool enough to drink","is not cold enough to drink"]],
["He isn't old enough to drive.","He",["is too young to drive"]],
["The bag was too heavy for her to carry.","The bag",["was not light enough for her to carry"]],
["This exercise isn't easy enough for beginners.","This exercise",["is too difficult for beginners","is too hard for beginners"]],
["The film was too long for the children to watch.","The film",["was not short enough for the children to watch"]],
["Ana isn't tall enough to reach the shelf.","Ana",["is too short to reach the shelf"]],
["It's too late to call him now.","It",["is not early enough to call him now"]],
["The water isn't warm enough to swim in.","The water",["is too cold to swim in"]],
["He spoke too quietly for us to hear.","He did not",["speak loudly enough for us to hear"]],
["The suitcase was too small for all my clothes.","The suitcase",["was not big enough for all my clothes","was not large enough for all my clothes"]]
],
evau:[
["Junio 2025","The new album is too expensive for me to afford to buy it.","The new album is",["not cheap enough for me to afford to buy it","not cheap enough for me to afford to buy","not cheap enough for me to buy it","not cheap enough for me to buy"]],
["Junio 2016","His son is too short to play basketball.","His son is",["not tall enough to play basketball"]],
["Sept 2015","My father is too old to understand computers.","My father is not",["young enough to understand computers"]],
["Junio 2014","My son is not tall enough to be a goalkeeper.","My son",["is too short to be a goalkeeper","is too small to be a goalkeeper"]],
["Sept 2013","The children were too young for culture.","The children were not",["old enough for culture"]],
["Junio 2012","My son is not tall enough to play basketball.","My son is",["too short to play basketball","too small to play basketball"]],
["Junio 2011","The boy isn't tall enough to reach the medicine cabinet.","The boy is",["too short to reach the medicine cabinet","too small to reach the medicine cabinet"]]
]});
