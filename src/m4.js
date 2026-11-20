const UPT={pts:[[0,5],[22,50],[38,28],[60,70],[76,52],[96,95]],lab:[[22,50,'HH','t'],[38,28,'HL','b'],[60,70,'HH','t'],[76,52,'HL','b'],[96,95,'HH','t']]};
const DNT={pts:[[0,95],[20,45],[36,72],[58,28],[76,52],[96,6]],lab:[[20,45,'LL','b'],[36,72,'LH','t'],[58,28,'LL','b'],[76,52,'LH','t'],[96,6,'LL','b']]};
const imbalance=()=>`<figure><svg viewBox="0 0 520 300" style="background:var(--sch)" font-family="Arial">
<rect x="150" y="96" width="250" height="58" fill="#facc15" opacity=".45"/><text x="232" y="180" font-size="15" font-weight="700" fill="#854d0e">Imbalance (FVG)</text>
<line x1="120" y1="150" x2="120" y2="250" stroke="#16a34a" stroke-width="3"/><rect x="104" y="165" width="32" height="60" fill="#16a34a"/>
<line x1="200" y1="40" x2="200" y2="215" stroke="#16a34a" stroke-width="3"/><rect x="184" y="55" width="32" height="150" fill="#16a34a"/>
<line x1="280" y1="32" x2="280" y2="98" stroke="#16a34a" stroke-width="3"/><rect x="264" y="40" width="32" height="45" fill="#16a34a"/>
<text x="120" y="275" text-anchor="middle" font-size="13" fill="#111">bougie 1</text><text x="200" y="240" text-anchor="middle" font-size="13" fill="#111">bougie 2</text><text x="280" y="22" text-anchor="middle" font-size="13" fill="#111">bougie 3</text>
</svg><figcaption>Le plus haut de la bougie 1 et le plus bas de la bougie 3 ne se touchent pas : le prix est passé trop vite, des ordres restent « ouverts » dans cet espace.</figcaption></figure>`;
const M4={t:"La structure du marché",d:"Comprendre pourquoi le prix bouge, lire la tendance, ses continuations, ses cassures et ses pièges.",lessons:[
{t:"Pourquoi le prix bouge : la liquidité",s:"Le carnet d'ordres, la quête de liquidité et le « composite man ».",b:`
<p>Le prix ne monte ni ne descend jamais en ligne droite : il oscille. Pour comprendre pourquoi, il faut regarder ce qui se passe « sous » le graphique : le <b>carnet d'ordres</b>.</p>
<h2>Le carnet d'ordres</h2>
<p>C'est un tableau qui recense, à chaque prix, les ordres d'achat et les ordres de vente en attente. Une transaction n'a lieu que si un acheteur et un vendeur se rencontrent au même prix.</p>
<div class="tw"><table class="ob"><tr><th>Achat</th><th>Prix (or)</th><th>Vente</th></tr>
<tr><td class="b"></td><td class="p">3 861,20</td><td class="s">15</td></tr><tr><td class="b"></td><td class="p">3 861,10</td><td class="s">42</td></tr><tr><td class="b"></td><td class="p">3 861,00</td><td class="s">27</td></tr><tr><td class="b"></td><td class="p">3 860,90</td><td class="s">33</td></tr>
<tr><td class="b">48</td><td class="p" style="color:#e11d48">3 860,80</td><td class="s">30</td></tr>
<tr><td class="b">22</td><td class="p">3 860,70</td><td class="s"></td></tr><tr><td class="b">65</td><td class="p">3 860,60</td><td class="s"></td></tr><tr><td class="b">19</td><td class="p">3 860,50</td><td class="s"></td></tr></table></div>
<p>Au prix actuel (3 860,80), il y a <b>48 contrats acheteurs</b> pour seulement <b>30 contrats vendeurs</b>. Une fois les 30 échangés, il reste <b>18 acheteurs sans contrepartie</b>. Pour les satisfaire, le prix doit <b>monter</b> chercher des vendeurs plus haut. C'est ça, la <b>liquidité</b> : le marché est en quête permanente de contreparties.</p>
<div class="box key"><b class="t">L'idée centrale</b>Le prix se déplace là où il trouve de la liquidité. Et la liquidité, ce sont souvent… les ordres en attente et les <b>Stop Loss</b> des autres traders, accumulés au-dessus des sommets et sous les creux.</div>
<h2>Le « composite man »</h2>
<p>La grande majorité des volumes vient des institutions financières (banques, fonds). Pour lancer leurs énormes positions, elles ont besoin de beaucoup de contrepartie. Richard D. Wyckoff, l'un des pères de l'analyse technique, proposait d'imaginer le marché comme s'il était dirigé par <b>un seul grand acteur</b> : le <b>composite man</b>.</p>
<p>Ce raisonnement est très utile : au lieu de te demander « où va le prix ? », demande-toi <b>« où le gros acteur va-t-il trouver la liquidité dont il a besoin ? »</b>. C'est tout l'esprit de ce module.</p>`},

{t:"Tendance haussière et baissière",s:"HH, HL, LH, LL : la structure brute du marché.",b:`
<p>Il n'existe que deux types de tendance. Tout le reste en découle.</p>
<h2>La tendance haussière</h2>
<p>Des sommets de plus en plus hauts (<b>Higher High, HH</b>) et des creux de plus en plus hauts (<b>Higher Low, HL</b>).</p>
${zz({...UPT,cap:'Tendance haussière : chaque sommet et chaque creux est plus haut que le précédent.'})}
<h2>La tendance baissière</h2>
<p>Des sommets de plus en plus bas (<b>Lower High, LH</b>) et des creux de plus en plus bas (<b>Lower Low, LL</b>).</p>
${zz({...DNT,cap:'Tendance baissière : chaque sommet et chaque creux est plus bas que le précédent.'})}
<p>C'est simple à comprendre, et pourtant c'est la base de tout : une telle structure peut durer des mois, voire des années sur certains actifs. Elle définit ton <b>biais</b> : la direction dans laquelle tu cherches tes trades.</p>
<h2>Pourquoi le marché fait des vagues</h2>
<p>Wyckoff a décrit le cycle du prix en phases d'<b>accumulation</b> (les gros acteurs achètent discrètement) et de <b>distribution</b> (ils revendent). Chaque nouveau sommet ou creux est le résultat de ces phases. Entre deux, le prix corrige pour aller chercher de la liquidité avant de repartir.</p>
<div class="box tip"><b class="t">Sur TradingView</b>Prends l'habitude d'écrire HH, HL, LH ou LL sur les sommets et creux importants (outil Texte). Au bout de quelques jours, tu les verras sans même les écrire.</div>`},

{t:"Continuation et cassure de structure",s:"Savoir quand la tendance continue et quand elle change.",b:`
<h2>Ce qui se passe entre deux points</h2>
<p>Dans nos modèles, le prix semble aller tout droit d'un point à l'autre. En réalité, entre un sommet et la cassure de ce sommet, il se passe beaucoup de choses. Cette phase s'appelle le <b>Complex Pullback (CP)</b> en tendance haussière et le <b>Complex Throwback (CT)</b> en tendance baissière.</p>
<p>La règle est simple : <b>tant que le dernier sommet (ou le dernier creux) n'est pas cassé, on est toujours dans le pullback/throwback</b>. Dès qu'il est cassé, la phase est terminée.</p>
<h2>La continuation de tendance (BOS)</h2>
<p>Il n'existe que deux cas :</p>
<ul><li>En tendance haussière : <b>le dernier sommet est cassé sans que le dernier creux le soit</b>.</li><li>En tendance baissière : <b>le dernier creux est cassé sans que le dernier sommet le soit</b>.</li></ul>
<p>On appelle cela une cassure de structure dans le sens de la tendance : un <b>BOS</b> (Break of Structure). Il confirme la direction.</p>
${zz({...UPT,box:[[22,28,49.5,50,'CP'],[60,52,84.4,70,'CP']],red:[[22,50,49.5],[60,70,84.4]],cap:'Tendance haussière : chaque CP se termine quand le sommet précédent (ligne rouge) est cassé.'})}
${zz({...DNT,box:[[20,45,49.5,72,'CT'],[58,28,86.4,52,'CT']],red:[[20,45,49.5],[58,28,86.4]],cap:'Tendance baissière : chaque CT se termine quand le creux précédent est cassé.'})}
<h2>La cassure de tendance (CHoCH)</h2>
<p>Là encore, deux cas seulement :</p>
<ul><li>En tendance haussière : <b>le dernier creux est cassé sans que le dernier sommet le soit</b>.</li><li>En tendance baissière : <b>le dernier sommet est cassé sans que le dernier creux le soit</b>.</li></ul>
<p>La continuation est invalidée : la structure commence à changer de sens. On parle de <b>CHoCH</b> (Change of Character).</p>
${zz({pts:[[0,5],[22,50],[38,28],[60,70],[76,52],[86,85],[97,30]],lab:[[22,50,'HH','t'],[38,28,'HL','b'],[60,70,'HH','t'],[76,52,'HL','b'],[86,85,'HH','t']],box:[[22,28,49.5,50,'CP']],red:[[22,50,49.5]],gray:[[76,52,92.3]],x:[[83,52]],cap:'Le dernier creux (HL) est cassé : la tendance haussière est invalidée.'})}
${zz({pts:[[0,95],[20,45],[36,72],[58,28],[76,52],[86,15],[98,75]],lab:[[20,45,'LL','b'],[36,72,'LH','t'],[58,28,'LL','b'],[76,52,'LH','t'],[86,15,'LL','b']],box:[[20,45,49.5,72,'CT']],red:[[20,45,49.5]],gray:[[76,52,93.4]],x:[[83,52]],cap:'Le dernier sommet (LH) est cassé : la tendance baissière est invalidée.'})}
<div class="box key"><b class="t">À retenir</b>On parle de cassure quand une bougie <b>clôture</b> au-delà du niveau, pas quand une mèche le dépasse. Un BOS confirme : on continue dans le même sens. Un CHoCH alerte : on arrête de trader l'ancienne tendance et on attend la confirmation de la nouvelle.</div>`},

{t:"Les pièges : inducement, imbalance et faux points",s:"Pourquoi la structure n'est jamais aussi simple que les modèles.",b:`
<p>Les modèles précédents sont parfaits… le marché, lui, ne l'est pas. Deux notions expliquent la plupart des pertes des débutants qui pensaient avoir bien lu la structure.</p>
<h2>L'inducement : les faux sommets et faux creux</h2>
<p>Un <b>inducement</b>, c'est un sommet ou un creux que tout le monde croyait « protégé »… et qui est cassé juste avant que la tendance initiale reprenne. Pourquoi ? Parce que le composite man <b>manque de liquidité</b> pour continuer son mouvement. Pour vendre massivement, il a besoin d'acheteurs : il va donc les chercher <b>au-dessus du dernier sommet</b>, là où dorment les Stop Loss des vendeurs et les ordres des acheteurs qui croient à une cassure.</p>
${zz({pts:[[0,95],[16,55],[30,75],[46,35],[60,58],[70,28],[84,72],[98,5]],lab:[[16,55,'LL','b'],[30,75,'LH','t'],[46,35,'LL','b'],[60,58,'LH','t'],[84,72,'HH ?','t']],red:[[16,55,38],[46,35,64]],gray:[[60,58,80]],x:[[71,58]],circ:[[84,72]],cap:'Tendance baissière : le dernier LH est cassé (fausse cassure), la liquidité au-dessus est prise, puis la baisse reprend.'})}
${zz({pts:[[0,5],[16,45],[30,25],[46,65],[60,42],[72,76],[84,30],[98,96]],lab:[[16,45,'HH','t'],[30,25,'HL','b'],[46,65,'HH','t'],[60,42,'HL','b'],[84,30,'LL ?','b']],red:[[16,45,38],[46,65,68]],gray:[[60,42,80]],x:[[71,42]],circ:[[84,30]],cap:'Même piège en tendance haussière : le dernier HL est cassé, puis la hausse reprend de plus belle.'})}
<div class="box warn"><b class="t">Ce que ça veut dire pour toi</b>Une zone que tu crois sûre peut n'être qu'un inducement. C'est pour ça qu'on ne place jamais son Stop Loss <b>exactement</b> sur un sommet ou un creux évident, et qu'on attend une confirmation avant d'entrer.</div>
<h3>Utiliser l'inducement à ton avantage</h3>
<p>Quand la tendance reprend après un inducement, le sommet ou le creux créé par ce piège contient énormément de liquidité : il devient un point <b>fort</b>. Chercher une entrée dans la zone qui a créé ce point (le cercle bleu) augmente tes chances d'être du bon côté.</p>
<h2>Valider un sommet ou un creux</h2>
<p>Tous les petits sommets ne comptent pas. Fixe-toi une règle, teste-la et tiens-t'en à elle. Exemple de règle utilisée par certains traders : un sommet ou un creux n'est valide que si le mouvement qui le suit a <b>corrigé d'au moins 40 % environ</b> le mouvement précédent. Ce chiffre n'est pas magique : c'est un point de départ, à ajuster avec ton propre journal.</p>
<h2>L'imbalance (FVG)</h2>
${imbalance()}
<p>Une <b>imbalance</b> (ou <i>Fair Value Gap</i>) est un « trou » laissé entre deux bougies quand le prix est passé très vite. Elle indique qu'il reste des ordres à exécuter à ce niveau : le prix a de bonnes chances d'y revenir.</p>
<ul><li>Elle montre l'<b>impulsivité</b> d'un mouvement.</li><li>Elle ne se trade pas seule : c'est une <b>confluence</b> de plus.</li><li>Pour la structure : si un creux que tu veux valider se trouve <b>au-dessus</b> d'une imbalance non comblée, méfie-toi, le prix risque de descendre la combler et de casser ce creux.</li></ul>`},

{t:"L'imbrication des unités de temps",s:"Le marché est fractal : plusieurs tendances en même temps.",b:`
<p>Le marché bouge chaque seconde, et chaque bougie peut contenir 1 mois, 1 jour, 1 heure ou 1 minute d'activité. Résultat : <b>plusieurs tendances coexistent</b>, une par unité de temps. C'est la deuxième grande difficulté de la structure.</p>
${zz({pts:[[0,8],[20,48],[30,34],[42,82],[66,46],[96,98]],sub:[[[42,82],[45,70],[48,76],[53,62],[56,67],[61,52],[66,46]]],lab:[[42,82,'HH (H4)','t'],[66,46,'HL (H4)','b']],txt:[[52,92,'H1 : structure baissière','#16a34a',15]],cap:'En H4, la tendance est haussière. À l\'intérieur de la correction H4, le H1 fait une petite tendance baissière.'})}
<h2>La règle des forces</h2>
<p><b>Plus l'unité de temps est grande, plus sa tendance est forte.</b></p>
<ul><li>Une tendance en D1 est plus puissante qu'une tendance en H4.</li><li>Une tendance en H4 est plus puissante qu'une tendance en M30.</li><li>Une tendance mensuelle domine une tendance journalière.</li></ul>
<p>En passant du D1 au H1, tu as 24 fois plus de bougies à analyser ; du D1 au M15, 96 fois plus. Dans un seul mouvement H1, tu peux trouver plusieurs changements de structure en M1. D'où l'importance de savoir <b>dans quel ordre</b> regarder les graphiques.</p>
<div class="box key"><b class="t">La conséquence pratique</b>Une baisse en H1 à l'intérieur d'une hausse en H4 n'est souvent qu'une <b>correction</b> : le moment idéal pour chercher un achat… quand la petite structure se retourne dans le sens de la grande. C'est exactement la logique de la méthode top-down du module suivant.</div>
${shot('or-buy-ote','Un vrai trade du coach : une zone de vente sur la grande structure, de la liquidité ($$$), puis un achat dans la zone OTE quand la petite structure se retourne.')}
<p>Résumé du module : le prix cherche la liquidité, la structure te donne le biais, les cassures te disent si la tendance continue ou change, les pièges t'apprennent la prudence, et les unités de temps te disent laquelle écouter en premier.</p>`}
]};
