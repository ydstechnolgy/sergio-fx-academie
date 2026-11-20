/* ===================== MOTEUR DU SITE ===================== */
const MODS=[M1,M2,M3,M4,M5,M6,M7];
MODS.forEach((m,mi)=>{m.n=mi+1;m.lessons.forEach((x,li)=>{x.id=`${m.n}-${li+1}`;x.m=m;x.li=li})});
const ALL=MODS.flatMap(m=>m.lessons);
const store={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let DONE=store.get('sfx_done3',{}),BEST=store.get('sfx_best3',{});
const pct=m=>Math.round(100*m.lessons.filter(x=>DONE[x.id]).length/m.lessons.length);
const pctAll=()=>Math.round(100*ALL.filter(x=>DONE[x.id]).length/ALL.length);
const firstTodo=m=>(m.lessons.find(x=>!DONE[x.id])||m.lessons[0]).id;
const resume=()=>(ALL.find(x=>!DONE[x.id])||ALL[0]).id;
const cta=()=>`<div class="cta"><h3>Prêt à passer à l'action ?</h3><p>Ouvre ton compte chez notre partenaire HFM et rejoins le groupe SERGIO FX.</p><div class="row"><a class="btn" href="${LINK.HFM}" target="_blank" rel="noopener">Ouvrir mon compte HFM</a><a class="btn ghost" href="${LINK.WA}" target="_blank" rel="noopener">WhatsApp du coach</a></div></div>`;
const GOALS=[["📈","Utiliser TradingView","Créer ton compte, ajouter l'or et les paires, tracer zones, tendances et Fibonacci."],["🔭","Faire ton top-down","Lire la structure du D1 au M5 et savoir où et quand intervenir."],["📱","Trader sur MT5","Connecter ton compte, ouvrir, gérer et fermer une position."],["🛡️","Protéger ton capital","Calculer ton lot, fixer ton risque et tenir ton journal."]];

function home(){
 const started=Object.keys(DONE).length>0;
 return `<section class="hero"><div class="wrap"><h1>Apprends le trading <span>pas à pas</span></h1>
 <p>Une formation complète, en français, pour passer de zéro à ton premier trade maîtrisé sur l'or : du marché des devises jusqu'à la méthode SERGIO FX.</p>
 <a class="btn" href="#/l/${resume()}">${started?'Reprendre où j\'en étais':'Commencer la formation'} →</a>
 <div class="stats"><div><b>${MODS.length}</b>modules</div><div><b>${ALL.length}</b>leçons</div><div><b>${pctAll()} %</b>terminé</div></div></div></section>
 <div class="wrap"><h2 class="sec">À la fin de la formation, tu sauras…</h2><div class="goals">${GOALS.map(g=>`<div class="goal"><i>${g[0]}</i><b>${g[1]}</b><p>${g[2]}</p></div>`).join('')}</div>
 <h2 class="sec">Le programme</h2><div class="mods">${MODS.map(m=>`<a class="mod" href="#/l/${firstTodo(m)}"><span class="n">${m.n}</span><div><h3>${m.t}</h3><p>${m.d}</p><div class="bar"><i style="width:${pct(m)}%"></i></div></div><span class="pc">${m.lessons.length} leçons · ${pct(m)} %${BEST[m.n]!=null?` · quiz ${BEST[m.n]} %`:''}</span></a>`).join('')}
 <a class="mod" href="#/examen"><span class="n">🎓</span><div><h3>Examen final et certificat</h3><p>20 questions tirées de tous les modules. 70 % pour obtenir ton certificat.</p></div><span class="pc">20 questions</span></a></div>${cta()}</div>`;
}
function side(cur){
 const open=innerWidth>900?' open':'';
 return `<details class="side"${open}><summary>Sommaire <span style="color:var(--gold2);font-size:14px">${pctAll()} %</span></summary><div class="tot">${ALL.filter(x=>DONE[x.id]).length} / ${ALL.length} leçons terminées</div>
 ${MODS.map(m=>`<h5>Module ${m.n} · ${m.t}</h5>${m.lessons.map(x=>`<a href="#/l/${x.id}" class="${x.id==cur?'on':''} ${DONE[x.id]?'ok':''}"><i>${DONE[x.id]?'✓':''}</i>${x.t}</a>`).join('')}<a href="#/quiz/${m.n}" class="${BEST[m.n]!=null?'ok':''}"><i>${BEST[m.n]!=null?'✓':''}</i>📝 Quiz du module ${m.n}</a>`).join('')}
 <h5>Fin</h5><a href="#/examen"><i></i>🎓 Examen final</a></details>`;
}
function lesson(id){
 const i=ALL.findIndex(x=>x.id==id);if(i<0)return home();const x=ALL[i],p=ALL[i-1],nx=ALL[i+1],m=x.m;
 const newMod=nx&&nx.m!==m;
 const next=nx?`<div class="next"><div><small>${newMod?`Module ${m.n} terminé · Suite : module ${nx.m.n}`:'Leçon suivante'}</small><b>${newMod?nx.m.t:nx.t}</b>${newMod?`<br><a href="#/quiz/${m.n}" style="font-size:14px">📝 Tester mes connaissances (quiz du module ${m.n}, facultatif)</a>`:''}</div><button class="btn" onclick="go('${x.id}','#/l/${nx.id}')">Terminer et continuer →</button></div>`
  :`<div class="next"><div><small>Dernière leçon</small><b>Tu as terminé la formation 🎉</b></div><button class="btn" onclick="go('${x.id}','#/examen')">Passer l'examen final →</button></div>`;
 return `<div class="wrap course">${side(id)}<article class="lesson"><div class="oprog"><i style="width:${pctAll()}%"></i></div>
 <div class="crumb"><a href="#/">Formation</a> › Module ${m.n} · ${m.t} › Leçon ${x.li+1} / ${m.lessons.length}</div>
 <h1>${x.t}</h1><p class="lead">${x.s}</p>${x.b}${next}
 ${p?`<a class="prevl" href="#/l/${p.id}">← ${p.t}</a>`:''}</article></div>`;
}
function go(id,h){DONE[id]=true;store.set('sfx_done3',DONE);if(location.hash==h)render();else location.hash=h}

/* ----- Quiz, examen, certificat ----- */
let QZ=null;
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function quizView(qs,title,sub,key){
 QZ={qs,ans:{},key};
 return `<div class="wrap"><article class="lesson quiz" style="margin:26px auto 60px"><div class="crumb"><a href="#/">Formation</a> › ${title}</div><h1>${title}</h1><p class="lead">${sub}</p>
 ${qs.map((q,k)=>`<div class="q" id="q${k}"><b>${k+1}. ${q[0]}</b>${q[1].map((o,j)=>`<button class="opt" onclick="pick(${k},${j})">${o}</button>`).join('')}<div class="exp"></div></div>`).join('')}
 <div id="qres"></div></article></div>`;
}
function pick(k,j){if(!QZ||QZ.ans[k]!=null)return;QZ.ans[k]=j;const q=QZ.qs[k],el=document.getElementById('q'+k),bs=el.querySelectorAll('.opt');
 bs[q[2]].classList.add('ok');if(j!=q[2])bs[j].classList.add('ko');el.querySelector('.exp').textContent=(j==q[2]?'✅ ':'❌ ')+q[3];
 if(Object.keys(QZ.ans).length<QZ.qs.length)return;
 const good=QZ.qs.filter((q,i)=>QZ.ans[i]==q[2]).length,sc=Math.round(100*good/QZ.qs.length),r=document.getElementById('qres');
 if(QZ.key=='exam'){r.innerHTML=`<div class="cta"><h3>Résultat</h3><div class="score">${sc} %</div><p>${sc>=70?'Bravo, tu as réussi l\'examen ! Entre ton nom pour générer ton certificat.':'Il faut 70 % pour réussir. Relis les modules concernés et réessaie.'}</p>${sc>=70?`<input class="search" id="cname" placeholder="Ton nom complet" maxlength="40"><button class="btn" onclick="makeCert(${sc})">Générer mon certificat</button><div id="certbox"></div>`:`<a class="btn" href="javascript:render()">Réessayer</a>`}</div>`}
 else{BEST[QZ.key]=Math.max(BEST[QZ.key]||0,sc);store.set('sfx_best3',BEST);const nm=MODS[+QZ.key];
  r.innerHTML=`<div class="cta"><h3>Résultat</h3><div class="score">${sc} %</div><div class="row"><a class="btn ghost" href="javascript:render()">Refaire le quiz</a>${nm?`<a class="btn" href="#/l/${firstTodo(nm)}">Module ${nm.n} : ${nm.t} →</a>`:`<a class="btn" href="#/examen">🎓 Examen final</a>`}</div></div>`}
 r.scrollIntoView({behavior:'smooth'})}
function quizPage(n){const m=MODS[n-1];if(!m)return home();return quizView(shuffle(QUIZ[n]),`Quiz · Module ${n}`,`${m.t} : vérifie que tu as bien compris.`,String(n))}
function examPage(){return quizView(shuffle(Object.values(QUIZ).flat()).slice(0,20),'🎓 Examen final','20 questions tirées de toute la formation. Il faut 70 % pour obtenir ton certificat.','exam')}
function makeCert(sc){const nm=(document.getElementById('cname').value||'').trim()||'—';const cv=document.createElement('canvas');cv.width=1600;cv.height=1130;cv.className='cert';const g=cv.getContext('2d');
 const bg=g.createLinearGradient(0,0,1600,1130);bg.addColorStop(0,'#1b1206');bg.addColorStop(1,'#050300');g.fillStyle=bg;g.fillRect(0,0,1600,1130);
 g.strokeStyle='#f5b301';g.lineWidth=10;g.strokeRect(40,40,1520,1050);g.lineWidth=2;g.strokeRect(62,62,1476,1006);
 g.textAlign='center';g.fillStyle='#f5b301';g.beginPath();g.arc(800,185,62,0,7);g.fill();g.fillStyle='#2a1a00';g.font='900 70px Arial';g.fillText('S',800,210);
 g.fillStyle='#fff';g.font='900 54px Arial';g.fillText('SERGIO FX ACADÉMIE',800,320);
 g.fillStyle='#ffd84d';g.font='700 34px Arial';g.fillText('CERTIFICAT DE RÉUSSITE',800,385);
 g.fillStyle='#c9b88f';g.font='28px Arial';g.fillText('Ce certificat est décerné à',800,480);
 g.fillStyle='#fff';g.font='italic 800 78px Georgia';g.fillText(nm,800,580);g.fillStyle='#f5b301';g.fillRect(450,610,700,3);
 g.fillStyle='#e9dfc6';g.font='28px Arial';g.fillText('pour avoir terminé la formation d\'initiation au trading Forex & Or',800,680);
 g.fillText('Score à l\'examen final : '+sc+' %',800,730);
 g.fillStyle='#c9b88f';g.font='24px Arial';g.fillText(new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}),800,850);
 g.font='20px Arial';g.fillText('Contenu éducatif – le trading comporte des risques de perte en capital.',800,1010);
 const box=document.getElementById('certbox');box.innerHTML='';box.appendChild(cv);const a=document.createElement('a');a.className='btn';a.textContent='Télécharger le certificat';a.download='certificat-sergio-fx.png';a.href=cv.toDataURL('image/png');box.appendChild(a)}

