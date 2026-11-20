const M1={t:"Comprendre le marché des devises",d:"Ce qu'est le Forex, comment se lit une paire, comment on gagne ou perd de l'argent et ce qui fait bouger les prix.",lessons:[
{t:"Le Forex : le plus grand marché du monde",s:"Définition, utilité et acteurs du marché des changes.",b:`
<p>Le <b>Forex</b> (contraction de <i>Foreign Exchange</i>, « marché des changes ») est le lieu où se rencontrent l'offre et la demande de toutes les monnaies du monde. Chaque fois qu'un euro est échangé contre des dollars, qu'un franc CFA est converti en euros ou qu'une banque achète du yen, une transaction a lieu sur ce marché.</p>
<p>C'est le marché financier le plus <b>liquide</b> de la planète : près de <b>10 000 milliards de dollars</b> y sont échangés chaque jour selon la Banque des règlements internationaux (enquête 2025), bien plus que toutes les bourses d'actions réunies. Il n'a pas de bâtiment central : les échanges se font électroniquement entre banques, institutions et brokers du monde entier, <b>24 h/24 du lundi au vendredi</b>. Quand la séance se termine en Asie, l'Europe prend le relais, puis les États-Unis, et ainsi de suite.</p>
<h2>À quoi sert le Forex ?</h2>
<h3>1. La spéculation</h3>
<p>C'est l'utilisation principale en volume. Banques, fonds d'investissement et particuliers comme toi achètent ou vendent une devise en anticipant sa hausse ou sa baisse, pour réaliser un gain à la clôture de la position. C'est ce que nous faisons en trading.</p>
<h3>2. La couverture (hedging)</h3>
<p>Une entreprise qui paie ses fournisseurs dans une autre monnaie risque de voir ses coûts grimper si le taux de change bouge contre elle. Elle se <b>protège</b> en prenant une position sur le Forex.</p>
<div class="box ex"><b class="t">Exemple concret</b>Un importateur de Lomé doit payer 100 000 dollars de marchandises dans 3 mois. S'il pense que le dollar va se renforcer, il risque de devoir débourser beaucoup plus de francs CFA au moment du paiement. En achetant du dollar dès aujourd'hui (ou en prenant une position qui gagne si le dollar monte), il fige en quelque sorte son coût : si le dollar monte, le gain de sa position compense la hausse de sa facture.</div>
<h3>3. Les échanges du quotidien</h3>
<p>Voyager, acheter un produit en ligne en dollars, envoyer de l'argent à l'étranger : toutes ces opérations passent, à un moment, par le marché des changes.</p>
<h2>Qui sont les acteurs ?</h2>
<div class="tw"><table><tr><th>Acteur</th><th>Rôle</th></tr>
<tr><td><b>Banques centrales</b> (Fed, BCE, Banque d'Angleterre…)</td><td>Fixent les taux d'intérêt et peuvent intervenir sur leur monnaie. Leurs décisions font bouger tout le marché.</td></tr>
<tr><td><b>Grandes banques</b></td><td>Échangent des volumes énormes entre elles (marché interbancaire) et fournissent les prix.</td></tr>
<tr><td><b>Fonds et institutions</b></td><td>Spéculent ou protègent leurs investissements. La grande majorité des volumes vient des institutions.</td></tr>
<tr><td><b>Entreprises</b></td><td>Changent des devises pour leur activité et se couvrent contre les variations.</td></tr>
<tr><td><b>Traders particuliers</b></td><td>Toi : tu accèdes au marché via un <b>broker</b>, qui te fournit une plateforme (MetaTrader 5) et exécute tes ordres.</td></tr></table></div>
<div class="box key"><b class="t">À retenir</b>Le prix bouge parce que de très gros acteurs achètent et vendent. Notre travail de trader n'est pas de « deviner », mais de repérer où ces acteurs interviennent et d'aller dans le même sens qu'eux.</div>
<div class="box warn"><b class="t">Le risque dès le départ</b>On peut gagner quand le prix monte comme quand il baisse… mais on peut aussi perdre dans les deux sens. Avec l'effet de levier, une petite variation peut coûter cher. C'est pour ça que la gestion du risque est au cœur de cette formation.</div>`},

{t:"Lire une paire de devises",s:"Base, cotation, BUY, SELL, familles de paires, le dollar et l'Or.",b:`
<p>Sur le Forex, on n'achète jamais une devise « toute seule » : on l'achète toujours <b>contre</b> une autre. C'est pour cela que les prix sont affichés par <b>paires</b>.</p>
${pairBox('GBP','USD')}
<h2>Base et cotation</h2>
<p>Dans <b>EUR/USD = 1,1760</b>, l'euro est la <b>devise de base</b> et le dollar la <b>devise de cotation</b>. Le prix signifie : <b>1 euro vaut 1,1760 dollar</b>. Autrement dit, il faut 1,1760 dollar pour acheter un euro.</p>
<ul><li>Si le prix <b>monte</b> (1,1760 → 1,1800), l'euro se renforce face au dollar.</li><li>Si le prix <b>baisse</b> (1,1760 → 1,1720), l'euro s'affaiblit face au dollar.</li></ul>
<p>Acheter EUR/USD revient à échanger des dollars contre des euros en pariant sur la hausse de l'euro ; vendre EUR/USD, c'est l'inverse. Ce qui rend le Forex particulier, c'est qu'il faut toujours penser à <b>deux économies à la fois</b>.</p>
<h2>Les familles de paires</h2>
<div class="tw"><table><tr><th>Famille</th><th>Définition</th><th>Exemples</th></tr>
<tr><td><b>Majeures</b></td><td>Le dollar américain contre une autre grande devise. Les plus échangées (elles concentrent l'essentiel des volumes), avec les frais les plus bas.</td><td>EUR/USD, USD/JPY, GBP/USD, USD/CHF, USD/CAD, AUD/USD, NZD/USD</td></tr>
<tr><td><b>Croisées</b> (crosses)</td><td>Deux grandes devises sans le dollar.</td><td>EUR/GBP, EUR/JPY, GBP/JPY</td></tr>
<tr><td><b>Exotiques</b></td><td>Une grande devise contre celle d'un pays émergent. Frais élevés, mouvements brusques.</td><td>USD/ZAR, USD/TRY, USD/MXN</td></tr></table></div>
<p>Quelques surnoms que tu entendras : <b>Cable</b> (GBP/USD), <b>Fiber</b> (EUR/USD), <b>Loonie</b> (CAD), <b>Aussie</b> (AUD), <b>Kiwi</b> (NZD), <b>Swissy</b> (CHF).</p>
<h2>Le dollar, la devise reine… et le DXY</h2>
<p>Le dollar américain est présent dans la grande majorité des échanges : c'est la monnaie de réserve mondiale, et l'or, le pétrole et beaucoup de matières premières sont cotés en dollars. Pour mesurer la force du dollar « en général », on utilise le <b>DXY</b> : un indice qui compare le dollar à un <b>panier</b> de devises (euro, yen, livre sterling, dollar canadien, couronne suédoise et franc suisse).</p>
<ul><li>Une <b>paire</b> compare deux monnaies entre elles.</li><li>Un <b>panier</b> (comme le DXY) mesure la force d'une monnaie face à plusieurs autres. Si le DXY monte, le dollar se renforce globalement.</li></ul>
<h2>L'Or (XAUUSD), notre actif principal</h2>
<p><b>XAUUSD</b> est le prix d'une once d'or en dollars. Si XAUUSD = 3 860, une once vaut 3 860 $. L'or se trade exactement comme une paire de devises.</p>
<ul><li>C'est une <b>valeur refuge</b> : en période de crise ou d'inquiétude, les investisseurs l'achètent pour protéger leur argent.</li><li>Il est très lié au dollar : <b>dollar fort → or souvent en baisse</b>, et inversement. C'est pour ça qu'on garde un œil sur le DXY.</li><li>Il bouge beaucoup (souvent 20 à 50 $ par jour, parfois plus) : de belles opportunités, mais un risque élevé.</li></ul>`},

{t:"Pips, lots et calcul des gains",s:"Mesurer un mouvement, choisir sa taille de position, calculer un résultat.",b:`
<h2>Le contrat et la marge</h2>
<p>Un <b>contrat standard</b> (1 lot) vaut <b>100 000 unités</b> de la première devise : sur EUR/USD, un contrat porte sur 100 000 euros. Heureusement, avec un broker tu n'as pas besoin de bloquer toute cette somme : tu déposes seulement une <b>marge</b>, une sorte de dépôt de garantie (on y revient au module 6). Sur l'or, 1 lot standard = <b>100 onces</b>.</p>
<h2>Le pip</h2>
<p>La plupart des paires sont cotées avec 4 décimales. Le <b>pip</b> est le « pas » de cotation standard :</p>
<div class="tw"><table><tr><th>Actif</th><th>1 pip =</th><th>Exemple</th></tr>
<tr><td>EUR/USD, GBP/USD…</td><td>0,0001</td><td>1,1760 → 1,1780 = <b>20 pips</b></td></tr>
<tr><td>Paires avec le yen</td><td>0,01</td><td>150,20 → 150,50 = <b>30 pips</b></td></tr>
<tr><td>Or (XAUUSD)</td><td>0,10 $ (convention la plus courante)</td><td>3 860 → 3 865 = <b>50 pips</b></td></tr></table></div>
<p>Les brokers affichent souvent un chiffre de plus : la <b>pipette</b> (1/10 de pip). Dans 1,17605, le dernier « 5 » est une pipette.</p>
<h2>Le lot : la taille de ta position</h2>
<div class="tw"><table><tr><th>Lot</th><th>Volume sur MT5</th><th>Forex</th><th>Or</th><th>Valeur d'1 $ de mouvement sur l'or</th></tr>
<tr><td>Standard</td><td>1,00</td><td>100 000 unités</td><td>100 onces</td><td>100 $</td></tr>
<tr><td>Mini</td><td>0,10</td><td>10 000</td><td>10 onces</td><td>10 $</td></tr>
<tr><td>Micro</td><td>0,01</td><td>1 000</td><td>1 once</td><td>1 $</td></tr></table></div>
<p>Sur les paires qui finissent par USD, 1 pip vaut <b>10 $ pour 1 lot</b>, 1 $ pour 0,10 lot et 0,10 $ pour 0,01 lot.</p>
<h2>Calculer un gain ou une perte</h2>
<div class="box ex"><b class="t">Exemple 1 – BUY sur EUR/USD</b>Entrée 1,1760 · Sortie 1,1800 · Lot 0,10 → mouvement de 40 pips × 1 $ = <b>+40 $</b>.</div>
<div class="box ex"><b class="t">Exemple 2 – SELL sur l'or (un vrai signal du groupe)</b>Entrée 3 871,75 · Sortie au TP 3 860,06 · Lot 0,05 → mouvement de 11,69 $ (117 pips). À 0,05 lot, 1 $ de mouvement vaut 5 $ → 11,69 × 5 = <b>+58,45 $</b>.</div>
<div class="box ex"><b class="t">Exemple 3 – Stop Loss touché</b>BUY or à 3 861,55 · SL 3 858,02 · Lot 0,10 → 3,53 $ contre toi × 10 $ = <b>−35,30 $</b>.</div>
<h2>Bid, Ask et spread</h2>
<p>Ton broker affiche deux prix : le <b>Bid</b> (prix auquel tu peux vendre) et l'<b>Ask</b> (prix auquel tu peux acheter, toujours un peu plus haut). L'écart s'appelle le <b>spread</b> : c'est le principal coût d'un trade. Dès l'ouverture, ta position démarre légèrement en négatif. Le spread s'élargit la nuit, à l'ouverture du lundi et pendant les grosses annonces.</p>
<div class="box tip"><b class="t">Bon à savoir</b>MT5 calcule ton gain/perte en direct. Mais comprendre ces calculs t'évitera la pire erreur du débutant : un lot trop gros pour ton compte.</div>`},

{t:"Ce qui fait bouger les devises",s:"Banques centrales, économie, matières premières, valeurs refuges et annonces.",b:`
<p>Pour comprendre une paire, il faut regarder les forces qui poussent <b>chacune</b> des deux monnaies. On distingue les facteurs propres au pays, les facteurs externes et les publications économiques.</p>
<h2>1. Les banques centrales</h2>
<p>C'est le facteur n°1. La banque centrale fixe les <b>taux d'intérêt</b> et contrôle la quantité de monnaie en circulation.</p>
<ul><li>Politique <b>« hawkish »</b> (restrictive) : hausse des taux, moins de liquidité. La monnaie devient plus rare et plus rémunératrice → elle a tendance à <b>monter</b>.</li><li>Politique <b>« dovish »</b> (accommodante) : baisse des taux, plus de liquidité → la monnaie a tendance à <b>baisser</b>.</li></ul>
<div class="box ex"><b class="t">Et l'or ?</b>Quand la Fed laisse entendre qu'elle va baisser ses taux, le dollar s'affaiblit souvent… et l'or monte. C'est pour ça que chaque discours ou compte rendu de la Fed est surveillé de près dans le groupe.</div>
<h2>2. La santé de l'économie et la dette</h2>
<p>Les investisseurs placent leur argent là où l'avenir semble solide : croissance, emploi, dette maîtrisée, excédent commercial. Une économie en bonne santé attire les capitaux et soutient sa monnaie.</p>
<h2>3. Les devises liées aux matières premières</h2>
<ul><li><b>Dollar australien (AUD)</b> : l'Australie exporte beaucoup de minerais. Quand les métaux montent, l'AUD a tendance à suivre.</li><li><b>Dollar canadien (CAD)</b> : très lié au pétrole. Pétrole en hausse → CAD souvent en hausse.</li></ul>
<h2>4. Les valeurs refuges</h2>
<p>En période de peur (crise, guerre, krach), les capitaux se réfugient vers des actifs jugés sûrs : l'<b>or</b>, le <b>yen japonais</b> (dette détenue en très grande partie par les Japonais eux-mêmes) et le <b>franc suisse</b> (économie stable, faible endettement).</p>
<h2>5. Les publications économiques</h2>
<div class="tw"><table><tr><th>Publication</th><th>Ce qu'elle mesure</th><th>Impact</th></tr>
<tr><td><b>Décision de taux</b></td><td>Taux directeur de la banque centrale</td><td>Très fort</td></tr>
<tr><td><b>CPI / IPC</b></td><td>Inflation (hausse des prix)</td><td>Très fort</td></tr>
<tr><td><b>NFP</b></td><td>Créations d'emplois aux États-Unis (1ᵉʳ vendredi du mois, 13:30 heure de Lomé en hiver)</td><td>Très fort sur l'or</td></tr>
<tr><td><b>PIB</b></td><td>Croissance de l'économie</td><td>Fort</td></tr>
<tr><td><b>Balance commerciale</b>, ventes au détail</td><td>Commerce extérieur, consommation</td><td>Moyen à fort</td></tr></table></div>
<p>Le <b>calendrier économique</b> (Forex Factory, Investing.com) liste toutes ces annonces avec leur heure et leur impact. Chaque matin, le groupe publie celles du jour.</p>
<h2>6. Les événements imprévus</h2>
<p>Certains chocs sont impossibles à prévoir et font bouger les marchés de façon spectaculaire :</p>
<ul><li><b>Janvier 2015</b> : la Banque nationale suisse abandonne sans prévenir son plancher face à l'euro. EUR/CHF s'effondre d'environ 1,20 à 0,95 en quelques minutes.</li><li><b>Juin 2016</b> : le Royaume-Uni vote pour le Brexit. La livre sterling chute à ses plus bas depuis des décennies.</li><li>Tensions commerciales, guerres, élections : tout ce qui inquiète les investisseurs profite souvent à l'or.</li></ul>
<div class="box key"><b class="t">Ce que ça change pour toi</b>Tu n'as pas besoin d'être économiste. Mais tu dois savoir <b>quand</b> une annonce importante tombe, pour ne pas ouvrir un trade juste avant, et comprendre <b>pourquoi</b> l'or s'envole ou chute ce jour-là.</div>`},

{t:"Quand trader : les sessions",s:"Le rythme du marché en heure de Lomé.",b:`
<p>Le Forex ouvre le dimanche soir et ferme le vendredi soir. Entre les deux, il suit le soleil, d'une grande place financière à l'autre. Lomé étant à l'heure GMT (UTC+0), les horaires ci-dessous sont directement ton heure locale.</p>
<div class="tw"><table><tr><th>Session</th><th>Ouverture</th><th>Fermeture</th><th>Caractère</th></tr>
<tr><td>🇦🇺 Sydney</td><td>22:00</td><td>07:00</td><td>Calme</td></tr><tr><td>🇯🇵 Tokyo</td><td>00:00</td><td>09:00</td><td>Calme à moyen</td></tr>
<tr><td>🇬🇧 Londres</td><td>08:00</td><td>17:00</td><td>Très actif</td></tr><tr><td>🇺🇸 New York</td><td>13:00</td><td>22:00</td><td>Très actif jusqu'à ~17:00</td></tr></table></div>
<p><i>Horaires d'hiver (novembre à mars). En été, Londres et New York ouvrent une heure plus tôt.</i></p>
<h2>Les meilleurs moments</h2>
<ul><li><b>L'ouverture de Londres</b> (08:00–11:00) : beaucoup de volume, la tendance du jour se dessine souvent ici.</li><li><b>Le chevauchement Londres + New York</b> (13:00–17:00) : le moment le plus actif de la journée. Les annonces américaines tombent souvent à 13:30.</li><li><b>Mardi à jeudi</b> : souvent les jours les plus réguliers.</li></ul>
<h2>Les moments à éviter</h2>
<ul><li>Quelques minutes avant et après une annonce à fort impact.</li><li>La nuit et la session asiatique pour l'or (peu de volume, spreads plus larges).</li><li>Le lundi matin et le vendredi après-midi.</li><li>Quand tu es fatigué, énervé ou que tu veux « te refaire ».</li></ul>
<div class="box ex"><b class="t">Chez SERGIO FX</b>Session 1 : <b>08:00 – 11:30</b> (Londres) · Session 2 : <b>13:30 – 16:30</b> (US). Tout le reste de la formation est construit autour de ce rythme.</div>
<p>Tu as maintenant les bases du marché. Place aux outils : ouvrir ton compte, installer TradingView et MetaTrader 5.</p>`}
]};
