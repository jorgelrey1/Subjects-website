(function(){
function XX(tpl,map){var res=[tpl];Object.keys(map).forEach(function(k){var n=[];res.forEach(function(s){map[k].forEach(function(v){n.push(s.split('{'+k+'}').join(v))})});res=n});return res}
function flat(){var o=[];for(var i=0;i<arguments.length;i++)o=o.concat(arguments[i]);return o}
EX.register("junio-2026",{
label:"Junio 2026 · Ordinaria",
reading:{
title:"Are social media breaks becoming popular among young people?",
starts:[1,6,10,14,18,21,24],
lines:[
"In recent years, many young people have started to question the role that social media plays in",
"their daily lives. Platforms such as Instagram, TikTok, and Snapchat are still extremely popular, but a",
"growing number of teenagers and young adults are choosing to take “digital detox” breaks to improve their",
"mental health. According to several recent reports published in international newspapers, this trend is",
"becoming more common around the world.",
"Social media was originally created to help people stay connected, share experiences, and",
"communicate easily. However, experts say that constant online activity can sometimes create pressure,",
"especially for young users. Many teenagers compare their lives with the carefully edited images they see",
"online, which can lead to feelings of anxiety or low self-esteem.",
"A recent study mentioned in The Guardian showed that young people spend an average of more",
"than three hours per day on social media platforms. Psychologists explain that this constant exposure to",
"notifications, likes, and comments can affect concentration and sleep habits. For this reason, some schools",
"and youth organizations are encouraging students to reduce their screen time.",
"One popular solution is the “social media break.” During these breaks, users delete apps from",
"their phones or limit their daily usage for a certain period, such as one week or one month. Many young",
"people report positive results after trying this experiment. They say they feel more relaxed, sleep better,",
"and have more time for hobbies, sports, or face-to-face conversations with friends.",
"Despite these benefits, experts do not suggest completely abandoning technology. Instead, they",
"recommend learning how to use it responsibly. Social networks can still be useful tools for creativity,",
"education, and communication when used in moderation.",
"Some influencers have also joined this movement by sharing honest experiences about digital",
"stress and encouraging followers to create healthier online habits. This has helped reduce the stigma",
"around taking breaks from social media.",
"In the future, specialists believe that digital education will become an important part of school",
"programs. Teaching young people how to balance online and offline life may help them develop healthier",
"relationships with technology while still enjoying its advantages."
],
source:"Adapted from the BBC News (2025)."
},
tf:[
{q:"The increase in “digital detox” breaks is only happening in a few specific countries.",v:false,ev:[{t:"this trend is becoming more common around the world",l:"4–5"}],why:"El texto dice que la tendencia es cada vez más común en todo el mundo."},
{q:"All schools and youth organizations are asking students to reduce their time spent using digital devices.",v:false,ev:[{t:"some schools and youth organizations are encouraging students to reduce their screen time",l:"12–13"}],why:"Dice «some schools», no «all schools»."},
{q:"Young people who try a social media break usually report having fewer opportunities to interact with others face to face.",v:false,ev:[{t:"have more time for hobbies, sports, or face-to-face conversations with friends",l:"16–17"},{t:"Many young people report positive results after trying this experiment",l:"15–16"}],why:"Cuentan que tienen más tiempo para conversaciones cara a cara, no menos."},
{q:"Specialists think that learning how to manage the use of technology will likely be included in future school education.",v:true,ev:[{t:"specialists believe that digital education will become an important part of school programs",l:"24–25"}],why:"Es lo que dice el último párrafo."}
],
lex:[
{q:"Increasing",a:["growing","rising","expanding","mounting","escalating","developing"],from:"del texto: growing (línea 3)"},
{q:"Confidence, security",a:["self-esteem","self esteem","self-confidence","self confidence","assurance","self-assurance","self-worth"],from:"del texto: self-esteem (línea 9)"},
{q:"Regular, periodic",a:["frequent","habitual","recurrent","recurring","routine","daily","repeated","repetitive","constant","usual","steady"],from:"quizá de «daily» (línea 2); otras valen"},
{q:"Promoting",a:["encouraging","supporting","fostering","advocating","boosting","recommending","stimulating","helping"],from:"del texto: encouraging (línea 13)"}
],
pho:[
{type:"diph",q:"Write one word from the text that includes the diphthong <b>/aɪ/</b>. Write <u>the number of the line</u> where you find this word in the text.",sound:"/aɪ/",words:["lives","online","offline","anxiety","psychologists","likes","time","trying","despite","life","while"],examples:["lives (línea 2)","online (línea 7)","likes (línea 12)","time (línea 17)","despite (línea 18)","life (línea 25)"],why:"Suena como en «time» /taɪm/ o «like» /laɪk/."},
{type:"choice",q:"How is the “s” pronounced in like<b><u>s</u></b>: /s/, /z/ or /ɪz/?",opts:["/s/","/z/","/ɪz/"],a:"/s/",why:"Tras un sonido sordo (/k/) la «s» final se pronuncia /s/: likes /laɪks/."},
{type:"choice",q:"How is the “th” pronounced in <b><u>th</u></b>ree: /ð/ or /θ/?",opts:["/ð/","/θ/"],a:"/θ/",why:"«three» empieza con el sonido sordo /θ/ (como la «z» de España)."},
{type:"choice",q:"How is the “e” pronounced in r<b><u>e</u></b>sponsibly: /e/, /ɪ/ or /æ/?",opts:["/e/","/ɪ/","/æ/"],a:"/ɪ/",why:"En «responsibly» /rɪˈspɒnsəbli/ la primera «e» es átona y suena /ɪ/."}
],
uoeQ:[
"I arrived late to the station. I missed the bus.",
"My classmates haven’t read this book before.",
"Someone is painting our classroom now.",
"It’s a pity we don’t go out more.",
"Although it was windy, the students played football.",
"“The school opened at 8:00 yesterday,” Remi said.",
"My uncle lives in Canada. He is a famous artist.",
"The music was so loud that we couldn’t talk.",
"Write the correct question for the underlined words. Sam ordered [a new schoolbag] last month."
],
uoe:[
["If",flat(XX("I had not arrived late {p} the station, I would not have missed the bus",{p:["to","at"]}),XX("I had arrived {w}, I would not have missed the bus",{w:["on time","early","earlier","at the station on time"]})),"Tercer condicional (pasado irreal): if + past perfect, would have + participio."],
["It",["is the first time my classmates have read this book","is the first time that my classmates have read this book","is the first time my classmates have read this book","has not been read before by my classmates","has not been read by my classmates before"],"Con «haven’t … before» → «It is the first time + present perfect»."],
["Our classroom",flat(XX("is being painted {b}now",{b:["","by someone "]}),["is being painted now by someone"]),"Pasiva de presente continuo: is/are being + participio."],
["I wish",flat(XX("{t}we went out more",{t:["","that "]}),XX("{t}we could go out more",{t:["","that "]})),"I wish + pasado simple (para lamentar algo del presente)."],
["Despite",flat(XX("{x}, the students played {f}",{x:["the wind","the windy weather","it being windy","the weather being windy","the fact that it was windy","the fact it was windy"],f:["football","soccer"]})),"Despite + sustantivo / -ing / the fact that + frase."],
["Remi",XX("said {t}the school had opened at {h} {d}",{t:["that ",""],h:["8:00","8","8 o'clock"],d:["the day before","the previous day"]}),"Estilo indirecto: yesterday → the day before / the previous day, y el pasado pasa a past perfect."],
["My uncle,",["who lives in Canada, is a famous artist","who is a famous artist, lives in Canada"],"Oración de relativo explicativa: entre comas, con «who» (no «that»)."],
["It was",flat(XX("such {n} that we {c} talk",{n:["loud music"],c:["could not","were unable to","were not able to"]})),"such + (adjetivo) + sustantivo + that ... (con «so» va adjetivo solo)."],
["",["=What did Sam order last month","=What did Sam order"],"Pregunta por el objeto: What + did + sujeto + verbo en infinitivo."]
],
uoeRules:{},
writing:{
opts:[{n:1,t:"Advantages and disadvantages of having a mobile phone nowadays."},{n:2,t:"Should there be an “age limit” for social media? Give your opinion."}],
models:[
{n:1,t:"Nowadays, almost everybody has a mobile phone, and it has become an essential part of our daily lives. In my opinion, it has both clear advantages and some important disadvantages.\n\nOn the one hand, a mobile phone allows us to stay in touch with our family and friends at any time. Moreover, we can look for information, use maps and study online in a few seconds. In an emergency, it can even save our lives because we can call for help immediately.\n\nOn the other hand, many people spend too many hours looking at their screens. As a result, they sleep badly, lose concentration and talk less face to face. In addition, social media can make young people compare themselves with others and feel anxious.\n\nIn conclusion, I believe that a mobile phone is a very useful tool as long as we use it responsibly. If we set limits, the advantages will be much greater than the disadvantages."},
{n:2,t:"In my opinion, there should be an age limit for social media, although it is not easy to enforce.\n\nFirstly, young children are not mature enough to deal with everything they can find online. They may see violent or inappropriate content, or talk to strangers without knowing the risks. Secondly, social media can damage their mental health. Many teenagers compare their lives with the perfect images they see and, as a result, they feel unhappy or have low self-esteem.\n\nHowever, some people argue that an age limit is useless because children can lie about their age. Others say that social media helps young people to make friends and learn new things. Although these arguments are reasonable, I think parents and schools should work together to protect children.\n\nTo sum up, I am in favour of a minimum age of fourteen or sixteen, because children need time to grow up before they join social networks. Besides, parents should talk to them about how to use the internet safely."}
]}
});
})();
