/* Schéma d'interface (wireframe) avec zones numérotées */
function ui(l,kind){
 const tv=kind=='tv';
 const z=tv?[
  [9,4,38,9,'1',L(l,'Recherche du symbole','Symbol search')],[49,4,23,9,'2',L(l,'Unité de temps','Timeframe')],[74,4,25,9,'3',L(l,'Indicateurs','Indicators')],
  [1,16,6,80,'4',''],[8,16,66,80,'5',L(l,'Graphique','Chart')],[76,16,23,80,'6',L(l,'Liste de surveillance','Watchlist')]]
 :[[3,5,94,10,'1',L(l,'Barre du haut : symbole, unité de temps, f (indicateurs), + (ordre)','Top bar: symbol, timeframe, f (indicators), + (order)')],[3,18,94,60,'2',L(l,'Graphique','Chart')],[3,81,94,14,'3',L(l,'Onglets : Cotations · Graphique · Trade · Historique · Paramètres','Tabs: Quotes · Chart · Trade · History · Settings')]];
 return `<div class="ui ${tv?'':'phone'}">${z.map(([x,y,w,h,n,t])=>`<div class="uz" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%"><span>${n}</span>${t?`<em>${t}</em>`:''}</div>`).join('')}</div>`;
}
const LV2={n:2,icon:"tools",t:{fr:"Les outils du trader",en:"The trader's tools"},d:{fr:"Ton broker, TradingView et MetaTrader 5 : créer tes comptes, préparer tes graphiques et passer tes ordres.",en:"Your broker, TradingView and MetaTrader 5: create your accounts, set up your charts and place your orders."},
chapters:[
/* ---------- CH 1 ---------- */
{t:{fr:"Le broker et ton compte",en:"Your broker and account"},d:{fr:"Choisir, ouvrir et approvisionner ton compte en sécurité.",en:"Choose, open and fund your account safely."},
lessons:[
"OLD:0",
{t:{fr:"Ouvrir son compte HFM pas à pas",en:"Opening your HFM account step by step"},s:{fr:"De l'inscription au compte vérifié.",en:"From sign-up to a verified account."},
b:{fr:`<ol class="steps"><li>Ouvre le lien d'inscription SERGIO FX : <a href="${HFM}" target="_blank" rel="noopener">hfm.com (lien partenaire)</a> → <b>S'inscrire</b>.</li><li>Choisis ton <b>pays</b>, entre ton <b>email</b> et un <b>mot de passe</b> solide (8 à 15 caractères avec majuscule, minuscule, chiffre et caractère spécial).</li><li>Entre le <b>code à 6 chiffres</b> reçu par email (vérifie les spams).</li><li>Remplis ton profil : prénom et nom <b>identiques à ta pièce d'identité</b>, téléphone, date de naissance.</li><li>Devise du compte : <b>USD</b> (elle ne pourra plus être changée). Coche les conditions.</li><li>Ton adresse, puis le <b>profil investisseur</b> : réponds honnêtement.</li><li><b>Vérification d'identité</b> : photo nette de ton passeport, carte d'identité ou permis.</li><li><b>Vérification du téléphone</b> par SMS ou WhatsApp.</li><li>Dans <b>« Mes comptes de trading »</b>, ouvre un compte <b>MT5 démo</b> pour t'entraîner, puis un compte réel quand tu seras prêt.</li></ol>
<div class="box tip"><b class="t">Garde précieusement</b>L'email de HFM contient ton <b>numéro de compte MT5</b>, ton <b>mot de passe</b> et le nom du <b>serveur</b>. Tu en auras besoin pour te connecter à MetaTrader 5 (chapitre 3).</div>
<p>Un souci pendant l'inscription ? Écris-nous sur <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>.</p>`,
en:`<ol class="steps"><li>Open the SERGIO FX sign-up link: <a href="${HFM}" target="_blank" rel="noopener">hfm.com (partner link)</a> → <b>Register</b>.</li><li>Choose your <b>country</b>, enter your <b>email</b> and a strong <b>password</b> (8 to 15 characters with upper case, lower case, a number and a special character).</li><li>Enter the <b>6-digit code</b> sent by email (check spam).</li><li>Fill in your profile: first and last name <b>exactly as on your ID</b>, phone, date of birth.</li><li>Account currency: <b>USD</b> (it can't be changed later). Accept the terms.</li><li>Your address, then the <b>investor profile</b>: answer honestly.</li><li><b>Identity check</b>: a sharp photo of your passport, ID card or driving licence.</li><li><b>Phone check</b> by SMS or WhatsApp.</li><li>In <b>"My trading accounts"</b>, open an <b>MT5 demo</b> account to practise, then a live account when you're ready.</li></ol>
<div class="box tip"><b class="t">Keep it safe</b>HFM's email contains your <b>MT5 account number</b>, <b>password</b> and <b>server</b> name. You'll need them to log in to MetaTrader 5 (chapter 3).</div>
<p>Stuck during sign-up? Message us on <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>.</p>`}},
{t:{fr:"Démo, réel, dépôt et retrait",en:"Demo, live, deposits and withdrawals"},s:{fr:"Passer au réel sans se brûler.",en:"Going live without getting burned."},
b:{fr:`<h2>Le compte démo</h2><p>Argent virtuel, prix réels. C'est ton terrain d'entraînement : apprendre les boutons de MT5, tester la méthode, prendre l'habitude du Stop Loss. Règle chez SERGIO FX : <b>au moins 20 trades en démo</b> avant le réel.</p>
<h2>Le compte réel</h2><ul><li>Commence <b>petit</b> : un montant que tu peux perdre sans que ça change ta vie.</li><li>Garde le même lot et le même risque qu'en démo (0,01 lot pour commencer sur l'Or).</li><li>Attends-toi à ressentir plus d'émotions : c'est normal, c'est pour ça qu'on commence petit.</li></ul>
<h2>Dépôt et retrait</h2><ul><li>Dépôt depuis ton espace client (Mobile Money, carte, crypto… selon ce qui est disponible chez toi).</li><li>Le retrait se fait en général par le <b>même moyen</b> que le dépôt.</li><li>Fais un <b>petit retrait test</b> au début pour vérifier que tout fonctionne.</li><li>Ton compte doit être <b>vérifié</b> (pièce d'identité) pour retirer.</li></ul>
<div class="box warn"><b class="t">Sécurité</b>Ne donne jamais tes identifiants. Si quelqu'un doit regarder ton compte, donne seulement le mot de passe <b>investisseur</b> (lecture seule).</div>`,
en:`<h2>The demo account</h2><p>Virtual money, real prices. Your training ground: learn the MT5 buttons, test the method, build the Stop Loss habit. SERGIO FX rule: <b>at least 20 demo trades</b> before going live.</p>
<h2>The live account</h2><ul><li>Start <b>small</b>: an amount you can lose without it changing your life.</li><li>Keep the same lot and risk as on demo (0.01 lot to start on Gold).</li><li>Expect stronger emotions: that's normal, and why we start small.</li></ul>
<h2>Deposits and withdrawals</h2><ul><li>Deposit from your client area (Mobile Money, card, crypto… depending on what's available in your country).</li><li>Withdrawals usually go back through the <b>same method</b> as the deposit.</li><li>Make a <b>small test withdrawal</b> early to check everything works.</li><li>Your account must be <b>verified</b> (ID) to withdraw.</li></ul>
<div class="box warn"><b class="t">Security</b>Never give out your login. If someone needs to look at your account, only give the <b>investor</b> (read-only) password.</div>`}}
]},
/* ---------- CH 2 TradingView ---------- */
{t:{fr:"TradingView : ton atelier d'analyse",en:"TradingView: your analysis workshop"},d:{fr:"Créer ton compte, ajouter tes paires et préparer tes graphiques.",en:"Create your account, add your pairs and set up your charts."},
lessons:[
{t:{fr:"Créer son compte TradingView",en:"Creating a TradingView account"},s:{fr:"Gratuit, sur PC et téléphone.",en:"Free, on PC and phone."},
b:{fr:`<p><b>TradingView</b> est la plateforme de graphiques la plus utilisée par les traders. C'est là qu'on <b>analyse</b> (tracer les zones, la tendance, préparer le plan). MT5, lui, sert à <b>exécuter</b> les ordres.</p>
<ol class="steps"><li>Va sur <b>tradingview.com</b> (ou télécharge l'application « TradingView » sur le Play Store / App Store).</li><li>Clique sur l'icône de profil en haut à droite → <b>S'inscrire</b> (Sign up).</li><li>Inscris-toi avec ton <b>Google</b> ou ton <b>email</b>.</li><li>Choisis le plan <b>Basic (gratuit)</b> : il suffit largement pour débuter.</li><li>Passe l'interface en français : menu du profil → <b>Langue</b> → Français.</li></ol>
<div class="box tip"><b class="t">Bon à savoir</b>Le plan gratuit a quelques limites (nombre d'indicateurs par graphique, publicités…). Pour notre méthode basée sur le prix et les zones, ce n'est pas un problème.</div>`,
en:`<p><b>TradingView</b> is the charting platform most traders use. It's where we <b>analyse</b> (draw zones and trends, prepare the plan). MT5 is used to <b>execute</b> orders.</p>
<ol class="steps"><li>Go to <b>tradingview.com</b> (or download the "TradingView" app from the Play Store / App Store).</li><li>Click the profile icon at the top right → <b>Sign up</b>.</li><li>Sign up with <b>Google</b> or your <b>email</b>.</li><li>Choose the <b>Basic (free)</b> plan: plenty to start with.</li><li>Set your language: profile menu → <b>Language</b>.</li></ol>
<div class="box tip"><b class="t">Good to know</b>The free plan has some limits (indicators per chart, ads…). For our price-and-zones method, that's not a problem.</div>`}},
{t:{fr:"Découvrir l'interface",en:"Getting to know the interface"},s:{fr:"Les 6 zones de l'écran.",en:"The 6 areas of the screen."},
b:{fr:`<p>Ouvre un graphique : menu <b>Produits → Supergraphiques</b> (ou « Graphique » dans l'appli).</p>${ui('fr','tv')}
<ol class="steps"><li><b>Recherche du symbole</b> : tape le nom de l'actif (XAUUSD, EURUSD…).</li><li><b>Unité de temps</b> : 1m, 5m, 15m, 1h, 4h, 1D…</li><li><b>Indicateurs</b> : ajouter une moyenne mobile, un RSI…</li><li><b>Outils de dessin</b> (barre de gauche) : lignes, rectangles, Fibonacci, position longue/courte, texte.</li><li><b>Le graphique</b> : molette pour zoomer, clic-glisser pour se déplacer dans le temps.</li><li><b>Liste de surveillance</b> (à droite) : tes actifs favoris en un clic.</li></ol>`,
en:`<p>Open a chart: <b>Products → Supercharts</b> menu (or "Chart" in the app).</p>${ui('en','tv')}
<ol class="steps"><li><b>Symbol search</b>: type the asset name (XAUUSD, EURUSD…).</li><li><b>Timeframe</b>: 1m, 5m, 15m, 1h, 4h, 1D…</li><li><b>Indicators</b>: add a moving average, an RSI…</li><li><b>Drawing tools</b> (left bar): lines, rectangles, Fibonacci, long/short position, text.</li><li><b>The chart</b>: scroll to zoom, click-drag to move through time.</li><li><b>Watchlist</b> (right): your favourite assets in one click.</li></ol>`}},
{t:{fr:"Ajouter tes paires et régler ton graphique",en:"Adding your pairs and setting up your chart"},s:{fr:"Liste de surveillance, bougies et fuseau horaire.",en:"Watchlist, candles and time zone."},
b:{fr:`<h2>1. Créer ta liste de surveillance</h2>
<ol class="steps"><li>Dans le panneau de droite, clique sur <b>+</b> (Ajouter un symbole).</li><li>Tape <b>XAUUSD</b> et choisis une source Forex/CFD connue (par exemple <b>OANDA</b>).</li><li>Ajoute aussi <b>EURUSD</b>, <b>GBPUSD</b>, <b>USDJPY</b> et <b>DXY</b> (l'indice du dollar, très utile pour l'Or).</li><li>Clique sur un symbole de la liste pour l'afficher sur le graphique.</li></ol>
<h2>2. Régler le graphique</h2>
<ul><li><b>Type</b> : bougies japonaises (icône à côté de l'unité de temps).</li><li><b>Fuseau horaire</b> : clic droit sur le graphique → <b>Paramètres</b> → <b>Symbole/Échelles</b> → fuseau <b>UTC</b>. C'est l'heure de Lomé : tes horaires de session correspondront à ceux du groupe.</li><li><b>Couleurs</b> : Paramètres → Symbole → bougies vertes/rouges si tu préfères.</li></ul>
<div class="box warn"><b class="t">Prix légèrement différents</b>Le prix de l'Or sur TradingView (OANDA) peut différer de quelques dixièmes de celui de ton broker sur MT5. C'est normal : chaque fournisseur a ses prix. Pour <b>exécuter</b>, c'est toujours le prix de MT5 qui compte.</div>`,
en:`<h2>1. Build your watchlist</h2>
<ol class="steps"><li>In the right panel, click <b>+</b> (Add symbol).</li><li>Type <b>XAUUSD</b> and pick a well-known Forex/CFD source (for example <b>OANDA</b>).</li><li>Also add <b>EURUSD</b>, <b>GBPUSD</b>, <b>USDJPY</b> and <b>DXY</b> (the dollar index, very useful for Gold).</li><li>Click a symbol in the list to show it on the chart.</li></ol>
<h2>2. Set up the chart</h2>
<ul><li><b>Type</b>: Japanese candlesticks (icon next to the timeframe).</li><li><b>Time zone</b>: right-click the chart → <b>Settings</b> → <b>Symbol/Scales</b> → time zone <b>UTC</b>. That's Lomé time, so session times match the group's.</li><li><b>Colours</b>: Settings → Symbol → green/red candles if you prefer.</li></ul>
<div class="box warn"><b class="t">Slightly different prices</b>Gold's price on TradingView (OANDA) can differ by a few tenths from your broker's on MT5. That's normal: each provider has its own prices. To <b>execute</b>, MT5's price is what counts.</div>`}},
{t:{fr:"Les outils de dessin",en:"Drawing tools"},s:{fr:"Lignes, zones, Fibonacci et texte.",en:"Lines, zones, Fibonacci and text."},
b:{fr:`<table><tr><th>Outil</th><th>Où ?</th><th>Usage</th></tr>
<tr><td><b>Ligne de tendance</b></td><td>1ᵉʳ groupe (lignes)</td><td>Relier les creux ou les sommets</td></tr>
<tr><td><b>Ligne horizontale</b></td><td>1ᵉʳ groupe</td><td>Marquer un niveau précis</td></tr>
<tr><td><b>Rectangle</b></td><td>Groupe formes</td><td>Dessiner une zone (SELL ZONE, BUY ZONE)</td></tr>
<tr><td><b>Retracement de Fibonacci</b></td><td>Groupe Fibonacci</td><td>Trouver les zones de correction (50 %, 61,8 %, 0,718…)</td></tr>
<tr><td><b>Position longue / courte</b></td><td>Groupe prévisions et mesures</td><td>Planifier entrée, SL, TP et voir le ratio</td></tr>
<tr><td><b>Texte</b></td><td>Groupe annotations</td><td>Noter « H4 résistance », « M5 entrée »…</td></tr></table>
<h2>Astuces</h2>
<ul><li>Un <b>double-clic</b> sur un dessin ouvre ses réglages (couleur, épaisseur, prolonger à droite).</li><li>Utilise une <b>couleur par unité de temps</b> (ex. rouge pour D1, orange pour H4, bleu pour H1) : tu sauras d'un coup d'œil d'où vient chaque zone.</li><li>Le cadenas (en bas de la barre d'outils) verrouille tes dessins pour ne pas les déplacer par erreur.</li><li>Clique sur l'étoile d'un outil pour l'ajouter à ta barre de favoris.</li></ul>`,
en:`<table><tr><th>Tool</th><th>Where?</th><th>Use</th></tr>
<tr><td><b>Trend line</b></td><td>1st group (lines)</td><td>Connect lows or highs</td></tr>
<tr><td><b>Horizontal line</b></td><td>1st group</td><td>Mark an exact level</td></tr>
<tr><td><b>Rectangle</b></td><td>Shapes group</td><td>Draw a zone (SELL ZONE, BUY ZONE)</td></tr>
<tr><td><b>Fibonacci retracement</b></td><td>Fibonacci group</td><td>Find pullback zones (50%, 61.8%, 0.718…)</td></tr>
<tr><td><b>Long / short position</b></td><td>Forecasting & measurement group</td><td>Plan entry, SL, TP and see the ratio</td></tr>
<tr><td><b>Text</b></td><td>Annotation group</td><td>Note "H4 resistance", "M5 entry"…</td></tr></table>
<h2>Tips</h2>
<ul><li><b>Double-click</b> a drawing to open its settings (colour, thickness, extend right).</li><li>Use <b>one colour per timeframe</b> (e.g. red for D1, orange for H4, blue for H1): you'll know at a glance where each zone comes from.</li><li>The lock (bottom of the toolbar) locks your drawings so you don't move them by mistake.</li><li>Click a tool's star to add it to your favourites bar.</li></ul>`}},
{t:{fr:"Planifier un trade avec l'outil position",en:"Planning a trade with the position tool"},s:{fr:"Entrée, SL, TP et ratio en un dessin.",en:"Entry, SL, TP and ratio in one drawing."},
b:{fr:`<p>L'outil <b>Position longue</b> (achat) ou <b>Position courte</b> (vente) dessine exactement ce que tu vois dans nos captures de signaux : une zone verte (gain) et une zone rouge (risque).</p>
<ol class="steps"><li>Choisis <b>Position courte</b> pour un SELL (ou longue pour un BUY).</li><li>Clique sur ton <b>prix d'entrée</b>.</li><li>Tire le bord de la zone rouge jusqu'à ton <b>Stop Loss</b>, et celui de la zone verte jusqu'à ton <b>Take Profit</b>.</li><li>L'outil affiche le <b>ratio risque/rendement</b> et la distance en points.</li><li>Double-clic → onglet <b>Entrées</b> : indique la taille de ton compte et le risque (1 %) pour qu'il calcule la quantité.</li></ol>
<div class="box ex"><b class="t">Lire une capture du coach</b>Sur nos captures, l'étiquette « Stop: 9.851 » donne la distance du SL, « Risk/reward ratio: 3.3 » le ratio, et les étiquettes colorées sur l'échelle de droite donnent l'entrée (grise), le SL (rouge) et le TP (verte).</div>`,
en:`<p>The <b>Long position</b> (buy) or <b>Short position</b> (sell) tool draws exactly what you see in our signal screenshots: a green zone (profit) and a red zone (risk).</p>
<ol class="steps"><li>Choose <b>Short position</b> for a SELL (or long for a BUY).</li><li>Click your <b>entry price</b>.</li><li>Drag the edge of the red zone to your <b>Stop Loss</b>, and the green zone's edge to your <b>Take Profit</b>.</li><li>The tool shows the <b>risk/reward ratio</b> and the distance in points.</li><li>Double-click → <b>Inputs</b> tab: enter your account size and risk (1%) so it calculates the quantity.</li></ol>
<div class="box ex"><b class="t">Reading the coach's screenshot</b>On our screenshots, the "Stop: 9.851" label gives the SL distance, "Risk/reward ratio: 3.3" the ratio, and the coloured tags on the right scale give the entry (grey), SL (red) and TP (green).</div>`}},
{t:{fr:"Indicateurs, alertes et sauvegarde",en:"Indicators, alerts and saving"},s:{fr:"Ne plus rester collé à l'écran.",en:"Stop staring at the screen."},
b:{fr:`<h2>Ajouter un indicateur</h2><p>Clique sur <b>Indicateurs</b> en haut → tape « Moving Average » ou « RSI » → clique dessus. Double-clic sur l'indicateur pour changer sa période (ex. 50 ou 200).</p>
<h2>Créer une alerte</h2>
<ol class="steps"><li>Fais un clic droit sur ta zone (ou ta ligne) → <b>Ajouter une alerte</b>.</li><li>Condition : <b>XAUUSD</b> « Croisement » ton niveau.</li><li>Choisis la notification : application mobile, email, son.</li><li>Valide. Tu seras prévenu quand le prix arrive sur ta zone, même téléphone en poche.</li></ol>
<h2>Sauvegarder ta mise en page</h2><p>Quand tu es connecté, TradingView <b>enregistre automatiquement</b> tes dessins dans le cloud. Tu les retrouves sur ton PC et ton téléphone. Donne un nom à ta mise en page (menu en haut à droite) : par exemple « OR – SERGIO FX ».</p>`,
en:`<h2>Adding an indicator</h2><p>Click <b>Indicators</b> at the top → type "Moving Average" or "RSI" → click it. Double-click the indicator to change its period (e.g. 50 or 200).</p>
<h2>Creating an alert</h2>
<ol class="steps"><li>Right-click your zone (or line) → <b>Add alert</b>.</li><li>Condition: <b>XAUUSD</b> "Crossing" your level.</li><li>Choose the notification: mobile app, email, sound.</li><li>Confirm. You'll be notified when price reaches your zone, even with your phone in your pocket.</li></ol>
<h2>Saving your layout</h2><p>When logged in, TradingView <b>saves your drawings automatically</b> to the cloud. You'll find them on your PC and phone. Name your layout (top-right menu): e.g. "GOLD – SERGIO FX".</p>`}}
]},
/* ---------- CH 3 MT5 : repris du niveau 1 + compléments ---------- */
"MT5"
]};
const MT5_EXTRA=[
{t:{fr:"Gérer un trade ouvert",en:"Managing an open trade"},s:{fr:"Modifier le SL/TP, break-even, clôture partielle.",en:"Modify SL/TP, break-even, partial close."},
b:{fr:`<h2>Modifier le Stop Loss ou le Take Profit</h2><p>Onglet <b>Trade</b> → appui long sur la position → <b>Modifier la position</b> → change le SL ou le TP → <b>Modifier</b>.</p>
<h2>Mettre au break-even</h2><p>Quand le trade a bien avancé (souvent au TP1), place le <b>SL au prix d'entrée</b>. Si le marché revient, tu sors à 0 au lieu de perdre. C'est ce qu'on annonce dans le groupe par « SL au BE ».</p>
<h2>Clôture partielle</h2><p>Appui long → <b>Clôturer la position</b> → au lieu du volume total, entre une partie (ex. 0,02 sur 0,04) → clôturer. Tu encaisses une partie du gain et laisses courir le reste vers le TP2.</p>
<div class="box ex"><b class="t">Exemple</b>SELL Or 0,04 lot à 3 868. TP1 touché à 3 858 (+40 $) → tu fermes 0,02 lot (+20 $ encaissés) et mets le SL du reste à 3 868. Pire scénario désormais : +20 $.</div>
<div class="box warn"><b class="t">Ne jamais faire</b>Éloigner son SL quand le trade est perdant. On peut <b>réduire</b> le risque, jamais l'augmenter.</div>`,
en:`<h2>Modifying the Stop Loss or Take Profit</h2><p><b>Trade</b> tab → long-press the position → <b>Modify position</b> → change SL or TP → <b>Modify</b>.</p>
<h2>Moving to break-even</h2><p>When the trade has moved well (often at TP1), set the <b>SL at the entry price</b>. If the market comes back, you exit at 0 instead of losing. That's what "SL to BE" means in the group.</p>
<h2>Partial close</h2><p>Long-press → <b>Close position</b> → instead of the full volume, enter part of it (e.g. 0.02 of 0.04) → close. You bank part of the profit and let the rest run to TP2.</p>
<div class="box ex"><b class="t">Example</b>SELL Gold 0.04 lot at 3,868. TP1 hit at 3,858 (+$40) → close 0.02 lot (+$20 banked) and move the remaining SL to 3,868. Worst case now: +$20.</div>
<div class="box warn"><b class="t">Never</b>Move your SL further away on a losing trade. You can <b>reduce</b> risk, never increase it.</div>`}},
{t:{fr:"MT5 sur ordinateur",en:"MT5 on desktop"},s:{fr:"Raccourcis et trading en un clic.",en:"Shortcuts and one-click trading."},
b:{fr:`<ul><li><b>F9</b> : nouvel ordre.</li><li><b>Ctrl+M</b> : afficher/masquer la fenêtre des cotations (Market Watch).</li><li><b>Ctrl+T</b> : afficher la boîte à outils (onglets Trade, Historique…).</li><li><b>Double-clic</b> sur une position : la modifier ou la fermer.</li><li>Sur le graphique, tu peux <b>glisser les lignes SL et TP</b> directement avec la souris.</li><li><b>Trading en un clic</b> : clic droit sur le graphique → Trading en un clic. Des boutons BUY/SELL apparaissent en haut à gauche. Pratique mais dangereux si tu cliques trop vite : à activer seulement quand tu maîtrises.</li></ul>
<div class="box tip"><b class="t">Le duo gagnant</b>Analyse sur <b>TradingView</b> (dessins, alertes) → exécution sur <b>MT5</b> (ordre, SL, TP). Beaucoup de traders ont TradingView sur le PC et MT5 sur le téléphone.</div>`,
en:`<ul><li><b>F9</b>: new order.</li><li><b>Ctrl+M</b>: show/hide Market Watch.</li><li><b>Ctrl+T</b>: show the Toolbox (Trade, History tabs…).</li><li><b>Double-click</b> a position: modify or close it.</li><li>On the chart you can <b>drag the SL and TP lines</b> directly with the mouse.</li><li><b>One-click trading</b>: right-click the chart → One Click Trading. BUY/SELL buttons appear top-left. Handy but risky if you click too fast: only enable it once you're comfortable.</li></ul>
<div class="box tip"><b class="t">The winning combo</b>Analyse on <b>TradingView</b> (drawings, alerts) → execute on <b>MT5</b> (order, SL, TP). Many traders keep TradingView on the PC and MT5 on their phone.</div>`}}
];
