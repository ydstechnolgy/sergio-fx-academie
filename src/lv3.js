const PAT={
 top:[[48,80,20,55]],maruB:[[15,85,15,85]],maruR:[[85,85,15,15]],doji:[[50,82,18,50.6]],
 hammer:[[70,75,50,52],[52,55,35,38],[30,34,4,33]],hang:[[30,50,28,48],[48,66,46,64],[78,80,48,75]],
 invH:[[70,72,50,52],[52,54,34,36],[26,62,24,29]],star:[[30,50,28,48],[48,66,46,64],[66,96,64,63]],
 engB:[[60,62,40,44],[42,72,40,68]],engR:[[40,62,38,58],[60,62,30,34]],twB:[[60,62,20,28],[30,58,20,55]],twT:[[40,80,38,72],[72,80,40,45]],
 mstar:[[82,84,40,45],[40,42,30,38],[42,78,40,75]],estar:[[20,62,18,58],[62,72,60,64],[58,60,20,25]],
 soldiers:[[20,40,18,38],[36,60,34,58],[56,80,54,78]],crows:[[80,82,60,62],[64,66,40,42],[44,46,20,22]],
 inUp:[[75,77,30,35],[38,58,36,55],[55,82,53,80]],inDown:[[25,70,23,65],[62,64,42,45],[45,47,18,20]]};
