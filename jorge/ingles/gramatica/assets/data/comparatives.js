GRAM.register("comparatives",{
rule:"Para cambiar el orden: <b>A is more X than B</b> = <b>B is not as X as A</b> = <b>B is less X than A</b>. Con <i>never… such</i> → <b>the most / the -est … ever</b>.",
theory:`
<div class="box"><div class="tw"><table class="t"><tr><th>Español</th><th>Inglés</th></tr>
<tr><td>Tan … como</td><td><b>as … as</b></td></tr>
<tr><td>No tan … como</td><td><b>not so / not as … as</b></td></tr>
<tr><td>Menos … que</td><td><b>less … than</b></td></tr>
<tr><td>El menos …</td><td><b>the least …</b></td></tr></table></div></div>
<h3>Comparativo y superlativo</h3>
<div class="tw"><table class="t"><tr><th>Adjetivo</th><th>Ejemplo</th><th>Más … que</th><th>El más …</th></tr>
<tr><td>1 sílaba, o 2 acabadas en -y</td><td>big · dark · happy</td><td><b>-er than</b>: bigger, darker, happier</td><td><b>the -est</b>: the biggest, the darkest, the happiest</td></tr>
<tr><td>2 o más sílabas</td><td>boring · popular</td><td><b>more … than</b>: more boring, more popular</td><td><b>the most</b>: the most boring, the most popular</td></tr>
<tr><td>Irregulares</td><td>good · bad</td><td>better · worse</td><td>the best · the worst</td></tr></table></div>
<h3>Transformaciones típicas del examen</h3>
<ul>
<li><b>Dar la vuelta a la comparación:</b> <i>11th graders are faster than 10th graders</i> → <i>10th graders <b>are not as fast as</b> 11th graders</i> (o <i>are slower than</i>).</li>
<li><b>Never … such → superlativo:</b> <i>I’ve never seen such a beautiful car</i> → <i>This is <b>the most beautiful</b> car I’ve <b>ever</b> seen</i>.</li>
<li><b>«No hay otro … más que»:</b> <i>There is no other charger faster than this</i> → <i>This is <b>the fastest</b> charger</i>.</li>
<li><b>more … than any other:</b> <i>This concert is more exciting than any other</i> → <i>This is <b>the most exciting</b> concert I’ve attended</i>.</li>
<li><b>Posesivos para no repetir:</b> <i>Her jokes are not as good as his</i> → <i>His jokes are better than <b>hers</b></i> (mine, yours, his, hers, ours, theirs).</li>
<li><b>I thought it would be better</b> → <i>It’s <b>not as good as</b> I thought</i>.</li>
</ul>
<div class="box plus"><p><b>Ortografía:</b> big → bigger (se dobla la consonante), happy → happier (y → ier), nice → nicer (solo +r). <b>Irregulares frecuentes:</b> far → further/farther, little → less → the least, much/many → more → the most. Con <i>as … as</i> el adjetivo va <b>sin cambiar</b>: <i>as tall as</i>. En superlativos usa siempre <b>the</b>.</p></div>
`,
clase:[
["11th graders are faster than 10th graders.","10th graders",["are not as fast as 11th graders","are not so fast as 11th graders","are slower than 11th graders"]],
["I've never seen such a beautiful car before.","This is",["the most beautiful car I have ever seen","the most beautiful car I've ever seen","the most beautiful car that I have ever seen"]],
["10th graders are not as busy as 11th graders.","11th graders",["are busier than 10th graders"]],
["I thought he would be friendlier.","He is not",["as friendly as I thought","so friendly as I thought","as friendly as I expected"]],
["Alison is not as busy as her brother.","Alison's brother",["is busier than she is","is busier than Alison","is busier than her","is busier than Alison is"]],
["The first movie is more boring than the second.","The second",["is less boring than the first","is not as boring as the first","is not so boring as the first","is less boring than the first one","is not as boring as the first one"]],
["I've never seen such a wonderful group of people.","It's the most",["wonderful group of people I have ever seen","wonderful group of people I've ever seen","wonderful group of people that I have ever seen"]],
["Your holidays are longer than mine!","My holidays",["are shorter than yours","are not as long as yours","are not so long as yours"]]
],
extra:[
["My brother is taller than me.","I",["am not as tall as my brother","am shorter than my brother","am not so tall as my brother"]],
["Maths is easier than physics.","Physics",["is not as easy as maths","is more difficult than maths","is harder than maths","is not so easy as maths","is more difficult than math","is harder than math","is not as easy as math"]],
["I have never eaten such a good pizza.","This is",["the best pizza I have ever eaten","the best pizza I've ever eaten","the best pizza that I have ever eaten"]],
["Peter is not as old as Sam.","Sam",["is older than Peter"]],
["The red car is cheaper than the blue one.","The blue car",["is more expensive than the red one","is more expensive than the red car","is not as cheap as the red one","is not as cheap as the red car","is more expensive than the red"]],
["She has never seen such a funny film.","It's",["the funniest film she has ever seen","the funniest film that she has ever seen"]],
["Spanish is not as difficult as Chinese.","Chinese",["is more difficult than Spanish","is harder than Spanish"]],
["My laptop is newer than yours.","Your laptop",["is not as new as mine","is older than mine","is not so new as mine"]],
["Nobody in the class is taller than Marta.","Marta",["is the tallest in the class","is the tallest girl in the class","is the tallest person in the class","is the tallest student in the class"]],
["This bag is less expensive than that one.","That bag",["is more expensive than this one","is more expensive than this bag","is not as cheap as this one","is not as cheap as this bag"]]
],
evau:[
["Junio 2025","This concert is more exciting than any other concert I have attended.","This is",["the most exciting concert I have ever attended","the most exciting concert I have attended","the most exciting concert that I have ever attended"]],
["Junio 2024","Pupils had never taken a tougher math test.","That was",["the toughest math test pupils had ever taken","the toughest math test that pupils had ever taken","the toughest math test the pupils had ever taken"]],
["Junio 2023","There is no other mobile charger faster than this.","This is",["the fastest mobile charger","the fastest mobile charger there is","the fastest charger"]],
["Junio 2021","I've never read such a boring book.","This is",["the most boring book I have ever read","the most boring book I've ever read","the most boring book that I have ever read"]],
["Junio 2020","Planes are faster than AVE trains.","AVE trains",["are not as fast as planes","are not so fast as planes","are slower than planes"]],
["Junio 2020","I've never received such a big present.","This is",["the biggest present I have ever received","the biggest present I've ever received","the biggest present that I have ever received"]],
["Sept 2016","There is no other building more luxurious than the Dakota in New York.","The Dakota building is",["the most luxurious building in New York","the most luxurious in New York"]],
["Junio 2015","People in Norwich are not as busy as people in Manchester.","People in Manchester",["are busier than people in Norwich","are busier than those in Norwich"]],
["Sept 2015","I have never met a more attractive person than Jane.","Jane",["is the most attractive person I have ever met","is the most attractive person that I have ever met","is the most attractive person I've ever met"]],
["Sept 2014","John is more popular than his brother.","John's brother",["is not as popular as John","is less popular than John","is not so popular as John","isn't as popular as him"]],
["Junio 2012","My nephew is not as stupid as my cousin.","My cousin",["is more stupid than my nephew","is stupider than my nephew"]],
["Sept 2012","My son is not as funny as my brother.","My son",["is less funny than my brother"]],
["Sept 2012","I don't earn as much as my sister does.","My sister",["earns more than I do","earns more money than I do","earns more than me","earns more than I earn"]],
["Sept 2011","Her jokes are not as good as his.","His jokes",["are better than hers","are better than her jokes"]],
["Junio 2010","New York is bigger than Madrid.","Madrid is not",["as big as New York","so big as New York"]],
["Sept 2010","Fruit is healthier than chocolate.","Chocolate",["is not as healthy as fruit","is not so healthy as fruit","is less healthy than fruit"]],
["Sept 2010","Rio Carnival in Brazil is bigger than Notting Hill Carnival.","Notting Hill Carnival is not",["as big as Rio Carnival in Brazil","as big as Rio Carnival","as big as the Rio Carnival in Brazil","so big as Rio Carnival in Brazil"]],
["Junio 2008","I've never seen such a beautiful mosque.","This is",["the most beautiful mosque I have ever seen","the most beautiful mosque I've ever seen","the most beautiful mosque that I have ever seen"]],
["Sept 2008","I'm not as good at English as you are.","You",["are better at English than I am","are better at English than me","are better at English than I"]],
["Junio 2007","Her jokes are not as good as his.","His jokes",["are better than hers","are better than her jokes"]],
["Junio 2006","I thought it would be better than that.","It's not",["as good as I thought","as good as I expected","so good as I thought","as good as I had thought"]],
["Sept 2006","Al swims faster than Peter.","Peter",["does not swim as fast as Al","does not swim so fast as Al","swims slower than Al","does not swim as quickly as Al","is not as fast as Al"]],
["Sept 2005","Sheila is 1.55 m tall. Her brother is 1.70 m tall.","Sheila is",["not as tall as her brother","not so tall as her brother","shorter than her brother"]],
["Sept 2004","The meat was better than the fish.","The fish",["was not as good as the meat","was not so good as the meat","was worse than the meat"]],
["Junio 2002","Albert's drawing isn't as good as Gerard's.","Gerard's drawing is",["better than Albert's","better than Albert's drawing"]]
]});
