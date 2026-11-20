const M6={t:"Le risque et le mental",d:"La gestion du risque, le calcul du lot, la marge, ton plan de trading et ta psychologie.",lessons:[
{t:"La gestion du risque",s:"La règle du 1 %, le ratio et l'espérance : ce qui te garde en vie.",b:`
<p>La plupart des débutants pensent que le secret du trading, c'est de trouver les bonnes entrées. En réalité, les traders qui durent sont d'abord des <b>gestionnaires de risque</b>. Une bonne méthode avec un mauvais risque finit toujours par vider un compte.</p>
<h2>La règle du 1 %</h2>
<p>Sur un trade, tu ne risques jamais plus de <b>1 % de ton capital</b> (2 % au grand maximum). Pourquoi ? Regarde ce qu'il faut regagner après une série de pertes :</p>
<div class="tw"><table><tr><th>Perte du compte</th><th>Gain nécessaire pour revenir à zéro</th></tr>
<tr><td>10 %</td><td>11 %</td></tr><tr><td>20 %</td><td>25 %</td></tr><tr><td>30 %</td><td>43 %</td></tr><tr><td>50 %</td><td><b>100 %</b></td></tr><tr><td>75 %</td><td><b>300 %</b></td></tr></table></div>
<p>Avec 1 % par trade, même 10 pertes de suite (ça arrive) ne te coûtent qu'environ 10 %. Avec 10 % par trade, c'est la fin du compte.</p>
<h2>Le ratio risque / rendement (R:R)</h2>
<p>On mesure les gains en <b>R</b> : 1R = ce que tu risques. Un trade qui rapporte deux fois le risque = +2R.</p>
<div class="tw"><table><tr><th>Ratio</th><th>Taux de réussite minimum pour ne pas perdre</th></tr>
<tr><td>1 : 1</td><td>50 %</td></tr><tr><td>1 : 1,5</td><td>40 %</td></tr><tr><td>1 : 2</td><td>33,3 %</td></tr><tr><td>1 : 3</td><td>25 %</td></tr></table></div>
<div class="box key"><b class="t">L'espérance</b>Espérance = (taux de réussite × gain moyen) − (taux d'échec × perte moyenne). Exemple : 45 % de trades gagnants à +2R, 55 % perdants à −1R → 0,45×2 − 0,55×1 = <b>+0,35R par trade</b>. Sur 100 trades à 10 $ de risque : environ +350 $. Tu peux te tromper plus d'une fois sur deux et gagner quand même.</div>
<h2>Calculer son lot</h2>
<p>La formule : <b>Lot = Risque en $ ÷ (distance du SL × valeur d'un point pour 1 lot)</b>. Sur l'or, 1 lot = 100 $ par dollar de mouvement.</p>
<div class="box ex"><b class="t">Exemple sur l'or</b>Capital 1 000 $, risque 1 % = 10 $. Entrée 3 861,55, SL 3 858,02 → distance 3,53 $. Lot = 10 ÷ (3,53 × 100) = <b>0,028 → 0,02 lot</b> (on arrondit toujours vers le bas). Perte si SL : 3,53 × 2 = 7,06 $.</div>
<div class="tw"><table><tr><th>Capital</th><th>Risque 1 %</th><th>SL de 5 $ (50 pips)</th><th>SL de 10 $ (100 pips)</th></tr>
<tr><td>200 $</td><td>2 $</td><td>trop petit (0,004)</td><td>trop petit</td></tr>
<tr><td>500 $</td><td>5 $</td><td>0,01 lot</td><td>trop petit (0,005)</td></tr>
<tr><td>1 000 $</td><td>10 $</td><td>0,02 lot</td><td>0,01 lot</td></tr>
<tr><td>5 000 $</td><td>50 $</td><td>0,10 lot</td><td>0,05 lot</td></tr></table></div>
<p>Avec un petit compte, le lot minimum (0,01) dépasse parfois le 1 %. Solution : choisir des trades avec un SL plus serré, ou accepter 2 % en le sachant — jamais plus.</p>`},

{t:"Marge, levier, swap et stop out",s:"Les mécanismes du compte que tu dois connaître.",b:`
<h2>Le levier et la marge</h2>
<p>Le <b>levier</b> te permet d'ouvrir une position plus grande que ton capital. Avec un levier de 1:500, 1 $ sur ton compte contrôle 500 $ sur le marché. La <b>marge</b>, c'est la somme bloquée par le broker pour garder la position ouverte.</p>
<div class="box ex"><b class="t">Exemple</b>0,01 lot d'or à 3 860 $ = 1 once = 3 860 $ de position. Avec un levier 1:500, la marge bloquée ≈ 3 860 ÷ 500 = <b>7,72 $</b>.</div>
<div class="box warn"><b class="t">Le levier ne change pas ton risque</b>Ton risque dépend de ton lot et de ton Stop Loss, pas du levier. Le levier te permet seulement d'ouvrir plus gros. C'est un outil, pas une raison de prendre plus de risque.</div>
<h2>Les termes de ton onglet « Trade » sur MT5</h2>
<div class="tw"><table><tr><th>Terme</th><th>Signification</th></tr>
<tr><td>Balance</td><td>Ton capital sans compter les positions ouvertes</td></tr>
<tr><td>Equity (fonds propres)</td><td>Balance + gains ou pertes en cours</td></tr>
<tr><td>Marge</td><td>Somme bloquée pour tes positions</td></tr>
<tr><td>Marge libre</td><td>Equity − marge : ce qui reste disponible</td></tr>
<tr><td>Niveau de marge</td><td>Equity ÷ marge × 100. Plus il est bas, plus tu es en danger</td></tr></table></div>
<h2>Margin call et stop out</h2>
<p>Si tes pertes en cours font chuter ton niveau de marge, le broker t'alerte (<b>margin call</b>), puis ferme automatiquement tes positions perdantes (<b>stop out</b>), souvent autour de 20 à 50 % selon le broker et le type de compte. Avec la règle du 1 % et un Stop Loss systématique, tu n'y arriveras jamais.</p>
<h2>Le swap</h2>
<p>Garder une position ouverte après la clôture du jour (vers minuit) coûte ou rapporte un petit montant : le <b>swap</b>. Le mercredi, il est souvent triplé (pour couvrir le week-end). Sur nos trades intraday, il ne compte presque pas, mais vérifie-le si tu gardes une position plusieurs jours.</p>
<h2>Le gap du week-end</h2>
<p>Le marché ferme le vendredi soir et rouvre le lundi. Le prix peut ouvrir loin de la clôture du vendredi : ton Stop Loss sera exécuté au premier prix disponible, parfois bien plus loin. Règle simple : <b>pas de position ouverte le week-end</b> quand tu débutes.</p>`},

{t:"Le plan et le journal de trading",s:"Écrire ses règles et mesurer ses résultats.",b:`
<p>Un trader sans plan improvise. Et quand on improvise avec de l'argent, ce sont les émotions qui décident. Ton plan tient sur une page.</p>
<h2>Ton plan en 8 lignes</h2>
<ol class="steps"><li><b>Marché</b> : XAUUSD uniquement.</li><li><b>Horaires</b> : 08:00–11:30 et 13:30–16:30 (heure de Lomé).</li><li><b>Méthode</b> : top-down D1/H4 → H1 → M5, entrée en OTE sur zone.</li><li><b>Risque</b> : 1 % par trade.</li><li><b>Limite journalière</b> : 2 pertes ou −2 % → j'arrête pour la journée.</li><li><b>Ratio minimum</b> : 1 : 1,5.</li><li><b>Gestion</b> : TP1 à 1,6R, puis break-even.</li><li><b>Interdits</b> : pas de trade 30 min avant une annonce forte, pas de trade de revanche, pas de position le week-end.</li></ol>
<h2>Le journal</h2>
<p>Après chaque trade, note :</p>
<div class="tw"><table><tr><th>Date</th><th>Sens</th><th>Entrée / SL / TP</th><th>Lot</th><th>Résultat (R)</th><th>Plan respecté ?</th><th>Émotion</th></tr>
<tr><td>17/11</td><td>SELL</td><td>3 871,75 / 3 875,37 / 3 860,06</td><td>0,05</td><td>+3,2R</td><td>Oui</td><td>Calme</td></tr></table></div>
<h2>Les statistiques qui comptent</h2>
<ul><li><b>Taux de réussite</b> : nombre de trades gagnants ÷ nombre total.</li><li><b>R moyen</b> : gain moyen en R des gagnants, perte moyenne des perdants.</li><li><b>Espérance</b> : positive ? Ta méthode fonctionne. Négative ? Tu changes quelque chose.</li><li><b>Respect du plan</b> : le chiffre le plus important. Un trade perdant qui respecte le plan est un <b>bon</b> trade.</li></ul>
<div class="box tip"><b class="t">Ne juge jamais sur 5 trades</b>Il faut au moins 20 à 30 trades pour qu'une statistique veuille dire quelque chose.</div>`},

{t:"La psychologie du trader",s:"Peur, avidité, revanche : apprendre à se gérer.",b:`
<p>Tu peux connaître toute la théorie de cette formation et perdre quand même. La différence entre la théorie et les résultats, c'est le mental.</p>
<h2>Les quatre pièges</h2>
<div class="tw"><table><tr><th>Piège</th><th>Ce qu'il te fait faire</th><th>L'antidote</th></tr>
<tr><td><b>La peur</b></td><td>Fermer un bon trade trop tôt, ne pas entrer sur un setup valide</td><td>Risquer une somme que tu acceptes vraiment de perdre</td></tr>
<tr><td><b>L'avidité</b></td><td>Augmenter le lot, enlever le TP, rester trop longtemps</td><td>Des objectifs fixés avant d'entrer</td></tr>
<tr><td><b>La revanche</b></td><td>Reprendre un trade tout de suite après une perte pour « se refaire »</td><td>La limite journalière : 2 pertes = j'arrête</td></tr>
<tr><td><b>Le FOMO</b></td><td>Entrer en retard sur un mouvement déjà parti</td><td>Pas dans ta zone = pas ton trade. Il y en aura d'autres.</td></tr></table></div>
<h2>Penser en séries</h2>
<p>Un trade isolé ne veut rien dire. Ta méthode est une pièce légèrement truquée en ta faveur : sur 100 lancers, tu gagnes, mais tu peux perdre 5 fois de suite. Accepte chaque perte comme un coût normal de l'activité, comme le loyer d'une boutique.</p>
<h2>Les habitudes qui aident</h2>
<ul><li>Trader reposé : pas après une nuit blanche ou une dispute.</li><li>Fermer les graphiques après tes sessions.</li><li>Ne pas regarder ton solde en dollars pendant un trade : pense en R.</li><li>Célébrer le respect du plan, pas seulement les gains.</li></ul>
<h2>Les prop firms : pour plus tard</h2>
<p>Une <b>prop firm</b> te confie un capital (par exemple 10 000 $ ou 100 000 $) si tu réussis un challenge payant : atteindre un objectif (souvent 8 à 10 %) sans dépasser une perte maximale journalière et totale. Les gains sont ensuite partagés. C'est une piste intéressante <b>une fois que tu es rentable en démo et sur un petit compte réel</b>, pas avant : la plupart des candidats échouent à cause du risque, pas de l'analyse.</p>
<div class="box key"><b class="t">À retenir</b>Ton but n'est pas de gagner chaque trade. Ton but est de <b>suivre ton plan</b> sur chaque trade. Les résultats suivent.</div>`}
]};