/* ----- Glossaire ----- */
function glossPage(){return `<div class="wrap"><article class="lesson" style="margin:26px auto 60px"><div class="crumb"><a href="#/">Formation</a> › Glossaire</div><h1>📖 Glossaire</h1><p class="lead">Tous les mots du trading utilisés dans la formation.</p>
 <input class="search" placeholder="Rechercher un mot…" oninput="filterGloss(this.value)"><div class="gl" id="gl">${GLOSS.map(g=>`<div data-s="${(g[0]+' '+g[1]).toLowerCase().replace(/"/g,'')}"><b>${g[0]}</b> — ${g[1]}</div>`).join('')}</div></article></div>`}
function filterGloss(v){v=v.toLowerCase();document.querySelectorAll('#gl>div').forEach(d=>d.style.display=d.dataset.s.includes(v)?'':'none')}

/* ----- Cases à cocher ----- */
function wireChecks(){document.querySelectorAll('.check').forEach(box=>{const k='chk_'+box.dataset.k,st=store.get(k,[]),ins=[...box.querySelectorAll('input')],res=box.nextElementSibling;
 const upd=()=>{if(res&&res.classList.contains('checkres'))res.textContent=`${ins.filter(i=>i.checked).length} / ${ins.length} cochés`};
 ins.forEach((inp,i)=>{inp.checked=!!st[i];inp.onchange=()=>{store.set(k,ins.map(x=>x.checked));upd()}});upd()})}

function render(){
 const [,a,b]=(location.hash.replace('#','')||'/').split('/');
 document.getElementById('app').innerHTML=a=='l'?lesson(b):a=='quiz'?quizPage(+b):a=='examen'?examPage():a=='glossaire'?glossPage():home();
 const t=a=='l'&&ALL.find(x=>x.id==b);document.title=(t?t.t+' – ':'')+'SERGIO FX ACADÉMIE';
 wireChecks();const on=document.querySelector('.side[open] a.on');if(on){const s=on.closest('.side');s.scrollTop=on.offsetTop-s.clientHeight/2}
}
window.addEventListener('hashchange',()=>{render();scrollTo(0,0)});
const thB=document.getElementById('theme');const setTh=()=>{thB.textContent=document.documentElement.dataset.theme=='light'?'🌙':'☀️'};setTh();
thB.onclick=()=>{const d=document.documentElement;d.dataset.theme=d.dataset.theme=='light'?'dark':'light';try{localStorage.setItem('sfx_theme',d.dataset.theme)}catch(e){};setTh()};
document.getElementById('yr').textContent=new Date().getFullYear();
render();
