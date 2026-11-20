const M2={t:"Installer tes outils",d:"Ton compte HFM, TradingView pour analyser et MetaTrader 5 pour passer tes ordres.",lessons:[
{t:"Ton broker et ton compte HFM",s:"Choisir un broker, ouvrir son compte, démo et réel.",b:`
<p>Le <b>broker</b> est l'intermédiaire entre toi et le marché : il garde ton argent, te donne la plateforme MetaTrader 5, affiche les prix et exécute tes ordres. Il se rémunère surtout avec le <b>spread</b>, parfois une commission, et le <b>swap</b> (frais de nuit).</p>
<h2>Ce qu'il faut vérifier chez un broker</h2>
<ul><li><b>La régulation</b> par une autorité financière (vérifiable sur le site du régulateur).</li><li><b>Les frais</b> : spread, commissions, swap.</li><li><b>Les dépôts et retraits</b> disponibles chez toi, et leur rapidité.</li><li><b>MetaTrader 5</b> et un <b>compte démo</b> gratuit.</li></ul>
<p>À SERGIO FX, nous utilisons <b>HFM (HF Markets)</b>.</p>
<h2>Ouvrir ton compte pas à pas</h2>
<ol class="steps"><li>Ouvre le lien d'inscription : <a href="${LINK.HFM}" target="_blank" rel="noopener">hfm.com (lien SERGIO FX)</a> → <b>S'inscrire</b>.</li>
<li>Choisis ton pays, entre ton email et un mot de passe solide (8 à 15 caractères avec majuscule, minuscule, chiffre et caractère spécial).</li>
<li>Entre le code à 6 chiffres reçu par email (pense aux spams).</li>
<li>Profil : prénom et nom <b>identiques à ta pièce d'identité</b>, téléphone, date de naissance.</li>
<li>Devise du compte : <b>USD</b> (elle ne pourra plus être changée). Coche les conditions.</li>
<li>Adresse, puis profil investisseur : réponds honnêtement. À « Comment avez-vous connu HFM ? », choisis « Recommandé par un partenaire ».</li>
<li>Vérification d'identité (photo nette de ton passeport, ta carte d'identité ou ton permis), puis du téléphone (SMS ou WhatsApp).</li>
<li>Dans <b>« Mes comptes de trading »</b>, ouvre un compte <b>MT5 démo</b>. Le compte réel viendra plus tard.</li></ol>
<div class="box key"><b class="t">Garde précieusement</b>L'email de HFM contenant ton <b>numéro de compte MT5</b>, ton <b>mot de passe</b> et le nom du <b>serveur</b>. Tu en as besoin pour te connecter à MetaTrader 5.</div>
<h2>Démo, réel, dépôt et retrait</h2>
<ul><li><b>Démo</b> : argent virtuel, prix réels. Règle chez nous : au moins <b>20 trades en démo</b> avant le réel.</li><li><b>Réel</b> : commence petit (0,01 lot), avec un montant que tu peux perdre sans que ça change ta vie.</li><li><b>Retrait</b> : en général par le même moyen que le dépôt. Fais un petit retrait test au début. Ton compte doit être vérifié.</li></ul>
<div class="box warn"><b class="t">Sécurité</b>Ne donne jamais ton mot de passe principal. Personne de l'équipe ne te demandera tes identifiants ni de lui envoyer ton capital. Si quelqu'un doit voir ton compte, donne seulement le mot de passe <b>investisseur</b> (lecture seule). Un souci ? <a href="${LINK.WA}" target="_blank" rel="noopener">+228 79 86 78 79</a></div>`},

{t:"TradingView : ton atelier d'analyse",s:"Créer ton compte, ajouter tes paires, dessiner et planifier un trade.",b:`
<p><b>TradingView</b> est la plateforme de graphiques utilisée par la majorité des traders, et par le coach en live. On y <b>analyse</b> (tendance, zones, plan du trade). MetaTrader 5, lui, sert à <b>exécuter</b>.</p>
<h2>1. Créer ton compte</h2>
<ol class="steps"><li>Va sur <b>tradingview.com</b> ou installe l'application TradingView.</li><li>Icône de profil → <b>S'inscrire</b>, avec Google ou ton email.</li><li>Choisis le plan <b>Basic (gratuit)</b> : il suffit largement pour notre méthode.</li><li>Menu du profil → <b>Langue</b> → Français.</li></ol>
<h2>2. Découvrir l'écran</h2>
<ul><li><b>En haut à gauche</b> : la recherche de symbole (tape XAUUSD) et l'unité de temps (1m, 5m, 15m, 1h, 4h, 1D).</li><li><b>En haut</b> : le bouton <b>Indicateurs</b> et le type de graphique (choisis les bougies).</li><li><b>À gauche</b> : la barre d'outils de dessin.</li><li><b>À droite</b> : la liste de surveillance.</li><li><b>Au centre</b> : le graphique. Molette pour zoomer, clic-glisser pour remonter dans le temps.</li></ul>
<h2>3. Ajouter tes paires</h2>
<ol class="steps"><li>Dans la liste de surveillance, clique sur <b>+</b>.</li><li>Ajoute <b>XAUUSD</b> (source OANDA, comme le coach), puis <b>EURUSD</b>, <b>GBPUSD</b>, <b>USDJPY</b> et <b>DXY</b>.</li><li>Clique sur un symbole pour l'afficher.</li></ol>
<h2>4. Régler le graphique</h2>
<ul><li>Clic droit sur le graphique → <b>Paramètres</b> → fuseau horaire <b>UTC</b> : c'est l'heure de Lomé.</li><li>Couleurs des bougies à ton goût (vert/rouge le plus courant).</li><li>Le prix sur TradingView peut différer de quelques dixièmes de celui de MT5 : c'est normal, chaque fournisseur a ses prix. Pour exécuter, c'est MT5 qui compte.</li></ul>
<h2>5. Les outils de dessin à connaître</h2>
<div class="tw"><table><tr><th>Outil</th><th>Usage</th></tr>
<tr><td>Ligne horizontale</td><td>Marquer un niveau précis (sommet, creux)</td></tr><tr><td>Ligne de tendance</td><td>Relier des creux ou des sommets</td></tr>
<tr><td>Rectangle</td><td>Dessiner une zone (SELL ZONE, BUY ZONE)</td></tr><tr><td>Retracement de Fibonacci</td><td>Trouver les zones de correction et l'OTE</td></tr>
<tr><td>Position longue / courte</td><td>Planifier entrée, Stop Loss, Take Profit et voir le ratio</td></tr><tr><td>Texte</td><td>Annoter : « biais SELL », « H4 résistance »…</td></tr></table></div>
<p>Astuce : double-clic sur un dessin pour changer sa couleur ou le prolonger vers la droite. Utilise une couleur par unité de temps pour savoir d'où vient chaque zone.</p>
<h2>6. Planifier un trade avec l'outil position</h2>
<p>C'est l'outil que tu vois sur toutes les captures du coach : une zone rouge (le risque) et une zone verte (le gain visé).</p>
${shot('or-buy-position','Une position longue sur l\'or tracée par le coach : entrée (étiquette grise), Stop Loss (rouge), Take Profit (vert).')}
<ol class="steps"><li>Choisis <b>Position longue</b> (achat) ou <b>Position courte</b> (vente).</li><li>Clique sur ton prix d'entrée.</li><li>Tire la zone rouge jusqu'au Stop Loss et la zone verte jusqu'au Take Profit.</li><li>L'outil affiche la distance et le <b>ratio risque/rendement</b>.</li></ol>
<h2>7. Les alertes</h2>
<p>Clic droit sur ta zone → <b>Ajouter une alerte</b> → notification sur l'application mobile. Tu seras prévenu quand le prix arrive sur ta zone, sans fixer l'écran. Tes dessins sont enregistrés automatiquement et tu les retrouves sur ton téléphone.</p>`},

{t:"MetaTrader 5 : se connecter et passer un ordre",s:"Installer MT5, lire l'écran, ordres au marché et en attente.",b:`
<h2>1. Installer et se connecter</h2>
<ol class="steps"><li>Télécharge <b>MetaTrader 5</b> (éditeur MetaQuotes) sur le Play Store / l'App Store, ou depuis ton espace HFM pour PC.</li><li>Ouvre l'application → menu → <b>Gérer les comptes</b> → <b>+</b> → cherche <b>HFM</b> / <b>HF Markets</b>.</li><li>Choisis le serveur indiqué dans l'email de HFM (Demo pour le compte démo, Live pour le réel).</li><li>Entre ton <b>numéro de compte</b> et ton <b>mot de passe</b> → <b>Connexion</b>.</li></ol>
<h2>2. Lire l'écran</h2>
<div class="tw"><table><tr><th>Onglet</th><th>À quoi il sert</th></tr>
<tr><td><b>Cotations</b></td><td>Les actifs avec leurs prix Bid/Ask. Ajoute XAUUSD avec le +.</td></tr><tr><td><b>Graphique</b></td><td>Le graphique en bougies (l'analyse se fait plutôt sur TradingView).</td></tr>
<tr><td><b>Trade</b></td><td>Tes positions ouvertes, ton solde, tes capitaux propres, ta marge.</td></tr><tr><td><b>Historique</b></td><td>Tous tes trades fermés et leurs résultats.</td></tr></table></div>
<h2>3. Passer un ordre au marché</h2>
<p>Tu entres <b>tout de suite</b>, au prix actuel. À utiliser quand le prix est déjà dans ta zone d'entrée.</p>
<ol class="steps"><li><b>Cotations</b> → XAUUSD → <b>Trade</b>.</li><li>Type : <b>Exécution au marché</b>.</li><li>Volume : ton lot calculé (0,01 pour débuter).</li><li>Renseigne le <b>Stop Loss</b> et le <b>Take Profit</b>.</li><li>Appuie sur <b>Vendre</b> ou <b>Acheter</b>. Vérifie dans l'onglet Trade que le SL et le TP sont bien en place.</li></ol>
<h2>4. Les ordres en attente</h2>
<p>L'ordre ne se déclenche que si le prix atteint ton niveau. Idéal pour ne pas rester devant l'écran.</p>
<div class="tw"><table><tr><th>Ordre</th><th>Placé…</th><th>Idée</th></tr>
<tr><td>🟢 Buy Limit</td><td>sous le prix actuel</td><td>J'achète si le prix redescend sur ma zone d'achat.</td></tr>
<tr><td>🔴 Sell Limit</td><td>au-dessus du prix actuel</td><td>Je vends si le prix remonte sur ma zone de vente.</td></tr>
<tr><td>🟢 Buy Stop</td><td>au-dessus du prix actuel</td><td>J'achète si le prix casse ce niveau vers le haut.</td></tr>
<tr><td>🔴 Sell Stop</td><td>sous le prix actuel</td><td>Je vends si le prix casse ce niveau vers le bas.</td></tr></table></div>
<div class="box tip"><b class="t">Moyen mnémotechnique</b><b>Limit</b> = je veux un meilleur prix (retour sur une zone). <b>Stop</b> = je veux une cassure confirmée.</div>
<h2>5. Stop Loss et Take Profit</h2>
<ul><li><b>Stop Loss</b> : là où le trade se ferme automatiquement en perte si tu as tort. Sous l'entrée pour un BUY, au-dessus pour un SELL, au-delà de la zone (jamais au hasard).</li><li><b>Take Profit</b> : là où tu encaisses automatiquement.</li></ul>
<div class="box warn"><b class="t">Règle non négociable</b>Jamais de trade sans Stop Loss.</div>`},

{t:"MetaTrader 5 : gérer et fermer un trade",s:"Modifier, sécuriser, fermer en partie, lire son historique.",b:`
<h2>Modifier le Stop Loss ou le Take Profit</h2>
<p>Onglet <b>Trade</b> → appui long sur la position → <b>Modifier la position</b> → change le SL ou le TP → <b>Modifier</b>. Sur PC : double-clic sur la position, ou glisse directement les lignes SL/TP sur le graphique.</p>
<h2>Mettre au break-even (BE)</h2>
<p>Quand le trade a bien avancé (souvent au TP1, ou quand il a parcouru autant que ton risque), place le <b>Stop Loss au prix d'entrée</b>. Si le marché revient, tu sors à zéro au lieu de perdre. C'est le sens du message « SL au BE » dans le groupe.</p>
<h2>Fermer une partie du trade</h2>
<p>Appui long → <b>Clôturer la position</b> → au lieu du volume total, entre une partie (ex. 0,02 sur 0,04) → clôturer. Tu encaisses une partie et laisses courir le reste.</p>
<div class="box ex"><b class="t">Exemple</b>SELL or 0,04 lot à 3 868. Le TP1 est touché à 3 858 (+40 $). Tu fermes 0,02 lot (+20 $ encaissés) et mets le SL du reste à 3 868. Le pire scénario devient +20 $.</div>
<h2>Fermer le trade</h2>
<p>Appui long → <b>Clôturer la position</b> → confirmer. Le résultat apparaît dans l'historique.</p>
${shot('or-deux-trades','Deux trades sur la même session : le premier atteint son objectif, le second touche son Stop Loss. Les deux font partie du métier.')}
<h2>Lire ton historique</h2>
<p>Onglet <b>Historique</b> → choisis la période (aujourd'hui, semaine, mois). Tu y vois chaque trade (sens, volume, prix, résultat) et en bas le profit total, les dépôts, retraits, swaps et commissions. C'est la base de ton journal de trading (module 6).</p>
<h2>MT5 sur ordinateur</h2>
<ul><li><b>F9</b> : nouvel ordre · <b>Ctrl+M</b> : liste des cotations · <b>Ctrl+T</b> : boîte à outils (Trade, Historique).</li><li><b>Trading en un clic</b> (clic droit sur le graphique) : pratique, mais à activer seulement quand tu es à l'aise.</li></ul>
<div class="box key"><b class="t">Le duo gagnant</b>Analyse sur <b>TradingView</b> → exécution et gestion sur <b>MT5</b>. Beaucoup de traders ont TradingView sur PC et MT5 sur téléphone.</div>
<p>Tes outils sont prêts. Il est temps d'apprendre à lire un graphique.</p>`}
]};
