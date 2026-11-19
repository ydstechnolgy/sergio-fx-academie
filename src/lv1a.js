const CH_A=[
/* ---------- CHAPITRE 1 ---------- */
{t:{fr:"C'est quoi le Forex ?",en:"What is Forex?"},d:{fr:"Le plus grand marché financier du monde et comment on y participe.",en:"The world's largest financial market and how to take part in it."},
lessons:[
{t:{fr:"C'est quoi le trading Forex ?",en:"What is Forex trading?"},s:{fr:"Comment fonctionne le marché des devises et les risques à connaître.",en:"How the currency market works and the risks to know."},
b:{fr:`<p>Le <b>Forex</b> (de l'anglais <i>Foreign Exchange</i>, « échange de devises ») est le marché où l'on échange une monnaie contre une autre. Quand tu changes des francs CFA en euros pour voyager, tu fais une opération de change. Le Forex, c'est la même chose… à l'échelle mondiale.</p>
<h2>Trader, c'est quoi ?</h2>
<p>Le trader ne change pas de l'argent pour voyager : il cherche à <b>profiter des variations de prix</b>. Il achète une devise s'il pense qu'elle va prendre de la valeur, ou la vend s'il pense qu'elle va en perdre.</p>
<div class="box ex"><b class="t">Exemple simple</b>Tu achètes de l'euro contre du dollar quand 1 € = 1,08 $. Quelques heures plus tard, 1 € = 1,09 $. L'euro a pris de la valeur : tu revends avec un gain.</div>
<h2>Un marché sans bourse centrale</h2>
<p>Contrairement aux actions, le Forex n'a pas de bâtiment central. Les échanges se font <b>électroniquement</b> entre banques, institutions et brokers du monde entier. On dit que c'est un marché « de gré à gré » (OTC).</p>
<div class="box warn"><b class="t">Le risque dès le départ</b>Les prix peuvent aller contre toi. Avec l'effet de levier (chapitre 8), une petite variation peut causer une grosse perte. On apprend d'abord, on pratique en démo, puis on trade petit.</div>`,
en:`<p><b>Forex</b> (short for <i>Foreign Exchange</i>) is the market where one currency is exchanged for another. When you swap money before a trip, you make a currency exchange. Forex is the same thing… on a global scale.</p>
<h2>What is trading?</h2>
<p>A trader doesn't exchange money to travel: they try to <b>profit from price changes</b>. They buy a currency if they think it will gain value, or sell it if they think it will lose value.</p>
<div class="box ex"><b class="t">Simple example</b>You buy euros against dollars when €1 = $1.08. A few hours later €1 = $1.09. The euro gained value: you sell back at a profit.</div>
<h2>A market with no central exchange</h2>
<p>Unlike stocks, Forex has no central building. Trading happens <b>electronically</b> between banks, institutions and brokers worldwide. It's called an "over-the-counter" (OTC) market.</p>
<div class="box warn"><b class="t">Risk from day one</b>Prices can move against you. With leverage (chapter 8), a small move can cause a big loss. Learn first, practise on demo, then trade small.</div>`}},
{t:{fr:"Qu'est-ce qu'on échange sur le Forex ?",en:"What is traded in Forex?"},s:{fr:"Les devises les plus tradées et pourquoi.",en:"The most traded currencies and why."},
b:{fr:`<p>Sur le Forex, on échange l'argent des pays. Quand tu achètes une devise, tu paries en quelque sorte sur la santé de l'économie de ce pays face à une autre.</p>
<h2>Les 8 devises principales</h2>
<table><tr><th>Code</th><th>Devise</th><th>Surnom</th></tr>
<tr><td>USD</td><td>Dollar américain</td><td>Greenback</td></tr><tr><td>EUR</td><td>Euro</td><td>Fiber</td></tr><tr><td>JPY</td><td>Yen japonais</td><td>Yen</td></tr><tr><td>GBP</td><td>Livre sterling</td><td>Cable (avec USD)</td></tr><tr><td>CHF</td><td>Franc suisse</td><td>Swissy</td></tr><tr><td>CAD</td><td>Dollar canadien</td><td>Loonie</td></tr><tr><td>AUD</td><td>Dollar australien</td><td>Aussie</td></tr><tr><td>NZD</td><td>Dollar néo-zélandais</td><td>Kiwi</td></tr></table>
<h2>Pourquoi le dollar est partout</h2>
<p>Le <b>dollar américain</b> est présent dans la grande majorité des échanges. C'est la monnaie de réserve mondiale : le pétrole, l'or et beaucoup de matières premières sont cotés en dollars. Quand le dollar bouge, presque tout le marché bouge.</p>
<div class="box tip"><b class="t">Pour débuter</b>Concentre-toi sur peu d'actifs. Chez SERGIO FX, on se concentre sur l'Or (XAUUSD) : on apprend à bien le connaître plutôt que de courir après 20 paires.</div>`,
en:`<p>In Forex, you trade countries' money. When you buy a currency, you are in a way betting on the health of that country's economy against another.</p>
<h2>The 8 main currencies</h2>
<table><tr><th>Code</th><th>Currency</th><th>Nickname</th></tr>
<tr><td>USD</td><td>US dollar</td><td>Greenback</td></tr><tr><td>EUR</td><td>Euro</td><td>Fiber</td></tr><tr><td>JPY</td><td>Japanese yen</td><td>Yen</td></tr><tr><td>GBP</td><td>British pound</td><td>Cable (with USD)</td></tr><tr><td>CHF</td><td>Swiss franc</td><td>Swissy</td></tr><tr><td>CAD</td><td>Canadian dollar</td><td>Loonie</td></tr><tr><td>AUD</td><td>Australian dollar</td><td>Aussie</td></tr><tr><td>NZD</td><td>New Zealand dollar</td><td>Kiwi</td></tr></table>
<h2>Why the dollar is everywhere</h2>
<p>The <b>US dollar</b> is on one side of the vast majority of trades. It's the world's reserve currency: oil, gold and many commodities are priced in dollars. When the dollar moves, almost the whole market moves.</p>
<div class="box tip"><b class="t">To start</b>Focus on few assets. At SERGIO FX we focus on Gold (XAUUSD): get to know one market well rather than chasing 20 pairs.</div>`}},
{t:{fr:"Acheter et vendre une paire de devises",en:"Buying and selling currency pairs"},s:{fr:"Chaque trade achète une devise et en vend une autre.",en:"Every trade buys one currency and sells another."},
b:{fr:`<p>Sur le Forex, les devises sont toujours cotées <b>par paires</b> : EUR/USD, GBP/JPY, USD/CAD… Chaque trade achète une devise et vend l'autre en même temps.</p>
<h2>Lire une paire</h2>
<p>Dans <b>EUR/USD = 1,0850</b> : 1 euro (devise de base) vaut 1,0850 dollar (devise de cotation).</p>
<h2>BUY ou SELL</h2>
<table><tr><th>Action</th><th>Ce que tu fais</th><th>Tu gagnes si…</th></tr>
<tr><td>🟢 BUY EUR/USD</td><td>Tu achètes l'euro, tu vends le dollar</td><td>l'euro monte face au dollar</td></tr>
<tr><td>🔴 SELL EUR/USD</td><td>Tu vends l'euro, tu achètes le dollar</td><td>l'euro baisse face au dollar</td></tr></table>
<div class="box ex"><b class="t">Exemple sur l'Or</b>SELL XAUUSD à 3 870, puis l'or descend à 3 860 : tu as gagné 10 $ par once (100 pips). S'il était monté à 3 880, tu aurais perdu la même chose.</div>
<p>Tu n'as pas besoin de posséder la devise pour la vendre : avec un broker, vendre et acheter sont aussi simples l'un que l'autre.</p>`,
en:`<p>In Forex, currencies are always quoted <b>in pairs</b>: EUR/USD, GBP/JPY, USD/CAD… Every trade buys one currency and sells the other at the same time.</p>
<h2>Reading a pair</h2>
<p>In <b>EUR/USD = 1.0850</b>: 1 euro (base currency) is worth 1.0850 dollars (quote currency).</p>
<h2>BUY or SELL</h2>
<table><tr><th>Action</th><th>What you do</th><th>You profit if…</th></tr>
<tr><td>🟢 BUY EUR/USD</td><td>Buy euros, sell dollars</td><td>the euro rises against the dollar</td></tr>
<tr><td>🔴 SELL EUR/USD</td><td>Sell euros, buy dollars</td><td>the euro falls against the dollar</td></tr></table>
<div class="box ex"><b class="t">Gold example</b>SELL XAUUSD at 3,870, then gold drops to 3,860: you made $10 per ounce (100 pips). If it had risen to 3,880, you would have lost the same.</div>
<p>You don't need to own a currency to sell it: with a broker, selling is as easy as buying.</p>`}},
{t:{fr:"La taille du marché et la liquidité",en:"Market size and liquidity"},s:{fr:"Pourquoi un marché immense, c'est des frais plus bas.",en:"Why a huge market means lower costs."},
b:{fr:`<p>Le Forex est le plus grand marché financier du monde : <b>près de 10 000 milliards de dollars échangés chaque jour</b> selon l'enquête de la Banque des règlements internationaux (2025). C'est bien plus que toutes les bourses d'actions réunies.</p>
<h2>C'est quoi la liquidité ?</h2>
<p>Un marché est <b>liquide</b> quand il y a toujours beaucoup d'acheteurs et de vendeurs. Tu peux entrer et sortir rapidement, au prix affiché, sans attendre.</p>
<h2>Pourquoi ça compte pour toi</h2>
<ul><li><b>Spread plus faible</b> : plus une paire est liquide, plus l'écart entre prix d'achat et de vente est petit. EUR/USD a en général l'un des spreads les plus bas.</li><li><b>Moins de « glissement »</b> : ton ordre est exécuté au prix prévu.</li><li><b>Difficile à manipuler</b> : un seul acteur ne peut pas facilement contrôler le prix.</li></ul>
<div class="box warn"><b class="t">Attention</b>La liquidité baisse la nuit, pendant les jours fériés et juste avant une grosse annonce. Les spreads s'élargissent alors : évite de trader dans ces moments.</div>`,
en:`<p>Forex is the largest financial market in the world: <b>close to 10 trillion dollars traded every day</b> according to the Bank for International Settlements survey (2025). That's far more than all stock markets combined.</p>
<h2>What is liquidity?</h2>
<p>A market is <b>liquid</b> when there are always many buyers and sellers. You can get in and out quickly, at the displayed price, without waiting.</p>
<h2>Why it matters to you</h2>
<ul><li><b>Lower spread</b>: the more liquid a pair, the smaller the gap between buy and sell price. EUR/USD usually has one of the lowest spreads.</li><li><b>Less slippage</b>: your order fills at the expected price.</li><li><b>Hard to manipulate</b>: a single player can't easily control the price.</li></ul>
<div class="box warn"><b class="t">Watch out</b>Liquidity drops at night, on holidays and just before big news. Spreads widen then: avoid trading at those times.</div>`}},
{t:{fr:"Les façons de trader les devises",en:"Ways to trade currencies"},s:{fr:"Spot, CFD, futures, options : les différences.",en:"Spot, CFDs, futures, options: the differences."},
b:{fr:`<p>Il existe plusieurs façons de participer au marché des devises.</p>
<table><tr><th>Méthode</th><th>Principe</th><th>Pour qui ?</th></tr>
<tr><td><b>Spot</b></td><td>Échange de devises au prix du moment</td><td>Banques, entreprises</td></tr>
<tr><td><b>CFD</b></td><td>Contrat qui suit le prix, sans posséder la devise. On gagne ou perd la différence.</td><td>Traders particuliers (c'est ce que proposent HFM et la plupart des brokers)</td></tr>
<tr><td><b>Futures</b></td><td>Contrat standard pour acheter/vendre à une date future, sur une bourse</td><td>Institutions, traders avancés</td></tr>
<tr><td><b>Options</b></td><td>Droit (pas obligation) d'acheter ou vendre à un prix fixé</td><td>Traders avancés</td></tr>
<tr><td><b>ETF</b></td><td>Fonds coté en bourse qui suit une devise ou un panier</td><td>Investisseurs long terme</td></tr></table>
<h2>Le CFD, ce que tu vas utiliser</h2>
<p>Quand tu trades l'Or ou EUR/USD sur MT5 avec ton broker, tu trades des <b>CFD</b> (contrats sur la différence). Tu ne reçois jamais d'or ni d'euros : tu encaisses (ou payes) la différence entre ton prix d'entrée et ton prix de sortie.</p>
<div class="box tip"><b class="t">Avantages du CFD</b>Petit capital, BUY ou SELL en un clic, levier disponible. <b>Inconvénient</b> : le levier augmente aussi les pertes, et il y a des frais de nuit (swap).</div>`,
en:`<p>There are several ways to take part in the currency market.</p>
<table><tr><th>Method</th><th>How it works</th><th>For whom?</th></tr>
<tr><td><b>Spot</b></td><td>Exchanging currencies at the current price</td><td>Banks, companies</td></tr>
<tr><td><b>CFD</b></td><td>A contract that tracks the price without owning the currency. You win or lose the difference.</td><td>Retail traders (what HFM and most brokers offer)</td></tr>
<tr><td><b>Futures</b></td><td>Standard contract to buy/sell at a future date, on an exchange</td><td>Institutions, advanced traders</td></tr>
<tr><td><b>Options</b></td><td>The right (not obligation) to buy or sell at a set price</td><td>Advanced traders</td></tr>
<tr><td><b>ETF</b></td><td>Exchange-traded fund tracking a currency or basket</td><td>Long-term investors</td></tr></table>
<h2>CFDs: what you'll use</h2>
<p>When you trade Gold or EUR/USD on MT5 with your broker, you are trading <b>CFDs</b> (contracts for difference). You never receive gold or euros: you collect (or pay) the difference between your entry and exit price.</p>
<div class="box tip"><b class="t">CFD pros</b>Small capital, BUY or SELL in one click, leverage available. <b>Con</b>: leverage also magnifies losses, and there are overnight fees (swap).</div>`}}
]},
/* ---------- CHAPITRE 2 ---------- */
{t:{fr:"Les paires de devises",en:"Currency pairs"},d:{fr:"Les familles de paires, les prix et l'Or.",en:"Pair families, prices and Gold."},
lessons:[
{t:{fr:"Paires majeures, croisées et exotiques",en:"Major, cross and exotic pairs"},s:{fr:"Les trois familles de paires.",en:"The three families of pairs."},
b:{fr:`<h2>Les paires majeures</h2>
<p>Elles contiennent toutes le <b>dollar américain</b> et une autre grande devise. Ce sont les plus échangées, avec les spreads les plus bas.</p>
<p>EUR/USD · USD/JPY · GBP/USD · USD/CHF · AUD/USD · USD/CAD · NZD/USD</p>
<h2>Les paires croisées (crosses)</h2>
<p>Deux grandes devises <b>sans le dollar</b> : EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY… Elles bougent bien mais ont souvent un spread un peu plus élevé.</p>
<h2>Les paires exotiques</h2>
<p>Une grande devise contre la monnaie d'un pays émergent : USD/ZAR (rand sud-africain), USD/TRY (livre turque), USD/MXN… Elles peuvent faire de très gros mouvements, avec des <b>spreads larges</b> et une liquidité plus faible.</p>
<div class="box tip"><b class="t">Conseil débutant</b>Évite les exotiques au début. Reste sur l'Or et une ou deux paires majeures.</div>`,
en:`<h2>Major pairs</h2>
<p>They all include the <b>US dollar</b> and another big currency. They're the most traded, with the lowest spreads.</p>
<p>EUR/USD · USD/JPY · GBP/USD · USD/CHF · AUD/USD · USD/CAD · NZD/USD</p>
<h2>Cross pairs</h2>
<p>Two big currencies <b>without the dollar</b>: EUR/GBP, EUR/JPY, GBP/JPY, AUD/JPY… They move well but often have a slightly higher spread.</p>
<h2>Exotic pairs</h2>
<p>A major currency against an emerging-market currency: USD/ZAR (South African rand), USD/TRY (Turkish lira), USD/MXN… They can make very large moves, with <b>wide spreads</b> and lower liquidity.</p>
<div class="box tip"><b class="t">Beginner tip</b>Avoid exotics at first. Stick with Gold and one or two major pairs.</div>`}},
{t:{fr:"Devise de base et devise de cotation",en:"Base and quote currency"},s:{fr:"Lire correctement un prix.",en:"Read a price correctly."},
b:{fr:`<p>Dans chaque paire, la première devise est la <b>devise de base</b> et la seconde la <b>devise de cotation</b>.</p>
<div class="box ex"><b class="t">GBP/USD = 1,2700</b>1 livre sterling (base) = 1,2700 dollar (cotation).<br>Le prix te dit combien d'unités de la devise de cotation il faut pour acheter <b>une</b> unité de la devise de base.</div>
<h2>Quand le prix monte</h2>
<p>Si GBP/USD passe de 1,2700 à 1,2750 : la <b>livre s'est renforcée</b> (ou le dollar s'est affaibli). Il faut plus de dollars pour une livre.</p>
<h2>Quand le prix baisse</h2>
<p>Si GBP/USD passe de 1,2700 à 1,2650 : la livre s'est affaiblie (ou le dollar s'est renforcé).</p>
<h2>Dans quelle devise est mon gain ?</h2>
<p>Ton gain ou ta perte est calculé dans la <b>devise de cotation</b>, puis converti dans la devise de ton compte. Sur XAUUSD, EUR/USD ou GBP/USD, c'est directement en dollars.</p>`,
en:`<p>In every pair, the first currency is the <b>base currency</b> and the second is the <b>quote currency</b>.</p>
<div class="box ex"><b class="t">GBP/USD = 1.2700</b>1 British pound (base) = 1.2700 dollars (quote).<br>The price tells you how many units of the quote currency it takes to buy <b>one</b> unit of the base currency.</div>
<h2>When the price rises</h2>
<p>If GBP/USD goes from 1.2700 to 1.2750: the <b>pound strengthened</b> (or the dollar weakened). It takes more dollars to buy one pound.</p>
<h2>When the price falls</h2>
<p>If GBP/USD goes from 1.2700 to 1.2650: the pound weakened (or the dollar strengthened).</p>
<h2>What currency is my profit in?</h2>
<p>Your profit or loss is calculated in the <b>quote currency</b>, then converted to your account currency. On XAUUSD, EUR/USD or GBP/USD it is directly in dollars.</p>`}},
{t:{fr:"Prix Bid, prix Ask et spread",en:"Bid, Ask and spread"},s:{fr:"Les deux prix affichés et le coût d'un trade.",en:"The two displayed prices and the cost of a trade."},
b:{fr:`<p>Sur MT5, chaque actif affiche <b>deux prix</b> :</p>
<ul><li><b>Bid</b> (vente) : le prix auquel tu peux <b>vendre</b>.</li><li><b>Ask</b> (achat) : le prix auquel tu peux <b>acheter</b>. Il est toujours un peu plus haut.</li></ul>
<div class="box ex"><b class="t">Exemple</b>XAUUSD : Bid 3 865,20 / Ask 3 865,50. Le <b>spread</b> = 0,30 $, soit 3 pips.</div>
<h2>Pourquoi le spread compte</h2>
<p>Le spread est la principale rémunération du broker. Dès que tu ouvres un trade, tu es en perte du montant du spread. Le prix doit d'abord « rattraper » ce coût avant que tu sois en gain.</p>
<h2>Quand le spread s'élargit</h2>
<ul><li>Pendant les grosses annonces économiques.</li><li>À l'ouverture du marché le lundi et la nuit (faible liquidité).</li><li>Sur les paires exotiques.</li></ul>
<div class="box tip"><b class="t">Astuce</b>Un BUY s'ouvre au prix Ask et se ferme au Bid. Un SELL s'ouvre au Bid et se ferme à l'Ask. Ton Stop Loss sur un SELL est donc touché quand l'<b>Ask</b> l'atteint.</div>`,
en:`<p>On MT5, every asset shows <b>two prices</b>:</p>
<ul><li><b>Bid</b>: the price at which you can <b>sell</b>.</li><li><b>Ask</b>: the price at which you can <b>buy</b>. It's always slightly higher.</li></ul>
<div class="box ex"><b class="t">Example</b>XAUUSD: Bid 3,865.20 / Ask 3,865.50. The <b>spread</b> = $0.30, i.e. 3 pips.</div>
<h2>Why the spread matters</h2>
<p>The spread is the broker's main income. As soon as you open a trade, you're down by the spread. Price must first "cover" that cost before you're in profit.</p>
<h2>When the spread widens</h2>
<ul><li>During big economic news.</li><li>At the Monday open and at night (low liquidity).</li><li>On exotic pairs.</li></ul>
<div class="box tip"><b class="t">Tip</b>A BUY opens at the Ask and closes at the Bid. A SELL opens at the Bid and closes at the Ask. So your Stop Loss on a SELL is hit when the <b>Ask</b> reaches it.</div>`}},
{t:{fr:"L'Or (XAUUSD) et les autres actifs",en:"Gold (XAUUSD) and other assets"},s:{fr:"Ce qu'on peut trader en plus des devises.",en:"What you can trade besides currencies."},
b:{fr:`<h2>L'Or, notre actif principal</h2>
<p><b>XAUUSD</b> = le prix d'une once d'or en dollars. L'or est considéré comme une <b>valeur refuge</b> : en période de crise ou d'inquiétude, les investisseurs l'achètent pour protéger leur argent.</p>
<ul><li>Il bouge souvent de <b>20 à 50 $ par jour</b>, parfois beaucoup plus : de belles opportunités, mais un risque élevé.</li><li>Il réagit fortement au <b>dollar</b> et aux <b>taux de la Fed</b> : dollar fort → or souvent en baisse, et inversement.</li><li>1 lot standard = 100 onces. Un mouvement de 1 $ = 100 $ de gain/perte par lot, soit <b>1 $ pour 0,01 lot</b>.</li></ul>
<h2>Les autres actifs disponibles chez un broker</h2>
<table><tr><th>Famille</th><th>Exemples</th></tr>
<tr><td>Métaux</td><td>Or (XAUUSD), Argent (XAGUSD)</td></tr>
<tr><td>Indices</td><td>US30 (Dow Jones), NAS100 (Nasdaq), GER40</td></tr>
<tr><td>Énergie</td><td>Pétrole (USOIL, UKOIL)</td></tr>
<tr><td>Crypto</td><td>BTCUSD, ETHUSD</td></tr></table>
<div class="box warn"><b class="t">Attention</b>Chaque actif a sa propre taille de contrat et sa propre volatilité. Vérifie toujours la valeur d'un mouvement avant de choisir ta taille de lot.</div>`,
en:`<h2>Gold, our main asset</h2>
<p><b>XAUUSD</b> = the price of one ounce of gold in dollars. Gold is seen as a <b>safe haven</b>: in times of crisis or worry, investors buy it to protect their money.</p>
<ul><li>It often moves <b>$20 to $50 a day</b>, sometimes much more: great opportunities, but high risk.</li><li>It reacts strongly to the <b>dollar</b> and <b>Fed rates</b>: strong dollar → gold often falls, and vice versa.</li><li>1 standard lot = 100 ounces. A $1 move = $100 profit/loss per lot, i.e. <b>$1 for 0.01 lot</b>.</li></ul>
<h2>Other assets available at a broker</h2>
<table><tr><th>Family</th><th>Examples</th></tr>
<tr><td>Metals</td><td>Gold (XAUUSD), Silver (XAGUSD)</td></tr>
<tr><td>Indices</td><td>US30 (Dow Jones), NAS100 (Nasdaq), GER40</td></tr>
<tr><td>Energy</td><td>Oil (USOIL, UKOIL)</td></tr>
<tr><td>Crypto</td><td>BTCUSD, ETHUSD</td></tr></table>
<div class="box warn"><b class="t">Watch out</b>Each asset has its own contract size and volatility. Always check what a move is worth before choosing your lot size.</div>`}}
]},
/* ---------- CHAPITRE 3 ---------- */
{t:{fr:"Comment on gagne et on perd",en:"How you win and lose money"},d:{fr:"Pips, lots et calculs de gains.",en:"Pips, lots and profit calculations."},
lessons:[
{t:{fr:"Le pip et le pipette",en:"Pip and pipette"},s:{fr:"L'unité qui mesure les mouvements de prix.",en:"The unit that measures price moves."},
b:{fr:`<p>Le <b>pip</b> (<i>percentage in point</i>) est l'unité standard pour mesurer un mouvement de prix.</p>
<table><tr><th>Actif</th><th>1 pip =</th><th>Exemple</th></tr>
<tr><td>EUR/USD, GBP/USD…</td><td>0,0001 (4ᵉ décimale)</td><td>1,0850 → 1,0870 = <b>20 pips</b></td></tr>
<tr><td>USD/JPY, EUR/JPY…</td><td>0,01 (2ᵉ décimale)</td><td>150,20 → 150,50 = <b>30 pips</b></td></tr>
<tr><td>Or (XAUUSD)</td><td>0,10 $ (usage courant)</td><td>3 860 → 3 865 = <b>50 pips</b></td></tr></table>
<h2>Le pipette</h2>
<p>La plupart des brokers affichent un chiffre de plus : la <b>pipette</b>, qui vaut <b>1/10 de pip</b>. Dans EUR/USD = 1,08505, le dernier « 5 » est une pipette.</p>
<div class="box tip"><b class="t">Sur l'Or</b>Certains traders comptent 1 pip = 0,01 $ ou 1 pip = 1 $. Chez SERGIO FX, on utilise la convention la plus répandue : <b>1 $ de mouvement = 10 pips</b>. L'important est d'utiliser toujours la même.</div>`,
en:`<p>A <b>pip</b> (<i>percentage in point</i>) is the standard unit for measuring a price move.</p>
<table><tr><th>Asset</th><th>1 pip =</th><th>Example</th></tr>
<tr><td>EUR/USD, GBP/USD…</td><td>0.0001 (4th decimal)</td><td>1.0850 → 1.0870 = <b>20 pips</b></td></tr>
<tr><td>USD/JPY, EUR/JPY…</td><td>0.01 (2nd decimal)</td><td>150.20 → 150.50 = <b>30 pips</b></td></tr>
<tr><td>Gold (XAUUSD)</td><td>$0.10 (common usage)</td><td>3,860 → 3,865 = <b>50 pips</b></td></tr></table>
<h2>The pipette</h2>
<p>Most brokers show one extra digit: the <b>pipette</b>, worth <b>1/10 of a pip</b>. In EUR/USD = 1.08505, the last "5" is a pipette.</p>
<div class="box tip"><b class="t">On Gold</b>Some traders count 1 pip = $0.01 or 1 pip = $1. At SERGIO FX we use the most common convention: <b>a $1 move = 10 pips</b>. What matters is to always use the same one.</div>`}},
{t:{fr:"Les lots",en:"Lots"},s:{fr:"Standard, mini et micro : la taille de ta position.",en:"Standard, mini and micro: your position size."},
b:{fr:`<p>Le <b>lot</b> indique la quantité que tu trades. Sur MT5, tu le choisis dans la case « Volume ».</p>
<table><tr><th>Lot</th><th>Volume MT5</th><th>Forex (unités)</th><th>Or (onces)</th></tr>
<tr><td>Standard</td><td>1,00</td><td>100 000</td><td>100</td></tr>
<tr><td>Mini</td><td>0,10</td><td>10 000</td><td>10</td></tr>
<tr><td>Micro</td><td>0,01</td><td>1 000</td><td>1</td></tr></table>
<p>Plus le lot est gros, plus chaque pip vaut d'argent : en gain comme en perte.</p>
<div class="box ex"><b class="t">Sur l'Or</b>Avec <b>0,01 lot</b>, un mouvement de 1 $ (10 pips) = <b>1 $</b> de gain ou de perte.<br>Avec <b>0,10 lot</b> = 10 $. Avec <b>1,00 lot</b> = 100 $.</div>
<div class="box warn"><b class="t">Erreur classique</b>Choisir son lot « au feeling ». Le lot se calcule à partir du risque et du Stop Loss (chapitre 9).</div>`,
en:`<p>The <b>lot</b> tells how much you trade. On MT5 you choose it in the "Volume" box.</p>
<table><tr><th>Lot</th><th>MT5 volume</th><th>Forex (units)</th><th>Gold (ounces)</th></tr>
<tr><td>Standard</td><td>1.00</td><td>100,000</td><td>100</td></tr>
<tr><td>Mini</td><td>0.10</td><td>10,000</td><td>10</td></tr>
<tr><td>Micro</td><td>0.01</td><td>1,000</td><td>1</td></tr></table>
<p>The bigger the lot, the more money each pip is worth: in profit and in loss.</p>
<div class="box ex"><b class="t">On Gold</b>With <b>0.01 lot</b>, a $1 move (10 pips) = <b>$1</b> profit or loss.<br>With <b>0.10 lot</b> = $10. With <b>1.00 lot</b> = $100.</div>
<div class="box warn"><b class="t">Classic mistake</b>Choosing your lot "by feel". Lot size is calculated from your risk and Stop Loss (chapter 9).</div>`}},
{t:{fr:"Calculer la valeur d'un pip",en:"Calculating pip value"},s:{fr:"Combien rapporte 1 pip selon ton lot.",en:"How much 1 pip is worth for your lot."},
b:{fr:`<h2>Paires qui finissent par USD (EUR/USD, GBP/USD…)</h2>
<p>C'est le cas le plus simple : la valeur d'un pip est fixe.</p>
<table><tr><th>Lot</th><th>Valeur d'1 pip</th></tr><tr><td>1,00</td><td>10 $</td></tr><tr><td>0,10</td><td>1 $</td></tr><tr><td>0,01</td><td>0,10 $</td></tr></table>
<h2>Autres paires : la formule</h2>
<div class="box ex"><b class="t">Valeur du pip = (taille du pip ÷ prix) × nombre d'unités</b>USD/JPY à 150,00, 1 lot standard :<br>(0,01 ÷ 150) × 100 000 = <b>6,67 $</b> par pip.</div>
<h2>L'Or</h2>
<table><tr><th>Lot</th><th>1 pip (0,10 $)</th><th>1 $ de mouvement</th></tr><tr><td>1,00</td><td>10 $</td><td>100 $</td></tr><tr><td>0,10</td><td>1 $</td><td>10 $</td></tr><tr><td>0,01</td><td>0,10 $</td><td>1 $</td></tr></table>
<div class="box tip"><b class="t">Bonne nouvelle</b>Tu n'as pas besoin de tout calculer à la main : MT5 affiche ton gain/perte en direct, et de nombreux calculateurs de pip gratuits existent en ligne. Mais comprendre la logique t'évitera des erreurs de lot.</div>`,
en:`<h2>Pairs ending in USD (EUR/USD, GBP/USD…)</h2>
<p>The simplest case: pip value is fixed.</p>
<table><tr><th>Lot</th><th>Value of 1 pip</th></tr><tr><td>1.00</td><td>$10</td></tr><tr><td>0.10</td><td>$1</td></tr><tr><td>0.01</td><td>$0.10</td></tr></table>
<h2>Other pairs: the formula</h2>
<div class="box ex"><b class="t">Pip value = (pip size ÷ price) × number of units</b>USD/JPY at 150.00, 1 standard lot:<br>(0.01 ÷ 150) × 100,000 = <b>$6.67</b> per pip.</div>
<h2>Gold</h2>
<table><tr><th>Lot</th><th>1 pip ($0.10)</th><th>$1 move</th></tr><tr><td>1.00</td><td>$10</td><td>$100</td></tr><tr><td>0.10</td><td>$1</td><td>$10</td></tr><tr><td>0.01</td><td>$0.10</td><td>$1</td></tr></table>
<div class="box tip"><b class="t">Good news</b>You don't have to calculate everything by hand: MT5 shows your profit/loss live, and many free pip calculators exist online. But understanding the logic will save you from lot-size mistakes.</div>`}},
{t:{fr:"Calculer un gain ou une perte",en:"Calculating profit or loss"},s:{fr:"Des exemples chiffrés, pas à pas.",en:"Worked examples, step by step."},
b:{fr:`<div class="box ex"><b class="t">Exemple 1 – BUY sur EUR/USD</b>Entrée : 1,0850 · Sortie : 1,0890 · Lot : 0,10<br>Mouvement : 1,0890 − 1,0850 = 40 pips<br>Valeur du pip à 0,10 lot : 1 $<br>Résultat : 40 × 1 $ = <b>+40 $</b></div>
<div class="box ex"><b class="t">Exemple 2 – SELL sur l'Or</b>Entrée : 3 871,75 · Sortie (TP) : 3 860,05 · Lot : 0,05<br>Mouvement : 3 871,75 − 3 860,05 = 11,70 $ = 117 pips<br>Valeur d'1 $ à 0,05 lot : 5 $<br>Résultat : 11,70 × 5 $ = <b>+58,50 $</b></div>
<div class="box ex"><b class="t">Exemple 3 – Stop Loss touché</b>BUY Or à 3 861,55 · SL : 3 858,02 · Lot : 0,10<br>Mouvement contre toi : 3,53 $ = 35 pips<br>Valeur d'1 $ à 0,10 lot : 10 $<br>Résultat : 3,53 × 10 $ = <b>−35,30 $</b></div>
<h2>N'oublie pas les frais</h2>
<p>Le résultat réel tient aussi compte du <b>spread</b>, d'éventuelles <b>commissions</b> et du <b>swap</b> si tu gardes le trade la nuit.</p>`,
en:`<div class="box ex"><b class="t">Example 1 – BUY EUR/USD</b>Entry: 1.0850 · Exit: 1.0890 · Lot: 0.10<br>Move: 1.0890 − 1.0850 = 40 pips<br>Pip value at 0.10 lot: $1<br>Result: 40 × $1 = <b>+$40</b></div>
<div class="box ex"><b class="t">Example 2 – SELL Gold</b>Entry: 3,871.75 · Exit (TP): 3,860.05 · Lot: 0.05<br>Move: 3,871.75 − 3,860.05 = $11.70 = 117 pips<br>Value of $1 at 0.05 lot: $5<br>Result: 11.70 × $5 = <b>+$58.50</b></div>
<div class="box ex"><b class="t">Example 3 – Stop Loss hit</b>BUY Gold at 3,861.55 · SL: 3,858.02 · Lot: 0.10<br>Move against you: $3.53 = 35 pips<br>Value of $1 at 0.10 lot: $10<br>Result: 3.53 × $10 = <b>−$35.30</b></div>
<h2>Don't forget costs</h2>
<p>The real result also includes the <b>spread</b>, any <b>commissions</b> and the <b>swap</b> if you hold the trade overnight.</p>`}}
]}
];
