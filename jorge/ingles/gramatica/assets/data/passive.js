GRAM.register("passive",{
rule:"Pasiva = <b>objeto → sujeto</b> + <b>to be</b> (en el mismo tiempo del verbo activo) + <b>participio</b> (+ <i>by</i> + agente si importa). Con <i>people say/think…</i>: <b>It is said that…</b> o <b>X is said to + infinitivo</b>.",
theory:`
<div class="box"><div class="tw"><table class="t"><tr><th>Activa</th><td>My father</td><td>waters</td><td>the plants</td></tr><tr><th>Pasiva</th><td>The plants</td><td>are watered</td><td>by my father</td></tr></table></div>
<p style="margin-top:8px">El <b>objeto directo</b> pasa a ser <b>sujeto paciente</b>; el verbo pasa a <b>«to be» en el tiempo de la activa + participio</b>; el sujeto de la activa pasa a ser el <b>complemento agente</b> (<i>by …</i>). <b>El agente se omite</b> cuando es un pronombre personal o cuando es <i>people</i> o <i>someone / somebody</i>.</p></div>
<h3>Tiempos</h3>
<div class="tw"><table class="t"><tr><th>Activa</th><th>Pasiva</th><th>Activa</th><th>Pasiva</th></tr>
<tr><td>writes</td><td>is / are written</td><td>has / have written</td><td>has / have been written</td></tr>
<tr><td>wrote</td><td>was / were written</td><td>had written</td><td>had been written</td></tr>
<tr><td>is / am writing</td><td>is / are being written</td><td>will write</td><td>will be written</td></tr>
<tr><td>was / were writing</td><td>was / were being written</td><td>is going to write</td><td>is / are going to be written</td></tr>
<tr><td>must / can / should write</td><td>must / can / should be written</td><td colspan="2"></td></tr></table></div>
<h3>Pasiva con dos objetos (directo e indirecto)</h3>
<p><i>They gave me 2 presents.</i> Se puede hacer con cualquiera de los dos, aunque lo normal es con el indirecto: <b>I was given</b> 2 presents · <b>2 presents were given to me</b> (si pasamos el objeto directo a sujeto, el indirecto lleva <i>to</i>).</p>
<h3>Pasiva impersonal (<i>People say, think, believe, tell, claim…</i>)</h3>
<div class="box"><p><span class="ex">People <b>say</b> that 11th grade is harder than 10th grade.</span><br>→ <b>It is said</b> that 11th grade is harder than 10th grade.</p><p class="muted small" style="margin-top:4px">Empieza por <b>IT</b>. Solo hay que poner el verbo principal en pasiva; el resto de la frase no varía.</p></div>
<h3>Pasiva personal</h3>
<div class="box"><p><span class="ex">People say that <u>11th grade</u> is harder than 10th grade.</span><br>→ <b>11th grade is said to be</b> harder than 10th grade.</p>
<ol style="margin:6px 0 0;padding-left:1.2rem"><li>Empezamos por el <b>sujeto de la subordinada</b> (el que va detrás de <i>that</i>).</li><li>Ponemos el verbo principal en pasiva (<i>is said / was believed</i>).</li><li>El verbo de la subordinada va en <b>infinitivo</b>: <b>to be</b> (simultáneo).</li></ol>
<p style="margin-top:6px">Si el verbo de la subordinada está en <b>pasado</b>: infinitivo perfecto <b>to have + participio</b>: <i>People think that the president <b>stole</b> the money</i> → <i>The president is thought <b>to have stolen</b> the money</i>.</p></div>
<div class="box plus"><p>Para el futuro en la subordinada la forma más segura es <i>It is thought that the government <b>will pass</b> a new law</i> (impersonal). En la pasiva con <i>by</i> no pongas <i>by</i> para <i>someone, people, somebody, they, you</i>. Los verbos <i>hear, see, make</i> + infinitivo en la pasiva llevan <b>to</b>: <i>They heard him shout</i> → <i>He was heard <b>to shout</b></i>.</p></div>
`,
clase:[
["Students were usually given grants at the end of the course.","The headmaster",["usually gave students grants at the end of the course","usually gave grants to students at the end of the course"]],
["The inspector arrested the thief last night.","The thief",["was arrested by the inspector last night"]],
["John stole the wallet yesterday.","The wallet",["was stolen by John yesterday"]],
["During the season, you are not allowed to eat red meat.","During the season,",["red meat must not be eaten","red meat can not be eaten","red meat may not be eaten"]],
["They heard him shout for help.","He",["was heard to shout for help","was heard shouting for help"]],
["The hotel manager has offered me a job.","I have",["been offered a job by the hotel manager","been offered a job"]],
["The company will pay us $10,000.","We",["will be paid $10,000 by the company","will be paid $10,000","will be paid 10,000 dollars by the company","will be paid 10,000 dollars"]],
["The teacher glued the pieces of the broken toy.","The pieces",["of the broken toy were glued by the teacher"]],
["Everybody must read the instructions first.","The instructions",["must be read first","must be read first by everybody","must be read by everybody first"]],
["People think that the government will pass a new law.","It",["is thought that the government will pass a new law"]],
["People believed that Mike sang very well.","It",["was believed that Mike sang very well"]],
["People said that Mr. Brown owed a lot of money.","It",["was said that Mr. Brown owed a lot of money"]],
["People think that the government will pass a new law.","The government",["is thought to pass a new law","is thought to be going to pass a new law"]],
["People believed that Mike sang very well.","Mike",["was believed to sing very well","was believed to have sung very well"]],
["People said that Mr. Brown owed a lot of money.","Mr. Brown",["was said to owe a lot of money","was said to have owed a lot of money"]],
["People thought that John was Catherine's father.","John",["was thought to be Catherine's father","was thought to have been Catherine's father"]],
["They think that James did well in his driving test.","James",["is thought to have done well in his driving test"]],
["They thought that the prisoners escaped during the night.","The prisoners",["were thought to have escaped during the night"]],
["People say that living in a big city is really stressful.","Living",["in a big city is said to be really stressful"]]
],
extra:[
["The children broke the window.","The window",["was broken by the children"]],
["Someone is cleaning the kitchen.","The kitchen",["is being cleaned"]],
["They will announce the results tomorrow.","The results",["will be announced tomorrow"]],
["They have cancelled the flight.","The flight",["has been cancelled","has been canceled"]],
["People say that the old bridge is dangerous.","It",["is said that the old bridge is dangerous"]],
["People say that the old bridge is dangerous.","The old bridge",["is said to be dangerous"]],
["A famous architect designed this building.","This building",["was designed by a famous architect"]],
["They gave her a beautiful necklace.","She",["was given a beautiful necklace"]],
["You must wash your hands before eating.","Your hands",["must be washed before eating"]],
["People believe that the thief escaped through the window.","The thief",["is believed to have escaped through the window"]],
["Nobody has told me the truth.","I",["have not been told the truth"]],
["They were repairing the road when we arrived.","The road",["was being repaired when we arrived"]],
["Someone is going to deliver the parcel tomorrow.","The parcel",["is going to be delivered tomorrow"]]
],
evau:[
["Julio 2026","My classmates will finish the project on Friday.","The project",["will be finished by my classmates on Friday"]],
["Junio 2026","Someone is painting our classroom now.","Our classroom",["is being painted now"]],
["Junio 2025","They gave Finneas O'Connell an award for his outstanding contribution to music.","Finneas O'Connell",["was given an award for his outstanding contribution to music"]],
["Julio 2025","Two Oxford researchers captured the media's attention.","The media's attention",["was captured by two Oxford researchers"]],
["Junio 2024","People think this winter is warmer than ever.","This winter",["is thought to be warmer than ever"]],
["Julio 2024","They don't allow parking in the hospital premises.","Parking",["is not allowed in the hospital premises"]],
["Julio 2024","Someone will iron Mary's dress.","Mary's dress",["will be ironed"]],
["Julio 2024","They have sent a bunch of beautiful flowers to the secretary.","The secretary",["has been sent a bunch of beautiful flowers"]],
["Junio 2023","Someone threw away old furniture next to the street rubbish bin.","Old furniture",["was thrown away next to the street rubbish bin"]],
["Junio 2023","You must do this activity within five minutes.","This activity",["must be done within five minutes"]],
["Julio 2023","The police officers are investigating the murder.","The murder",["is being investigated by the police officers"]],
["Junio 2022","A lot of people watched the film.","The film",["was watched by a lot of people"]],
["Julio 2022","They are going to discuss the issue in the meeting.","The issue",["is going to be discussed in the meeting"]],
["Junio 2021","They make wonderful sandwiches in this restaurant.","Wonderful sandwiches",["are made in this restaurant"]],
["Junio 2021","My father is going to take our bags to the station.","Our bags",["are going to be taken to the station by my father","are going to be taken to the station"]],
["Julio 2021","You must send these letters this afternoon.","These letters",["must be sent this afternoon"]],
["Julio 2021","Somebody promised us two tickets for the concert.","We",["were promised two tickets for the concert"]],
["Junio 2020 / Julio 2020","Someone must tell her about the plane accident.","She",["must be told about the plane accident"]],
["Junio 2020","They covered the table with plastic to protect it.","The table",["was covered with plastic to protect it"]],
["Julio 2020 / Junio 2019","They have sent a bunch of flowers to the secretary.","A bunch of flowers",["has been sent to the secretary"]],
["Junio 2019","The Red Cross is sending food to the refugees.","The refugees",["are being sent food by the Red Cross","are being sent food"]],
["Julio 2019","You must send these letters this afternoon.","These letters",["must be sent this afternoon"]],
["Junio 2018","Somebody has repaired the TV this morning.","The TV",["has been repaired this morning"]],
["Junio 2018","Do people consider this school to be good place to study?","Is",["this school considered to be a good place to study","this school considered to be good place to study","this school considered a good place to study"]],
["Julio 2018","All passengers must wear a seat belt.","Seat belts",["must be worn by all passengers"]],
["Julio 2018","They gave John a present for his birthday.","John",["was given a present for his birthday"]],
["Junio 2017","The pupils have invited many teachers to the end of the year party.","Many teachers",["have been invited to the end of the year party by the pupils","have been invited to the end of the year party"]],
["Junio 2017","A local artist is organizing the exhibition of paintings.","The exhibition",["of paintings is being organized by a local artist","of paintings is being organised by a local artist"]],
["Sept 2017","They have arrested the woman for shoplifting.","The woman",["has been arrested for shoplifting"]],
["Sept 2017","They gave John a warm welcome.","John",["was given a warm welcome"]],
["Junio 2016","People know that the situation is precarious.","The situation",["is known to be precarious"]],
["Junio 2016","Someone stole my laptop at the library.","My laptop",["was stolen at the library"]],
["Sept 2016","Chapman shot Lennon in front of the Dakota building.","Lennon",["was shot by Chapman in front of the Dakota building"]],
["Junio 2015","They are building a new school near the church.","A new school",["is being built near the church"]],
["Junio 2015","People think that the internet is very dangerous for children.","The internet",["is thought to be very dangerous for children"]],
["Junio 2015","The Nazis killed her father during the war.","Her father",["was killed by the Nazis during the war"],"En el cuaderno el comienzo pone «He father» (errata de «Her father»)."],
["Sept 2015","People think that Fito is a talented musician.","Fito",["is thought to be a talented musician"]],
["Junio 2014","They will publish her book next month.","Her book",["will be published next month"]],
["Sept 2014","People think that my father is genius.","My father",["is thought to be genius","is thought to be a genius"]],
["Sept 2014","We have been given the results.","Doctors",["have given us the results"]],
["Junio 2013","Someone threw away a cigarette in the rubbish bin yesterday.","Yesterday",["a cigarette was thrown away in the rubbish bin","a cigarette was thrown in the rubbish bin"]],
["Sept 2013","People say that German children are very polite.","German children",["are said to be very polite"]],
["Sept 2013","People think that drinking is a dangerous drug.","Drinking",["is thought to be a dangerous drug"]],
["Junio 2012","They are considering your application for the job.","Your application for the job",["is being considered"]],
["Sept 2012","Someone stole my watch at the airport.","My watch",["was stolen at the airport"]],
["Junio 2011","The atmosphere is made up of various gases.","Various gases",["make up the atmosphere","compose the atmosphere","form the atmosphere"]],
["Junio 2011","They gave me a watch for my birthday.","I",["was given a watch for my birthday"]],
["Sept 2011","Hakim offered Maura some of the most tender and tasty meat.","Maura",["was offered some of the most tender and tasty meat by Hakim","was offered some of the most tender and tasty meat"]],
["Junio 2010","A professional photographer will take all the photographs.","All the",["photographs will be taken by a professional photographer"]],
["Junio 2010","People say that nuclear power stations are dangerous.","It's",["said that nuclear power stations are dangerous"]],
["Sept 2010","The headmaster greeted the new student.","The new student",["was greeted by the headmaster"]],
["Junio 2009","She will post the documents on Monday morning.","The documents",["will be posted on Monday morning","will be posted by her on Monday morning"]],
["Junio 2007","People speak English all over the world.","English",["is spoken all over the world"]],
["Sept 2006","The shop assistant didn't give us the ticket.","We",["were not given the ticket by the shop assistant","were not given the ticket"]],
["Junio 2005","The police don't oblige the suspects to say anything.","The suspects",["are not obliged to say anything by the police","are not obliged to say anything"]],
["Sept 2004","You can make green paint by mixing blue and yellow.","Green paint",["can be made by mixing blue and yellow"]],
["Sept 2003","You should post these letters.","These letters",["should be posted"]],
["Sept 2002","This story will shock you.","You",["will be shocked by this story"]],
["Junio 2000","I am having my house painted now.","My house",["is being painted now"]],
["Sept 2000","Fleming discovered penicillin in 1928.","Penicillin",["was discovered by Fleming in 1928"]]
]});
