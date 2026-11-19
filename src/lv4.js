/* ---------- Graphiques du niveau 4 ---------- */
const C_ST=series(61,[[0,3760],[6,3800],[10,3782],[17,3830],[21,3810],[28,3858],[32,3838],[38,3880]],3);
function chStruct(l){return chart({c:C_ST,min:3750,max:3892,step:25,d:0,
 tags:[{i:6,p:3803,t:'H',up:1},{i:10,p:3779,t:L(l,'L','L')},{i:17,p:3833,t:'HH',up:1},{i:21,p:3807,t:'HL'},{i:28,p:3861,t:'HH',up:1},{i:32,p:3835,t:'HL'},{i:38,p:3883,t:'HH',up:1}],
 lines:[{a:[6,3801],b:[14,3801],c:BL,dash:1},{a:[17,3831],b:[25,3831],c:BL,dash:1},{a:[28,3859],b:[35,3859],c:BL,dash:1}],
 notes:[{i:13,p:3803,bx:300,by:300,w:270,h:44,t:'BOS = '+L(l,'cassure de structure','break of structure'),s:L(l,'Le prix clôture au-dessus du dernier sommet','Price closes above the last high')}],
 title:L(l,'Tendance haussière','Uptrend'),lw:250,leg:[[L(l,'HH : sommet plus haut · HL : creux plus haut','HH: higher high · HL: higher low')]]})}
const C_CH=series(67,[[0,3880],[5,3850],[9,3866],[15,3832],[19,3848],[25,3815],[30,3858],[34,3840],[40,3872]],3);
function chChoch(l){return chart({c:C_CH,min:3785,max:3900,step:20,d:0,h:400,
 tags:[{i:5,p:3847,t:'LL'},{i:9,p:3869,t:'LH',up:1},{i:15,p:3829,t:'LL'},{i:19,p:3851,t:'LH',up:1},{i:25,p:3812,t:'LL'},{i:34,p:3837,t:'HL'}],
 lines:[{a:[19,3849],b:[29,3849],c:GD,dash:1}],
 notes:[{i:28,p:3851,bx:330,by:345,w:300,h:44,t:'CHoCH = '+L(l,'changement de caractère','change of character'),s:L(l,'1ʳᵉ cassure du dernier LH : la baisse s\'essouffle','1st break of the last LH: the downtrend fades')}],
 title:L(l,'Changement de tendance','Trend change'),lw:250,leg:[[L(l,'LH : sommet plus bas · LL : creux plus bas','LH: lower high · LL: lower low')]]})}
const C_SD=series(71,[[0,3830],[4,3826],[6,3828],[12,3870],[16,3862],[20,3874],[26,3836],[29,3832]],3);
function chSD(l){return chart({c:C_SD,min:3815,max:3885,step:20,d:0,
 box:[{i1:2,i2:30,p1:3822,p2:3832,c:GR,t:L(l,'BUY ZONE (demande)','BUY ZONE (demand)')}],
 notes:[{i:5,p:3826,bx:300,by:30,w:300,h:44,t:L(l,'La « base » avant une forte hausse','The "base" before a strong rally'),s:L(l,'Quand le prix y revient, les acheteurs réagissent souvent','When price returns, buyers often react')}],h:330})}

/* Top-down : H4 → H1 → M5 */
const C_TD1=series(73,[[0,3905],[4,3912],[10,3860],[14,3880],[20,3835],[26,3868]],5);
function chTD1(l){return chart({c:C_TD1,min:3825,max:3950,step:20,d:0,h:360,
 tags:[{i:4,p:3915,t:'LH',up:1},{i:10,p:3857,t:'LL'},{i:14,p:3883,t:'LH',up:1},{i:20,p:3832,t:'LL'}],
 box:[{i1:12,i2:27,p1:3870,p2:3884,c:RD,t:'H4 SELL ZONE'}],
 title:L(l,'① H4 : le biais','① H4: the bias'),lw:240,leg:[[L(l,'Tendance baissière → on cherche des SELL','Downtrend → we look for SELLs'),RD]]})}