const LV3={n:3,icon:"candle",t:{fr:"L'analyse technique",en:"Technical analysis"},d:{fr:"Lire un graphique comme un pro : supports et résistances, lignes de tendance, chandeliers, Fibonacci, moyennes mobiles et indicateurs.",en:"Read a chart like a pro: support and resistance, trend lines, candlesticks, Fibonacci, moving averages and indicators."},
chapters:[
/* ---------- CH 1 ---------- */
{t:{fr:"Introduction à l'analyse technique",en:"Introduction to technical analysis"},d:{fr:"Pourquoi les traders lisent les graphiques, et la méthode en 6 étapes.",en:"Why traders read charts, and the 6-step method."},
lessons:[
{t:{fr:"C'est quoi l'analyse technique ?",en:"What is technical analysis?"},s:{fr:"Étudier le prix passé pour repérer les possibilités futures.",en:"Study past price to spot future possibilities."},
b:{fr:`<p>Ouvre n'importe quelle plateforme de trading : au centre, il y a un <b>graphique de prix</b>. Apprendre à le lire, c'est ça l'<b>analyse technique</b>.</p>
<h2>Les idées de base</h2>
<ul><li><b>Le prix intègre déjà l'information.</b> Les news, les chiffres économiques, les décisions des banques… tout finit par se voir dans le prix. Le trader technique se concentre donc sur le prix lui-même.</li><li><b>L'histoire a tendance à se répéter.</b> Les humains réagissent souvent de la même façon face aux mêmes situations. Les mêmes formes réapparaissent sur les graphiques.</li><li><b>Les niveaux importants restent en mémoire.</b> Si un prix a bloqué le marché dans le passé, beaucoup de traders le surveillent et réagissent quand le prix y revient.</li></ul>
${chRange('fr')}
<p>Sur ce graphique, l'Or a buté plusieurs fois vers 3 860 et a rebondi plusieurs fois vers 3 742. Ces niveaux ne garantissent rien, mais ils indiquent où le prix <b>pourrait</b> réagir à nouveau.</p>
<div class="box tip"><b class="t">À retenir</b>L'analyse technique ne <b>prédit</b> pas l'avenir. Elle montre des <b>possibilités</b> et t'aide à trouver des trades où les chances sont de ton côté, avec un risque clair.</div>
<h2>Pourquoi des graphiques ?</h2>
<p>Parce que c'est le moyen le plus simple de <b>visualiser l'historique des prix</b>. Les traders qui vivent sur leurs graphiques sont appelés des <b>chartistes</b>. Pour beaucoup d'entre eux, le comportement passé du prix est le meilleur indice de son comportement futur.</p>`,
en:`<p>Open almost any trading platform and you'll find a <b>price chart</b> front and centre. Learning to read it is what <b>technical analysis</b> is all about.</p>
<h2>The core ideas</h2>
<ul><li><b>Price already reflects information.</b> News, economic data, bank decisions… everything ends up in the price. So the technical trader focuses on price itself.</li><li><b>History tends to repeat itself.</b> People often react the same way to the same situations. The same shapes keep showing up on charts.</li><li><b>Key levels stay in memory.</b> If a price held the market back in the past, many traders watch it and react when price returns there.</li></ul>
${chRange('en')}
<p>On this chart, Gold stalled several times near 3,860 and bounced several times near 3,742. These levels guarantee nothing, but they show where price <b>could</b> react again.</p>
<div class="box tip"><b class="t">Remember</b>Technical analysis doesn't <b>predict</b> the future. It shows <b>possibilities</b> and helps you find trades where the odds lean your way, with a clear risk.</div>
<h2>Why charts?</h2>
<p>Because they're the easiest way to <b>visualise price history</b>. Traders who live on their charts are called <b>chartists</b>. For many of them, past price behaviour is the best clue to future price behaviour.</p>`}},
{t:{fr:"Les 6 étapes d'une analyse",en:"The 6 steps of an analysis"},s:{fr:"La routine de base, appliquée sur un vrai exemple.",en:"The basic routine, applied to a real example."},
b:{fr:`<p>Chaque trader a sa routine, mais presque toutes suivent les mêmes étapes. Chacune sera détaillée dans les chapitres suivants.</p>
<ol class="steps"><li><b>Ouvre un graphique et choisis une unité de temps.</b> En bougies japonaises. Regarde d'abord une grande unité (H4, D1) avant de zoomer.</li><li><b>Trouve la tendance.</b> Le prix fait-il des sommets et des creux de plus en plus hauts (hausse), de plus en plus bas (baisse), ou tourne-t-il en rond ? Une ligne de tendance aide à le voir.</li><li><b>Marque les niveaux clés.</b> Trace les supports et résistances là où le prix s'est retourné.</li><li><b>Attends un signal.</b> Une figure de bougie (ou une figure chartiste) sur un de tes niveaux indique que le prix pourrait rebondir ou casser.</li><li><b>Vérifie avec un indicateur.</b> Une moyenne mobile par exemple peut confirmer ce que dit le prix.</li><li><b>Planifie le trade, y compris l'endroit où tu as tort.</b> Décide ton entrée, ton Stop Loss et ton objectif <b>avant</b> de cliquer.</li></ol>
<h2>Exemple : les 6 étapes sur l'Or</h2>
${chSteps('fr')}
<ol class="steps"><li><b>Graphique</b> : XAUUSD en bougies H1.</li><li><b>Tendance</b> : sommets de plus en plus hauts (3 812 puis 3 868) et creux de plus en plus hauts (3 770 puis 3 800). La ligne violette relie les creux.</li><li><b>Niveau clé</b> : le prix avait buté sur 3 820 avant de le casser. Une ancienne résistance cassée devient souvent un support.</li><li><b>Signal</b> : le prix revient sur 3 820, là où le support et la ligne de tendance se rejoignent. Une bougie rouge est suivie d'une grande bougie verte qui l'englobe : un <b>avalement haussier</b>.</li><li><b>Indicateur</b> : la moyenne mobile 20 monte, et la bougie de signal clôture au-dessus, à 3 836.</li><li><b>Plan</b> : entrée 3 836, Stop Loss 3 814 (sous le plus bas de la figure et sous le support), objectif 3 868 (le dernier sommet).</li></ol>
<div class="box ex"><b class="t">Le calcul</b>Risque : 3 836 − 3 814 = 22 $ (220 pips). Gain visé : 3 868 − 3 836 = 32 $ (320 pips). Ratio ≈ <b>1:1,5</b>. Comme le SL et le TP sont fixés avant, tu sais exactement ce que tu risques.</div>
<div class="box warn"><b class="t">Important</b>Le graphique s'arrête volontairement au signal : ce trade pourrait encore échouer. C'est pour ça que le Stop Loss passe en premier. Aucune méthode ne garantit de gains : méfie-toi de ceux qui prétendent le contraire.</div>`,
en:`<p>Every trader has their own routine, but almost all follow the same steps. Each one is covered in the next chapters.</p>
<ol class="steps"><li><b>Open a chart and pick a timeframe.</b> Use candlesticks. Check a higher timeframe (H4, D1) before zooming in.</li><li><b>Find the trend.</b> Is price making higher highs and lows (up), lower highs and lows (down), or moving sideways? A trend line helps you see it.</li><li><b>Mark key levels.</b> Draw support and resistance where price turned before.</li><li><b>Wait for a signal.</b> A candlestick (or chart) pattern at one of your levels hints price may bounce or break.</li><li><b>Check an indicator.</b> A moving average, for example, can back up what price is saying.</li><li><b>Plan the trade, including where you're wrong.</b> Decide your entry, Stop Loss and target <b>before</b> you click.</li></ol>
<h2>Example: the 6 steps on Gold</h2>
${chSteps('en')}
<ol class="steps"><li><b>Chart</b>: XAUUSD, H1 candles.</li><li><b>Trend</b>: higher highs (3,812 then 3,868) and higher lows (3,770 then 3,800). The purple line connects the lows.</li><li><b>Key level</b>: price stalled at 3,820 before breaking it. A broken resistance often becomes support.</li><li><b>Signal</b>: price pulls back to 3,820, where support and the trend line meet. A red candle is followed by a bigger green candle that covers it: a <b>bullish engulfing</b>.</li><li><b>Indicator</b>: the 20-period moving average is rising, and the signal candle closes above it at 3,836.</li><li><b>Plan</b>: entry 3,836, Stop Loss 3,814 (below the pattern's low and the support), target 3,868 (the last high).</li></ol>
<div class="box ex"><b class="t">The maths</b>Risk: 3,836 − 3,814 = $22 (220 pips). Target: 3,868 − 3,836 = $32 (320 pips). Ratio ≈ <b>1:1.5</b>. Because SL and TP are set beforehand, you know exactly what you're risking.</div>
<div class="box warn"><b class="t">Important</b>The chart deliberately stops at the signal: this trade could still fail. That's why the Stop Loss comes first. No method guarantees profits: be wary of anyone who says otherwise.</div>`}}
]},
/* ---------- CH 2 ---------- */
{t:{fr:"Supports, résistances et tendances",en:"Support, resistance and trends"},d:{fr:"Les niveaux clés, les lignes de tendance et les canaux.",en:"Key levels, trend lines and channels."},
lessons:[
{t:{fr:"C'est quoi un support et une résistance ?",en:"What is support and resistance?"},s:{fr:"Les zones où le prix réagit.",en:"The zones where price reacts."},
b:{fr:`<p>Les supports et résistances sont la base de l'analyse technique. Ce sont des <b>zones</b> où le prix a déjà réagi et risque de réagir à nouveau.</p>
${chRange('fr')}
<h2>Le support</h2><p>Une zone <b>sous</b> le prix où les acheteurs ont été plus forts que les vendeurs : le prix a rebondi vers le haut. C'est un plancher.</p>
<h2>La résistance</h2><p>Une zone <b>au-dessus</b> du prix où les vendeurs ont repris le contrôle : le prix a été repoussé vers le bas. C'est un plafond.</p>
<h2>Comment les tracer</h2>
<ul><li>Repère les endroits où le prix s'est retourné <b>au moins deux fois</b>.</li><li>Trace une <b>zone</b> plutôt qu'une ligne parfaite : le prix dépasse souvent un peu (les mèches).</li><li>Commence sur une grande unité de temps (H4, D1), puis descends.</li><li>Plus un niveau a été testé, et plus l'unité de temps est grande, plus il est important.</li></ul>
<div class="box tip"><b class="t">Dans nos lives</b>Les « SELL ZONE » et « BUY ZONE » que tu vois sur nos graphiques sont des zones de résistance et de support.</div>`,
en:`<p>Support and resistance are the foundation of technical analysis. They are <b>zones</b> where price reacted before and may react again.</p>
${chRange('en')}
<h2>Support</h2><p>A zone <b>below</b> price where buyers beat sellers: price bounced up. It's a floor.</p>
<h2>Resistance</h2><p>A zone <b>above</b> price where sellers took control: price was pushed back down. It's a ceiling.</p>
<h2>How to draw them</h2>
<ul><li>Find places where price turned <b>at least twice</b>.</li><li>Draw a <b>zone</b> rather than a perfect line: price often overshoots a little (wicks).</li><li>Start on a higher timeframe (H4, D1), then zoom in.</li><li>The more a level has been tested, and the higher the timeframe, the more it matters.</li></ul>
<div class="box tip"><b class="t">In our lives</b>The "SELL ZONE" and "BUY ZONE" on our charts are resistance and support zones.</div>`}},
{t:{fr:"Tracer et utiliser les lignes de tendance",en:"Drawing and using trend lines"},s:{fr:"L'outil le plus simple pour voir la tendance.",en:"The simplest tool to see the trend."},
b:{fr:`<p>Une <b>ligne de tendance</b> relie au moins deux creux (en tendance haussière) ou deux sommets (en tendance baissière). Elle montre la direction du marché et sert de support ou de résistance « en pente ».</p>
${chTrend('fr')}
<h2>Les règles</h2>
<ul><li><b>Tendance haussière</b> : relie les <b>creux</b> de plus en plus hauts, la ligne est sous le prix.</li><li><b>Tendance baissière</b> : relie les <b>sommets</b> de plus en plus bas, la ligne est au-dessus du prix.</li><li>Il faut <b>2 points</b> pour tracer la ligne, et un <b>3ᵉ contact</b> pour la confirmer.</li><li>Ne force pas : si tu dois couper beaucoup de bougies pour faire passer ta ligne, elle n'est pas valable.</li><li>Une ligne trop raide (presque verticale) casse souvent vite.</li></ul>
<h2>Comment la trader</h2>
<ul><li><b>Le rebond</b> : en tendance haussière, chercher un BUY quand le prix revient toucher la ligne et montre un signal.</li><li><b>La cassure</b> : quand le prix clôture nettement de l'autre côté, la tendance s'affaiblit ou change. La ligne cassée peut devenir une résistance.</li></ul>
<p>Sur l'exemple ci-dessus, la moyenne mobile (orange) monte avec la ligne : les deux outils se confirment.</p>`,
en:`<p>A <b>trend line</b> connects at least two lows (in an uptrend) or two highs (in a downtrend). It shows market direction and acts as "sloped" support or resistance.</p>
${chTrend('en')}
<h2>The rules</h2>
<ul><li><b>Uptrend</b>: connect the <b>higher lows</b>; the line sits under price.</li><li><b>Downtrend</b>: connect the <b>lower highs</b>; the line sits above price.</li><li>You need <b>2 points</b> to draw the line, and a <b>3rd touch</b> to confirm it.</li><li>Don't force it: if you have to cut through many candles to make it fit, it's not valid.</li><li>A very steep (almost vertical) line often breaks quickly.</li></ul>
<h2>How to trade it</h2>
<ul><li><b>The bounce</b>: in an uptrend, look for a BUY when price returns to the line and shows a signal.</li><li><b>The break</b>: when price closes clearly on the other side, the trend weakens or changes. The broken line can turn into resistance.</li></ul>
<p>In the example above, the moving average (orange) rises with the line: the two tools confirm each other.</p>`}},
{t:{fr:"Les canaux de tendance",en:"Trend channels"},s:{fr:"Deux lignes parallèles qui encadrent le prix.",en:"Two parallel lines that contain price."},
b:{fr:`<p>Un <b>canal</b> se forme quand on trace une ligne <b>parallèle</b> à la ligne de tendance, de l'autre côté du prix. Le prix évolue alors entre deux bornes.</p>
${chChannel('fr')}
<h2>Les trois types</h2>
<ul><li><b>Canal haussier</b> : les deux lignes montent. On privilégie les achats sur la ligne du bas.</li><li><b>Canal baissier</b> : les deux lignes descendent. On privilégie les ventes sur la ligne du haut.</li><li><b>Canal horizontal (range)</b> : le prix fait des allers-retours entre un support et une résistance plats.</li></ul>
<h2>Comment l'utiliser</h2>
<ul><li>Trade <b>dans le sens du canal</b> : en canal haussier, acheter près de la ligne du bas est plus sûr que vendre près de celle du haut.</li><li>La ligne d'en face sert d'<b>objectif</b> (Take Profit).</li><li><b>Sortie du canal</b> : une cassure nette peut lancer un mouvement fort. Une cassure par le bas d'un canal haussier est un signal d'alerte pour les acheteurs.</li></ul>`,
en:`<p>A <b>channel</b> forms when you draw a line <b>parallel</b> to the trend line, on the other side of price. Price then moves between two boundaries.</p>
${chChannel('en')}
<h2>The three types</h2>
<ul><li><b>Rising channel</b>: both lines go up. Favour buys at the lower line.</li><li><b>Falling channel</b>: both lines go down. Favour sells at the upper line.</li><li><b>Sideways channel (range)</b>: price swings between flat support and resistance.</li></ul>
<h2>How to use it</h2>
<ul><li>Trade <b>with the channel</b>: in a rising channel, buying near the lower line is safer than selling near the upper one.</li><li>The opposite line serves as a <b>target</b> (Take Profit).</li><li><b>Channel breakout</b>: a clean break can launch a strong move. A break below a rising channel is a warning sign for buyers.</li></ul>`}},
{t:{fr:"Trader les supports et résistances",en:"Trading support and resistance"},s:{fr:"Le rebond, la cassure, et où mettre son stop.",en:"The bounce, the break, and where to put your stop."},
b:{fr:`<p>Le prix arrive sur un support. Et maintenant ? Il y a deux façons de trader un niveau.</p>
<h2>1. Le rebond</h2>
<p>Tu paries que le niveau va <b>tenir</b>.</p>
<ul><li>Attends que le prix touche la zone <b>et</b> montre un signal (bougie de retournement).</li><li>Entrée après le signal. Stop Loss <b>de l'autre côté de la zone</b>, avec une petite marge.</li><li>Objectif : le niveau opposé (prochaine résistance).</li></ul>
<h2>2. La cassure</h2>
<p>Tu paries que le niveau va <b>céder</b>.</p>
<ul><li>Attends une <b>clôture</b> nette au-delà du niveau, pas juste une mèche.</li><li>Méthode prudente : attendre le <b>retour</b> du prix sur le niveau cassé (le « retest »), puis entrer.</li></ul>
<h2>L'inversion des rôles</h2>
${chFlip('fr')}
<p>Une résistance cassée devient souvent un <b>support</b>, et un support cassé une <b>résistance</b>. Sur l'exemple, l'Or a buté sur 3 764, l'a cassé, puis est revenu dessus : l'ancienne résistance sert maintenant de support, et le prix reste au-dessus de la moyenne mobile.</p>
<div class="box warn"><b class="t">Les fausses cassures</b>Le prix passe parfois au-delà d'un niveau… puis revient aussitôt. C'est pour ça qu'on attend une clôture, et qu'on garde toujours un Stop Loss.</div>`,
en:`<p>Price just hit support. Now what? There are two ways to trade a level.</p>
<h2>1. The bounce</h2>
<p>You bet the level will <b>hold</b>.</p>
<ul><li>Wait for price to touch the zone <b>and</b> show a signal (reversal candle).</li><li>Enter after the signal. Stop Loss <b>on the other side of the zone</b>, with a small buffer.</li><li>Target: the opposite level (next resistance).</li></ul>
<h2>2. The break</h2>
<p>You bet the level will <b>give way</b>.</p>
<ul><li>Wait for a clear <b>close</b> beyond the level, not just a wick.</li><li>Careful approach: wait for price to <b>return</b> to the broken level (the "retest"), then enter.</li></ul>
<h2>Role reversal</h2>
${chFlip('en')}
<p>A broken resistance often becomes <b>support</b>, and a broken support becomes <b>resistance</b>. In the example, Gold stalled at 3,764, broke it, then came back to it: the old resistance now acts as support, and price stays above the moving average.</p>
<div class="box warn"><b class="t">False breakouts</b>Price sometimes pokes beyond a level… then snaps right back. That's why we wait for a close, and always keep a Stop Loss.</div>`}}
]},
/* ---------- CH 3 ---------- */
{t:{fr:"Les chandeliers japonais",en:"Japanese candlesticks"},d:{fr:"Lire les bougies et les figures qui annoncent un mouvement.",en:"Read candles and the patterns that hint at a move."},
lessons:[
{t:{fr:"Le chandelier et son anatomie",en:"The candlestick and its anatomy"},s:{fr:"Corps, mèches, et ce qu'ils racontent.",en:"Body, wicks, and what they tell you."},
b:{fr:`<p>Les chandeliers japonais viennent des marchands de riz japonais du XVIIIᵉ siècle, et ont été popularisés en Occident par Steve Nison. Ils montrent en un coup d'œil la bataille entre acheteurs et vendeurs.</p>
${candleSVG('fr')}
<h2>Le corps</h2>
<ul><li><b>Grand corps</b> : forte pression d'un camp. Vert = acheteurs dominants, rouge = vendeurs dominants.</li><li><b>Petit corps</b> : peu de mouvement entre l'ouverture et la clôture. Hésitation.</li></ul>
<h2>Les mèches (ou ombres)</h2>
<ul><li><b>Longue mèche haute</b> : le prix est monté mais les vendeurs l'ont repoussé. Rejet du haut.</li><li><b>Longue mèche basse</b> : le prix est descendu mais les acheteurs l'ont remonté. Rejet du bas.</li><li><b>Pas de mèche</b> : un camp a contrôlé toute la période.</li></ul>
<div class="box tip"><b class="t">Astuce</b>Attends toujours la <b>clôture</b> de la bougie avant de l'interpréter : tant qu'elle n'est pas fermée, elle peut complètement changer de forme.</div>`,
en:`<p>Japanese candlesticks come from 18th-century Japanese rice traders and were popularised in the West by Steve Nison. They show at a glance the battle between buyers and sellers.</p>
${candleSVG('en')}
<h2>The body</h2>
<ul><li><b>Long body</b>: strong pressure from one side. Green = buyers in control, red = sellers in control.</li><li><b>Short body</b>: little movement between open and close. Indecision.</li></ul>
<h2>The wicks (or shadows)</h2>
<ul><li><b>Long upper wick</b>: price went up but sellers pushed it back. Rejection of the highs.</li><li><b>Long lower wick</b>: price dropped but buyers lifted it back. Rejection of the lows.</li><li><b>No wick</b>: one side controlled the whole period.</li></ul>
<div class="box tip"><b class="t">Tip</b>Always wait for the candle to <b>close</b> before reading it: until it closes, it can change shape completely.</div>`}},
{t:{fr:"Les bougies de base",en:"Basic candlesticks"},s:{fr:"Toupie, marubozu et doji.",en:"Spinning top, marubozu and doji."},
b:{fr:`${pats('fr',[['Toupie',['Petit corps, mèches des deux côtés : indécision','Small body, wicks both sides: indecision'],PAT.top],['Marubozu vert',['Pas de mèche : acheteurs aux commandes','No wicks: buyers in charge'],PAT.maruB],['Marubozu rouge',['Pas de mèche : vendeurs aux commandes','No wicks: sellers in charge'],PAT.maruR],['Doji',['Ouverture = clôture : équilibre parfait','Open = close: perfect balance'],PAT.doji]])}
<h2>La toupie (spinning top)</h2><p>Petit corps au milieu, mèches haute et basse. Ni les acheteurs ni les vendeurs n'ont gagné. Après une forte tendance, elle peut annoncer un essoufflement.</p>
<h2>Le marubozu</h2><p>Un grand corps <b>sans mèche</b>. Le vert ouvre au plus bas et clôture au plus haut : les acheteurs ont dominé du début à la fin. Le rouge, l'inverse. Signe de force et souvent de continuation.</p>
<h2>Le doji</h2><p>Ouverture et clôture quasiment au même prix : une croix. Indécision totale. Un doji après une longue hausse ou baisse sur une zone clé peut annoncer un retournement… mais il faut une confirmation par la bougie suivante.</p>`,
en:`${pats('en',[['Spinning top',['Petit corps, mèches des deux côtés : indécision','Small body, wicks both sides: indecision'],PAT.top],['Green marubozu',['Pas de mèche : acheteurs aux commandes','No wicks: buyers in charge'],PAT.maruB],['Red marubozu',['Pas de mèche : vendeurs aux commandes','No wicks: sellers in charge'],PAT.maruR],['Doji',['Ouverture = clôture : équilibre parfait','Open = close: perfect balance'],PAT.doji]])}
<h2>Spinning top</h2><p>Small body in the middle, upper and lower wicks. Neither buyers nor sellers won. After a strong trend it can signal fading momentum.</p>
<h2>Marubozu</h2><p>A long body with <b>no wicks</b>. The green one opens at the low and closes at the high: buyers dominated from start to finish. The red one is the opposite. A sign of strength and often continuation.</p>
<h2>Doji</h2><p>Open and close at almost the same price: a cross. Total indecision. A doji after a long rise or fall at a key zone may signal a reversal… but it needs confirmation from the next candle.</p>`}},
{t:{fr:"Les figures à une bougie",en:"Single candlestick patterns"},s:{fr:"Marteau, pendu, marteau inversé, étoile filante.",en:"Hammer, hanging man, inverted hammer, shooting star."},
b:{fr:`${pats('fr',[['Marteau',['Après une baisse : rebond possible','After a decline: possible bounce'],PAT.hammer],['Pendu',['Après une hausse : baisse possible','After a rise: possible drop'],PAT.hang],['Marteau inversé',['Après une baisse : rebond possible','After a decline: possible bounce'],PAT.invH],['Étoile filante',['Après une hausse : baisse possible','After a rise: possible drop'],PAT.star]])}
<p>Ces quatre bougies ont la même structure : un <b>petit corps</b> et une <b>longue mèche</b> (au moins 2 fois la taille du corps). Ce qui change leur sens, c'est <b>où</b> elles apparaissent.</p>
<table><tr><th>Figure</th><th>Forme</th><th>Contexte</th><th>Signal</th></tr>
<tr><td><b>Marteau</b></td><td>Longue mèche basse</td><td>Après une baisse</td><td>🟢 Haussier</td></tr>
<tr><td><b>Pendu</b></td><td>Longue mèche basse</td><td>Après une hausse</td><td>🔴 Baissier</td></tr>
<tr><td><b>Marteau inversé</b></td><td>Longue mèche haute</td><td>Après une baisse</td><td>🟢 Haussier</td></tr>
<tr><td><b>Étoile filante</b></td><td>Longue mèche haute</td><td>Après une hausse</td><td>🔴 Baissier</td></tr></table>
<div class="box tip"><b class="t">Sur l'Or</b>Une étoile filante sur une SELL ZONE, ou un marteau sur une BUY ZONE, sont parmi les signaux les plus utilisés en live.</div>`,
en:`${pats('en',[['Hammer',['Après une baisse : rebond possible','After a decline: possible bounce'],PAT.hammer],['Hanging man',['Après une hausse : baisse possible','After a rise: possible drop'],PAT.hang],['Inverted hammer',['Après une baisse : rebond possible','After a decline: possible bounce'],PAT.invH],['Shooting star',['Après une hausse : baisse possible','After a rise: possible drop'],PAT.star]])}
<p>These four candles share the same structure: a <b>small body</b> and a <b>long wick</b> (at least twice the body). What changes their meaning is <b>where</b> they appear.</p>
<table><tr><th>Pattern</th><th>Shape</th><th>Context</th><th>Signal</th></tr>
<tr><td><b>Hammer</b></td><td>Long lower wick</td><td>After a decline</td><td>🟢 Bullish</td></tr>
<tr><td><b>Hanging man</b></td><td>Long lower wick</td><td>After a rise</td><td>🔴 Bearish</td></tr>
<tr><td><b>Inverted hammer</b></td><td>Long upper wick</td><td>After a decline</td><td>🟢 Bullish</td></tr>
<tr><td><b>Shooting star</b></td><td>Long upper wick</td><td>After a rise</td><td>🔴 Bearish</td></tr></table>
<div class="box tip"><b class="t">On Gold</b>A shooting star at a SELL ZONE, or a hammer at a BUY ZONE, are among the signals we use most in our lives.</div>`}},
{t:{fr:"Les figures à deux bougies",en:"Dual candlestick patterns"},s:{fr:"Avalements et pinces.",en:"Engulfing and tweezers."},
b:{fr:`${pats('fr',[['Avalement haussier',['La verte englobe la rouge','Green engulfs red'],PAT.engB],['Avalement baissier',['La rouge englobe la verte','Red engulfs green'],PAT.engR],['Pince basse',['Deux plus bas identiques','Two matching lows'],PAT.twB],['Pince haute',['Deux plus hauts identiques','Two matching highs'],PAT.twT]])}
<h2>L'avalement (engulfing)</h2>
<ul><li><b>Haussier</b> : après une baisse, une grande bougie verte dont le corps recouvre entièrement le corps rouge précédent. Les acheteurs ont repris le contrôle.</li><li><b>Baissier</b> : après une hausse, une grande bougie rouge recouvre la verte précédente. Les vendeurs prennent la main.</li></ul>
<h2>Les pinces (tweezers)</h2>
<ul><li><b>Pince basse</b> : deux bougies avec <b>le même plus bas</b>, la première rouge, la seconde verte. Le prix a été rejeté deux fois au même endroit : signal haussier.</li><li><b>Pince haute</b> : deux bougies avec <b>le même plus haut</b>, la première verte, la seconde rouge : signal baissier.</li></ul>
<div class="box tip"><b class="t">Rappel</b>C'est l'avalement haussier sur le support 3 820 qui a donné le signal dans l'exemple des 6 étapes.</div>`,
en:`${pats('en',[['Bullish engulfing',['La verte englobe la rouge','Green engulfs red'],PAT.engB],['Bearish engulfing',['La rouge englobe la verte','Red engulfs green'],PAT.engR],['Tweezer bottom',['Deux plus bas identiques','Two matching lows'],PAT.twB],['Tweezer top',['Deux plus hauts identiques','Two matching highs'],PAT.twT]])}
<h2>Engulfing</h2>
<ul><li><b>Bullish</b>: after a decline, a big green candle whose body fully covers the previous red body. Buyers took back control.</li><li><b>Bearish</b>: after a rise, a big red candle covers the previous green one. Sellers take over.</li></ul>
<h2>Tweezers</h2>
<ul><li><b>Tweezer bottom</b>: two candles with <b>the same low</b>, the first red, the second green. Price was rejected twice at the same spot: bullish signal.</li><li><b>Tweezer top</b>: two candles with <b>the same high</b>, the first green, the second red: bearish signal.</li></ul>
<div class="box tip"><b class="t">Reminder</b>The bullish engulfing at the 3,820 support gave the signal in the 6-step example.</div>`}},
{t:{fr:"Les figures à trois bougies",en:"Triple candlestick patterns"},s:{fr:"Étoiles, soldats, corbeaux et « inside ».",en:"Stars, soldiers, crows and inside patterns."},
b:{fr:`${pats('fr',[['Étoile du matin',['Retournement haussier','Bullish reversal'],PAT.mstar],['Étoile du soir',['Retournement baissier','Bearish reversal'],PAT.estar],['Trois soldats blancs',['Forte poussée haussière','Strong bullish push'],PAT.soldiers],['Trois corbeaux noirs',['Forte poussée baissière','Strong bearish push'],PAT.crows],['Three inside up',['Retournement haussier confirmé','Confirmed bullish reversal'],PAT.inUp],['Three inside down',['Retournement baissier confirmé','Confirmed bearish reversal'],PAT.inDown]])}
<h2>Étoile du matin / étoile du soir</h2>
<p><b>Étoile du matin</b> (après une baisse) : une grande rouge, puis une petite bougie (indécision), puis une grande verte qui remonte au moins jusqu'au milieu de la première. <b>Étoile du soir</b> : l'inverse, après une hausse.</p>
<h2>Trois soldats blancs / trois corbeaux noirs</h2>
<p>Trois grandes bougies de la même couleur, chacune clôturant plus loin que la précédente. Elles montrent un changement de force net, souvent après une phase de baisse (soldats) ou de hausse (corbeaux).</p>
<h2>Three inside up / down</h2>
<p><b>Up</b> : une grande rouge, une verte qui clôture au moins à mi-hauteur de la rouge (à l'intérieur), puis une troisième verte qui clôture au-dessus de la première. <b>Down</b> : l'inverse. La troisième bougie sert de confirmation.</p>`,
en:`${pats('en',[['Morning star',['Retournement haussier','Bullish reversal'],PAT.mstar],['Evening star',['Retournement baissier','Bearish reversal'],PAT.estar],['Three white soldiers',['Forte poussée haussière','Strong bullish push'],PAT.soldiers],['Three black crows',['Forte poussée baissière','Strong bearish push'],PAT.crows],['Three inside up',['Retournement haussier confirmé','Confirmed bullish reversal'],PAT.inUp],['Three inside down',['Retournement baissier confirmé','Confirmed bearish reversal'],PAT.inDown]])}
<h2>Morning star / evening star</h2>
<p><b>Morning star</b> (after a decline): a big red candle, then a small candle (indecision), then a big green candle that climbs at least halfway into the first. <b>Evening star</b>: the opposite, after a rise.</p>
<h2>Three white soldiers / three black crows</h2>
<p>Three long candles of the same colour, each closing further than the previous one. They show a clear shift in strength, often after a decline (soldiers) or a rise (crows).</p>
<h2>Three inside up / down</h2>
<p><b>Up</b>: a big red candle, a green one that closes at least halfway up the red (inside it), then a third green one that closes above the first. <b>Down</b>: the opposite. The third candle is the confirmation.</p>`}},
{t:{fr:"Mémo des figures de chandeliers",en:"Candlestick patterns cheat sheet"},s:{fr:"Toutes les figures sur une seule page.",en:"Every pattern on one page."},
b:{fr:`<table><tr><th>Figure</th><th>Bougies</th><th>Contexte</th><th>Signal</th></tr>
<tr><td>Doji</td><td>1</td><td>Sur une zone clé</td><td>⚪ Indécision</td></tr><tr><td>Toupie</td><td>1</td><td>Fin de tendance</td><td>⚪ Indécision</td></tr>
<tr><td>Marubozu vert</td><td>1</td><td>Partout</td><td>🟢 Force acheteuse</td></tr><tr><td>Marubozu rouge</td><td>1</td><td>Partout</td><td>🔴 Force vendeuse</td></tr>
<tr><td>Marteau</td><td>1</td><td>Après une baisse</td><td>🟢 Retournement</td></tr><tr><td>Marteau inversé</td><td>1</td><td>Après une baisse</td><td>🟢 Retournement</td></tr>
<tr><td>Pendu</td><td>1</td><td>Après une hausse</td><td>🔴 Retournement</td></tr><tr><td>Étoile filante</td><td>1</td><td>Après une hausse</td><td>🔴 Retournement</td></tr>
<tr><td>Avalement haussier</td><td>2</td><td>Après une baisse</td><td>🟢 Retournement</td></tr><tr><td>Avalement baissier</td><td>2</td><td>Après une hausse</td><td>🔴 Retournement</td></tr>
<tr><td>Pince basse</td><td>2</td><td>Après une baisse</td><td>🟢 Retournement</td></tr><tr><td>Pince haute</td><td>2</td><td>Après une hausse</td><td>🔴 Retournement</td></tr>
<tr><td>Étoile du matin</td><td>3</td><td>Après une baisse</td><td>🟢 Retournement</td></tr><tr><td>Étoile du soir</td><td>3</td><td>Après une hausse</td><td>🔴 Retournement</td></tr>
<tr><td>Trois soldats blancs</td><td>3</td><td>Après une baisse / range</td><td>🟢 Force acheteuse</td></tr><tr><td>Trois corbeaux noirs</td><td>3</td><td>Après une hausse / range</td><td>🔴 Force vendeuse</td></tr>
<tr><td>Three inside up</td><td>3</td><td>Après une baisse</td><td>🟢 Retournement confirmé</td></tr><tr><td>Three inside down</td><td>3</td><td>Après une hausse</td><td>🔴 Retournement confirmé</td></tr></table>
<div class="box tip"><b class="t">Astuce</b>Fais une capture d'écran de ce tableau et garde-la dans ton téléphone pendant les lives.</div>`,
en:`<table><tr><th>Pattern</th><th>Candles</th><th>Context</th><th>Signal</th></tr>
<tr><td>Doji</td><td>1</td><td>At a key zone</td><td>⚪ Indecision</td></tr><tr><td>Spinning top</td><td>1</td><td>End of trend</td><td>⚪ Indecision</td></tr>
<tr><td>Green marubozu</td><td>1</td><td>Anywhere</td><td>🟢 Buying strength</td></tr><tr><td>Red marubozu</td><td>1</td><td>Anywhere</td><td>🔴 Selling strength</td></tr>
<tr><td>Hammer</td><td>1</td><td>After a decline</td><td>🟢 Reversal</td></tr><tr><td>Inverted hammer</td><td>1</td><td>After a decline</td><td>🟢 Reversal</td></tr>
<tr><td>Hanging man</td><td>1</td><td>After a rise</td><td>🔴 Reversal</td></tr><tr><td>Shooting star</td><td>1</td><td>After a rise</td><td>🔴 Reversal</td></tr>
<tr><td>Bullish engulfing</td><td>2</td><td>After a decline</td><td>🟢 Reversal</td></tr><tr><td>Bearish engulfing</td><td>2</td><td>After a rise</td><td>🔴 Reversal</td></tr>
<tr><td>Tweezer bottom</td><td>2</td><td>After a decline</td><td>🟢 Reversal</td></tr><tr><td>Tweezer top</td><td>2</td><td>After a rise</td><td>🔴 Reversal</td></tr>
<tr><td>Morning star</td><td>3</td><td>After a decline</td><td>🟢 Reversal</td></tr><tr><td>Evening star</td><td>3</td><td>After a rise</td><td>🔴 Reversal</td></tr>
<tr><td>Three white soldiers</td><td>3</td><td>After a decline / range</td><td>🟢 Buying strength</td></tr><tr><td>Three black crows</td><td>3</td><td>After a rise / range</td><td>🔴 Selling strength</td></tr>
<tr><td>Three inside up</td><td>3</td><td>After a decline</td><td>🟢 Confirmed reversal</td></tr><tr><td>Three inside down</td><td>3</td><td>After a rise</td><td>🔴 Confirmed reversal</td></tr></table>
<div class="box tip"><b class="t">Tip</b>Screenshot this table and keep it on your phone during our lives.</div>`}},
{t:{fr:"Chandeliers + supports et résistances",en:"Candlesticks with support and resistance"},s:{fr:"Le bon signal au bon endroit.",en:"The right signal in the right place."},
b:{fr:`<p>Une figure de bougie seule, au milieu de nulle part, n'a presque aucune valeur. Elle devient puissante quand elle apparaît <b>sur une zone importante</b>.</p>
<h2>La recette</h2>
<ol class="steps"><li>Trace tes supports et résistances (et ta ligne de tendance).</li><li>Attends que le prix arrive <b>dans</b> la zone.</li><li>Cherche une figure de retournement dans le bon sens : haussière sur un support, baissière sur une résistance.</li><li>Entre à la clôture de la bougie de signal (ou de la bougie de confirmation).</li><li>Stop Loss au-delà de la mèche de la figure <b>et</b> de la zone.</li><li>Objectif sur la prochaine zone.</li></ol>
<div class="box ex"><b class="t">Exemple type en live</b>L'Or remonte dans la SELL ZONE vers 3 871. Une étoile filante se forme, avec une longue mèche haute rejetée dans la zone. SELL à la clôture, SL au-dessus de la mèche, TP sur le support suivant.</div>
<div class="box tip"><b class="t">Bonus : la confluence</b>Plus il y a d'éléments au même endroit (support + ligne de tendance + Fibonacci 61,8 % + figure de bougie), plus le signal est solide.</div>`,
en:`<p>A candle pattern on its own, in the middle of nowhere, is worth very little. It becomes powerful when it appears <b>at an important zone</b>.</p>
<h2>The recipe</h2>
<ol class="steps"><li>Draw your support and resistance (and your trend line).</li><li>Wait for price to arrive <b>inside</b> the zone.</li><li>Look for a reversal pattern in the right direction: bullish at support, bearish at resistance.</li><li>Enter at the close of the signal candle (or the confirmation candle).</li><li>Stop Loss beyond the pattern's wick <b>and</b> the zone.</li><li>Target the next zone.</li></ol>
<div class="box ex"><b class="t">Typical live example</b>Gold rallies into the SELL ZONE near 3,871. A shooting star forms, with a long upper wick rejected in the zone. SELL at the close, SL above the wick, TP at the next support.</div>
<div class="box tip"><b class="t">Bonus: confluence</b>The more elements line up in the same place (support + trend line + 61.8% Fibonacci + candle pattern), the stronger the signal.</div>`}},
{t:{fr:"Les erreurs courantes avec les chandeliers",en:"Common candlestick mistakes"},s:{fr:"Les 5 pièges des débutants.",en:"The 5 beginner traps."},
b:{fr:`<ol class="steps"><li><b>Vouloir lire chaque bougie.</b> La plupart des bougies ne disent rien de spécial. Seules celles qui se forment sur une zone clé méritent ton attention.</li><li><b>Ignorer le contexte.</b> Un marteau en plein milieu d'une forte baisse, loin de tout support, n'est pas un signal d'achat.</li><li><b>Ne pas attendre la clôture.</b> Une bougie encore ouverte peut changer complètement. Un « marteau » à 2 minutes de la fin peut devenir une grosse bougie rouge.</li><li><b>Sauter la confirmation.</b> Pour les figures fragiles (doji, toupie, pendu), attends que la bougie suivante aille dans le sens prévu.</li><li><b>Oublier l'unité de temps.</b> Une figure en M1 a beaucoup moins de poids qu'en H1 ou H4. Plus l'unité est grande, plus le signal est fiable.</li></ol>
<div class="box warn"><b class="t">Et toujours</b>Une figure parfaite peut échouer. Ton Stop Loss est ta protection, pas la bougie.</div>`,
en:`<ol class="steps"><li><b>Trying to read every candle.</b> Most candles say nothing special. Only those forming at a key zone deserve your attention.</li><li><b>Ignoring context.</b> A hammer in the middle of a strong decline, far from any support, is not a buy signal.</li><li><b>Not waiting for the close.</b> An open candle can change completely. A "hammer" two minutes before the close can turn into a big red candle.</li><li><b>Skipping confirmation.</b> For weaker patterns (doji, spinning top, hanging man), wait for the next candle to move the expected way.</li><li><b>Forgetting the timeframe.</b> A pattern on M1 carries much less weight than on H1 or H4. The higher the timeframe, the more reliable the signal.</li></ol>
<div class="box warn"><b class="t">And always</b>A perfect pattern can still fail. Your Stop Loss is your protection, not the candle.</div>`}}
]},
/* ---------- CH 4 ---------- */
{t:{fr:"Fibonacci",en:"Fibonacci"},d:{fr:"Mesurer les corrections et trouver des entrées dans la tendance.",en:"Measure pullbacks and find entries within the trend."},
lessons:[
{t:{fr:"La suite de Fibonacci et ses ratios",en:"The Fibonacci sequence and its ratios"},s:{fr:"D'où viennent les fameux 38,2 % et 61,8 %.",en:"Where the famous 38.2% and 61.8% come from."},
b:{fr:`<p>Leonardo Fibonacci était un mathématicien italien du XIIIᵉ siècle. Sa suite commence par 0 et 1, puis chaque nombre est la somme des deux précédents :</p>
<div class="box ex"><b class="t">La suite</b>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233…</div>
<h2>Les ratios utilisés en trading</h2>
<ul><li>Un nombre divisé par le <b>suivant</b> ≈ <b>0,618</b> (ex. 55 ÷ 89).</li><li>Un nombre divisé par celui <b>deux rangs après</b> ≈ <b>0,382</b> (ex. 55 ÷ 144).</li><li>Un nombre divisé par celui <b>trois rangs après</b> ≈ <b>0,236</b>.</li></ul>
<p>On y ajoute 0,5 (50 %), qui n'est pas un ratio de Fibonacci mais que les traders surveillent beaucoup, et 0,786 (racine carrée de 0,618).</p>
<table><tr><th>Usage</th><th>Niveaux</th></tr><tr><td>Retracements (corrections)</td><td>23,6 % · 38,2 % · 50 % · 61,8 % · 78,6 %</td></tr><tr><td>Extensions (objectifs)</td><td>127,2 % · 161,8 % · 261,8 %</td></tr></table>
<div class="box tip"><b class="t">Pourquoi ça marche (parfois)</b>Il n'y a rien de magique : ces niveaux fonctionnent surtout parce que des milliers de traders les regardent et y placent leurs ordres.</div>`,
en:`<p>Leonardo Fibonacci was a 13th-century Italian mathematician. His sequence starts with 0 and 1, then each number is the sum of the previous two:</p>
<div class="box ex"><b class="t">The sequence</b>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233…</div>
<h2>Ratios used in trading</h2>
<ul><li>A number divided by the <b>next</b> one ≈ <b>0.618</b> (e.g. 55 ÷ 89).</li><li>A number divided by the one <b>two places on</b> ≈ <b>0.382</b> (e.g. 55 ÷ 144).</li><li>A number divided by the one <b>three places on</b> ≈ <b>0.236</b>.</li></ul>
<p>Traders also add 0.5 (50%), which isn't a Fibonacci ratio but is widely watched, and 0.786 (square root of 0.618).</p>
<table><tr><th>Use</th><th>Levels</th></tr><tr><td>Retracements (pullbacks)</td><td>23.6% · 38.2% · 50% · 61.8% · 78.6%</td></tr><tr><td>Extensions (targets)</td><td>127.2% · 161.8% · 261.8%</td></tr></table>
<div class="box tip"><b class="t">Why it (sometimes) works</b>There's nothing magic about it: these levels work mostly because thousands of traders watch them and place orders there.</div>`}},
{t:{fr:"Tracer un retracement de Fibonacci",en:"Drawing a Fibonacci retracement"},s:{fr:"Installer l'outil et chercher une entrée.",en:"Set up the tool and look for an entry."},
b:{fr:`${chFib('fr')}
<h2>Comment le tracer</h2>
<ol class="steps"><li>Repère une <b>impulsion</b> claire : un mouvement net d'un creux à un sommet (ou l'inverse).</li><li><b>Tendance haussière</b> : clique sur le <b>creux</b> (point bas), puis glisse jusqu'au <b>sommet</b>.</li><li><b>Tendance baissière</b> : clique sur le <b>sommet</b>, puis glisse jusqu'au <b>creux</b>.</li><li>Les niveaux s'affichent automatiquement entre les deux.</li></ol>
<h2>Le calcul à la main</h2>
<div class="box ex"><b class="t">Exemple ci-dessus</b>Creux 3 732, sommet 3 862 → amplitude 130 $.<br>38,2 % : 3 862 − 130 × 0,382 = <b>3 812</b><br>50 % : 3 862 − 65 = <b>3 797</b><br>61,8 % : 3 862 − 130 × 0,618 = <b>3 782</b></div>
<h2>Comment l'utiliser</h2>
<p>En tendance haussière, on attend que le prix corrige vers 38,2 %, 50 % ou 61,8 %, puis on cherche un <b>signal d'achat</b> (bougie de retournement) pour entrer dans le sens de la tendance. Le Stop Loss se place sous le niveau suivant (ou sous le creux de départ pour être prudent).</p>
<div class="box tip"><b class="t">Dans nos lives</b>« SELL ZONE [0,718] » ou « BUY [OTE] » désignent des zones de retracement profondes (autour de 62–79 %) où le coach cherche une entrée.</div>`,
en:`${chFib('en')}
<h2>How to draw it</h2>
<ol class="steps"><li>Find a clear <b>impulse</b>: a clean move from a low to a high (or the reverse).</li><li><b>Uptrend</b>: click the <b>low</b>, then drag to the <b>high</b>.</li><li><b>Downtrend</b>: click the <b>high</b>, then drag to the <b>low</b>.</li><li>The levels appear automatically between the two.</li></ol>
<h2>Calculating by hand</h2>
<div class="box ex"><b class="t">Example above</b>Low 3,732, high 3,862 → range $130.<br>38.2%: 3,862 − 130 × 0.382 = <b>3,812</b><br>50%: 3,862 − 65 = <b>3,797</b><br>61.8%: 3,862 − 130 × 0.618 = <b>3,782</b></div>
<h2>How to use it</h2>
<p>In an uptrend, wait for price to pull back to 38.2%, 50% or 61.8%, then look for a <b>buy signal</b> (reversal candle) to enter with the trend. Place the Stop Loss below the next level (or below the starting low to be safe).</p>
<div class="box tip"><b class="t">In our lives</b>"SELL ZONE [0.718]" or "BUY [OTE]" refer to deep retracement zones (around 62–79%) where the coach looks for an entry.</div>`}},
{t:{fr:"Pourquoi Fibonacci échoue",en:"Why Fibonacci fails"},s:{fr:"Et comment limiter la perte.",en:"And how to limit the loss."},
b:{fr:`<p>Fibonacci n'est pas une boule de cristal. Parfois, le prix traverse tous les niveaux sans s'arrêter.</p>
<h2>Les causes fréquentes</h2>
<ul><li><b>Mauvais points de départ</b> : tracé sur un petit mouvement sans importance, ou sur des sommets/creux mal choisis.</li><li><b>Pas de tendance</b> : dans un marché qui tourne en rond, les retracements ont peu de sens.</li><li><b>Une annonce économique</b> : une news forte peut balayer tous les niveaux.</li><li><b>Entrer sans signal</b> : poser un ordre « aveugle » sur 61,8 % sans attendre de confirmation.</li></ul>
<h2>Comment limiter la casse</h2>
<ul><li>Toujours un <b>Stop Loss</b>, placé sous le niveau suivant ou sous le point de départ.</li><li>Attendre une <b>bougie de confirmation</b> sur le niveau.</li><li>Chercher la <b>confluence</b> avec un support/résistance (leçon suivante).</li><li>Respecter la règle du 1 % de risque.</li></ul>`,
en:`<p>Fibonacci isn't a crystal ball. Sometimes price slices through every level without stopping.</p>
<h2>Common causes</h2>
<ul><li><b>Wrong anchor points</b>: drawn on a small, unimportant move, or on poorly chosen highs/lows.</li><li><b>No trend</b>: in a sideways market, retracements make little sense.</li><li><b>Economic news</b>: strong news can sweep through every level.</li><li><b>Entering without a signal</b>: placing a "blind" order at 61.8% without waiting for confirmation.</li></ul>
<h2>How to limit the damage</h2>
<ul><li>Always use a <b>Stop Loss</b>, below the next level or the starting point.</li><li>Wait for a <b>confirmation candle</b> at the level.</li><li>Look for <b>confluence</b> with support/resistance (next lesson).</li><li>Stick to the 1% risk rule.</li></ul>`}},
{t:{fr:"Fibonacci + supports et résistances",en:"Fibonacci with support and resistance"},s:{fr:"La confluence et les extensions.",en:"Confluence and extensions."},
b:{fr:`<h2>La confluence</h2>
<p>Un niveau de Fibonacci devient bien plus intéressant quand il tombe <b>au même endroit</b> qu'un support ou une résistance déjà connus, une ligne de tendance ou une moyenne mobile.</p>
<div class="box ex"><b class="t">Exemple</b>L'Or corrige après une hausse. Le 61,8 % tombe sur 3 782, exactement là où se trouvait une ancienne résistance devenue support. Deux raisons de surveiller cette zone : si un marteau se forme dessus, le signal d'achat est solide.</div>
<h2>Les extensions : où sortir ?</h2>
<p>Une fois le trade lancé dans le sens de la tendance, les <b>extensions</b> de Fibonacci (127,2 %, 161,8 %) aident à fixer un objectif au-delà du dernier sommet.</p>
<ul><li>TP1 : l'ancien sommet (100 %).</li><li>TP2 : l'extension 127,2 %.</li><li>TP3 : l'extension 161,8 %.</li></ul>
<div class="box tip"><b class="t">Résumé</b>Fibonacci répond à deux questions : <b>où entrer</b> (retracements) et <b>où sortir</b> (extensions). Mais il fonctionne mieux associé aux autres outils.</div>`,
en:`<h2>Confluence</h2>
<p>A Fibonacci level becomes much more interesting when it lands <b>in the same place</b> as a known support or resistance, a trend line or a moving average.</p>
<div class="box ex"><b class="t">Example</b>Gold pulls back after a rally. The 61.8% sits at 3,782, exactly where an old resistance turned support. Two reasons to watch that zone: if a hammer forms there, the buy signal is strong.</div>
<h2>Extensions: where to exit?</h2>
<p>Once the trade is running with the trend, Fibonacci <b>extensions</b> (127.2%, 161.8%) help set a target beyond the last high.</p>
<ul><li>TP1: the previous high (100%).</li><li>TP2: the 127.2% extension.</li><li>TP3: the 161.8% extension.</li></ul>
<div class="box tip"><b class="t">Summary</b>Fibonacci answers two questions: <b>where to enter</b> (retracements) and <b>where to exit</b> (extensions). But it works best combined with other tools.</div>`}}
]},
/* ---------- CH 5 et 6 (repris des anciennes leçons) ---------- */
{t:{fr:"Les moyennes mobiles",en:"Moving averages"},d:{fr:"Voir la tendance d'un coup d'œil.",en:"See the trend at a glance."},lessons:[]},
{t:{fr:"Les indicateurs populaires",en:"Popular chart indicators"},d:{fr:"RSI, MACD, Bollinger, Stochastique, ATR.",en:"RSI, MACD, Bollinger, Stochastic, ATR."},lessons:[]}
]};
