GRAM.register("wish",{
rule:"<b>Presente / futuro</b> → I wish + <b>past simple</b> (could, were…). <b>Pasado</b> → I wish + <b>had + participio</b> (hadn’t + participio si lo hecho se lamenta). <b>Molestia</b> → I wish + <b>sujeto distinto + would</b>.",
theory:`
<div class="box"><p><b>I wish / If only</b> = <i>ojalá</i> · <b>It’s a pity</b> = <i>es una lástima</i> · <b>I regret</b> = <i>lamento, me arrepiento</i>. Con estas expresiones hablamos de cosas que nos gustaría que fueran distintas. Se puede cambiar una por otra: <b>el verbo que va detrás de wish va un tiempo «hacia atrás»</b>.</p></div>
<h3>1) Presente o futuro → past simple</h3>
<p>Cosas que nos gustaría cambiar <b>ahora o en el futuro</b>. El verbo negativo pasa a positivo y viceversa.</p>
<ul>
<li>I would really like to be able to play the piano → <b>I wish I could play</b> the piano.</li>
<li>I’m sorry I can’t help you → <b>I wish I could help</b> you.</li>
<li>It’s a pity we don’t travel more → <b>I wish we travelled</b> more.</li>
</ul>
<h3>2) Pasado → past perfect (had + participio)</h3>
<p>Cosas que <b>ya sucedieron</b> y lamentamos.</p>
<ul>
<li>I’m sorry I didn’t take your advice → <b>I wish I had taken</b> your advice.</li>
<li>I’m sorry I lost your book → <b>I wish I hadn’t lost</b> your book.</li>
<li>You shouldn’t have told her the truth → <b>If only you hadn’t told</b> her the truth.</li>
<li>I regret telling him → I wish I <b>hadn’t told</b> him. (Con <i>regret</i> + -ing el verbo es afirmativo y en el deseo pasa a negativo.)</li>
</ul>
<h3>3) Wish + would → cosas que nos molestan</h3>
<p>Cosas que <b>nos molestan enormemente</b> y queremos que cambien (la persona o cosa es distinta del que habla).</p>
<ul>
<li>Stop biting your nails! You’re getting on my nerves → <b>I wish you would stop</b> biting your nails.</li>
<li>It’s been raining for three days. I can’t take it anymore → <b>I wish it would stop</b> raining.</li>
</ul>
<div class="box tip"><p>⚠️ <b>No se puede usar WOULD con I</b> (el mismo sujeto): <s>I wish I would be less shy</s> → <b>I wish I were less shy</b> (también se acepta <i>was</i>).</p></div>
<div class="box plus"><p><b>If only</b> es lo mismo que <b>I wish</b> pero más intenso (<i>¡ojalá!</i>): <i>If only I had more money.</i> Después de <i>wish</i>, con <i>be</i> se usa <b>were</b> para todas las personas (<i>I wish he were here</i>). Tabla rápida: no puedo → <i>I wish I could</i> · no tengo → <i>I wish I had</i> · no hice → <i>I wish I had done</i> · hice → <i>I wish I hadn’t done</i>.</p></div>
`,
clase:[
["I would really like to be able to play the piano.","I wish",["I could play the piano"]],
["I am sorry I can't help you.","I wish",["I could help you"]],
["I love German. Unfortunately, I can't speak it fluently.","I wish",["I could speak German fluently","I could speak it fluently"]],
["I'm sorry I didn't take your advice","I wish",["I had taken your advice"]],
["You shouldn't have told her the truth.","If only",["you hadn't told her the truth"]],
["I'm sorry I lost your book.","I wish",["I hadn't lost your book"]],
["Stop biting your nails!!! You are getting on my nerves.","I wish",["you would stop biting your nails"]],
["It's been raining for three days straight. I can't take it anymore.","I wish",["it would stop raining","it would stop"]]
],
extra:[
["I don't have a dog.","I wish",["I had a dog"]],
["He is sorry he didn't study more.","He wishes",["he had studied more"]],
["I can't swim.","I wish",["I could swim"]],
["It's a pity it is raining today.","I wish",["it were not raining today","it was not raining today","it were not raining","it was not raining"]],
["She regrets having sold her bike.","She wishes",["she had not sold her bike"]],
["My neighbours always play loud music at night. It annoys me a lot.","I wish",["my neighbours would stop playing loud music at night","my neighbours would not play loud music at night","my neighbours would stop playing loud music"]],
["We are sorry we didn't visit them.","If only",["we had visited them"]],
["I'm so tired because I went to bed late.","I wish",["I had not gone to bed late"]],
["It's a pity you can't come to my party.","I wish",["you could come to my party"]],
["I'm not very tall.","I wish",["I were taller","I was taller","I were very tall","I was very tall"]]
],
evau:[
["Julio 2026","It's a pity we don't travel more.","I wish",["we travelled more","we traveled more","we could travel more"]],
["Junio 2026","It's a pity we don't go out more.","I wish",["we went out more","we could go out more"]],
["Julio 2025","I'd like to have a lot of money but that's just a dream.","If only",["I had a lot of money"]],
["Junio 2024","I am sorry I didn't apologize to her.","If only",["I had apologized to her","I had apologised to her"]],
["Julio 2024 / Junio 2019","I am sorry I can't play the guitar.","I wish",["I could play the guitar"]],
["Julio 2023","It's a pity I can't go to the concert tonight.","I wish",["I could go to the concert tonight"]],
["Junio 2022","It's a pity I don't go home more often.","I wish",["I went home more often","I could go home more often"]],
["Junio 2022","I regret not telling the truth.","I wish",["I had told the truth"]],
["Julio 2022","It's a pity you didn't come with us to London.","I wish",["you had come with us to London"]],
["Junio 2021","It's a pity I don't see you more often.","If only",["I saw you more often","I could see you more often"]],
["Julio 2019","I regret I don't have a good computer.","I wish",["I had a good computer"]],
["Julio 2019","It's a pity Susan didn't see it.","I wish",["Susan had seen it"]],
["Junio 2018","I regret telling him the story.","I wish",["I had not told him the story"]],
["Julio 2018","I regret I didn't buy the house.","I wish",["I had bought the house"]],
["Julio 2018","I'm sorry I told her.","I wish",["I had not told her"]],
["Junio 2017","I'm sorry I haven't got more friends","I wish",["I had more friends"]],
["Junio 2017","What a pity we missed the documentary last night.","We wish",["we had not missed the documentary last night"]],
["Sept 2017","I regret I didn't do my homework.","I wish",["I had done my homework"]],
["Sept 2017","I'm sorry I told her.","I wish",["I had not told her"]],
["Sept 2016","I'm sorry I don't remember your name.","I wish",["I remembered your name"]],
["Sept 2012","It's a pity I didn't see her yesterday.","I wish",["I had seen her yesterday"]],
["Sept 2008","I regretted having hit the dog on the head.","I wish",["I had not hit the dog on the head"],"Aunque «regretted» está en pasado, el examen da el comienzo I wish: I wish I hadn’t hit the dog on the head."],
["Junio 2007","I'm sorry I didn't tell him everything.","I wish",["I had told him everything"]],
["Junio 2003","I would like to have more free time these days.","I wish",["I had more free time these days","I had more free time"]],
["Sept 2003","Mary was sorry she ate so many cakes.","Mary wished",["she had not eaten so many cakes"]],
["Sept 2002","I'm sorry I can't speak French perfectly.","I wish",["I could speak French perfectly"]],
["Sept 2001","What a pity I didn't have time to see you last week.","I wish",["I had had time to see you last week"]],
["Junio 2000","I'm sorry I haven't got a car.","I wish",["I had a car"]]
]});
