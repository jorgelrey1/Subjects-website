GRAM.register("if-sentences",{
rule:"<b>Unless</b> = if not (verbo afirmativo). Si la frase original da una <b>causa real</b> (because, that’s why, so, therefore) hay que imaginar lo contrario: <b>presente → 2ª condicional</b> (if + past simple, would + verbo) · <b>pasado → 3ª</b> (if + had + participio, would have + participio).",
theory:`
<div class="box"><p>Las frases condicionales se reconocen por el <b>tiempo verbal</b> de la frase original. En el examen casi siempre hay que convertir una frase con <i>because / that’s why / so / therefore / as</i> en una frase con <b>if</b> (al revés de lo que dice la original).</p></div>
<h3>1ª condicional y UNLESS</h3>
<p>Se reconoce por <b>unless</b> (= <i>a no ser que</i>). Hay que <b>cambiar la frase que empieza por IF a afirmativa</b> (o al revés).</p>
<ul>
<li>If you <b>don’t</b> study harder, you won’t get a scholarship → <b>Unless</b> you study harder, you won’t get a scholarship.</li>
<li>You won’t be admitted <b>unless</b> your grades are good → <b>If</b> your grades <b>aren’t</b> good, you won’t be admitted.</li>
<li>Estructura: <span class="eq">IF + presente simple, WILL + verbo</span> · Se pone coma si empieza la frase con if/unless.</li>
</ul>
<h3>2ª condicional (presente irreal)</h3>
<p>Se reconoce porque los verbos de la frase original están en <b>presente simple</b>. <span class="eq">IF + SIMPLE PAST, WOULD + verbo</span></p>
<ul>
<li>I don’t have a computer, so I can’t type my essay → <b>If I had</b> a computer, <b>I could type</b> my essay.</li>
<li>I’m not rich → If I <b>were</b> rich, I <b>would have</b> a Porsche. (<i>were</i> para todas las personas; <i>was</i> también se admite)</li>
<li>El verbo negativo pasa a afirmativo y el afirmativo a negativo, <b>en las dos partes</b>.</li>
</ul>
<h3>3ª condicional (pasado irreal)</h3>
<p>Se reconoce porque los verbos de la frase original están en <b>pasado simple</b>. <span class="eq">IF + HAD + PARTICIPIO, WOULD HAVE + PARTICIPIO</span></p>
<ul>
<li>I didn’t ask her because she was married → <b>If she hadn’t been</b> married, <b>I would have asked</b> her.</li>
<li>They were tired, that’s why they didn’t go out → If they <b>hadn’t been</b> tired, they <b>would have gone</b> out.</li>
</ul>
<h3>Condicionales mixtas (un verbo en presente y otro en pasado)</h3>
<div class="tw"><table class="t"><tr><th>Mixta 1: algo (no) pasó antes y ahora…</th><th>Mixta 2: situación actual que habría cambiado el pasado</th></tr>
<tr><td><b>IF + past perfect</b>, <b>would + verbo</b><br><i>You are in this mess because you didn’t listen. → If you <b>had listened</b>, you <b>wouldn’t be</b> in this mess.</i></td><td><b>IF + simple past</b>, <b>would have + participio</b><br><i>I didn’t talk to her because I’m too shy. → If I <b>weren’t</b> so shy, I <b>would have talked</b> to her.</i></td></tr></table></div>
<div class="box plus"><p><b>Truco:</b> mira cada verbo de la frase original. Presente → pasa a <i>past simple / would</i>. Pasado → pasa a <i>past perfect / would have</i>. Luego niega lo que sea afirmativo y afirma lo que sea negativo. Palabras como <i>so, because, that’s why, therefore, as</i> desaparecen: la causa va en la parte de <i>if</i> y la consecuencia en la otra. También existe la condicional «cero» (verdades generales): <i>If you heat ice, it melts</i>.</p></div>
`,
clase:[
["If you don't study harder, you won't get a scholarship.","Unless",["you study harder, you won't get a scholarship"]],
["If your friend doesn't come, he won't take part in this activity.","Your friend won't",["take part in this activity unless he comes"]],
["You won't be admitted unless your grades are good.","If",["your grades aren't good, you won't be admitted"]],
["Her parents don't have a good car because they are unemployed.","If",["her parents were not unemployed, they would have a good car","her parents were employed, they would have a good car","her parents had jobs, they would have a good car","her parents weren't unemployed, they would have a good car"]],
["People burn coal that's why the air is polluted.","If",["people did not burn coal, the air would not be polluted","people didn't burn coal, the air wouldn't be polluted"]],
["I don't have a computer so I can't type my essay.","If",["I had a computer, I could type my essay"]],
["I am not rich. That's why I don't have a Porsche.","If",["I were rich, I would have a Porsche","I was rich, I would have a Porsche"]],
["I don't go to the beach because I don't have a car.","If",["I had a car, I would go to the beach"]],
["I didn't ask her to be my wife because she was married at that time.","If",["she had not been married at that time, I would have asked her to be my wife","she hadn't been married at that time, I would have asked her to be my wife"]],
["They were tired, that's why they didn't go out.","If",["they had not been tired, they would have gone out"]],
["You are in this mess because you didn't listen to me.","If",["you had listened to me, you would not be in this mess"]],
["You drank too much last night, that's why you have a hangover.","If",["you had not drunk too much last night, you would not have a hangover"]],
["I didn't talk to her at the party because I'm too shy.","If I",["were not so shy, I would have talked to her at the party","were not too shy, I would have talked to her at the party","was not so shy, I would have talked to her at the party","was not too shy, I would have talked to her at the party"]],
["I don't speak French, so I didn't get the job.","If I",["spoke French, I would have got the job","spoke French, I would have gotten the job","could speak French, I would have got the job","could speak French, I would have gotten the job"]]
],
extra:[
["If you don't hurry, you will miss the bus.","Unless",["you hurry, you will miss the bus"]],
["We can't go for a picnic because it is raining.","If",["it were not raining, we could go for a picnic","it was not raining, we could go for a picnic"]],
["I didn't pass the exam because I didn't study.","If",["I had studied, I would have passed the exam"]],
["She will be angry if you don't call her.","Unless",["you call her, she will be angry"]],
["He doesn't have a car, so he takes the bus.","If",["he had a car, he would not take the bus"]],
["They lost the match because they played badly.","If",["they had not played badly, they would not have lost the match"]],
["You won't get better unless you take the medicine.","If",["you do not take the medicine, you will not get better"]],
["I'm tired because I stayed up late last night.","If",["I had not stayed up late last night, I would not be tired"]],
["I don't live near the sea, so I don't go to the beach every day.","If",["I lived near the sea, I would go to the beach every day"]],
["She didn't know the answer, so she didn't say anything.","If",["she had known the answer, she would have said something"]],
["I'm not a bird, so I can't fly.","If",["I were a bird, I could fly","I was a bird, I could fly"]],
["The shop was closed, so we couldn't buy any bread.","If",["the shop had not been closed, we could have bought some bread","the shop had not been closed, we would have bought some bread","the shop had not been closed, we could have bought bread","the shop had not been closed, we would have bought bread"]]
],
evau:[
["Julio 2026","You can't go to the party if you don't finish your homework.","Unless",["you finish your homework, you can not go to the party"]],
["Junio 2026","I arrived late to the station. I missed the bus.","If",["I had not arrived late to the station, I would not have missed the bus"]],
["Junio 2025","I didn't know about the show. That's why I didn't buy the tickets.","If",["I had known about the show, I would have bought the tickets"]],
["Julio 2025","I sometimes miss the school bus because I get up very late.","If",["I did not get up very late, I would not miss the school bus","I did not get up so late, I would not miss the school bus","I got up earlier, I would not miss the school bus","I did not get up very late, I would not sometimes miss the school bus","I did not get up late, I would not miss the school bus"]],
["Junio 2024","John didn't revise his homework. Therefore, he made a lot of mistakes","If John",["had revised his homework, he would not have made a lot of mistakes","had revised his homework, he would not have made so many mistakes","had revised his homework, he would not have made many mistakes"]],
["Julio 2024","John was so dirty because he had fallen in the mud.","If",["John had not fallen in the mud, he would not have been so dirty"]],
["Junio 2023","Let me give you a piece of advice: don't marry him.","If I",["were you, I would not marry him","was you, I would not marry him"]],
["Julio 2023","I missed my dental appointment because you didn't remind me.","If",["you had reminded me, I would not have missed my dental appointment"]],
["Julio 2023","If your friend doesn't come before ten, he will miss the train.","Unless",["your friend comes before ten, he will miss the train"]],
["Junio 2022","As you didn't pay attention, you made a lot of mistakes.","If",["you had paid attention, you would not have made a lot of mistakes","you had paid attention, you would not have made so many mistakes","you had paid attention, you would not have made many mistakes"]],
["Junio 2022","Mark won't get the job if he doesn't speak politely to customers.","Unless",["Mark speaks politely to customers, he will not get the job","Mark speaks politely to customers, he won't get the job"]],
["Junio 2022","They won't understand your problem unless you explain it.","If",["you do not explain it, they will not understand your problem","you do not explain your problem, they will not understand it"]],
["Junio 2021","We didn't bring money, so we didn't buy a present.","If",["we had brought money, we would have bought a present"]],
["Junio 2021","We won't stay in London if we don't find a good hotel.","Unless we",["find a good hotel, we will not stay in London"]],
["Julio 2021","You won't pass the exam unless you work harder.","If",["you do not work harder, you will not pass the exam"]],
["Junio 2020","I will phone your parents if your behavior doesn't improve","Unless",["your behavior improves, I will phone your parents","your behaviour improves, I will phone your parents"]],
["Junio 2020","Don't touch the match or you will burn your finger.","If",["you touch the match, you will burn your finger"],"En el cuaderno el comienzo pone «If I» (parece una errata de «If you»)."],
["Julio 2020","Sophie had a lot of problems because she didn't pay attention","If",["Sophie had paid attention, she would not have had a lot of problems","Sophie had paid attention, she would not have had so many problems","Sophie had paid attention, she would not have had many problems"]],
["Junio 2019","Tom was so dirty because he had fallen in the mud.","If",["Tom had not fallen in the mud, he would not have been so dirty"]],
["Junio 2019","You will not be allowed to go out if you don't eat up your dinner","If",["you do not eat up your dinner, you will not be allowed to go out","=Unless you eat up your dinner, you will not be allowed to go out"],"En el cuaderno el comienzo es «If» (probablemente iba «Unless»). Las dos formas valen: «If you don’t eat up…» o la frase completa con «Unless you eat up…»."],
["Junio 2019","Nobody will help you if you don't ask for help.","Unless",["you ask for help, nobody will help you"]],
["Julio 2019","We didn't buy the tickets in advance, so we missed the concert.","If",["we had bought the tickets in advance, we would not have missed the concert"]],
["Julio 2019","Michael doesn't study that subject because his school doesn't offer it.","If",["his school offered it, Michael would study that subject","his school offered that subject, Michael would study it"]],
["Junio 2018","We didn't go to the match because we didn't have money for the tickets.","If",["we had had money for the tickets, we would have gone to the match"]],
["Julio 2018 / Sept 2017","I didn't arrive early so I missed the plane.","If",["I had arrived early, I would not have missed the plane"]],
["Junio 2017","The card did not arrive in time because Sally forgot to post it.","If",["Sally had not forgotten to post it, the card would have arrived in time"]],
["Junio 2016","I had a fight with Paula's brother. That's why I didn't go to her birthday party.","If",["I had not had a fight with Paula's brother, I would have gone to her birthday party"]],
["Sept 2016","Banderas doesn't own an apartment in the Dakota building because he doesn't have enough money.","If Banderas",["had enough money, he would own an apartment in the Dakota building"]],
["Sept 2016","Mary couldn't finish the race because she fainted.","If",["Mary had not fainted, she could have finished the race","Mary had not fainted, she would have finished the race"]],
["Junio 2015","John didn't attend Paula's wedding party because he was abroad.","If",["John had not been abroad, he would have attended Paula's wedding party"]],
["Sept 2015","My girlfriend was very tired. That's why she didn't go to the party yesterday.","If",["my girlfriend had not been very tired, she would have gone to the party yesterday"]],
["Junio 2014","If your son doesn't study harder, he will fail.","Unless",["your son studies harder, he will fail"]],
["Junio 2014","He didn't take his exam because he was ill.","If",["he had not been ill, he would have taken his exam"]],
["Sept 2014","She hasn't got enough money so she can't buy a nice apartment.","If",["she had enough money, she could buy a nice apartment"]],
["Junio 2013","I didn't study hard enough. That is why I didn't pass.","If",["I had studied hard enough, I would have passed"]],
["Sept 2013","They couldn't visit attractions because they were very busy.","If",["they had not been very busy, they could have visited attractions","they had not been very busy, they would have visited attractions"]],
["Junio 2012","I didn't move the tables because Jack didn't help me.","If",["Jack had helped me, I would have moved the tables"]],
["Sept 2012","We paid the rent because my sister lent us some money.","If",["my sister had not lent us some money, we would not have paid the rent","my sister had not lent us money, we would not have paid the rent"]],
["Sept 2012","We won't go to the forest if the weather doesn't improve.","If",["the weather does not improve, we will not go to the forest","=Unless the weather improves, we will not go to the forest"],"En el cuaderno el comienzo es «If» (probablemente iba «Unless»). Las dos formas valen."],
["Sept 2011","I didn't log on because I didn't know you were online.","If",["I had known you were online, I would have logged on"]],
["Sept 2011","I won't eat the meat if you can't share it with me.","Unless",["you can share it with me, I will not eat the meat"]],
["Junio 2010","They were late because they missed the train.","If",["they had not missed the train, they would not have been late"]],
["Junio 2010","If you don't explain the situation to her, she won't understand.","Unless",["you explain the situation to her, she will not understand"]],
["Sept 2010","They didn't have much money. They didn't go to Notting Hill Carnival.","If they",["had had much money, they would have gone to Notting Hill Carnival","had had more money, they would have gone to Notting Hill Carnival","had had enough money, they would have gone to Notting Hill Carnival"]],
["Junio 2009","I broke my leg last week. I won't be in the dance competition tonight.","If I",["had not broken my leg last week, I would be in the dance competition tonight","hadn't broken my leg last week, I would be in the dance competition tonight"]],
["Junio 2008","He forgot my birthday. Therefore, he didn't call me.","If he",["had not forgotten my birthday, he would have called me","had remembered my birthday, he would have called me"],"En el cuaderno el comienzo es «I he» (errata de «If he»)."],
["Sept 2007","If we don't meet next month, it will be too late.","Unless",["we meet next month, it will be too late"]],
["Junio 2006","She made a lot of mistakes because she didn't study hard for the exam.","If",["she had studied hard for the exam, she would not have made a lot of mistakes","she had studied hard for the exam, she would not have made so many mistakes","she had studied hard for the exam, she would not have made many mistakes"]],
["Sept 2006","If your boyfriend doesn't arrive before eight, we will have to leave.","Unless",["your boyfriend arrives before eight, we will have to leave"]],
["Sept 2005","I didn't go to the gym yesterday because my foot hurt.","If",["my foot had not hurt, I would have gone to the gym yesterday"]],
["Junio 2004","I didn't make a note of it in my diary, so I forgot about it.","If",["I had made a note of it in my diary, I would not have forgotten about it"]],
["Junio 2003","Wendy didn't study for her test. Therefore, she failed.","If",["Wendy had studied for her test, she would not have failed"]],
["Sept 2003","I have failed all my exams at university because I didn't study enough.","If",["I had studied enough, I would not have failed all my exams at university"]],
["Sept 2002","If you don't review your notes tonight, you won't do well tomorrow.","Unless",["you review your notes tonight, you will not do well tomorrow"]],
["Junio 2001","If your friend doesn't come before ten, he will miss the train.","Unless",["your friend comes before ten, he will miss the train"]],
["Sept 2001","If the tickets don't arrive, we won't be able to go.","Unless",["the tickets arrive, we will not be able to go"]],
["Sept 2000","I don't know her address so I can't write to her.","If I",["knew her address, I could write to her"]]
]});
