GRAM.register("questions",{
rule:"Pregunta <b>solo por la parte subrayada</b>: palabra interrogativa + verbo auxiliar/modal + sujeto + verbo principal. Si lo subrayado es el sujeto, no hay auxiliar: <i>Who broke the window?</i>",
theory:`
<div class="box"><p><b>Siempre hay que preguntar por la parte subrayada.</b> Misma frase, tres preguntas distintas según lo que subrayes:</p>
<p class="ex" style="margin-top:6px"><u>Pedro</u> está en casa con su hermano → <b>¿Quién</b> está en casa con su hermano?<br>Pedro está <u>en casa</u> con su hermano → <b>¿Dónde</b> está Pedro con su hermano?<br>Pedro está en casa <u>con su hermano</u> → <b>¿Con quién</b> está Pedro en casa?</p></div>
<h3>Question words</h3>
<div class="tw"><table class="t"><tr><th>Who</th><th>¿Quién? / ¿A quién?</th><th>Which</th><th>¿Cuál?</th></tr>
<tr><td>Whose</td><td>¿De quién?</td><td>How</td><td>¿Cómo?</td></tr>
<tr><td>Where</td><td>¿Dónde?</td><td>How many</td><td>¿Cuántos/as? (contables)</td></tr>
<tr><td>When</td><td>¿Cuándo?</td><td>How much</td><td>¿Cuánto/a? (incontables, precio)</td></tr>
<tr><td>Why</td><td>¿Por qué?</td><td>How old</td><td>¿Cuántos años?</td></tr>
<tr><td>What</td><td>¿Qué?</td><td>How far</td><td>¿A qué distancia?</td></tr>
<tr><td>What time</td><td>¿A qué hora?</td><td>How often</td><td>¿Con qué frecuencia?</td></tr>
<tr><td>What kind (of)</td><td>¿Qué clase de?</td><td><b>How long</b></td><td><b>¿Cuánto tiempo?</b></td></tr></table></div>
<h3>Orden de las palabras</h3>
<div class="box"><p class="eq">QUESTION WORD + AUXILIARY / MODAL + SUBJECT + MAIN VERB</p>
<div class="tw"><table class="t" style="margin-top:8px"><tr><th>Tiempo</th><th>Auxiliar</th><th>Ejemplo</th></tr>
<tr><td>Present simple</td><td>do / does</td><td>Where <b>does</b> she live?</td></tr>
<tr><td>Past simple</td><td>did</td><td>When <b>did</b> you arrive?</td></tr>
<tr><td>Present continuous</td><td>is / are</td><td>What <b>is</b> he doing?</td></tr>
<tr><td>Past continuous</td><td>was / were</td><td>Where <b>were</b> they playing?</td></tr>
<tr><td>Present perfect</td><td>has / have</td><td>How long <b>have</b> you lived here?</td></tr>
<tr><td>Past perfect</td><td>had</td><td>What <b>had</b> she lost?</td></tr>
<tr><td>Futuro</td><td>will / is going to</td><td>When <b>will</b> they come?</td></tr>
<tr><td>Modales</td><td>can, must, should…</td><td>What <b>should</b> I do?</td></tr></table></div></div>
<h3>Claves por tipo de dato subrayado</h3>
<ul>
<li><b>Persona sujeto</b> (John, your friend Helen…) → <b>Who</b> + verbo (sin auxiliar): <i>Who prefers travelling by train?</i></li>
<li><b>Persona complemento</b> → <b>Who</b> + auxiliar + sujeto + verbo: <i>Who do you need to see?</i></li>
<li><b>Cosa</b> → <b>What</b>. <b>Lugar</b> → <b>Where</b>. <b>Momento</b> (yesterday, last night, in 1870) → <b>When</b>.</li>
<li><b>Hora</b> (at 2 pm) → <b>What time</b>. <b>Duración</b> (for a year, two hours, took…) → <b>How long</b>. <b>since + fecha</b> → <b>How long / Since when</b>.</li>
<li><b>Frecuencia</b> (every day, three times a week) → <b>How often</b>. <b>Modo</b> (carefully) → <b>How</b>. <b>Causa</b> (because…) → <b>Why</b>.</li>
<li><b>Cantidad</b>: <i>over 10,000 copies</i> → <b>How many copies…</b>; <i>100 euros</i> → <b>How much…</b></li>
<li><b>Posesión</b>: <i>belongs to Stephen</i> → <b>Whose book is this?</b> o <b>Who does this book belong to?</b></li>
</ul>
<div class="box plus"><p>La <b>preposición</b> se suele quedar al final de la pregunta: <i>Who is he living <b>with</b>?</i>, <i>What did they complain <b>about</b>?</i> (más formal: <i>With whom is he living?</i>). Al cambiar la persona, cambia el pronombre: <i>my sister</i> → <i>your sister</i>; <i>I</i> → <i>you</i>.</p></div>
`,
clase:[
["The album has sold [over 10,000 copies].","",["How many copies has the album sold"]],
["The novel was written [in 1870].","",["When was the novel written","In which year was the novel written","What year was the novel written","In what year was the novel written"]],
["The Adventures of Tintin first appeared [in the late twenties].","",["When did The Adventures of Tintin first appear","When did the Adventures of Tintin first appear"]],
["Her daughter spent [100 Euros] on clothes yesterday.","",["How much did her daughter spend on clothes yesterday","How much money did her daughter spend on clothes yesterday"]],
["[John] prefers travelling by train.","",["Who prefers travelling by train","Who prefers traveling by train"]],
["He went [to the gym] after the lesson.","",["Where did he go after the lesson"]],
["She stole the ring [last night].","",["When did she steal the ring"]],
["I took [some books and a DVD] from the library.","",["What did you take from the library","What did I take from the library"]],
["[Paul Gasol] became the first Spaniard to win an NBA title.","",["Who became the first Spaniard to win an NBA title"]],
["This book belongs to [Stephen].","",["Who does this book belong to","Whose book is this","Whose is this book","To whom does this book belong","Who does this book belong to"]],
["That took [four hours].","",["How long did that take"]],
["Sarah goes to the gym [three times a week].","",["How often does Sarah go to the gym"]],
["She didn't realize [until the following day].","",["When did she realize","Until when did she not realize","How long did she not realize"],"Preguntar por «until the following day» admite varias formas; la más natural es When did she realize?"],
["Mary visited her uncle [yesterday].","",["When did Mary visit her uncle"]],
["John went to [London] last week.","",["Where did John go last week"]],
["I spent my holidays [in France].","",["Where did you spend your holidays","Where did I spend my holidays"]]
],
extra:[
["My parents are going to travel [to Italy] next summer.","",["Where are your parents going to travel next summer","Where are your parents going to travel to next summer"]],
["The meeting starts [at 10 o'clock].","",["What time does the meeting start","When does the meeting start"]],
["[Maria] broke the window.","",["Who broke the window"]],
["They have lived here [for five years].","",["How long have they lived here","How long have they been living here"]],
["Tom is reading [a detective novel].","",["What is Tom reading"]],
["She feels sad [because she failed the exam].","",["Why does she feel sad","Why is she sad","Why does she feel so sad"]],
["We bought the tickets [online].","",["How did you buy the tickets","How did we buy the tickets","Where did you buy the tickets"]],
["This is [Laura's] bag.","",["Whose bag is this","Whose is this bag"]],
["The film lasts [two hours].","",["How long does the film last"]],
["He goes to the cinema [once a month].","",["How often does he go to the cinema"]],
["There are [twenty-five] students in my class.","",["How many students are there in your class","How many students are in your class"]],
["I prefer [the blue one].","",["Which one do you prefer","Which do you prefer","Which one do I prefer"]]
],
evau:[
["Julio 2026","Lisa bought [a new laptop] last week.","",["What did Lisa buy last week"]],
["Junio 2026","Sam ordered [a new schoolbag] last month","",["What did Sam order last month"]],
["Junio 2025","Billie Eilish has been working on her new album [for over a year now].","",["How long has Billie Eilish been working on her new album","How long has Billie Eilish been working on her new album now"]],
["Julio 2025","My sister arrived [at 2 pm]","",["What time did your sister arrive","When did your sister arrive","What time did my sister arrive","When did my sister arrive"]],
["Junio 2024","Rose's babysitter always picks her children up [outside the school gate].","",["Where does Rose's babysitter always pick her children up","Where does Rose's babysitter always pick up her children","Where does Rose's babysitter pick her children up","Where does Rose's babysitter pick up her children"]],
["Julio 2024","The customers complained about [the room service].","",["What did the customers complain about","About what did the customers complain"]],
["Junio 2023","We are looking after [Sarah's kids] these days.","",["Who are you looking after these days","Who are we looking after these days","Who is Sarah looking after these days"],"Si subrayas «Sarah's kids» entero, preguntas con Who; con «Whose kids» solo si estuviera subrayado Sarah's."],
["Julio 2022","Mike sold his house [because he moved to New York].","",["Why did Mike sell his house"]],
["Julio 2020","I went to Poland [last October].","",["When did you go to Poland","When did I go to Poland"]],
["Julio 2018","The teachers have been working [for a year].","",["How long have the teachers been working"]],
["Junio 2002","[Your friend Helen] goes to school every day.","",["Who goes to school every day"]],
["Junio 2017","I need to see [the bank manager].","",["Who do you need to see","Who do I need to see","Whom do you need to see","Whom do I need to see"]],
["Sept 2017","The students have been studying [for a week].","",["How long have the students been studying"]],
["Junio 2016","I have dreamt about [a strange city].","",["What have you dreamt about","What have you dreamed about","What have I dreamt about","What have I dreamed about","About what have you dreamt","About what have you dreamed"]],
["Sept 2016","He's been living in the Dakota building [for ten years].","",["How long has he been living in the Dakota building"]],
["Sept 2016","His brother repairs everything [carefully].","",["How does his brother repair everything"]],
["Junio 2015","The report was released [more than twenty years ago].","",["When was the report released","How long ago was the report released"]],
["Sept 2015","[John] is picking her up at the airport tomorrow.","",["Who is picking her up at the airport tomorrow","Who's picking her up at the airport tomorrow"]],
["Junio 2014","He's living with [his aunt] at the moment.","",["Who is he living with at the moment","With whom is he living at the moment","Who is he living with now"]],
["Junio 2014","The new manager stayed [three months] in England.","",["How long did the new manager stay in England"]],
["Sept 2014","Your boyfriend is coming [tomorrow].","",["When is your boyfriend coming"]],
["Junio 2013","It took me [two hours] to go to Central London.","",["How long did it take you to go to Central London","How long did it take me to go to Central London"]],
["Junio 2013","My brother left [yesterday].","",["When did your brother leave","When did my brother leave"]],
["Sept 2013","Your father goes fishing [twice a week].","",["How often does your father go fishing"]],
["Junio 2012","John has worked in Australia [since 2005].","",["Since when has John worked in Australia","How long has John worked in Australia","How long has John been working in Australia","Since when has John been working in Australia"]],
["Sept 2012","John bought [a teddy bear] when he was in New York.","",["What did John buy when he was in New York"]],
["Junio 2011","She heard [some voices] coming from the kitchen.","",["What did she hear coming from the kitchen"]],
["Junio 2011","She's practiced karate [since she was a kid].","",["Since when has she practiced karate","How long has she practiced karate","Since when has she practised karate","How long has she practised karate","How long has she been practicing karate","How long has she been practising karate","Since when has she been practicing karate","Since when has she been practising karate"]],
["Sept 2011","She reads her email [every day].","",["How often does she read her email","How often does she read her emails"]],
["Sept 2011","My favorite TV program starts [at 21:45].","",["What time does your favorite TV program start","When does your favorite TV program start","What time does your favourite TV programme start","When does your favourite TV programme start","What time does your favorite TV programme start","What time does your favourite TV program start","What time does my favorite TV program start","When does my favorite TV program start"]],
["Junio 2010","[Joe's father] is an expert climber.","",["Who is an expert climber"]],
["Junio 2010","It takes [three hours] to get to London from here.","",["How long does it take to get to London from here"]],
["Sept 2010","It took him [two minutes] to prepare a lovely cup of hot chocolate.","",["How long did it take him to prepare a lovely cup of hot chocolate"]],
["Sept 2010","Peter went to [Notting Hill Festival] last year.","",["Where did Peter go last year"]],
["Junio 2009","The police saw her [with the suspect] after the robbery.","",["Who did the police see her with after the robbery","With whom did the police see her after the robbery","Who did the police see her with"]],
["Sept 2009","The children were playing [on the beach].","",["Where were the children playing"]],
["Sept 2008","[The policeman] knew where the thief was hidden.","",["Who knew where the thief was hidden"]],
["Sept 2007","[Ben] drives 200 miles every day.","",["Who drives 200 miles every day"]],
["Junio 2005","My grandfather is [eighty-two years old]","",["How old is your grandfather","How old is my grandfather"]],
["Sept 2004","I have English classes [three times a week].","",["How often do you have English classes","How often do I have English classes"]],
["Sept 2002","The next plane leaves at [9.45 p.m.]","",["What time does the next plane leave","When does the next plane leave"]],
["Junio 2000","It takes me [two hours] to get there.","",["How long does it take you to get there","How long does it take me to get there"]],
["Sept 2000","[John] lives next door.","",["Who lives next door"]]
]});
