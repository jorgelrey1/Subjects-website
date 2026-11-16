GRAM.register("connectors",{
rule:"<b>Although</b> + sujeto + verbo · <b>despite / in spite of</b> + sustantivo o -ing (o <i>the fact that</i> + frase) · <b>because / since / as</b> + frase (causa) · <b>so</b> (con coma) y <b>therefore</b> (; … ,) para la consecuencia · <b>to / in order to / so as to</b> + verbo para la finalidad.",
theory:`
<h3>Contraste (aunque / a pesar de)</h3>
<div class="tw"><table class="t"><tr><th>Español</th><th>Inglés</th><th>Después va…</th></tr>
<tr><td>Aunque</td><td><b>Although · Even though</b></td><td>sujeto + verbo</td></tr>
<tr><td>A pesar de</td><td><b>In spite of · Despite</b></td><td>sustantivo o verbo en -ing</td></tr>
<tr><td>A pesar de que</td><td><b>In spite of the fact that · Despite the fact that</b></td><td>sujeto + verbo</td></tr></table></div>
<ul>
<li>Although he has an English name, he is in fact German → <b>Despite having</b> an English name… / <b>Despite the fact that</b> he has…</li>
<li>In spite of studying hard, he didn’t pass → <b>Although he studied</b> hard, he didn’t pass.</li>
<li>⚠️ <i>in spite <b>of</b></i> lleva <i>of</i>; <i>despite</i> <b>no</b> lleva <i>of</i>.</li>
</ul>
<h3>Causa y consecuencia</h3>
<div class="tw"><table class="t"><tr><th>Español</th><th>Inglés</th><th>Puntuación</th></tr>
<tr><td>Ya que · Como · Porque</td><td><b>Since · As · Because</b></td><td>Since/As al principio suelen llevar coma después de la causa</td></tr>
<tr><td>Así que</td><td><b>so</b></td><td><b>coma delante</b>: …icy<b>, so</b> we stayed.</td></tr>
<tr><td>Por lo tanto · Por eso · En consecuencia</td><td><b>therefore · as a result · consequently</b></td><td><b>punto y coma delante y coma detrás</b>: …late<b>; consequently,</b> he missed…</td></tr></table></div>
<ul>
<li>We stayed home <b>because</b> the roads were icy → The roads were icy<b>, so</b> we stayed home.</li>
<li>Many people lost their job because the factory closed → The factory closed<b>; as a result,</b> many people lost their job.</li>
<li>He was late; consequently, he missed the train → He missed the train <b>because</b> he was late.</li>
</ul>
<h3>Finalidad (para)</h3>
<div class="box"><p class="eq">to · in order to · so as to · so that</p><p style="margin-top:6px">She exercises every day because she wants to stay healthy → She exercises every day <b>to stay</b> healthy. <b>So that</b> se usa con sujeto distinto o con can/could/will/would: <i>so that she can stay healthy</i>.</p></div>
<h3>Otros conectores del cuaderno</h3>
<div class="tw"><table class="t"><tr><th>Además</th><td>; besides, · ; in addition, · ; on top of that, · ; moreover, · ; furthermore,</td></tr>
<tr><th>Además de</th><td>as well as · on top of · in addition to · besides (+ sustantivo / -ing)</td></tr>
<tr><th>Sin embargo</th><td>however · yet</td></tr>
<tr><th>Mientras que</th><td>whereas · while</td></tr>
<tr><th>Debido a / por</th><td>due to · because of · owing to (+ sustantivo)</td></tr>
<tr><th>Debido a que</th><td>due to the fact that</td></tr></table></div>
<div class="box plus"><p><b>Because / because of:</b> <i>because</i> + frase (<i>because it rained</i>); <i>because of</i> + sustantivo (<i>because of the rain</i>). Mismo caso con <i>although / despite</i>. Y <i>However</i> va entre punto y coma o punto y coma/coma: <i>It was cold; however, we went out.</i> Con <i>while / whereas</i> se contrastan dos ideas: <i>I like tea, whereas my sister prefers coffee.</i></p></div>
`,
clase:[
["Although he has an English name, he is in fact German.","Despite",["having an English name, he is in fact German","the fact that he has an English name, he is in fact German","his English name, he is in fact German"]],
["Although he had a lot of experience, he didn't get the job.","In spite",["of having a lot of experience, he didn't get the job","of the fact that he had a lot of experience, he didn't get the job","of his experience, he didn't get the job"]],
["In spite of studying hard, he didn't pass the exam.","Although",["he studied hard, he didn't pass the exam"]],
["We stayed home because the roads were icy.","The roads were icy,",["so we stayed home","so we stayed at home","=The roads were icy; therefore, we stayed home","=The roads were icy; as a result, we stayed home","=The roads were icy; consequently, we stayed home"],"Con «so» va coma delante; con therefore / as a result / consequently, punto y coma delante y coma detrás.","p"],
["Many people lost their job because the factory closed.","The factory closed,",["so many people lost their job","=The factory closed; therefore, many people lost their job","=The factory closed; as a result, many people lost their job","=The factory closed; consequently, many people lost their job"],"","p"],
["He was late; consequently, he missed the train.","He missed the train",["because he was late","as he was late","since he was late"]],
["She exercises every day because she wants to stay healthy.","She exercises",["every day to stay healthy","every day in order to stay healthy","every day so as to stay healthy","every day so that she can stay healthy"]],
["Although it rained a lot, we enjoyed our holidays.","Despite",["the fact that it rained a lot, we enjoyed our holidays","the rain, we enjoyed our holidays","the heavy rain, we enjoyed our holidays","raining a lot, we enjoyed our holidays"]],
["In spite of having very little room to move, the animals seem quite happy.","Although",["they have very little room to move, the animals seem quite happy","the animals have very little room to move, they seem quite happy"]],
["It had been a busy day. He wasn't tired.","Although",["it had been a busy day, he was not tired"]],
["Although he had been vaccinated, he caught the flu.","In spite",["of having been vaccinated, he caught the flu","of the fact that he had been vaccinated, he caught the flu"]],
["As he hadn't behaved, his parents got angry with him.","His parents",["got angry with him because he had not behaved","got angry with him since he had not behaved","got angry with him as he had not behaved"]],
["She has two jobs because she needs to make money.","She has two jobs",["to make money","in order to make money","so as to make money","so that she can make money"]],
["Since it was raining, the match was canceled.","It was",["raining, so the match was canceled","raining, so the match was cancelled","raining; therefore, the match was canceled","raining; therefore, the match was cancelled","raining; as a result, the match was canceled","raining; as a result, the match was cancelled","raining; consequently, the match was canceled","raining; consequently, the match was cancelled"],"","p"]
],
extra:[
["Although she was tired, she kept working.","Despite",["being tired, she kept working","the fact that she was tired, she kept working","her tiredness, she kept working"]],
["In spite of the traffic, we arrived on time.","Although",["there was a lot of traffic, we arrived on time","there was traffic, we arrived on time","the traffic was heavy, we arrived on time"]],
["He didn't go to school because he was ill.","As",["he was ill, he did not go to school"]],
["It was raining. We stayed at home.","It was raining,",["so we stayed at home","=It was raining; therefore, we stayed at home","=It was raining; as a result, we stayed at home","=It was raining; consequently, we stayed at home"],"","p"],
["He studies a lot because he wants to be a doctor.","He studies a lot",["to be a doctor","in order to be a doctor","so as to be a doctor","so that he can be a doctor"]],
["I like tea, but my sister prefers coffee.","I like tea,",["whereas my sister prefers coffee","while my sister prefers coffee"],"","p"],
["The match was cancelled due to the rain.","The match was cancelled",["because it was raining","because it rained","since it was raining","as it was raining","due to the fact that it was raining"]],
["I couldn't sleep. The music was very loud.","I couldn't sleep",["because the music was very loud","as the music was very loud","since the music was very loud"]],
["He is rich. However, he isn't happy.","Although",["he is rich, he is not happy"]],
["She went out in spite of the fact that she had a cold.","Although",["she had a cold, she went out"]],
["Despite his injury, he finished the race.","Although",["he was injured, he finished the race","he had an injury, he finished the race","he was hurt, he finished the race"]]
],
evau:[
["Julio 2026","Although I studied a lot, I didn't pass my exam.","Despite",["studying a lot, I didn't pass my exam","having studied a lot, I didn't pass my exam","the fact that I studied a lot, I didn't pass my exam","the fact that I had studied a lot, I didn't pass my exam"]],
["Junio 2026","Although it was windy, the students played football.","Despite",["the wind, the students played football","the windy weather, the students played football","the fact that it was windy, the students played football","it being windy, the students played football"]],
["Junio 2025","She studies every day because she wants to improve her English skills.","She studies every day",["to improve her English skills","in order to improve her English skills","so as to improve her English skills","so that she can improve her English skills"]],
["Junio 2024","Despite giving up her Japanese lessons, she was still capable of holding a conversation.","Although",["she gave up her Japanese lessons, she was still capable of holding a conversation"]],
["Junio 2023","The children behaved in spite of the long journey.","Although the journey",["was long, the children behaved","had been long, the children behaved"]],
["Julio 2023","Although it was raining heavily, they decided to go camping.","In spite",["of the heavy rain, they decided to go camping","of the rain, they decided to go camping","of the fact that it was raining heavily, they decided to go camping","of it raining heavily, they decided to go camping"]],
["Junio 2022","Despite working in a Spanish company, John doesn't speak Spanish.","Although",["he works in a Spanish company, John does not speak Spanish","John works in a Spanish company, he does not speak Spanish"]],
["Julio 2020","Although I had put sugar in my coffee, it was still bitter.","Despite",["having put sugar in my coffee, it was still bitter","the fact that I had put sugar in my coffee, it was still bitter"]],
["Junio 2019","Although it was raining heavily, they decided to go camping.","In spite",["of the heavy rain, they decided to go camping","of the rain, they decided to go camping","of the fact that it was raining heavily, they decided to go camping","of it raining heavily, they decided to go camping"]],
["Julio 2019","Despite speaking really good English, they have problems to communicate with some people in Scotland.","Although",["they speak really good English, they have problems to communicate with some people in Scotland","they speak really good English, they have problems communicating with some people in Scotland"]],
["Junio 2018","Despite being very tall, Mark doesn't play basketball well,","Although",["Mark is very tall, he does not play basketball well","he is very tall, Mark does not play basketball well"]],
["Julio 2018","Despite working very hard, she didn't get the job.","Although",["she worked very hard, she did not get the job"]],
["Junio 2017","Although my parents don't have much money, they are very generous.","Despite",["not having much money, my parents are very generous","the fact that my parents do not have much money, they are very generous"]],
["Sept 2017","Despite studying very hard, she failed the test.","Although",["she studied very hard, she failed the test"]],
["Junio 2016","They missed the bus. However, they arrived in time for the wedding.","Despite",["missing the bus, they arrived in time for the wedding","having missed the bus, they arrived in time for the wedding","the fact that they missed the bus, they arrived in time for the wedding","the fact that they had missed the bus, they arrived in time for the wedding"]],
["Junio 2016","Although he didn't study hard, he passed the exam.","In",["spite of not studying hard, he passed the exam","spite of not having studied hard, he passed the exam","spite of the fact that he did not study hard, he passed the exam"]],
["Junio 2015","Although they made an effort, they failed.","Despite",["making an effort, they failed","having made an effort, they failed","their effort, they failed","the fact that they made an effort, they failed"]],
["Sept 2015","Despite the good weather, we didn't enjoy the walk in the woods.","Although",["the weather was good, we did not enjoy the walk in the woods","the weather was nice, we did not enjoy the walk in the woods","it was good weather, we did not enjoy the walk in the woods"]],
["Junio 2014","In spite of working hard, I didn't feel tired.","Although",["I worked hard, I did not feel tired"]],
["Junio 2012","Although the questions were difficult, he answered them all.","Despite",["the difficult questions, he answered them all","the fact that the questions were difficult, he answered them all","the difficulty of the questions, he answered them all","the questions being difficult, he answered them all"]],
["Sept 2011 / Junio 2007","Despite the fact that it was very hot, she was wearing winter clothes.","Although",["it was very hot, she was wearing winter clothes"]],
["Junio 2010","Since BP is responsible for the oil spill, they must pay for the clean-up.","BP",["is responsible for the oil spill, so they must pay for the clean-up","is responsible for the oil spill, so it must pay for the clean-up","=BP is responsible for the oil spill; therefore, they must pay for the clean-up","=BP is responsible for the oil spill; therefore, it must pay for the clean-up"],"Con «so» coma delante; con therefore, punto y coma delante y coma detrás.","p"],
["Sept 2009","They went on a trip in spite of the bad weather.","Although the",["weather was bad, they went on a trip","weather was horrible, they went on a trip","weather was awful, they went on a trip","weather was not good, they went on a trip"]],
["Sept 2006","The children couldn't go out to the playground because it was raining.","As",["it was raining, the children could not go out to the playground"]],
["Junio 2005","Although Orson was over seventy, he continued to cycle to work every day.","Despite",["being over seventy, Orson continued to cycle to work every day","being over seventy, he continued to cycle to work every day","the fact that Orson was over seventy, he continued to cycle to work every day","his age, Orson continued to cycle to work every day"]],
["Sept 2005","Although it was cold, we went to the countryside.","In spite of",["the cold weather, we went to the countryside","the cold, we went to the countryside","the fact that it was cold, we went to the countryside","it being cold, we went to the countryside"]],
["Junio 2004","She lost the race in spite of running well.","Although",["she ran well, she lost the race"]],
["Junio 2003","We won't buy that house because we don't have enough money.","As",["we do not have enough money, we will not buy that house"]],
["Sept 2003","Although she was ill, she visited other countries.","Despite",["being ill, she visited other countries","the fact that she was ill, she visited other countries","her illness, she visited other countries"]],
["Junio 2002","Although the weather was horrible, we went skiing.","In spite",["of the horrible weather, we went skiing","of the fact that the weather was horrible, we went skiing","of the weather being horrible, we went skiing"]],
["Junio 2001","The children stayed at home because it was raining.","As",["it was raining, the children stayed at home"]],
["Junio 2000","She needed a job, so she sent off an application form.","She sent off an application form",["because she needed a job","as she needed a job","since she needed a job"]]
]});