const C_TD2=series(79,[[0,3836],[6,3852],[9,3845],[16,3872],[19,3866],[24,3878]],2.5);
function chTD2(l){return chart({c:C_TD2,min:3830,max:3890,step:10,d:0,h:330,
 box:[{i1:0,i2:25,p1:3870,p2:3884,c:RD,t:L(l,'Zone H4 reportée sur H1','H4 zone drawn on H1')}],
 lines:[{h:3879,c:GD,dash:1,from:10,t:'$$$'}],
 title:L(l,'② H1 : la zone','② H1: the zone'),lw:260,leg:[[L(l,'Le prix monte dans la zone de vente','Price rallies into the sell zone')]]})}
const C_TD3=series(83,[[0,3866],[6,3876],[9,3871],[15,3880],[19,3873.5],[23,3877],[28,3868],[31,3872],[36,3864]],1.2);
function chTD3(l){return chart({c:C_TD3,min:3845,max:3886,step:10,d:0,h:340,
 tags:[{i:15,p:3881.5,t:'HH',up:1},{i:19,p:3872,t:'HL'}],
 lines:[{a:[19,3873.3],b:[27,3873.3],c:GD,dash:1},{h:3872,c:'#6366f1',dash:1,from:31,t:L(l,'Entrée 3 872','Entry 3,872')},{h:3882,c:'#e11d48',dash:1,from:31,t:'SL 3 882'},{h:3850,c:GR,dash:1,from:31,t:'TP 3 850'}],
 notes:[{i:27,p:3872,bx:40,by:250,w:290,h:44,t:'CHoCH M5',s:L(l,'Le dernier creux casse : les vendeurs reprennent la main','The last low breaks: sellers take over')}],
 title:L(l,'③ M5 : l\'entrée','③ M5: the entry'),lw:220,leg:[]})}

