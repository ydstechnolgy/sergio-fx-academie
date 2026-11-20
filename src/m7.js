const M7={t:"La vie de trader SERGIO FX",d:"La journée type, les signaux, les lives et les exercices pour passer à la pratique.",lessons:[
{t:"Ta journée de trading",s:"Le rythme du groupe, du calendrier du matin au bilan du soir.",b:`
<div class="tw"><table><tr><th>Heure (Lomé)</th><th>Ce qui se passe</th></tr>
<tr><td>07:00</td><td>📅 Le calendrier économique du jour est publié dans le groupe</td></tr>
<tr><td>07:30</td><td>🔔 Annonce du live TikTok</td></tr>
<tr><td>08:00</td><td>🇬🇧 Ouverture de Londres : <b>session 1</b> en direct</td></tr>
<tr><td>08:00–11:30</td><td>🚨 Analyse en direct et signaux</td></tr>
<tr><td>11:30</td><td>☕ Clôture de la session du matin, bilan</td></tr>
<tr><td>13:30</td><td>🇺🇸 <b>Session 2 (US)</b> : les annonces américaines tombent souvent à cette heure</td></tr>
<tr><td>16:30</td><td>📊 Fin de journée : bilan, résultats, rendez-vous du lendemain</td></tr>
<tr><td>Le soir</td><td>📝 Ton journal et ta revue</td></tr></table></div>
<h2>Lire le message du matin</h2>
<div class="sig">Bonjour la famille ❤️<br>📅 Aujourd'hui on surveille (heure de Lomé) :<br>• 13:30 🇺🇸 Inflation (CPI)<br>• 15:00 🇺🇸 Discours d'un membre de la Fed<br>Ça peut bouger très vite autour de ces heures ⚡</div>
<ul><li>Mets une alarme 15 minutes avant chaque annonce.</li><li>🇺🇸 = dollar = <b>l'or réagit fort</b>.</li><li>Pas de nouveau trade dans les 15 à 30 minutes autour d'une annonce forte.</li></ul>
<h2>Profiter des lives TikTok</h2>
<ul><li><b>Arrive à l'heure</b> : le top-down se fait au début.</li><li><b>Ouvre ton TradingView à côté</b> et refais l'analyse en même temps que le coach : c'est comme ça que l'œil se forme.</li><li><b>Pose des questions précises</b> : « Pourquoi cette zone ? » plutôt que « On achète ? ».</li><li><b>Respecte le chat</b> : pas de spam, pas de liens.</li></ul>
<div class="box warn"><b class="t">Attention aux faux comptes</b>Personne de l'équipe ne te contactera en privé pour te demander de l'argent ou tes identifiants. En cas de doute, écris au <a href="${LINK.WA}" target="_blank" rel="noopener">+228 79 86 78 79</a>.</div>`},

{t:"Recevoir et suivre un signal",s:"Lire le message, le copier sur MT5 et le gérer jusqu'au bout.",b:`
<div class="sig">🚨 SIGNAL 🚨<br>🥇 XAUUSD (OR)<br>🔴 SELL<br>📍 Entrée : 3734.91<br>❌ SL : 3738.04<br>✅ TP : 3721.72<br>⚠️ Gérez bien votre risque la famille 💪</div>
${shot('or-sell-m1','Le graphique derrière ce signal : une vente sous une zone, avec un ratio d\'environ 1 : 4.')}
<h2>Ligne par ligne</h2>
<ul><li><b>SELL</b> : on vend, on gagne si le prix baisse.</li><li><b>Entrée</b> : le prix d'entrée visé. Si le prix est déjà parti de plus de 1 $ environ, <b>on ne court pas après</b>.</li><li><b>SL</b> : 3,13 $ au-dessus de l'entrée (31 pips). C'est lui qui détermine ton lot.</li><li><b>TP</b> : 13,19 $ plus bas (132 pips).</li></ul>
<h2>Copier sur MT5 en 6 étapes</h2>
<ol class="steps"><li>Calcule ton lot : capital 1 000 $, risque 10 $ → 10 ÷ (3,13 × 100) = 0,03 lot.</li><li>Ouvre XAUUSD sur MT5, appuie sur <b>Nouvel ordre</b>.</li><li>Mets le volume (0,03), le Stop Loss (3738.04) et le Take Profit (3721.72).</li><li>Si le prix est à l'entrée : <b>Vendre au marché</b>. Sinon : un ordre <b>Sell Limit</b> à 3734.91.</li><li>Vérifie dans l'onglet Trade que la position et ses SL/TP apparaissent.</li><li>Note le trade dans ton journal.</li></ol>
<h2>Le suivre</h2>
<ul><li>Quand le groupe annonce <b>TP1 HIT</b> ou « on sécurise » : ferme une partie si ton lot le permet et mets ton SL au prix d'entrée (break-even).</li><li>Ne touche pas au SL pour l'éloigner. Jamais.</li><li>Un signal est une <b>idée de trade</b>, pas une garantie. Ton risque reste ta responsabilité.</li></ul>
<div class="box tip"><b class="t">Le vrai objectif</b>Copier ne suffit pas. À chaque signal, essaie de retrouver toi-même le contexte, la zone et le déclencheur. Le jour où tu vois le trade avant le message, tu es devenu trader.</div>`},

{t:"Passer à la pratique",s:"Les exercices pour valider la formation, puis l'examen final.",b:`
<p>Tu as toute la théorie. Maintenant, on pratique. Chaque case cochée reste enregistrée sur ton appareil.</p>
<h2>Exercice 1 : tes outils</h2>
${chk('ex1',['J\'ai un compte TradingView avec XAUUSD, EURUSD, GBPUSD, USDJPY et DXY dans ma liste','Mon fuseau horaire TradingView est sur UTC (heure de Lomé)','J\'ai ouvert un compte <a href="'+LINK.HFM+'" target="_blank" rel="noopener">HFM</a> et un compte démo MT5','Je suis connecté à MT5 sur mon téléphone et/ou mon PC','J\'ai ouvert et fermé une position en démo','J\'ai placé et supprimé un ordre en attente (Buy Limit ou Sell Limit)'])}
<h2>Exercice 2 : l'analyse</h2>
${chk('ex2',['J\'ai tracé la structure D1 et H4 de l\'or (HH/HL ou LH/LL)','J\'ai marqué au moins deux zones H4','J\'ai tracé un Fibonacci et repéré la zone OTE','J\'ai écrit mon biais du jour en une phrase','J\'ai posé une alerte sur ma zone'])}
<h2>Exercice 3 : 20 trades en démo</h2>
<p>Prends 20 trades en démo en suivant ton plan et la checklist du module 5. Coche une case par trade noté dans ton journal.</p>
<div class="check g20" data-k="t20">${Array.from({length:20},(_,i)=>`<label><input type="checkbox">${i+1}</label>`).join('')}</div><div class="checkres"></div>
<div class="box key"><b class="t">Quand passer en réel ?</b>Après tes 20 trades en démo, si tu as respecté ton plan et que ton espérance est positive. Commence petit, avec une somme que tu acceptes de perdre. Les émotions en réel sont différentes : c'est normal.</div>
<div class="cta"><h3>Prêt pour le compte réel ?</h3><p>Ouvre ton compte chez notre partenaire et rejoins la famille SERGIO FX.</p><div class="row"><a class="btn" href="${LINK.HFM}" target="_blank" rel="noopener">Ouvrir mon compte HFM</a><a class="btn ghost" href="${LINK.WA}" target="_blank" rel="noopener">Écrire au coach</a></div></div>`}
]};
