(function(){
function XX(tpl,map){var res=[tpl];Object.keys(map).forEach(function(k){var n=[];res.forEach(function(s){map[k].forEach(function(v){n.push(s.split('{'+k+'}').join(v))})});res=n});return res}
var T=["","that ","which "], P=["","that ","who ","whom "], NB=["neighbor","neighbour"];
GRAM.register("relative-clauses",{
rule:"<b>Defining</b> (información necesaria): sin comas, se puede usar <i>that</i> y omitir el pronombre si es objeto. <b>Non-defining</b> (información extra): <b>siempre entre comas</b>, nunca <i>that</i>, no se omite el pronombre. Posesión → <b>whose</b> · lugar → <b>where</b> · tiempo → <b>when</b>.",
theory:`
<div class="tw"><table class="t"><tr><th>DEFINING (especificativas)</th><th>NON-DEFINING (explicativas)</th></tr>
<tr><td>Dan una <b>información necesaria</b> para entender el mensaje.</td><td>Dan una <b>información extra</b> que no es necesaria para entender la frase.</td></tr>
<tr><td><b>Nunca llevan comas</b>.</td><td><b>Siempre llevan comas</b>.</td></tr>
<tr><td>Podemos usar <b>THAT</b> en vez de WHO y WHICH.</td><td><b>No</b> podemos usar THAT en vez de WHO y WHICH.</td></tr>
<tr><td>Podemos <b>omitir</b> el pronombre relativo cuando hace función de objeto directo.</td><td><b>No</b> podemos omitir el pronombre relativo.</td></tr></table></div>
<h3>Cómo unir dos frases</h3>
<ol>
<li>Busca en la <b>segunda frase</b> la palabra que repite algo de la primera (<i>she, him, it, her, there, here…</i>).</li>
<li>Sustitúyela por el <b>relativo</b> y colócalo <b>justo detrás</b> de lo que repite.</li>
<li>Si la segunda frase estaba toda dentro, la metes en la primera.</li>
</ol>
<div class="tw"><table class="t"><tr><th>Se repite…</th><th>Relativo</th><th>Ejemplo</th></tr>
<tr><td>una persona <b>sujeto</b> (she, he)</td><td><b>who</b> (that)</td><td>I like the girl <b>who</b> sits next to me. · I like Maria<b>, who</b> sits next to me.</td></tr>
<tr><td>una persona <b>objeto</b> (him, her)</td><td><b>who / whom / that / –</b></td><td>He hired the designer <b>(who)</b> you recommended. · He hired Tom<b>, whom</b> you recommended.</td></tr>
<tr><td>una <b>cosa</b></td><td><b>which</b> (that)</td><td>I lost the bible <b>(which)</b> you gave me. · I lost my bible<b>, which</b> you gave me.</td></tr>
<tr><td>un <b>posesivo</b> (his, her, its) o <i>X’s</i></td><td><b>whose</b></td><td>The little girl <b>whose</b> dog died is very sad. · My cousin<b>, whose</b> dog died, was very sad.</td></tr>
<tr><td>un <b>lugar</b> (there, here)</td><td><b>where</b> (in which, que… in)</td><td>I live in the city <b>where</b> I study. · I live in Barcelona<b>, where</b> I study.</td></tr>
<tr><td>un <b>momento</b> (that day, in 2024)</td><td><b>when</b> (in which)</td><td>The summer <b>when</b> I got married was hot. · 2024<b>, when</b> I got married, was very hot.</td></tr></table></div>
<ul>
<li><b>Preposición:</b> <i>The girl I live <b>with</b>…</i> (informal, al final) o <i>The girl <b>with whom</b> I live…</i> (formal; entonces solo <i>whom / which</i>, nunca that).</li>
<li><b>Non-defining → comas</b>: si la frase continúa tras la relativa, lleva coma <b>antes y después</b>: <i>Jennifer Egan<b>,</b> who won the 2011 Pulitzer Prize<b>,</b> is an American novelist.</i></li>
<li>Nombres propios, <i>my mother/sister…</i> (única), lugares o fechas concretos → casi siempre <b>non-defining</b>.</li>
</ul>
<div class="box plus"><p>El pronombre <b>solo se puede omitir</b> si es <b>objeto</b> (<i>the book <u>I bought</u></i>); si es sujeto, no (<i>the girl <u>who</u> sits…</i>). <i>Whose</i> es el único que no se puede omitir ni cambiar por that. En el examen, si pone <i>(Start) The house…</i>, empieza por el sustantivo y mete la otra frase detrás.</p></div>
`,
clase:[
["I like the girl. She sits next to me.","I like the girl",["who sits next to me","that sits next to me"]],
["He hired the designer. You recommended him.","He hired",XX("the designer {r}you recommended",{r:P})],
["I lost the bible. You gave it to me.","I lost",XX("the bible {r}you gave to me",{r:T}).concat(XX("the bible {r}you gave me",{r:T}))],
["The girl knows a lot about cars. I live with her.","The girl",XX("{r}I live with knows a lot about cars",{r:P}).concat(["with whom I live knows a lot about cars"])],
["The bike is falling apart. I've had it for 10 years.","The bike",XX("{r}I have had for 10 years is falling apart",{r:T}).concat(XX("{r}I've had for 10 years is falling apart",{r:T}))],
["The country is very hot. He went to that country last week.","The country",XX("{r}he went to last week is very hot",{r:T}).concat(["to which he went last week is very hot","where he went last week is very hot"])],
["My brother met a woman. I used to work with her.","My brother",XX("met a woman {r}I used to work with",{r:P}).concat(["met a woman with whom I used to work"])],
["The little girl is very sad. Her dog died.","The little girl",["whose dog died is very sad"]],
["I live in the city. I study here.","I live in",XX("the city {r}I study in",{r:T}).concat(["the city where I study","the city in which I study"])],
["The summer was hot. I got married in the summer.","The summer",["when I got married was hot","in which I got married was hot"].concat(XX("{r}I got married in was hot",{r:T}))],
["I like Maria. She sits next to me.","I like Maria,",["who sits next to me"],"","p"],
["He hired Tom. You recommended him.","He hired",["Tom, who you recommended","Tom, whom you recommended"],"En las non-defining no se puede omitir el pronombre ni usar that.","p"],
["I lost my bible. You gave it to me.","I lost",["my bible, which you gave to me","my bible, which you gave me"],"","p"],
["My sister knows a lot about cars. I live with her.","My sister,",["who I live with, knows a lot about cars","whom I live with, knows a lot about cars","with whom I live, knows a lot about cars"],"","p"],
["My bike is falling apart. I've had it for 10 years.","My bike,",["which I have had for 10 years, is falling apart","which I've had for 10 years, is falling apart"],"","p"],
["Spain is very hot. He went to Spain last week.","Spain,",["which he went to last week, is very hot","to which he went last week, is very hot","where he went last week, is very hot"],"","p"],
["My brother met his future wife. I used to work with her.","My brother met",["his future wife, who I used to work with","his future wife, whom I used to work with","his future wife, with whom I used to work"],"","p"],
["My cousin was very sad. His dog died.","My cousin,",["whose dog died, was very sad"],"","p"],
["I live in Barcelona. I study there.","I live",["in Barcelona, where I study"],"","p"],
["2024 was very hot. I got married in 2024.","2024,",["when I got married, was very hot","in which I got married, was very hot"],"","p"],
["He paid a lot of money for the house last year. It is now much cheaper.","The house",XX("{r}he paid a lot of money for last year is now much cheaper",{r:T}).concat(["for which he paid a lot of money last year is now much cheaper"])],
["In San Francisco I stayed in three hotels. They were terribly expensive.","In San Francisco I stayed",["in three hotels which were terribly expensive","in three hotels that were terribly expensive"]],
["I read a novel last summer. It was very interesting.","I read a novel",["that was very interesting last summer","which was very interesting last summer","last summer that was very interesting","last summer which was very interesting"]],
["The neighbor makes a lot of noise walking around. His flat is above mine.","The neighbor",["whose flat is above mine makes a lot of noise walking around","whose flat is above mine, makes a lot of noise walking around"]],
["Mary has bought a flat. It belonged to her grandmother.","Mary has",["bought a flat that belonged to her grandmother","bought a flat which belonged to her grandmother"]],
["Jennifer Egan is an American novelist. She won the 2011 Pulitzer Prize for Fiction.","Jennifer Egan,",["who won the 2011 Pulitzer Prize for Fiction, is an American novelist"],"","p"],
["I bought some red wine. It tasted like ink.","The red wine",XX("{r}I bought tasted like ink",{r:T})],
["My sister is at university. She is studying law.","My sister,",["who is studying law, is at university"],"","p"],
["That is the restaurant. I lost my briefcase there.","That is",["the restaurant where I lost my briefcase","the restaurant in which I lost my briefcase","the restaurant that I lost my briefcase in","the restaurant which I lost my briefcase in","the restaurant I lost my briefcase in"]],
["Adam was the man Laura had spoken to on the phone. He sat back in his desk.","Adam,",XX("who was the man {r}Laura had spoken to on the phone, sat back {p} his desk",{r:P,p:["in","at"]}).concat(XX("the man {r}Laura had spoken to on the phone, sat back {p} his desk",{r:P,p:["in","at"]})),"","p"],
["This is the place. We last had coffee together here.","This is",["the place where we last had coffee together","the place in which we last had coffee together","the place we last had coffee together"]]
],
extra:[
["This is the woman. She teaches me German.","This is",["the woman who teaches me German","the woman that teaches me German"]],
["The book was great. I borrowed it from the library.","The book",XX("{r}I borrowed from the library was great",{r:T})],
["My grandmother lives in Seville. She is 85 years old.","My grandmother,",["who lives in Seville, is 85 years old"],"","p"],
["I met a man. His car had been stolen.","I met a man",["whose car had been stolen"]],
["That is the house. I was born there.","That is",["the house where I was born","the house in which I was born","the house that I was born in","the house which I was born in","the house I was born in"]],
["Madrid is the capital of Spain. It has over three million people.","Madrid,",["which is the capital of Spain, has over three million people"],"","p"],
["The girl is my cousin. You were talking to her.","The girl",XX("{r}you were talking to is my cousin",{r:P}).concat(["to whom you were talking is my cousin"])],
["I'll never forget the day. We met on that day.","I'll never forget",["the day when we met","the day we met","the day that we met","the day on which we met"]],
["We stayed at a hotel. It was near the beach.","We stayed at",["a hotel which was near the beach","a hotel that was near the beach"]],
["Mr Lopez is my English teacher. He loves football.","Mr Lopez,",["who is my English teacher, loves football"],"","p"],
["This is the boy. I borrowed his bike.","This is",["the boy whose bike I borrowed"]],
["The film was boring. We watched it last night.","The film",XX("{r}we watched last night was boring",{r:T})]
],
evau:[
["Julio 2026","Next month we're visiting Paris. My cousins live there.","Next month",["we are visiting Paris, where my cousins live","we are visiting Paris, in which my cousins live"],"","p"],
["Junio 2026","My uncle lives in Canada. He is a famous artist.","My uncle,",["who lives in Canada, is a famous artist"],"","p"],
["Junio 2025","I love the festival in Glastonbury. I saw my favorite band there.","I love the festival in Glastonbury,",["where I saw my favorite band","where I saw my favourite band"],"","p"],
["Julio 2025","I have just visited the village. I was born there.","I have",XX("just visited the village {r}I was born in",{r:T}).concat(["just visited the village where I was born","just visited the village in which I was born"])],
["Julio 2024","That blond kid climbed the tree to fetch the ball.","That is the blond kid",["who climbed the tree to fetch the ball","that climbed the tree to fetch the ball"]],
["Julio 2024","This yellow bus goes to the airport. It runs every half hour.","This yellow bus,",["which goes to the airport, runs every half hour"],"","p"],
["Junio 2023","I have joined a charity. It helps homeless people.","The charity",XX("{r}I have joined helps homeless people",{r:T})],
["Junio 2022","The town council has rebuilt a park. I used to play there.","The town council",["has rebuilt a park where I used to play","has rebuilt a park in which I used to play","has rebuilt a park that I used to play in","has rebuilt a park which I used to play in","has rebuilt a park I used to play in"]],
["Junio 2022","That boy is Tom Smith. He plays basketball in the local team.","That boy is",["Tom Smith, who plays basketball in the local team"],"","p"],
["Julio 2022","I love the book. I bought it yesterday.","I love",XX("the book {r}I bought yesterday",{r:T})],
["Julio 2022","My sister lives in Rome. She's studying a degree in art there.","My sister lives",["in Rome, where she is studying a degree in art"],"","p"],
["Junio 2021","I didn't see the man. He took my wallet yesterday.","I didn't see",["the man who took my wallet yesterday","the man that took my wallet yesterday"]],
["Junio 2021","Martin is my new neighbor. His sister works with me.","Martin,",XX("whose sister works with me, is my new {n}",{n:NB}),"","p"],
["Julio 2021","The house has just been rebuilt. My grandparents used to live there.","The house",["where my grandparents used to live has just been rebuilt","in which my grandparents used to live has just been rebuilt","that my grandparents used to live in has just been rebuilt","which my grandparents used to live in has just been rebuilt","my grandparents used to live in has just been rebuilt"]],
["Julio 2021","Jane studied medicine. Her son goes to the same school as mine.","Jane,",["whose son goes to the same school as mine, studied medicine"],"","p"],
["Junio 2020","Peter is giving a big party. He has finally found a new job.","Peter,",["who has finally found a new job, is giving a big party"],"","p"],
["Junio 2020","We saw the flat. Paul lived there.","We saw",["the flat where Paul lived","the flat in which Paul lived","the flat that Paul lived in","the flat which Paul lived in","the flat Paul lived in"]],
["Julio 2020","We have visited Rome. There are many museums there.","We",["have visited Rome, where there are many museums"],"","p"],
["Julio 2020","It's a story about a rich man. He has an accident and dies.","It's a story about",["a rich man who has an accident and dies","a rich man that has an accident and dies"]],
["Junio 2019","Mr Smith is my neighbour. His car is parked at the door.","Mr Smith,",["whose car is parked at the door, is my neighbour","whose car is parked at the door, is my neighbor"],"","p"],
["Junio 2018","Andrés Iniesta was chosen the best player in the final. He was born in Albacete.","Andres Iniesta,",["who was born in Albacete, was chosen the best player in the final"],"","p"],
["Junio 2018","Michael is a regular visitor to Italy. He always spends his holidays there.","Michael is",["a regular visitor to Italy, where he always spends his holidays"],"","p"],
["Julio 2018 / Sept 2017","The woman is Alice Harris. Her ring was stolen from her house.","The woman",["whose ring was stolen from her house is Alice Harris","whose ring was stolen from her house, is Alice Harris"]],
["Julio 2018","The boy broke the window. He ran away.","The boy,",["who broke the window, ran away"],"","p"],
["Sept 2017","He received the parcel. He was waiting for it.","He",XX("received the parcel {r}he was waiting for",{r:T}).concat(["received the parcel for which he was waiting"])],
["Junio 2016","I'm interested in a young painter. Her name will be familiar to you.","I'm interested in a young painter",["whose name will be familiar to you",", whose name will be familiar to you"]],
["Junio 2015","I met a British girl yesterday. She was really nice.","The British girl",XX("{r}I met yesterday was really nice",{r:P})],
["Sept 2015","My friend Alice is your new neighbor. She is from Bristol.","My friend Alice,",XX("who is from Bristol, is your new {n}",{n:NB}),"","p"],
["Junio 2014","They live in an old house. It needs repairing.","The old house",XX("{r}they live in needs repairing",{r:T}).concat(["in which they live needs repairing","where they live needs repairing"])],
["Sept 2014","He is looking for a book. It is under the desk.","The book",XX("{r}he is looking for is under the desk",{r:T}).concat(["for which he is looking is under the desk"])],
["Junio 2013","I am travelling with a friend. He can't speak English.","The friend",XX("{r}I am travelling with cannot speak English",{r:P}).concat(XX("{r}I am traveling with cannot speak English",{r:P}),["with whom I am travelling cannot speak English","with whom I am traveling cannot speak English"])],
["Junio 2013","I am reading a novel at the moment. It is very interesting.","The novel",XX("{r}I am reading at the moment is very interesting",{r:T})],
["Sept 2013","Yesterday they met a beautiful girl. Her father was a famous guitarist.","Yesterday they",["met a beautiful girl whose father was a famous guitarist"]],
["Junio 2012","I visited my aunt's cottage. It is near the river.","I visited",["my aunt's cottage which is near the river","my aunt's cottage that is near the river"]],
["Sept 2012","Yesterday I met a beautiful girl. Her father was born in Jamaica.","Yesterday I met",["a beautiful girl whose father was born in Jamaica"]],
["Junio 2011","I usually buy my clothes in this shopping center.","This is",["the shopping center where I usually buy my clothes","the shopping center in which I usually buy my clothes","the shopping center that I usually buy my clothes in","the shopping center which I usually buy my clothes in","the shopping center I usually buy my clothes in","the shopping centre where I usually buy my clothes","the shopping centre in which I usually buy my clothes","the shopping centre that I usually buy my clothes in","the shopping centre which I usually buy my clothes in","the shopping centre I usually buy my clothes in"]],
["Sept 2011","That woman's son is my boyfriend.","That is",["the woman whose son is my boyfriend"]],
["Sept 2010","Alice in Wonderland is a 2010 fantasy adventure film. It was directed by Tim Burton.","Alice in Wonderland",["which was directed by Tim Burton is a 2010 fantasy adventure film","is a 2010 fantasy adventure film which was directed by Tim Burton","is a 2010 fantasy adventure film that was directed by Tim Burton"]],
["Junio 2009","Mark's wife was wearing a dress last night. It was beautiful.","The dress",XX("{r}Mark's wife was wearing last night was beautiful",{r:T})],
["Sept 2008","This is the man. His job is very dangerous.","This is",["the man whose job is very dangerous"]],
["Junio 2007","Fiona is smiling in the picture. She is my boss.","Fiona,",["who is smiling in the picture, is my boss"],"","p"],
["Sept 2005","This is the man. His dog bit my brother in the park.","This is the man",["whose dog bit my brother in the park"]],
["Junio 2004","My new neighbors have got a baby. Her name is Wendy.","My",["new neighbors have got a baby whose name is Wendy","new neighbours have got a baby whose name is Wendy"]],
["Junio 2003","That man's brother is my new English teacher.","That is the man",["whose brother is my new English teacher"]]
]});
})();