const LV4={n:4,icon:"layers",t:{fr:"Structure et Top-Down Analysis",en:"Market structure and top-down analysis"},d:{fr:"Lire la structure du marché et analyser du grand vers le petit : la méthode utilisée en live.",en:"Read market structure and analyse from big to small: the method used in our lives."},
chapters:[
{t:{fr:"La structure du marché",en:"Market structure"},d:{fr:"Tendances, cassures, zones et liquidité.",en:"Trends, breaks, zones and liquidity."},
lessons:[
{t:{fr:"Hausse, baisse ou range ?",en:"Uptrend, downtrend or range?"},s:{fr:"Lire les sommets et les creux.",en:"Read the highs and lows."},
b:{fr:`<p>La <b>structure</b> du marché, c'est la façon dont le prix construit ses sommets (highs) et ses creux (lows). C'est la première chose à regarder sur un graphique.</p>
${chStruct('fr')}
<table><tr><th>Structure</th><th>Sommets</th><th>Creux</th><th>On cherche…</th></tr>
<tr><td>🟢 Haussière</td><td>de plus en plus hauts (<b>HH</b>)</td><td>de plus en plus hauts (<b>HL</b>)</td><td>des BUY sur les creux</td></tr>
<tr><td>🔴 Baissière</td><td>de plus en plus bas (<b>LH</b>)</td><td>de plus en plus bas (<b>LL</b>)</td><td>des SELL sur les sommets</td></tr>
<tr><td>⚪ Range</td><td>au même niveau</td><td>au même niveau</td><td>acheter en bas, vendre en haut… ou attendre</td></tr></table>
<div class="box tip"><b class="t">Abréviations anglaises</b>HH = Higher High · HL = Higher Low · LH = Lower High · LL = Lower Low. Tu les verras partout, y compris dans nos lives.</div>`,
en:`<p>Market <b>structure</b> is how price builds its highs and lows. It's the first thing to look at on a chart.</p>
${chStruct('en')}
<table><tr><th>Structure</th><th>Highs</th><th>Lows</th><th>We look for…</th></tr>
<tr><td>🟢 Bullish</td><td>higher (<b>HH</b>)</td><td>higher (<b>HL</b>)</td><td>BUYs at the lows</td></tr>
<tr><td>🔴 Bearish</td><td>lower (<b>LH</b>)</td><td>lower (<b>LL</b>)</td><td>SELLs at the highs</td></tr>
<tr><td>⚪ Range</td><td>at the same level</td><td>at the same level</td><td>buy low, sell high… or wait</td></tr></table>
<div class="box tip"><b class="t">Abbreviations</b>HH = Higher High · HL = Higher Low · LH = Lower High · LL = Lower Low. You'll see them everywhere, including in our lives.</div>`}},
{t:{fr:"BOS et CHoCH : cassures de structure",en:"BOS and CHoCH: structure breaks"},s:{fr:"Savoir si la tendance continue ou change.",en:"Know whether the trend continues or changes."},
b:{fr:`<h2>BOS – Break of Structure</h2><p>Une <b>cassure dans le sens de la tendance</b>. En hausse, le prix clôture au-dessus du dernier sommet : la tendance <b>continue</b>.</p>
<h2>CHoCH – Change of Character</h2><p>La <b>première cassure dans le sens inverse</b>. En baisse, le prix casse enfin le dernier LH : les vendeurs perdent le contrôle, un retournement est <b>possible</b>.</p>
${chChoch('fr')}
<ul><li>Un BOS confirme : on continue à trader dans le même sens.</li><li>Un CHoCH alerte : on arrête de trader l'ancienne tendance et on attend une confirmation de la nouvelle.</li><li>On parle de cassure quand une bougie <b>clôture</b> au-delà du niveau, pas quand une mèche le dépasse.</li></ul>
<div class="box ex"><b class="t">Sur les petites unités</b>C'est un CHoCH sur M5 ou M1, dans une zone repérée sur H4, qui sert souvent de signal d'entrée en live (voir chapitre 2).</div>`,
en:`<h2>BOS – Break of Structure</h2><p>A <b>break in the direction of the trend</b>. In an uptrend, price closes above the last high: the trend <b>continues</b>.</p>
<h2>CHoCH – Change of Character</h2><p>The <b>first break in the opposite direction</b>. In a downtrend, price finally breaks the last LH: sellers are losing control, a reversal is <b>possible</b>.</p>
${chChoch('en')}
<ul><li>A BOS confirms: keep trading in the same direction.</li><li>A CHoCH warns: stop trading the old trend and wait for confirmation of the new one.</li><li>It's a break when a candle <b>closes</b> beyond the level, not when a wick pokes through.</li></ul>
<div class="box ex"><b class="t">On lower timeframes</b>A CHoCH on M5 or M1, inside a zone spotted on H4, is often the entry signal in our lives (see chapter 2).</div>`}},
{t:{fr:"Zones d'offre et de demande",en:"Supply and demand zones"},s:{fr:"Les fameuses SELL ZONE et BUY ZONE.",en:"The famous SELL ZONE and BUY ZONE."},
b:{fr:`<p>Avant un mouvement violent, le prix fait souvent une petite pause (une « base »). C'est là que de gros ordres ont été placés. Quand le prix revient sur cette base, une partie de ces ordres peut encore réagir.</p>
${chSD('fr')}
<ul><li><b>Zone de demande (BUY ZONE)</b> : la base <b>avant une forte hausse</b>. On y cherche des achats.</li><li><b>Zone d'offre (SELL ZONE)</b> : la base <b>avant une forte baisse</b>. On y cherche des ventes.</li></ul>
<h2>Comment la tracer</h2><ol class="steps"><li>Repère un mouvement fort (grandes bougies dans le même sens).</li><li>Remonte à la dernière petite consolidation (ou la dernière bougie opposée) juste avant.</li><li>Trace un rectangle du plus haut au plus bas de cette base.</li><li>Prolonge-le vers la droite et attends le retour du prix.</li></ol>
<div class="box tip"><b class="t">Une bonne zone</b>Départ explosif, peu de temps passé dans la base, pas encore « touchée » depuis, et dans le sens de la tendance de fond.</div>`,
en:`<p>Before a violent move, price often pauses briefly (a "base"). That's where big orders were placed. When price returns to that base, some of those orders may still react.</p>
${chSD('en')}
<ul><li><b>Demand zone (BUY ZONE)</b>: the base <b>before a strong rally</b>. Look for buys there.</li><li><b>Supply zone (SELL ZONE)</b>: the base <b>before a strong drop</b>. Look for sells there.</li></ul>
<h2>How to draw it</h2><ol class="steps"><li>Find a strong move (big candles in one direction).</li><li>Go back to the last small consolidation (or last opposite candle) just before it.</li><li>Draw a rectangle from that base's high to its low.</li><li>Extend it to the right and wait for price to return.</li></ol>
<div class="box tip"><b class="t">A good zone</b>Explosive departure, little time spent in the base, not yet "touched" since, and aligned with the higher-timeframe trend.</div>`}},
{t:{fr:"La liquidité",en:"Liquidity"},s:{fr:"Pourquoi le prix va chercher les Stop Loss.",en:"Why price hunts Stop Losses."},
b:{fr:`<p>Les gros acteurs ont besoin de beaucoup de contreparties pour remplir leurs ordres. Où les trouver ? Là où les petits traders ont placé leurs <b>Stop Loss</b> et leurs ordres en attente : c'est la <b>liquidité</b>.</p>
<h2>Où se cache la liquidité</h2><ul><li>Au-dessus des <b>sommets égaux</b> (double top) et sous les <b>creux égaux</b>.</li><li>Au-dessus du plus haut et sous le plus bas de la veille et de la session asiatique.</li><li>Autour des chiffres ronds (3 850, 3 900…).</li></ul>
<h2>Le « sweep » (balayage)</h2><p>Le prix dépasse rapidement un sommet ou un creux évident (il déclenche les stops), puis repart violemment dans l'autre sens. Beaucoup de débutants se font sortir juste avant le vrai mouvement.</p>
<div class="box tip"><b class="t">Ce que ça change pour toi</b><ul><li>Ne place pas ton SL <b>exactement</b> sur un sommet/creux évident : ajoute une marge.</li><li>Un sweep de liquidité suivi d'un CHoCH dans une zone clé est un signal très surveillé.</li><li>Dans nos captures, « $$$ » désigne une zone de liquidité.</li></ul></div>`,
en:`<p>Big players need lots of counterparties to fill their orders. Where do they find them? Where small traders placed their <b>Stop Losses</b> and pending orders: that's <b>liquidity</b>.</p>
<h2>Where liquidity hides</h2><ul><li>Above <b>equal highs</b> (double top) and below <b>equal lows</b>.</li><li>Above the previous day's and Asian session's high, and below their low.</li><li>Around round numbers (3,850, 3,900…).</li></ul>
<h2>The sweep</h2><p>Price quickly pokes past an obvious high or low (triggering stops), then reverses sharply. Many beginners get stopped out right before the real move.</p>
<div class="box tip"><b class="t">What it means for you</b><ul><li>Don't put your SL <b>exactly</b> on an obvious high/low: add a buffer.</li><li>A liquidity sweep followed by a CHoCH at a key zone is a closely watched signal.</li><li>In our screenshots, "$$$" marks a liquidity zone.</li></ul></div>`}},
{t:{fr:"Premium, discount et OTE",en:"Premium, discount and OTE"},s:{fr:"Acheter « pas cher », vendre « cher ».",en:"Buy cheap, sell expensive."},
b:{fr:`<p>Trace un Fibonacci sur le dernier grand mouvement. Le niveau <b>50 %</b> coupe la zone en deux :</p>
<ul><li><b>Zone premium</b> (au-dessus de 50 %) : le prix est « cher ». C'est là qu'on préfère <b>vendre</b>.</li><li><b>Zone discount</b> (en dessous de 50 %) : le prix est « bon marché ». C'est là qu'on préfère <b>acheter</b>.</li></ul>
<h2>L'OTE (Optimal Trade Entry)</h2><p>La zone de retracement entre <b>62 % et 79 %</b> environ. C'est souvent là que le prix termine sa correction avant de repartir dans le sens de la tendance. Les niveaux 0,705 et 0,718 que tu vois sur nos graphiques (« SELL ZONE [0,718] », « BUY [OTE] ») sont dans cette zone.</p>
<div class="box ex"><b class="t">Exemple</b>L'Or baisse de 3 912 à 3 835, puis remonte. Fibonacci tracé du sommet au creux : l'OTE se situe environ entre 3 883 et 3 896. Si une zone d'offre H4 se trouve aussi là, c'est une zone de vente de qualité.</div>`,
en:`<p>Draw a Fibonacci on the last big move. The <b>50%</b> level splits it in two:</p>
<ul><li><b>Premium zone</b> (above 50%): price is "expensive". That's where we prefer to <b>sell</b>.</li><li><b>Discount zone</b> (below 50%): price is "cheap". That's where we prefer to <b>buy</b>.</li></ul>
<h2>OTE (Optimal Trade Entry)</h2><p>The retracement zone between roughly <b>62% and 79%</b>. Price often ends its pullback there before resuming the trend. The 0.705 and 0.718 levels on our charts ("SELL ZONE [0.718]", "BUY [OTE]") sit in this zone.</p>
<div class="box ex"><b class="t">Example</b>Gold drops from 3,912 to 3,835, then bounces. Fibonacci from the high to the low: the OTE sits roughly between 3,883 and 3,896. If an H4 supply zone is also there, it's a quality sell zone.</div>`}}
]},
{t:{fr:"Le Top-Down Analysis",en:"Top-down analysis"},d:{fr:"Analyser du grand vers le petit, étape par étape.",en:"Analyse from big to small, step by step."},
lessons:[
{t:{fr:"Le principe du top-down",en:"The top-down principle"},s:{fr:"Trois unités de temps, trois rôles.",en:"Three timeframes, three roles."},
b:{fr:`<p>Le <b>top-down analysis</b>, c'est analyser le marché <b>du haut vers le bas</b> : on commence par la grande unité de temps pour connaître la direction, puis on descend pour trouver la zone, et enfin l'entrée précise.</p>
<table><tr><th>Étape</th><th>Unité</th><th>Question</th><th>Résultat</th></tr>
<tr><td>① Biais</td><td>D1 / H4</td><td>Quelle est la tendance de fond ?</td><td>« Je cherche des SELL » ou « des BUY »</td></tr>
<tr><td>② Zone</td><td>H1 (ou M15)</td><td>Où le prix pourrait-il réagir ?</td><td>Une SELL ZONE ou une BUY ZONE</td></tr>
<tr><td>③ Entrée</td><td>M5 / M1</td><td>Le prix confirme-t-il dans ma zone ?</td><td>Entrée, SL, TP précis</td></tr></table>
<div class="box tip"><b class="t">Pourquoi c'est puissant</b>Tu trades dans le sens des gros acteurs (grande unité), à un endroit logique (zone), avec un petit Stop Loss (petite unité). Résultat : de meilleurs ratios risque/rendement.</div>
<div class="box warn"><b class="t">L'erreur classique</b>Ne regarder que le M1 ou le M5. Tu vois des signaux partout… souvent contre la tendance de fond.</div>`,
en:`<p><b>Top-down analysis</b> means analysing the market <b>from the top down</b>: start with the higher timeframe to know the direction, then go down to find the zone, and finally the precise entry.</p>
<table><tr><th>Step</th><th>Timeframe</th><th>Question</th><th>Result</th></tr>
<tr><td>① Bias</td><td>D1 / H4</td><td>What's the underlying trend?</td><td>"I'm looking for SELLs" or "BUYs"</td></tr>
<tr><td>② Zone</td><td>H1 (or M15)</td><td>Where could price react?</td><td>A SELL ZONE or BUY ZONE</td></tr>
<tr><td>③ Entry</td><td>M5 / M1</td><td>Is price confirming in my zone?</td><td>Precise entry, SL, TP</td></tr></table>
<div class="box tip"><b class="t">Why it's powerful</b>You trade with the big players (higher timeframe), at a logical place (zone), with a small Stop Loss (lower timeframe). Result: better risk/reward ratios.</div>
<div class="box warn"><b class="t">The classic mistake</b>Only looking at M1 or M5. You see signals everywhere… often against the bigger trend.</div>`}},
{t:{fr:"Étape 1 : le biais (D1 / H4)",en:"Step 1: the bias (D1 / H4)"},s:{fr:"Décider si on cherche des achats ou des ventes.",en:"Decide whether to look for buys or sells."},
b:{fr:`<ol class="steps"><li>Ouvre <b>XAUUSD en D1</b> sur TradingView. Zoome pour voir 3 à 6 mois.</li><li>Identifie la structure : HH/HL (haussier) ou LH/LL (baissier) ?</li><li>Marque les grandes zones (sommets et creux majeurs, zones d'offre/demande) avec un rectangle d'une couleur dédiée.</li><li>Passe en <b>H4</b> : même travail sur les 2 à 4 dernières semaines.</li><li>Écris ton biais en texte sur le graphique : « Biais : SELL tant que 3 912 n'est pas cassé ».</li></ol>
${chTD1('fr')}
<div class="box tip"><b class="t">Si D1 et H4 ne sont pas d'accord</b>Le H4 corrige peut-être contre le D1. Sois plus prudent, réduis ton risque ou attends que les deux s'alignent.</div>`,
en:`<ol class="steps"><li>Open <b>XAUUSD on D1</b> in TradingView. Zoom out to see 3 to 6 months.</li><li>Identify the structure: HH/HL (bullish) or LH/LL (bearish)?</li><li>Mark the big zones (major highs and lows, supply/demand) with a rectangle in a dedicated colour.</li><li>Switch to <b>H4</b>: same work on the last 2 to 4 weeks.</li><li>Write your bias on the chart: "Bias: SELL while 3,912 holds".</li></ol>
${chTD1('en')}
<div class="box tip"><b class="t">If D1 and H4 disagree</b>H4 may be correcting against D1. Be more careful, reduce your risk or wait for both to line up.</div>`}},
{t:{fr:"Étape 2 : la zone (H1)",en:"Step 2: the zone (H1)"},s:{fr:"Affiner l'endroit où on attend le prix.",en:"Refine where we wait for price."},
b:{fr:`<ol class="steps"><li>Passe en <b>H1</b>. Tes zones H4 sont toujours visibles.</li><li>Repère la zone H4 la plus proche dans le sens de ton biais (une SELL ZONE si tu es vendeur).</li><li>Affine-la sur H1 : la dernière base avant la chute, ou la zone OTE (62–79 %) du dernier mouvement.</li><li>Cherche la <b>confluence</b> : zone H4 + OTE + liquidité au-dessus d'un sommet égal…</li><li>Pose une <b>alerte</b> TradingView au bord de la zone. Tu n'as plus besoin de fixer l'écran.</li></ol>
${chTD2('fr')}
<div class="box ex"><b class="t">Ici</b>Le prix remonte dans la zone H4 (3 870–3 884). Juste au-dessus des derniers sommets, vers 3 879, se trouve de la liquidité ($$$) : le prix pourrait aller la chercher avant de baisser. On attend maintenant un signal sur M5.</div>`,
en:`<ol class="steps"><li>Switch to <b>H1</b>. Your H4 zones are still visible.</li><li>Find the nearest H4 zone in the direction of your bias (a SELL ZONE if you're a seller).</li><li>Refine it on H1: the last base before the drop, or the OTE zone (62–79%) of the last move.</li><li>Look for <b>confluence</b>: H4 zone + OTE + liquidity above equal highs…</li><li>Set a TradingView <b>alert</b> at the edge of the zone. No more staring at the screen.</li></ol>
${chTD2('en')}
<div class="box ex"><b class="t">Here</b>Price rallies into the H4 zone (3,870–3,884). Just above the latest highs, near 3,879, sits liquidity ($$$): price may grab it before dropping. Now we wait for an M5 signal.</div>`}},
{t:{fr:"Étape 3 : l'entrée (M5 / M1)",en:"Step 3: the entry (M5 / M1)"},s:{fr:"Attendre la confirmation et poser le trade.",en:"Wait for confirmation and place the trade."},
b:{fr:`<ol class="steps"><li>Quand l'alerte sonne, passe en <b>M5</b> (ou M1).</li><li>Dans la zone, le prix monte encore un peu… <b>n'entre pas tout de suite</b>.</li><li>Attends le <b>CHoCH</b> : le prix casse le dernier creux M5. Les vendeurs reprennent la main.</li><li>Entrée au marché ou sur le petit retour (retest) du niveau cassé.</li><li><b>SL</b> au-dessus du sommet de la zone (avec une marge). <b>TP</b> sur le prochain creux ou la prochaine zone de demande.</li><li>Calcule ton lot (règle du 1 %), puis passe l'ordre sur MT5.</li></ol>
${chTD3('fr')}
<div class="box ex"><b class="t">Le plan</b>SELL 3 872 · SL 3 882 (10 $ = 100 pips) · TP 3 850 (22 $ = 220 pips). Ratio ≈ <b>1:2,2</b>. Capital 1 000 $, risque 1 % = 10 $ → 10 ÷ (100 × 10) = <b>0,01 lot</b>.</div>`,
en:`<ol class="steps"><li>When the alert fires, switch to <b>M5</b> (or M1).</li><li>Inside the zone, price pushes a little higher… <b>don't enter yet</b>.</li><li>Wait for the <b>CHoCH</b>: price breaks the last M5 low. Sellers take over.</li><li>Enter at market or on the small retest of the broken level.</li><li><b>SL</b> above the zone's high (with a buffer). <b>TP</b> at the next low or demand zone.</li><li>Calculate your lot (1% rule), then place the order on MT5.</li></ol>
${chTD3('en')}
<div class="box ex"><b class="t">The plan</b>SELL 3,872 · SL 3,882 ($10 = 100 pips) · TP 3,850 ($22 = 220 pips). Ratio ≈ <b>1:2.2</b>. Capital $1,000, 1% risk = $10 → 10 ÷ (100 × 10) = <b>0.01 lot</b>.</div>`}},
{t:{fr:"Ta checklist top-down",en:"Your top-down checklist"},s:{fr:"À cocher avant chaque trade.",en:"Tick it before every trade."},
b:{fr:`<div class="check" data-k="td">
<label><input type="checkbox"> <b>D1/H4</b> : j'ai identifié la structure et écrit mon biais (BUY ou SELL).</label>
<label><input type="checkbox"> <b>D1/H4</b> : j'ai marqué les zones majeures et la liquidité évidente.</label>
<label><input type="checkbox"> <b>Calendrier</b> : pas d'annonce forte dans les 30 prochaines minutes.</label>
<label><input type="checkbox"> <b>H1</b> : le prix est dans (ou proche de) une zone dans le sens de mon biais.</label>
<label><input type="checkbox"> <b>H1</b> : il y a au moins une confluence (OTE, liquidité, ligne de tendance…).</label>
<label><input type="checkbox"> <b>M5/M1</b> : j'ai un signal confirmé (CHoCH, avalement, étoile filante/marteau…).</label>
<label><input type="checkbox"> <b>Plan</b> : entrée, SL et TP sont fixés, ratio d'au moins 1:2.</label>
<label><input type="checkbox"> <b>Risque</b> : mon lot correspond à 1 % maximum de mon capital.</label>
<label><input type="checkbox"> <b>Moi</b> : je suis calme, je ne cherche pas à « me refaire ».</label></div>
<p class="checkres"></p>
<div class="box tip"><b class="t">Règle</b>S'il manque une seule case, <b>pas de trade</b>. Le marché sera encore là demain.</div>`,
en:`<div class="check" data-k="td">
<label><input type="checkbox"> <b>D1/H4</b>: I've identified the structure and written my bias (BUY or SELL).</label>
<label><input type="checkbox"> <b>D1/H4</b>: I've marked the major zones and obvious liquidity.</label>
<label><input type="checkbox"> <b>Calendar</b>: no high-impact news in the next 30 minutes.</label>
<label><input type="checkbox"> <b>H1</b>: price is in (or near) a zone in the direction of my bias.</label>
<label><input type="checkbox"> <b>H1</b>: there's at least one confluence (OTE, liquidity, trend line…).</label>
<label><input type="checkbox"> <b>M5/M1</b>: I have a confirmed signal (CHoCH, engulfing, shooting star/hammer…).</label>
<label><input type="checkbox"> <b>Plan</b>: entry, SL and TP are set, ratio of at least 1:2.</label>
<label><input type="checkbox"> <b>Risk</b>: my lot equals 1% of my capital at most.</label>
<label><input type="checkbox"> <b>Me</b>: I'm calm, I'm not trying to "win it back".</label></div>
<p class="checkres"></p>
<div class="box tip"><b class="t">Rule</b>If a single box is missing, <b>no trade</b>. The market will still be there tomorrow.</div>`}}
]}
]};
