(function(){
function XX(tpl,map){var res=[tpl];Object.keys(map).forEach(function(k){var n=[];res.forEach(function(s){map[k].forEach(function(v){n.push(s.split('{'+k+'}').join(v))})});res=n});return res}
function SG(g,b,subs){var r=[g];(subs||['we','they']).forEach(function(s){r.push('that '+s+' '+b);r.push('that '+s+' should '+b)});return r}
GRAM.register("gerund-infinitive",{
rule:"El verbo (o la preposición) de delante decide: <b>gerundio (-ing)</b> tras prefer, mind, suggest, stop, enjoy, avoid, deny, finish, can’t stand, be good at, look forward to, apologize for… · <b>to + infinitivo</b> tras would like, refuse, decide, promise, manage, afford… · <b>sin to</b> tras let’s y I’d rather.",
theory:`
<h3>Gerundio (-ing)</h3>
<div class="box"><p><b>Después de estos verbos y expresiones:</b> prefer · mind · suggest · be used to · can’t stand · can’t help · it’s not worth · feel like · finish · admit · avoid · deny · enjoy · stop (dejar de) · give up…<br>
<b>Después de preposición:</b> looking forward to · be good at · apologize for · believe in · argue about · rely on · complain about · depend on · insist on · succeed in · think about · by · without…</p></div>
<ul>
<li>I’d rather stay at home than take the dog for a walk → I <b>prefer staying</b> at home <b>to taking</b> the dog for a walk.</li>
<li>I can’t wait to go to the beach → I’m <b>looking forward to going</b> to the beach.</li>
<li>Mary says “I’m sorry I took your book” → Mary <b>apologized for taking</b> his book.</li>
<li>Can you bring me water, please? → <b>Do you mind bringing</b> me water?</li>
</ul>
<h3>Infinitivo con to</h3>
<div class="box"><p><b>would like · refuse · decide · promise · manage · afford · expect · admit · threaten · agree · seem · want · claim</b> + <b>to + verbo</b>.<br>Jimmy said “I won’t do that” → Jimmy <b>refused to do</b> that. · I’m sorry I didn’t see her → I’d like <b>to have seen</b> her.</p></div>
<h3>Verbo + persona + to + infinitivo</h3>
<div class="box"><p><b>ask · tell · advise · allow · want · beg · remind · warn · recommend · forbid</b> + <b>persona + (not) to + verbo</b>. “Stop talking, Amy” → The teacher <b>told Amy to stop</b> talking. · “Don’t look!” → Suzie <b>told her mom not to look</b>.</p></div>
<h3>Infinitivo sin to</h3>
<div class="box"><p><b>let’s</b> y <b>’d rather (would rather)</b> + verbo sin to. Why don’t we have a rest? → <b>Let’s have</b> a rest. · I prefer reading to writing → I’d <b>rather read than write</b>.</p></div>
<h3>Cambian de significado según lleven -ing o to</h3>
<div class="tw"><table class="t"><tr><th></th><th>+ -ING</th><th>+ TO</th></tr>
<tr><td><b>stop</b></td><td>dejar de: <i>She stopped <b>smoking</b></i></td><td>pararse a / para: <i>He stopped <b>to smoke</b></i></td></tr>
<tr><td><b>remember / forget</b></td><td>recordar algo que ya hice: <i>I can’t remember <b>doing</b> it</i></td><td>acordarse de hacer algo (pendiente): <i>She remembered <b>to turn off</b> the lights</i> · <i>I forgot <b>to phone</b></i> = <i>I didn’t remember to phone</i></td></tr>
<tr><td><b>regret</b></td><td>arrepentirse de algo hecho: <i>I regret <b>not working</b>…</i></td><td>lamentar tener que decir algo: <i>I regret <b>to tell</b> you…</i></td></tr>
<tr><td><b>try</b></td><td>probar a: <i>He tried <b>pushing</b> it</i></td><td>intentar / esforzarse: <i>He tried <b>to start</b> the car</i></td></tr>
<tr><td><b>recommend</b></td><td><i>recommends <b>taking</b> the route</i></td><td><i>recommended <b>them to take</b></i> o <i>recommended that they take</i></td></tr></table></div>
<div class="box plus"><p>Con <b>suggest</b>: <i>suggested <b>going</b></i> o <i>suggested <b>that we go</b></i> (¡nunca <s>suggested to go</s>!). <i>Be used to</i> + -ing (estar acostumbrado) ≠ <i>used to</i> + verbo (solía). <i>Look forward to</i>: la <b>to</b> es preposición → <i>looking forward to <b>seeing</b> you</i>. <i>Prefer … to …</i> con -ing: <i>I prefer staying to going</i>.</p></div>
`,
clase:[
["I'd rather stay at home than take the dog for a walk.","I prefer",["staying at home to taking the dog for a walk"]],
["To get up early is something I hate.","I can't",["stand getting up early"]],
["I can't wait to go to the beach.","I'm looking",["forward to going to the beach"]],
["\"I'm sorry I took your book without permission, Paul.\"","Mary apologized to Paul",["for taking his book without permission","for having taken his book without permission"]],
["She plays tennis like a pro.","She is very good",["at playing tennis"]],
["My brother studies 10 hours a day in order to become a judge.","My brother is used",["to studying 10 hours a day in order to become a judge","to studying 10 hours a day to become a judge","to studying 10 hours a day","to studying ten hours a day in order to become a judge","to studying ten hours a day to become a judge","to studying ten hours a day"]],
["Mary thinks that I need a doctor.","Mary suggested",["that I see a doctor","that I should see a doctor","my seeing a doctor","me seeing a doctor","that I saw a doctor"]],
["Can you bring me a glass of water, please?","Do you mind",["bringing me a glass of water","bringing me a glass of water, please"]],
["Jimmy said: \"I won't do that.\"","Jimmy refused",["to do that"]],
["I'm sorry I didn't see her.","I'd like",["to have seen her"]],
["\"Stop talking, Amy\"","The teacher told Amy",["to stop talking"]],
["\"Don't look!\"","Suzie told her mom",["not to look"]],
["Why don't we have a rest?","Let's",["have a rest"]],
["I prefer reading to writing.","I'd rather",["read than write"]],
["They haven't played basketball since February.","They stopped",["playing basketball in February"]],
["I have to remember to call my mother tomorrow.","I must not",["forget to call my mother tomorrow"]],
["I wish I didn't live here.","I regret",["living here"]],
["He made an effort to speak English.","He tried",["to speak English"]]
],
extra:[
["\"I'm sorry I broke your phone,\" said Tom.","Tom apologized",["for breaking my phone","for having broken my phone"]],
["\"Don't touch the cables,\" the electrician warned us.","The electrician warned us",["not to touch the cables"]],
["She doesn't like waking up early. She hates it.","She can't",["stand waking up early"]],
["I'd rather watch a film than read a book.","I prefer",["watching a film to reading a book"]],
["He said he wouldn't help us.","He refused",["to help us"]],
["Why don't we visit the museum?","Let's",["visit the museum"]],
["\"You should see a dentist,\" my mother said.","My mother advised me",["to see a dentist"]],
["I can't wait to see you again.","I'm looking",["forward to seeing you again"]],
["He no longer drinks coffee.","He has stopped",["drinking coffee"]],
["\"I didn't steal the money,\" said the boy.","The boy denied",["stealing the money","having stolen the money"]],
["There's no point in waiting any longer.","It's not worth",["waiting any longer"]],
["Please don't talk during the film.","Would you mind not",["talking during the film"]]
],
evau:[
["Julio 2025","Paul likes to drink red wine rather than white wine.","Paul prefers",["drinking red wine to drinking white wine","drinking red wine to white wine"]],
["Junio 2024","I was so sorry I told him the truth.","I regretted",["telling him the truth"]],
["Julio 2024 / Junio 2019","All students are interested in the lecture.","All students find",["the lecture interesting"]],
["Julio 2020 / Julio 2019","Don't tell any more lies, please.","Please stop",["telling lies","telling any more lies","telling more lies"]],
["Junio 2019","It's habitual for my mom to walk 5 kilometers every day.","My mom is used to",["walking 5 kilometers every day","walking five kilometers every day","walking 5 kilometres every day","walking five kilometres every day"]],
["Julio 2018","Shall we go to the theater on Saturday?","What about",["going to the theater on Saturday","going to the theatre on Saturday"]],
["Junio 2017","I am impatient to watch the last Star Wars film.","I am looking",["forward to watching the last Star Wars film"]],
["Sept 2016","My sister gave up going to the gym last month.","My sister stopped",["going to the gym last month"]],
["Sept 2015","To work abroad is OK for me","I don't mind",["working abroad"]],
["Junio 2014","My girlfriend would rather stay at home than go to the movies.","My girlfriend prefers",["staying at home to going to the movies"]],
["Junio 2013","She plays cricket very well.","She is",["very good at playing cricket","really good at playing cricket","good at playing cricket"]],
["Junio 2013","I prefer not winning to taking drugs","I'd",["rather not win than take drugs"]],
["Junio 2012","My mother prefers cooking to cleaning the rooms.","My mother would",["rather cook than clean the rooms"]],
["Junio 2011","\"I'm sorry that I have read the diary\", Doris said.","Doris apologized",["for reading the diary","for having read the diary"]],
["Sept 2011","She forgot to do her homework.","She",["did not remember to do her homework"]],
["Junio 2010","Why don't we have lunch together, Carol?","Let's",["have lunch together, Carol","have lunch together"]],
["Sept 2010","I prefer to go to the cinema this evening.","I'd rather",["go to the cinema this evening"]],
["Sept 2010","Why don't we go to Notting Hill Carnival?","Mary suggested",SG("going to Notting Hill Carnival","go to Notting Hill Carnival")],
["Sept 2008","She gave up going to French lessons.","She stopped",["going to French lessons"]],
["Sept 2007","He forgot to phone his wife yesterday.","He didn't remember",["to phone his wife yesterday","to call his wife yesterday"]],
["Junio 2006","I'm going to the theater tomorrow, and I'm really looking forward to it.","I'm really looking",["forward to going to the theater tomorrow","forward to going to the theatre tomorrow"]],
["Junio 2004","Steve advised me to tell Paul about it.","Steve suggested",["that I tell Paul about it","that I should tell Paul about it","telling Paul about it","my telling Paul about it","that I told Paul about it"],"En el cuaderno pone «adviced» (errata de «advised»)."],
["Junio 2004","Beth hasn't smoked since last December.","Beth stopped",["smoking last December"]],
["Sept 2003","I forgot to phone Lisa on her birthday.","I didn't remember",["to phone Lisa on her birthday","to call Lisa on her birthday"]],
["Junio 2002","\"Why don't we play computer games?\", said Michael.","Michael suggested",SG("playing computer games","play computer games")],
["Sept 2002","Will you post this letter for me, please?","Do you mind",["posting this letter for me","posting this letter for me, please"]],
["Junio 2001","Sharon hasn't eaten junk food since last May.","Sharon stopped",["eating junk food last May"]],
["Junio 2000","I was not invited and I am sorry about that.","I would like",["to have been invited"]]
]});
})();
