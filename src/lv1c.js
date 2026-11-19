const CH_C=[
/* ---------- CHAPITRE 7 ---------- */
{t:{fr:"Pourquoi trader le Forex ?",en:"Why trade Forex?"},d:{fr:"Les avantages et les vrais risques.",en:"The advantages and the real risks."},
lessons:[
{t:{fr:"Les avantages",en:"The advantages"},s:{fr:"Ce qui attire autant de traders.",en:"What attracts so many traders."},
b:{fr:`<ul><li><b>Un marché immense et liquide</b> : on entre et on sort facilement, avec des frais faibles.</li><li><b>Ouvert 24 h/24 en semaine</b> : tu peux trader avant ou après ton travail ou tes cours.</li><li><b>Gagner à la hausse comme à la baisse</b> : un SELL est aussi simple qu'un BUY.</li><li><b>Petit capital de départ</b> : on peut commencer avec quelques dizaines de dollars en micro lots.</li><li><b>Compte démo gratuit</b> : on s'entraîne avec de l'argent virtuel.</li><li><b>Tout depuis ton téléphone</b> : MT5 fonctionne sur Android et iPhone.</li><li><b>Beaucoup de ressources</b> : formations, calendrier, communauté.</li></ul>
<div class="box tip"><b class="t">Mais…</b>Accessible ne veut pas dire facile. Le trading est une compétence qui se travaille, comme un métier.</div>`,
en:`<ul><li><b>A huge, liquid market</b>: easy to get in and out, with low costs.</li><li><b>Open 24 hours on weekdays</b>: trade before or after work or class.</li><li><b>Profit from rises and falls</b>: a SELL is as simple as a BUY.</li><li><b>Small starting capital</b>: start with a few tens of dollars in micro lots.</li><li><b>Free demo account</b>: practise with virtual money.</li><li><b>Everything from your phone</b>: MT5 runs on Android and iPhone.</li><li><b>Plenty of resources</b>: courses, calendar, community.</li></ul>
<div class="box tip"><b class="t">But…</b>Accessible doesn't mean easy. Trading is a skill you work on, like a profession.</div>`}},
{t:{fr:"Les risques réels",en:"The real risks"},s:{fr:"Ce que personne ne te dit sur les réseaux.",en:"What nobody tells you on social media."},
b:{fr:`<ul><li><b>La majorité des débutants perdent de l'argent.</b> Les brokers régulés en Europe doivent d'ailleurs afficher le pourcentage de clients qui perdent : il est souvent supérieur à 70 %.</li><li><b>L'effet de levier</b> multiplie les pertes autant que les gains.</li><li><b>La volatilité</b> : l'Or peut bouger de 20 $ en quelques minutes pendant une annonce.</li><li><b>Les émotions</b> : la peur fait sortir trop tôt, l'avidité fait rester trop longtemps, la colère fait « revenge trader ».</li><li><b>Les frais</b> : spread, commissions et swap grignotent les petits gains.</li></ul>
<div class="box warn"><b class="t">Règle de base</b>Ne trade qu'avec de l'argent que tu peux te permettre de perdre. Jamais l'argent du loyer, de la nourriture ou des études. Jamais d'argent emprunté.</div>`,
en:`<ul><li><b>Most beginners lose money.</b> Regulated brokers in Europe must even display the share of clients who lose: it's often over 70%.</li><li><b>Leverage</b> magnifies losses as much as gains.</li><li><b>Volatility</b>: Gold can move $20 in minutes during news.</li><li><b>Emotions</b>: fear makes you exit too early, greed makes you stay too long, anger makes you "revenge trade".</li><li><b>Costs</b>: spread, commissions and swap eat into small gains.</li></ul>
<div class="box warn"><b class="t">Basic rule</b>Only trade money you can afford to lose. Never rent, food or school money. Never borrowed money.</div>`}}
]},
/* ---------- CHAPITRE 8 ---------- */
{t:{fr:"Marge et effet de levier",en:"Margin and leverage"},d:{fr:"Comprendre ton compte de marge pour ne pas le brûler.",en:"Understand your margin account so you don't blow it."},
lessons:[
{t:{fr:"Le levier expliqué simplement",en:"Leverage made simple"},s:{fr:"Contrôler une grosse position avec peu d'argent.",en:"Control a big position with little money."},
b:{fr:`<p>L'<b>effet de levier</b> permet d'ouvrir une position plus grosse que l'argent présent sur ton compte. Le broker « prête » la différence.</p>
<table><tr><th>Levier</th><th>Avec 100 $, tu contrôles…</th></tr><tr><td>1:50</td><td>5 000 $</td></tr><tr><td>1:100</td><td>10 000 $</td></tr><tr><td>1:500</td><td>50 000 $</td></tr></table>
<h2>Une arme à double tranchant</h2>
<div class="box ex"><b class="t">Exemple</b>Compte de 100 $. Tu ouvres 0,10 lot sur l'Or (10 onces ≈ 38 600 $ de valeur). Un mouvement de 10 $ contre toi = <b>−100 $</b> : ton compte est vidé.<br>Avec 0,01 lot, le même mouvement = −10 $.</div>
<p>Le levier ne change pas ton analyse. Il change <b>la taille de tes gains et de tes pertes</b>. Un levier élevé n'est pas dangereux en soi : c'est la <b>taille de lot</b> trop grosse qui l'est.</p>
<div class="box tip"><b class="t">Conseil</b>Choisis ta taille de lot avec la règle du 1 % (chapitre 9), pas en fonction du levier disponible.</div>`,
en:`<p><b>Leverage</b> lets you open a position larger than the money in your account. The broker "lends" the difference.</p>
<table><tr><th>Leverage</th><th>With $100 you control…</th></tr><tr><td>1:50</td><td>$5,000</td></tr><tr><td>1:100</td><td>$10,000</td></tr><tr><td>1:500</td><td>$50,000</td></tr></table>
<h2>A double-edged sword</h2>
<div class="box ex"><b class="t">Example</b>$100 account. You open 0.10 lot on Gold (10 ounces ≈ $38,600 of value). A $10 move against you = <b>−$100</b>: your account is wiped.<br>With 0.01 lot, the same move = −$10.</div>
<p>Leverage doesn't change your analysis. It changes <b>the size of your wins and losses</b>. High leverage isn't dangerous in itself: an oversized <b>lot</b> is.</p>
<div class="box tip"><b class="t">Tip</b>Choose your lot size with the 1% rule (chapter 9), not based on the leverage available.</div>`}},
{t:{fr:"Marge, marge libre, niveau de marge",en:"Margin, free margin, margin level"},s:{fr:"Les chiffres en bas de ton écran MT5.",en:"The numbers at the bottom of your MT5 screen."},
b:{fr:`<table><tr><th>Terme MT5</th><th>Signification</th></tr>
<tr><td><b>Solde (Balance)</b></td><td>L'argent sur ton compte, sans les trades ouverts.</td></tr>
<tr><td><b>Capitaux propres (Equity)</b></td><td>Solde + gains/pertes des trades ouverts. C'est ce que vaut vraiment ton compte à l'instant.</td></tr>
<tr><td><b>Marge</b></td><td>L'argent bloqué par le broker pour garder tes positions ouvertes.</td></tr>
<tr><td><b>Marge libre</b></td><td>Equity − Marge. Ce qui reste pour encaisser des pertes ou ouvrir d'autres trades.</td></tr>
<tr><td><b>Niveau de marge</b></td><td>(Equity ÷ Marge) × 100 %.</td></tr></table>
<div class="box ex"><b class="t">Exemple</b>Solde : 500 $. Tu ouvres un trade qui demande 40 $ de marge. Il est en perte de −60 $.<br>Equity = 440 $ · Marge libre = 400 $ · Niveau de marge = 440 ÷ 40 = <b>1 100 %</b>.</div>
<p>Plus le niveau de marge est élevé, plus tu es en sécurité. S'il baisse trop, le broker intervient (leçon suivante).</p>`,
en:`<table><tr><th>MT5 term</th><th>Meaning</th></tr>
<tr><td><b>Balance</b></td><td>The money in your account, excluding open trades.</td></tr>
<tr><td><b>Equity</b></td><td>Balance + open trades' profit/loss. What your account is really worth right now.</td></tr>
<tr><td><b>Margin</b></td><td>Money the broker locks to keep your positions open.</td></tr>
<tr><td><b>Free margin</b></td><td>Equity − Margin. What's left to absorb losses or open other trades.</td></tr>
<tr><td><b>Margin level</b></td><td>(Equity ÷ Margin) × 100%.</td></tr></table>
<div class="box ex"><b class="t">Example</b>Balance: $500. You open a trade requiring $40 margin. It's at −$60.<br>Equity = $440 · Free margin = $400 · Margin level = 440 ÷ 40 = <b>1,100%</b>.</div>
<p>The higher the margin level, the safer you are. If it drops too far, the broker steps in (next lesson).</p>`}},
{t:{fr:"Appel de marge et Stop Out",en:"Margin call and Stop Out"},s:{fr:"Quand le broker ferme tes positions.",en:"When the broker closes your positions."},
b:{fr:`<h2>L'appel de marge (Margin Call)</h2>
<p>Quand ton niveau de marge descend sous un certain seuil (souvent autour de <b>50 % à 100 %</b> selon le broker), tu reçois un avertissement : ton compte est en danger.</p>
<h2>Le Stop Out</h2>
<p>Si le niveau de marge continue de baisser jusqu'au seuil de <b>Stop Out</b> (souvent entre <b>20 % et 50 %</b>), le broker <b>ferme automatiquement tes positions</b>, en commençant par la plus perdante. C'est pour éviter que ton compte passe en négatif.</p>
<div class="box warn"><b class="t">Comment l'éviter</b><ul><li>Toujours un Stop Loss.</li><li>Petite taille de lot (règle du 1 %).</li><li>Pas trop de trades ouverts en même temps.</li><li>Ne jamais ajouter des positions sur un trade perdant pour « faire la moyenne ».</li></ul></div>
<p>Les seuils exacts dépendent de ton broker et de ton type de compte : vérifie-les dans les conditions de ton compte HFM.</p>`,
en:`<h2>Margin Call</h2>
<p>When your margin level drops below a certain threshold (often around <b>50% to 100%</b> depending on the broker), you get a warning: your account is in danger.</p>
<h2>Stop Out</h2>
<p>If the margin level keeps falling to the <b>Stop Out</b> threshold (often between <b>20% and 50%</b>), the broker <b>automatically closes your positions</b>, starting with the biggest loser. This stops your account going negative.</p>
<div class="box warn"><b class="t">How to avoid it</b><ul><li>Always use a Stop Loss.</li><li>Small lot size (1% rule).</li><li>Not too many trades open at once.</li><li>Never add to a losing trade to "average down".</li></ul></div>
<p>Exact thresholds depend on your broker and account type: check them in your HFM account conditions.</p>`}},
{t:{fr:"Le swap (frais de nuit)",en:"Swap (overnight fees)"},s:{fr:"Ce que coûte un trade gardé la nuit.",en:"What a trade held overnight costs."},
b:{fr:`<p>Si tu gardes une position ouverte après la clôture de la journée de trading (vers 22:00, heure de Lomé), le broker applique un <b>swap</b> : des frais (ou parfois un petit crédit) liés à la différence de taux d'intérêt entre les deux devises.</p>
<ul><li>Le swap peut être <b>négatif</b> (tu payes) ou <b>positif</b> (tu reçois), selon la paire et le sens (BUY ou SELL).</li><li>Sur l'Or, le swap est généralement négatif dans les deux sens.</li><li>Le <b>mercredi</b>, le swap est souvent compté <b>trois fois</b> pour couvrir le week-end.</li></ul>
<div class="box tip"><b class="t">Pour nous</b>Nos trades sont pris et fermés pendant les sessions de la journée : le swap nous concerne peu. Mais si tu gardes une position plusieurs jours, vérifie le swap dans les spécifications du symbole sur MT5 (clic droit → Spécifications).</div>
<p>Certains brokers proposent des comptes <b>sans swap</b> (« islamiques ») sur demande.</p>`,
en:`<p>If you keep a position open past the end of the trading day (around 22:00 GMT), the broker applies a <b>swap</b>: a fee (or sometimes a small credit) based on the interest-rate difference between the two currencies.</p>
<ul><li>Swap can be <b>negative</b> (you pay) or <b>positive</b> (you receive), depending on the pair and direction (BUY or SELL).</li><li>On Gold, swap is usually negative both ways.</li><li>On <b>Wednesday</b>, swap is often charged <b>three times</b> to cover the weekend.</li></ul>
<div class="box tip"><b class="t">For us</b>Our trades are opened and closed during the day's sessions: swap barely affects us. But if you hold a position for days, check the swap in the symbol specifications on MT5 (right-click → Specification).</div>
<p>Some brokers offer <b>swap-free</b> ("Islamic") accounts on request.</p>`}}
]},
/* ---------- CHAPITRE 9 ---------- */
{t:{fr:"La gestion du risque",en:"Risk management"},d:{fr:"La compétence n°1 pour durer dans le trading.",en:"The number-one skill to last in trading."},
lessons:[
{t:{fr:"La règle du 1 %",en:"The 1% rule"},s:{fr:"Ne jamais risquer plus de 1 % par trade.",en:"Never risk more than 1% per trade."},
b:{fr:`<p>La règle la plus simple et la plus puissante : <b>ne risque jamais plus de 1 % (maximum 2 %) de ton capital sur un seul trade</b>. Le « risque », c'est ce que tu perds si ton Stop Loss est touché.</p>
<table><tr><th>Capital</th><th>Risque max à 1 %</th></tr><tr><td>100 $</td><td>1 $</td></tr><tr><td>500 $</td><td>5 $</td></tr><tr><td>1 000 $</td><td>10 $</td></tr></table>
<h2>Pourquoi ça marche</h2>
<p>Même les meilleurs traders enchaînent des pertes. Avec 1 % par trade, <b>10 pertes de suite</b> ne te font perdre qu'environ 10 % du compte. Avec 10 % par trade, 10 pertes te font perdre près des deux tiers.</p>
<div class="box tip"><b class="t">Le but</b>Rester dans la partie assez longtemps pour que ta méthode fonctionne. Un compte qui survit peut grandir ; un compte vidé, non.</div>`,
en:`<p>The simplest and most powerful rule: <b>never risk more than 1% (2% max) of your capital on a single trade</b>. "Risk" is what you lose if your Stop Loss is hit.</p>
<table><tr><th>Capital</th><th>Max risk at 1%</th></tr><tr><td>$100</td><td>$1</td></tr><tr><td>$500</td><td>$5</td></tr><tr><td>$1,000</td><td>$10</td></tr></table>
<h2>Why it works</h2>
<p>Even the best traders have losing streaks. At 1% per trade, <b>10 losses in a row</b> cost you only about 10% of the account. At 10% per trade, 10 losses cost you nearly two thirds.</p>
<div class="box tip"><b class="t">The goal</b>Stay in the game long enough for your method to work. An account that survives can grow; a blown account can't.</div>`}},
{t:{fr:"Calculer sa taille de lot",en:"Calculating your lot size"},s:{fr:"À partir de ton risque et de ton Stop Loss.",en:"From your risk and your Stop Loss."},
b:{fr:`<div class="box ex"><b class="t">La formule</b>Taille de lot = Montant risqué ÷ (Distance du SL en pips × Valeur d'1 pip pour 1 lot)</div>
<h2>Exemple sur l'Or</h2>
<p>Capital 500 $, risque 1 % = <b>5 $</b>. Entrée 3 868,30, SL 3 878,15 → distance 9,85 $ = <b>98,5 pips</b>.<br>Valeur d'1 pip pour 1 lot sur l'Or = 10 $.<br>Lot = 5 ÷ (98,5 × 10) = 0,005 → arrondi au minimum <b>0,01</b> (risque réel ≈ 9,85 $, soit 2 %).</p>
<div class="box warn"><b class="t">Leçon</b>Avec un petit compte et un SL large sur l'Or, même 0,01 lot peut dépasser 1 %. Dans ce cas, soit tu acceptes 2 % max, soit tu passes ton tour.</div>
<h2>Exemple sur EUR/USD</h2>
<p>Capital 1 000 $, risque 1 % = <b>10 $</b>. SL à 20 pips. Valeur d'1 pip pour 1 lot = 10 $.<br>Lot = 10 ÷ (20 × 10) = <b>0,05 lot</b>.</p>
<p>Astuce : de nombreux calculateurs de taille de position gratuits existent en ligne, et certaines applis le font automatiquement.</p>`,
en:`<div class="box ex"><b class="t">The formula</b>Lot size = Amount at risk ÷ (SL distance in pips × Value of 1 pip for 1 lot)</div>
<h2>Gold example</h2>
<p>Capital $500, 1% risk = <b>$5</b>. Entry 3,868.30, SL 3,878.15 → distance $9.85 = <b>98.5 pips</b>.<br>Value of 1 pip for 1 lot on Gold = $10.<br>Lot = 5 ÷ (98.5 × 10) = 0.005 → rounded up to the minimum <b>0.01</b> (real risk ≈ $9.85, i.e. 2%).</p>
<div class="box warn"><b class="t">Lesson</b>With a small account and a wide SL on Gold, even 0.01 lot can exceed 1%. In that case, either accept 2% max, or skip the trade.</div>
<h2>EUR/USD example</h2>
<p>Capital $1,000, 1% risk = <b>$10</b>. SL of 20 pips. Value of 1 pip for 1 lot = $10.<br>Lot = 10 ÷ (20 × 10) = <b>0.05 lot</b>.</p>
<p>Tip: many free position-size calculators exist online, and some apps do it automatically.</p>`}},
{t:{fr:"Le ratio risque/rendement",en:"Risk/reward ratio"},s:{fr:"Gagner plus que ce qu'on risque.",en:"Win more than you risk."},
b:{fr:`<p>Le <b>ratio risque/rendement</b> (R:R) compare ce que tu risques (distance au SL) à ce que tu peux gagner (distance au TP).</p>
<div class="box ex"><b class="t">Exemple</b>SELL Or à 3 868,30 · SL 3 878,15 (risque 9,85 $) · TP 3 834,90 (gain 33,40 $).<br>R:R = 33,40 ÷ 9,85 ≈ <b>1:3,4</b>.</div>
<h2>Pourquoi c'est puissant</h2>
<table><tr><th>R:R</th><th>Taux de réussite minimum pour ne pas perdre</th></tr><tr><td>1:1</td><td>50 %</td></tr><tr><td>1:2</td><td>33 %</td></tr><tr><td>1:3</td><td>25 %</td></tr></table>
<p>Avec un R:R de 1:2, sur 10 trades à 1 % de risque : 4 gagnants (+8 %) et 6 perdants (−6 %) = <b>+2 %</b>. Tu peux te tromper plus souvent que tu as raison… et gagner quand même.</p>
<div class="box tip"><b class="t">À retenir</b>Vise au moins <b>1:2</b>. Un trade où tu risques 10 $ pour en gagner 5 doit être une exception, pas la règle.</div>`,
en:`<p>The <b>risk/reward ratio</b> (R:R) compares what you risk (distance to SL) with what you can win (distance to TP).</p>
<div class="box ex"><b class="t">Example</b>SELL Gold at 3,868.30 · SL 3,878.15 (risk $9.85) · TP 3,834.90 (gain $33.40).<br>R:R = 33.40 ÷ 9.85 ≈ <b>1:3.4</b>.</div>
<h2>Why it's powerful</h2>
<table><tr><th>R:R</th><th>Minimum win rate to break even</th></tr><tr><td>1:1</td><td>50%</td></tr><tr><td>1:2</td><td>33%</td></tr><tr><td>1:3</td><td>25%</td></tr></table>
<p>With a 1:2 R:R over 10 trades at 1% risk: 4 winners (+8%) and 6 losers (−6%) = <b>+2%</b>. You can be wrong more often than right… and still make money.</p>
<div class="box tip"><b class="t">Remember</b>Aim for at least <b>1:2</b>. A trade risking $10 to make $5 should be the exception, not the rule.</div>`}}
]},
/* ---------- CHAPITRE 10 ---------- */
{t:{fr:"Premiers pas sur MetaTrader 5",en:"First steps on MetaTrader 5"},d:{fr:"Installer, lire l'écran et passer ton premier ordre.",en:"Install, read the screen and place your first order."},
lessons:[
{t:{fr:"Installer MT5 et se connecter",en:"Install MT5 and log in"},s:{fr:"Relier l'application à ton compte HFM.",en:"Connect the app to your HFM account."},
b:{fr:`<ol><li>Télécharge <b>MetaTrader 5</b> (éditeur : MetaQuotes) sur le Play Store, l'App Store ou depuis l'espace client HFM pour PC.</li><li>Ouvre l'application → <b>Paramètres</b> (ou menu ☰) → <b>Nouveau compte</b> → <b>Se connecter à un compte existant</b>.</li><li>Cherche le serveur de ton broker : tape <b>HFM</b> ou <b>HF Markets</b>, puis choisis le serveur indiqué dans l'email reçu à l'ouverture de ton compte (serveur <b>Demo</b> pour un compte démo, <b>Live</b> pour un compte réel).</li><li>Entre ton <b>identifiant</b> (numéro de compte MT5) et ton <b>mot de passe</b>.</li><li>Appuie sur <b>Connexion</b>. Ton solde s'affiche dans l'onglet Trade.</li></ol>
<div class="box tip"><b class="t">Commence par un compte démo</b>Dans ton espace HFM, crée un compte démo MT5 gratuit. Tu t'entraînes dans les mêmes conditions, sans risquer d'argent réel.</div>
<div class="box warn"><b class="t">Sécurité</b>Ne partage jamais ton mot de passe principal. Si un coach doit voir ton compte, donne uniquement le mot de passe « investisseur » (lecture seule).</div>`,
en:`<ol><li>Download <b>MetaTrader 5</b> (publisher: MetaQuotes) from the Play Store, App Store or the HFM client area for PC.</li><li>Open the app → <b>Settings</b> (or ☰ menu) → <b>New account</b> → <b>Login to an existing account</b>.</li><li>Search for your broker's server: type <b>HFM</b> or <b>HF Markets</b>, then pick the server shown in the email you got when opening your account (<b>Demo</b> server for a demo account, <b>Live</b> for a real account).</li><li>Enter your <b>login</b> (MT5 account number) and <b>password</b>.</li><li>Tap <b>Login</b>. Your balance appears in the Trade tab.</li></ol>
<div class="box tip"><b class="t">Start with a demo account</b>In your HFM area, create a free MT5 demo account. You practise in the same conditions without risking real money.</div>
<div class="box warn"><b class="t">Security</b>Never share your main password. If a coach needs to see your account, only give the "investor" password (read-only).</div>`}},
{t:{fr:"Lire l'écran de MT5",en:"Reading the MT5 screen"},s:{fr:"Cotations, graphique, Trade et Historique.",en:"Quotes, chart, Trade and History."},
b:{fr:`<p>Sur l'application mobile, MT5 a 4 onglets principaux en bas de l'écran :</p>
<table><tr><th>Onglet</th><th>À quoi il sert</th></tr>
<tr><td><b>Cotations</b></td><td>La liste des actifs avec leurs prix Bid et Ask. Appuie sur <b>+</b> pour ajouter XAUUSD si besoin.</td></tr>
<tr><td><b>Graphique</b></td><td>Le graphique en bougies. Change l'unité de temps (M1, M5, H1…) et ajoute des indicateurs.</td></tr>
<tr><td><b>Trade</b></td><td>Tes positions ouvertes, ton Solde, ton Equity, ta Marge et ta Marge libre.</td></tr>
<tr><td><b>Historique</b></td><td>Tous tes trades fermés, avec le résultat de chacun.</td></tr></table>
<h2>Sur le graphique</h2>
<ul><li>Pince avec deux doigts pour zoomer.</li><li>Appuie sur l'icône <b>f</b> pour ajouter un indicateur.</li><li>Appuie sur l'icône d'horloge (ou en haut) pour changer l'unité de temps.</li></ul>
<div class="box tip"><b class="t">Conseil</b>Garde ta liste de cotations courte : XAUUSD et une ou deux paires suffisent pour débuter.</div>`,
en:`<p>On the mobile app, MT5 has 4 main tabs at the bottom of the screen:</p>
<table><tr><th>Tab</th><th>What it's for</th></tr>
<tr><td><b>Quotes</b></td><td>The list of assets with their Bid and Ask prices. Tap <b>+</b> to add XAUUSD if needed.</td></tr>
<tr><td><b>Chart</b></td><td>The candlestick chart. Change the timeframe (M1, M5, H1…) and add indicators.</td></tr>
<tr><td><b>Trade</b></td><td>Your open positions, Balance, Equity, Margin and Free margin.</td></tr>
<tr><td><b>History</b></td><td>All your closed trades, with each result.</td></tr></table>
<h2>On the chart</h2>
<ul><li>Pinch with two fingers to zoom.</li><li>Tap the <b>f</b> icon to add an indicator.</li><li>Tap the clock icon (or the top bar) to change the timeframe.</li></ul>
<div class="box tip"><b class="t">Tip</b>Keep your quotes list short: XAUUSD and one or two pairs are enough to start.</div>`}},
{t:{fr:"Passer son premier ordre en démo",en:"Placing your first demo order"},s:{fr:"Pas à pas, avec SL et TP.",en:"Step by step, with SL and TP."},
b:{fr:`<ol><li>Va dans <b>Cotations</b>, appuie sur <b>XAUUSD</b> → <b>Trade</b> (ou nouvel ordre).</li><li>Choisis le type : <b>Exécution au marché</b> (entrée immédiate) ou un ordre en attente (Buy Limit, Sell Limit…).</li><li>Règle le <b>Volume</b> : commence par <b>0,01</b>.</li><li>Entre ton <b>Stop Loss</b> et ton <b>Take Profit</b>.</li><li>Appuie sur <b>Vendre</b> (SELL) ou <b>Acheter</b> (BUY).</li><li>Le trade apparaît dans l'onglet <b>Trade</b> avec son gain/perte en direct.</li></ol>
<h2>Modifier ou fermer</h2>
<ul><li><b>Modifier</b> SL/TP : appui long sur le trade → Modifier la position.</li><li><b>Fermer</b> : appui long → Clôturer la position (ou glisser selon la version).</li></ul>
<div class="box ex"><b class="t">Exercice</b>Recopie en démo un signal du groupe (entrée, SL, TP) avec 0,01 lot, et observe comment le trade évolue. Fais-le 20 fois avant de passer en réel.</div>`,
en:`<ol><li>Go to <b>Quotes</b>, tap <b>XAUUSD</b> → <b>Trade</b> (or new order).</li><li>Choose the type: <b>Market execution</b> (instant entry) or a pending order (Buy Limit, Sell Limit…).</li><li>Set the <b>Volume</b>: start with <b>0.01</b>.</li><li>Enter your <b>Stop Loss</b> and <b>Take Profit</b>.</li><li>Tap <b>Sell</b> or <b>Buy</b>.</li><li>The trade appears in the <b>Trade</b> tab with its live profit/loss.</li></ol>
<h2>Modify or close</h2>
<ul><li><b>Modify</b> SL/TP: long-press the trade → Modify position.</li><li><b>Close</b>: long-press → Close position (or swipe, depending on version).</li></ul>
<div class="box ex"><b class="t">Exercise</b>Copy a group signal (entry, SL, TP) on demo with 0.01 lot and watch how the trade evolves. Do it 20 times before going live.</div>`}},
{t:{fr:"Lire son historique de trades",en:"Reading your trade history"},s:{fr:"Analyser ses résultats pour progresser.",en:"Analyse your results to improve."},
b:{fr:`<p>L'onglet <b>Historique</b> montre tous tes trades fermés. En haut, tu peux filtrer par période : aujourd'hui, semaine, mois, ou dates personnalisées.</p>
<h2>Ce que tu y trouves</h2>
<ul><li>Pour chaque trade : actif, BUY/SELL, volume, prix d'entrée et de sortie, résultat.</li><li>En bas : <b>Profit</b> total, <b>Dépôts</b>, <b>Retraits</b>, <b>Swap</b>, <b>Commission</b> et <b>Solde</b>.</li></ul>
<h2>Tenir un journal de trading</h2>
<p>Pour progresser, note chaque trade dans un journal (cahier, Excel ou application) :</p>
<ul><li>Date, heure, actif, BUY/SELL</li><li>Raison de l'entrée (zone, bougie, signal)</li><li>SL, TP, lot, résultat</li><li>Ton émotion pendant le trade</li><li>Ce que tu ferais différemment</li></ul>
<div class="box tip"><b class="t">Le vrai secret</b>Après 20 ou 30 trades, relis ton journal. Tu verras tes erreurs qui reviennent (trop gros lot, trade pendant les news, SL déplacé…) et tu sauras exactement quoi corriger.</div>`,
en:`<p>The <b>History</b> tab shows all your closed trades. At the top you can filter by period: today, week, month or custom dates.</p>
<h2>What you'll find</h2>
<ul><li>For each trade: asset, BUY/SELL, volume, entry and exit price, result.</li><li>At the bottom: total <b>Profit</b>, <b>Deposits</b>, <b>Withdrawals</b>, <b>Swap</b>, <b>Commission</b> and <b>Balance</b>.</li></ul>
<h2>Keep a trading journal</h2>
<p>To improve, log every trade in a journal (notebook, Excel or an app):</p>
<ul><li>Date, time, asset, BUY/SELL</li><li>Reason for entry (zone, candle, signal)</li><li>SL, TP, lot, result</li><li>How you felt during the trade</li><li>What you'd do differently</li></ul>
<div class="box tip"><b class="t">The real secret</b>After 20 or 30 trades, reread your journal. You'll see your recurring mistakes (lot too big, trading the news, moving the SL…) and know exactly what to fix.</div>`}}
]}
];
