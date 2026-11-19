function signalCard(l){return `<div class="sig"><div class="sig-h">🚨 ${L(l,'SIGNAL GRATUIT','FREE SIGNAL')} 🚨</div>
<div>🥇 XAUUSD (${L(l,'OR','GOLD')})</div><div class="sell">🔴 SELL</div>
<div>📍 ${L(l,'Entrée','Entry')} : 3868.32</div><div>❌ SL : 3878.17</div><div>✅ TP : 3834.89</div>
<div class="muted">⚠️ ${L(l,'Gérez bien votre risque la famille','Manage your risk, family')} 💪</div></div>`}
function dayline(l){const r=L(l,[['07:00','📅','Calendrier économique du jour publié dans le groupe'],['07:30','🔔','Annonce du live TikTok'],['08:00','🇬🇧','Ouverture de Londres : session 1 en live'],['08:00–11:30','🚨','Analyse en direct et signaux'],['11:30','☕','Clôture de la session du matin, bilan'],['13:30','🇺🇸','Session 2 (US) : annonces souvent à 13:30'],['16:30','📊','Fin de journée : bilan, TP/SL, rendez-vous du lendemain'],['Soir','📝','Ton journal de trading et ta revue']],
[['07:00','📅','Daily economic calendar posted in the group'],['07:30','🔔','TikTok live announcement'],['08:00','🇬🇧','London open: session 1 live'],['08:00–11:30','🚨','Live analysis and signals'],['11:30','☕','Morning session close, recap'],['13:30','🇺🇸','Session 2 (US): news often at 13:30'],['16:30','📊','End of day: recap, TP/SL, next-day meeting'],['Evening','📝','Your trading journal and review']]);
return `<div class="tl">${r.map(([h,i,t])=>`<div><b>${h}</b><span>${i}</span><p>${t}</p></div>`).join('')}</div>`}
const LV6={n:6,icon:"flag",t:{fr:"La pratique : vis le trading",en:"Practice: live the trading"},d:{fr:"La journée type, les signaux, les lives et les exercices pour passer de la théorie à la pratique.",en:"The typical day, signals, lives and exercises to go from theory to practice."},
chapters:[
{t:{fr:"Une journée avec SERGIO FX",en:"A day with SERGIO FX"},d:{fr:"Le rythme d'une journée de trading.",en:"The rhythm of a trading day."},
lessons:[
{t:{fr:"Ta journée type de trader",en:"Your typical trading day"},s:{fr:"Du café du matin au bilan du soir.",en:"From morning coffee to evening review."},
b:{fr:`${dayline('fr')}
<div class="box tip"><b class="t">Ton rôle</b>Pendant les lives, ouvre ton TradingView à côté. Refais le top-down en même temps que le coach : c'est comme ça que l'œil se forme.</div>`,
en:`${dayline('en')}
<div class="box tip"><b class="t">Your role</b>During the lives, keep your TradingView open alongside. Redo the top-down with the coach: that's how your eye gets trained.</div>`}},
{t:{fr:"Lire le message du matin",en:"Reading the morning message"},s:{fr:"Calendrier économique et sessions.",en:"Economic calendar and sessions."},
b:{fr:`<div class="sig"><div>Bonjour la famille ❤️</div><div>📅 Aujourd'hui on surveille (heure de Lomé) :</div><div>• 07:00 🇬🇧 Inflation (CPI)</div><div>• 15:00 🇬🇧 Discours du gouverneur de la BoE</div><div>• 19:00 🇺🇸 Compte rendu de la Fed (FOMC)</div><div class="muted">Ça peut bouger très vite autour de ces heures ⚡</div></div>
<h2>Comment l'utiliser</h2><ul><li>Note les heures dans ton téléphone (alarme 15 min avant).</li><li>🇺🇸 = dollar = <b>l'Or réagit fort</b>. 🇬🇧 ou 🇪🇺 = impact surtout sur GBP/EUR, mais l'Or peut bouger aussi.</li><li>Pas de nouveau trade dans les 15–30 minutes autour d'une annonce forte.</li><li>Une annonce à 19:00 est après nos sessions : ferme ou sécurise tes positions avant.</li></ul>`,
en:`<div class="sig"><div>Good morning family ❤️</div><div>📅 Today we're watching (GMT):</div><div>• 07:00 🇬🇧 Inflation (CPI)</div><div>• 15:00 🇬🇧 BoE Governor speech</div><div>• 19:00 🇺🇸 Fed minutes (FOMC)</div><div class="muted">Things can move fast around these times ⚡</div></div>
<h2>How to use it</h2><ul><li>Note the times on your phone (alarm 15 min before).</li><li>🇺🇸 = dollar = <b>Gold reacts strongly</b>. 🇬🇧 or 🇪🇺 = mostly GBP/EUR, but Gold can move too.</li><li>No new trade within 15–30 minutes of high-impact news.</li><li>A 19:00 release is after our sessions: close or protect your positions before.</li></ul>`}},
{t:{fr:"Profiter des lives TikTok",en:"Getting the most from TikTok lives"},s:{fr:"Apprendre en regardant un pro trader.",en:"Learn by watching a pro trade."},
b:{fr:`<ul><li><b>Arrive à l'heure</b> : le top-down se fait souvent au début du live.</li><li><b>Prends des notes</b> : zones, biais, raison de chaque entrée.</li><li><b>Pose des questions précises</b> : « Pourquoi cette zone et pas l'autre ? » plutôt que « On achète ? ».</li><li><b>Ne copie pas à l'aveugle</b> : comprends le pourquoi, sinon tu ne sauras pas gérer le trade.</li><li><b>Respecte le chat</b> : pas de spam, pas de liens. Les modérateurs suppriment les messages hors sujet.</li></ul>
<div class="box warn"><b class="t">Attention aux arnaqueurs</b>Personne de l'équipe ne te contactera en privé pour te demander de l'argent ou tes identifiants. En cas de doute : <a href="${WA}" target="_blank" rel="noopener">+228 79 86 78 79</a>.</div>`,
en:`<ul><li><b>Be on time</b>: the top-down is often done at the start of the live.</li><li><b>Take notes</b>: zones, bias, reason for each entry.</li><li><b>Ask precise questions</b>: "Why this zone and not the other?" rather than "Do we buy?".</li><li><b>Don't copy blindly</b>: understand the why, or you won't know how to manage the trade.</li><li><b>Respect the chat</b>: no spam, no links. Moderators delete off-topic messages.</li></ul>
<div class="box warn"><b class="t">Beware of scammers</b>No one from the team will DM you asking for money or your login. If in doubt: <a href="${WA}" target="_blank" rel="noopener">+228 79 86 78 79</a>.</div>`}}
]},
{t:{fr:"Les signaux",en:"Signals"},d:{fr:"Lire, copier et suivre un signal.",en:"Read, copy and follow a signal."},
lessons:[
{t:{fr:"Lire un signal",en:"Reading a signal"},s:{fr:"Chaque ligne a un sens.",en:"Every line has a meaning."},
b:{fr:`${signalCard('fr')}
<table><tr><th>Ligne</th><th>Signification</th></tr><tr><td>XAUUSD</td><td>L'actif : l'Or contre le dollar</td></tr><tr><td>SELL / BUY</td><td>Le sens : vendre (on parie sur la baisse) ou acheter</td></tr><tr><td>Entrée / PE</td><td>Prix d'entrée (PE = point d'entrée). « PE 3883-3882 » = une petite zone d'entrée</td></tr><tr><td>SL</td><td>Stop Loss : là où on sort si on a tort</td></tr><tr><td>TP (TP1, TP2…)</td><td>Take Profit : là où on encaisse</td></tr></table>
<div class="box ex"><b class="t">Calcul rapide sur ce signal</b>Risque : 3 878,17 − 3 868,32 = 9,85 $ (≈ 98 pips). Gain visé : 3 868,32 − 3 834,89 = 33,43 $ (≈ 334 pips). Ratio ≈ <b>1:3,4</b>. Avec 0,01 lot : risque ≈ 9,85 $, gain ≈ 33,43 $.</div>`,
en:`${signalCard('en')}
<table><tr><th>Line</th><th>Meaning</th></tr><tr><td>XAUUSD</td><td>The asset: Gold against the dollar</td></tr><tr><td>SELL / BUY</td><td>Direction: sell (betting on a drop) or buy</td></tr><tr><td>Entry / PE</td><td>Entry price (PE = entry point). "PE 3883-3882" = a small entry zone</td></tr><tr><td>SL</td><td>Stop Loss: where we exit if wrong</td></tr><tr><td>TP (TP1, TP2…)</td><td>Take Profit: where we bank</td></tr></table>
<div class="box ex"><b class="t">Quick maths on this signal</b>Risk: 3,878.17 − 3,868.32 = $9.85 (≈ 98 pips). Target: 3,868.32 − 3,834.89 = $33.43 (≈ 334 pips). Ratio ≈ <b>1:3.4</b>. With 0.01 lot: risk ≈ $9.85, gain ≈ $33.43.</div>`}},
{t:{fr:"Copier un signal sur MT5 en 60 secondes",en:"Copying a signal to MT5 in 60 seconds"},s:{fr:"Au marché ou en ordre en attente.",en:"At market or as a pending order."},
b:{fr:`<h2>Le prix est encore proche de l'entrée → ordre au marché</h2>
<ol class="steps"><li>MT5 → <b>Cotations</b> → XAUUSD → <b>Trade</b>.</li><li>Type : <b>Exécution au marché</b>.</li><li>Volume : ton lot calculé (0,01 pour débuter).</li><li>Stop Loss : <b>3878.17</b> · Take Profit : <b>3834.89</b>.</li><li>Appuie sur <b>Vendre</b>. Vérifie dans l'onglet Trade que SL et TP sont bien là.</li></ol>
<h2>Le prix n'est pas encore à l'entrée → ordre en attente</h2>
<ol class="steps"><li>Type : <b>Sell Limit</b> si l'entrée est <b>au-dessus</b> du prix actuel (Buy Limit si elle est en dessous pour un achat).</li><li>Prix : le prix d'entrée du signal. Ajoute SL et TP.</li><li>Valide. L'ordre se déclenche tout seul si le prix y arrive.</li></ol>
<div class="box warn"><b class="t">Le prix est déjà parti loin ?</b>Si le prix a déjà fait une bonne partie du chemin vers le TP, <b>ne cours pas après</b>. Ton ratio serait mauvais. Un signal raté n'est pas une perte.</div>`,
en:`<h2>Price is still near the entry → market order</h2>
<ol class="steps"><li>MT5 → <b>Quotes</b> → XAUUSD → <b>Trade</b>.</li><li>Type: <b>Market execution</b>.</li><li>Volume: your calculated lot (0.01 to start).</li><li>Stop Loss: <b>3878.17</b> · Take Profit: <b>3834.89</b>.</li><li>Tap <b>Sell</b>. Check in the Trade tab that SL and TP are set.</li></ol>
<h2>Price isn't at the entry yet → pending order</h2>
<ol class="steps"><li>Type: <b>Sell Limit</b> if the entry is <b>above</b> current price (Buy Limit if below, for a buy).</li><li>Price: the signal's entry price. Add SL and TP.</li><li>Confirm. The order triggers by itself if price gets there.</li></ol>
<div class="box warn"><b class="t">Price already ran far?</b>If price has already covered a good part of the way to TP, <b>don't chase it</b>. Your ratio would be poor. A missed signal is not a loss.</div>`}},
{t:{fr:"Suivre le signal jusqu'au bout",en:"Following the signal to the end"},s:{fr:"TP1 HIT, break-even, SL touché.",en:"TP1 HIT, break-even, SL hit."},
b:{fr:`<table><tr><th>Message dans le groupe</th><th>Ce que tu fais</th></tr>
<tr><td>« TP1 HIT ✅ +50 pips »</td><td>Ferme une partie si tu suis les TP partiels, et/ou mets ton SL au prix d'entrée.</td></tr>
<tr><td>« SL au BE »</td><td>Modifie ton SL au prix d'entrée : le trade ne peut plus perdre.</td></tr>
<tr><td>« TP2 / TP3 HIT »</td><td>Le reste se ferme automatiquement si ton TP est placé. Sinon, ferme.</td></tr>
<tr><td>« On ferme »</td><td>Le coach voit un danger (annonce, retournement) : ferme manuellement.</td></tr>
<tr><td>« SL touché ❌ »</td><td>Rien à faire : ton Stop Loss a joué son rôle. Note-le dans ton journal.</td></tr></table>
<div class="box tip"><b class="t">Bien vivre un SL</b>Un SL fait partie du métier. Un trader avec un ratio de 1:3 peut perdre 2 trades sur 3 et rester gagnant. Ce qui serait grave, c'est de ne pas avoir de SL.</div>`,
en:`<table><tr><th>Group message</th><th>What you do</th></tr>
<tr><td>"TP1 HIT ✅ +50 pips"</td><td>Close part if you use partial TPs, and/or move your SL to entry.</td></tr>
<tr><td>"SL to BE"</td><td>Move your SL to the entry price: the trade can no longer lose.</td></tr>
<tr><td>"TP2 / TP3 HIT"</td><td>The rest closes automatically if your TP is set. Otherwise, close it.</td></tr>
<tr><td>"We're closing"</td><td>The coach sees danger (news, reversal): close manually.</td></tr>
<tr><td>"SL hit ❌"</td><td>Nothing to do: your Stop Loss did its job. Log it in your journal.</td></tr></table>
<div class="box tip"><b class="t">Living with a SL</b>A SL is part of the job. A trader with a 1:3 ratio can lose 2 trades out of 3 and stay profitable. What would be serious is having no SL.</div>`}}
]},
{t:{fr:"Exercices pratiques",en:"Practical exercises"},d:{fr:"Passer de la théorie à l'action.",en:"Turn theory into action."},
lessons:[
{t:{fr:"Exercice 1 : ton premier top-down",en:"Exercise 1: your first top-down"},s:{fr:"Sur TradingView, à envoyer au coach.",en:"On TradingView, to send to the coach."},
b:{fr:`<div class="check" data-k="ex1">
<label><input type="checkbox"> J'ai créé mon compte TradingView et réglé le fuseau horaire sur UTC.</label>
<label><input type="checkbox"> J'ai ajouté XAUUSD, EURUSD, GBPUSD et DXY à ma liste de surveillance.</label>
<label><input type="checkbox"> Sur D1 : j'ai écrit la structure (HH/HL ou LH/LL) et mon biais.</label>
<label><input type="checkbox"> Sur H4 : j'ai tracé 2 zones majeures (rectangle rouge pour la vente, vert pour l'achat).</label>
<label><input type="checkbox"> Sur H1 : j'ai choisi la zone la plus proche dans le sens du biais et posé une alerte.</label>
<label><input type="checkbox"> Avec l'outil position, j'ai dessiné le trade que je prendrais (entrée, SL, TP, ratio).</label>
<label><input type="checkbox"> J'ai fait une capture et je l'ai envoyée sur WhatsApp pour correction.</label></div><p class="checkres"></p>
<a class="btn sm" href="${WA}" target="_blank" rel="noopener">📩 ${'Envoyer ma capture'}</a>`,
en:`<div class="check" data-k="ex1">
<label><input type="checkbox"> I created my TradingView account and set the time zone to UTC.</label>
<label><input type="checkbox"> I added XAUUSD, EURUSD, GBPUSD and DXY to my watchlist.</label>
<label><input type="checkbox"> On D1: I wrote the structure (HH/HL or LH/LL) and my bias.</label>
<label><input type="checkbox"> On H4: I drew 2 major zones (red rectangle for sell, green for buy).</label>
<label><input type="checkbox"> On H1: I picked the nearest zone in the direction of the bias and set an alert.</label>
<label><input type="checkbox"> With the position tool, I drew the trade I would take (entry, SL, TP, ratio).</label>
<label><input type="checkbox"> I took a screenshot and sent it on WhatsApp for feedback.</label></div><p class="checkres"></p>
<a class="btn sm" href="${WA}" target="_blank" rel="noopener">📩 Send my screenshot</a>`}},
{t:{fr:"Exercice 2 : le défi des 20 trades démo",en:"Exercise 2: the 20 demo trades challenge"},s:{fr:"Coche chaque trade au fur et à mesure.",en:"Tick each trade as you go."},
b:{fr:`<p>Sur ton compte <b>démo MT5</b>, prends 20 trades en respectant la checklist top-down, 0,01 lot, SL et TP à chaque fois, et note-les dans ton journal.</p>
<div class="check grid20" data-k="ex2">${Array.from({length:20},(_,i)=>`<label><input type="checkbox"> ${i+1}</label>`).join('')}</div><p class="checkres"></p>
<div class="box tip"><b class="t">À la fin</b>Calcule ton taux de réussite et ton espérance (niveau 5). Positive ? Tu peux passer sur un petit compte réel. Négative ? Relis ton journal et recommence 20 trades.</div>`,
en:`<p>On your <b>MT5 demo</b> account, take 20 trades following the top-down checklist, 0.01 lot, SL and TP every time, and log them in your journal.</p>
<div class="check grid20" data-k="ex2">${Array.from({length:20},(_,i)=>`<label><input type="checkbox"> ${i+1}</label>`).join('')}</div><p class="checkres"></p>
<div class="box tip"><b class="t">At the end</b>Calculate your win rate and expectancy (level 5). Positive? You can move to a small live account. Negative? Reread your journal and do another 20 trades.</div>`}},
{t:{fr:"Prêt pour le réel ?",en:"Ready to go live?"},s:{fr:"La checklist finale et l'examen.",en:"The final checklist and the exam."},
b:{fr:`<div class="check" data-k="final">
<label><input type="checkbox"> Je sais lire une paire, un pip, un lot et calculer un gain/une perte.</label>
<label><input type="checkbox"> J'ai un compte HFM vérifié et je sais me connecter à MT5.</label>
<label><input type="checkbox"> Je sais passer un ordre au marché et en attente, avec SL et TP.</label>
<label><input type="checkbox"> Je sais modifier un SL, mettre au break-even et faire une clôture partielle.</label>
<label><input type="checkbox"> Je sais faire un top-down D1/H4 → H1 → M5 sur TradingView.</label>
<label><input type="checkbox"> Je calcule mon lot avec la règle du 1 %.</label>
<label><input type="checkbox"> J'ai un plan de trading écrit et un journal.</label>
<label><input type="checkbox"> J'ai réalisé au moins 20 trades en démo.</label></div><p class="checkres"></p>
<p>Tout est coché ? Passe l'<b>examen final</b> pour obtenir ton certificat SERGIO FX ACADÉMIE 🎓</p><a class="btn" href="#/exam">🎓 Passer l'examen final</a>`,
en:`<div class="check" data-k="final">
<label><input type="checkbox"> I can read a pair, a pip, a lot and calculate a profit/loss.</label>
<label><input type="checkbox"> I have a verified HFM account and know how to log in to MT5.</label>
<label><input type="checkbox"> I can place market and pending orders, with SL and TP.</label>
<label><input type="checkbox"> I can modify a SL, move to break-even and partially close.</label>
<label><input type="checkbox"> I can do a D1/H4 → H1 → M5 top-down on TradingView.</label>
<label><input type="checkbox"> I size my lot with the 1% rule.</label>
<label><input type="checkbox"> I have a written trading plan and a journal.</label>
<label><input type="checkbox"> I've done at least 20 demo trades.</label></div><p class="checkres"></p>
<p>All ticked? Take the <b>final exam</b> to earn your SERGIO FX ACADEMY certificate 🎓</p><a class="btn" href="#/exam">🎓 Take the final exam</a>`}}
]}
]};
