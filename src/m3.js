const M3={t:"Lire un graphique",d:"Les chandeliers, les supports et résistances, les lignes de tendance et les outils complémentaires.",lessons:[
{t:"Les chandeliers japonais",s:"Lire une bougie, les figures clés et comment s'en servir.",b:`
<p>Ouvre n'importe quelle plateforme : au centre, il y a un graphique en <b>chandeliers japonais</b>. Inventés par des marchands de riz japonais et popularisés en Occident par Steve Nison, ils montrent en un coup d'œil la bataille entre acheteurs et vendeurs. Lire ce graphique, c'est ce qu'on appelle l'<b>analyse technique</b>. Son idée de base : le prix intègre déjà toute l'information, et les comportements humains se répètent. Elle ne prédit pas l'avenir, elle montre des <b>possibilités</b>.</p>
${anatomy()}
<h2>Ce que raconte une bougie</h2>
<ul><li><b>Le corps</b> : l'écart entre l'ouverture et la clôture. Grand corps = un camp a dominé. Petit corps = hésitation.</li><li><b>Les mèches</b> : les extrêmes atteints. Une longue mèche haute = le prix a été rejeté vers le bas ; une longue mèche basse = rejeté vers le haut.</li><li><b>L'unité de temps</b> : chaque bougie peut représenter 1 minute (M1), 5 minutes (M5), 1 heure (H1), 4 heures (H4), 1 jour (D1)… Plus elle est grande, plus la bougie a de poids.</li></ul>
<div class="box tip"><b class="t">Règle d'or</b>Attends toujours la <b>clôture</b> d'une bougie avant de l'interpréter. Tant qu'elle est ouverte, elle peut complètement changer de forme.</div>
<h2>Les bougies de base</h2>
${pats([['Toupie','Indécision',PAT.top],['Marubozu vert','Acheteurs aux commandes',PAT.maruB],['Marubozu rouge','Vendeurs aux commandes',PAT.maruR],['Doji','Équilibre parfait',PAT.doji]])}
<h2>Les figures de retournement</h2>
<p>Un petit corps avec une longue mèche (au moins 2 fois le corps) : le sens dépend de <b>l'endroit</b> où la bougie apparaît.</p>
${pats([['Marteau','Après une baisse : rebond possible',PAT.hammer],['Marteau inversé','Après une baisse : rebond possible',PAT.invH],['Pendu','Après une hausse : baisse possible',PAT.hang],['Étoile filante','Après une hausse : baisse possible',PAT.star]])}
<h2>Les figures à deux et trois bougies</h2>
${pats([['Avalement haussier','La verte englobe la rouge',PAT.engB],['Avalement baissier','La rouge englobe la verte',PAT.engR],['Pince basse','Deux plus bas identiques',PAT.twB],['Pince haute','Deux plus hauts identiques',PAT.twT],['Étoile du matin','Retournement haussier',PAT.mstar],['Étoile du soir','Retournement baissier',PAT.estar],['Trois soldats blancs','Forte poussée acheteuse',PAT.soldiers],['Trois corbeaux noirs','Forte poussée vendeuse',PAT.crows]])}
<h2>Comment s'en servir</h2>
<ol class="steps"><li>Une figure seule, au milieu de nulle part, ne vaut presque rien.</li><li>Elle devient un <b>signal</b> quand elle se forme <b>sur une zone importante</b> : un marteau sur un support, une étoile filante dans une zone de vente.</li><li>Pour les figures fragiles (doji, toupie, pendu), attends que la bougie suivante confirme.</li><li>Ton Stop Loss se place au-delà de la mèche de la figure et de la zone.</li></ol>
<div class="box warn"><b class="t">Les erreurs classiques</b>Vouloir lire chaque bougie, ignorer le contexte, entrer avant la clôture, et oublier qu'un signal en M1 pèse bien moins qu'en H1 ou H4.</div>`},

{t:"Supports, résistances et zones",s:"Les niveaux où le prix réagit, et comment les trader.",b:`
<p>Les supports et résistances sont la base de toute analyse. Ce sont des <b>zones</b> où le prix a déjà réagi, et où beaucoup de traders s'attendent à ce qu'il réagisse encore.</p>
${zz({pts:[[0,30],[15,72],[28,32],[45,74],[60,31],[78,73],[95,48]],band:[[69,77,'#fca5a5','Résistance','#9f1239'],[27,35,'#86efac','Support']],cap:'Le prix rebondit plusieurs fois sur les mêmes zones.'})}
<ul><li><b>Support</b> : zone <b>sous</b> le prix où les acheteurs ont été plus forts. Un plancher.</li><li><b>Résistance</b> : zone <b>au-dessus</b> du prix où les vendeurs ont repris le contrôle. Un plafond.</li></ul>
<h2>Bien les tracer</h2>
<ul><li>Cherche les endroits où le prix s'est retourné <b>au moins deux fois</b>.</li><li>Trace une <b>zone</b> (rectangle), pas une ligne parfaite : le prix dépasse souvent un peu.</li><li>Commence en H4 ou D1, puis descends. Plus l'unité de temps est grande, plus le niveau compte.</li></ul>
<h2>Les zones d'offre et de demande</h2>
<p>Avant un mouvement violent, le prix fait souvent une petite pause : une <b>base</b>. C'est là que de gros ordres ont été placés. Quand le prix y revient, une partie de ces ordres peut encore réagir.</p>
<ul><li><b>Zone de demande (BUY ZONE)</b> : la base avant une forte hausse.</li><li><b>Zone d'offre (SELL ZONE)</b> : la base avant une forte baisse.</li></ul>
<p>Une bonne zone : un départ explosif, peu de temps passé dans la base, pas encore retouchée, et dans le sens de la tendance de fond.</p>
${shot('or-sell-zones','Les zones tracées par le coach sur l\'or (rectangles) et une vente prise au retour dans la zone.')}
<h2>Trader un niveau : rebond ou cassure</h2>
<ul><li><b>Le rebond</b> : le prix touche la zone et montre un signal (bougie de retournement). Stop Loss de l'autre côté de la zone, objectif sur la zone opposée.</li><li><b>La cassure</b> : attends une <b>clôture</b> nette au-delà du niveau, pas une simple mèche. Méthode prudente : attendre le retour du prix sur le niveau cassé (le « retest »).</li></ul>
<h2>L'inversion des rôles</h2>
${zz({pts:[[0,10],[18,50],[32,28],[50,80],[64,52],[86,94]],dash:[[8,50,96]],lab:[[18,50,'Résistance','t'],[64,52,'Nouveau support','b']],cap:'Une résistance cassée devient souvent un support.'})}
<div class="box warn"><b class="t">Les fausses cassures</b>Le prix passe parfois au-delà d'un niveau… puis revient aussitôt. On en reparle au module 4 avec la notion d'inducement.</div>`},

{t:"Lignes de tendance et canaux",s:"Voir la direction du marché et ses limites.",b:`
<p>Une <b>ligne de tendance</b> relie au moins deux creux (tendance haussière) ou deux sommets (tendance baissière). Elle montre la direction et sert de support ou de résistance « en pente ».</p>
${zz({pts:[[0,10],[16,45],[28,28],[46,65],[58,46],[78,85],[90,72]],ln:[[0,10,96,68]],ring:[[58,46]],cap:'Deux points pour tracer la ligne, un troisième contact pour la confirmer.'})}
<h2>Les règles</h2>
<ul><li>Tendance haussière : relie les <b>creux</b>, la ligne est sous le prix.</li><li>Tendance baissière : relie les <b>sommets</b>, la ligne est au-dessus.</li><li>Ne force pas : si ta ligne coupe beaucoup de bougies, elle n'est pas valable.</li><li>Une ligne trop raide casse souvent vite.</li></ul>
<h2>Comment l'utiliser</h2>
<ul><li><b>Rebond</b> : en tendance haussière, on cherche un achat quand le prix revient sur la ligne et montre un signal.</li><li><b>Cassure</b> : une clôture nette de l'autre côté affaiblit la tendance. La ligne cassée peut devenir une résistance.</li></ul>
<h2>Les canaux</h2>
<p>Trace une ligne <b>parallèle</b> de l'autre côté du prix : tu obtiens un canal. Le prix évolue entre deux bornes.</p>
${zz({pts:[[0,10],[16,45],[28,28],[46,65],[58,46],[78,85],[90,72]],ln:[[0,10,96,68],[0,36,96,94,'#7c3aed',1.6]],cap:'Canal haussier : ligne de tendance sous les creux, parallèle au-dessus des sommets.'})}
<ul><li>Trade <b>dans le sens du canal</b> : en canal haussier, acheter près de la ligne du bas est plus sûr que vendre près de celle du haut.</li><li>La ligne d'en face sert d'objectif.</li><li>Une sortie nette du canal peut lancer un mouvement fort.</li></ul>
${shot('or-buy-tendance','Sur l\'or, le coach achète au contact d\'une ligne de tendance haussière et d\'une zone.')}`},

{t:"Fibonacci, moyennes mobiles et indicateurs",s:"Les outils qui complètent la lecture du prix.",b:`
<h2>Fibonacci</h2>
<p>Le prix ne monte jamais en ligne droite : il avance, recule un peu (il « corrige »), puis repart. L'outil <b>retracement de Fibonacci</b> aide à estimer jusqu'où il peut reculer. Les niveaux viennent de la suite de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89…), où chaque nombre divisé par le suivant tend vers 0,618.</p>
${zz({pts:[[0,15],[10,8],[40,90],[55,50],[62,58],[70,42],[92,96]],fx:10,fib:[[90,'0'],[70.6,'0,236'],[58.7,'0,382'],[49,'0,5'],[39.3,'0,618'],[25.5,'0,786'],[8,'1']],cap:'Tracé du creux vers le sommet : la correction s\'arrête entre 0,5 et 0,618 avant de repartir.'})}
<ul><li><b>Tendance haussière</b> : trace du creux vers le sommet. <b>Baissière</b> : du sommet vers le creux.</li><li>Les niveaux les plus surveillés : <b>0,382, 0,5 et 0,618</b>, et la zone <b>0,618–0,786</b> (l'OTE, au module 5).</li><li>Fibonacci n'est pas magique : il fonctionne surtout parce que beaucoup de traders le regardent. Il devient intéressant quand il tombe sur une zone déjà repérée (on parle de <b>confluence</b>).</li></ul>
<h2>Les moyennes mobiles</h2>
<p>Une moyenne mobile calcule le prix moyen des dernières bougies et le trace en ligne. Elle lisse le graphique.</p>
<ul><li><b>SMA</b> (simple) ou <b>EMA</b> (exponentielle, réagit plus vite).</li><li>Réglages courants : 20 (court terme), 50 (moyen terme), 200 (tendance de fond, très suivie).</li><li>Prix au-dessus d'une moyenne qui monte : on privilégie les achats. En dessous d'une moyenne qui baisse : les ventes.</li></ul>
<h2>Les indicateurs populaires</h2>
<div class="tw"><table><tr><th>Indicateur</th><th>Rôle</th><th>Lecture simple</th></tr>
<tr><td>RSI</td><td>Force du mouvement</td><td>Au-dessus de 70 : suracheté · en dessous de 30 : survendu</td></tr>
<tr><td>MACD</td><td>Élan de la tendance</td><td>Croisement des lignes = changement d'élan possible</td></tr>
<tr><td>Bandes de Bollinger</td><td>Volatilité</td><td>Bandes serrées = calme avant un mouvement</td></tr>
<tr><td>ATR</td><td>Amplitude moyenne des bougies</td><td>Aide à placer un Stop Loss adapté</td></tr></table></div>
<div class="box key"><b class="t">Notre approche</b>Le prix d'abord, les indicateurs ensuite. Un ou deux outils maximum, jamais dix. L'indicateur confirme, la zone décide.</div>
<p>Tu sais lire un graphique. Prochaine étape, la plus importante : comprendre la <b>structure du marché</b>.</p>`}
]};
