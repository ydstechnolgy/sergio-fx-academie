const LV23=[
{n:2,icon:"hand",t:{fr:"Brokers et analyse",en:"Brokers and analysis"},d:{fr:"Choisir un bon broker et découvrir les façons d'analyser les marchés.",en:"Choose a good broker and discover the ways to analyse the markets."},
lessons:[
{id:"2-1",t:{fr:"Bien choisir son broker",en:"Choosing a broker"},s:{fr:"Les critères qui comptent vraiment.",en:"The criteria that really matter."},
b:{fr:`<p>Ton broker garde ton argent et exécute tes ordres. Le choisir est donc une décision importante.</p>
<h2>Les critères à vérifier</h2>
<ul><li><b>La régulation</b> : le broker doit être enregistré auprès d'une autorité financière (FCA au Royaume-Uni, CySEC à Chypre, FSCA en Afrique du Sud…). Vérifie le numéro de licence sur le site de l'autorité.</li><li><b>Les frais</b> : spread, commissions, frais de nuit (swap).</li><li><b>La plateforme</b> : MetaTrader 5 est la plus utilisée, sur PC et téléphone.</li><li><b>Dépôts et retraits</b> : moyens disponibles chez toi (Mobile Money, carte, crypto…) et rapidité des retraits.</li><li><b>Le service client</b> : disponible et en français si possible.</li><li><b>Le compte démo</b> : pour t'entraîner gratuitement.</li></ul>
<h2>Les types de comptes</h2>
<p>La plupart des brokers proposent plusieurs comptes : certains avec un spread plus large mais sans commission, d'autres avec un spread très faible et une petite commission. Pour débuter, un compte standard suffit.</p>
<div class="box ex"><b class="t">Notre broker</b>À SERGIO FX, nous utilisons <b>HFM (HF Markets)</b>. Le guide d'inscription étape par étape est disponible auprès de l'équipe.</div>
<div class="box warn"><b class="t">Méfiance</b>Un broker non régulé, des bonus trop beaux ou des retraits qui traînent sont des signaux d'alerte.</div>`,
en:`<p>Your broker holds your money and executes your orders. Choosing one is an important decision.</p>
<h2>Criteria to check</h2>
<ul><li><b>Regulation</b>: the broker must be registered with a financial authority (FCA in the UK, CySEC in Cyprus, FSCA in South Africa…). Check the licence number on the authority's website.</li><li><b>Costs</b>: spread, commissions, overnight fees (swap).</li><li><b>Platform</b>: MetaTrader 5 is the most widely used, on PC and phone.</li><li><b>Deposits and withdrawals</b>: methods available in your country (Mobile Money, card, crypto…) and how fast withdrawals are.</li><li><b>Customer support</b>: available, ideally in your language.</li><li><b>Demo account</b>: to practise for free.</li></ul>
<h2>Account types</h2>
<p>Most brokers offer several accounts: some with a wider spread and no commission, others with a very tight spread and a small commission. To start, a standard account is enough.</p>
<div class="box ex"><b class="t">Our broker</b>At SERGIO FX we use <b>HFM (HF Markets)</b>. A step-by-step sign-up guide is available from the team.</div>
<div class="box warn"><b class="t">Red flags</b>An unregulated broker, bonuses that look too good or slow withdrawals are warning signs.</div>`}},
{id:"2-2",t:{fr:"Les 3 types d'analyse",en:"The 3 types of analysis"},s:{fr:"Technique, fondamentale et sentiment.",en:"Technical, fundamental and sentiment."},
b:{fr:`<p>Pour décider d'acheter ou de vendre, les traders utilisent trois grandes familles d'analyse. Les meilleurs les combinent.</p>
<h2>1. L'analyse technique</h2>
<p>Elle étudie le <b>graphique des prix</b> : tendances, supports et résistances, chandeliers, indicateurs. L'idée : l'histoire a tendance à se répéter, et le prix reflète déjà toute l'information disponible. C'est l'analyse que nous utilisons le plus en live.</p>
<h2>2. L'analyse fondamentale</h2>
<p>Elle étudie l'<b>économie</b> : taux d'intérêt, inflation, emploi, croissance, décisions des banques centrales. Exemple : si la Fed laisse entendre qu'elle va baisser ses taux, le dollar a tendance à baisser… et l'Or à monter.</p>
<h2>3. L'analyse du sentiment</h2>
<p>Elle cherche à savoir si la majorité des traders est plutôt <b>acheteuse ou vendeuse</b>, et à quel point elle est sûre d'elle. Quand tout le monde est du même côté, le marché peut se retourner brutalement.</p>
<table><tr><th>Analyse</th><th>Question</th><th>Outils</th></tr><tr><td>Technique</td><td>Où le prix va-t-il réagir ?</td><td>Graphiques, indicateurs</td></tr><tr><td>Fondamentale</td><td>Pourquoi le prix bouge-t-il ?</td><td>Calendrier économique, news</td></tr><tr><td>Sentiment</td><td>Que pensent les autres traders ?</td><td>Positionnement, ambiance du marché</td></tr></table>
<div class="box tip"><b class="t">Conseil</b>Débutant ? Commence par l'analyse technique, et consulte toujours le calendrier économique avant de trader.</div>`,
en:`<p>To decide whether to buy or sell, traders use three main families of analysis. The best traders combine them.</p>
<h2>1. Technical analysis</h2>
<p>It studies the <b>price chart</b>: trends, support and resistance, candlesticks, indicators. The idea: history tends to repeat itself, and price already reflects all available information. It's the analysis we use most in our lives.</p>
<h2>2. Fundamental analysis</h2>
<p>It studies the <b>economy</b>: interest rates, inflation, jobs, growth, central bank decisions. Example: if the Fed hints at cutting rates, the dollar tends to fall… and Gold tends to rise.</p>
<h2>3. Sentiment analysis</h2>
<p>It tries to know whether most traders are <b>buying or selling</b>, and how confident they are. When everyone is on the same side, the market can reverse sharply.</p>
<table><tr><th>Analysis</th><th>Question</th><th>Tools</th></tr><tr><td>Technical</td><td>Where will price react?</td><td>Charts, indicators</td></tr><tr><td>Fundamental</td><td>Why is price moving?</td><td>Economic calendar, news</td></tr><tr><td>Sentiment</td><td>What do other traders think?</td><td>Positioning, market mood</td></tr></table>
<div class="box tip"><b class="t">Tip</b>Beginner? Start with technical analysis, and always check the economic calendar before trading.</div>`}},
{id:"2-3",t:{fr:"Les types de graphiques",en:"Types of charts"},s:{fr:"Ligne, barres et chandeliers.",en:"Line, bar and candlestick."},
b:{fr:`<p>Un graphique montre l'évolution du prix dans le temps. Il en existe trois types principaux.</p>
<h2>Le graphique en ligne</h2>
<p>Il relie les prix de <b>clôture</b> de chaque période. Simple et clair pour voir la tendance générale, mais il cache les détails.</p>
<h2>Le graphique en barres (OHLC)</h2>
<p>Chaque barre montre 4 prix : <b>Ouverture</b> (petit trait à gauche), <b>Plus haut</b> (haut de la barre), <b>Plus bas</b> (bas de la barre) et <b>Clôture</b> (petit trait à droite).</p>
<h2>Le graphique en chandeliers japonais</h2>
<p>Il montre les mêmes 4 prix, mais de façon beaucoup plus visuelle. C'est le plus utilisé par les traders.</p>
${candleSVG('fr')}
<ul><li><b>Bougie verte</b> (haussière) : la clôture est plus haute que l'ouverture.</li><li><b>Bougie rouge</b> (baissière) : la clôture est plus basse que l'ouverture.</li><li>Le <b>corps</b> = l'écart entre ouverture et clôture. Les <b>mèches</b> = les extrêmes atteints.</li></ul>
<h2>Les unités de temps</h2>
<p>Chaque bougie peut représenter 1 minute (M1), 5 minutes (M5), 1 heure (H1), 1 jour (D1)… En live, nous regardons souvent les petites unités (M1, M3, M5) pour entrer, et les grandes (H1, H4) pour la direction générale.</p>`,
en:`<p>A chart shows how price changes over time. There are three main types.</p>
<h2>Line chart</h2>
<p>It connects the <b>closing</b> prices of each period. Simple and clear to see the overall trend, but it hides the details.</p>
<h2>Bar chart (OHLC)</h2>
<p>Each bar shows 4 prices: <b>Open</b> (small tick on the left), <b>High</b> (top of the bar), <b>Low</b> (bottom of the bar) and <b>Close</b> (small tick on the right).</p>
<h2>Japanese candlestick chart</h2>
<p>It shows the same 4 prices, but in a much more visual way. It's the one most traders use.</p>
${candleSVG('en')}
<ul><li><b>Green candle</b> (bullish): close is higher than open.</li><li><b>Red candle</b> (bearish): close is lower than open.</li><li>The <b>body</b> = the gap between open and close. The <b>wicks</b> = the extremes reached.</li></ul>
<h2>Timeframes</h2>
<p>Each candle can represent 1 minute (M1), 5 minutes (M5), 1 hour (H1), 1 day (D1)… In our lives we often use small timeframes (M1, M3, M5) to enter, and larger ones (H1, H4) for the overall direction.</p>`}}
]},
{n:3,icon:"candle",t:{fr:"L'analyse technique",en:"Technical analysis"},d:{fr:"Le guide du débutant pour lire un graphique : niveaux clés, bougies, Fibonacci et indicateurs.",en:"The beginner's guide to reading a chart: key levels, candles, Fibonacci and indicators."},
lessons:[
{id:"3-1",t:{fr:"Supports et résistances",en:"Support and resistance"},s:{fr:"Les zones où le prix réagit.",en:"The zones where price reacts."},
b:{fr:`<p>Les supports et résistances sont les bases de l'analyse technique. Ce sont des <b>zones</b> où le prix a déjà réagi dans le passé et risque de réagir à nouveau.</p>
${srSVG('fr')}
<h2>Le support</h2>
<p>Une zone <b>sous</b> le prix où les acheteurs ont été plus forts que les vendeurs : le prix a « rebondi » vers le haut. C'est comme un plancher.</p>
<h2>La résistance</h2>
<p>Une zone <b>au-dessus</b> du prix où les vendeurs ont repris le contrôle : le prix a été repoussé vers le bas. C'est comme un plafond.</p>
<h2>Comment les tracer</h2>
<ul><li>Repère les endroits où le prix s'est retourné <b>au moins deux fois</b>.</li><li>Trace une <b>zone</b> plutôt qu'une ligne parfaite : le prix dépasse souvent un peu.</li><li>Commence sur une grande unité de temps (H1, H4), puis descends.</li></ul>
<h2>Quand un niveau casse</h2>
<p>Quand le prix casse franchement une résistance, celle-ci devient souvent un nouveau <b>support</b> (et inversement). On appelle ça l'inversion de rôle.</p>
<div class="box tip"><b class="t">Dans nos lives</b>Les « SELL ZONE » et « BUY ZONE » que tu vois sur nos graphiques sont des zones de résistance et de support.</div>`,
en:`<p>Support and resistance are the basics of technical analysis. They are <b>zones</b> where price has reacted in the past and may react again.</p>
${srSVG('en')}
<h2>Support</h2>
<p>A zone <b>below</b> price where buyers were stronger than sellers: price "bounced" up. Think of it as a floor.</p>
<h2>Resistance</h2>
<p>A zone <b>above</b> price where sellers took control: price was pushed back down. Think of it as a ceiling.</p>
<h2>How to draw them</h2>
<ul><li>Look for places where price turned <b>at least twice</b>.</li><li>Draw a <b>zone</b> rather than a perfect line: price often overshoots a little.</li><li>Start on a higher timeframe (H1, H4), then zoom in.</li></ul>
<h2>When a level breaks</h2>
<p>When price clearly breaks a resistance, it often becomes new <b>support</b> (and vice versa). This is called a role reversal.</p>
<div class="box tip"><b class="t">In our lives</b>The "SELL ZONE" and "BUY ZONE" you see on our charts are resistance and support zones.</div>`}},
{id:"3-2",t:{fr:"Les chandeliers japonais",en:"Japanese candlesticks"},s:{fr:"Lire les bougies et les figures clés.",en:"Read candles and key patterns."},
b:{fr:`<p>Chaque bougie raconte la bataille entre acheteurs et vendeurs pendant une période. Certaines formes donnent des indices sur la suite.</p>
<h2>Les bougies à connaître</h2>
<ul><li><b>Grand corps, petites mèches</b> : un camp a dominé toute la période. Mouvement fort.</li><li><b>Doji</b> : ouverture ≈ clôture. Indécision, le marché hésite.</li><li><b>Marteau</b> : petit corps en haut, longue mèche basse. En bas d'une baisse, il montre que les acheteurs ont repoussé le prix : possible retournement haussier.</li><li><b>Étoile filante</b> : petit corps en bas, longue mèche haute. En haut d'une hausse : possible retournement baissier.</li></ul>
<h2>Les figures à deux bougies</h2>
<ul><li><b>Avalement haussier</b> : une bougie verte « avale » entièrement la bougie rouge précédente. Signal d'achat potentiel sur un support.</li><li><b>Avalement baissier</b> : une bougie rouge avale la bougie verte précédente. Signal de vente potentiel sur une résistance.</li></ul>
<div class="box tip"><b class="t">La clé</b>Une figure de bougie seule ne suffit pas. Elle devient intéressante quand elle apparaît <b>sur une zone importante</b> (support, résistance).</div>`,
en:`<p>Each candle tells the story of the battle between buyers and sellers during a period. Some shapes give clues about what comes next.</p>
<h2>Candles to know</h2>
<ul><li><b>Big body, small wicks</b>: one side dominated the whole period. Strong move.</li><li><b>Doji</b>: open ≈ close. Indecision, the market is hesitating.</li><li><b>Hammer</b>: small body at the top, long lower wick. At the bottom of a decline it shows buyers pushed price back: possible bullish reversal.</li><li><b>Shooting star</b>: small body at the bottom, long upper wick. At the top of a rise: possible bearish reversal.</li></ul>
<h2>Two-candle patterns</h2>
<ul><li><b>Bullish engulfing</b>: a green candle fully "engulfs" the previous red candle. Potential buy signal at support.</li><li><b>Bearish engulfing</b>: a red candle engulfs the previous green candle. Potential sell signal at resistance.</li></ul>
<div class="box tip"><b class="t">The key</b>A candle pattern alone is not enough. It becomes interesting when it appears <b>at an important zone</b> (support, resistance).</div>`}},
{id:"3-3",t:{fr:"Fibonacci",en:"Fibonacci"},s:{fr:"Trouver où le prix peut corriger.",en:"Find where price may pull back."},
b:{fr:`<p>Le prix ne monte ou ne descend jamais en ligne droite : il avance, recule un peu (on dit qu'il « corrige » ou fait un « retracement »), puis repart. L'outil <b>Fibonacci</b> aide à estimer jusqu'où il peut reculer.</p>
<h2>Les niveaux de retracement</h2>
<p>Les plus utilisés : <b>23,6 % – 38,2 % – 50 % – 61,8 % – 78,6 %</b>. Les zones 50 % et 61,8 % sont souvent les plus surveillées.</p>
<h2>Comment l'utiliser</h2>
<ol><li>Repère un mouvement net (une impulsion).</li><li>En tendance haussière : trace l'outil du <b>plus bas vers le plus haut</b>. En tendance baissière : du <b>plus haut vers le plus bas</b>.</li><li>Observe si le prix réagit sur un niveau, surtout s'il correspond à un support ou une résistance.</li></ol>
<div class="box ex"><b class="t">Dans nos lives</b>Quand tu vois « SELL ZONE [0,718] » ou « BUY [OTE] », il s'agit de zones de retracement que le coach utilise pour chercher une entrée dans le sens du mouvement principal.</div>
<h2>Les extensions</h2>
<p>Les niveaux <b>127,2 %</b> et <b>161,8 %</b> servent à estimer où placer un objectif (Take Profit) quand le prix repart.</p>
<div class="box warn"><b class="t">Attention</b>Fibonacci n'est pas magique. Il indique des zones possibles, pas des certitudes. Toujours un Stop Loss.</div>`,
en:`<p>Price never moves in a straight line: it advances, pulls back a little (a "retracement"), then continues. The <b>Fibonacci</b> tool helps estimate how far it may pull back.</p>
<h2>Retracement levels</h2>
<p>The most used: <b>23.6% – 38.2% – 50% – 61.8% – 78.6%</b>. The 50% and 61.8% zones are often the most watched.</p>
<h2>How to use it</h2>
<ol><li>Spot a clear move (an impulse).</li><li>In an uptrend: draw the tool from the <b>low to the high</b>. In a downtrend: from the <b>high to the low</b>.</li><li>Watch whether price reacts at a level, especially when it lines up with support or resistance.</li></ol>
<div class="box ex"><b class="t">In our lives</b>When you see "SELL ZONE [0.718]" or "BUY [OTE]", these are retracement zones the coach uses to find an entry in the direction of the main move.</div>
<h2>Extensions</h2>
<p>The <b>127.2%</b> and <b>161.8%</b> levels help estimate where to place a target (Take Profit) when price moves on.</p>
<div class="box warn"><b class="t">Warning</b>Fibonacci is not magic. It shows possible zones, not certainties. Always use a Stop Loss.</div>`}},
{id:"3-4",t:{fr:"Les moyennes mobiles",en:"Moving averages"},s:{fr:"Voir la tendance d'un coup d'œil.",en:"See the trend at a glance."},
b:{fr:`<p>Une <b>moyenne mobile</b> calcule le prix moyen sur un certain nombre de bougies et le trace sous forme de ligne. Elle « lisse » le graphique pour mieux voir la tendance.</p>
<h2>Les deux types principaux</h2>
<ul><li><b>SMA</b> (moyenne mobile simple) : toutes les bougies comptent autant.</li><li><b>EMA</b> (moyenne mobile exponentielle) : les bougies récentes comptent plus. Elle réagit plus vite.</li></ul>
<h2>Les réglages courants</h2>
<ul><li><b>20</b> : tendance à court terme.</li><li><b>50</b> : tendance à moyen terme.</li><li><b>200</b> : tendance de fond, très suivie par les institutions.</li></ul>
<h2>Comment les lire</h2>
<ul><li>Prix <b>au-dessus</b> de la moyenne et moyenne qui monte : tendance haussière, on cherche plutôt des achats.</li><li>Prix <b>en dessous</b> et moyenne qui descend : tendance baissière, on cherche plutôt des ventes.</li><li>Quand une moyenne courte croise une moyenne longue, cela peut signaler un changement de tendance.</li></ul>
<div class="box tip"><b class="t">Astuce</b>En tendance, les moyennes mobiles servent souvent de support ou de résistance « dynamique ».</div>`,
en:`<p>A <b>moving average</b> calculates the average price over a number of candles and plots it as a line. It "smooths" the chart to show the trend more clearly.</p>
<h2>The two main types</h2>
<ul><li><b>SMA</b> (simple moving average): every candle counts equally.</li><li><b>EMA</b> (exponential moving average): recent candles count more. It reacts faster.</li></ul>
<h2>Common settings</h2>
<ul><li><b>20</b>: short-term trend.</li><li><b>50</b>: medium-term trend.</li><li><b>200</b>: long-term trend, closely watched by institutions.</li></ul>
<h2>How to read them</h2>
<ul><li>Price <b>above</b> the average and the average rising: uptrend, look mainly for buys.</li><li>Price <b>below</b> and the average falling: downtrend, look mainly for sells.</li><li>When a short average crosses a long one, it may signal a change of trend.</li></ul>
<div class="box tip"><b class="t">Tip</b>In a trend, moving averages often act as "dynamic" support or resistance.</div>`}},
{id:"3-5",t:{fr:"Les indicateurs populaires",en:"Popular chart indicators"},s:{fr:"RSI, MACD, Bollinger, Stochastique, ATR.",en:"RSI, MACD, Bollinger, Stochastic, ATR."},
b:{fr:`<p>Les indicateurs sont des calculs faits à partir du prix. Ils aident à confirmer une idée, mais ne doivent jamais décider à ta place.</p>
<table><tr><th>Indicateur</th><th>À quoi il sert</th><th>Lecture simple</th></tr>
<tr><td><b>RSI</b></td><td>Mesure la force du mouvement</td><td>Au-dessus de 70 : suracheté. En dessous de 30 : survendu.</td></tr>
<tr><td><b>MACD</b></td><td>Suit l'élan de la tendance</td><td>Croisement des lignes = changement d'élan possible.</td></tr>
<tr><td><b>Bandes de Bollinger</b></td><td>Mesurent la volatilité</td><td>Bandes serrées = calme avant un mouvement. Bandes larges = forte volatilité.</td></tr>
<tr><td><b>Stochastique</b></td><td>Compare la clôture aux derniers extrêmes</td><td>Au-dessus de 80 : suracheté. En dessous de 20 : survendu.</td></tr>
<tr><td><b>ATR</b></td><td>Mesure l'amplitude moyenne des bougies</td><td>Aide à placer un Stop Loss adapté à la volatilité.</td></tr></table>
<h2>Les erreurs à éviter</h2>
<ul><li>Mettre 10 indicateurs sur le graphique : trop d'informations = confusion.</li><li>Acheter juste parce que le RSI est sous 30 : en forte tendance, il peut rester « survendu » longtemps.</li><li>Oublier les zones clés : l'indicateur confirme, le niveau décide.</li></ul>
<div class="box tip"><b class="t">Notre conseil</b>Maîtrise d'abord les supports/résistances et les bougies. Ajoute ensuite un ou deux indicateurs maximum.</div>`,
en:`<p>Indicators are calculations based on price. They help confirm an idea, but should never decide for you.</p>
<table><tr><th>Indicator</th><th>What it does</th><th>Simple reading</th></tr>
<tr><td><b>RSI</b></td><td>Measures the strength of the move</td><td>Above 70: overbought. Below 30: oversold.</td></tr>
<tr><td><b>MACD</b></td><td>Tracks trend momentum</td><td>Lines crossing = possible change in momentum.</td></tr>
<tr><td><b>Bollinger Bands</b></td><td>Measure volatility</td><td>Tight bands = calm before a move. Wide bands = high volatility.</td></tr>
<tr><td><b>Stochastic</b></td><td>Compares the close to recent extremes</td><td>Above 80: overbought. Below 20: oversold.</td></tr>
<tr><td><b>ATR</b></td><td>Measures average candle range</td><td>Helps set a Stop Loss suited to volatility.</td></tr></table>
<h2>Mistakes to avoid</h2>
<ul><li>Putting 10 indicators on the chart: too much information = confusion.</li><li>Buying just because RSI is below 30: in a strong trend it can stay "oversold" for a long time.</li><li>Forgetting key zones: the indicator confirms, the level decides.</li></ul>
<div class="box tip"><b class="t">Our advice</b>Master support/resistance and candles first. Then add one or two indicators at most.</div>`}}
]}
];
