(function(){
/* ayudantes para escribir muchas variantes válidas */
function TH(a){var r=[];a.forEach(function(x){r.push('that '+x);r.push(x)});return r}
function XX(tpl,map){var res=[tpl];Object.keys(map).forEach(function(k){var n=[];res.forEach(function(s){map[k].forEach(function(v){n.push(s.split('{'+k+'}').join(v))})});res=n});return res}
function SG(g,b,subs){var r=[g];(subs||['we','they']).forEach(function(s){r.push('that '+s+' '+b);r.push('that '+s+' should '+b)});return r}
var ND=["the next day","the following day","the day after"], BD=["the day before","the previous day"];
var NW=["the next week","the following week","the week after"], PW=["the week before","the previous week"];
var THEN=["then","immediately","at once","right away","at that moment","at that time"];
GRAM.register("reported-speech",{
rule:"Reported speech: cambia <b>pronombres</b>, <b>tiempo verbal</b> (un paso atrás) y <b>expresiones de tiempo/lugar</b>. Órdenes: <i>told + persona + (not) to + verbo</i>. Preguntas: <i>asked + palabra interrogativa / if + sujeto + verbo</i> (sin auxiliar do/does/did).",
theory:`
<p class="muted">El estilo indirecto reproduce lo que alguien ha dicho. Hay que cambiar tres cosas.</p>
<h3>1) Pronombres, determinantes y referencias temporales</h3>
<div class="tw"><table class="t"><tr><th>Directo</th><th>Indirecto</th></tr>
<tr><td>this / here</td><td>that / there</td></tr>
<tr><td>today · tonight · now</td><td>that day · that night · then / at that time</td></tr>
<tr><td>yesterday</td><td>the day before / the previous day</td></tr>
<tr><td>tomorrow</td><td>the next day / the following day / the day after</td></tr>
<tr><td>next (week, month, year)</td><td>the following (week…)</td></tr>
<tr><td>last (night, week, month, year)</td><td>the previous (night…) / the (night…) before</td></tr>
<tr><td>(two days, years…) ago</td><td>(two days, years…) before</td></tr></table></div>
<h3>2) Tiempos verbales: un paso atrás <small class="muted">(* no cambian si ya está en ese tiempo)</small></h3>
<div class="tw"><table class="t"><tr><th>Directo</th><th>Indirecto</th></tr>
<tr><td>Simple present</td><td>Simple past</td></tr>
<tr><td>Simple past</td><td>Simple past / <b>past perfect</b></td></tr>
<tr><td>Present continuous</td><td>Past continuous</td></tr>
<tr><td>Past continuous</td><td>Past perfect continuous (had been + -ing)</td></tr>
<tr><td>Present perfect</td><td><b>Past perfect</b>*</td></tr>
<tr><td>will → <b>would</b>* · must → <b>had to</b>* · shall → <b>should</b>* · may → <b>might</b>*</td><td></td></tr></table></div>
<h3>3) Tipos de frase</h3>
<ul>
<li><b>Enunciativas:</b> <span class="eq">He said (that) + sujeto + verbo + resto</span> · <i>“I’m living in London now.”</i> → <i>She said (that) she was living in London then.</i></li>
<li><b>Otros verbos introductorios:</b> <b>apologized for + -ing</b> (<i>she apologized for not sending it</i>) · <b>admitted</b> (+ -ing o that) · <b>promised to + inf</b> · <b>refused to + inf</b> · <b>accused somebody of + -ing</b> · <b>congratulated somebody on + -ing</b> · <b>denied + -ing / that</b> · <b>reminded somebody to + inf</b> · <b>suggested + -ing / that</b> · <b>invited somebody to + inf</b>.</li>
<li><b>Órdenes y peticiones</b> (<i>exhortativas</i>): órdenes → <b>TELL somebody to + infinitivo</b>; peticiones (<i>please</i>) → <b>ASK somebody to + infinitivo</b>. Negativas: <b>not to</b>. <i>“Go to bed, now!”</i> → <i>She told the child to go to bed then.</i></li>
<li><b>Preguntas con interrogativo</b> (when, why, what, where…): <span class="eq">ASK somebody + INTERROGATIVO + SUJETO + VERBO + RESTO</span> <small>(¡orden de afirmativa, sin do/did y sin «?»!)</small> · <i>“When did you find this key?” → The teacher asked my sister when she had found that key.</i></li>
<li><b>Preguntas sí/no:</b> <span class="eq">ASK somebody + IF / WHETHER + SUJETO + VERBO + RESTO</span> · <i>“Are they planning to travel abroad?” → He asked if they were planning to travel abroad.</i></li>
<li><b>«Let’s …» / «Why don’t we …?» / «Shall we …?»</b> → <b>suggested + -ing</b> (<i>Mary suggested buying some sweets</i>) o <i>suggested that we should…</i></li>
</ul>
<div class="box plus"><p><b>say / tell:</b> <i>say</i> no lleva persona (<i>he said that…</i>; <i>he said <u>to me</u> that…</i>); <i>tell</i> sí (<i>he told <u>me</u> that…</i>). Si el verbo introductorio está en presente (<i>I wonder where my keys are</i>) el verbo de la pregunta <b>no retrocede</b>. Los pronombres cambian según quién habla: <i>“I’ll call you”, he told me</i> → <i>he would call me</i>.</p></div>
`,
clase:[
["\"I will go sailing tomorrow\", he told us.","He",XX("told us {c}he would go sailing {a}",{c:["that ",""],a:ND})],
["Charles said: \"I finished cleaning my room two hours ago.\"","Charles said",TH(XX("he had finished cleaning his room two hours {a}",{a:["before","earlier"]}))],
["\"We will arrest them for illegal entry in the country\", the policeman said.","The policeman said",TH(["they would arrest them for illegal entry in the country","they would arrest them for illegal entry into the country","he would arrest them for illegal entry in the country"])],
["\"I'm sorry I didn't send it\", she said.","She apologized",["for not sending it","for not having sent it","for having not sent it"]],
["\"I'm madly in love with her.\"","He admitted",["that he was madly in love with her","he was madly in love with her","being madly in love with her"]],
["\"I'll go on a date with you.\"","She promised",["to go on a date with me","that she would go on a date with me"]],
["\"I won't drive you home.\"","She refused",["to drive me home"]],
["\"You stole the money.\"","She accused me",["of stealing the money","of having stolen the money"]],
["\"Amazing job. You've passed with flying colors.\"","Her father congratulated her",["on passing with flying colors","on having passed with flying colors","on passing with flying colours","on having passed with flying colours"]],
["\"I didn't copy on the test.\"","The student denied",["copying on the test","having copied on the test","that he had copied on the test"]],
["\"Don't forget to bring the laptops, kids.\"","The teacher reminded the kids",["to bring the laptops"]],
["She said to the child: \"Go to bed, now!\"","She",XX("told the child to go to bed {a}",{a:THEN})],
["Paul said to me: \"Please, help me!!!\"","Paul",["asked me to help him"]],
["Tom's mom said to us: \"Please, don't be late!\"","Tom's mom",["asked us not to be late"]],
["\"Be quiet\", the teacher told his students.","The teacher",["told his students to be quiet"]],
["\"Don't play football in the garden, Billy!\"","Ethan",["told Billy not to play football in the garden"]],
["\"Don't shout at me!\", John told Stephen.","John",["told Stephen not to shout at him"]],
["\"Let's spend the night together.\"","Mick suggested",["spending the night together","that they spend the night together","that they should spend the night together","that we spend the night together","that we should spend the night together"]],
["\"When did you find this key?\" the teacher asked my sister.","The teacher",["asked my sister when she had found that key","asked my sister when she had found this key"]],
["\"Are they planning to travel abroad?\", he asked.","He asked",["if they were planning to travel abroad","whether they were planning to travel abroad"]],
["\"Are there any messages for me?\", asked the manager.","The manager asked",["if there were any messages for him","whether there were any messages for him"]],
["\"Where is the nearest cinema, please?\", she asked.","She asked",["where the nearest cinema was"]],
["\"Can you help me?\" he asked me. (Question)","He asked me",["if I could help him","whether I could help him"]],
["\"Can you help me?\" he asked me. (Request)","He asked me",["to help him"]],
["She asked him: \"Can you give this letter to Penny?\" (Question)","She",["asked him if he could give that letter to Penny","asked him if he could give this letter to Penny","asked him whether he could give that letter to Penny","asked him whether he could give this letter to Penny"]],
["She asked him: \"Can you give this letter to Penny?\" (Request)","She",["asked him to give that letter to Penny","asked him to give this letter to Penny"]],
["\"Would you like to come over for dinner on Saturday\", she asked me.","She invited",["me to come over for dinner on Saturday"]],
["\"Shall we go to the movies?\"","He suggested",SG("going to the movies","go to the movies")],
["Sam said: \"Why don't we stay in?\"","Sam",["suggested staying in","suggested that they stay in","suggested that they should stay in","suggested that we stay in","suggested that we should stay in"]]
],
extra:[
["\"I'm tired,\" she said.","She said",TH(["she was tired"])],
["\"I will call you tomorrow,\" he said to me.","He told me",TH(XX("he would call me {a}",{a:ND}))],
["\"Don't open the door!\" the mother told the children.","The mother told the children",["not to open the door"]],
["\"Where do you live?\" she asked me.","She asked me",["where I lived"]],
["\"Are you hungry?\" he asked her.","He asked her",["if she was hungry","whether she was hungry"]],
["\"I didn't break the vase,\" said the boy.","The boy denied",["breaking the vase","having broken the vase","that he had broken the vase"]],
["\"I'll help you with your homework,\" he said to me.","He promised",["to help me with my homework"]],
["\"Let's go to the beach,\" said Ana.","Ana suggested",SG("going to the beach","go to the beach")],
["\"Please, sit down,\" the doctor said to me.","The doctor asked",["me to sit down"]],
["\"I have lost my keys,\" she said.","She said",TH(["she had lost her keys"])],
["\"What did you do last night?\" he asked me.","He asked me",XX("what I had done {a}",{a:["the night before","the previous night"]})],
["\"You stole my bike!\" he shouted.","He accused me",["of stealing his bike","of having stolen his bike"]]
],
evau:[
["Julio 2026","\"The gym closed at 10:00 yesterday\" Paul said.","Paul said",TH(XX("the gym had closed at {t} {a}",{t:["10:00","10","ten"],a:BD}))],
["Junio 2026","\"The school opened at 8:00 yesterday\", Remi said.","Remi",XX("said {c}the school had opened at {t} {a}",{c:["that ",""],t:["8:00","8","eight"],a:BD})],
["Junio 2025","\"Why don't you join us for the show tomorrow?\", she suggested","She suggested",XX("that {p} {v} {o} for the show {a}",{p:["I"],v:["join","should join","joined"],o:["them","her"],a:ND})],
["Julio 2025","My mother said \"I'll lend you some curtains tomorrow\".","My mother said",TH(XX("she would lend me some curtains {a}",{a:ND}))],
["Junio 2024","\"Where did the annual meeting of the World Bank take place?\", she asked me","She wanted to know",["where the annual meeting of the World Bank had taken place"]],
["Julio 2024","\"Where are my keys?\", my mum asked.","My mum wondered",["where her keys were"]],
["Julio 2024","\"Give me your papers!\" The policeman told me.","The policeman told me",["to give him my papers"]],
["Junio 2023","\"How long have you been living in this flat?\", they asked me.","They asked me",["how long I had been living in that flat","how long I had been living in this flat","how long I had lived in that flat"]],
["Julio 2023","\"When will you travel to London?\", Jane asked me.","Jane asked me",["when I would travel to London","when I would be travelling to London","when I would be traveling to London"]],
["Julio 2023","\"Let's buy some sweets\", Mary said.","Mary suggested",SG("buying some sweets","buy some sweets")],
["Junio 2002","\"Why don't we play computer games?\" said Michael","Michael suggested",SG("playing computer games","play computer games")],
["Junio 2022","\"When did Susan finish her degree?\" he asked.","He asked",["when Susan had finished her degree"]],
["Junio 2022","\"I have met many interesting people in this course. \"Mary said.","Mary said",TH(["she had met many interesting people in that course","she had met many interesting people in the course"])],
["Junio 2002","She said: \"Are you coming to the party on Friday?\"","She asked him",["if he was coming to the party on Friday","whether he was coming to the party on Friday"]],
["Julio 2022","\"Let's cook some pasta\", John said.","John suggested",SG("cooking some pasta","cook some pasta")],
["Julio 2022","\"Where did you put my books?\", Mary asked me.","Mary asked me",["where I had put her books"]],
["Junio 2021","Mark said to me: \"How are you going to solve this problem?\"","Mark asked me",["how I was going to solve that problem","how I was going to solve this problem"]],
["Junio 2021","Susan said: \"Mark, don't shout in class\".","Susan told",["Mark not to shout in class"]],
["Julio 2021","\"When will you be travelling to London?\", Jane asked me","Jane asked",["me when I would be travelling to London","me when I would be traveling to London"]],
["Julio 2021","\"I am very sorry I was not very helpful yesterday\", he said to me","He apologized",XX("{x}for not {h} very helpful {a}",{x:["","to me "],h:["having been","being"],a:BD})],
["Junio 2020","My parents asked, \"Where were you last night?\"","My parents asked",XX("{x}where I had been {a}",{x:["","me "],a:["the night before","the previous night"]})],
["Junio 2020","My parents asked, \"have you done your homework?\"","My parents asked",XX("{x}{c} I had done my homework",{x:["","me "],c:["if","whether"]})],
["Julio 2020","Why don't we go to the cinema? I asked","I suggested",SG("going to the cinema","go to the cinema")],
["Junio 2019","Tom asked me: \"Where have you left my notebook?\"","Tom asked me",["where I had left his notebook"]],
["Junio 2019","\"Let's go swimming to the lake\", Peter suggested","Peter suggested",SG("going swimming to the lake","go swimming to the lake")],
["Julio 2019","\"What time did you do the shopping, Mary?\" he asked","He asked Mary",["what time she had done the shopping"]],
["Junio 2018","\"Did you play a game last weekend?\" she asked us","She",XX("asked us {c} we had played a game {a}",{c:["if","whether"],a:["the weekend before","the previous weekend"]})],
["Junio 2018","\"I have listened to this song twice today\", Mary said.","Mary said",TH(["she had listened to that song twice that day"])],
["Julio 2018","\"No! I won't eat pizza in that restaurant!\" she said","She refused",["to eat pizza in that restaurant"]],
["Junio 2017","\"An airplane crashed into the sea here two years ago\", the reporter said.","The reporter",XX("said {c}an airplane had crashed into the sea there two years {a}",{c:["that ",""],a:["before","earlier"]})],
["Sept 2017","\"Why don't we prepare a barbecue?\" Mary said.","Mary suggested",SG("preparing a barbecue","prepare a barbecue")],
["Sept 2017","\"No! I wont go there!\" she said","She refused",["to go there"]],
["Junio 2016","\"Leave my office now\", John told her.","John told her",XX("to leave his office {t}",{t:THEN})],
["Sept 2016","\"I will go to New York City next summer\", he said.","He said",TH(XX("he would go to New York City {a}",{a:["the next summer","the following summer","the summer after"]}))],
["Sept 2015","\"Did you play football with your cousin last week?\" She asked him.","She asked him",XX("{c} he had played football with his cousin {a}",{c:["if","whether"],a:PW})],
["Junio 2014","\"How long have you been working abroad?\" she asked him.","She asked him",["how long he had been working abroad"]],
["Sept 2014","\"Go to the headmaster office now\" Mr. Smith told her.","Mr. Smith told her",XX("to go to the {h} {t}",{h:["headmaster office","headmaster's office"],t:THEN})],
["Sept 2013","My friend said: \"Let's go sailing next weekend\".","My friend suggested",["going sailing the next weekend","going sailing the following weekend","that we go sailing the next weekend","that we go sailing the following weekend","that we should go sailing the next weekend","that we should go sailing the following weekend","that they go sailing the next weekend","that they go sailing the following weekend","that they should go sailing the next weekend","that they should go sailing the following weekend"]],
["Sept 2013","\"I hid the money last month\", my father told the police","My father told the police",TH(XX("he had hidden the money {a}",{a:["the month before","the previous month"]}))],
["Junio 2012","\"Did you buy the newspaper yesterday?\" I asked my brother.","I asked my brother",XX("{c} he had bought the newspaper {a}",{c:["if","whether"],a:BD})],
["Sept 2012","\"Why didn't you go to school yesterday?\" The teacher asked me.","The teacher asked me",XX("why I had not gone to school {a}",{a:BD})],
["Sept 2011","\"Hakim is the most generous of you.\"","Mary announced",TH(["Hakim was the most generous of them","Hakim was the most generous of us","Hakim was the most generous of all"])],
["Junio 2010","\"Have a seat, please\", Mr. Block told me.","Mr. Block",["told me to have a seat"]],
["Junio 2010","\"I'm late because I missed the bus\" she said.","She said",TH(["she was late because she had missed the bus"])],
["Sept 2010","\"Where do you live, Alice?\"","The white rabbit asked",["Alice where she lived"]],
["Junio 2009","\"Who has been using my computer?\", asked Tom.","Tom",["asked who had been using his computer"]],
["Sept 2009","Her parents said:\" Get your coat, Lydia!\"","Her parents",["told Lydia to get her coat"]],
["Junio 2008","\"Why don't you call me tomorrow?\" he said.","He suggested",XX("that {p} {v} him {a}",{p:["I"],v:["call","should call","called"],a:ND})],
["Sept 2007","The trainer said: \"Molly, come back to the team!\"","The trainer told her",["to come back to the team"]],
["Junio 2006","Mary said to us: \"Don't be late\".","She told",["us not to be late"]],
["Junio 2005","\"Perhaps it would be better to go out in the afternoon\", Sharon's mother said.","Sharon's mother recommended",["going out in the afternoon","that they go out in the afternoon","that they should go out in the afternoon","that we go out in the afternoon","that we should go out in the afternoon"]],
["Sept 2005","The teacher said: \"You have to hand your papers in at the end of this class.\"","The teacher",(function(){var r=[];["we had to hand our papers in","we had to hand in our papers","they had to hand their papers in","they had to hand in their papers"].forEach(function(c){["at the end of that class","at the end of the class"].forEach(function(e){r.push('said that '+c+' '+e);r.push('said '+c+' '+e)})});return r})()],
["Sept 2004","\"Where are your brothers, Sheila?\"","Peter asked",["Sheila where her brothers were"]],
["Junio 2003","\"Don't speak so loud, please\", she said to the students.","She",["asked the students not to speak so loud","asked the students not to speak so loudly","told the students not to speak so loud","told the students not to speak so loudly"]],
["Sept 2003","\"I have never seen anything so beautiful\", he said","He said",TH(["he had never seen anything so beautiful"])],
["Junio 2002","She said: \"Are you coming to the party on Friday?\"","She asked him",["if he was coming to the party on Friday","whether he was coming to the party on Friday"]],
["Sept 2002","\"How much money have you put into the account?\" They asked.","They asked him",["how much money he had put into the account"],"En el cuaderno pone «The asked him» (errata de «They asked him»)."],
["Junio 2001","\"What time do the banks close today?\"","Tim asked me",["what time the banks closed that day"]],
["Sept 2001","Where are my keys?","I wonder",["where my keys are"]],
["Junio 2000","The teacher said to me: \"Wait for me outside\"","The teacher told me",["to wait for him outside","to wait for her outside"]],
["Sept 2000","\"Where did the robbery take place?\" He asked.","He asked",["where the robbery had taken place"],"En el cuaderno este ejercicio aparece con dos números (61 y 62), pero es uno solo."]
]});
})();
