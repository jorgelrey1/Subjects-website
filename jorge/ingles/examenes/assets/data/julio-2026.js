(function(){
function XX(tpl,map){var res=[tpl];Object.keys(map).forEach(function(k){var n=[];res.forEach(function(s){map[k].forEach(function(v){n.push(s.split('{'+k+'}').join(v))})});res=n});return res}
function flat(){var o=[];for(var i=0;i<arguments.length;i++)o=o.concat(arguments[i]);return o}
EX.register("julio-2026",{
label:"Julio 2026 · Extraordinaria",
reading:{
title:"Breath Meditation: A Great Way to Relieve Stress",
starts:[1,7,12,17],
lines:[
"Stress can be defined as a state of worry or mental tension caused by a difficult situation in your",
"personal life that prevents you from relaxing. Everyone experiences stress from time to time. However,",
"according to an article published by the Harvard Medical School, psychological stress has a devastating",
"effect on health. Research shows that people with heart disease do worse over time if they don’t control",
"stress, and stress seems to be associated with a higher risk for cancer, poorer memory, and more aches.",
"However, reducing stress helps you sleep restfully and control high blood pressure.",
"One of the easiest ways to reduce stress is connected to breathing. Paying attention to your breath",
"is a form of “entry level” meditation that anyone can do. You’ll notice an immediate sense of relaxation that",
"could help protect your health over time. Simple breathing meditation requires only that you find a",
"comfortable position in a place with minimal distractions. You may sit, stand, or walk—whichever you prefer.",
"Many people find the sitting position to be best.",
"If you enjoy it, breath meditation can be a gateway to a broader practice of “mindfulness,” in which",
"you learn to accept and appreciate what comes in life and stop fighting your own thoughts and feelings.",
"Mindfulness is a concept that originated in Buddhism, although its fundamental principles are shared by",
"many spiritual traditions, philosophies, and religions. Mindfulness simply means the practice of purposely",
"focusing your attention on the present moment—and accepting it without judgment.",
"“Many people take up mindfulness practices thinking they’d like to relax more, but where it leads",
"is a very different approach to life and its inevitable challenges,” says Dr. Ronald D. Siegel. The mind can",
"be a noisy, busy place. As you try to focus your attention, thoughts will often arise. The key is not to get",
"annoyed or impatient with your restless mind. Acknowledge the thoughts and let your attention slip from",
"them. “Learning to focus attention and relax is a skill,” Dr. Siegel says. “As with any skill, your ability to",
"focus and relax will improve with practice.”"
],
source:"Adapted from “Breath Meditation: A great way to relieve stress,” Harvard.edu, April 15, 2014."
},
tf:[
{q:"Reducing stress has no effect on sleep quality.",v:false,ev:[{t:"reducing stress helps you sleep restfully",l:"6"}],why:"El texto dice que reducir el estrés ayuda a dormir mejor."},
{q:"Breathing meditation must be done while sitting in order to be effective.",v:false,ev:[{t:"You may sit, stand, or walk—whichever you prefer",l:"10"}],why:"Se puede estar sentado, de pie o caminando."},
{q:"Mindfulness is a practice that only exists in Buddhism.",v:false,ev:[{t:"its fundamental principles are shared by many spiritual traditions, philosophies, and religions",l:"14–15"},{t:"many spiritual traditions, philosophies, and religions",l:"15"}],why:"Nació en el budismo, pero sus principios se comparten en otras tradiciones."},
{q:"According to Dr. Siegel, becoming better at focusing and relaxing does not depend on practice.",v:false,ev:[{t:"your ability to focus and relax will improve with practice",l:"21–22"}],why:"Según Siegel, mejora con la práctica."}
],
lex:[
{q:"Catastrophic",a:["devastating","disastrous","terrible","catastrophal","ruinous","awful","dreadful","calamitous"],from:"del texto: devastating (línea 3)"},
{q:"Illness",a:["disease","sickness","ailment","disorder","condition","malady"],from:"del texto: disease (línea 4)"},
{q:"Intentionally",a:["purposely","deliberately","on purpose","purposefully","consciously","knowingly"],from:"del texto: purposely (línea 15)"},
{q:"Get better",a:["improve","recover","heal","progress","get well","get healthier"],from:"del texto: improve (línea 22)"}
],
pho:[
{type:"diph",q:"Write one word from the text that includes the diphthong <b>/eɪ/</b>. Write <u>the number of the line</u> where you find this word in the text.",sound:"/eɪ/",words:["state","devastating","aches","associated","paying","ways","relaxation","place","may","gateway","appreciate","originated","take","impatient"],examples:["state (línea 1)","aches (línea 5)","ways (línea 7)","place (línea 10)","may (línea 10)","take (línea 17)"],why:"Suena como en «day» /deɪ/ o «make» /meɪk/."},
{type:"choice",q:"How is the “ed” pronounced in associat<b><u>ed</u></b>: /t/, /d/ or /ɪd/?",opts:["/t/","/d/","/ɪd/"],a:"/ɪd/",why:"Cuando el verbo termina en /t/ o /d/, «-ed» se pronuncia /ɪd/: associated /əˈsəʊsieɪtɪd/."},
{type:"choice",q:"How is the “th” pronounced in heal<b><u>th</u></b>: /ð/ or /θ/?",opts:["/ð/","/θ/"],a:"/θ/",why:"«health» /helθ/ acaba en el sonido sordo /θ/."},
{type:"choice",q:"How is the “a” pronounced in st<b><u>a</u></b>nd: /ɑː/, /æ/ or /ʌ/?",opts:["/ɑː/","/æ/","/ʌ/"],a:"/æ/",why:"«stand» /stænd/: la «a» suena /æ/."}
],
uoeQ:[
"You can’t go to the party if you don’t finish your homework.",
"The students haven’t done yoga before.",
"My classmates will finish the project on Friday.",
"It’s a pity we don’t travel more.",
"Although I studied a lot, I didn’t pass my exams.",
"“The gym closed at 10:00 yesterday,” Paul said.",
"Next month we’re visiting Paris. My cousins live there.",
"The food was so delicious that we asked for more.",
"Write the correct question for the underlined words. Lisa bought [a new laptop] last week."
],
uoe:[
["Unless",["you finish your homework, you can not go to the party","you finish your homework, you will not be able to go to the party","you finish your homework, you will not go to the party"],"Unless = if … not: «Unless you finish…», verbo en afirmativo."],
["It",["is the first time the students have done yoga","is the first time that the students have done yoga","is the first time the students have practised yoga","is the first time the students have practiced yoga"],"Con «haven’t … before» → «It is the first time + present perfect»."],
["The project",XX("will be finished {a}",{a:["by my classmates on Friday","on Friday by my classmates"]}).concat(["will have been finished by my classmates on Friday"]),"Pasiva de futuro: will be + participio (+ by + agente)."],
["I wish",flat(XX("{t}we travelled more",{t:["","that "]}),XX("{t}we traveled more",{t:["","that "]}),XX("{t}we could travel more",{t:["","that "]})),"I wish + pasado simple (lamentar algo del presente)."],
["Despite",XX("{x}, I did not pass my exams",{x:["studying a lot","having studied a lot","the fact that I studied a lot","the fact I studied a lot","my studying a lot","studying a great deal"]}),"Despite + -ing / sustantivo / the fact that + frase."],
["Paul",XX("said {t}the gym had closed at {h} {d}",{t:["that ",""],h:["10:00","10","10 o'clock"],d:["the day before","the previous day"]}),"Estilo indirecto: yesterday → the day before / the previous day, y el pasado pasa a past perfect."],
["Next month",flat(XX("we are visiting Paris, where my cousins live",{}),["we will visit Paris, where my cousins live","we are going to visit Paris, where my cousins live","we are going to Paris, where my cousins live","we are visiting Paris, where my cousins are living"]),"Relativa explicativa de lugar: Paris, where my cousins live."],
["It was",flat(XX("such {n} that we asked for {m}",{n:["delicious food"],m:["more","some more"]})),"such + (adjetivo) + sustantivo + that…; «so» solo va con adjetivo."],
["",["=What did Lisa buy last week","=What did Lisa buy"],"Pregunta por el objeto: What + did + sujeto + verbo en infinitivo."]
],
uoeRules:{},
writing:{
opts:[{n:1,t:"Do teenagers today feel more stress than in the past? Give your opinion."},{n:2,t:"Advantages and disadvantages of teaching meditation and mindfulness at school."}],
models:[
{n:1,t:"In my opinion, teenagers today feel more stress than young people in the past, although every generation has had its own problems.\n\nFirst of all, nowadays students are under a lot of pressure at school. They have to get high marks to go to university and, besides, they have many exams and homework. Secondly, technology has changed their lives. Social media makes teenagers compare themselves with others all the time, and many of them sleep badly because they use their phones at night.\n\nOn the other hand, some people say that our grandparents also suffered stress, because they started working when they were very young and life was often harder. This is true, but I think they did not have to deal with the constant noise of the internet.\n\nIn conclusion, I believe that teenagers feel more stress than before, mainly because of school pressure and social media. For this reason, schools and families should teach young people to relax, to do sport and to ask for help when they need it."},
{n:2,t:"Teaching meditation and mindfulness at school has several advantages, but it also has some disadvantages.\n\nOn the one hand, meditation can help students to reduce stress, especially before exams. Moreover, they learn to focus their attention, so they can concentrate better in class. In addition, these practices can improve their mood and help them to deal with difficult emotions in a healthy way.\n\nOn the other hand, school timetables are already very full, and teachers may not have enough time or training to teach meditation properly. Furthermore, some students may find it boring or ridiculous, and some families could think that it is not the school’s job.\n\nIn my opinion, the advantages are greater than the disadvantages. If schools offer short sessions, for example ten minutes a day, and if they are voluntary, mindfulness can be a very useful tool for teenagers. As a result, they would feel calmer and learn better."}
]}
});
})();
