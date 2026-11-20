const chk=(k,items)=>`<div class="check" data-k="${k}">${items.map(t=>`<label><input type="checkbox">${t}</label>`).join('')}</div><div class="checkres"></div>`;
const M5={t:"La méthode SERGIO FX",d:"L'analyse top-down, l'entrée en zone OTE et un trade complet sur l'or, étape par étape.",lessons:[
{t:"L'analyse top-down",s:"Du grand graphique au petit : la routine avant chaque trade.",b:`
<p>Tu as vu au module précédent que la tendance des grandes unités de temps domine celle des petites. L'<b>analyse top-down</b> (« du haut vers le bas ») applique simplement cette règle : on commence par le graphique le plus large, on descend, et on n'entre que lorsque tout est aligné.</p>
<h2>Les trois étages</h2>
<div class="tw"><table><tr><th>Étage</th><th>Unité de temps</th><th>La question</th><th>Ce que tu traces</th></tr>
<tr><td><b>1. Le contexte</b></td><td>D1 puis H4</td><td>Dans quel sens va le marché ?</td><td>La structure (HH/HL ou LH/LL), les grandes zones, la liquidité évidente</td></tr>
<tr><td><b>2. La zone</b></td><td>H1</td><td>Où est-ce que je veux intervenir ?</td><td>La zone d'achat ou de vente dans le sens du contexte, le Fibonacci de la dernière jambe</td></tr>
<tr><td><b>3. Le déclencheur</b></td><td>M5 (ou M15)</td><td>Quand est-ce que j'entre ?</td><td>Le retournement de la petite structure (CHoCH) dans la zone</td></tr></table></div>
<h2>La routine sur TradingView</h2>
<ol class="steps">
<li>Ouvre XAUUSD en <b>D1</b>. Note la tendance et marque les deux ou trois zones les plus évidentes. Cinq minutes maximum.</li>
<li>Passe en <b>H4</b>. Identifie le dernier sommet et le dernier creux qui comptent : sommes-nous en continuation (BOS) ou en cassure (CHoCH) ?</li>
<li>Passe en <b>H1</b>. Repère la jambe d'impulsion en cours et trace le Fibonacci dessus. La zone 0,618–0,786 qui tombe sur une zone H4 = ta zone de travail.</li>
<li>Note ton <b>biais du jour</b> en une phrase : « Je cherche des achats entre 3 858 et 3 862 ». Si tu ne peux pas l'écrire, tu ne trades pas.</li>
<li>Place une <b>alerte</b> sur ta zone et ferme le graphique. Pas besoin de fixer l'écran.</li>
<li>Quand l'alerte sonne, passe en <b>M5</b> et attends que la petite structure se retourne dans ton sens.</li></ol>
<div class="box key"><b class="t">La règle qui protège</b>On n'achète pas sous une structure baissière H4, on ne vend pas au-dessus d'une structure haussière H4. Si le D1 et le H4 se contredisent, la journée est souvent à éviter, ou à trader avec une position réduite.</div>
<h2>Exemple de lecture</h2>
${zz({pts:[[0,8],[20,48],[30,34],[42,82],[66,46],[96,98]],sub:[[[42,82],[45,70],[48,76],[53,62],[56,67],[61,52],[66,46]]],band:[[42,52,'#bbf7d0','Zone H4']],lab:[[42,82,'HH','t'],[66,46,'HL ?','b']],txt:[[70,30,'Entrée M5 ici','#065f46',15]],cap:'H4 haussier, correction en H1 (vert) qui arrive dans une zone H4 : on attend le retournement M5 pour acheter.'})}`},

{t:"La zone OTE : entrer au meilleur prix",s:"Fibonacci 0,618–0,786, Stop Loss et objectifs.",b:`
<p>L'<b>OTE</b> (<i>Optimal Trade Entry</i>) est la zone située entre les retracements <b>0,618 et 0,786</b> du dernier mouvement d'impulsion. C'est là que le prix revient très souvent avant de repartir, après avoir pris la liquidité des traders entrés trop tôt.</p>
<h2>L'OTE en tendance haussière</h2>
${zz({pts:[[0,20],[8,10],[34,90],[46,58],[52,66],[60,34],[94,98]],fx:8,fib:[[90,'0'],[40.6,'0,618'],[27.1,'0,786'],[10,'1']],band:[[27.1,40.6,'#a7f3d0']],txt:[[36,31,'Zone OTE','#065f46']],rr:{x1:60,x2:74,e:36,s:7,t:82.4,lab:'1,6R'},cap:'Le prix corrige dans la zone OTE : entrée vers 0,7, Stop Loss sous le creux, premier objectif à 1,6 fois le risque.'})}
<h2>L'OTE en tendance baissière</h2>
${zz({pts:[[0,80],[8,90],[34,10],[46,42],[52,34],[60,66],[94,2]],fx:8,fib:[[10,'0'],[59.4,'0,618'],[72.9,'0,786'],[90,'1']],band:[[59.4,72.9,'#fecaca']],txt:[[38,64,'Zone OTE','#9f1239']],rr:{x1:60,x2:74,e:64,s:93,t:17.6,lab:'1,6R'},cap:'Même logique à la vente : on vend le rebond dans la zone OTE, Stop Loss au-dessus du sommet.'})}
<h2>Les règles pratiques</h2>
<ol class="steps">
<li><b>Choisis la bonne jambe</b> : celle qui vient de faire un BOS dans le sens de la tendance H4. Trace du début à la fin du mouvement (creux → sommet à l'achat, sommet → creux à la vente).</li>
<li><b>Cherche la confluence</b> : la zone OTE doit tomber sur une zone H1/H4, une imbalance ou une ligne de tendance. Seule, elle ne suffit pas.</li>
<li><b>Entre sur confirmation</b> : retournement M5 dans la zone, ou ordre limite autour de 0,7 si la confluence est très forte.</li>
<li><b>Stop Loss</b> : au-delà du point 1 (le début de la jambe), avec une petite marge pour le spread.</li>
<li><b>Objectifs</b> : TP1 vers 1,6R (on sécurise une partie et on passe au break-even), TP2 au sommet/creux de la jambe ou au-delà.</li></ol>
<div class="box warn"><b class="t">Quand ne pas prendre l'OTE</b>Si le prix traverse toute la zone et clôture au-delà du point 1, la structure est cassée : l'idée est invalidée. On ne « rachète pas plus bas » pour moyenner : on attend la prochaine structure.</div>
${shot('or-buy-ote','Le trade du coach : BUY [OTE] à 3 861,55, SL 3 858,02, TP 3 887,00, sous une zone de vente identifiée plus haut.')}`},

{t:"Un trade complet sur l'or",s:"De l'analyse du matin à la clôture, avec de vrais chiffres.",b:`
<p>Assemblons tout avec un vrai trade du coach sur XAUUSD : un achat du 20 novembre.</p>
${shot('or-buy-tendance','BUY XAUUSD : entrée 3 571,97 · SL 3 562,13 · TP 3 612,60, au contact de la ligne de tendance haussière.')}
<h2>1. Le contexte (D1 / H4)</h2>
<p>Structure haussière : des HH et des HL successifs, une ligne de tendance respectée plusieurs fois. Biais du jour : <b>achats uniquement</b>.</p>
<h2>2. La zone (H1)</h2>
<p>Le prix corrige vers la ligne de tendance, où se trouve aussi une ancienne zone de demande. Deux éléments au même endroit : c'est une <b>confluence</b>.</p>
<h2>3. Le déclencheur (M5)</h2>
<p>Dans la zone, la petite structure baissière est cassée vers le haut : le CHoCH M5 confirme que les acheteurs reprennent la main. On entre.</p>
<h2>4. Les chiffres</h2>
<div class="tw"><table><tr><th></th><th>Prix</th><th>Distance</th></tr>
<tr><td>Entrée (BUY)</td><td>3 571,97</td><td></td></tr>
<tr><td>Stop Loss</td><td>3 562,13</td><td>9,84 $ soit 98 pips</td></tr>
<tr><td>Take Profit</td><td>3 612,60</td><td>40,63 $ soit 406 pips</td></tr>
<tr><td>Ratio</td><td colspan="2"><b>environ 1 : 4,1</b></td></tr></table></div>
<div class="box ex"><b class="t">Avec un compte de 500 $ et 1 % de risque</b>Risque max = 5 $. Le SL fait 9,84 $ de mouvement. À 0,01 lot (1 $ par dollar de mouvement), la perte serait de 9,84 $ : c'est trop. Il faudrait donc soit attendre un SL plus serré, soit accepter 2 % ce jour-là. Avec 1 000 $ de capital, 0,01 lot respecte le 1 % (≈ 9,84 $) et le TP rapporte <b>+40,63 $</b>.</div>
<h2>5. La gestion</h2>
<ul><li>À 1,6R (≈ 3 587,70), on ferme une partie si le lot le permet, et on remonte le SL au prix d'entrée.</li><li>Le reste court jusqu'au TP. Si le prix revient au break-even, le trade se termine à zéro : aucune perte.</li><li>On note tout dans le journal : capture avant, capture après, émotions, respect du plan.</li></ul>`},

{t:"La checklist avant chaque trade",s:"Ta liste de contrôle à cocher, à garder sous la main.",b:`
<p>Les pilotes d'avion, même avec 20 ans d'expérience, suivent une checklist avant chaque décollage. Fais pareil. Coche chaque point : s'il en manque un, <b>pas de trade</b>.</p>
<h2>Avant d'entrer</h2>
${chk('pre',['La tendance D1 / H4 est claire et je l\'ai écrite','Le trade va dans le sens de cette tendance','Le prix est dans une zone H1/H4 tracée à l\'avance','La zone OTE (0,618–0,786) tombe sur cette zone','La petite structure M5 s\'est retournée dans mon sens','Pas d\'annonce économique forte (CPI, NFP, FOMC) dans les 30 minutes','Le spread est normal','Mon Stop Loss est placé derrière la structure','Mon risque est de 1 % maximum, lot calculé','Mon ratio est d\'au moins 1 : 1,5','Je suis calme : pas de revanche après une perte'])}
<h2>Après le trade</h2>
${chk('post',['Capture d\'écran avant et après','Résultat noté dans le journal (en R et en $)','J\'ai respecté mon plan (oui / non, et pourquoi)','Une leçon retenue'])}
<div class="box tip"><b class="t">Astuce</b>Tes cases cochées restent enregistrées sur ce téléphone ou cet ordinateur. Décoche-les avant chaque nouveau trade.</div>`}
]};
