/* ============ SCHÉMAS (modèles simples, épurés) ============
   Coordonnées : x de 0 à 100 (gauche → droite), y de 0 à 100 (bas → haut). */
const LINK={HFM:"https://www.hfm.com/sv/fr/?refid=30492261",WA:"https://wa.me/22879867879"};
function zz(o){
 const W=800,H=o.h||420,X=x=>40+x*7.2,Y=y=>H-40-y*(H-80)/100;let g='';
 (o.band||[]).forEach(([a,b,c,t,tc])=>{g+=`<rect x="0" width="${W}" y="${Y(b)}" height="${Y(a)-Y(b)}" fill="${c}" opacity=".55"/>`;if(t)g+=`<text x="${W-12}" y="${Y(b)-6}" text-anchor="end" font-size="15" fill="${tc||'#065f46'}" font-weight="700">${t}</text>`});
 (o.fib||[]).forEach(([y,t])=>g+=`<line x1="${X(o.fx||0)}" x2="${W-60}" y1="${Y(y)}" y2="${Y(y)}" stroke="#9ca3af" stroke-width="1.2"/><text x="${W-54}" y="${Y(y)+5}" font-size="15" fill="#111827">${t}</text>`);
 (o.box||[]).forEach(([x1,y1,x2,y2,t])=>{g+=`<rect x="${X(x1)}" y="${Y(y2)}" width="${X(x2)-X(x1)}" height="${Y(y1)-Y(y2)}" fill="rgba(79,110,220,.26)"/>`;if(t)g+=`<text x="${(X(x1)+X(x2))/2}" y="${(Y(y1)+Y(y2))/2+5}" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">${t}</text>`});
 if(o.rr){const r=o.rr;g+=`<rect x="${X(r.x1)}" width="${X(r.x2)-X(r.x1)}" y="${Math.min(Y(r.e),Y(r.s))}" height="${Math.abs(Y(r.e)-Y(r.s))}" fill="#f87171" opacity=".55"/><rect x="${X(r.x1)}" width="${X(r.x2)-X(r.x1)}" y="${Math.min(Y(r.e),Y(r.t))}" height="${Math.abs(Y(r.e)-Y(r.t))}" fill="#34d399" opacity=".5"/><text x="${X(r.x2)+8}" y="${(Y(r.e)+Y(r.s))/2+5}" font-size="14" fill="#c2410c" font-weight="700">1R</text><text x="${X(r.x2)+8}" y="${(Y(r.e)+Y(r.t))/2+5}" font-size="14" fill="#c2410c" font-weight="700">${r.lab||'2R'}</text>`}
 (o.red||[]).forEach(([a,y,b])=>g+=`<line x1="${X(a)}" x2="${X(b)}" y1="${Y(y)}" y2="${Y(y)}" stroke="#e11d48" stroke-width="2.4"/>`);
 (o.gray||[]).forEach(([a,y,b])=>g+=`<line x1="${X(a)}" x2="${X(b)}" y1="${Y(y)}" y2="${Y(y)}" stroke="#4b5563" stroke-width="1.6"/>`);
 (o.dash||[]).forEach(([a,y,b,c])=>g+=`<line x1="${X(a)}" x2="${X(b)}" y1="${Y(y)}" y2="${Y(y)}" stroke="${c||'#4b5563'}" stroke-width="2" stroke-dasharray="7 6"/>`);
 (o.ln||[]).forEach(([a,b,c,d,col,w])=>g+=`<line x1="${X(a)}" y1="${Y(b)}" x2="${X(c)}" y2="${Y(d)}" stroke="${col||'#7c3aed'}" stroke-width="${w||2.4}"/>`);
 (o.sub||[]).forEach(p=>g+=`<polyline fill="none" stroke="#16a34a" stroke-width="2" points="${p.map(([x,y])=>X(x)+','+Y(y)).join(' ')}"/>`);
 g+=`<polyline fill="none" stroke="#111827" stroke-width="${o.sw||3}" stroke-linejoin="round" points="${o.pts.map(([x,y])=>X(x)+','+Y(y)).join(' ')}"/>`;
 (o.dot||[]).forEach(([x,y])=>g+=`<polyline fill="none" stroke="#111827" stroke-width="2" stroke-dasharray="5 5" points="${x.map(([a,b])=>X(a)+','+Y(b)).join(' ')}"/>`);
 (o.x||[]).forEach(([x,y])=>g+=`<text x="${X(x)}" y="${Y(y)+7}" text-anchor="middle" font-size="22" font-weight="900" fill="#e11d48">×</text>`);
 (o.circ||[]).forEach(([x,y])=>g+=`<circle cx="${X(x)}" cy="${Y(y)}" r="15" fill="#22d3ee" opacity=".85"/>`);
 (o.ring||[]).forEach(([x,y])=>g+=`<circle cx="${X(x)}" cy="${Y(y)}" r="38" fill="none" stroke="#111827" stroke-width="2"/>`);
 (o.lab||[]).forEach(([x,y,t,p,c])=>g+=`<text x="${X(x)}" y="${p=='b'?Y(y)+28:Y(y)-14}" text-anchor="middle" font-size="18" font-weight="700" fill="${c||'#111827'}">${t}</text>`);
 (o.txt||[]).forEach(([x,y,t,c,s])=>g+=`<text x="${X(x)}" y="${Y(y)}" font-size="${s||15}" font-weight="700" fill="${c||'#111827'}">${t}</text>`);
 return `<figure><svg viewBox="0 0 ${W} ${H}" style="background:var(--sch)" font-family="Arial,sans-serif">${g}</svg>${o.cap?`<figcaption>${o.cap}</figcaption>`:''}</figure>`;
}
/* Capture réelle du coach */
const shot=(f,cap)=>`<figure class="shot"><img src="img/${f}.jpg" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;

/* Chandeliers (petites illustrations) : [ouverture, haut, bas, clôture] */
function mini(c){const n=c.length,lo=Math.min(...c.map(k=>k[2])),hi=Math.max(...c.map(k=>k[1])),Y=v=>92-(v-lo)/(hi-lo)*84,w=26,x0=60-n*w/2;
 return `<svg viewBox="0 0 120 100">${c.map(([o,h,l,cl],i)=>{const x=x0+w*i+w/2,col=cl>=o?'#16a34a':'#dc2626';return `<line x1="${x}" x2="${x}" y1="${Y(h)}" y2="${Y(l)}" stroke="${col}" stroke-width="2.5"/><rect x="${x-8}" width="16" y="${Y(Math.max(o,cl))}" height="${Math.max(2.5,Math.abs(Y(o)-Y(cl)))}" fill="${col}"/>`}).join('')}</svg>`}
const pats=list=>`<div class="pats">${list.map(p=>`<div class="pat">${mini(p[2])}<b>${p[0]}</b><i>${p[1]}</i></div>`).join('')}</div>`;
const PAT={top:[[48,80,20,55]],maruB:[[15,85,15,85]],maruR:[[85,85,15,15]],doji:[[50,82,18,50.6]],
 hammer:[[70,75,50,52],[52,55,35,38],[30,34,4,33]],hang:[[30,50,28,48],[48,66,46,64],[78,80,48,75]],invH:[[70,72,50,52],[52,54,34,36],[26,62,24,29]],star:[[30,50,28,48],[48,66,46,64],[66,96,64,63]],
 engB:[[60,62,40,44],[42,72,40,68]],engR:[[40,62,38,58],[60,62,30,34]],twB:[[60,62,20,28],[30,58,20,55]],twT:[[40,80,38,72],[72,80,40,45]],
 mstar:[[82,84,40,45],[40,42,30,38],[42,78,40,75]],estar:[[20,62,18,58],[62,72,60,64],[58,60,20,25]],soldiers:[[20,40,18,38],[36,60,34,58],[56,80,54,78]],crows:[[80,82,60,62],[64,66,40,42],[44,46,20,22]]};
const anatomy=()=>`<figure><svg viewBox="0 0 420 220" style="background:var(--sch)" font-family="Arial"><g font-size="13" fill="#111827">
<line x1="120" y1="20" x2="120" y2="200" stroke="#16a34a" stroke-width="3"/><rect x="100" y="60" width="40" height="90" fill="#16a34a"/>
<line x1="300" y1="20" x2="300" y2="200" stroke="#dc2626" stroke-width="3"/><rect x="280" y="60" width="40" height="90" fill="#dc2626"/>
<text x="150" y="25">Plus haut</text><text x="150" y="64">Clôture</text><text x="150" y="152">Ouverture</text><text x="150" y="200">Plus bas</text>
<text x="330" y="25">Plus haut</text><text x="330" y="64">Ouverture</text><text x="330" y="152">Clôture</text><text x="330" y="200">Plus bas</text>
<text x="14" y="110" font-weight="700">Corps →</text><text x="14" y="40" font-weight="700">Mèche →</text></g></svg><figcaption>Bougie haussière (verte) et baissière (rouge)</figcaption></figure>`;
const pairBox=(b,q)=>`<div class="pair"><div class="sym"><span>${b}</span>/<span>${q}</span><small>1ʳᵉ devise (base) · 2ᵉ devise (cotation)</small></div>
<div class="side2 buy"><b>▲ Acheter la paire (BUY)</b><p>Tu achètes ${b} et vends ${q} : tu penses que ${b} va se renforcer.</p></div>
<div class="side2 sell"><b>▼ Vendre la paire (SELL)</b><p>Tu vends ${b} et achètes ${q} : tu penses que ${b} va s'affaiblir.</p></div></div>`;
