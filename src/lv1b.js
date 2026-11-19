const CH_B=[
/* ---------- CHAPITRE 4 ---------- */
{t:{fr:"Les ordres de trading",en:"Trading orders"},d:{fr:"Entrer, sortir et protéger ses trades.",en:"Enter, exit and protect your trades."},
lessons:[
{t:{fr:"L'ordre au marché",en:"Market order"},s:{fr:"Entrer tout de suite, au prix actuel.",en:"Enter now, at the current price."},
b:{fr:`<p>Un <b>ordre au marché</b> est exécuté <b>immédiatement</b> au meilleur prix disponible.</p>
<ul><li><b>BUY</b> au marché : tu achètes au prix <b>Ask</b>.</li><li><b>SELL</b> au marché : tu vends au prix <b>Bid</b>.</li></ul>
<h2>Quand l'utiliser</h2>
<p>Quand le prix est déjà dans ta zone d'entrée et que tu veux être dans le mouvement tout de suite. C'est souvent le cas quand un signal dit « SELL GOLD NOW ».</p>
<h2>Le glissement (slippage)</h2>
<p>Pendant les mouvements très rapides (annonces), ton ordre peut être exécuté quelques pips plus loin que le prix affiché. C'est le <b>slippage</b>. Il peut être en ta faveur ou contre toi.</p>
<div class="box tip"><b class="t">Sur MT5</b>Nouvel ordre → Type : <b>Exécution au marché</b> → règle Volume, SL et TP → <b>Vendre</b> ou <b>Acheter</b>.</div>`,
en:`<p>A <b>market order</b> is filled <b>immediately</b> at the best available price.</p>
<ul><li><b>BUY</b> at market: you buy at the <b>Ask</b> price.</li><li><b>SELL</b> at market: you sell at the <b>Bid</b> price.</li></ul>
<h2>When to use it</h2>
<p>When price is already in your entry zone and you want to be in the move right away. That's often the case when a signal says "SELL GOLD NOW".</p>
<h2>Slippage</h2>
<p>During very fast moves (news), your order may fill a few pips away from the displayed price. That's <b>slippage</b>. It can be in your favour or against you.</p>
<div class="box tip"><b class="t">On MT5</b>New order → Type: <b>Market execution</b> → set Volume, SL and TP → <b>Sell</b> or <b>Buy</b>.</div>`}},
{t:{fr:"Les ordres en attente",en:"Pending orders"},s:{fr:"Buy Limit, Sell Limit, Buy Stop, Sell Stop.",en:"Buy Limit, Sell Limit, Buy Stop, Sell Stop."},
b:{fr:`<p>Un <b>ordre en attente</b> ne s'exécute que si le prix atteint le niveau que tu as choisi. Pratique pour ne pas rester devant l'écran.</p>
<table><tr><th>Ordre</th><th>Placé…</th><th>Idée</th></tr>
<tr><td>🟢 <b>Buy Limit</b></td><td>sous le prix actuel</td><td>« J'achète si le prix redescend sur mon support. »</td></tr>
<tr><td>🔴 <b>Sell Limit</b></td><td>au-dessus du prix actuel</td><td>« Je vends si le prix remonte sur ma résistance. »</td></tr>
<tr><td>🟢 <b>Buy Stop</b></td><td>au-dessus du prix actuel</td><td>« J'achète si le prix casse ce niveau vers le haut. »</td></tr>
<tr><td>🔴 <b>Sell Stop</b></td><td>sous le prix actuel</td><td>« Je vends si le prix casse ce niveau vers le bas. »</td></tr></table>
<div class="box ex"><b class="t">Exemple</b>L'or est à 3 865 et le coach repère une zone de vente vers 3 871. Tu places un <b>Sell Limit à 3 871</b> avec ton SL et ton TP. Si le prix monte jusqu'à 3 871, ton ordre se déclenche tout seul.</div>
<div class="box tip"><b class="t">À retenir</b><b>Limit</b> = je veux un meilleur prix (retour sur une zone). <b>Stop</b> = je veux confirmer la cassure.</div>`,
en:`<p>A <b>pending order</b> only fills if price reaches the level you chose. Handy when you can't stay in front of the screen.</p>
<table><tr><th>Order</th><th>Placed…</th><th>Idea</th></tr>
<tr><td>🟢 <b>Buy Limit</b></td><td>below current price</td><td>"I buy if price drops back to my support."</td></tr>
<tr><td>🔴 <b>Sell Limit</b></td><td>above current price</td><td>"I sell if price rises back to my resistance."</td></tr>
<tr><td>🟢 <b>Buy Stop</b></td><td>above current price</td><td>"I buy if price breaks this level upward."</td></tr>
<tr><td>🔴 <b>Sell Stop</b></td><td>below current price</td><td>"I sell if price breaks this level downward."</td></tr></table>
<div class="box ex"><b class="t">Example</b>Gold is at 3,865 and the coach spots a sell zone around 3,871. You place a <b>Sell Limit at 3,871</b> with your SL and TP. If price rises to 3,871, your order triggers by itself.</div>
<div class="box tip"><b class="t">Remember</b><b>Limit</b> = I want a better price (return to a zone). <b>Stop</b> = I want to confirm the breakout.</div>`}},
{t:{fr:"Stop Loss et Take Profit",en:"Stop Loss and Take Profit"},s:{fr:"Les deux protections de chaque trade.",en:"The two safeguards of every trade."},
b:{fr:`<h2>Le Stop Loss (SL)</h2>
<p>Le niveau où ton trade se ferme automatiquement <b>en perte</b> si le marché va contre toi. Il limite les dégâts.</p>
<ul><li>BUY : le SL est <b>sous</b> le prix d'entrée.</li><li>SELL : le SL est <b>au-dessus</b> du prix d'entrée.</li><li>Place-le là où ton idée n'est plus valable (au-delà de la zone, pas au hasard).</li></ul>
<h2>Le Take Profit (TP)</h2>
<p>Le niveau où ton trade se ferme automatiquement <b>en gain</b>. Il évite de regarder un trade gagnant se transformer en perte.</p>
<h2>TP1, TP2, TP3</h2>
<p>Certains traders sortent en plusieurs fois : une partie au TP1, une autre au TP2, etc. Après le TP1, on remonte souvent le SL au prix d'entrée (« <b>break-even</b> ») pour ne plus pouvoir perdre sur ce trade.</p>
<div class="box warn"><b class="t">Règle non négociable</b>Pas de trade sans Stop Loss. Et on ne recule jamais son SL pour « laisser respirer » un trade perdant.</div>`,
en:`<h2>Stop Loss (SL)</h2>
<p>The level where your trade closes automatically <b>at a loss</b> if the market goes against you. It limits the damage.</p>
<ul><li>BUY: the SL is <b>below</b> the entry price.</li><li>SELL: the SL is <b>above</b> the entry price.</li><li>Place it where your idea is no longer valid (beyond the zone, not at random).</li></ul>
<h2>Take Profit (TP)</h2>
<p>The level where your trade closes automatically <b>in profit</b>. It stops a winning trade from turning into a loss.</p>
<h2>TP1, TP2, TP3</h2>
<p>Some traders exit in steps: part at TP1, part at TP2, and so on. After TP1, the SL is often moved to the entry price ("<b>break-even</b>") so the trade can no longer lose.</p>
<div class="box warn"><b class="t">Non-negotiable rule</b>No trade without a Stop Loss. And never move your SL further away to "give room" to a losing trade.</div>`}},
{t:{fr:"Le Trailing Stop",en:"Trailing Stop"},s:{fr:"Un Stop Loss qui suit le prix.",en:"A Stop Loss that follows price."},
b:{fr:`<p>Le <b>Trailing Stop</b> (stop suiveur) déplace automatiquement ton Stop Loss quand le prix va dans ton sens. Il garde toujours la même distance avec le prix, mais <b>ne recule jamais</b>.</p>
<div class="box ex"><b class="t">Exemple</b>BUY Or à 3 860 avec un trailing de 50 pips (5 $).<br>Le prix monte à 3 870 → ton SL monte à 3 865.<br>Le prix monte à 3 880 → ton SL monte à 3 875.<br>Le prix redescend → ton SL reste à 3 875 : tu sécurises au moins +15 $ par once.</div>
<h2>Avantages et limites</h2>
<ul><li>✅ Protège les gains dans les grosses tendances.</li><li>✅ Pas besoin de surveiller en permanence.</li><li>❌ Dans un marché agité, il peut te faire sortir trop tôt.</li><li>❌ Sur MT5, le trailing ne fonctionne que si ta plateforme reste <b>ouverte et connectée</b>.</li></ul>
<div class="box tip"><b class="t">Sur MT5 (PC)</b>Clic droit sur le trade ouvert → <b>Trailing stop</b> → choisis la distance.</div>`,
en:`<p>A <b>Trailing Stop</b> automatically moves your Stop Loss when price goes your way. It keeps the same distance from price, but <b>never moves back</b>.</p>
<div class="box ex"><b class="t">Example</b>BUY Gold at 3,860 with a 50-pip ($5) trailing stop.<br>Price rises to 3,870 → your SL moves to 3,865.<br>Price rises to 3,880 → your SL moves to 3,875.<br>Price falls back → your SL stays at 3,875: you lock in at least +$15 per ounce.</div>
<h2>Pros and limits</h2>
<ul><li>✅ Protects profits in big trends.</li><li>✅ No need to watch all the time.</li><li>❌ In a choppy market it can take you out too early.</li><li>❌ On MT5, trailing only works while your platform stays <b>open and connected</b>.</li></ul>
<div class="box tip"><b class="t">On MT5 (PC)</b>Right-click the open trade → <b>Trailing stop</b> → choose the distance.</div>`}}
]},
/* ---------- CHAPITRE 5 ---------- */
{t:{fr:"Quand trader ?",en:"When to trade?"},d:{fr:"Les sessions, les chevauchements et les annonces.",en:"Sessions, overlaps and news."},
lessons:[
{t:{fr:"Les 4 sessions (heure de Lomé)",en:"The 4 sessions (GMT)"},s:{fr:"Un marché ouvert 24 h/24 du lundi au vendredi.",en:"A market open 24 hours, Monday to Friday."},
b:{fr:`<p>Le Forex ouvre le <b>dimanche soir</b> (vers 22:00, heure de Lomé) et ferme le <b>vendredi soir</b> (vers 22:00). Entre les deux, il tourne sans arrêt en suivant les grandes places financières.</p>
<table><tr><th>Session</th><th>Ouverture</th><th>Fermeture</th><th>Caractère</th></tr>
<tr><td>🇦🇺 Sydney</td><td>22:00</td><td>07:00</td><td>Calme</td></tr>
<tr><td>🇯🇵 Tokyo</td><td>00:00</td><td>09:00</td><td>Calme à moyen, actif sur le yen</td></tr>
<tr><td>🇬🇧 Londres</td><td>08:00</td><td>17:00</td><td>Très actif</td></tr>
<tr><td>🇺🇸 New York</td><td>13:00</td><td>22:00</td><td>Très actif jusqu'à ~17:00</td></tr></table>
<p><i>Horaires d'hiver (novembre à mars). En été, les sessions de Londres et New York commencent une heure plus tôt.</i></p>
<div class="box ex"><b class="t">Chez SERGIO FX</b>Session 1 : <b>08:00 – 11:30</b> (Londres) · Session 2 : <b>13:30 – 16:30</b> (US).</div>`,
en:`<p>Forex opens on <b>Sunday evening</b> (around 22:00 GMT) and closes on <b>Friday evening</b> (around 22:00). In between, it runs non-stop following the major financial centres.</p>
<table><tr><th>Session</th><th>Open</th><th>Close</th><th>Character</th></tr>
<tr><td>🇦🇺 Sydney</td><td>22:00</td><td>07:00</td><td>Quiet</td></tr>
<tr><td>🇯🇵 Tokyo</td><td>00:00</td><td>09:00</td><td>Quiet to medium, active on yen</td></tr>
<tr><td>🇬🇧 London</td><td>08:00</td><td>17:00</td><td>Very active</td></tr>
<tr><td>🇺🇸 New York</td><td>13:00</td><td>22:00</td><td>Very active until ~17:00</td></tr></table>
<p><i>Winter hours (November to March). In summer, the London and New York sessions start one hour earlier.</i></p>
<div class="box ex"><b class="t">At SERGIO FX</b>Session 1: <b>08:00 – 11:30</b> (London) · Session 2: <b>13:30 – 16:30</b> (US).</div>`}},
{t:{fr:"Les chevauchements de sessions",en:"Session overlaps"},s:{fr:"Les heures où le marché bouge le plus.",en:"The hours when the market moves most."},
b:{fr:`<p>Quand deux grandes sessions sont ouvertes en même temps, il y a plus de traders, plus de volume… et plus de mouvement.</p>
<h2>Londres + New York (13:00 – 17:00)</h2>
<p>Le chevauchement le plus important de la journée. Les grandes annonces américaines tombent souvent à <b>13:30</b>. C'est souvent là que l'Or fait ses plus gros mouvements.</p>
<h2>Tokyo + Londres (08:00 – 09:00)</h2>
<p>Plus court et moins actif, mais l'ouverture de Londres peut lancer la tendance de la journée.</p>
<h2>Ce que ça veut dire pour toi</h2>
<ul><li>Plus de mouvement = plus d'opportunités, mais aussi des Stop Loss touchés plus vite.</li><li>Les spreads sont généralement plus bas pendant ces périodes actives.</li><li>En dehors, le prix fait souvent du « range » (il tourne en rond).</li></ul>`,
en:`<p>When two major sessions are open at the same time, there are more traders, more volume… and more movement.</p>
<h2>London + New York (13:00 – 17:00)</h2>
<p>The most important overlap of the day. Major US news is often released at <b>13:30 GMT</b>. Gold often makes its biggest moves here.</p>
<h2>Tokyo + London (08:00 – 09:00)</h2>
<p>Shorter and less active, but the London open can set the day's trend.</p>
<h2>What it means for you</h2>
<ul><li>More movement = more opportunities, but Stop Losses also get hit faster.</li><li>Spreads are usually lower during these active periods.</li><li>Outside them, price often ranges (moves sideways).</li></ul>`}},
{t:{fr:"Le calendrier économique",en:"The economic calendar"},s:{fr:"Les annonces qui font exploser le marché.",en:"The news that makes the market explode."},
b:{fr:`<p>Le <b>calendrier économique</b> liste les publications prévues de la semaine (inflation, emploi, taux…), avec leur heure et leur niveau d'impact. Chaque matin, nous publions celles du jour dans le groupe.</p>
<h2>Les annonces à fort impact sur l'Or</h2>
<table><tr><th>Annonce</th><th>Ce qu'elle mesure</th><th>Quand (heure de Lomé, hiver)</th></tr>
<tr><td><b>NFP</b> (emploi US)</td><td>Créations d'emplois aux États-Unis</td><td>1ᵉʳ vendredi du mois, 13:30</td></tr>
<tr><td><b>CPI</b> (inflation)</td><td>Hausse des prix</td><td>Mi-mois, 13:30</td></tr>
<tr><td><b>Décision de la Fed (FOMC)</b></td><td>Taux d'intérêt américains</td><td>8 fois par an, 19:00</td></tr>
<tr><td><b>Ventes au détail</b></td><td>Consommation des ménages</td><td>Mi-mois, 13:30</td></tr>
<tr><td><b>Discours</b> (Fed, BCE…)</td><td>Indices sur la politique future</td><td>Variable</td></tr></table>
<div class="box warn"><b class="t">Pendant l'annonce</b>Spread qui s'élargit, prix qui fait des allers-retours violents, slippage. Les débutants devraient éviter d'ouvrir un trade quelques minutes avant et après.</div>
<p>Sites utiles : Forex Factory, Investing.com (calendrier économique).</p>`,
en:`<p>The <b>economic calendar</b> lists the week's scheduled releases (inflation, jobs, rates…), with their time and impact level. Every morning we post the day's events in the group.</p>
<h2>High-impact news for Gold</h2>
<table><tr><th>Release</th><th>What it measures</th><th>When (GMT, winter)</th></tr>
<tr><td><b>NFP</b> (US jobs)</td><td>US job creation</td><td>1st Friday of the month, 13:30</td></tr>
<tr><td><b>CPI</b> (inflation)</td><td>Rising prices</td><td>Mid-month, 13:30</td></tr>
<tr><td><b>Fed decision (FOMC)</b></td><td>US interest rates</td><td>8 times a year, 19:00</td></tr>
<tr><td><b>Retail sales</b></td><td>Household spending</td><td>Mid-month, 13:30</td></tr>
<tr><td><b>Speeches</b> (Fed, ECB…)</td><td>Hints about future policy</td><td>Varies</td></tr></table>
<div class="box warn"><b class="t">During the release</b>Wider spreads, violent back-and-forth moves, slippage. Beginners should avoid opening a trade a few minutes before and after.</div>
<p>Useful sites: Forex Factory, Investing.com (economic calendar).</p>`}},
{t:{fr:"Les meilleurs et les pires moments",en:"Best and worst times to trade"},s:{fr:"Organiser ta journée de trading.",en:"Plan your trading day."},
b:{fr:`<h2>✅ Les bons moments</h2>
<ul><li>Ouverture de <b>Londres</b> (08:00 – 11:00).</li><li>Chevauchement <b>Londres + New York</b> (13:30 – 16:30), hors minutes d'annonce.</li><li>Du <b>mardi au jeudi</b> : souvent les jours les plus réguliers.</li></ul>
<h2>❌ Les moments à éviter</h2>
<ul><li>Juste avant et après une grosse annonce (NFP, CPI, Fed).</li><li>La nuit et la session asiatique, pour l'Or (peu de volume, spreads plus larges).</li><li>Le <b>lundi matin</b> (marché qui démarre) et le <b>vendredi après-midi</b> (les gros acteurs ferment leurs positions).</li><li>Les jours fériés américains ou anglais.</li><li>Quand tu es fatigué, énervé ou que tu veux « te refaire » après une perte.</li></ul>
<div class="box tip"><b class="t">Routine conseillée</b>07:00 : lire le calendrier du jour · 08:00 : session Londres · 11:30 : pause · 13:30 : session US · 16:30 : on arrête et on note ses trades dans un journal.</div>`,
en:`<h2>✅ Good times</h2>
<ul><li>The <b>London</b> open (08:00 – 11:00 GMT).</li><li>The <b>London + New York</b> overlap (13:30 – 16:30), outside news minutes.</li><li><b>Tuesday to Thursday</b>: often the most consistent days.</li></ul>
<h2>❌ Times to avoid</h2>
<ul><li>Just before and after big news (NFP, CPI, Fed).</li><li>Night and the Asian session, for Gold (low volume, wider spreads).</li><li><b>Monday morning</b> (market warming up) and <b>Friday afternoon</b> (big players closing positions).</li><li>US or UK public holidays.</li><li>When you're tired, angry or trying to "win it back" after a loss.</li></ul>
<div class="box tip"><b class="t">Suggested routine</b>07:00: read the day's calendar · 08:00: London session · 11:30: break · 13:30: US session · 16:30: stop and log your trades in a journal.</div>`}}
]},
/* ---------- CHAPITRE 6 ---------- */
{t:{fr:"Qui trade le Forex ?",en:"Who trades Forex?"},d:{fr:"Les acteurs du marché et ta place parmi eux.",en:"Market players and your place among them."},
lessons:[
{t:{fr:"Banques centrales et institutions",en:"Central banks and institutions"},s:{fr:"Les acteurs qui font les grands mouvements.",en:"The players who make the big moves."},
b:{fr:`<h2>Les banques centrales</h2>
<p>Fed (États-Unis), BCE (zone euro), Banque d'Angleterre, Banque du Japon… Elles fixent les <b>taux d'intérêt</b> et pilotent l'économie. Une hausse des taux attire les capitaux et renforce souvent la devise ; une baisse l'affaiblit. Leurs annonces font bouger tout le marché, et l'Or en particulier.</p>
<h2>Les grandes banques</h2>
<p>Elles échangent des volumes énormes entre elles sur le <b>marché interbancaire</b> et fournissent les prix aux autres acteurs.</p>
<h2>Les fonds et les entreprises</h2>
<ul><li><b>Fonds d'investissement</b> : spéculent ou protègent leurs placements contre les variations de change.</li><li><b>Entreprises</b> : changent des devises pour payer leurs fournisseurs ou rapatrier leurs ventes à l'étranger.</li></ul>
<div class="box tip"><b class="t">Pourquoi c'est utile</b>Les zones où ces gros acteurs achètent ou vendent laissent des traces sur le graphique. Les repérer, c'est le cœur de notre travail en live.</div>`,
en:`<h2>Central banks</h2>
<p>The Fed (US), ECB (euro area), Bank of England, Bank of Japan… They set <b>interest rates</b> and steer the economy. A rate hike attracts capital and often strengthens the currency; a cut weakens it. Their announcements move the whole market, and Gold in particular.</p>
<h2>Big banks</h2>
<p>They trade huge volumes with each other on the <b>interbank market</b> and supply prices to other players.</p>
<h2>Funds and companies</h2>
<ul><li><b>Investment funds</b>: speculate or protect their investments against currency swings.</li><li><b>Companies</b>: exchange currencies to pay suppliers or bring foreign sales home.</li></ul>
<div class="box tip"><b class="t">Why it's useful</b>The zones where these big players buy or sell leave footprints on the chart. Spotting them is the core of our live work.</div>`}},
{t:{fr:"Le rôle du broker",en:"The broker's role"},s:{fr:"L'intermédiaire entre toi et le marché.",en:"The middleman between you and the market."},
b:{fr:`<p>En tant que particulier, tu ne peux pas aller directement sur le marché interbancaire. Le <b>broker</b> (courtier) fait le lien.</p>
<h2>Ce que fait le broker</h2>
<ul><li>Il t'ouvre un <b>compte de trading</b> et garde ton argent.</li><li>Il te donne une <b>plateforme</b> (MetaTrader 5, application mobile).</li><li>Il affiche les <b>prix</b> et exécute tes <b>ordres</b>.</li><li>Il te propose un <b>effet de levier</b>.</li></ul>
<h2>Comment il gagne de l'argent</h2>
<p>Principalement via le <b>spread</b>, parfois des <b>commissions</b> par lot, et le <b>swap</b> sur les positions gardées la nuit.</p>
<h2>Les points de vigilance</h2>
<ul><li>Vérifie qu'il est <b>régulé</b> par une autorité financière.</li><li>Teste un petit <b>retrait</b> au début pour vérifier que tout fonctionne.</li><li>Ne donne jamais tes identifiants à quelqu'un qui promet de « gérer ton compte ».</li></ul>
<div class="box ex"><b class="t">Notre broker</b>Nous utilisons <b>HFM (HF Markets)</b>. Le lien d'inscription et le guide sont disponibles en bas de cette page.</div>`,
en:`<p>As an individual you can't go straight to the interbank market. The <b>broker</b> is the link.</p>
<h2>What the broker does</h2>
<ul><li>Opens a <b>trading account</b> for you and holds your money.</li><li>Gives you a <b>platform</b> (MetaTrader 5, mobile app).</li><li>Shows <b>prices</b> and executes your <b>orders</b>.</li><li>Offers you <b>leverage</b>.</li></ul>
<h2>How it makes money</h2>
<p>Mainly through the <b>spread</b>, sometimes <b>commissions</b> per lot, and the <b>swap</b> on positions held overnight.</p>
<h2>Things to watch</h2>
<ul><li>Check it is <b>regulated</b> by a financial authority.</li><li>Test a small <b>withdrawal</b> early to check everything works.</li><li>Never give your login to someone promising to "manage your account".</li></ul>
<div class="box ex"><b class="t">Our broker</b>We use <b>HFM (HF Markets)</b>. The sign-up link and guide are at the bottom of this page.</div>`}},
{t:{fr:"Le trader particulier",en:"The retail trader"},s:{fr:"Toi : tes forces et tes faiblesses.",en:"You: your strengths and weaknesses."},
b:{fr:`<p>Les traders particuliers représentent une petite part du volume total. On ne peut pas faire bouger le marché… mais on a des avantages.</p>
<h2>Tes forces</h2>
<ul><li><b>Flexibilité</b> : tu n'es pas obligé de trader tous les jours. Tu peux attendre le meilleur moment.</li><li><b>Petite taille</b> : tu entres et sors facilement, sans faire bouger le prix.</li><li><b>Pas de patron</b> : tu choisis ta méthode et ton rythme.</li></ul>
<h2>Tes faiblesses</h2>
<ul><li><b>Les émotions</b> : peur, avidité, envie de se refaire.</li><li><b>Le manque de formation</b> : beaucoup commencent sans comprendre le levier.</li><li><b>Le surtrading</b> : prendre trop de trades, trop gros.</li></ul>
<div class="box tip"><b class="t">Le profil qui réussit</b>Il apprend, s'entraîne en démo, suit un plan, risque peu par trade, tient un journal et accepte les pertes comme faisant partie du métier.</div>`,
en:`<p>Retail traders are a small part of total volume. We can't move the market… but we have advantages.</p>
<h2>Your strengths</h2>
<ul><li><b>Flexibility</b>: you don't have to trade every day. You can wait for the best moment.</li><li><b>Small size</b>: you get in and out easily without moving price.</li><li><b>No boss</b>: you choose your method and pace.</li></ul>
<h2>Your weaknesses</h2>
<ul><li><b>Emotions</b>: fear, greed, the urge to win it back.</li><li><b>Lack of training</b>: many start without understanding leverage.</li><li><b>Overtrading</b>: too many trades, too big.</li></ul>
<div class="box tip"><b class="t">The profile that succeeds</b>Learns, practises on demo, follows a plan, risks little per trade, keeps a journal and accepts losses as part of the job.</div>`}}
]}
];
