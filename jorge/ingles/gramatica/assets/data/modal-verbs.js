GRAM.register("modal-verbs",{
rule:"Identifica la <b>idea</b> (consejo, prohibición, obligación, probabilidad, deducción, capacidad…) y usa el modal de la tabla. Para el <b>pasado</b>: <b>modal + have + participio</b> (deducción/probabilidad/arrepentimiento) o <b>could / was able to</b> (capacidad).",
theory:`
<div class="tw"><table class="t">
<tr><th>Idea</th><th>Modal</th><th>Palabras que la delatan</th></tr>
<tr><td><b>Advice</b> (consejo)</td><td>should · ought to · <i>you’d better</i> + verbo</td><td>if I were you · my advice · it’s a good idea</td></tr>
<tr><td><b>Regret</b> (arrepentimiento)</td><td><b>shouldn’t have</b> + participio</td><td>it was wrong · it was a mistake</td></tr>
<tr><td><b>Probability / possibility</b></td><td>presente: <b>may · might</b> + verbo<br>pasado: <b>may / might have</b> + participio</td><td>possibly · probably · perhaps · maybe · it’s possible that</td></tr>
<tr><td><b>Prohibition</b></td><td><b>mustn’t</b> (can’t)</td><td>not allowed · illegal · banned · prohibited · forbidden · against the law</td></tr>
<tr><td><b>Obligation</b></td><td><b>must · have to</b></td><td>obligatory · mandatory · compulsory · required</td></tr>
<tr><td><b>Lack of obligation</b></td><td><b>don’t have to · don’t need to · needn’t</b></td><td>it isn’t necessary</td></tr>
<tr><td><b>Prediction</b> (seguro) <b>+</b></td><td>presente: <b>must</b> · pasado: <b>must have</b> + participio</td><td>I’m sure…</td></tr>
<tr><td><b>Prediction</b> (seguro) <b>–</b></td><td>presente: <b>can’t</b> · pasado: <b>can’t have</b> + participio</td><td>I’m sure… not / I’m not sure…(→ may not)</td></tr>
<tr><td><b>Permission</b></td><td>presente: can / can’t · pasado: could / couldn’t</td><td>(not) allowed</td></tr>
<tr><td><b>Ability</b></td><td>presente: can / can’t · pasado: could / couldn’t · <i>was able to</i></td><td>manage · able to · know how to</td></tr></table></div>
<h3>Cómo transformar</h3>
<ul>
<li>El <b>sujeto</b> suele cambiar: <i>It was wrong of <b>you</b> to talk</i> → <i><b>You</b> shouldn’t have talked</i>. <i>Smoking is not allowed</i> → <i><b>You / People</b> mustn’t smoke</i>.</li>
<li><b>I’m sure + presente</b> → <i>must be</i> · <b>I’m sure + pasado</b> → <i>must have + participio</i> · <b>I’m not sure</b> → <i>may not / might not</i> · <b>I’m sure … not</b> → <i>can’t</i>.</li>
<li><b>It’s possible that / perhaps / probably</b> → <i>may / might</i> + verbo (presente o futuro) o <i>may have + participio</i> (pasado).</li>
<li><b>Not allowed / forbidden</b> = <i>mustn’t</i> (¡no es lo mismo que <i>don’t have to</i>!). <b>Not necessary / compulsory no</b> = <i>don’t have to</i>.</li>
<li><b>knows how to / managed to</b> → <i>can / could</i> o <i>was able to</i>.</li>
</ul>
<div class="box plus"><p><b>Ojo:</b> <i>mustn’t</i> (prohibido) ≠ <i>don’t have to</i> (no es necesario). <i>I should have gone</i> = debería haber ido (y no fui). Después de un modal, el verbo va en <b>infinitivo sin to</b>: <i>She may <b>come</b></i>. Tras <i>had better</i> también: <i>You’d better <b>call</b> a doctor</i>. <i>Must</i> no tiene pasado: se usa <i>had to</i>.</p></div>
`,
clase:[
["You'd better call a doctor.","You",["should call a doctor","ought to call a doctor"]],
["It was wrong of you to talk to her like that.","You",["should not have talked to her like that","should not have spoken to her like that"]],
["It's possible that I finish work earlier than usual today.","I",["may finish work earlier than usual today","might finish work earlier than usual today"]],
["She possibly lost her wallet on the train.","She",["may have lost her wallet on the train","might have lost her wallet on the train"]],
["Smoking is not allowed in restaurants nowadays.","People",["must not smoke in restaurants nowadays","can not smoke in restaurants nowadays","are not allowed to smoke in restaurants nowadays"]],
["Students at this school are required to wear uniforms.","Students",["must wear uniforms at this school","have to wear uniforms at this school","must wear uniforms","have to wear uniforms"]],
["In 11th grade, wearing a uniform is not compulsory.","11th graders",["do not have to wear a uniform","do not need to wear a uniform","do not have to wear uniforms","do not need to wear uniforms"]],
["I am sure he is rich. He owns a Ferrari.","He",["must be rich"]],
["I'm sure he spent all his money on clothes.","He",["must have spent all his money on clothes"]],
["I'm not sure they are related.","They",["may not be related","might not be related"]],
["During the season, you are not allowed to eat red meat.","During the season,",["you must not eat red meat","you can not eat red meat"]],
["Children were not allowed to play ball games here.","Children",["could not play ball games here"]],
["My grandmother knew how to sew.","My grandmother",["could sew"]],
["She knows how to play tennis.","She",["can play tennis"]],
["The police weren't able to save the kid.","They",["could not save the kid"]]
],
extra:[
["It's a good idea to see a doctor.","You",["should see a doctor","ought to see a doctor","had better see a doctor"]],
["Perhaps she is at the library.","She",["may be at the library","might be at the library"]],
["It was a mistake to leave so early.","You",["should not have left so early"]],
["I'm sure they have already left.","They",["must have already left","must have left already","must have left"]],
["It's compulsory to wear a helmet.","You",["must wear a helmet","have to wear a helmet"]],
["It isn't necessary to bring food.","You",["do not have to bring food","do not need to bring food","need not bring food"]],
["I'm sure she isn't at home.","She",["can not be at home"]],
["You aren't allowed to park here.","You",["must not park here","can not park here"]],
["Perhaps he forgot the keys.","He",["may have forgotten the keys","might have forgotten the keys"]],
["Does he know how to swim?","Can",["he swim"]],
["I'm sure that he didn't see us.","He",["can not have seen us"]],
["It's possible that it snows tonight.","It",["may snow tonight","might snow tonight"]]
],
evau:[
["Junio 2025","It's forbidden to bring cameras into the concert venue.","You",["must not bring cameras into the concert venue","can not bring cameras into the concert venue"]],
["Julio 2025","I am sure he is at home. The light is on.","He",["must be at home"]],
["Junio 2024","It's not necessary for you to wear a uniform.","You",["do not have to wear a uniform","do not need to wear a uniform","need not wear a uniform"]],
["Julio 2024","It was wrong of you to be so rude to her.","You",["should not have been so rude to her"]],
["Junio 2023","The weather will probably be milder in the evening.","The weather",["may be milder in the evening","might be milder in the evening"]],
["Junio 2022","It's possible they will take part in the competition.","They",["may take part in the competition","might take part in the competition"]],
["Julio 2022","Paul knows how to speak French fluently.","Paul",["can speak French fluently"]],
["Julio 2022","It's a good idea for you to study this subject.","You",["should study this subject","ought to study this subject"]],
["Junio 2021","Perhaps they will find a solution soon.","They",["may find a solution soon","might find a solution soon"]],
["Julio 2021","He is not allowed to smoke on the underground","He",["must not smoke on the underground","can not smoke on the underground"]],
["Junio 2020","Smoking isn't allowed in public buildings.","You",["must not smoke in public buildings","can not smoke in public buildings"]],
["Julio 2019","My grandmother didn't know how to use a mobile phone one year ago.","My grandmother",["could not use a mobile phone one year ago","could not use a mobile phone a year ago"]],
["Junio 2018","My brother knew how to ride a bike when he was five.","My brother",["could ride a bike when he was five"]],
["Junio 2017","It is possible that they will be replaced by robots.","They",["may be replaced by robots","might be replaced by robots"]],
["Junio 2016","My advice to you is to stop smoking","You had",["better stop smoking","better quit smoking"],"En el cuaderno pone «My advice to you it to stop smoking» (errata de «is»)."],
["Junio 2016","It will probably rain tomorrow.","It",["may rain tomorrow","might rain tomorrow"]],
["Sept 2016","It is possible that I arrive before midnight.","I",["may arrive before midnight","might arrive before midnight"]],
["Junio 2015","You should take your dog to the vet.","You had",["better take your dog to the vet"]],
["Junio 2015","You don't have to copy the text word for word.","You",["do not need to copy the text word for word","need not copy the text word for word"]],
["Junio 2014","Smoking is prohibited in the airport.","People",["must not smoke in the airport","can not smoke in the airport","are not allowed to smoke in the airport"]],
["Sept 2014","You don't have to get up early on Saturday.","You",["do not need to get up early on Saturday","need not get up early on Saturday"]],
["Sept 2014","If I were you, I would stay at home.","You'd",["better stay at home"]],
["Junio 2013","I'm sure he is rich because he owns three houses.","He",["must be rich because he owns three houses","must be rich as he owns three houses"]],
["Sept 2013","If I were you, I'd clean your room.","You",["should clean your room","ought to clean your room","had better clean your room"]],
["Sept 2013","He probably lost his wallet at the airport.","He",["may have lost his wallet at the airport","might have lost his wallet at the airport"]],
["Sept 2013","You should work a little harder.","You had",["better work a little harder"]],
["Junio 2012","I don't need your help.","You",["do not have to help me","do not need to help me","need not help me"]],
["Junio 2012","It will probably rain this afternoon","It",["may rain this afternoon","might rain this afternoon"]],
["Sept 2012","Perhaps he will get a prize.","He",["may get a prize","might get a prize"]],
["Junio 2011","I'm sure that somebody has taken my wallet.","Someone must",["have taken my wallet"]],
["Junio 2011","It's banned to smoke in public places.","Smoking",["is banned in public places","is not allowed in public places","is forbidden in public places","is prohibited in public places"]],
["Junio 2011","Perhaps they have gone away on holiday.","They",["may have gone away on holiday","might have gone away on holiday"]],
["Sept 2011","The police managed to arrest the burglar.","The police",["were able to arrest the burglar","could arrest the burglar"]],
["Sept 2009","Perhaps my secretary knows his address.","My secretary",["may know his address","might know his address"]],
["Junio 2008","People are allowed to smoke in this bar.","People",["can smoke in this bar","may smoke in this bar"]],
["Junio 2007","It's possible that we'll be together soon.","We",["may be together soon","might be together soon"]],
["Sept 2006","Smoking is forbidden in most restaurants.","You",["must not smoke in most restaurants","can not smoke in most restaurants"]],
["Junio 2005","The fireman managed to rescue the child from the burning house.","The fireman was",["able to rescue the child from the burning house"]],
["Junio 2004","It's possible that her boyfriend is coming to the wedding.","Her boyfriend",["may be coming to the wedding","might be coming to the wedding"]],
["Sept 2004","Perhaps they only open the museum in the morning.","They",["may only open the museum in the morning","might only open the museum in the morning"]],
["Junio 2002","Smoking is forbidden in hospitals.","You",["must not smoke in hospitals","can not smoke in hospitals"]],
["Junio 2001","I'm not sure that she is his girlfriend.","She",["may not be his girlfriend","might not be his girlfriend"]],
["Sept 2001","You must not smoke in here.","Smoking",["is not allowed in here","is forbidden in here","is prohibited in here","is banned in here"]],
["Sept 2000","You can't have a bicycle.","You are",["not allowed to have a bicycle","not permitted to have a bicycle","forbidden to have a bicycle"]]
]});
