/* ================= DATAS-CHAVE ================= */
const START="2026-12-07", END="2027-09-30"; let BAIXA="2027-02-28", CIVIL="2027-03-01";
/* férias de 03/12 a 03/01 e meio expediente (08h–12h) de 04/01 até a Quarta de Cinzas */
const FERIAS_END="2027-01-03", MEIO_END="2027-02-10";
const DEF_CFG={baixa:"2027-02-28",h1:"19:00",h2:"09:00",hw:"09:00",hf:"09:00",hm:"14:00",eng:true,sql:true,post:true,home:"hoje"};
const OFF=new Set(["2026-12-24","2026-12-25","2026-12-31","2027-01-01","2027-02-08","2027-02-09","2027-03-26","2027-04-21","2027-05-27","2027-09-07"]);
const KINDS={curso:"Curso",projeto:"Portfólio",marca:"Perfil profissional",ingles:"Inglês",pratica:"Prática",cand:"Candidaturas",rev:"Revisão",marco:"Marco"};

/* ================= CURSOS (fila principal, na ordem) ================= */

/* ================= PROJETOS ================= */

/* ================= PERFIL PROFISSIONAL (fila) ================= */



const CTAGS={ia:"IA",dados:"Dados",gd:"Governança",cert:"Certificação",gestao:"Gestão",gov:"Governo",pos:"Pós e MBA"};

/* ================= MOTOR DO CRONOGRAMA ================= */
const pad=n=>String(n).padStart(2,"0");
const iso=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const parse=s=>{const[a,b,c]=s.split("-").map(Number);return new Date(a,b-1,c);};
const addD=(s,n)=>{const d=parse(s);d.setDate(d.getDate()+n);return iso(d);};
const todayS=()=>iso(new Date());
const WD=["dom","seg","ter","qua","qui","sex","sáb"];
const MES=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const fmt=s=>{const d=parse(s);return WD[d.getDay()]+", "+d.getDate()+" "+MES[d.getMonth()];};
const fmtShort=s=>{const d=parse(s);return pad(d.getDate())+"/"+pad(d.getMonth()+1);};
const hrs=m=>String(Math.round(m/6)/10).replace(".",",");
const diff=(a,b)=>Math.round((parse(b)-parse(a))/864e5);

/* ================= v4: FLASHCARDS (revisão espaçada) ================= */
/* d = baralho; liberado quando começa o curso ligado a ele (DECKS[d].c) ou quando você libera todos */
CARDS.forEach((c,i)=>{c.id="k"+i;});

/* ================= v4: HABILIDADES DA PL-300 (guia oficial de 20/04/2026) ================= */
SKILLS.forEach(d=>d.g.forEach((g,gi)=>{g.items=g[1].map((t,i)=>({id:d.id+gi+"_"+i,t}));}));
const SK_ALL=SKILLS.flatMap(d=>d.g.flatMap(g=>g.items));
const SK_LV=["Não vi","Estudei","Domino"];

/* ================= v4: CANDIDATURAS ================= */
const ETAPAS=[["env","Enviada"],["tri","Triagem / RH"],["tec","Teste técnico"],["ent","Entrevista"],["fin","Entrevista final"],["prop","Proposta"],["nao","Não seguiu"],["sem","Sem retorno"]];
const ETAPA_N=Object.fromEntries(ETAPAS);
const FONTES=["LinkedIn","Gupy","Indicação","Site da empresa","Indeed","Vagas.com","InfoJobs","Emprega Brasil","Catho","Outra"];

const MAINQ=[];COURSES.forEach(c=>{c.s.forEach((t,i)=>MAINQ.push({id:"c:"+c.id+":"+i,k:"curso",t:c.n+" · "+t,m:75,c:c.id,d:c.src,u:c.u}));if(c.exam)MAINQ.push({id:"c:"+c.id+":exam",k:"marco",t:c.exam,m:150,c:c.id,d:"Agende com 2 semanas de antecedência, de preferência num horário em que você rende bem. Faça em casa (online) ou num centro de provas.",u:c.u});});
const PROJQ=[];PROJECTS.forEach((p,pn)=>p.s.forEach((t,i)=>PROJQ.push({id:"p:"+p.id+":"+i,k:"projeto",t:"Projeto "+(pn+1)+" ("+p.sn+") · "+t,m:90,p:p.id,ok:p.ok&&p.ok[i],d:(i===0?KB_TIP:"")+"Repositório: "+p.repo+". Fonte: "+p.src+".",u:p.u})));
/* preparação antes de 07/12 (fora do cronograma diário): contas e programas prontos para o primeiro dia */
const BRANDQ=BRAND.map(b=>({id:"b:"+b.id,k:"marca",t:b.t,m:30,d:b.d}));
function msBaixa(){const o={};
 o[addD(BAIXA,-2)]=["Pedir documentos de saída: certidão de tempo de serviço e alterações","Leve para casa cópias de certificados de cursos militares e da referência elogiosa."];
 o[BAIXA]=["Último dia de serviço previsto (confirme a data)","A partir de amanhã você pode trabalhar, estagiar e fazer freelas."];
 o[CIVIL]=["Primeiro dia civil: mudar o LinkedIn para disponibilidade imediata","Troque o início do título \"Cabo da FAB – Administração\" por \"Ex-militar da FAB (8 anos em Administração)\", ponha a data de fim no cargo da FAB, ligue o Open to Work e atualize a linha de topo do currículo. Confira também a Transpetro."];
 return o;}
const ENG_C="Inglês 30 min (nível básico a intermediário): uma lição (Duolingo, Cambly ou BBC Learning English) e 1 página da documentação do Power BI em inglês";
const EN_LV=[["A1","A1 · iniciante"],["A2","A2 · básico"],["B1","B1 · intermediário"],["B2","B2 · intermediário alto"],["C1","C1 · avançado"],["C2","C2 · proficiente"]];
function engText(o){ const lv=o&&o.enLv; return lv&&EN_PLAN[lv]?"Inglês 30 min (plano do nível "+lv+"): "+EN_PLAN[lv]:ENG_C+". Faça o teste EF SET (Hoje › Pendências do plano) para o plano seguir o seu nível"; }
const SQLP_C="Desafio SQL 20 min (sql-practice.com, HackerRank SQL ou LeetCode SQL 50)";

/* o.rp (Reorganizar): a partir dessa data, as filas de cursos, projetos e perfil recomeçam pelo
   que ainda não foi feito; o que estava atrasado sai dos dias passados e vem para a frente. */
const HARD_END="2027-12-31";
function build(o){
 const S={}, IDX={}, MB=msBaixa(), engT=engText(o); let mi=0,pi=0,bi=0,po=0,xm=0,sqlOn=false,pbiN=0;
 const rp=o.rp&&o.rp>START&&o.rp<=HARD_END?o.rp:null, D0=(typeof ST!=="undefined"&&ST.done)||{};
 const keep=id=>D0[id]&&D0[id]<rp;
 let mQ=MAINQ,pQ=PROJQ,bQ=BRANDQ;
 const push=(arr,t,s)=>{arr.push(t);IDX[t.id]=Object.assign({date:s},t);};
 PREP.forEach(t=>{IDX[t.id]=Object.assign({date:addD(START,-1)},t);});
 for(let s=START;s<=END||(rp&&s<=HARD_END&&(mi<mQ.length||pi<pQ.length||bi<bQ.length));s=addD(s,1)){
  if(rp&&s===rp){mQ=MAINQ.filter(q=>!keep(q.id));pQ=PROJQ.filter(q=>!keep(q.id));bQ=BRANDQ.filter(q=>!keep(q.id));mi=pi=bi=0;}
  const d=parse(s), wd=d.getDay(), civ=s>=CIVIL, f0=s<"2027-01-04", T=[];
  const main=()=>{ if(mi<mQ.length){const q=mQ[mi++]; if(q.c==="sql")sqlOn=true; if(q.c==="pbi")pbiN++; push(T,q,s);} else push(T,{id:"x:"+s+":m",k:"curso",t:EXTRA_MAIN[(xm++)%EXTRA_MAIN.length],m:75,d:"A fila de cursos do plano terminou. Use este horário para aprofundar ou fazer um curso da sua lista."},s); };
  /* projetos só depois do básico de Power BI (8 sessões, até DAX); antes disso o horário vira curso */
  const proj=()=>{ if(pi<pQ.length&&pbiN<8&&!(rp&&s>=rp&&pQ!==PROJQ&&pQ.length<PROJQ.length)){ main(); return; } if(pi<pQ.length) push(T,pQ[pi++],s); else push(T,{id:"x:"+s+":p",k:"projeto",t:"Melhorar um projeto publicado (visual, README ou nova análise)",m:90,d:"Projetos vivos mostram evolução. Faça um commit por melhoria."},s); };
  const brand=()=>{ if(bi<bQ.length) push(T,bQ[bi++],s); };
  const eng=()=>o.eng&&push(T,{id:"r:"+s+":en",k:"ingles",t:"Inglês 30 min"+(o.enLv&&EN_PLAN[o.enLv]?" (nível "+o.enLv+")":""),d:engT,m:30},s);
  const sqlp=()=>{ if(sqlOn&&o.sql) push(T,{id:"r:"+s+":sq",k:"pratica",t:"Desafio SQL 20 min",d:"Um exercício em sql-practice.com, HackerRank SQL ou LeetCode SQL 50.",m:20},s); };
  const rev=()=>push(T,{id:"r:"+s+":rv",k:"rev",t:"Revisão da semana e plano da próxima",m:20,d:"Veja o que ficou pendente na aba Agenda, anote 3 coisas que aprendeu e confira os horários da semana."},s);
  const post=()=>{if(!o.post)return;const p=POSTS[(po++)%POSTS.length];push(T,{id:"r:"+s+":po",k:"marca",t:"Post no LinkedIn: "+p,m:40,d:"Curto (até 1.300 caracteres), com um print ou gráfico seu e uma pergunta no fim. Responda os comentários no mesmo dia."},s);};
  const ivw=()=>push(T,{id:"r:"+s+":iv",k:"pratica",t:"Simulado de entrevista (20 min)",m:20,d:"3 perguntas dos seus projetos, 1 técnica e 1 história STAR. Responda em voz alta, com o cronômetro de 2 min por resposta. No app do Claude o tutor faz as perguntas e avalia; fora dele, use Carreira › Entrevista e as histórias STAR. Anote o que treinar na semana seguinte."},s);
  const nSat=Math.ceil(d.getDate()/7);
  const cand=n=>push(T,{id:"r:"+s+":ca",k:"cand",t:n+" candidaturas personalizadas e registro na planilha",m:n>=5?60:45,d:"Ajuste o resumo do currículo às palavras da vaga. Alterne vagas de BI/Dados Júnior e vagas híbridas (administrativo, planejamento, controladoria com Power BI). Filtro: Rio (presencial, híbrido ou home office), remoto de qualquer lugar e, fora do Rio, SP."},s);
  if(MS[s]) push(T,{id:"m:"+s,k:"marco",t:MS[s][0],m:MS[s][2]||15,d:MS[s][1]},s);
  if(MB[s]) push(T,{id:"m:b"+(s===BAIXA?"0":s<BAIXA?"1":"2"),k:"marco",t:MB[s][0],m:15,d:MB[s][1]},s);
  if(d.getDate()===1&&s>START) push(T,{id:"r:"+s+":mo",k:"rev",t:"Revisão do mês: currículo, LinkedIn e reserva da transição",m:30,d:"Acrescente cursos, projetos e números novos ao currículo e ao LinkedIn. Veja em Progresso (ícone de gráfico do topo) se o ritmo está em dia. Em Carreira › Transição, confira se a reserva ainda cobre os meses até o primeiro salário."},s);
  if(OFF.has(s)){ if(!T.length) T.push({id:"o:"+s,k:"folga",t:"Folga",m:0}); S[s]=T; continue; }
  const fer=s<=FERIAS_END, meio=!fer&&s<=MEIO_END;
  if(!civ&&fer){
   if(wd>=1&&wd<=5){ main(); main(); proj(); if(wd===2||wd===4) eng(); if(wd===1||wd===3) sqlp(); if(wd===5) brand(); }
   else if(wd===6){ main(); proj(); eng(); }
   else { rev(); brand(); }
  } else if(!civ&&meio){
   if(wd>=1&&wd<=5){ main(); proj(); if(wd===2||wd===4) eng(); if(wd===1||wd===3) sqlp(); if(wd===5) brand(); }
   else if(wd===6){ main(); proj(); eng(); }
   else { rev(); brand(); if(s>="2027-01-10") post(); }
   if(s>="2027-02-15"&&(wd===1||wd===4)) cand(5);
  } else if(!civ){
   const cd=s>="2027-02-15"&&(wd===1||wd===4);
   if(wd>=1&&wd<=4){ if(cd) cand(5); else main(); if(wd===2||wd===4) eng(); if(wd===1||wd===3) sqlp(); }
   else if(wd===5){ if(!f0) eng(); brand(); if(s>="2027-02-15") ivw(); }
   else if(wd===6){ main(); proj(); if(!f0) eng(); }
   else { rev(); brand(); if(s>="2027-01-10") post(); }
  } else {
   if(wd>=1&&wd<=5){ main(); if(wd%2===1) proj(); eng(); cand(3); if(wd===2||wd===4) sqlp(); if(wd===2) post(); if(wd===2) brand(); if(wd===5&&s>="2027-06-01") push(T,{id:"r:"+s+":nw",k:"cand",t:"Networking: uma conversa de 15 min com alguém da área",m:30,d:"Peça para entender a rotina, não emprego. Agradeça e mantenha contato."},s); if(wd===4) ivw(); }
   else if(wd===6){ const ap=s>="2027-04-01";
    if(ap&&nSat===1&&pi>=pQ.length) push(T,{id:"r:"+s+":dz",k:"projeto",t:"Desafio de Power BI do mês (Maven Analytics ou Workout Wednesday)",m:90,d:"Pegue o desafio do mês, faça em até 90 min e publique o print no LinkedIn com o que aprendeu. Mantém o portfólio vivo e mostra ritmo de estudo.",u:"https://mavenanalytics.io/challenges"},s); else proj();
    if(ap&&nSat===2) push(T,{id:"r:"+s+":mt",k:"marca",t:"Conversa mensal com o seu mentor de carreira (30 min)",m:30,d:"Leve 1 dúvida, 1 avanço do mês e 1 pedido de feedback (currículo, painel ou entrevista). Registre o contato em Carreira › Contatos."},s);
    if(ap&&nSat===3) push(T,{id:"r:"+s+":dm",k:"curso",t:"Leitura de governança: um capítulo do DAMA-DMBOK (30 min)",m:30,d:"Um capítulo por mês, com 3 anotações: o conceito, um exemplo do seu trabalho e uma pergunta. É a base da certificação CDMP.",u:"https://www.dama.org/cpages/body-of-knowledge"},s); }
   else rev();
  }
  if(!T.length) T.push({id:"o:"+s,k:"folga",t:"Folga",m:0});
  S[s]=T;
 }
 if(rp){
  for(const s in S){ if(s>=rp) continue; const T=S[s].filter(t=>t.k==="folga"||!IDX[t.id]||IDX[t.id].date===s); S[s]=T.length?T:[{id:"o:"+s,k:"folga",t:"Folga",m:0}]; }
  /* feito antes da reorganização mas planejado para depois: fica no dia em que foi feito */
  MAINQ.concat(PROJQ,BRANDQ).forEach(q=>{ if(!IDX[q.id]&&D0[q.id]&&S[D0[q.id]]){ const T=S[D0[q.id]].filter(t=>t.k!=="folga"); T.push(q); IDX[q.id]=Object.assign({date:D0[q.id]},q); S[D0[q.id]]=T; } });
 }
 return {S,IDX};
}
let SCHED={},IDX={},TOTAL_TASKS=0,TCACHE={};
function cfg(){return Object.assign({},DEF_CFG,(typeof ST!=="undefined"&&ST.cfg)||{});}
function rebuild(){const c=cfg(); BAIXA=c.baixa; CIVIL=addD(BAIXA,1); PHASES[1].b=BAIXA; PHASES[2].a=CIVIL; const r=build(c); SCHED=r.S; IDX=r.IDX; TOTAL_TASKS=Object.keys(IDX).length; TCACHE={};}

/* ================= ESTADO ================= */
const KEY="carreira27";
let ST={done:{},custom:[],upd:0};
try{const r=localStorage.getItem(KEY);if(r)ST=Object.assign(ST,JSON.parse(r));}catch(e){}
rebuild();
function saveLocal(){try{localStorage.setItem(KEY,JSON.stringify(ST));}catch(e){}}
const SYNC={db:null,uid:null,st:"",at:null,t:null};
function changed(){ST.upd=Date.now();saveLocal();clearTimeout(SYNC.t);SYNC.t=setTimeout(syncPush,600);if(typeof clKick==='function')clKick();try{pushKick();}catch(e){}}
/* cópia na conta do claude.ai (db): só grava depois de ler a conta uma vez; se os dois lados mudaram, junta */
async function syncPush(){ if(!SYNC.db||!SYNC.uid||!SYNC.ready) return; const body=JSON.parse(JSON.stringify(ST)); try{await SYNC.db.doc("data/users/"+SYNC.uid+"/carreira").set(body);SYNC.base=body;SYNC.st="ok";SYNC.at=new Date();}catch(e){SYNC.st="err";} syncLbl(); }
setTimeout(async()=>{
 try{
  if(!window.claude||!window.claude.use){syncLbl();return;}
  const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
  if(!db||!user){syncLbl();return;}
  const uid=await user.id(); if(!uid){syncLbl();return;}
  SYNC.db=db;SYNC.uid=uid; let first=true;
  db.doc("data/users/"+uid+"/carreira").onSnapshot(snap=>{
   if(snap.metadata&&snap.metadata.hasPendingWrites) return;
   const d=snap.exists?JSON.parse(JSON.stringify(snap.data()||{})):null, lu=ST.upd||0;
   SYNC.ready=true;
   if(d&&(d.upd||0)!==lu){
    if((d.upd||0)>lu){
     const localNew=first?(hasProgress(ST)&&hasProgress(d)):(SYNC.base&&lu>(SYNC.base.upd||0));
     if(localNew){ ST=Object.assign({done:{},custom:[],upd:0},mergeST(ST,d,first?null:SYNC.base)); ST.upd=Math.max(Date.now(),(d.upd||0)+1); saveLocal(); rebuild(); rerenderKeep(); syncPush(); clKick(); }
     else { ST=Object.assign({done:{},custom:[],upd:0},d); SYNC.base=d; saveLocal(); rebuild(); rerenderKeep(); clKick(); }
    } else { if(first&&hasProgress(d)&&hasProgress(ST)){ ST=Object.assign({done:{},custom:[],upd:0},mergeST(ST,d,null)); ST.upd=Date.now(); saveLocal(); rebuild(); rerenderKeep(); } else SYNC.base=d; syncPush(); }
   } else if(d) SYNC.base=d;
   else if(lu) syncPush();
   SYNC.st="ok"; SYNC.at=new Date(); first=false; syncLbl();
  },()=>{SYNC.st="err";syncLbl();});
 }catch(e){SYNC.st="err";syncLbl();}
},0);

/* ================= UTIL ================= */
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let toastT;function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),m.length>80?7000:2600);}
async function copyText(txt,btn){try{await navigator.clipboard.writeText(txt);toast("Texto copiado.");}catch(e){const pre=btn&&btn.closest(".stack")&&btn.closest(".stack").querySelector(".copybox");if(pre){const r=document.createRange();r.selectNodeContents(pre);const sel=getSelection();sel.removeAllRanges();sel.addRange(r);}toast("Selecione e copie o texto.");}}
/* ================= SINCRONIZAÇÃO POR CÓDIGO (igual ao app da Transpetro) ================= */
/* O progresso fica na mesma nuvem do Supabase do app da Transpetro (funções tp_get / tp_save / tp_ver),
   com um código próprio "cd-…". tp_save só grava se a nuvem ainda estiver na versão que este aparelho
   conhecia (p_base); senão o app baixa, junta e envia de novo. No GitHub a chamada é direta; no claude.ai,
   se a página não puder acessar a internet, usa o conector Supabase da conta do Claude. */
const SB_URL="https://xpfcmehgdfruhnveslmj.supabase.co", SB_KEY="sb_publishable_Bgf_LtyuT9ABzExDTuAyQg_krQ9yy9R", SB_REF="xpfcmehgdfruhnveslmj";
const GH_URL="https://pedro1105.github.io/carreira-dados/";
const CK=KEY+"-cloud", CSNAP=KEY+"-cloudsnap";
const IN_CLAUDE=!!(window.claude&&window.claude.use);
const IS_PWA=location.protocol==="https:"&&/(github\.io|netlify\.app)$/.test(location.hostname);
const CL={code:null,base:0,st:"off",at:null,t:null,busy:false,via:"fetch",mcp:null,err:"",perm:null};
try{const o=JSON.parse(localStorage.getItem(CK)||"{}");CL.code=o.code||null;CL.base=o.base||0;}catch(e){}
if(!CL.code&&ST.cloud) CL.code=ST.cloud;
function clStore(){try{localStorage.setItem(CK,JSON.stringify({code:CL.code,base:CL.base}));}catch(e){}}
function clSnap(st){try{if(st)localStorage.setItem(CSNAP,JSON.stringify(st));else localStorage.removeItem(CSNAP);}catch(e){}}
function clGetSnap(){try{return JSON.parse(localStorage.getItem(CSNAP)||"null");}catch(e){return null;}}
function newCode(){const a="abcdefghjkmnpqrstuvwxyz23456789",r=crypto.getRandomValues(new Uint8Array(24));let s="";r.forEach((x,i)=>{if(i&&i%4===0)s+="-";s+=a[x%a.length];});return "cd-"+s;}
const codeOk=c=>/^cd-[a-z0-9]{4}(-[a-z0-9]{4}){5}$/.test(c||"");
const clErr=e=>e.message==="needmcp"?"needmcp":(e.message==="server_not_connected"||e.message==="needs_reauth")?"noconn":"err";

async function mcpReady(ask){
 if(!IN_CLAUDE) return false;
 if(CL.mcp) return true;
 try{
  const perm=await window.claude.use("permissions"), K="mcp:Supabase";
  let st=perm?await perm.state(K).catch(()=>"unavailable"):"prompt";
  if(st==="prompt"&&ask){const r=await perm.request([K]).catch(()=>null);if(r&&r[K])st=r[K];}
  CL.perm=st;
  if(st==="denied"||st==="unavailable") return false;
  CL.mcp=await window.claude.use("mcp"); return !!CL.mcp;
 }catch(e){return false;}
}
async function rpcMcp(fn,args){
 const tag="$cd"+Math.random().toString(36).slice(2,8)+"$";
 const lit=v=>typeof v==="number"?String(Math.round(v)):tag+String(v).split(tag).join("")+tag;
 const params=fn!=="tp_save"?[lit(args.p_code)]:[lit(args.p_code),lit(args.p_s),lit(args.p_upd),lit(args.p_base)];
 let res;
 try{res=await CL.mcp.callTool("Supabase","execute_sql",{project_id:SB_REF,query:"select public."+fn+"("+params.join(",")+")::text as r"},{cache:false});}
 catch(e){const c=e&&e.code||"";if(["consent_required","denied","not_granted"].includes(c)){CL.perm="denied";throw new Error("needmcp");}
  if(c==="server_not_connected"||c==="needs_reauth") throw new Error(c); throw new Error(c||String(e&&e.message||e));}
 let p=res&&res.payload; if(p&&typeof p==="object"&&p.result) p=p.result; if(typeof p!=="string") p=JSON.stringify(p);
 const m=/<untrusted-data[^>]*>\s*([\s\S]*?)\s*<\/untrusted-data/.exec(p); const arr=JSON.parse(m?m[1]:p);
 const r=Array.isArray(arr)&&arr[0]?arr[0].r:null; return r?JSON.parse(r):null;
}
async function rpc(fn,args,ask){
 if(CL.via==="fetch"){
  try{
   const r=await fetch(SB_URL+"/rest/v1/rpc/"+fn,{method:"POST",headers:{apikey:SB_KEY,"Content-Type":"application/json"},body:JSON.stringify(args)});
   if(!r.ok) throw new Error("HTTP "+r.status);
   const t=await r.text(); return t&&t!=="null"?JSON.parse(t):null;
  }catch(e){ if(!IN_CLAUDE||!navigator.onLine) throw e; CL.via="mcp"; }
 }
 if(!(await mcpReady(ask))) throw new Error("needmcp");
 return rpcMcp(fn,args);
}

/* Junta dois progressos. base = última versão sincronizada: uma tarefa desmarcada de um lado só some
   se o outro lado não mexeu nela. Sem base, vale a união. Cursos cadastrados se juntam pelo nome e
   ficam com o maior número de aulas feitas; ajustes e o resto vêm do lado mais recente. */
/* Junta dois progressos. base = última versão sincronizada: algo apagado num lado (tarefa desmarcada,
   candidatura ou anotação excluída) só some se o outro lado não tinha mudado aquilo. Sem base, vale a união.
   Em conflito no mesmo item, fica o mais recente. */
function mmap(A,B,Z,pick){ A=A||{};B=B||{}; const o={}; new Set([...Object.keys(A),...Object.keys(B)]).forEach(k=>{ const x=A[k],y=B[k]; if(Z&&Z[k]!==undefined&&(x===undefined||y===undefined)){ const z=JSON.stringify(Z[k]), other=x===undefined?y:x; if(JSON.stringify(other)===z) return; o[k]=other; return; } o[k]=x===undefined?y:y===undefined?x:pick(x,y); }); return o; }
function mergeST(a,b,base){
 const newer=(a.upd||0)>=(b.upd||0)?a:b, older=newer===a?b:a, o=Object.assign({},newer), Z=base||{};
 o.done=mmap(a.done,b.done,base&&Z.done||null,(x,y)=>x<y?x:y);
 const nk=c=>String(c.n||"").trim().toLowerCase(), has=(l,k)=>(l||[]).some(c=>nk(c)===k), zc=base&&base.custom, cm={};
 [...(older.custom||[]),...(newer.custom||[])].forEach(c=>{const k=nk(c);if(zc&&has(zc,k)&&(!has(a.custom,k)||!has(b.custom,k)))return;const p=cm[k];cm[k]=p?Object.assign({},c,{done:Math.max(p.done||0,c.done||0)}):c;});
 o.custom=Object.values(cm);
 o.cfg=Object.assign({},older.cfg||{},newer.cfg||{});
 o.log=mmap(a.log,b.log,null,(x,y)=>Math.max(x,y));
 o.rv=mmap(a.rv,b.rv,null,(x,y)=>Math.max(x,y));
 o.srs=mmap(a.srs,b.srs,null,(x,y)=>(x.l||"")>(y.l||"")?x:(y.l||"")>(x.l||"")?y:(newer===a?x:y));
 o.sk=mmap(a.sk,b.sk,null,(x,y)=>(x.t||0)>=(y.t||0)?x:y);
 o.apps=mmap(a.apps,b.apps,base&&Z.apps||null,(x,y)=>(x.u||0)>=(y.u||0)?x:y);
 o.diary=mmap(a.diary,b.diary,base&&Z.diary||null,(x,y)=>(x.u||0)>=(y.u||0)?x:y);
 o.devs=mmap(a.devs,b.devs,null,(x,y)=>(x.at||0)>=(y.at||0)?x:y);
 o.certs=mmap(a.certs,b.certs,base&&Z.certs||null,(x,y)=>(x.u||0)>=(y.u||0)?x:y);
 o.net=mmap(a.net,b.net,base&&Z.net||null,(x,y)=>(x.u||0)>=(y.u||0)?x:y);
 o.iv=mmap(a.iv,b.iv,null,(x,y)=>Math.max(x,y));
 o.sqlc=mmap(a.sqlc,b.sqlc,null,(x,y)=>x<y?x:y);
 o.pend=mmap(a.pend,b.pend,null,(x,y)=>(x||"")>=(y||"")?x:y);
 o.qr=mmap(a.qr,b.qr,null,(x,y)=>(x.u||0)>=(y.u||0)?x:y);
 o.fit=mmap(a.fit,b.fit,null,(x,y)=>(newer===a?x:y));
 return o;
}
const hasProgress=st=>!!st&&["done","srs","apps","diary","sk","log","certs","net","iv","sqlc","qr"].some(k=>Object.keys(st[k]||{}).length>0)||!!st&&(st.custom||[]).length>0;
function clAdopt(st,upd){
 ST=Object.assign({done:{},custom:[],upd:0},st); ST.upd=upd; ST.cloud=CL.code;
 saveLocal(); rebuild(); syncPush(); rerenderKeep(); setTimeout(devMark,0);
}
async function clPush(){
 if(!CL.code||CL.busy) return;
 CL.busy=true;
 try{
  ST.cloud=CL.code; const upd=ST.upd||Date.now(), body=JSON.stringify(ST);
  const r=await rpc("tp_save",{p_code:CL.code,p_s:body,p_upd:upd,p_base:CL.base||0});
  if(r&&r.ok===false){CL.busy=false;return clPull();}
  CL.base=upd; clStore(); clSnap(JSON.parse(body)); CL.st="ok"; CL.at=new Date(); CL.err="";
 }catch(e){CL.st=clErr(e);CL.err=String(e.message||e);}
 CL.busy=false; syncLbl();
}
async function clPull(){
 if(!CL.code&&ST.cloud) CL.code=ST.cloud;
 if(!CL.code||CL.busy) return;
 CL.busy=true; let then=null;
 try{
  const r=await rpc("tp_get",{p_code:CL.code});
  const lu=ST.upd||0;
  if(!r){then="push";}
  else if(!CL.base){
   const remote=JSON.parse(r.s);
   if(hasProgress(ST)&&hasProgress(remote)&&lu!==r.upd){clAdopt(mergeST(ST,remote,null),Math.max(Date.now(),r.upd+1));CL.base=r.upd;then="push";}
   else if(lu>r.upd&&hasProgress(ST)){CL.base=r.upd;then="push";}
   else{clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
  }
  else if(r.upd===CL.base){if(lu>CL.base) then="push";}
  else if(r.upd>CL.base){
   const remote=JSON.parse(r.s);
   if(lu>CL.base){clAdopt(mergeST(ST,remote,clGetSnap()),Math.max(Date.now(),r.upd+1));CL.base=r.upd;then="push";}
   else{clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
  }else then="push";
  CL.st="ok"; CL.at=new Date(); CL.err="";
 }catch(e){CL.st=clErr(e);CL.err=String(e.message||e);}
 CL.busy=false; syncLbl();
 if(then==="push") clPush();
}
function clKick(){if(!CL.code&&ST.cloud){CL.code=ST.cloud;clStore();}if(!CL.code) return;clearTimeout(CL.t);CL.t=setTimeout(CL.base?clPush:clPull,1500);}
/* quase ao vivo: a cada 15 s (60 s pelo conector do Claude) pergunta só a versão da nuvem */
async function clCheck(){
 if(!CL.code&&ST.cloud){CL.code=ST.cloud;clStore();}
 if(!CL.code||CL.busy||document.visibilityState!=="visible") return;
 if(CL.via==="mcp"&&Date.now()-(CL.lastMcp||0)<55000) return;
 if(CL.via==="mcp") CL.lastMcp=Date.now();
 try{const v=await rpc("tp_ver",{p_code:CL.code});if(v!==CL.base||(ST.upd||0)>CL.base) clPull();else if(CL.st!=="ok"){CL.st="ok";CL.at=new Date();syncLbl();}}
 catch(e){CL.st=clErr(e);CL.err=String(e.message||e);syncLbl();}
}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible") clPull();else if(CL.code&&CL.base&&(ST.upd||0)>CL.base){clearTimeout(CL.t);clPush();}});
window.addEventListener("online",()=>clPull());
setInterval(clCheck,15000);
async function clLink(code,ask){
 code=String(code||"").trim().toLowerCase();
 if(!codeOk(code)){toast("Código inválido. Copie inteiro, no formato cd-xxxx-xxxx-…");return;}
 CL.code=code; CL.base=0; clStore(); syncLbl();
 let r=null;
 try{r=await rpc("tp_get",{p_code:code},ask);}catch(e){CL.st=clErr(e);syncLbl();toast("Sem conexão agora. O código ficou guardado e a sincronização tenta de novo sozinha.");return;}
 if(!r){ST.cloud=code;changed();toast("Sincronização ativada.");return;}
 const remote=JSON.parse(r.s);
 if(!hasProgress(ST)){clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
 else{clAdopt(mergeST(ST,remote,null),Math.max(Date.now(),r.upd+1));CL.base=r.upd;clStore();await clPush();}
 CL.st="ok";CL.at=new Date();syncLbl();
 toast("Aparelho conectado. O progresso agora é o mesmo nos aparelhos conectados.");
}
async function clAllow(){CL.via="mcp";if(CL.perm==="denied"){try{const perm=await window.claude.use("permissions");await perm.manage();}catch(e){toast("Abra o menu Permissões desta página e ligue o conector Supabase.");}CL.perm=null;}
 if(await mcpReady(true)){CL.st="";syncLbl();await clPull();}else toast("Sem permissão: a sincronização com o celular fica parada até você permitir o conector Supabase.");if(current==="config")rerenderKeep();}
async function clNew(){CL.code=newCode();CL.base=0;ST.cloud=CL.code;clStore();changed();await clPull();rerenderKeep();}
function clOff(btn){if(!btn.dataset.arm){btn.dataset.arm="1";btn.textContent="Toque de novo para desconectar";setTimeout(()=>{if(btn.isConnected){delete btn.dataset.arm;btn.textContent="Desconectar este aparelho";}},4000);return;}
 CL.code=null;CL.base=0;CL.st="off";clStore();clSnap(null);delete ST.cloud;saveLocal();rerenderKeep();toast("Este aparelho parou de sincronizar.");}
/* cada aparelho grava no progresso a versão do app, onde abriu e quando (lista em Configurações) */
const APP_V=32;
/* o que mudou em cada versão (aparece uma vez depois que o app atualiza e fica em Configurações) */
const SEENK=KEY+"-seenV";
/* versão nova baixada pelo service worker (app instalado): avisa e atualiza com um toque, como no app da Transpetro */
function swUpdated(){
 if(swUpdated.on) return; swUpdated.on=1;
 const t=$("#toast"); clearTimeout(toastT);
 t.innerHTML='<span><strong>Versão nova do app pronta.</strong> Seu progresso fica salvo.</span> <button type="button" class="btn sm" id="swGo">Atualizar</button>';
 t.classList.add("on"); $("#swGo").onclick=()=>{saveLocal();location.reload();};
}
setTimeout(()=>{ let seen=0; try{seen=+localStorage.getItem(SEENK)||0;localStorage.setItem(SEENK,APP_V);}catch(e){return;}
 if(seen&&seen<APP_V&&!swUpdated.on) toast("App atualizado para a versão "+APP_V+". "+(NEWS[APP_V]||"")); },1800);
function devMark(){
 let id="x"; try{id=localStorage.getItem(KEY+"-dev"); if(!id){id=Math.random().toString(36).slice(2,8); localStorage.setItem(KEY+"-dev",id);}}catch(e){}
 const ua=navigator.userAgent, m=((/Android [\d.]+/.exec(ua)||[])[0]||["Android","iPhone","iPad","Windows","CrOS","Mac OS X","Linux"].find(k=>ua.includes(k))||"?").replace("Mac OS X","Mac");
 const w=IN_CLAUDE?"claude.ai":IS_PWA?((matchMedia("(display-mode: standalone)").matches||navigator.standalone)?"app instalado":"navegador"):"outro";
 ST.devs=ST.devs||{}; const p=ST.devs[id];
 if(!p||p.v!==APP_V||p.w!==w||Date.now()-(p.at||0)>3*3600e3){ST.devs[id]={v:APP_V,w,m,at:Date.now()};changed();}
}
setTimeout(function devWait(n){ const ready=IN_CLAUDE?(SYNC.ready||SYNC.st==="err"||n>20):(!CL.code||CL.st==="ok"||n>20); if(ready&&(!CL.code||CL.base||!IN_CLAUDE||n>20)) devMark(); else setTimeout(()=>devWait(n+1),3000); },2500,0);
/* a cópia antiga no GitHub Pages leva para o endereço do Netlify, já com o código deste aparelho, para os dois não ficarem com progressos separados */
/* desde 11/11/2026 o GitHub Pages serve o app direto (o Netlify ficou sem créditos de deploy) */
/* link #sync=código abre o app já conectado */
(function(){const m=/[#&]sync=(cd-[a-z0-9-]+)/.exec(location.hash||"");if(!m) return;try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}if(m[1]!==CL.code) setTimeout(()=>clLink(m[1],true),400);})();
setTimeout(clPull,1200);
/* no claude.ai a sincronização liga sozinha: sem código depois de carregar a conta, cria um; ele vai junto
   no progresso da conta e chega aos outros aparelhos com o mesmo login */
if(IN_CLAUDE) setTimeout(()=>{if(SYNC.st==="ok"&&!CL.code&&!ST.cloud){CL.code=newCode();CL.base=0;ST.cloud=CL.code;clStore();changed();}},8000);

function syncText(){
 if(!CL.code) return IN_CLAUDE?(SYNC.st==="ok"?"Preparando a sincronização…":"Conectando à sua conta…"):"Este aparelho ainda não está conectado. Abra o link de conexão (fica aqui nas Configurações do app no claude.ai ou no PC) ou cole o código abaixo.";
 if(CL.st==="ok") return "Ligada e em dia"+(CL.at?" (conferido às "+CL.at.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})+")":"")+". O que você marca aqui aparece nos outros aparelhos em poucos segundos.";
 if(CL.st==="needmcp") return CL.perm==="denied"?"O conector Supabase foi bloqueado para esta página. Toque em Permitir e ligue o Supabase no painel de permissões.":"Falta uma permissão: toque em Permitir para esta página usar o conector Supabase.";
 if(CL.st==="noconn") return "O conector Supabase não está conectado (ou a conexão expirou) na sua conta do claude.ai. Reconecte em Configurações → Conectores do claude.ai e volte aqui.";
 if(CL.st==="err") return navigator.onLine?"Não deu para falar com a nuvem agora; o app tenta de novo sozinho. Nada se perde.":"Sem internet. O progresso fica salvo aqui e sobe quando a conexão voltar.";
 return "Conectando…";
}
var lastBn=null;
function syncLbl(){
 const bn=CL.st==="needmcp"?"m":(!CL.code&&!IN_CLAUDE)?"c":""; if(lastBn!==null&&bn!==lastBn&&current==="hoje"&&typeof rerenderKeep==="function"){lastBn=bn;setTimeout(rerenderKeep,0);} lastBn=bn;
 document.querySelectorAll(".synclbl").forEach(e=>{e.textContent=syncText();e.style.color=CL.code&&CL.st==="ok"?"var(--ok)":["err","needmcp","noconn"].includes(CL.st)?"var(--bad)":"";});
 const b=$("#clMcp"); if(b) b.hidden=CL.st!=="needmcp";
 const c=$("#clChip"); if(c){const s=!CL.code?["","Não sincronizado"]:CL.st==="ok"?["ok","Sincronizado"]:CL.st==="needmcp"?["bad","Permitir sincronização"]:CL.st==="noconn"?["bad","Reconectar Supabase"]:CL.st==="err"?["bad",navigator.onLine?"Sincronização pendente":"Sem internet"]:["wait","Sincronizando…"]; c.className="clchip "+s[0]; c.querySelector("span").textContent=s[1]; c.title=s[1]+" · abrir Configurações"; c.setAttribute("aria-label",s[1]+". Abrir sincronização");}
}
function cfgSync(){
 const link=CL.code?GH_URL+"#sync="+CL.code:"";
 let h='<section class="panel stack" id="cfgSync"><h3>Sincronização entre aparelhos</h3><p class="synclbl small"></p><div class="row"><button class="btn sm" id="clMcp" type="button" '+(CL.st==="needmcp"?"":"hidden")+'>Permitir</button></div>';
 if(CL.code) h+='<div class="stack"><strong>Conectar outro aparelho (uma vez só)</strong><p class="muted small">Abra este link no celular (pelo Chrome) ou no tablet. Ele entra conectado e junta o que já tiver lá. Depois, no menu do navegador, toque em "Instalar app" ou "Adicionar à tela inicial".</p><pre class="copybox">'+esc(link)+'</pre><div class="row"><button class="btn sm" id="clCopy" type="button">Copiar link</button>'+(navigator.share?'<button class="btn ghost sm" id="clShare" type="button">Enviar para…</button>':'')+'<button class="btn ghost sm" id="clNow" type="button">Sincronizar agora</button></div></div>';
 else h+='<div class="row"><button class="btn sm" id="clNew" type="button">Este é o primeiro aparelho: criar a sincronização</button></div>';
 h+='<details class="acc"'+(CL.code?"":" open")+'><summary><span>'+(CL.code?"Usar outro código":"Já tenho um código (de outro aparelho)")+'</span><span class="chev">›</span></summary><div class="stack">'+(CL.code?'<span class="muted small">Código atual: <span class="num">'+esc(CL.code)+'</span></span>':'')+'<input id="clIn" type="text" placeholder="cd-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Código de sincronização"><div class="row"><button class="btn sm" id="clGo" type="button">Conectar este aparelho</button>'+(CL.code?'<button class="btn ghost sm" id="clOff" type="button">Desconectar este aparelho</button>':'')+'</div></div></details>';
 const dv=Object.entries(ST.devs||{}).sort((a,b)=>(b[1].at||0)-(a[1].at||0)).slice(0,6);
 if(CL.code&&dv.length) h+='<details class="acc"><summary><span>Aparelhos que usaram este progresso ('+dv.length+')</span><span class="chev">›</span></summary><ul class="plain">'+dv.map(([id,d])=>'<li class="small">'+esc(d.m||"?")+' · '+esc(d.w||"")+' · versão '+esc(d.v)+(d.v>=APP_V?' ✓ atualizado':' · desatualizado: abra o app nesse aparelho')+' · '+new Date(d.at).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})+(id===(()=>{try{return localStorage.getItem(KEY+"-dev");}catch(e){return "";}})()?" (este)":"")+'</li>').join("")+'</ul><p class="muted small">Se o celular não aparecer aqui ou estiver numa versão antiga, abra o app nele e feche e abra de novo.</p></details>';
 h+='<p class="small"><strong>Versão do app neste aparelho: '+APP_V+'.</strong> <span class="muted">'+esc(NEWS[APP_V]||"")+'</span></p>';
 h+='<p class="muted small">'+(IN_CLAUDE?'Aqui no claude.ai o progresso também acompanha a sua conta. ':'')+'App instalável (celular, tablet e PC): <a href="'+GH_URL+'" target="_blank" rel="noopener">'+GH_URL.replace("https://","")+'</a></p></section>';
 return h;
}
function wireSync(el){
 const on=(id,f)=>{const b=el.querySelector("#"+id); if(b) b.onclick=f;};
 on("clMcp",clAllow); on("clNew",clNew); on("clNow",()=>{clPull();toast("Sincronizando…");});
 on("clCopy",async()=>{try{await navigator.clipboard.writeText(GH_URL+"#sync="+CL.code);toast("Link copiado. Abra no outro aparelho.");}catch(e){toast("Selecione o link e copie.");}});
 on("clShare",()=>navigator.share({title:"Carreira em Dados 2027",url:GH_URL+"#sync="+CL.code}).catch(()=>{}));
 on("clGo",()=>clLink($("#clIn").value,true).then(()=>rerenderKeep()));
 on("clOff",e=>clOff(e.currentTarget));
}

const isDone=id=>!!ST.done[id];
function toggle(id){ if(ST.done[id]) delete ST.done[id]; else ST.done[id]=todayS(); changed(); }
function phaseOf(s){return PHASES.find(p=>s>=p.a&&s<=p.b)||null;}
function hm(m){return pad(Math.floor(m/60)%24)+":"+pad(m%60);}
function timeOf(id){const x=IDX[id]; if(!x) return ""; const s=x.date; if(!TCACHE[s]){const c=cfg(), wd=parse(s).getDay(); const st=(wd===0||wd===6)?c.hw:(s>=CIVIL?c.h2:s<=FERIAS_END?c.hf:s<=MEIO_END?c.hm:c.h1); const [H,M]=(st||"19:00").split(":").map(Number); let m=H*60+M; const o={}; (SCHED[s]||[]).forEach(t=>{if(t.k==="folga")return; o[t.id]=hm(m)+"–"+hm(m+t.m); m+=t.m+10;}); TCACHE[s]=o;} return TCACHE[s][id]||"";}
let NEXT_ID=null;
function nextTaskId(){ const t=todayS(); const T=SCHED[t]||[]; const x=T.find(x=>x.k!=="folga"&&!isDone(x.id)&&x.m>=20); return x?x.id:null; }
function taskHTML(t,showDate,short){
 if(t.k==="folga") return '<div class="task folga"><div class="tb"><span class="tt muted">Folga. Descanse: consistência também é saber parar.</span></div></div>';
 const dn=isDone(t.id);
 const extra=t.k==="projeto"&&t.p?'<details class="tdq"><summary>Anotar no diário do projeto</summary><textarea data-tdq="'+esc(t.p)+'" data-tid="'+esc(t.id)+'" aria-label="Anotação do projeto" placeholder="O que você fez nesta sessão?"></textarea><div class="row"><button type="button" class="btn ghost sm" data-tdqb="'+esc(t.id)+'">Salvar no diário</button></div></details>':t.k==="cand"?'<div class="row"><button type="button" class="linkbtn" data-goapp="1">Registrar no controle de candidaturas</button></div>':"";
 const mt=(t.k==="curso"||t.k==="projeto")?mentorHTML(t):"";
 const okl=t.ok?'<p class="okline small"><strong>Pronto quando:</strong> '+esc(t.ok)+'</p>':"";
 const ivb=/:iv$/.test(t.id)?'<div class="row"><button type="button" class="linkbtn" data-ivgo="1">Abrir o simulado</button></div>':"";
 const det=(t.d||t.u)?'<p class="tdet">'+esc(t.d||"")+(t.u?' <a href="'+esc(t.u)+'" target="_blank" rel="noopener">Abrir link</a>':"")+'</p>':"";
 const running=TM&&TM.id===t.id, canGo=!dn&&t.m>=20;
 const goBtn=canGo?'<button type="button" class="tmgo" data-tm="'+esc(t.id)+'" aria-label="Iniciar cronômetro: '+esc(t.t)+'">'+(running?"⏱ em andamento":"▶ Iniciar")+'</button>':'';
 const inlineGo=canGo&&(running||t.id===NEXT_ID);
 let title=t.t; if(short){ const i=title.indexOf(" · "); if(i>0) title=title.slice(i+3); }
 const time=!showDate&&timeOf(t.id)?'<span class="num tmh">'+timeOf(t.id)+'</span>':'';
 const meta='<span class="tm">'+time+'<span class="kchip" style="--kc:var(--k-'+t.k+')">'+KINDS[t.k]+'</span><span>'+t.m+' min</span>'+(showDate&&IDX[t.id]?'<span>· '+fmtShort(IDX[t.id].date)+'</span>':"")+'</span>';
 const body=okl+det+(canGo&&!inlineGo?'<div class="row">'+goBtn+'</div>':'')+mt+extra+ivb;
 const head=body?'<details class="tmore" data-k="t:'+esc(t.id)+'"><summary><span class="tt">'+esc(title)+'</span>'+meta+'</summary><div class="tpanel">'+body+'</div></details>':'<label class="tt" for="ck-'+esc(t.id)+'">'+esc(title)+'</label>'+meta;
 return '<div class="task'+(dn?" done":"")+(inlineGo?" now":"")+'"><input type="checkbox" data-id="'+esc(t.id)+'" id="ck-'+esc(t.id)+'"'+(dn?" checked":"")+' aria-label="Concluir: '+esc(t.t)+'"><div class="tb">'+head+(inlineGo?'<div class="tm">'+goBtn+'</div>':'')+'</div></div>';
}
function wireChecks(root){
 root.querySelectorAll("[data-tm]").forEach(b=>b.onclick=()=>{tmStart(b.dataset.tm);rerenderKeep();});
 root.querySelectorAll("[data-tdqb]").forEach(b=>b.onclick=()=>{const ta=root.querySelector('textarea[data-tid="'+b.dataset.tdqb+'"]'); if(diaryAdd(ta.dataset.tdq,ta.value,ta.dataset.tid)){ta.value="";toast("Anotado no diário do projeto.");} else toast("Escreva o que você fez.");});
 root.querySelectorAll("[data-mentor]").forEach(b=>b.onclick=()=>mentorGo(b.dataset.mentor,b));
 root.querySelectorAll("[data-ivgo]").forEach(b=>b.onclick=()=>ivGo(b));
 root.querySelectorAll("[data-goapp]").forEach(b=>b.onclick=()=>{pfSeg="vagas";apEdit="new";go("perfil");});
 root.querySelectorAll('input[type=checkbox][data-id]').forEach(c=>c.onchange=()=>{toggle(c.dataset.id); const row=c.closest(".task"); if(row) row.classList.toggle("done",c.checked); if(c.checked) toast("Feito. Bom trabalho!"); refreshHeader(); if(current==="hoje"||current==="prog"||current==="cursos") rerenderKeep();}); }

/* ================= ESTATÍSTICAS ================= */
function stats(){
 const t=todayS(); let planned=0,plannedDone=0,mins=0,doneN=0; const byK={};
 for(const id in IDX){const x=IDX[id]; if(x.k==="folga")continue; byK[x.k]=byK[x.k]||{n:0,d:0}; byK[x.k].n++; if(x.date<=t){planned++; if(isDone(id)) plannedDone++;} if(isDone(id)){doneN++;mins+=x.m;byK[x.k].d++;}}
 const days=new Set(Object.entries(ST.done).filter(([k])=>!k.startsWith("u:")&&!k.startsWith("x:")&&!k.startsWith("y:")).map(([,v])=>v)); let streak=0; let s=t; if(!days.has(s)) s=addD(s,-1); while(days.has(s)){streak++; s=addD(s,-1);}
 return {planned,plannedDone,mins,doneN,byK,streak,days};
}
function overdue(){ const t=todayS(), from=addD(t,-21), out=[]; for(let s=from;s<t;s=addD(s,1)){ (SCHED[s]||[]).forEach(x=>{ if(x.k!=="folga"&&!isDone(x.id)) out.push(x); }); } return out; }

/* ================= VIEWS ================= */
const TABS=[["hoje","Hoje"],["agenda","Agenda"],["cursos","Estudar"],["port","Portfólio"],["perfil","Carreira"]];
const TAB_OF={rev:"cursos"}; const VIEW_OK=["hoje","agenda","cursos","rev","port","perfil","prog","config"];
let estSeg="cursos";
let current=cfg().home==="agenda"?"agenda":"hoje"; if(cfg().home==="last"){try{const r=localStorage.getItem(KEY+"-tab"); if(r&&VIEW_OK.includes(r)) current=r;}catch(e){}}
try{const qv=new URLSearchParams(location.search).get("v"); if(qv&&VIEW_OK.includes(qv)) current=qv;}catch(e){}
$("#tabs").innerHTML=TABS.map(([v,n])=>'<button role="tab" type="button" data-v="'+v+'" aria-selected="'+(v===(TAB_OF[current]||current))+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICONS[v]+'</svg>'+n+'</button>').join("");
$("#tabs").querySelectorAll("button").forEach(b=>b.onclick=()=>go(b.dataset.v==="cursos"?(current==="cursos"||current==="rev"?"cursos":estSeg):b.dataset.v));
const VIEWS={hoje:vHoje,agenda:vAgenda,cursos:vCursos,rev:vRev,port:vPort,perfil:vPerfil,prog:vProg,config:vConfig};
function go(v){current=v; if(v==="cursos"||v==="rev") estSeg=v; try{localStorage.setItem(KEY+"-tab",v);}catch(e){} $("#tabs").querySelectorAll("button").forEach(b=>b.setAttribute("aria-selected",b.dataset.v===(TAB_OF[v]||v))); $("#cfgBtn").setAttribute("aria-current",v==="config"?"page":"false"); $("#progBtn").setAttribute("aria-current",v==="prog"?"page":"false"); render(); window.scrollTo({top:0});}
let lastV=null;
function render(){ const el=$("#view"); const op=lastV===current?new Set([...el.querySelectorAll("details[data-k]")].filter(d=>d.open).map(d=>d.dataset.k)):null; const cl=lastV===current?new Set([...el.querySelectorAll("details[data-k]")].filter(d=>!d.open).map(d=>d.dataset.k)):null; lastV=current; NEXT_ID=nextTaskId(); el.innerHTML=VIEWS[current](); if(op) el.querySelectorAll("details[data-k]").forEach(d=>{if(op.has(d.dataset.k))d.open=true; else if(cl.has(d.dataset.k))d.open=false;}); wireChecks(el); (WIRES[current]||(()=>{}))(el); syncLbl(); refreshHeader(); if(typeof sndBar==="function") sndBar(); }
function rerender(){render();}
function rerenderKeep(){const y=window.scrollY;render();window.scrollTo({top:y});}
const WIRES={};

function refreshHeader(){
 const t=todayS(); let n,lbl;
 if(t<START){n=diff(t,START);lbl="dias para começar";}
 else if(t<=BAIXA){n=diff(t,BAIXA);lbl="dias para a baixa";}
 else if(t<=END){n=diff(START,t)+1;lbl="º dia do plano";}
 else {n=diff(START,t)+1;lbl="dias de plano";}
 $("#cntN").textContent=n; $("#cntT").textContent=lbl;
}

function pipeHTML(){
 const t=todayS();
 const seg=PHASES.map(p=>{const tot=diff(p.a,p.b)+1; let f=t<p.a?0:t>p.b?1:(diff(p.a,t)+1)/tot; return '<div class="sg"><i style="width:'+Math.round(f*100)+'%"></i></div>';}).join("");
 const lab=PHASES.map(p=>'<span>'+p.n.split(" · ")[0].replace("Fase ","F")+" · "+fmtShort(p.a)+'</span>').join("");
 return '<div class="pipe" aria-hidden="true">'+seg+'</div><div class="pipe-l">'+lab+'</div>';
}

function syncBanner(){
 if(CL.st==="needmcp") return '<section class="banner bad"><span class="small">Para o progresso daqui chegar ao celular, permita uma vez o uso do conector Supabase.</span><div class="row"><button class="btn sm" id="bnAllow" type="button">Permitir</button></div></section>';
 if(!CL.code&&!IN_CLAUDE) return '<section class="banner"><strong>Este aparelho ainda não está sincronizado.</strong><span class="small">No app do claude.ai (ou de outro aparelho já conectado), abra Configurações › Sincronização e copie o código que começa com "cd-". Cole aqui:</span><div class="row"><input type="text" id="bnIn" placeholder="cd-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Código de sincronização" style="flex:1 1 220px"><button class="btn sm" id="bnGo" type="button">Conectar</button></div><span class="muted small">Ou toque em "Este é o primeiro aparelho" em Configurações para criar um código novo.</span></section>';
 return "";
}
function prepHTML(note){ const dn=PREP.filter(x=>isDone(x.id)).length; return '<section class="panel"><div class="dayhead"><h3>Preparação antes de 07/12</h3><span class="pill num">'+dn+'/'+PREP.length+'</span></div>'+(note||'')+'<div class="tasks">'+PREP.map(x=>taskHTML(IDX[x.id])).join("")+'</div></section>'; }
function cdHTML(t){
 const L=[], ex=IDX["c:pl300:exam"], f=n=>n===0?"hoje":n===1?"amanhã":n+" dias";
 if(t<START) L.push(["Plano começa",diff(t,START),fmtShort(START)]);
 if(ex&&!isDone("c:pl300:exam")&&ex.date>=t) L.push(["Prova PL-300",diff(t,ex.date),fmtShort(ex.date)]);
 if(BAIXA>=t) L.push(["Baixa",diff(t,BAIXA),fmtShort(BAIXA)]);
 if(!L.length) return "";
 return '<section class="panel cdrow">'+L.map(([k,n,d])=>'<div class="fact"><span class="k">'+esc(k)+'</span><span class="mid num">'+f(n)+'</span><span class="muted small">'+esc(d)+'</span></div>').join("")+'</section>'; }
function fitHTML(t,mins){ const w=mondayOf(t), n=(ST.fit&&ST.fit[w])||0;
 return '<section class="panel"><div class="dayhead"><h3>Rotina e saúde</h3><span class="pill '+(n>=3?"free":"pri")+' num">'+n+'/3 treinos na semana</span></div><p class="small">'+(mins>=180?'Dia longo ('+hrs(mins)+' h): use o cronômetro 50+10 e levante nas pausas. ':'')+'Atividade física 3 vezes por semana segura o ritmo até setembro. Marque quando treinar:</p><div class="fitrow">'+[1,2,3].map(i=>'<button type="button" class="btn ghost sm" data-fit="'+i+'" aria-pressed="'+(n>=i)+'">Treino '+i+'</button>').join("")+'</div></section>'; }
function vHoje(){
 const t=todayS(); const st=stats(); let h=syncBanner()+cdHTML(t);
 const tipI=(diff("2026-01-01",t)%TIPS.length+TIPS.length)%TIPS.length; const tip=TIPS[tipI];
 if(t<START){
  const n=diff(t,START);
  h+=prepHTML('<p class="muted small">Até 06/12 a prioridade é a prova da Transpetro. Antes do dia 07, só esta preparação (uns 45 min, num dia de folga).</p>');
  h+='<section class="panel"><div class="dayhead"><h3>Prévia do primeiro dia · '+fmt(START)+'</h3></div><div class="tasks">'+SCHED[START].map(x=>taskHTML(x)).join("")+'</div></section>';
  h+='<section class="panel"><h3>Resto da primeira semana</h3>'+weekList(addD(START,1),6)+'</section>';
 } else if(t>lastDay()){
  h+='<section class="panel"><h4>Plano de 2027 concluído</h4><h2>Hora de revisar as metas</h2><p>O cronograma diário ia até 30/09/2027. Abra o plano mestre para a fase Júnior e continue usando as abas Cursos, Portfólio e Perfil.</p></section>';
 } else {
  const ph=phaseOf(t); const T=SCHED[t]||[]; const real=T.filter(x=>x.k!=="folga"); const dn=real.filter(x=>isDone(x.id)).length; const mins=real.reduce((a,x)=>a+x.m,0);
  h+='<section class="panel"><div class="dayhead"><div><h4>'+(ph?esc(ph.n):"")+'</h4><h2>'+fmt(t)+'</h2></div><span class="pill pri num">'+dn+'/'+real.length+' feitas · '+hrs(mins)+' h</span></div>'+(real.length?'<div class="track" aria-hidden="true"><div class="fill'+(dn===real.length?" ok":"")+'" style="width:'+(real.length?Math.round(dn/real.length*100):0)+'%"></div></div>':"")+'<div class="tasks">'+T.map(x=>taskHTML(x)).join("")+'</div></section>';
  if(t<addD(START,14)&&PREP.some(x=>!isDone(x.id))) h+=prepHTML();
  h+=fitHTML(t,mins);
  const cc=srsCounts(), fu=apFollow(), dow=parse(t).getDay();
  if(cc.due||cc.fresh) h+='<section class="panel"><div class="dayhead"><h3>Revisões de hoje</h3><span class="pill pri num">'+cc.due+' para revisar · '+cc.fresh+' novos</span></div><p class="small">Cerca de '+Math.max(2,Math.round((cc.due+cc.fresh)*0.4))+' min de flashcards. Faça antes do curso do dia: aquece a cabeça.</p><div class="row"><button class="btn sm" id="goCards" type="button">Revisar agora</button>'+(TTS_OK?'<button class="btn ghost sm" id="goAudio" type="button">Ouvir em áudio</button>':'')+'</div></section>';
  if(fu.length) h+='<section class="panel"><div class="dayhead"><h3>Candidaturas para cobrar</h3><span class="pill bad num">'+fu.length+'</span></div><p class="small">'+fu.slice(0,3).map(p=>esc(p.emp)).join(", ")+(fu.length>3?" e mais "+(fu.length-3):"")+' sem resposta há 10 dias ou mais.</p><div class="row"><button class="btn ghost sm" id="goApps" type="button">Abrir candidaturas</button></div></section>';
  if((dow===0||dow===1)&&t>addD(START,5)){ const w0=mondayOf(dow===1?addD(t,-1):t); h+=weekCard(weekStats(w0),weekStats(addD(w0,-7)),"Resumo da semana"); }
  const od=overdue(), bn=behindN();
  if(bn>=3) h+='<section class="panel"><h3>Ficou para trás?</h3><p class="small">'+bn+' tarefas de curso, projeto ou perfil estão atrasadas. Em vez de acumular, reorganize: elas voltam para a fila a partir de hoje, na mesma ordem, e o resto do plano anda junto (pode passar de 30/09). Dá para desfazer em Configurações.</p><div class="row"><button class="btn sm" id="rpGo" type="button">Estou atrasado: reorganizar o plano</button></div></section>';
  if(od.length) h+='<section class="panel"><details class="acc"><summary><h3>Pendentes dos últimos 21 dias <span class="pill bad num">'+od.length+'</span></h3><span class="chev">›</span></summary><p class="muted small">Não precisa zerar tudo. Priorize cursos e projetos; recorrentes como inglês podem ficar para trás.</p><div class="tasks">'+od.map(x=>taskHTML(x,true)).join("")+'</div></details></section>';
  h+='<section class="panel"><h3>Amanhã</h3><div class="tasks">'+(SCHED[addD(t,1)]||[]).map(x=>'<div class="task folga"><div class="tb"><span class="tt">'+esc(x.k==="folga"?"Folga":x.t)+'</span>'+(x.k==="folga"?"":'<div class="tm"><span class="kchip" style="--kc:var(--k-'+x.k+')">'+KINDS[x.k]+'</span><span>'+x.m+' min</span></div>')+'</div></div>').join("")+'</div></section>';
  if(ph) h+='<section class="panel"><details class="acc" style="border:0;padding:0" data-k="hmeta"><summary><span class="stack" style="gap:2px"><h4>Meta da fase</h4><strong>'+esc(ph.n)+'</strong></span><span class="chev">›</span></summary><p class="small">'+esc(ph.goal)+'</p><p class="muted small">'+esc(ph.h)+'</p></details></section>';
 }
 h+=pendHTML(true);
 h+='<section class="panel statrow"><div class="fact"><span class="k">Sequência</span><span class="mid">'+st.streak+' dia'+(st.streak===1?"":"s")+'</span></div><div class="fact"><span class="k">Horas</span><span class="mid">'+hrs(st.mins)+' h</span></div><div class="fact"><span class="k">Em dia</span><span class="mid">'+(st.planned?Math.round(st.plannedDone/st.planned*100):100)+'%</span></div><button class="btn ghost sm" type="button" id="goProg">Ver progresso ›</button></section>';
 h+='<p class="tip1"><strong>Dica do dia · '+esc(tip[0])+'.</strong> '+esc(tip[1])+'</p>';
 return h;
}
WIRES.hoje=el=>{
 const on=(id,f)=>{const b=el.querySelector("#"+id); if(b) b.onclick=f;};
 el.querySelectorAll("[data-fit]").forEach(b=>b.onclick=()=>{const w=mondayOf(todayS()), i=+b.dataset.fit, n=(ST.fit&&ST.fit[w])||0; ST.fit=Object.assign({},ST.fit||{}); ST.fit[w]=n>=i?i-1:i; changed(); rerenderKeep();});
 on("bnAllow",clAllow); on("bnGo",()=>clLink($("#bnIn").value,true).then(()=>rerenderKeep()));
 const bi=el.querySelector("#bnIn"); if(bi) bi.onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();$("#bnGo").click();}};
 on("goCards",()=>{revSeg="cards";go("rev");}); on("goProg",()=>go("prog")); wirePend(el); on("goAudio",()=>{revSeg="au";go("rev");}); on("goApps",()=>{pfSeg="vagas";go("perfil");});
 on("rpGo",e=>{const b=e.currentTarget; if(!b.dataset.arm){b.dataset.arm="1";b.textContent="Toque de novo para confirmar";setTimeout(()=>{if(b.isConnected){delete b.dataset.arm;b.textContent="Estou atrasado: reorganizar o plano";}},4000);return;} replan();});
};
function weekList(a,n){ let h=""; for(let i=0;i<n;i++){const s=addD(a,i); const T=SCHED[s]||[]; h+='<details class="acc"><summary><span class="daytitle">'+fmt(s)+'</span><span class="row"><span class="muted small num">'+T.filter(x=>x.k!=="folga").length+' tarefas</span><span class="chev">›</span></span></summary><div class="tasks">'+T.map(x=>taskHTML(x)).join("")+'</div></details>'; } return h; }

/* Agenda */
let agWeek=null;
function mondayOf(s){const d=parse(s);const w=(d.getDay()+6)%7;return addD(s,-w);}
function vAgenda(){
 const t=todayS(); if(!agWeek) agWeek=mondayOf(t<START?START:t>END?END:t);
 const end=addD(agWeek,6); const ph=phaseOf(agWeek<START?START:agWeek);
 let h='<section class="panel"><div class="dayhead"><div><h4>'+(ph?esc(ph.n):"Fora do período do plano")+'</h4><h2>Semana de '+fmtShort(agWeek)+' a '+fmtShort(end)+'</h2></div></div><div class="row"><button class="btn ghost sm" id="agPrev" type="button">‹ Anterior</button><button class="btn ghost sm" id="agToday" type="button">Hoje</button><button class="btn ghost sm" id="agNext" type="button">Próxima ›</button><label class="row small muted" for="agDate">Ir para <input type="date" id="agDate" min="'+START+'" max="'+lastDay()+'" value="'+agWeek+'"></label></div></section>';
 for(let i=0;i<7;i++){ const s=addD(agWeek,i); const T=SCHED[s]; if(!T){ continue; } const real=T.filter(x=>x.k!=="folga"); const dn=real.filter(x=>isDone(x.id)).length;
  h+='<section class="panel daycard"><div class="dayhead"><span class="daytitle'+(s===t?" today":"")+'">'+fmt(s)+(s===t?" · hoje":"")+'</span><span class="muted small num">'+(real.length?dn+"/"+real.length+" · "+real.reduce((a,x)=>a+x.m,0)+" min":"")+'</span></div><div class="tasks">'+T.map(x=>taskHTML(x)).join("")+'</div></section>'; }
 if(agWeek>lastDay()||addD(agWeek,6)<START) h+='<section class="panel"><p class="muted">O cronograma diário vai de 07/12/2026 a '+fmt(lastDay())+'.</p></section>';
 return h;
}
WIRES.agenda=()=>{ $("#agPrev").onclick=()=>{agWeek=addD(agWeek,-7);rerender();}; $("#agNext").onclick=()=>{agWeek=addD(agWeek,7);rerender();}; $("#agToday").onclick=()=>{const t=todayS();agWeek=mondayOf(t<START?START:t>END?END:t);rerender();}; $("#agDate").onchange=e=>{if(e.target.value){agWeek=mondayOf(e.target.value);rerender();}}; };

/* Cursos */
let catTag="all";
/* lista de compras da Udemy: marca quando encontrou e se inscreveu (fica em ST.done com prefixo u:, sincroniza junto) */
/* ================= TRILHA COMPLETA (do início ao CDO) ================= */
const UD="Udemy · você já tem";
const TRILHA=[
 {id:"t0",n:"Módulo 0 · Preparação",per:"Até 06/12/2026",goal:"Deixar contas e programas prontos para começar no dia 07/12 sem perder tempo.",it:[{p:"prep:gh"},{p:"prep:li"},{p:"prep:ms"},{p:"prep:sw"}]},
 {id:"t1",n:"Módulo 1 · Base: Claude, Excel, Git e SQL",per:"cron",goal:"Claude como tutor, Excel avançado, Git para o portfólio e SQL do zero ao intermediário.",it:[{c:"claude"},{c:"excel"},{c:"git"},{c:"sql"},{id:"u:sqlmafra",n:"O curso completo de Banco de Dados e SQL (Felipe Mafra)",w:"Udemy · assinatura · 4,7, 58,5 h",h:"Só para consulta: abra a aula do tema em que travar no curso da Midori.",u:"https://www.udemy.com/courses/search/?q=curso%20completo%20de%20Banco%20de%20Dados%20e%20SQL%20Felipe%20Mafra",opt:1},{id:"x:sqlbolt",n:"Treino de SQL: SQLBolt e Kaggle Learn (Intro to SQL)",w:"Grátis · exercícios no navegador",h:"Faça um exercício depois de cada aula do curso de SQL.",u:"https://sqlbolt.com/"},{id:"b:exB",n:"Certificado de Excel para o currículo",w:"Grátis · Caminho Digital ou Fundação Bradesco",h:"No site da Fundação Bradesco, procure \"Excel\" e faça a prova final para pegar o certificado.",u:"https://www.ev.org.br/"}]},
 {id:"t2",n:"Módulo 2 · Power BI, modelagem e DAX",per:"cron",goal:"Fazer relatórios completos no Power BI, com modelo estrela e medidas DAX.",it:[{c:"pbi"},{c:"model"},{c:"dax"},{id:"u:bietl",n:"Business Intelligence Completo do ETL ao Power BI na Prática",w:"André Rosa · Udemy · 4,7, 19 h",h:"Mostra um projeto de BI inteiro, da origem dos dados ao painel. Use como modelo para o portfólio.",u:"https://www.udemy.com/courses/search/?q=Business%20Intelligence%20Completo%20do%20ETL%20ao%20Power%20BI",opt:1},{id:"x:sqlbi",n:"Introducing DAX (vídeos)",w:"SQLBI · grátis, em inglês com legenda",h:"Assista junto com o Master DAX para entender contexto de filtro.",u:"https://www.sqlbi.com/p/introducing-dax-video-course/"}]},
 {id:"t3",n:"Módulo 3 · Certificação PL-300",per:"cron",goal:"Passar na PL-300 (Microsoft Power BI Data Analyst), a certificação que mais pesa para BI Júnior.",it:[{c:"sqladv"},{c:"ia1"},{id:"x:mslearn",n:"Trilha oficial da PL-300",w:"Microsoft Learn · grátis, em português",h:"Entre com sua conta Microsoft e salve a trilha na sua coleção.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/data-analyst-associate/"},{id:"x:mspa",n:"Simulado oficial da PL-300 (Practice Assessment)",w:"Microsoft AI Skills Navigator · grátis",h:"Entre com sua conta Microsoft e clique em Practice Assessment. É a versão nova do simulado; a antiga, no Microsoft Learn, não é mais atualizada. Mire 80% ou mais antes de agendar.",u:"https://aka.ms/PL300-PA"},{c:"pl300"},{id:"u:pl300",n:"Simulados extras da PL-300 (opcional)",w:"Udemy · pago",h:"Só se o simulado oficial não bastar. Pesquise \"PL-300 practice tests\" e espere promoção.",u:"https://www.udemy.com/courses/search/?q=PL-300%20practice%20tests",opt:1},{c:"copilot"}]},
 {id:"t4",n:"Módulo 4 · Python, IA e estatística",per:"cron",goal:"Python para análise, IA aplicada com responsabilidade e estatística básica.",it:[{c:"py"},{c:"ia2"},{c:"stats"},{id:"u:claudecw",n:"Claude – Domine Cowork, Claude Code, Skills e Plugins",w:"Udemy · assinatura · 4,6, 22,5 h · lista Trilha BI",h:"Faça primeiro: Cowork, Skills e Plugins para automatizar estudos e trabalho. Use as sessões de curso extra da agenda. Ajuda também na sua ideia de criar apps de estudo.",u:"https://www.udemy.com/course/claude-curso/",opt:1},{id:"u:claudecode",n:"Claude Code do Zero: Programe 10x Mais Rápido com IA",w:"Kleber Bernardo · Udemy · assinatura · 4,8, 7,5 h · lista Trilha BI",h:"Depois do curso de Cowork: Claude Code, MCP e subagentes para criar os apps de simulado. Fica fora das 16 semanas de BI; não atrase o Power BI por ele.",u:"https://www.udemy.com/course/claude-code-do-zero-programe-10x-mais-rapido-com-ia/",opt:1},{id:"x:story",n:"Storytelling com Dados (livro)",w:"Cole Nussbaumer Knaflic · leitura",h:"Tem em português na Amazon e em sebos. Leia antes de refazer os dashboards do portfólio.",u:"https://www.google.com/search?q=Storytelling+com+Dados+Cole+Nussbaumer+Knaflic"}]},
 {id:"t5",n:"Módulo 5 · Governança, nuvem e inglês",per:"cron",goal:"Entrar na área em que você tem mais afinidade (governança, com a SC-900) e conhecer os dados na nuvem (DP-900), o Fabric e a IA da Microsoft (AI-901).",it:[{c:"gov"},{c:"sc900"},{c:"ai900"},{c:"dp900"},{c:"fabric"},{c:"lider"},{c:"pl900"},{id:"y:apsk",n:"Microsoft Applied Skills (1 ou 2)",w:"Microsoft Learn · grátis, com selo",h:"Depois da PL-300. Testes práticos com selo para o LinkedIn: escolha os de Power BI, Fabric ou Purview que estiverem ativos.",u:"https://learn.microsoft.com/pt-br/credentials/browse/?credential_types=applied%20skills"},{id:"u:scrum",n:"Gestão Ágil com Scrum COMPLETO",w:UD,h:"Na lista Trilha BI 2026-2027, em Minhas listas da Udemy.",u:"https://www.udemy.com/home/my-courses/lists/"},{id:"y:scrumopen",n:"Scrum Open (simulado)",w:"Scrum.org · grátis",h:"Depois do curso de Scrum. A certificação PSM I (paga) só se uma vaga pedir.",u:"https://www.scrum.org/open-assessments/scrum-open"},{id:"y:efset",n:"Teste de nível de inglês EF SET",w:"EF · grátis, com certificado de nível",h:"Faça agora e repita a cada 6 meses. Coloque o nível no LinkedIn.",u:"https://www.efset.org/pt/"}]},
 {id:"t6",n:"Módulo 6 · Primeiro ano como BI Júnior",per:"Do primeiro emprego até 2028",goal:"Consolidar o trabalho e tirar a primeira certificação de governança.",it:[{id:"y:dp600",n:"Certificação DP-600 (Fabric Analytics Engineer)",w:"Microsoft Learn · trilha grátis, prova paga",h:"Depois da primeira vaga, entre 2027 e 2028. Já está na sua coleção Certificações Microsoft – Roteiro 2027-2028.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/fabric-analytics-engineer-associate/"},{id:"u:pydatav",n:"Python para Análise de Dados (Data V)",w:"Udemy · você já tem · lista Trilha BI",h:"Revisão de Python antes de subir para Pleno, se o Pandas do Módulo 4 tiver ficado corrido.",u:"https://www.udemy.com/home/my-courses/lists/",opt:1},{id:"u:pyrpa",n:"Python Básico ao Avançado + RPA + Projetos Reais (Clevison Santos)",w:"Udemy · você já tem · lista Trilha BI",h:"Automação (RPA) de tarefas repetitivas, útil quando já estiver trabalhando na área.",u:"https://www.udemy.com/home/my-courses/lists/",opt:1},{id:"u:copstudio",n:"Copilot Studio: Agentes de IA, MCP e RAG",w:"Udemy · assinatura · 4,6, 11,5 h",h:"Agentes de IA no trabalho com dados: assunto que um futuro CDO precisa dominar.",u:"https://www.udemy.com/courses/search/?q=Copilot%20Studio%20Agentes%20de%20IA%20MCP%20RAG",opt:1},{id:"y:exin",n:"Certificação EXIN Privacy and Data Protection Foundation (PDPF)",w:"EXIN · prova paga, online",h:"Estude com um curso preparatório (Udemy, pesquise \"EXIN PDPF\") e agende a prova no site da EXIN.",u:"https://www.exin.com/"},{id:"u:lgpd",n:"Curso preparatório EXIN PDPF",w:"Udemy · pago",h:"Pesquise \"EXIN PDPF\" e escolha um em português, nota 4,5 ou mais. Espere promoção.",u:"https://www.udemy.com/courses/search/?q=EXIN%20PDPF",opt:1},{id:"x:dmbok",n:"DAMA-DMBOK (guia de gestão de dados)",w:"DAMA International · livro",h:"Comece pelos capítulos de governança e de qualidade de dados.",u:"https://dama.org/learning-resources/dama-data-management-body-of-knowledge-dmbok/"},{id:"y:dp600",n:"Certificação Microsoft Fabric Analytics Engineer (DP-600)",w:"Microsoft Learn · trilha grátis, prova paga",h:"O passo seguinte à PL-300. Muitas empresas pagam a prova.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/fabric-analytics-engineer-associate/"}]},
 {id:"t7",n:"Módulo 7 · Pleno e especialista em governança",per:"2029 a 2031",goal:"Virar referência em qualidade e governança de dados na empresa.",it:[{id:"y:cdmp",n:"Certificação CDMP (Certified Data Management Professional)",w:"DAMA International · US$ 300 + US$ 11 online, em inglês",h:"Comece pelo nível Associate, depois de ler o DMBOK. Exige inglês de leitura.",u:"https://cdmp.info/"},{id:"y:pos",n:"Pós-graduação em Governança de Dados (EAD)",w:"Instituição credenciada no MEC",h:"Exemplos com DAMA-DMBOK e LGPD na grade: Unyleya, Wpós, Cruzeiro do Sul Virtual, UniCesumar e Uniasselvi (Data Governance & Responsible AI). Compare grade, carga horária e preço, confira o credenciamento no e-MEC e prefira com a empresa ajudando a pagar.",u:"https://emec.mec.gov.br/"},{id:"y:dp900",n:"DP-900 Azure Data Fundamentals (opcional)",w:"Microsoft Learn · trilha grátis, prova paga",h:"Base de bancos de dados e nuvem, útil para conversar com engenharia de dados.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/azure-data-fundamentals/",opt:1}]},
 {id:"t8",n:"Módulo 8 · Liderança, rumo a CDO",per:"2031 em diante",goal:"Coordenar pessoas e programas de dados: Coordenador, Gerente, Head e, no longo prazo, CDO.",it:[{id:"y:lider",n:"Executivo de Dados e IA (programa da ENAP)",w:"Escola Virtual.Gov · grátis, 260 h, com certificado",h:"Governança e cultura de dados (135 h) e aplicações estratégicas de dados e IA (125 h). É a formação gratuita mais próxima do papel de CDO. Faça aos poucos, em até 1 ano.",u:"https://www.escolavirtual.gov.br/programa/352"},{id:"y:cdmpp",n:"CDMP nível Practitioner",w:"DAMA International · prova paga",h:"Exige anos de experiência comprovada em gestão de dados.",u:"https://cdmp.info/"},{id:"y:mba",n:"MBA em dados ou gestão (USP/Esalq, ECA-USP ou similar)",w:"EAD · pago",h:"Exemplos: MBA em Data Science, IA e Analytics (USP/Esalq, 18 meses, cerca de 22 x R$ 627 em nov/2026) ou MBA em Business Intelligence & Analytics (ECA-USP). Para gerência e diretoria; o ideal é com a empresa pagando. Confira o credenciamento no e-MEC.",u:"https://mbauspesalq.com/cursos/mba-em-data-science-e-analytics"}]}
];
const RESERVA=[
 {n:"Formação Microsoft Power BI Profissional",w:"André Rosa · "+UD,h:"Repete o Master Power BI do Felipe Mafra; use para rever um tema.",u:"https://www.udemy.com/course/formacao-power-bi-pro/"},
 {n:"Excel + Power BI + DAX — 7 Cursos em 1",w:"Jilson Santana · "+UD,h:"Repete Excel e Power BI do plano; use só para rever uma função.",u:"https://www.udemy.com/course/curso-de-excel-avancado-2016-para-se-tornar-especialista/"},
 {n:"Banco de dados SQL Básico ao Avançado para Análise de Dados",w:"André Mendonça Krul · "+UD,h:"Trocado pelo curso da Midori Toyota; use se quiser mais exercícios em MySQL.",u:"https://www.udemy.com/course/sql-basico-ao-avancado-para-analise-de-dados-cases-reais/"},
 {n:"Excel do Básico ao Avançado, Macro e VBA + Power BI",w:"Clevison Santos · "+UD,h:"269 h: só os módulos de Macro e VBA, se uma vaga administrativa pedir.",u:"https://www.udemy.com/course/excel-basico-ao-avancado-aprenda-a-automatizar-12-planilhas/"},
 {n:"Seus cursos de segurança e redes",w:UD,h:"Da época de cyber. Fora do plano; o de ISO 27001 entrou no Módulo 5 e está na lista Trilha BI 2026-2027. Código Seguro I e II (William Pamplona) foram arquivados em 03/11/2026: estão na aba Arquivados da Udemy.",u:"https://www.udemy.com/home/my-courses/archived/"},
 {n:"Dominando o Claude AI para Máxima Produtividade",w:"Argus Academy · Udemy · assinatura",h:"Trocado em 03/11/2026 pelo curso do Paulo Andrade (mais novo e com Cowork). Saiu da lista Trilha BI.",u:"https://www.udemy.com/courses/search/?q=Dominando%20o%20Claude%20AI%20para%20M%C3%A1xima%20Produtividade"},
 {n:"Claude Code do Zero ao avançado, MCP, Skills, hooks, Rules",w:"Matheus Fraga · Udemy · assinatura",h:"Repete o Claude Code do Kleber Bernardo, que ficou no plano. Saiu da lista Trilha BI.",u:"https://www.udemy.com/course/claude-code-do-zero-ao-avancado/"},
 {n:"Microsoft Excel e Power BI – Cálculos e Análises de Dados",w:"Wagner Cardoso · Udemy · assinatura",h:"13 h que repetem Excel e Power BI do plano. O Copilot para Excel (Maven, 2 h) ficou no lugar. Saiu da lista Trilha BI.",u:"https://www.udemy.com/course/microsoft-word-microsoft-office-365-tcc/"}
];
function courseIds(c){return c.s.map((_,i)=>"c:"+c.id+":"+i).concat(c.exam?["c:"+c.id+":exam"]:[]);}
function courseAcc(c){ const ids=courseIds(c); const dn=ids.filter(isDone).length; const a=IDX[ids[0]]&&IDX[ids[0]].date, b=IDX[ids[ids.length-1]]&&IDX[ids[ids.length-1]].date; const pct=Math.round(dn/ids.length*100);
 return '<details class="acc" data-k="c-'+c.id+'"><summary><span class="stack" style="gap:4px;min-width:0;flex:1"><span class="row" style="gap:8px"><strong>'+esc(c.n)+'</strong><span class="pill '+(c.free?"free":"paid")+'">'+esc(c.plat)+'</span>'+(pct===100?'<span class="pill free">concluído</span>':"")+'</span><span class="muted small">'+(a?fmtShort(a)+" a "+fmtShort(b)+" · ":"")+dn+"/"+ids.length+' sessões</span><span class="track"><span class="fill'+(pct===100?" ok":"")+'" style="display:block;width:'+pct+'%"></span></span></span><span class="chev">›</span></summary><p class="small"><strong>Onde:</strong> '+esc(c.src)+' · <a href="'+esc(c.u)+'" target="_blank" rel="noopener">Abrir o site</a></p>'+(c.alt?'<p class="small muted">'+esc(c.alt)+'</p>':"")+'<div class="tasks">'+ids.map(id=>taskHTML(IDX[id],true)).join("")+'</div></details>'; }
function trItems(f){ return f.it.map(x=>{ if(x.c){const c=COURSES.find(k=>k.id===x.c); const ids=courseIds(c); return {ids,c};} if(x.p){return {ids:[x.p],p:PREP.find(k=>k.id===x.p)};} return {ids:[x.id],x}; }); }
function trPct(f){ let n=0,d=0; trItems(f).forEach(o=>{ if(o.x&&o.x.opt) return; n+=o.ids.length; d+=o.ids.filter(isDone).length; }); return n?d/n:0; }
function trRange(f){ if(f.per!=="cron") return f.per; let a=null,b=null; f.it.forEach(x=>{ if(!x.c) return; const ids=courseIds(COURSES.find(k=>k.id===x.c)); ids.forEach(id=>{const t=IDX[id]&&IDX[id].date; if(!t) return; if(!a||t<a)a=t; if(!b||t>b)b=t;}); }); return a?fmtShort(a)+" a "+fmtShort(b)+" (pelo cronograma)":""; }
function trEnd(f){ let e=null; f.it.forEach(x=>{ if(!x.c) return; courseIds(COURSES.find(k=>k.id===x.c)).forEach(id=>{const t=IDX[id]&&IDX[id].date; if(t&&(!e||t>e)) e=t;}); }); return e; }
function trWhere(f){ if(f.id==="t0") return "antes do plano"; if(f.per!=="cron") return "depois da 1ª vaga"; let a=null; f.it.forEach(x=>{ if(!x.c) return; courseIds(COURSES.find(k=>k.id===x.c)).forEach(id=>{const t=IDX[id]&&IDX[id].date; if(t&&(!a||t<a)) a=t;}); }); const ph=a&&phaseOf(a); return ph?"na "+ph.n.split(" (")[0]:""; }
function trCur(){ const t=todayS(); if(t<START) return TRILHA[0]; const f=TRILHA.find(f=>f.per==="cron"&&trEnd(f)>=t); return f||TRILHA.find(f=>f.per!=="cron"&&f.id!=="t0"&&trPct(f)<1)||TRILHA[TRILHA.length-1]; }
function trCheck(id,n,w,h,u,opt){ const d=isDone(id); const more=h||u; const nm='<strong>'+esc(n)+(opt?' <span class="pill">opcional</span>':"")+'</strong><span class="muted small">'+esc(w)+'</span>';
 return '<div class="task'+(d?" done":"")+'"><input type="checkbox" data-id="'+id+'" id="tr-'+id+'"'+(d?" checked":"")+' aria-label="Concluir: '+esc(n)+'"><div class="tb">'+(more?'<details class="tmore" data-k="tr:'+id+'"><summary><span class="stack" style="gap:2px">'+nm+'</span></summary><div class="tpanel">'+(h?'<p class="tdet">'+esc(h)+'</p>':"")+(u?'<span class="small"><a href="'+esc(u)+'" target="_blank" rel="noopener">Abrir o site</a></span>':"")+'</div></details>':'<label for="tr-'+id+'" class="stack" style="gap:2px">'+nm+'</label>')+'</div></div>'; }
function trilhaHTML(){
 const cur=trCur(); const all=TRILHA.map(trPct); const tot=Math.round(all.reduce((a,b)=>a+b,0)/TRILHA.length*100);
 let h='<section class="panel" id="trilha"><div class="dayhead"><h3>Trilha completa: do início ao CDO</h3><span class="pill num">'+tot+'%</span></div><p class="muted small">Os cursos em módulos, dentro das 4 fases do cronograma. Marcar aqui ou na agenda é o mesmo registro. Você está no <strong>'+esc(cur.n)+'</strong>.</p>'+trMapHTML();
 TRILHA.forEach((f,k)=>{ const pc=Math.round(all[k]*100); const its=trItems(f);
  h+='<details class="acc trf" data-k="'+f.id+'"'+(f===cur?" open":"")+'><summary><span class="stack" style="gap:4px;min-width:0;flex:1"><span class="row" style="gap:8px"><strong>'+esc(f.n)+'</strong>'+(pc===100?'<span class="pill free">concluída</span>':f===cur?'<span class="pill now">agora</span>':"")+'</span><span class="muted small">'+esc(trRange(f).replace(" (pelo cronograma)",""))+(trWhere(f)?' · '+esc(trWhere(f)):"")+' · '+pc+'%</span><span class="track"><span class="fill'+(pc===100?" ok":"")+'" style="display:block;width:'+pc+'%"></span></span></span><span class="chev">›</span></summary><p class="small"><strong>Objetivo:</strong> '+esc(f.goal)+'</p><div class="stack" style="gap:6px">';
  its.forEach(o=>{ if(o.c) h+=courseAcc(o.c); else if(o.p) h+=trCheck(o.p.id,o.p.t,"Grátis",o.p.d,o.p.u); else h+=trCheck(o.x.id,o.x.n,o.x.w,o.x.h,o.x.u,o.x.opt); });
  h+='</div></details>'; });
 return h+'</section>';
}
function estNav(){ return '<nav class="seg estnav" aria-label="Estudar"><button type="button" data-est="cursos" aria-selected="'+(current==="cursos")+'">Cursos</button><button type="button" data-est="rev" aria-selected="'+(current==="rev")+'">Revisar</button></nav>'; }
function wireEst(el){ el.querySelectorAll("[data-est]").forEach(b=>b.onclick=()=>go(b.dataset.est)); }
function vCursos(){
 let h=estNav();
 h+=trilhaHTML();
 h+='<section class="panel"><details class="acc" style="border:0;padding:0" data-k="mais"><summary><span class="stack" style="gap:2px"><h3>Explorar mais cursos</h3><span class="muted small">Seus cursos extras, catálogo e reserva</span></span><span class="chev">›</span></summary>';
 h+='<details class="acc" data-k="meus"><summary><strong>Meus cursos da Udemy e outros ('+ST.custom.length+')</strong><span class="chev">›</span></summary><p class="muted small">Adicione os cursos que você já tem na Udemy (ou em qualquer plataforma) e acompanhe as aulas. Use nos horários de "Sessão de curso extra" da agenda.</p><div id="custList">'+custHTML()+'</div><div class="row"><input type="text" id="cuN" placeholder="Nome do curso" aria-label="Nome do curso" style="flex:2 1 200px"><input type="number" id="cuT" placeholder="Nº de aulas" aria-label="Número de aulas" min="1" style="flex:1 1 110px"><input type="url" id="cuU" placeholder="Link (opcional)" aria-label="Link" style="flex:2 1 200px"><button class="btn" id="cuAdd" type="button">Adicionar</button></div></details>';
 const chips=[["all","Todos"]].concat(Object.entries(CTAGS)).concat([["free","Gratuitos"]]);
 h+='<details class="acc" data-k="cat"><summary><strong>Catálogo: IA, dados e certificações</strong><span class="chev">›</span></summary><p class="muted small">Fora do cronograma. Escolha no máximo um por vez, nos horários de curso extra.</p><div class="row" style="gap:6px">'+chips.map(([k,n])=>'<button class="chip'+(catTag===k?" on":"")+'" data-t="'+k+'" type="button">'+n+'</button>').join("")+'</div><div class="stack">'+CATALOG.filter(x=>catTag==="all"||(catTag==="free"?x.free:x.tags.includes(catTag))).map(x=>'<div class="note stack" style="gap:6px"><div class="row" style="gap:8px"><strong>'+esc(x.n)+'</strong><span class="pill '+(x.free?"free":"paid")+'">'+(x.free?"Gratuito":"Pago")+'</span>'+x.tags.map(g=>'<span class="pill">'+CTAGS[g]+'</span>').join("")+'</div><span class="muted small">'+esc(x.p)+'</span><span class="small">'+esc(x.note)+' <a href="'+esc(x.u)+'" target="_blank" rel="noopener">Abrir</a></span></div>').join("")+'</div></details>';
 h+='<details class="acc" data-k="tres"><summary><span class="stack" style="gap:4px;flex:1"><strong>Reserva: cursos que você já tem, fora do plano</strong><span class="muted small">Use só se precisar</span></span><span class="chev">›</span></summary><div class="stack" style="gap:6px">'+RESERVA.map(r=>'<div class="note stack" style="gap:4px"><strong>'+esc(r.n)+'</strong><span class="muted small">'+esc(r.w)+'</span><span class="small">'+esc(r.h)+' · <a href="'+esc(r.u)+'" target="_blank" rel="noopener">Abrir</a></span></div>').join("")+'</div></details>';
 h+='</details></section>';
 return h;
}
function custHTML(){ if(!ST.custom.length) return '<p class="muted small">Nenhum curso adicionado ainda. Exemplo: "Power BI Avançado (Udemy), 120 aulas".</p>'; return ST.custom.map((c,i)=>{const pct=Math.round(c.done/c.tot*100); return '<div class="cust"><div class="stack" style="gap:4px;min-width:0"><strong style="overflow-wrap:anywhere">'+esc(c.n)+'</strong><span class="muted small num">'+c.done+'/'+c.tot+' aulas · '+pct+'%'+(c.u?' · <a href="'+esc(c.u)+'" target="_blank" rel="noopener">abrir</a>':"")+'</span><span class="track"><span class="fill'+(pct>=100?" ok":"")+'" style="display:block;width:'+Math.min(100,pct)+'%"></span></span></div><div class="ctr"><button class="btn ghost sm" data-cu="'+i+'" data-op="-1" type="button" aria-label="Menos uma aula">−</button><button class="btn sm" data-cu="'+i+'" data-op="1" type="button" aria-label="Mais uma aula">+1</button><button class="btn ghost sm" data-cu="'+i+'" data-op="x" type="button" aria-label="Remover curso">×</button></div></div>';}).join(""); }
WIRES.cursos=el=>{
 wireEst(el);
 { const m=el.querySelector(".trmap"), n=m&&m.querySelector(".trn.now"); if(m&&n) m.scrollLeft=Math.max(0,n.offsetLeft-m.offsetLeft-8); }
 el.querySelectorAll("[data-trgo]").forEach(b=>b.onclick=()=>{const d=el.querySelector('details[data-k="'+b.dataset.trgo+'"]'); if(d){d.open=true; d.scrollIntoView({behavior:"smooth",block:"start"});}});
 el.querySelectorAll(".chip[data-t]").forEach(b=>b.onclick=()=>{catTag=b.dataset.t;rerenderKeep();});
 $("#cuAdd").onclick=()=>{const n=$("#cuN").value.trim(),tot=parseInt($("#cuT").value,10),u=$("#cuU").value.trim(); if(!n||!(tot>0)){toast("Informe o nome e o número de aulas.");return;} ST.custom.push({n,tot,done:0,u:/^https?:\/\//.test(u)?u:""}); changed(); rerenderKeep(); toast("Curso adicionado.");};
 el.querySelectorAll("[data-cu]").forEach(b=>b.onclick=()=>{const c=ST.custom[+b.dataset.cu]; if(!c) return; if(b.dataset.op==="x"){ if(b.dataset.arm){ST.custom.splice(+b.dataset.cu,1);changed();rerenderKeep();} else {b.dataset.arm="1";b.textContent="Remover?";setTimeout(()=>{if(b.isConnected){delete b.dataset.arm;b.textContent="×";}},3000);} return;} c.done=Math.max(0,Math.min(c.tot,c.done+(+b.dataset.op))); changed(); rerenderKeep();});
};

/* Portfólio */
function kanbanHTML(p,ids){ const nd=ids.map((id,i)=>i).filter(i=>!isDone(ids[i])), dn=ids.map((id,i)=>i).filter(i=>isDone(ids[i]));
 const cur=nd.length?[nd[0]]:[], todo=nd.slice(1), li=i=>'<li>'+(i+1)+'. '+esc(p.s[i].length>56?p.s[i].slice(0,54)+"…":p.s[i])+'</li>';
 const col=(n,L,max,cls)=>'<div class="kbcol '+cls+'"><strong class="small">'+n+' <span class="num">'+L.length+'</span></strong><ul>'+L.slice(0,max).map(li).join("")+(L.length>max?'<li class="muted">e mais '+(L.length-max)+'</li>':"")+'</ul></div>';
 return '<div class="kb" aria-label="Quadro Kanban do projeto">'+col("A fazer",todo,3,"")+col("Fazendo",cur,1,"now")+col("Feito",dn.slice(-3).reverse().concat([]),3,"ok")+'</div><div class="row"><button type="button" class="btn ghost sm" data-kbcopy="'+esc(p.id)+'">Copiar etapas para o GitHub Projects</button></div>'; }
function kanbanText(p){ return "Quadro do projeto "+p.repo+" (GitHub Projects, modelo Board: A fazer, Fazendo, Feito)\n\n"+p.s.map((t,i)=>"- [ ] Etapa "+(i+1)+": "+t+(p.ok&&p.ok[i]?"\n  Pronto quando: "+p.ok[i]:"")).join("\n"); }
let portSel=null, portMode="lista";
function vPort(){
 const pid=id=>PROJECTS.find(p=>p.id===id);
 if(!portSel||!pid(portSel)){ const f=PROJECTS.find(p=>p.s.some((_,i)=>!isDone("p:"+p.id+":"+i))); portSel=(f||PROJECTS[0]).id; }
 let h='<nav class="seg pfg" aria-label="Projetos">'+PROJECTS.map((p,i)=>{ const ids=p.s.map((_,k)=>"p:"+p.id+":"+k), dn=ids.filter(isDone).length; return '<button type="button" data-ps="'+p.id+'" aria-selected="'+(p.id===portSel)+'">'+(i+1)+'. '+esc(p.sn)+'<small class="num">'+dn+'/'+ids.length+' etapas</small></button>'; }).join("")+'</nav>';
 const pi=PROJECTS.findIndex(p=>p.id===portSel), p=PROJECTS[pi];
 const ids=p.s.map((_,i)=>"p:"+p.id+":"+i); const dn=ids.filter(isDone).length; const pct=Math.round(dn/ids.length*100); const a=(IDX[ids[0]]||{date:START}).date,b=(IDX[ids[ids.length-1]]||{date:END}).date;
 h+='<section class="panel"><div class="stack" style="gap:4px"><span class="row" style="gap:8px"><h3>'+(pi+1)+'. '+esc(p.n)+'</h3>'+(pct===100?'<span class="pill free">publicado</span>':"")+'</span><span class="muted small">'+fmtShort(a)+' a '+fmtShort(b)+' · '+dn+'/'+ids.length+' etapas · repo <code>'+esc(p.repo)+'</code></span><span class="track"><span class="fill'+(pct===100?" ok":"")+'" style="display:block;width:'+pct+'%"></span></span></div>'
  +'<details class="acc" data-k="psobre-'+p.id+'"><summary><strong>Sobre o projeto</strong><span class="chev">›</span></summary><p class="small"><strong>Por que:</strong> '+esc(p.why)+'</p><p class="small"><strong>Fonte:</strong> '+esc(p.src)+(p.u?' · <a href="'+esc(p.u)+'" target="_blank" rel="noopener">Abrir</a>':"")+'</p><p class="small"><strong>Mostra:</strong> '+esc(p.skills)+'</p></details>'
  +'<div class="seg" role="tablist" style="margin-top:10px"><button role="tab" type="button" data-pm="lista" aria-selected="'+(portMode==="lista")+'">Lista</button><button role="tab" type="button" data-pm="quadro" aria-selected="'+(portMode==="quadro")+'">Quadro</button></div>'
  +(portMode==="quadro"?kanbanHTML(p,ids):'<div class="tasks">'+ids.filter(id=>IDX[id]).map((id,i)=>taskHTML(Object.assign({},IDX[id],{t:(i+1)+". "+p.s[i]}),true)).join("")+'</div>')
  +diaryHTML(p.id)+'</section>';
 h+='<section class="panel"><details class="acc" style="border:0;padding:0" data-k="pguia"><summary><span class="stack" style="gap:2px"><h3>Guia do repositório</h3><span class="muted small">Estrutura de pastas, modelo de README e regras de ouro</span></span><span class="chev">›</span></summary>'
  +'<h4 style="margin-top:8px">Regras de ouro</h4>'+'<ul class="plain"><li>Nunca use dados internos da FAB, nem anonimizados.</li><li>Arquivo .pbix grande? Publique prints e um vídeo curto de 1 minuto no LinkedIn.</li><li>Commits pequenos, com mensagens claras: "adiciona medida de SLA", "corrige tipo de data".</li><li>Nome do repositório em minúsculas com hífen, igual ao sugerido em cada projeto.</li><li>Todo projeto termina com um post no LinkedIn linkando o repositório.</li><li>Cada etapa tem um critério de pronto: só mova o cartão para Feito quando ele for verdade.</li><li>Grave o vídeo de 2 min duas vezes e fique com o melhor: a segunda sai mais clara.</li></ul>'
  +'<div class="dayhead" style="margin-top:8px"><h4>Estrutura padrão</h4></div><pre class="copybox">'+esc(TREE)+'</pre>'
  +'<div class="dayhead" style="margin-top:8px"><h4>Modelo de README</h4><button class="btn ghost sm" data-copy="readme" type="button">Copiar</button></div><pre class="copybox">'+esc(README_TPL)+'</pre></details></section>';
 return h;
}
WIRES.port=el=>{ el.querySelectorAll("[data-ps]").forEach(b=>b.onclick=()=>{portSel=b.dataset.ps;rerenderKeep();}); el.querySelectorAll("[data-pm]").forEach(b=>b.onclick=()=>{portMode=b.dataset.pm;rerenderKeep();});el.querySelectorAll("[data-copy=readme]").forEach(b=>b.onclick=()=>copyText(README_TPL,b)); el.querySelectorAll("[data-kbcopy]").forEach(b=>b.onclick=()=>{const p=PROJECTS.find(x=>x.id===b.dataset.kbcopy); copyText(kanbanText(p),b).then(()=>toast("Lista copiada. No GitHub, crie uma issue Plano do projeto com ela e adicione cada etapa como cartão no quadro."));}); wireDiary(el);};

/* Perfil profissional */
let pfSeg=todayS()>="2027-02-01"?"vagas":"li";
function brandList(g){ return '<div class="tasks">'+BRAND.filter(b=>b.g===g).map(b=>taskHTML(IDX["b:"+b.id],true)).join("")+'</div>'; }
function copyBlock(key,title){ return '<div class="stack"><div class="dayhead"><h3>'+title+'</h3><button class="btn ghost sm" data-copy="'+key+'" type="button">Copiar</button></div><pre class="copybox">'+esc(TXT[key])+'</pre></div>'; }
function mktHTML(){
 return '<section class="panel"><details class="acc" style="border:0;padding:0"><summary><h3>Mercado de vagas (pesquisa de 11/11/2026)</h3><span class="chev">›</span></summary><div class="stack small">'
 +'<p><strong>Vagas vistas (RJ e remoto):</strong> Analista de Dados Jr (BIP Brasil, híbrido; Rede D\'Or), Analista Jr. de Dados/BI (Grupo Sacada, presencial), Analista de BI (MRM, híbrido), Power BI Junior Analyst (INDI, remoto) e Assistente de Inteligência de Dados (abler, remoto).</p>'
 +'<p><strong>O que pedem:</strong> Excel intermediário ou avançado, Power BI com dashboards, SQL básico ou intermediário e validação da qualidade dos dados. Às vezes, Python.</p>'
 +'<p><strong>Salário de júnior:</strong> cerca de R$ 3.000 a R$ 5.000 por mês no Brasil. Para o Rio há estimativa de R$ 4.000 a R$ 6.500, sem fonte verificada: confira no Glassdoor antes de dizer sua faixa. Benefícios comuns em CLT: 13º, férias, FGTS, plano de saúde, VR/VA e bônus; previdência privada em empresas maiores.</p>'
 +'<p><strong>Atenção:</strong> concorrência alta (mais de 100 candidatos por vaga) e algumas pedem 1 ano de experiência. Por isso, mire também nas vagas-ponte da Frente B (administrativo, planejamento e controladoria com Power BI).</p>'
 +'<p><strong>Plataformas:</strong> Gupy (grandes empresas), Indeed, Vagas.com e InfoJobs (júnior e administrativo) e Portal Emprega Brasil (gov.br/SINE): perfis em 18/01/2027. Catho só nos recursos grátis. Glassdoor para pesquisar salários e empresas. Kaggle para bases de prática.</p>'
 +'<p class="muted">Com Excel, Power BI, DAX e SQL estudados, a PL-300 aprovada e os 3 projetos publicados, dá para concorrer a vagas de júnior e de assistente.</p></div></details></section>';
}
const PF_GROUPS=[["on","Presença online",[["li","LinkedIn"],["gh","GitHub"],["red","Redes sociais"]]],["vg","Vagas",[["vagas","Candidaturas"],["vaga","Analisar vaga"],["ent","Entrevista"],["net","Contatos"]]],["doc","Documentos",[["car","Currículo"],["cert","Certificados"],["fin","Transição"]]]];
function pfGroupOf(k){ return PF_GROUPS.find(g=>g[2].some(x=>x[0]===k))||PF_GROUPS[0]; }
function vPerfil(){
 const g=pfGroupOf(pfSeg);
 let h='<nav class="seg pfg" aria-label="Carreira">'+PF_GROUPS.map(x=>'<button type="button" data-pg="'+x[0]+'" aria-selected="'+(x===g)+'">'+x[1]+'</button>').join("")+'</nav>';
 h+='<div class="seg" role="tablist" style="margin-top:2px">'+g[2].map(([k,n])=>'<button role="tab" type="button" data-s="'+k+'" aria-selected="'+(pfSeg===k)+'">'+n+'</button>').join("")+'</div>';
 if(g[0]==="on") h+='<p class="muted small" style="padding:0 4px">As tarefas daqui também aparecem na agenda, às sextas e domingos até a baixa. Os textos são pontos de partida: ajuste com suas palavras.</p>';
 if(pfSeg==="li"){
  h+='<section class="panel">'+brandList("li")+'</section>';
  h+='<section class="panel stack">'+copyBlock("headline","Título")+copyBlock("about","Sobre")+copyBlock("exp","Experiência na FAB")+'</section>';
  h+='<section class="panel"><h3>Ideias de posts (um por semana)</h3><ol class="plain">'+POSTS.map(p=>'<li>'+esc(p)+'</li>').join("")+'</ol><p class="muted small">Enquanto militar: nada de farda, rotina interna ou opinião sobre a instituição. Fale do que você aprende e dos seus projetos.</p></section>';
 } else if(pfSeg==="gh"){
  h+='<section class="panel">'+brandList("gh")+'</section>';
  h+='<section class="panel stack">'+copyBlock("gh","README de perfil (repositório com o nome do seu usuário)")+'</section>';
  h+='<section class="panel"><h3>O que um recrutador olha no seu GitHub</h3><ul class="plain"><li>Os 4 repositórios fixados, com README e prints.</li><li>O gráfico de contribuições: constância vale mais que volume.</li><li>Nomes claros e organização de pastas.</li><li>Nada de repositório vazio ou "teste123" público.</li></ul></section>';
 } else if(pfSeg==="red"){
  h+='<section class="panel">'+brandList("red")+'</section>';
  h+='<section class="panel"><h3>Redes sociais com cara profissional</h3><ul class="plain"><li><strong>Instagram e Facebook:</strong> privados, ou públicos só com o que você mostraria numa entrevista.</li><li><strong>Mesma identidade:</strong> foto, nome e usuário iguais no LinkedIn, GitHub e e-mail.</li><li><strong>Onde postar sobre dados:</strong> LinkedIn em primeiro lugar. Instagram ou TikTok sobre dados só se você gostar de produzir vídeo; não é necessário.</li><li><strong>WhatsApp:</strong> foto profissional e recado neutro; recrutadores chamam por lá.</li><li><strong>Até a baixa:</strong> sem farda em fotos de perfil e sem rotina interna da FAB em qualquer rede.</li></ul></section>';
 } else if(pfSeg==="vagas"){
  h+=mktHTML();
  h+=vApps();
 } else if(pfSeg==="vaga"){ h+=vVaga();
 } else if(pfSeg==="ent"){ h+=vEnt()+vStories();
 } else if(pfSeg==="cert"){ h+=vCert();
 } else if(pfSeg==="net"){ h+=vNet();
 } else if(pfSeg==="fin"){ h+=vFin()+vCost();
 } else {
  h+='<section class="panel">'+brandList("car")+'</section>';
  h+='<section class="panel"><h3>Três frentes de vaga</h3><ul class="plain"><li><strong>A. Dados (alvo):</strong> Analista de BI, Dados ou Relatórios Júnior. Use o currículo A.</li><li><strong>B. Administrativo com dados (garantia):</strong> Assistente ou Analista Administrativo, Planejamento, Controladoria, Compras, Facilities. Use o currículo B.</li><li><strong>C. Segurança e controle de acesso (rede):</strong> só se chegar abril sem proposta das outras duas.</li></ul><p class="muted small">Candidaturas a partir de 15/02, início só depois da baixa. A primeira proposta boa que pagar as contas você aceita e segue estudando.</p></section>';
  h+='<section class="panel stack">'+copyBlock("resA","Resumo do currículo A (dados)")+copyBlock("resB","Resumo do currículo B (administrativo)")+copyBlock("exp","Experiência na FAB")+copyBlock("ho","Home office (no fim do currículo e em vagas remotas)")+'</section>';
  h+='<section class="panel"><h3>Carta de recomendação</h3><p>Declaração do chefe da sua seção, pedida na volta das férias (04/01/2027). Ela confirma, por escrito e com assinatura de um oficial, o que o currículo diz: compras e pregões, SIAFI e SILOMS, documentos oficiais, controle de acesso, prazos e zelo com informação.</p><ul class="plain"><li><strong>Onde pesa mais:</strong> na Frente B (administrativo, compras, planejamento, controladoria) e em empresas ligadas à Defesa, estatais e terceirizadas, que valorizam referência formal. Em vagas de BI Júnior ela complementa; quem decide ali é o portfólio e a PL-300.</li><li><strong>Duas vias:</strong> a com CPF é a original, para uso oficial, e fica guardada. A sem CPF é a que vai para as empresas, num PDF só com o currículo na frente.</li><li><strong>Nas candidaturas:</strong> anexe esse PDF quando a vaga aceitar documentos extras (campo de anexos da Gupy, e-mail ao recrutador, processos de estatais). No fim do currículo, uma linha basta: "Carta de recomendação do chefe imediato disponível".</li><li><strong>Na entrevista:</strong> leve uma via impressa e ofereça no fim. Use os trechos dela como base das histórias STAR (aba Entrevista): patrimônio e compras, documentos oficiais, controle de acesso.</li><li><strong>Cuidados:</strong> nunca publique a carta, nem a via sem CPF, no LinkedIn ou em redes. Guarde o original e o PDF no Drive. Se o chefe usar o LinkedIn, peça também uma recomendação curta por lá.</li></ul><p class="muted small">Depois de assinada, registre a carta em Certificados com o link do PDF no Drive, para não perder o arquivo.</p></section>';
  h+='<section class="panel"><h3>Currículo em uma página</h3><p class="small">Seu currículo em Word já está pronto (11/11/2026). Use os pontos abaixo para conferir cada versão nova.</p><ul class="plain"><li><strong>Topo:</strong> nome, cidade, telefone, e-mail, LinkedIn, GitHub e "Disponível a partir de [data]".</li><li><strong>Resumo:</strong> 3 linhas, adaptadas a cada vaga.</li><li><strong>Projetos:</strong> antes da experiência, enquanto você não tiver vaga em dados.</li><li><strong>Experiência:</strong> FAB com os bullets da aba LinkedIn.</li><li><strong>Formação e certificações:</strong> ADS, PL-300 (quando tiver), cursos ENAP.</li><li><strong>Formato:</strong> PDF, uma coluna, sem foto e sem tabelas (sistemas de triagem leem melhor).</li></ul><p class="muted small">O modelo completo está no plano mestre "Trilha até CDO".</p></section>';
 }
 return h;
}
WIRES.perfil=el=>{ el.querySelectorAll(".seg button[data-s]").forEach(b=>b.onclick=()=>{pfSeg=b.dataset.s;rerenderKeep();}); el.querySelectorAll("[data-pg]").forEach(b=>b.onclick=()=>{const g=PF_GROUPS.find(x=>x[0]===b.dataset.pg); pfSeg=g[2][0][0]; rerenderKeep();}); el.querySelectorAll("[data-copy]").forEach(b=>b.onclick=()=>copyText(TXT[b.dataset.copy],b)); if(pfSeg==="vagas") wireApps(el); if(pfSeg==="vaga") wireVaga(el); if(pfSeg==="ent") wireEnt(el); else ivStopClock(); if(pfSeg==="cert") wireCert(el); if(pfSeg==="net") wireNet(el); if(pfSeg==="fin") wireFin(el); };

/* ================= v17: 9 melhorias (vaga, entrevista, certificados, transição, contatos, medalhas, SQL, mapa, relatório) ================= */
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const brl=n=>"R$ "+Math.round(n||0).toLocaleString("pt-BR");
const num=v=>{const x=parseFloat(String(v||"").replace(/\./g,"").replace(",","."));return isFinite(x)?x:0;};

/* ---------- 1. Analisador de vaga (inspirado em Jobscan e Teal) ---------- */
let VG={txt:"",cv:"A"};
function cvText(which){ const c=Object.values(ST.certs||{}).map(x=>x.n+" "+x.org).join(" "); return (which==="B"?TXT.resB:TXT.resA)+" "+TXT.exp+" "+TXT.about+" "+TXT.headline+" "+c; }
function courseStarted(id){ const c=COURSES.find(k=>k.id===id); return !!c&&courseIds(c).some(isDone); }
function vgAnalyze(){
 const t=VG.txt; if(t.trim().length<40) return null; const cv=cvText(VG.cv); const out=[];
 KW.forEach(([n,re,cs])=>{ if(!re.test(t)) return; const inCv=re.test(cv); const st=!inCv&&cs.some(courseStarted); out.push({n,inCv,st,cs}); });
 return out;
}
function vVaga(){
 let h='<section class="panel stack"><h3>Analisar uma vaga</h3><p class="small">Cole a descrição da vaga. O app procura as competências que ela pede e mostra o que já está no seu currículo, o que você está estudando e o que falta. Tudo fica no aparelho.</p><textarea id="vgTxt" rows="8" placeholder="Cole aqui a descrição da vaga (requisitos, atividades, diferenciais)">'+esc(VG.txt)+'</textarea><div class="row"><div class="seg" role="radiogroup" id="vgCv"><button type="button" role="radio" data-v="A" aria-selected="'+(VG.cv==="A")+'">Currículo A (dados)</button><button type="button" role="radio" data-v="B" aria-selected="'+(VG.cv==="B")+'">Currículo B (administrativo)</button></div><button class="btn" type="button" id="vgGo">Analisar</button></div></section>';
 const r=vgAnalyze();
 if(r){ if(!r.length) h+='<section class="panel"><p class="small">Não encontrei competências conhecidas nesse texto. Confira se colou a descrição completa.</p></section>';
  else { const ok=r.filter(x=>x.inCv), st=r.filter(x=>x.st), miss=r.filter(x=>!x.inCv&&!x.st); const pct=Math.round(ok.length/r.length*100);
   const li=(l,cls)=>l.map(x=>'<span class="pill '+cls+'">'+esc(x.n)+'</span>').join(" ");
   h+='<section class="panel stack"><div class="dayhead"><h3>Combinação com o currículo '+VG.cv+'</h3><span class="pill '+(pct>=60?"free":pct>=40?"pri":"bad")+' num">'+pct+'%</span></div><div class="track"><span class="fill'+(pct>=60?" ok":"")+'" style="display:block;width:'+pct+'%"></span></div>'
    +'<p class="small"><strong>Já no currículo ('+ok.length+'):</strong></p><div class="row" style="gap:6px">'+(li(ok,"free")||'<span class="muted small">nenhuma</span>')+'</div>'
    +(st.length?'<p class="small"><strong>Você está estudando ('+st.length+'):</strong> coloque no currículo como "em formação" ou no resumo.</p><div class="row" style="gap:6px">'+li(st,"pri")+'</div>':"")
    +(miss.length?'<p class="small"><strong>Faltam ('+miss.length+'):</strong></p><div class="row" style="gap:6px">'+li(miss,"bad")+'</div>':"")
    +'<p class="small muted">'+(pct>=60?"Boa combinação: candidate-se e use as palavras da vaga no resumo.":pct>=40?"Vale se candidatar: requisito de vaga é lista de desejos. Ajuste o resumo com as palavras que faltam e que você sabe fazer.":"Combinação baixa. Se a vaga é da Frente B, teste o currículo B; se for de dados, anote o que falta e siga o plano.")+'</p>'
    +'<p class="small muted">Se você sabe fazer algo da lista "Faltam", inclua no resumo do currículo com as mesmas palavras da vaga. Os sistemas de triagem (ATS) procuram palavras exatas.</p></section>'; } }
 return h;
}
function wireVaga(el){ const t=el.querySelector("#vgTxt"); if(t) t.oninput=()=>{VG.txt=t.value;}; el.querySelectorAll("#vgCv button").forEach(b=>b.onclick=()=>{VG.cv=b.dataset.v;rerenderKeep();}); const g=el.querySelector("#vgGo"); if(g) g.onclick=()=>{VG.txt=t.value;rerenderKeep();}; }

/* ---------- 2. Treino de entrevista (inspirado em Big Interview e Pramp) ---------- */
const IVT={c:"Comportamental",t:"Técnica de BI",a:"Administrativa e compras"};
let IV={f:"all",i:0,show:false,t0:0,tick:null,rec:null,chunks:[],url:null};
function ivList(){return IVQ.map((q,i)=>Object.assign({i},{k:q[0],q:q[1],d:q[2]})).filter(x=>IV.f==="all"||x.k===IV.f);}
function vEnt(){
 const L=ivList(); if(IV.i>=L.length) IV.i=0; const q=L[IV.i]; const done=Object.keys(ST.iv||{}).length;
 let h='<section class="panel stack"><div class="dayhead"><h3>Treino de entrevista</h3><span class="pill pri num">'+done+'/'+IVQ.length+' treinadas</span></div><p class="small">Responda em voz alta, como na entrevista, em até 2 minutos. Use o método STAR nas comportamentais: <strong>S</strong>ituação, <strong>T</strong>arefa, <strong>A</strong>ção e <strong>R</strong>esultado. Se quiser, grave e ouça depois.</p><div class="seg" id="ivF">'+[["all","Todas"],["c","Comportamentais"],["t","Técnicas de BI"],["a","Administrativas"]].map(([k,n])=>'<button type="button" data-v="'+k+'" aria-selected="'+(IV.f===k)+'">'+n+'</button>').join("")+'</div></section>';
 h+='<section class="panel stack"><div class="row" style="justify-content:space-between"><span class="pill">'+IVT[q.k]+' · '+(IV.i+1)+' de '+L.length+'</span>'+(ST.iv&&ST.iv[q.i]?'<span class="pill free">treinada '+ST.iv[q.i]+'x</span>':"")+'</div><p class="auq">'+esc(q.q)+'</p>'
  +(IV.show?'<div class="note small"><strong>Como responder:</strong> '+esc(q.d)+'</div>':'<button class="btn ghost sm" type="button" id="ivShow">Ver como responder</button>')
  +'<div class="row" style="align-items:center"><span class="big num" id="ivClock">2:00</span><button class="btn" type="button" id="ivGo">'+(IV.t0?"Parar":"Começar 2 min")+'</button>'+(navigator.mediaDevices&&window.MediaRecorder?'<button class="btn ghost" type="button" id="ivRec">'+(IV.rec?"■ Parar gravação":"● Gravar resposta")+'</button>':"")+'</div>'
  +(IV.url?'<audio controls src="'+IV.url+'" style="width:100%"></audio><p class="muted small">A gravação fica só nesta tela e some quando você sair. Ouça e repare: começou direto? Deu um número? Terminou com o resultado?</p>':"")
  +'<div class="row"><button class="btn ghost" type="button" id="ivPrev">⏮ Anterior</button><button class="btn ghost" type="button" id="ivOk">Marcar como treinada</button><button class="btn ghost" type="button" id="ivNext">Próxima ⏭</button></div></section>';
 return h;
}
function ivStopClock(){clearInterval(IV.tick);IV.tick=null;IV.t0=0;}
function vStories(){
 return '<section class="panel stack"><h3>Suas histórias para entrevista</h3><p class="small">Cinco casos reais, tirados da sua carta, no formato <strong>situação, tarefa, ação e resultado</strong>. Decore a estrutura, não o texto. Troque os colchetes por números que você lembra e conte em até 2 minutos. No fim, ligue a história a dados: é o que o recrutador de BI quer ouvir.</p>'
  +STORIES.map((x,i)=>'<details class="acc"><summary><h3>'+(i+1)+'. '+esc(x.t)+'</h3><span class="chev">›</span></summary><div class="stack small"><p class="muted">Responde a: '+esc(x.q)+'</p><p><strong>Situação:</strong> '+esc(x.s)+'</p><p><strong>Tarefa:</strong> '+esc(x.ta)+'</p><p><strong>Ação:</strong> '+esc(x.a)+'</p><p><strong>Resultado:</strong> '+esc(x.r)+'</p><p><strong>Ligação com dados:</strong> '+esc(x.d)+'</p></div></details>').join("")+'</section>'; }
function wireEnt(el){
 const L=ivList(), q=L[IV.i];
 el.querySelectorAll("#ivF button").forEach(b=>b.onclick=()=>{IV.f=b.dataset.v;IV.i=0;IV.show=false;ivStopClock();rerenderKeep();});
 const on=(id,f)=>{const b=el.querySelector("#"+id);if(b)b.onclick=f;};
 on("ivShow",()=>{IV.show=true;rerenderKeep();});
 const mv=d=>{IV.i=(IV.i+d+L.length)%L.length;IV.show=false;IV.url=null;ivStopClock();rerenderKeep();};
 on("ivPrev",()=>mv(-1)); on("ivNext",()=>mv(1));
 on("ivOk",()=>{ST.iv=ST.iv||{};ST.iv[q.i]=(ST.iv[q.i]||0)+1;changed();toast("Pergunta treinada.");mv(1);});
 on("ivGo",()=>{ if(IV.t0){ivStopClock();rerenderKeep();return;} IV.t0=Date.now(); const draw=()=>{const c=$("#ivClock"); const left=Math.max(0,120-Math.floor((Date.now()-IV.t0)/1000)); if(c){c.textContent=Math.floor(left/60)+":"+pad(left%60); c.style.color=left<=15?"var(--bad)":"";} if(!left){ivStopClock();toast("Tempo! Em entrevista, respostas de até 2 minutos funcionam melhor.");const b=$("#ivGo");if(b)b.textContent="Começar 2 min";}}; IV.tick=setInterval(draw,250); draw(); const b=$("#ivGo"); if(b) b.textContent="Parar"; });
 on("ivRec",async()=>{ if(IV.rec){IV.rec.stop();return;} try{const s=await navigator.mediaDevices.getUserMedia({audio:true}); const r=new MediaRecorder(s); IV.chunks=[]; r.ondataavailable=e=>IV.chunks.push(e.data); r.onstop=()=>{s.getTracks().forEach(t=>t.stop()); if(IV.url) URL.revokeObjectURL(IV.url); IV.url=URL.createObjectURL(new Blob(IV.chunks,{type:r.mimeType||"audio/webm"})); IV.rec=null; rerenderKeep();}; r.start(); IV.rec=r; rerenderKeep();}catch(e){toast("Não deu para usar o microfone. Libere o acesso nas permissões do navegador.");} });
 if(IV.t0){ const b=el.querySelector("#ivGo"); if(b){ IV.tick&&clearInterval(IV.tick); IV.tick=setInterval(()=>{const c=$("#ivClock"); const left=Math.max(0,120-Math.floor((Date.now()-IV.t0)/1000)); if(c) c.textContent=Math.floor(left/60)+":"+pad(left%60); if(!left) ivStopClock();},250);} }
}

/* ---------- 3. Cofre de certificados (inspirado em LinkedIn e Credly) ---------- */
let ctEdit=null;
function certList(){return Object.entries(ST.certs||{}).filter(([,c])=>!c.x).map(([id,c])=>Object.assign({id},c)).sort((a,b)=>(b.d||"").localeCompare(a.d||""));}
function certBlock(){ const L=certList(); const f=L.filter(c=>c.tp==="form"), c=L.filter(x=>x.tp!=="form"); const y=d=>d?d.slice(0,4):"";
 return (f.length?"FORMAÇÃO\n"+f.map(x=>"• "+x.n+" — "+x.org+(x.d?" ("+y(x.d)+")":"")).join("\n")+"\n\n":"")+(c.length?"CERTIFICAÇÕES E CURSOS\n"+c.map(x=>"• "+x.n+" — "+x.org+(x.d?", "+y(x.d):"")+(x.h?", "+x.h+" h":"")+(x.cod?" · código "+x.cod:"")).join("\n"):""); }
function vCert(){
 const L=certList(), e=ctEdit&&ctEdit!=="new"?(ST.certs||{})[ctEdit]:null, totH=L.reduce((a,c)=>a+(+c.h||0),0);
 let h='<section class="panel stack"><div class="dayhead"><h3>Cofre de certificados</h3><span class="pill pri num">'+L.length+' · '+totH+' h</span></div><p class="small">Guarde cada certificado com a data, a carga horária e o código de validação. O bloco pronto para o currículo e o LinkedIn sai lá embaixo.</p><p class="muted small">Cada certificado novo vai para 4 lugares: LinkedIn, GitHub ou Microsoft Learn, currículo e Banco de Talentos do Portal do Militar.</p>'+(!L.length?'<button class="btn" type="button" id="ctSeed">Adicionar os que você já tem (ADS e 5 cursos da ENAP)</button><p class="muted small">Depois toque em Editar em cada um para pôr a data de conclusão e o código de validação.</p>':"")+'</section>';
 h+='<section class="panel"><details class="acc" style="border:0;padding:0"'+(ctEdit?" open":"")+' id="ctForm"><summary><h3>'+(e?"Editar certificado":"+ Novo certificado")+'</h3><span class="chev">›</span></summary><div class="stack"><div class="g2f"><label class="fl">Nome do curso<input type="text" id="ctN" value="'+esc(e?e.n:"")+'"></label><label class="fl">Instituição<input type="text" id="ctO" value="'+esc(e?e.org:"")+'" placeholder="ENAP, Udemy, Microsoft…"></label><label class="fl">Data de conclusão<input type="date" id="ctD" value="'+esc(e?e.d:"")+'"></label><label class="fl">Carga horária (h)<input type="number" id="ctH" min="0" value="'+esc(e?e.h:"")+'"></label><label class="fl">Código de validação<input type="text" id="ctC" value="'+esc(e?e.cod:"")+'"></label><label class="fl">Link do certificado<input type="url" id="ctU" value="'+esc(e?e.u2:"")+'"></label><label class="fl">Tipo<select id="ctT"><option value="cert"'+(e&&e.tp==="form"?"":" selected")+'>Certificado ou curso</option><option value="form"'+(e&&e.tp==="form"?" selected":"")+'>Formação (graduação, pós)</option></select></label></div><div class="row"><button class="btn" type="button" id="ctSave">Salvar</button>'+(e?'<button class="btn ghost" type="button" id="ctDel">Remover</button>':"")+'</div></div></details></section>';
 if(L.length){ h+='<section class="panel">'+L.map(c=>'<div class="apr"><div class="stack" style="gap:2px;min-width:0"><strong>'+esc(c.n)+'</strong><span class="muted small">'+esc(c.org)+(c.d?" · "+fmtShort(c.d)+"/"+c.d.slice(0,4):"")+(c.h?" · "+esc(c.h)+" h":"")+(c.cod?" · código "+esc(c.cod):' · <span style="color:var(--bad)">sem código</span>')+'</span>'+(c.u2?'<a class="small" href="'+esc(c.u2)+'" target="_blank" rel="noopener">Abrir</a>':"")+'</div><button class="btn ghost sm" type="button" data-cted="'+c.id+'">Editar</button></div>').join("")+'</section>';
  h+='<section class="panel stack"><div class="dayhead"><h3>Bloco para o currículo</h3><button class="btn ghost sm" type="button" id="ctCopy">Copiar</button></div><pre class="copybox">'+esc(certBlock())+'</pre></section>'; }
 return h;
}
function wireCert(el){
 const on=(id,f)=>{const b=el.querySelector("#"+id);if(b)b.onclick=f;};
 on("ctSeed",()=>{ST.certs=ST.certs||{};CERT_SEED.forEach(c=>{ST.certs["ct"+uid()]=Object.assign({},c,{cod:"",u2:"",u:Date.now()});});changed();rerenderKeep();toast("Certificados adicionados. Confira as datas.");});
 on("ctSave",()=>{const n=$("#ctN").value.trim(); if(!n){toast("Informe o nome do curso.");return;} const id=ctEdit&&ctEdit!=="new"?ctEdit:"ct"+uid(); ST.certs=ST.certs||{}; ST.certs[id]={n,org:$("#ctO").value.trim(),d:$("#ctD").value,h:$("#ctH").value,cod:$("#ctC").value.trim(),u2:/^https?:\/\//.test($("#ctU").value.trim())?$("#ctU").value.trim():"",tp:$("#ctT").value,u:Date.now()}; ctEdit=null; changed(); rerenderKeep(); toast("Certificado salvo.");});
 on("ctDel",e=>{const b=e.currentTarget; if(!b.dataset.arm){b.dataset.arm="1";b.textContent="Toque de novo para remover";return;} ST.certs[ctEdit]={x:1,u:Date.now()}; ctEdit=null; changed(); rerenderKeep();});
 el.querySelectorAll("[data-cted]").forEach(b=>b.onclick=()=>{ctEdit=b.dataset.cted;rerenderKeep();const f=$("#ctForm");if(f)f.scrollIntoView({behavior:"smooth"});});
 on("ctCopy",e=>copyText(certBlock(),e.currentTarget));
 const f=el.querySelector("#ctForm"); if(f) f.addEventListener("toggle",()=>{if(!f.open) ctEdit=null; else if(!ctEdit) ctEdit="new";});
}

/* ---------- 4. Planejador da transição (inspirado em Mobills e YNAB; fica só no aparelho) ---------- */
const FINK=KEY+"-fin";
let FIN=null; function finGet(){ if(!FIN){try{FIN=JSON.parse(localStorage.getItem(FINK)||"null");}catch(e){} FIN=Object.assign({res:"",gasto:"",renda:"",extra:"",margem:"2",sa:"",sb:""},FIN||{});} return FIN; }
function finSave(){try{localStorage.setItem(FINK,JSON.stringify(FIN));}catch(e){}}
function finCalc(){ const f=finGet(), res=num(f.res)+num(f.extra), falta=num(f.gasto)-num(f.renda); if(!num(f.gasto)) return null;
 const meses=falta>0?res/falta:Infinity; const civ=CIVIL; const ate=isFinite(meses)?addD(civ,Math.floor(meses*30.4)):null; const lim=ate?addD(ate,-Math.round(num(f.margem)*30.4)):null;
 return {res,falta,meses,ate,lim,minSal:Math.max(0,falta)}; }
function vFin(){
 const f=finGet(), r=finCalc(); const inp=(id,lbl,ph)=>'<label class="fl">'+lbl+'<input type="text" inputmode="decimal" id="'+id+'" value="'+esc(f[id])+'" placeholder="'+ph+'"></label>';
 let h='<section class="panel stack"><h3>Planejador da transição</h3><p class="small">Quanto tempo a sua reserva segura depois da baixa e até quando faz sentido esperar uma vaga de dados antes de aceitar uma da Frente B. <strong>Estes valores ficam só neste aparelho</strong>: não vão para a nuvem nem para os outros aparelhos.</p><div class="g2f">'+inp("res","Reserva guardada (R$)","ex.: 15000")+inp("extra","Dinheiro que entra na saída (R$)","férias, compensação…")+inp("gasto","Gasto mensal da casa (R$)","ex.: 4500")+inp("renda","Outras rendas por mês (R$)","ex.: renda da esposa")+inp("margem","Margem de segurança (meses)","2")+inp("sa","Salário que espera na Frente A (R$)","BI Júnior")+inp("sb","Salário que espera na Frente B (R$)","administrativo")+'</div><button class="btn" type="button" id="finGo">Calcular</button></section>';
 if(r){ const cls=r.meses>=6?"free":r.meses>=3?"pri":"bad";
  h+='<section class="panel stack"><div class="grid g4"><div class="fact"><span class="k">A reserva cobre</span><span class="big">'+(isFinite(r.meses)?String(Math.floor(r.meses*10)/10).replace(".",",")+" meses":"sem prazo")+'</span><span class="muted small">faltam '+brl(r.falta)+' por mês</span></div><div class="fact"><span class="k">Dinheiro acaba em</span><span class="big">'+(r.ate?fmtShort(r.ate)+"/"+r.ate.slice(2,4):"—")+'</span><span class="muted small">contando da baixa ('+fmtShort(BAIXA)+')</span></div><div class="fact"><span class="k">Aceite a Frente B até</span><span class="big">'+(r.lim?fmtShort(r.lim)+"/"+r.lim.slice(2,4):"—")+'</span><span class="muted small">com '+esc(f.margem||0)+' meses de margem</span></div><div class="fact"><span class="k">Salário mínimo aceitável</span><span class="big">'+brl(r.minSal)+'</span><span class="muted small">cobre o gasto mensal</span></div></div>'
   +'<p class="small"><span class="pill '+cls+'">'+(r.meses>=6?"Folga boa":r.meses>=3?"Folga média":"Folga curta")+'</span> '+(r.meses>=6?"Dá para focar em vagas de dados por alguns meses, mantendo a Frente B como plano de garantia.":r.meses>=3?"Mande candidaturas das Frentes A e B ao mesmo tempo desde fevereiro.":"Priorize a Frente B desde fevereiro e continue estudando dados à noite.")+'</p>'
   +(num(f.sa)||num(f.sb)?'<p class="small">'+(num(f.sa)?'Frente A: '+brl(num(f.sa))+(num(f.sa)>=r.minSal?" cobre":" não cobre")+' o gasto. ':"")+(num(f.sb)?'Frente B: '+brl(num(f.sb))+(num(f.sb)>=r.minSal?" cobre":" não cobre")+' o gasto.':"")+' Lembre que o salário líquido é menor que o bruto (INSS e IR).</p>':"")
   +'<p class="muted small">Conta simples, para conversar em casa. Não inclui imprevistos nem o custo das provas de certificação.</p></section>'; }
 return h;
}
function vCost(){ const f=finGet(), dol=num(f.dol)||5.9, pg=f.cp||{}, g=num(f.cg);
 const rs=c=>Math.round(c.usd*dol/10)*10, ate=CCOST.slice(0,4), tot=ate.reduce((a,c)=>a+(pg[c.id]?0:rs(c)),0);
 let h='<section class="panel stack"><h3>Orçamento das certificações</h3><p class="small">Preços oficiais para quem faz a prova no Brasil (nov/2026). A Microsoft cobra em dólar no cartão; use o dólar do cartão com IOF. <strong>Fica só neste aparelho.</strong></p><div class="g2f"><label class="fl">Dólar no cartão, com IOF (R$)<input type="text" inputmode="decimal" id="dol" value="'+esc(f.dol||"5,90")+'"></label><label class="fl">Já guardado para provas (R$)<input type="text" inputmode="decimal" id="cg" value="'+esc(f.cg||"")+'" placeholder="ex.: 300"></label></div>';
 h+=CCOST.map(c=>'<div class="cfgrow"><label for="cc-'+c.id+'"><strong>'+esc(c.n)+'</strong> · US$ '+c.usd+' ≈ '+brl(rs(c))+'<br><span class="muted small">'+esc(c.q)+'</span></label><input type="checkbox" id="cc-'+c.id+'" data-cc="'+c.id+'"'+(pg[c.id]?" checked":"")+' aria-label="Já paguei: '+esc(c.n)+'"></div>').join("");
 h+='<div class="grid g4"><div class="fact"><span class="k">Reservar até abril/2027</span><span class="big">'+brl(tot)+'</span><span class="muted small">PL-300, uma refação, AI-901 e SC-900</span></div><div class="fact"><span class="k">Falta guardar</span><span class="big">'+brl(Math.max(0,tot-g))+'</span><span class="muted small">'+(g>=tot?"já coberto":"até "+fmtShort(addD(START,40)))+'</span></div></div><p class="muted small">Marque a caixa quando pagar. A refação só é gasta se precisar; se passar de primeira, esse valor vai para a EXIN. Fique de olho em vouchers com desconto dos desafios do Microsoft Learn.</p><button class="btn ghost sm" type="button" id="finGo">Recalcular</button></section>';
 h+='<section class="panel"><h3>Ferramentas: o que pagar e o que não pagar</h3><ul class="plain small"><li><strong>Pagar:</strong> a prova PL-300 (agendar em 12/01 para 02/02) e o Microsoft 365 Personal só se o notebook não tiver Excel desktop.</li><li><strong>Testar grátis:</strong> LinkedIn Premium Career, 1 mês a partir de 15/02/2027, com cancelamento em 12/03 (R$ 69,99 por mês ou R$ 26,24 no anual, ago/2026).</li><li><strong>Não assinar:</strong> Power BI Pro (o Desktop é grátis), Alura e DataCamp (repetem a Udemy e o Learn) e Catho pago. GitHub, Kaggle, Microsoft Learn, Gupy, Indeed, Vagas.com, InfoJobs e Emprega Brasil são grátis; Glassdoor é só para consulta.</li></ul></section>';
 h+='<section class="panel stack"><h3>Pretensão salarial</h3><p class="small">Informe uma faixa, não um número. Piso: o seu líquido atual na FAB. Teto: o topo da faixa de mercado para o cargo e a cidade da vaga (Glassdoor, Vagas.com e a própria vaga). Para vagas em SP, some o custo de vida mais alto.</p></section>';
 h+='<section class="panel stack"><h3>Backup das finanças</h3><p class="small">Os valores desta aba não vão para a nuvem. Gere um código antes de trocar de celular, de navegador ou de endereço do app, e cole no aparelho novo.</p><textarea id="finTxt" aria-label="Código de backup das finanças" placeholder="Cole aqui o código CDFIN para importar"></textarea><div class="row"><button class="btn ghost sm" type="button" id="finExp">Gerar e copiar código</button><button class="btn ghost sm" type="button" id="finImp">Importar código</button></div></section>';
 return h; }
function wireFin(el){ const f=finGet();
 ["dol","cg"].forEach(k=>{const i=el.querySelector("#"+k); if(i) i.oninput=()=>{f[k]=i.value;finSave();};});
 el.querySelectorAll("[data-cc]").forEach(c=>c.onchange=()=>{f.cp=Object.assign({},f.cp||{});if(c.checked)f.cp[c.dataset.cc]=todayS();else delete f.cp[c.dataset.cc];finSave();rerenderKeep();});
 const ex=el.querySelector("#finExp"); if(ex) ex.onclick=async()=>{const v="CDFIN:"+btoa(unescape(encodeURIComponent(JSON.stringify(finGet()))));const ta=el.querySelector("#finTxt");ta.value=v;try{await navigator.clipboard.writeText(v);toast("Código das finanças copiado.");}catch(e){ta.select();toast("Selecione o código e copie.");}};
 const im=el.querySelector("#finImp"); if(im) im.onclick=()=>{try{const v=el.querySelector("#finTxt").value.trim();if(!v.startsWith("CDFIN:"))throw 0;const o=JSON.parse(decodeURIComponent(escape(atob(v.slice(6)))));if(!o||typeof o!=="object")throw 0;FIN=null;localStorage.setItem(FINK,JSON.stringify(o));finGet();rerenderKeep();toast("Finanças importadas.");}catch(e){toast("Código inválido. Ele começa com CDFIN:");}}; ["res","extra","gasto","renda","margem","sa","sb"].forEach(k=>{const i=el.querySelector("#"+k); if(i) i.oninput=()=>{f[k]=i.value;finSave();};}); const g=el.querySelector("#finGo"); if(g) g.onclick=()=>rerenderKeep(); }

/* ---------- 5. Contatos de networking (inspirado em Dex e Clay) ---------- */
let ntEdit=null;
function netList(){ const t=todayS(); return Object.entries(ST.net||{}).filter(([,c])=>!c.x).map(([id,c])=>Object.assign({id},c,{due:c.ult?diff(c.ult,t)>=30:true})).sort((a,b)=>(b.due-a.due)||((a.ult||"")<(b.ult||"")?-1:1)); }
function vNet(){
 const L=netList(), due=L.filter(c=>c.due).length, e=ntEdit&&ntEdit!=="new"?(ST.net||{})[ntEdit]:null;
 let h='<section class="panel stack"><div class="dayhead"><h3>Contatos de networking</h3><span class="pill '+(due?"bad":"free")+' num">'+due+' para retomar</span></div><p class="small">Pessoas da área com quem você conversou. A cada 30 dias sem contato, o app lembra de retomar: um comentário num post, uma dúvida, uma novidade sua. Meta: 2 conversas novas por semana a partir de janeiro.</p></section>';
 h+='<section class="panel"><details class="acc" style="border:0;padding:0"'+(ntEdit?" open":"")+' id="ntForm"><summary><h3>'+(e?"Editar contato":"+ Novo contato")+'</h3><span class="chev">›</span></summary><div class="stack"><div class="g2f"><label class="fl">Nome<input type="text" id="ntN" value="'+esc(e?e.n:"")+'"></label><label class="fl">Cargo e empresa<input type="text" id="ntC" value="'+esc(e?e.c:"")+'" placeholder="Analista de BI · Empresa"></label><label class="fl">Onde conversam<select id="ntW">'+["LinkedIn","WhatsApp","E-mail","Evento","Indicação","Outro"].map(o=>'<option'+(e&&e.w===o?" selected":"")+'>'+o+'</option>').join("")+'</select></label><label class="fl">Último contato<input type="date" id="ntU" value="'+esc(e?e.ult:todayS())+'"></label></div><label class="fl">Anotações<textarea id="ntO" rows="3" placeholder="Do que falaram, o que combinaram">'+esc(e?e.o:"")+'</textarea></label><div class="row"><button class="btn" type="button" id="ntSave">Salvar</button>'+(e?'<button class="btn ghost" type="button" id="ntDel">Remover</button>':"")+'</div></div></details></section>';
 if(L.length) h+='<section class="panel">'+L.map(c=>'<div class="apr"><div class="stack" style="gap:2px;min-width:0"><strong>'+esc(c.n)+(c.due?' <span class="pill bad">retomar</span>':"")+'</strong><span class="muted small">'+esc(c.c||"")+' · '+esc(c.w||"")+' · último contato '+(c.ult?fmtShort(c.ult):"—")+'</span>'+(c.o?'<span class="small">'+esc(c.o)+'</span>':"")+'</div><div class="row" style="gap:6px"><button class="btn ghost sm" type="button" data-nthj="'+c.id+'">Falei hoje</button><button class="btn ghost sm" type="button" data-nted="'+c.id+'">Editar</button></div></div>').join("")+'</section>';
 else h+='<section class="panel"><p class="muted small">Nenhum contato ainda. Comece pelos 15 profissionais de BI que você vai seguir no LinkedIn (tarefa do Perfil).</p></section>';
 return h;
}
function wireNet(el){
 const on=(id,f)=>{const b=el.querySelector("#"+id);if(b)b.onclick=f;};
 on("ntSave",()=>{const n=$("#ntN").value.trim(); if(!n){toast("Informe o nome.");return;} const id=ntEdit&&ntEdit!=="new"?ntEdit:"nt"+uid(); ST.net=ST.net||{}; ST.net[id]={n,c:$("#ntC").value.trim(),w:$("#ntW").value,ult:$("#ntU").value,o:$("#ntO").value.trim(),u:Date.now()}; ntEdit=null; changed(); rerenderKeep(); toast("Contato salvo.");});
 on("ntDel",e=>{const b=e.currentTarget; if(!b.dataset.arm){b.dataset.arm="1";b.textContent="Toque de novo para remover";return;} ST.net[ntEdit]={x:1,u:Date.now()}; ntEdit=null; changed(); rerenderKeep();});
 el.querySelectorAll("[data-nthj]").forEach(b=>b.onclick=()=>{const c=ST.net[b.dataset.nthj]; ST.net[b.dataset.nthj]=Object.assign({},c,{ult:todayS(),u:Date.now()}); changed(); rerenderKeep(); toast("Contato atualizado.");});
 el.querySelectorAll("[data-nted]").forEach(b=>b.onclick=()=>{ntEdit=b.dataset.nted;rerenderKeep();const f=$("#ntForm");if(f)f.scrollIntoView({behavior:"smooth"});});
 const f=el.querySelector("#ntForm"); if(f) f.addEventListener("toggle",()=>{if(!f.open) ntEdit=null; else if(!ntEdit) ntEdit="new";});
}

/* ---------- 6. Medalhas, níveis e meta semanal (inspirado em Duolingo e Habitica) ---------- */
function xpOf(){ const st=stats(); const c=certList().length, a=apList().length, q=Object.keys(ST.sqlc||{}).length, iv=Object.values(ST.iv||{}).reduce((s,x)=>s+x,0), cards=Object.keys(ST.srs||{}).length, n=netList().length;
 return {st,c,a,q,iv,cards,n,xp:st.doneN*10+c*40+a*5+q*15+iv*5+cards*2+n*10}; }
const LVN=["Recruta","Aprendiz","Praticante","Analista em formação","Analista","Analista confiante","Especialista","Referência","Mestre dos dados"];
function lvOf(xp){ let l=0; while(100*(l+1)*(l+1)<=xp&&l<LVN.length-1) l++; const a=100*l*l, b=100*(l+1)*(l+1); return {l,n:LVN[l],a,b,p:Math.min(1,(xp-a)/(b-a))}; }
function courseDone(id){const c=COURSES.find(k=>k.id===id);return !!c&&courseIds(c).every(isDone);}
function projDone(){return PROJECTS.filter(p=>p.s.every((_,i)=>isDone("p:"+p.id+":"+i))).length;}
function medals(){ const X=xpOf(), s=X.st;
 return [
  ["Primeiro passo","Concluir a primeira tarefa",s.doneN>=1],["Semana firme","7 dias seguidos estudando",s.streak>=7],["Mês de ferro","30 dias seguidos estudando",s.streak>=30],
  ["Excel em dia","Concluir o curso de Excel",courseDone("excel")],["Consulta certa","Concluir o curso de SQL",courseDone("sql")],["Painel no ar","Concluir o curso de Power BI",courseDone("pbi")],
  ["Contexto dominado","Concluir o curso de DAX",courseDone("dax")],["PL-300","Marcar a prova da PL-300 como feita",isDone("c:pl300:exam")],["Portfólio aberto","Publicar o primeiro projeto",projDone()>=1],
  ["Portfólio completo","Publicar os 3 projetos",projDone()>=3],["Guardião dos dados","Concluir o curso de governança",courseDone("gov")],["Mão na massa","Resolver 10 desafios de SQL",X.q>=10],
  ["Memória boa","Estudar 100 flashcards",X.cards>=100],["Pronto para a banca","Treinar 15 perguntas de entrevista",Object.keys(ST.iv||{}).length>=15],
  ["Na pista","Enviar 10 candidaturas",X.a>=10],["Rede ativa","Cadastrar 10 contatos",X.n>=10],["Colecionador","Guardar 8 certificados",X.c>=8],["Foco total","20 horas no cronômetro",Object.values(ST.log||{}).reduce((a,x)=>a+x,0)>=1200]
 ]; }
function vMedals(){
 const X=xpOf(), lv=lvOf(X.xp), M=medals(), got=M.filter(m=>m[2]).length, goal=+cfg().wgoal||15, t=todayS(), w=weekStats(mondayOf(t)), wh=(w.mins+w.tm)/60, wp=Math.min(1,wh/goal);
 let h='<section class="panel stack"><div class="dayhead"><div><h4>Nível '+(lv.l+1)+'</h4><h3>'+esc(lv.n)+'</h3></div><span class="pill pri num">'+X.xp+' XP</span></div><div class="track"><span class="fill" style="display:block;width:'+Math.round(lv.p*100)+'%"></span></div><p class="muted small">'+(lv.l<LVN.length-1?(lv.b-X.xp)+' XP para o próximo nível. ':"")+'XP vem de tarefas (10), certificados (40), desafios de SQL (15), contatos (10), candidaturas e perguntas de entrevista (5) e flashcards (2).</p></section>';
 h+='<section class="panel stack"><div class="dayhead"><h3>Meta da semana</h3><span class="pill '+(wp>=1?"free":"pri")+' num">'+String(Math.round(wh*10)/10).replace(".",",")+' de '+goal+' h</span></div><div class="track"><span class="fill'+(wp>=1?" ok":"")+'" style="display:block;width:'+Math.round(wp*100)+'%"></span></div><div class="cfgrow"><label for="wgoal">Minha meta semanal</label><select id="wgoal">'+[8,10,12,15,20,25].map(v=>'<option value="'+v+'"'+(v===goal?" selected":"")+'>'+v+' horas</option>').join("")+'</select></div><p class="muted small">Conta as tarefas concluídas nesta semana e o tempo do cronômetro.</p></section>';
 const nx=M.find(m=>!m[2]), mchip=m=>'<span class="mchip'+(m[2]?" on":"")+'" title="'+esc(m[1])+'"><span aria-hidden="true">'+(m[2]?"★":"☆")+'</span>'+esc(m[0])+'</span>';
 h+='<section class="panel"><div class="dayhead"><h3>Medalhas</h3><span class="pill num">'+got+'/'+M.length+'</span></div>'+(got?'<div class="mchips">'+M.filter(m=>m[2]).map(mchip).join("")+'</div>':'')+(nx?'<p class="small"><strong>Próxima:</strong> '+esc(nx[0])+' · <span class="muted">'+esc(nx[1])+'</span></p>':'<p class="small">Todas conquistadas.</p>')+'<details class="acc" data-k="medall"><summary><span class="muted small">Ver todas as medalhas</span><span class="chev">›</span></summary><div class="mchips">'+M.map(mchip).join("")+'</div></details></section>';
 return h;
}

/* ---------- 7. Desafio de SQL no próprio app (inspirado em SQLBolt e StrataScratch) ---------- */
const SQL_V="1.10.3", SQL_CDN="https://cdnjs.cloudflare.com/ajax/libs/sql.js/"+SQL_V+"/";
let SQ={db:null,st:"off",i:null,txt:{},res:null,err:"",ans:false};
function sqLoad(){ if(SQ.st==="ok"||SQ.st==="load") return; SQ.st="load";
 const go=()=>window.initSqlJs({locateFile:f=>SQL_CDN+f}).then(S=>{SQ.db=new S.Database();SQ.db.run(SQL_DB);SQ.st="ok";rerenderSql();}).catch(()=>{SQ.st="err";rerenderSql();});
 if(window.initSqlJs) return go(); const s=document.createElement("script"); s.src=SQL_CDN+"sql-wasm.js"; s.onload=go; s.onerror=()=>{SQ.st="err";rerenderSql();}; document.head.appendChild(s); }
function rerenderSql(){ if(current==="rev"&&revSeg==="sql") rerenderKeep(); }
function sqDay(){ return (diff("2026-01-01",todayS())%SQLC.length+SQLC.length)%SQLC.length; }
function sqRun(q){ const r=SQ.db.exec(q); return r.length?r[r.length-1]:{columns:[],values:[]}; }
const sqNorm=(r,ord)=>{ const rows=r.values.map(v=>JSON.stringify(v.map(x=>typeof x==="number"?Math.round(x*100)/100:x))); return JSON.stringify(ord?rows:rows.sort()); };
function sqTable(r){ if(!r.columns.length) return '<p class="muted small">Sem resultado.</p>'; return '<div class="sqout"><table><thead><tr>'+r.columns.map(c=>'<th>'+esc(c)+'</th>').join("")+'</tr></thead><tbody>'+r.values.slice(0,50).map(v=>'<tr>'+v.map(x=>'<td>'+esc(x===null?"NULL":x)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>'+(r.values.length>50?'<p class="muted small">Mostrando 50 de '+r.values.length+' linhas.</p>':""); }
function vSql(){
 if(SQ.i===null) SQ.i=sqDay(); const c=SQLC[SQ.i], solved=ST.sqlc||{}, n=Object.keys(solved).length;
 let h='<section class="panel stack"><div class="dayhead"><h3>Desafio de SQL</h3><span class="pill pri num">'+n+'/'+SQLC.length+' resolvidos</span></div><p class="small">SQL de verdade, rodando no navegador, com uma base fictícia de compras e documentos parecida com a sua rotina. Um desafio por dia, ou escolha qualquer um.</p><div class="row" style="gap:6px;flex-wrap:wrap">'+SQLC.map((x,i)=>'<button type="button" class="chip'+(i===SQ.i?" on":"")+'" data-sq="'+i+'" title="'+esc(x[0])+'">'+(solved[i]?"✓ ":"")+(i+1)+'</button>').join("")+'</div></section>';
 if(SQ.st!=="ok"){ h+='<section class="panel"><p class="small">'+(SQ.st==="err"?'Não deu para carregar o SQL. Ele precisa de internet na primeira vez. <button class="btn ghost sm" type="button" id="sqRetry">Tentar de novo</button>':"Carregando o SQL…")+'</p></section>'; return h; }
 const txt=SQ.txt[SQ.i]!=null?SQ.txt[SQ.i]:"SELECT * FROM compras;";
 h+='<section class="panel stack"><div class="row" style="justify-content:space-between"><strong>'+(SQ.i+1)+'. '+esc(c[0])+(SQ.i===sqDay()?' <span class="pill pri">de hoje</span>':"")+'</strong>'+(solved[SQ.i]?'<span class="pill free">resolvido</span>':"")+'</div><p>'+esc(c[1])+'</p><textarea id="sqTxt" class="mono" rows="5" spellcheck="false" autocapitalize="off" autocomplete="off">'+esc(txt)+'</textarea><div class="row"><button class="btn" type="button" id="sqGo">▶ Executar</button><button class="btn ghost sm" type="button" id="sqAns">'+(SQ.ans?"Esconder resposta":"Ver uma resposta")+'</button>'+(SAMPLE?'<button class="btn ghost sm" type="button" id="sqTut">Pedir ajuda ao tutor</button>':"")+'</div>'+(SQ.ans?'<pre class="copybox">'+esc(c[2])+'</pre>':"")+(SQ.err?'<div class="note small" style="color:var(--bad)">'+esc(SQ.err)+'</div>':"")+(SQ.res?SQ.res.ok?'<div class="note small" style="color:var(--ok)"><strong>Certo!</strong> O resultado bate com o esperado.</div>':'<div class="note small">O resultado ainda não bate com o esperado. Confira as colunas, os filtros e '+(c[3]?"a ordem.":"os agrupamentos.")+'</div>':"")+(SQ.res?sqTable(SQ.res.r):"")+'</section>';
 h+='<section class="panel"><details class="acc" style="border:0;padding:0"><summary><h3>Tabelas da base</h3><span class="chev">›</span></summary><ul class="plain small"><li><strong>setores</strong>(id, nome)</li><li><strong>fornecedores</strong>(id, nome, uf)</li><li><strong>compras</strong>(id, item, fornecedor_id, setor_id, modalidade, valor, empenho, prazo, entrega)</li><li><strong>documentos</strong>(id, setor_id, tipo, recebido, prazo_dias, concluido)</li></ul><p class="muted small">Datas no formato AAAA-MM-DD. Para diferença de dias, use julianday(data1) - julianday(data2). É SQLite: os comandos básicos são os mesmos do curso de SQL.</p></details></section>';
 return h;
}
function wireSql(el){
 if(SQ.st!=="ok") sqLoad();
 el.querySelectorAll("[data-sq]").forEach(b=>b.onclick=()=>{SQ.i=+b.dataset.sq;SQ.res=null;SQ.err="";SQ.ans=false;rerenderKeep();});
 const on=(id,f)=>{const b=el.querySelector("#"+id);if(b)b.onclick=f;};
 on("sqRetry",()=>{SQ.st="off";sqLoad();rerenderKeep();});
 const ta=el.querySelector("#sqTxt"); if(ta){ ta.oninput=()=>{SQ.txt[SQ.i]=ta.value;}; ta.onkeydown=e=>{if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){e.preventDefault();$("#sqGo").click();}}; }
 on("sqGo",()=>{ const q=ta.value; SQ.txt[SQ.i]=q; SQ.err=""; SQ.res=null; try{ const r=sqRun(q), c=SQLC[SQ.i], exp=sqRun(c[2]); const ok=sqNorm(r,c[3])===sqNorm(exp,c[3]); SQ.res={r,ok}; if(ok&&!(ST.sqlc||{})[SQ.i]){ST.sqlc=ST.sqlc||{};ST.sqlc[SQ.i]=todayS();changed();toast("Desafio resolvido! +15 XP");} }catch(e){ SQ.err="Erro: "+e.message; } rerenderKeep(); });
 on("sqAns",()=>{SQ.ans=!SQ.ans;rerenderKeep();});
 on("sqTut",()=>tutorAsk("erro","Estou fazendo este desafio de SQL (SQLite):\n"+SQLC[SQ.i][1]+"\nTabelas: setores(id,nome), fornecedores(id,nome,uf), compras(id,item,fornecedor_id,setor_id,modalidade,valor,empenho,prazo,entrega), documentos(id,setor_id,tipo,recebido,prazo_dias,concluido).\nMinha consulta:\n"+(ta?ta.value:"")+"\n"+(SQ.err?SQ.err:"O resultado não bate.")+"\nMe dê uma dica sem entregar a resposta."));
}

/* ---------- 8. Mapa visual da trilha (inspirado em roadmap.sh) ---------- */
function trMapHTML(){ const cur=trCur();
 return '<div class="trmap" role="list">'+TRILHA.map((f,i)=>{ const p=Math.round(trPct(f)*100), nm=f.n.split(" · "); return '<button type="button" role="listitem" class="trn'+(p===100?" ok":f===cur?" now":"")+'" data-trgo="'+f.id+'" style="--p:'+p+'"><span class="trr"><span class="num">'+p+'%</span></span><span class="trl"><span class="muted small">'+esc(nm[0])+'</span><strong>'+esc(nm[1]||"")+'</strong></span></button>'+(i<TRILHA.length-1?'<span class="tra" aria-hidden="true">›</span>':""); }).join("")+'</div>'; }

/* ---------- 9. Relatório mensal em PDF (inspirado em Toggl e Duolingo) ---------- */
let RP=null;
function rpData(ym){ const a=ym+"-01", d=parse(a); d.setMonth(d.getMonth()+1); d.setDate(0); const b=iso(d); let tasks=0,mins=0,tm=0,cards=0; const byK={}, days=new Set();
 for(const id in ST.done){const x=ST.done[id]; if(x<a||x>b) continue; const t=IDX[id]; if(!t) continue; tasks++; mins+=t.m; byK[t.k]=(byK[t.k]||0)+1; days.add(x);}
 for(let s=a;s<=b;s=addD(s,1)){tm+=(ST.log&&ST.log[s])||0; cards+=(ST.rv&&ST.rv[s])||0;}
 const cursos=COURSES.map(c=>{const ids=courseIds(c); const dm=ids.filter(id=>ST.done[id]&&ST.done[id]>=a&&ST.done[id]<=b).length; return {n:c.n,dm,tot:ids.length,all:ids.filter(isDone).length};}).filter(c=>c.dm);
 const certs=certList().filter(c=>c.d>=a&&c.d<=b), apps=apList().filter(p=>p.data>=a&&p.data<=b), sql=Object.values(ST.sqlc||{}).filter(x=>x>=a&&x<=b).length;
 return {a,b,tasks,mins,tm,cards,byK,days:days.size,cursos,certs,apps,sql}; }
function rpText(r){ const M=MES[parse(r.a).getMonth()]+"/"+r.a.slice(0,4);
 return "Relatório de estudos · "+M+"\n\n"+"Tarefas concluídas: "+r.tasks+" em "+r.days+" dias\nHoras de estudo planejado: "+hrs(r.mins)+" h · cronômetro: "+hrs(r.tm)+" h\nFlashcards revisados: "+r.cards+" · desafios de SQL: "+r.sql+"\n\nCursos com avanço:\n"+(r.cursos.map(c=>"• "+c.n+": +"+c.dm+" sessões ("+c.all+"/"+c.tot+")").join("\n")||"• nenhum")+"\n\nCertificados: "+(r.certs.map(c=>c.n).join("; ")||"nenhum")+"\nCandidaturas: "+r.apps.length; }
function rpOpen(ym){ RP=ym; const r=rpData(ym), M=MES[parse(r.a).getMonth()]+" de "+r.a.slice(0,4), lv=lvOf(xpOf().xp);
 let el=$("#report"); if(!el){el=document.createElement("div");el.id="report";document.body.appendChild(el);}
 el.innerHTML='<div class="rpbar noprint"><button class="btn" type="button" id="rpPrint">Salvar em PDF / imprimir</button><button class="btn ghost" type="button" id="rpCopy">Copiar texto</button><button class="btn ghost" type="button" id="rpX">Fechar</button></div><article class="rpdoc"><h1>Relatório de estudos</h1><p class="muted">'+M+' · Carreira em Dados · nível '+(lv.l+1)+' ('+esc(lv.n)+')</p><div class="rpgrid"><div><span class="k">Tarefas concluídas</span><b>'+r.tasks+'</b></div><div><span class="k">Dias com estudo</span><b>'+r.days+'</b></div><div><span class="k">Horas de estudo</span><b>'+hrs(r.mins)+' h</b></div><div><span class="k">Cronômetro</span><b>'+hrs(r.tm)+' h</b></div><div><span class="k">Flashcards</span><b>'+r.cards+'</b></div><div><span class="k">Desafios de SQL</span><b>'+r.sql+'</b></div></div><h2>Cursos com avanço</h2>'+(r.cursos.length?'<table><thead><tr><th>Curso</th><th>No mês</th><th>Total</th></tr></thead><tbody>'+r.cursos.map(c=>'<tr><td>'+esc(c.n)+'</td><td>+'+c.dm+' sessões</td><td>'+c.all+'/'+c.tot+'</td></tr>').join("")+'</tbody></table>':'<p>Nenhum curso avançou neste mês.</p>')+'<h2>Por área</h2><p>'+(Object.entries(r.byK).map(([k,n])=>esc(KINDS[k]||k)+": "+n).join(" · ")||"—")+'</p><h2>Certificados e candidaturas</h2><p>Certificados: '+(r.certs.map(c=>esc(c.n)).join("; ")||"nenhum")+'</p><p>Candidaturas enviadas: '+r.apps.length+'</p><p class="muted small">Gerado em '+fmtShort(todayS())+'/'+todayS().slice(0,4)+'.</p></article>';
 document.body.classList.add("printing");
 $("#rpPrint").onclick=()=>{try{window.print();}catch(e){toast("Não deu para imprimir aqui. Use Copiar texto.");}};
 $("#rpCopy").onclick=e=>copyText(rpText(r),e.currentTarget);
 $("#rpX").onclick=rpClose; }
function rpClose(){ RP=null; const el=$("#report"); if(el) el.remove(); document.body.classList.remove("printing"); }
function rpPanel(){ const t=todayS(), cur=t.slice(0,7), d=parse(cur+"-01"); d.setMonth(d.getMonth()-1); const prev=iso(d).slice(0,7);
 return '<section class="panel stack"><h3>Relatório mensal</h3><p class="small">Resumo do mês em PDF: horas, tarefas, cursos, certificados e candidaturas. Bom para acompanhar sua evolução e para mostrar constância numa entrevista.</p><div class="row"><button class="btn" type="button" data-rp="'+cur+'">Mês atual</button><button class="btn ghost" type="button" data-rp="'+prev+'">Mês passado</button></div></section>'; }

/* Progresso */
const QTR=[["q1","Dezembro a fevereiro","2026-12-07","2027-02-28"],["q2","Março a maio","2027-03-01","2027-05-31"],["q3","Junho a agosto","2027-06-01","2027-08-31"],["q4","Setembro a novembro","2027-09-01","2027-11-30"]];
function qtrOf(t){ return QTR.find(q=>t>=q[2]&&t<=q[3])||(t<QTR[0][2]?QTR[0]:QTR[QTR.length-1]); }
function qtrStats(q){ const t=todayS(), b=q[3]<t?q[3]:t; let pl=0,pd=0,dn=0,mi=0; const cs=new Set();
 for(const id in IDX){const x=IDX[id]; if(x.k==="folga") continue; if(x.date>=q[2]&&x.date<=b){pl++; if(isDone(id)) pd++;} const d=ST.done[id]; if(d&&d>=q[2]&&d<=q[3]){dn++;mi+=x.m; if(x.c&&COURSES.find(c=>c.id===x.c)&&COURSES.find(c=>c.id===x.c).s.every((_,i)=>isDone("c:"+x.c+":"+i))) cs.add(x.c);}}
 const ap=(typeof apList==="function"?apList():[]).filter(a=>(a.data||a.d||"")>=q[2]&&(a.data||a.d||"")<=q[3]).length;
 return {pl,pd,dn,mi,cs:cs.size,ap}; }
function qtrWin(t){ for(const q of QTR){ if(t>=addD(q[3],-14)&&t<=addD(q[3],10)) return q; } return null; }
function vQtr(){ const t=todayS(), qw=qtrWin(t);
 const old=QTR.filter(x=>(!qw||x[0]!==qw[0])&&(ST.qr||{})[x[0]]), oldH=old.map(x=>{const o=ST.qr[x[0]];return '<details class="acc"><summary><strong>'+esc(x[1])+'</strong><span class="chev">›</span></summary><div class="small stack"><p><strong>Deu certo:</strong> '+esc(o.a||"—")+'</p><p><strong>Travou:</strong> '+esc(o.b||"—")+'</p><p><strong>Ajustar:</strong> '+esc(o.c||"—")+'</p></div></details>';}).join("");
 if(!qw){ const nq=QTR.find(x=>addD(x[3],-14)>t); return '<section class="panel stack"><div class="dayhead"><h3>Revisão trimestral</h3>'+(nq?'<span class="pill num">abre em '+fmtShort(addD(nq[3],-14))+'</span>':'')+'</div><p class="muted small">No fim de cada trimestre aparece aqui um formulário curto: o que deu certo, o que travou e o que ajustar.</p>'+oldH+'</section>'; }
 const q=qw, r=qtrStats(q), Q=(ST.qr||{})[q[0]]||{};
 let h='<section class="panel stack"><div class="dayhead"><div><h4>Revisão trimestral</h4><h3>'+esc(q[1])+'</h3></div><span class="pill pri num">'+(r.pl?Math.round(r.pd/r.pl*100):100)+'% em dia</span></div><div class="grid g4"><div class="fact"><span class="k">Tarefas feitas</span><span class="big">'+r.dn+'</span></div><div class="fact"><span class="k">Horas</span><span class="big">'+hrs(r.mi)+' h</span></div><div class="fact"><span class="k">Cursos concluídos</span><span class="big">'+r.cs+'</span></div><div class="fact"><span class="k">Candidaturas</span><span class="big">'+r.ap+'</span></div></div><p class="small">No fim do trimestre (o app avisa), responda em poucas linhas. Releia na próxima revisão.</p>'
  +[["qa","O que deu certo",Q.a],["qb","O que travou",Q.b],["qc","O que vou ajustar no próximo trimestre",Q.c]].map(([id,l,v])=>'<label class="fl">'+l+'<textarea id="'+id+'">'+esc(v||"")+'</textarea></label>').join("")
  +'<div class="row"><button class="btn ghost sm" type="button" id="qSave">Salvar revisão</button>'+(Q.u?'<span class="muted small">salva em '+fmtShort(new Date(Q.u).toISOString().slice(0,10))+'</span>':"")+'</div>';
 return h+oldH+'</section>'; }
function vProg(){
 const st=stats(), t=todayS();
 const tmTot=Object.values(ST.log||{}).reduce((a,x)=>a+x,0), pr=projection(), L=apList(), sk=SKILLS.reduce((a,d)=>a+skPct(d)*d.w,0)/SKILLS.reduce((a,d)=>a+d.w,0), cardsSeen=Object.keys(ST.srs||{}).length;
 const f=(k,v,sub)=>'<div class="fact"><span class="k">'+k+'</span><span class="mid num">'+v+'</span>'+(sub?'<span class="muted small">'+sub+'</span>':'')+'</div>';
 let h='<section class="panel"><h2>Progresso</h2><div class="pgrid">'+f("Tarefas feitas",st.doneN,"de "+TOTAL_TASKS)+f("Horas estudadas",hrs(st.mins)+" h")+f("Sequência",st.streak+" dia"+(st.streak===1?"":"s"))+f("Em dia",(st.planned?Math.round(st.plannedDone/st.planned*100):100)+"%",st.plannedDone+"/"+st.planned+" até hoje")+f("Cronômetro",hrs(tmTot)+" h")+f("PL-300",Math.round(sk*100)+"%","prontidão")+f("Flashcards",cardsSeen,"de "+CARDS.length+" vistos")+f("Candidaturas",L.length,L.filter(p=>["ent","fin","prop"].includes(p.etapa)).length+" com entrevista")+'</div>'
  +(pr?'<p class="small">No ritmo das últimas 4 semanas ('+(Math.round(pr.rate*10)/10)+' sessões de curso por semana), a trilha de cursos termina por volta de <strong>'+fmt(pr.end)+'</strong>'+(pr.plan?(pr.end>pr.plan?', depois do planejado ('+fmtShort(pr.plan)+'). Se a diferença passar de 2 semanas, use "Reorganizar o plano" em Hoje.':', dentro do planejado ('+fmtShort(pr.plan)+').'):'.')+'</p>':'<p class="muted small">A previsão de término aparece depois das primeiras semanas de curso.</p>')+'</section>';
 if(t>=START){ const w0=mondayOf(t); h+=weekCard(weekStats(w0),weekStats(addD(w0,-7)),"Esta semana"); }
 h+=vMedals();
 h+='<section class="panel"><h3>Fases do cronograma</h3>'+pipeHTML()+'<details class="acc" data-k="pfases"><summary><span class="muted small">Metas de cada fase</span><span class="chev">›</span></summary>'+PHASES.map(p=>'<p class="small"><strong>'+esc(p.n)+'</strong> · '+fmtShort(p.a)+' a '+fmtShort(p.b)+' · '+esc(p.goal)+'</p>').join("")+'</details></section>';
 h+='<section class="panel"><h3>Por área</h3>'+Object.keys(KINDS).filter(k=>st.byK[k]).map(k=>{const x=st.byK[k];const p=Math.round(x.d/x.n*100);return '<div class="bar"><span class="kchip" style="--kc:var(--k-'+k+')">'+KINDS[k]+'</span><span class="track"><span class="fill" style="display:block;width:'+p+'%;background:var(--k-'+k+')"></span></span><span class="num small">'+x.d+'/'+x.n+'</span></div>';}).join("")+'</section>';
 let cells=""; for(let i=13;i>=0;i--){const s=addD(t,-i); let n=0; for(const id in ST.done) if(ST.done[id]===s) n++; cells+='<div class="hc '+(n>=4?"l3":n>=2?"l2":n>=1?"l1":"")+'" title="'+fmtShort(s)+': '+n+'">'+parse(s).getDate()+'</div>';}
 h+='<section class="panel"><h3>Últimos 14 dias</h3><div class="heat">'+cells+'</div><p class="muted small">Cada quadrado é um dia; quanto mais escuro, mais tarefas concluídas.</p><h3 style="margin-top:6px">Semanas: planejado x feito</h3>'+weeksChart(8)+'</section>';
 h+=vQtr();
 h+=rpPanel();
 h+='<section class="panel"><details class="acc" style="border:0;padding:0"><summary><h3>Todas as dicas de preparo ('+TIPS.length+')</h3><span class="chev">›</span></summary><div class="stack">'+TIPS.map(x=>'<p class="small"><strong>'+esc(x[0])+'.</strong> '+esc(x[1])+'</p>').join("")+'</div></details></section>';
 return h;
}
WIRES.prog=el=>{ const qs=el.querySelector("#qSave"); if(qs) qs.onclick=()=>{const q=qtrWin(todayS())||qtrOf(todayS()); ST.qr=Object.assign({},ST.qr||{}); ST.qr[q[0]]={a:el.querySelector("#qa").value.trim(),b:el.querySelector("#qb").value.trim(),c:el.querySelector("#qc").value.trim(),u:Date.now()}; changed(); rerenderKeep(); toast("Revisão do trimestre salva.");};
 const g=el.querySelector("#wgoal"); if(g) g.onchange=()=>{ST.cfg=Object.assign({},ST.cfg||{},{wgoal:+g.value});changed();rerenderKeep();}; el.querySelectorAll("[data-rp]").forEach(b=>b.onclick=()=>rpOpen(b.dataset.rp)); };
WIRES.config=el=>{
 wireCfg(el); wireSync(el);
 el.querySelectorAll("#thSeg button").forEach(b=>b.onclick=()=>{theme=b.dataset.v;try{localStorage.setItem(KEY+"-theme",theme);}catch(e){}applyTheme();rerenderKeep();});
 $("#bkGen").onclick=async()=>{const v="CD27:"+btoa(unescape(encodeURIComponent(JSON.stringify(ST))));$("#bkTxt").value=v;try{await navigator.clipboard.writeText(v);$("#bkMsg").textContent="Código gerado e copiado.";}catch(e){$("#bkTxt").select();$("#bkMsg").textContent="Código gerado. Selecione e copie.";}};
 $("#bkImp").onclick=()=>{try{const v=$("#bkTxt").value.trim();if(!v.startsWith("CD27:"))throw 0;const o=JSON.parse(decodeURIComponent(escape(atob(v.slice(5)))));if(!o||typeof o.done!=="object")throw 0;ST=Object.assign({done:{},custom:[],upd:0},o);changed();rebuild();rerenderKeep();toast("Progresso restaurado.");}catch(e){$("#bkMsg").textContent="Código inválido. Confira se copiou inteiro, começando por CD27:.";}};
 $("#rst").onclick=e=>{const b=e.currentTarget; if(!b.dataset.arm){b.dataset.arm="1";b.textContent="Toque de novo para confirmar";setTimeout(()=>{if(b.isConnected){delete b.dataset.arm;b.textContent="Apagar todo o progresso";}},4000);return;} ST={done:{},custom:[],upd:0};changed();rebuild();rerenderKeep();toast("Progresso apagado.");};
};

function enLvHTML(){ const v=cfg().enLv||""; return '<br><select id="enLv" aria-label="Nível no EF SET"><option value="">Nível no EF SET…</option>'+EN_LV.map(([k,n])=>'<option value="'+k+'"'+(v===k?" selected":"")+'>'+n+'</option>').join("")+'</select>'+(v?'<br><span class="small">Plano: '+esc(EN_PLAN[v])+'</span>':''); }
function pendHTML(){ const P=ST.pend||{}, op=PEND.filter(x=>!x.a&&!P[x.id]), dn=PEND.filter(x=>x.a||P[x.id]);
 const row=x=>(x.a||P[x.id])&&!(!x.a&&P[x.id])?'<div class="cfgrow"><span><strong>✓ '+esc(x.t)+'</strong><br><span class="muted small">'+esc(x.a)+'</span></span></div>':'<div class="cfgrow"><label for="pd-'+x.id+'"><strong>'+esc(x.t)+'</strong><br><span class="muted small">'+esc(x.h||x.a||"")+(x.u?' <a href="'+esc(x.u)+'" target="_blank" rel="noopener">Abrir</a>':"")+'</span>'+(x.lv?enLvHTML():"")+'</label><input type="checkbox" id="pd-'+x.id+'" data-pend="'+x.id+'"'+(P[x.id]?" checked":"")+'></div>';
 return '<section class="panel"><details class="acc" style="border:0;padding:0" data-k="pend"><summary><h3>Pendências do plano</h3><span class="row"><span class="pill '+(op.length?"bad":"free")+' num">'+(op.length?op.length+' em aberto':'em dia')+'</span><span class="chev">›</span></span></summary><p class="muted small">Informações que mudam datas, currículo ou orçamento. Marque quando resolver.</p>'
  +op.map(row).join("")+(dn.length?'<details class="acc" data-k="pend-ok"><summary><span class="muted small">Resolvidas ('+dn.length+')</span><span class="chev">›</span></summary>'+dn.map(row).join("")+'</details>':"")+'</details></section>'; }
function wirePend(el){
 { const lv=el.querySelector("#enLv"); if(lv) lv.onchange=()=>{ ST.cfg=Object.assign({},ST.cfg||{},{enLv:lv.value}); ST.pend=Object.assign({},ST.pend||{}); if(lv.value) ST.pend.ingles=ST.pend.ingles||todayS(); changed(); rebuild(); rerenderKeep(); toast(lv.value?"Inglês ajustado ao nível "+lv.value+".":"Nível apagado."); }; }
 el.querySelectorAll("[data-pend]").forEach(c=>c.onchange=()=>{ST.pend=Object.assign({},ST.pend||{});if(c.checked)ST.pend[c.dataset.pend]=todayS();else ST.pend[c.dataset.pend]="";changed();rerenderKeep();});
}
function vConfig(){
 const c=cfg(); const segH=(id,val,opts)=>'<div class="seg" role="tablist" id="'+id+'">'+opts.map(([k,n])=>'<button role="tab" type="button" data-v="'+k+'" aria-selected="'+(String(val)===k)+'">'+n+'</button>').join("")+'</div>';
 const ck=(id,on,lbl)=>'<div class="cfgrow"><label for="'+id+'">'+lbl+'</label><input type="checkbox" id="'+id+'"'+(on?" checked":"")+'></div>';
 let h='<section class="stack"><h2>Configurações</h2><p class="muted">Ajustes deste app. O progresso é salvo sozinho a cada tarefa marcada.</p></section>';
 h+=cfgSync();
 h+='<section class="panel"><h3>Rotina de estudo</h3><div class="cfgrow"><label for="cHF">Início nos dias úteis das férias (até 03/01)</label><input type="time" id="cHF" value="'+c.hf+'"></div><div class="cfgrow"><label for="cHM">Início nos dias úteis de meio expediente (04/01 a 10/02)</label><input type="time" id="cHM" value="'+c.hm+'"></div><div class="cfgrow"><label for="cH1">Início nos dias úteis, do Carnaval até a baixa</label><input type="time" id="cH1" value="'+c.h1+'"></div><div class="cfgrow"><label for="cH2">Início nos dias úteis, depois da baixa</label><input type="time" id="cH2" value="'+c.h2+'"></div><div class="cfgrow"><label for="cHW">Início no sábado e no domingo</label><input type="time" id="cHW" value="'+c.hw+'"></div><p class="muted small">Hoje e Agenda mostram o horário de cada tarefa a partir daqui, com pausa de 10 min entre elas.</p></section>';
 h+='<section class="panel"><h3>Data da baixa</h3><div class="cfgrow"><label for="cBx">Último dia de serviço</label><input type="date" id="cBx" min="2027-01-04" max="2027-06-30" value="'+c.baixa+'"></div><p class="muted small">Confirme com a Seção de Pessoal. Mudar a data muda o ritmo do cronograma (militar para civil), os marcos da saída e a contagem do topo. O que você já marcou continua marcado. A Google Agenda não muda sozinha: peça o ajuste na conversa.</p></section>';
 h+='<section class="panel"><h3>O que entra no cronograma</h3>'+ck("cEng",c.eng,"Inglês (30 min)")+ck("cSql",c.sql,"Desafio SQL (20 min)")+ck("cPost",c.post,"Post semanal no LinkedIn")+'<p class="muted small">Cursos, projetos, perfil profissional e candidaturas ficam sempre.</p></section>';
 h+='<section class="panel"><h3>Cronômetro e revisões</h3><div class="cfgrow"><label for="cFoc">Foco e pausa</label><select id="cFoc">'+[["50/10","50 + 10 min"],["45/15","45 + 15 min"],["25/5","25 + 5 min (pomodoro)"]].map(([v,n])=>'<option value="'+v+'"'+((c.foc||50)+"/"+(c.brk||10)===v?" selected":"")+'>'+n+'</option>').join("")+'</select></div>'+ck("cBeep",c.beep!==false,"Bipe e vibração ao fim de cada etapa")+'<div class="cfgrow"><label for="cNew">Flashcards novos por dia</label><select id="cNew">'+[5,10,15,20].map(v=>'<option'+((+c.newc||10)===v?" selected":"")+'>'+v+'</option>').join("")+'</select></div>'+ck("cAll",!!c.allDecks,"Liberar todos os baralhos (sem esperar o curso começar)")+'<p class="muted small">O cronômetro marca a tarefa como feita quando você completa os minutos dela. O tempo de foco aparece em Progresso.</p></section>';
 h+=pushPanel();
 if(c.rp) h+='<section class="panel"><h3>Reorganização do plano</h3><p class="small">O plano foi reorganizado em '+fmt(c.rp)+': o que estava atrasado foi para a frente.</p><div class="row"><button class="btn ghost sm" id="rpUndo" type="button">Desfazer reorganização</button></div></section>';
 h+='<section class="panel"><h3>Tela inicial</h3>'+segH("homeSeg",c.home,[["hoje","Hoje"],["agenda","Agenda"],["last","Última aba aberta"]])+'</section>';
 h+='<section class="panel"><h3>Lembretes</h3><p class="small">Os avisos chegam pela sua Google Agenda (a conta do Gmail sincronizada na conversa): 30 min antes de cada bloco de estudo e na véspera dos marcos. Para mudar os horários lá, peça na conversa.</p></section>';
 h+='<section class="panel"><h3>Aparência</h3><span class="muted small">Tema</span>'+segH("thSeg",theme,[["auto","Automático"],["light","Claro"],["dark","Escuro"]])+'<span class="muted small">Tamanho da letra</span>'+segH("fzSeg",String(fz),[["0.92","92%"],["1","100%"],["1.12","112%"],["1.25","125%"],["1.4","140%"]])+'<p class="muted small">Tema e letra valem só para este aparelho.</p></section>';
 h+='<section class="panel"><h3>Backup manual</h3><p class="muted small">Cópia do progresso por código, para guardar ou passar para outro aparelho. A importação substitui o progresso deste aparelho.</p><textarea id="bkTxt" aria-label="Código de backup" placeholder="Cole aqui o código de backup"></textarea><div class="row"><button class="btn ghost sm" id="bkGen" type="button">Gerar e copiar</button><button class="btn sm" id="bkImp" type="button">Importar código</button></div><p class="small muted" id="bkMsg" role="status"></p></section>';
 h+='<section class="panel"><h3>Zerar progresso</h3><p class="muted small">Apaga as tarefas marcadas, os cursos cadastrados e os ajustes, neste aparelho e na sua conta.</p><div class="row"><button class="btn warn sm" id="rst" type="button">Apagar todo o progresso</button></div></section>';
 h+='<section class="panel"><h3>Sobre</h3><p class="small">Versão '+APP_V+' · '+TOTAL_TASKS+' tarefas de 07/12/2026 a '+fmt(lastDay())+'. Plano completo, até CDO: <a href="https://claude.ai/artifact/8hv4yXAzjq8wiUcX57jfv5" target="_blank" rel="noopener">Trilha até CDO</a>.</p></section>';
 return h;
}
function setCfg(k,v){ST.cfg=Object.assign({},ST.cfg||{},{[k]:v});changed();}
function wireCfg(el){
 const fo=$("#cFoc"); if(fo) fo.onchange=e=>{const [f,b]=e.target.value.split("/").map(Number);ST.cfg=Object.assign({},ST.cfg||{},{foc:f,brk:b});changed();toast("Cronômetro: "+f+" + "+b+" min.");};
 const be=$("#cBeep"); if(be) be.onchange=e=>setCfg("beep",e.target.checked);
 const nw=$("#cNew"); if(nw) nw.onchange=e=>{setCfg("newc",+e.target.value);toast("Até "+e.target.value+" cards novos por dia.");};
 const al=$("#cAll"); if(al) al.onchange=e=>{setCfg("allDecks",e.target.checked);toast(e.target.checked?"Todos os baralhos liberados.":"Baralhos seguem o andamento dos cursos.");};
 const ru=$("#rpUndo"); if(ru) ru.onclick=replanUndo;
 const pm=$("#cPm"); if(pm) pm.onchange=e=>{setCfg("pmin",+e.target.value);pushSync(true);};
 const po=$("#pushOnB"); if(po) po.onclick=pushOn; const pf=$("#pushOffB"); if(pf) pf.onclick=pushOff;
 const pt=$("#pushTest"); if(pt) pt.onclick=async()=>{try{const r=await navigator.serviceWorker.ready;r.showNotification("Teste · Carreira em Dados",{body:"As notificações estão funcionando.",icon:"icons/icon-192.png"});}catch(e){toast("Não deu para mostrar o teste.");}};
 [["cHF","hf"],["cHM","hm"],["cH1","h1"],["cH2","h2"],["cHW","hw"]].forEach(([id,k])=>{$("#"+id).onchange=e=>{if(!e.target.value)return;setCfg(k,e.target.value);TCACHE={};toast("Horário salvo.");};});
 $("#cBx").onchange=e=>{const v=e.target.value; if(!v||v<"2027-01-04"||v>"2027-06-30"){toast("Escolha uma data entre 04/01 e 30/06/2027.");return;} setCfg("baixa",v);rebuild();refreshHeader();toast("Cronograma recalculado para a baixa em "+fmtShort(v)+".");};
 [["cEng","eng"],["cSql","sql"],["cPost","post"]].forEach(([id,k])=>{$("#"+id).onchange=e=>{setCfg(k,e.target.checked);rebuild();toast(e.target.checked?"Incluído no cronograma.":"Retirado do cronograma.");};});
 el.querySelectorAll("#homeSeg button").forEach(b=>b.onclick=()=>{setCfg("home",b.dataset.v);rerenderKeep();toast("Tela inicial salva.");});
 el.querySelectorAll("#fzSeg button").forEach(b=>b.onclick=()=>{fz=+b.dataset.v;try{localStorage.setItem(KEY+"-fz",fz);}catch(e){}applyFz();rerenderKeep();});
}

/* ================= v4: CRONÔMETRO DE FOCO (50 + 10) ================= */
/* Estado só deste aparelho (localStorage); o tempo de foco vai para ST.log[dia] e sincroniza.
   Ao completar os minutos da tarefa, o cronômetro marca a tarefa como feita. */
const TMK=KEY+"-tm";
let TM=null; try{TM=JSON.parse(localStorage.getItem(TMK)||"null");}catch(e){}
function tmSave(){try{TM?localStorage.setItem(TMK,JSON.stringify(TM)):localStorage.removeItem(TMK);}catch(e){}}
const tmFoc=()=>(+cfg().foc||50)*60, tmBrk=()=>(+cfg().brk||10)*60;
function tmTask(){return TM&&(IDX[TM.id]||{t:TM.t||"Estudo livre",m:TM.m||50});}
function tmElapsed(){if(!TM) return 0; return Math.floor(((TM.paused?TM.paused:Date.now())-TM.t0)/1000);}
function tmPhaseLen(){if(!TM) return 0; if(TM.ph==="brk") return tmBrk(); const left=TM.target-TM.acc; return Math.max(1,Math.min(tmFoc(),left));}
function tmStart(id){
 if(TM&&TM.ph==="foc"&&!TM.paused) tmLogFocus();
 const t=IDX[id]; TM={id,t:t?t.t:"Estudo livre",m:t?t.m:50,ph:"foc",t0:Date.now(),acc:0,target:(t?t.m:50)*60,paused:0};
 tmSave(); tmEnsureUI(); sndAuto(true); toast("Cronômetro iniciado: "+(+cfg().foc||50)+" min de foco.");
}
function tmLog(sec){const m=Math.round(sec/60); if(m<1) return; const d=todayS(); ST.log=ST.log||{}; ST.log[d]=(ST.log[d]||0)+m; changed();}
function tmLogFocus(){ if(!TM||TM.ph!=="foc") return; const e=Math.min(tmElapsed(),tmPhaseLen()); TM.acc+=e; tmLog(e); }
function tmPause(){ if(!TM) return; if(TM.paused){TM.t0+=Date.now()-TM.paused;TM.paused=0;sndAuto(TM.ph==="foc");} else {TM.paused=Date.now();sndAuto(false);} tmSave(); tmRender(); }
function tmStop(){ if(!TM) return; if(!TM.paused||TM.ph==="foc") tmLogFocus(); TM=null; tmSave(); sndAuto(false); tmRender(); }
function tmFinishTask(){ const id=TM&&TM.id; if(id&&IDX[id]&&!isDone(id)){ ST.done[id]=todayS(); changed(); toastUndo("Tarefa concluída pelo cronômetro.",()=>{delete ST.done[id];changed();rerenderKeep();}); if(["hoje","agenda","prog"].includes(current)) rerenderKeep(); } }
function tmTick(){
 if(!TM){tmRender();return;}
 if(TM.paused){tmRender();return;}
 const len=tmPhaseLen(), e=tmElapsed();
 if(e>=len){
  if(TM.ph==="foc"){
   TM.acc+=len; tmLog(len);
   if(TM.acc>=TM.target){ tmFinishTask(); tmAlert("Tarefa concluída","Hora da pausa de "+(+cfg().brk||10)+" min. Levante, beba água."); TM.ph="brk"; TM.t0=Date.now(); TM.done=1; sndAuto(false); }
   else { tmAlert("Pausa de "+(+cfg().brk||10)+" min","Você fez "+Math.round(TM.acc/60)+" de "+Math.round(TM.target/60)+" min desta tarefa."); TM.ph="brk"; TM.t0=Date.now(); sndAuto(false); }
  } else {
   if(TM.done){ tmAlert("Pausa encerrada","Abra a próxima tarefa de hoje e toque em ▶."); TM=null; }
   else { tmAlert("Voltar ao foco","Mais "+Math.round(Math.min(tmFoc(),TM.target-TM.acc)/60)+" min de foco."); TM.ph="foc"; TM.t0=Date.now(); sndAuto(true); }
  }
  tmSave();
 }
 tmRender();
}
function beep(){ try{const A=window.AudioContext||window.webkitAudioContext; const c=sndCtx()||new A(); [0,0.25,0.5].forEach(d=>{const o=c.createOscillator(),g=c.createGain(); o.frequency.value=880; g.gain.setValueAtTime(0.0001,c.currentTime+d); g.gain.exponentialRampToValueAtTime(0.25,c.currentTime+d+0.02); g.gain.exponentialRampToValueAtTime(0.0001,c.currentTime+d+0.2); o.connect(g).connect(c.destination); o.start(c.currentTime+d); o.stop(c.currentTime+d+0.22);}); }catch(e){} }
async function tmAlert(title,body){
 if(cfg().beep!==false) beep();
 if(navigator.vibrate) try{navigator.vibrate([200,100,200]);}catch(e){}
 toast(title+". "+body);
 try{ if(document.visibilityState!=="visible"&&"Notification" in window&&Notification.permission==="granted"){ const r=navigator.serviceWorker&&await navigator.serviceWorker.getRegistration(); if(r) r.showNotification(title,{body,icon:"icons/icon-192.png",tag:"cd-tm"}); else new Notification(title,{body}); } }catch(e){}
}
function tmEnsureUI(){ if($("#tmbar")) return; const d=document.createElement("div"); d.id="tmbar"; d.setAttribute("role","region"); d.setAttribute("aria-label","Cronômetro"); document.body.appendChild(d); tmRender(); }
function tmRender(){
 const el=$("#tmbar"); if(!TM){ if(el) el.remove(); document.body.classList.remove("hastm"); return; }
 if(!el){tmEnsureUI();return;}
 document.body.classList.add("hastm");
 const len=tmPhaseLen(), left=Math.max(0,len-tmElapsed()), mm=Math.floor(left/60), ss=left%60;
 const tot=TM.target, doneS=TM.acc+(TM.ph==="foc"?Math.min(tmElapsed(),len):0);
 const lbl=TM.ph==="foc"?"Foco":"Pausa";
 const html='<div class="tmi"><span class="tmph '+TM.ph+'">'+lbl+(TM.paused?" · pausado":"")+'</span><span class="tmt" title="'+esc(TM.t)+'">'+esc(TM.t)+'</span><span class="track tmtr"><span class="fill" style="display:block;width:'+Math.min(100,Math.round(doneS/tot*100))+'%"></span></span></div><span class="tmc num">'+pad(mm)+":"+pad(ss)+'</span><div class="tmb"><button type="button" class="btn ghost sm" id="tmP" aria-label="'+(TM.paused?"Continuar":"Pausar")+'">'+(TM.paused?"▶":"❚❚")+'</button><button type="button" class="btn ghost sm" id="tmS" aria-label="Som para concentrar" aria-pressed="'+(SND.on?"true":"false")+'">♪</button><button type="button" class="btn ghost sm" id="tmX" aria-label="Parar">■</button></div>';
 if(el.dataset.k!==TM.ph+TM.paused+TM.id+SND.on){ el.innerHTML=html; el.dataset.k=TM.ph+TM.paused+TM.id+SND.on; $("#tmP").onclick=tmPause; $("#tmX").onclick=tmStop; $("#tmS").onclick=()=>{sndToggle();el.dataset.k="";tmRender();}; }
 else { el.querySelector(".tmc").textContent=pad(mm)+":"+pad(ss); el.querySelector(".tmtr .fill").style.width=Math.min(100,Math.round(doneS/tot*100))+"%"; }
 try{document.title=(TM.paused?"❚❚ ":"")+pad(mm)+":"+pad(ss)+" · "+lbl;}catch(e){}
}
setInterval(tmTick,1000);
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible") tmTick();});

/* toast com Desfazer */
function toastUndo(m,undo){const t=$("#toast");t.innerHTML='<span>'+esc(m)+'</span> <button type="button" class="linkbtn" id="tUndo">Desfazer</button>';t.classList.add("on");$("#tUndo").onclick=()=>{undo();t.classList.remove("on");};clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),6000);}

/* ================= v4: SONS PARA CONCENTRAR (gerados no aparelho) ================= */
/* ===== Sons para concentrar: mesma ideia do app da Transpetro (gerados aqui, tocam num <audio>, seguem nas outras telas) ===== */
const SNDK=KEY+"-snd";
const SND_SR=22050, SND_CACHE={};
const SND={k:null,last:"brown",auto:false,duck:false,on:false,ctx:null};
try{const o=JSON.parse(localStorage.getItem(SNDK)||"{}");if(o.k||o.kind)SND.last=o.k||o.kind;if(o.auto!=null)SND.auto=o.auto;}catch(e){}
function sndStore(){try{localStorage.setItem(SNDK,JSON.stringify({k:SND.k||SND.last,auto:SND.auto}));}catch(e){}}
function sndCtx(){return SND.ctx;}
function wavBlob(chs,sr){
 const n=chs[0].length,nc=chs.length,buf=new ArrayBuffer(44+n*nc*2),v=new DataView(buf),w=(o,t)=>{for(let i=0;i<t.length;i++)v.setUint8(o+i,t.charCodeAt(i));};
 w(0,"RIFF");v.setUint32(4,36+n*nc*2,true);w(8,"WAVE");w(12,"fmt ");v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,nc,true);
 v.setUint32(24,sr,true);v.setUint32(28,sr*nc*2,true);v.setUint16(32,nc*2,true);v.setUint16(34,16,true);w(36,"data");v.setUint32(40,n*nc*2,true);
 let o=44;for(let i=0;i<n;i++)for(let c=0;c<nc;c++){const x=Math.max(-1,Math.min(1,chs[c][i]));v.setInt16(o,x<0?x*32768:x*32767,true);o+=2;}
 return new Blob([buf],{type:"audio/wav"});
}
function noiseCh(kind,n){
 const out=new Float32Array(n);let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0,last=0;
 for(let i=0;i<n;i++){const wn=Math.random()*2-1;
  if(kind==="white") out[i]=wn*.22;
  else if(kind==="pink"){b0=.99886*b0+wn*.0555179;b1=.99332*b1+wn*.0750759;b2=.969*b2+wn*.153852;b3=.8665*b3+wn*.3104856;b4=.55*b4+wn*.5329522;b5=-.7616*b5-wn*.016898;out[i]=(b0+b1+b2+b3+b4+b5+b6+wn*.5362)*.06;b6=wn*.115926;}
  else {last=(last+.02*wn)/1.02;out[i]=last*2.8;}
 }
 return out;
}
function loopFix(x,n,f){const o=new Float32Array(n);o.set(x.subarray(0,n));for(let i=0;i<f;i++){const t=i/f;o[i]=x[i]*Math.sqrt(t)+x[n+i]*Math.sqrt(1-t);}return o;}
function sndNoise(kind,sec){const n=SND_SR*sec,f=SND_SR;return [0,1].map(()=>loopFix(noiseCh(kind,n+f),n,f));}
function sndRain(sec){
 const n=SND_SR*sec,f=SND_SR,ch=[0,1].map(()=>{const p=noiseCh("pink",n+f),b=noiseCh("brown",n+f),o=new Float32Array(n+f);let lp=0;for(let i=0;i<n+f;i++){lp+=.08*(p[i]-lp);o[i]=(p[i]-lp)*1.3+b[i]*.12;}return o;});
 for(let d=0;d<sec*28;d++){const at=Math.floor(Math.random()*(n-800)),len=40+Math.floor(Math.random()*220),amp=.05+Math.random()*.18,pan=Math.random();
  for(let i=0;i<len;i++){const v=(Math.random()*2-1)*amp*Math.exp(-i/(len/4));ch[0][at+i]+=v*(1-pan);ch[1][at+i]+=v*pan;}}
 return ch.map(x=>loopFix(x,n,f));
}
function sndWaves(sec){
 const n=SND_SR*sec;return [0,1].map(c=>{const x=loopFix(noiseCh("brown",n+SND_SR),n,SND_SR),y=loopFix(noiseCh("pink",n+SND_SR),n,SND_SR),o=new Float32Array(n);
  for(let i=0;i<n;i++){const t=i/SND_SR+c*.35,e=Math.pow(.5-.5*Math.cos(2*Math.PI*t/8),1.6);o[i]=x[i]*(.35+.9*e)+y[i]*(.15+.9*e*e);}return o;});
}
const nf=m=>440*Math.pow(2,(m-69)/12);
async function sndPad(sec){
 const oc=new OfflineAudioContext(2,SND_SR*sec,SND_SR), lp=oc.createBiquadFilter();lp.type="lowpass";lp.frequency.value=950;lp.Q.value=.3;
 const master=oc.createGain();master.gain.value=.16;lp.connect(master);master.connect(oc.destination);
 const CH=[[57,60,64,67],[53,57,60,64],[48,52,55,59],[55,59,62,64]], L8=sec/4;
 const play=(notes,t0,t1,fadeIn)=>notes.forEach((m,j)=>[-4,4].forEach(dt=>{const o=oc.createOscillator(),g=oc.createGain(),pn=oc.createStereoPanner?oc.createStereoPanner():null;
  o.type="triangle";o.frequency.value=nf(m);o.detune.value=dt;g.gain.setValueAtTime(fadeIn?0:.22,Math.max(0,t0));if(fadeIn)g.gain.linearRampToValueAtTime(.22,t0+2.5);
  g.gain.setValueAtTime(.22,t1-2.5);g.gain.linearRampToValueAtTime(0,t1);o.connect(g);if(pn){pn.pan.value=(j-1.5)/3;g.connect(pn);pn.connect(lp);}else g.connect(lp);o.start(Math.max(0,t0));o.stop(t1);}));
 CH.forEach((c,i)=>{play(c,i*L8,(i+1)*L8+2.5,true);const bo=oc.createOscillator(),bg=oc.createGain();bo.type="sine";bo.frequency.value=nf(c[0]-12);bg.gain.setValueAtTime(0,i*L8);bg.gain.linearRampToValueAtTime(.35,i*L8+1.5);bg.gain.setValueAtTime(.35,(i+1)*L8-1);bg.gain.linearRampToValueAtTime(0,(i+1)*L8+1);bo.connect(bg);bg.connect(master);bo.start(i*L8);bo.stop((i+1)*L8+1.2);});
 play(CH[3],-L8,2.5,false);
 const buf=await oc.startRendering(), hiss=[noiseCh("pink",buf.length),noiseCh("pink",buf.length)];
 return [0,1].map(c=>{const x=buf.getChannelData(c);for(let i=0;i<x.length;i++)x[i]+=hiss[c][i]*.025;return x;});
}
async function sndPiano(sec){
 const oc=new OfflineAudioContext(2,SND_SR*sec,SND_SR), master=oc.createGain();master.gain.value=.5;
 const dl=oc.createDelay(1),fb=oc.createGain(),wet=oc.createGain();dl.delayTime.value=.42;fb.gain.value=.38;wet.gain.value=.35;
 master.connect(oc.destination);master.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(wet);wet.connect(oc.destination);
 const sc=[57,60,62,64,67,69,72,74,76], seq=[];let t=.3;
 while(t<sec-4){seq.push([t,sc[Math.floor(Math.random()*sc.length)]]);if(Math.random()<.3)seq.push([t+.02,sc[Math.floor(Math.random()*4)]-12]);t+=.7+Math.random()*1.6;}
 seq.forEach(([t0,m])=>[1,2,3].forEach((h,k)=>{const o=oc.createOscillator(),g=oc.createGain();o.type="sine";o.frequency.value=nf(m)*h;const a=[.28,.08,.03][k];
  g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(a,t0+.01);g.gain.exponentialRampToValueAtTime(.0005,t0+2.8/h);o.connect(g);g.connect(master);o.start(t0);o.stop(t0+3);}));
 const buf=await oc.startRendering();return [0,1].map(c=>buf.getChannelData(c));
}
async function sndUrl(k){
 if(SND_CACHE[k]) return SND_CACHE[k];
 await new Promise(r=>setTimeout(r,20));
 const ch=k==="rain"?sndRain(20):k==="waves"?sndWaves(24):k==="pad"?await sndPad(32):k==="piano"?await sndPiano(40):sndNoise(k,20);
 let sq=0,pk=0,n=0;ch.forEach(x=>{for(let i=0;i<x.length;i+=3){sq+=x[i]*x[i];n++;const a=Math.abs(x[i]);if(a>pk)pk=a;}});
 const g=Math.min(.09/Math.sqrt(sq/n||1e-9),.92/(pk||1));ch.forEach(x=>{for(let i=0;i<x.length;i++)x[i]*=g;});
 return SND_CACHE[k]=URL.createObjectURL(wavBlob(ch,SND_SR));
}
function sndEl(){let el=$("#sndEl");if(!el){el=document.createElement("audio");el.id="sndEl";el.loop=true;el.preload="auto";el.setAttribute("playsinline","");document.body.appendChild(el);
 el.addEventListener("pause",()=>{if(SND.k&&!SND.fading&&!SND.busy){SND.paused=SND.k;SND.k=null;SND.on=false;sndDrawAll();}});
 el.addEventListener("play",()=>{if(!SND.k&&SND.paused){SND.k=SND.paused;SND.paused=null;SND.on=true;sndDrawAll();}});}return el;}
let sndFadeT=null;
function sndVolTo(to,ms){const el=$("#sndEl");if(!el)return Promise.resolve();clearInterval(sndFadeT);const from=el.volume,t0=Date.now();
 return new Promise(res=>{if(!ms){try{el.volume=to;}catch(e){}res();return;}sndFadeT=setInterval(()=>{const k=Math.min(1,(Date.now()-t0)/ms);try{el.volume=from+(to-from)*k;}catch(e){}if(k>=1){clearInterval(sndFadeT);res();}},50);});}
function sndDuck(on){SND.duck=on;sndVolTo(on?.4:1,300);}
async function sndPlay(k){
 k=k||SND.last||"brown";
 if(SND.k===k){sndStop();return;}
 SND.k=k; SND.on=true; SND.busy=k; sndDrawAll();
 try{const url=await sndUrl(k); if(SND.k!==k) return; const el=sndEl(); el.src=url; SND.paused=null; try{el.volume=0;}catch(e){} await el.play(); sndVolTo(SND.duck?.4:1,1500); sndMedia();
 }catch(e){SND.k=null;SND.on=false;toast("Não deu para tocar. Toque de novo; confira se o aparelho não está no silencioso.");}
 SND.busy=null; SND.last=k; sndStore(); sndDrawAll(); auTimerArm();
}
function sndStop(fade){const el=$("#sndEl");SND.paused=null;
 if(el&&fade&&!el.paused){SND.fading=true;sndVolTo(0,typeof fade==="number"?fade:600).then(()=>{if(!SND.k)el.pause();SND.fading=false;});}else if(el){SND.fading=true;el.pause();SND.fading=false;}
 SND.k=null;SND.on=false;sndStore();sndDrawAll();}
function sndMedia(){
 if(!("mediaSession" in navigator)||(AU&&AU.play)||!SND.k) return;
 try{navigator.mediaSession.metadata=new MediaMetadata({title:SNDS.find(x=>x[0]===SND.k)[1],artist:"Sons para estudar · Carreira em Dados"});
  navigator.mediaSession.setActionHandler("play",()=>{sndEl().play().catch(()=>{});});
  navigator.mediaSession.setActionHandler("pause",()=>{const el=$("#sndEl");if(el)el.pause();});
  navigator.mediaSession.setActionHandler("nexttrack",()=>{const i=SNDS.findIndex(x=>x[0]===(SND.k||SND.last));sndPlay(SNDS[(i+1)%SNDS.length][0]);});
  navigator.mediaSession.setActionHandler("previoustrack",null);}catch(e){}
}
function sndDrawAll(){
 document.querySelectorAll(".sndbtn").forEach(b=>{const on=b.dataset.k===SND.k;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on);const st=b.querySelector(".sst");if(st)st.textContent=SND.busy===b.dataset.k?"preparando…":on?"tocando · toque para parar":"";});
 syncSndUI(); sndBar(); if(typeof tmRender==="function"&&TM) tmRender();
}
function sndBar(){
 let el=$("#sndBar"); const show=SND.k&&!(current==="rev"&&revSeg==="au");
 if(!show){if(el)el.remove();return;}
 if(!el){el=document.createElement("div");el.id="sndBar";document.body.appendChild(el);}
 el.innerHTML='<button type="button" class="sbname" id="sbGo">♪ '+esc(SNDS.find(x=>x[0]===SND.k)[1])+'</button><button type="button" class="sbx" id="sbX" aria-label="Parar o som">Parar</button>';
 $("#sbGo").onclick=()=>{revSeg="au";go("rev");}; $("#sbX").onclick=()=>sndStop();
}
function sndToggle(){ if(SND.k) sndStop(); else sndPlay(SND.last); }
function sndAuto(on){ if(!SND.auto) return; if(on&&!SND.k) sndPlay(SND.last); else if(!on&&SND.k) sndStop(800); }
function syncSndUI(){ document.querySelectorAll("[data-snd-on]").forEach(b=>{b.setAttribute("aria-pressed",SND.on?"true":"false");b.textContent=SND.on?"Parar som":"Tocar som";}); }

/* ================= v4: REVISÃO ESPAÇADA (FSRS, igual ao app da Transpetro) ================= */
const FW=[0.40255,1.18385,3.173,15.69105,7.1949,0.5345,1.4604,0.0046,1.54575,0.1192,1.01925,1.9395,0.11,0.29605,2.2698,0.2315,2.9898];
const FF=19/81, FDEC=-0.5;
const fClampD=d=>Math.min(10,Math.max(1,d));
const fD0=g=>fClampD(FW[4]-Math.exp(FW[5]*(g-1))+1);
function fNextD(d,g){const dd=d-FW[6]*(g-3)*(10-d)/9;return fClampD(FW[7]*fD0(4)+(1-FW[7])*dd);}
function fRet(t,s){return Math.pow(1+FF*t/s,FDEC);}
function fSucc(d,s,r,g){return s*(1+Math.exp(FW[8])*(11-d)*Math.pow(s,-FW[9])*(Math.exp(FW[10]*(1-r))-1)*(g===2?FW[15]:1)*(g===4?FW[16]:1));}
function fFail(d,s,r){return Math.min(s,FW[11]*Math.pow(d,-FW[12])*(Math.pow(s+1,FW[13])-1)*Math.exp(FW[14]*(1-r)));}
/* g: 1 De novo · 2 Difícil · 3 Bom · 4 Fácil */
function srsGrade(id,g){
 const t=todayS(); ST.srs=ST.srs||{}; let e=ST.srs[id];
 if(!e){ e={s:FW[g-1],dif:fD0(g),l:t,f:t}; }
 else { const el=Math.max(0,diff(e.l,t)), r=fRet(el,e.s); e.s=g===1?fFail(e.dif,e.s,r):fSucc(e.dif,e.s,r,g); e.dif=fNextD(e.dif,g); e.l=t; }
 e.s=Math.round(e.s*100)/100; e.dif=Math.round(e.dif*100)/100;
 e.d=g===1?t:addD(t,Math.max(1,Math.round(e.s)));
 ST.srs[id]=e; ST.rv=ST.rv||{}; ST.rv[t]=(ST.rv[t]||0)+1;
 changed();
}
function srsIv(id,g){const e=ST.srs&&ST.srs[id], t=todayS(); if(g===1) return "hoje"; let s; if(!e) s=FW[g-1]; else {const r=fRet(Math.max(0,diff(e.l,t)),e.s); s=fSucc(e.dif,e.s,r,g);} const d=Math.max(1,Math.round(s)); return d<30?d+" d":d<365?Math.round(d/30)+" m":Math.round(d/365*10)/10+" a";}
function deckOpen(k){ if(cfg().allDecks) return true; const t=todayS(); return DECKS[k].c.some(cid=>{const c=COURSES.find(x=>x.id===cid); if(!c) return false; const id0="c:"+cid+":0"; return isDone(id0)||(IDX[id0]&&IDX[id0].date<=t);}); }
function srsQueue(deck){
 const t=todayS(), S=ST.srs||{};
 const pool=CARDS.filter(c=>(deck==="all"?deckOpen(c[0]):c[0]===deck));
 const due=pool.filter(c=>S[c.id]&&S[c.id].d<=t).sort((a,b)=>S[a.id].d<S[b.id].d?-1:1);
 const newToday=Object.values(S).filter(e=>e.f===t).length;
 const lim=Math.max(0,(+cfg().newc||10)-newToday);
 const fresh=pool.filter(c=>!S[c.id]).slice(0,lim);
 return {due,fresh,all:due.concat(fresh)};
}
function srsCounts(){ const q=srsQueue("all"); return {due:q.due.length,fresh:q.fresh.length}; }

/* ================= v4: REORGANIZAR QUANDO ATRASAR ================= */
function behindN(){ const t=todayS(); let n=0; for(let s=START;s<t;s=addD(s,1)) (SCHED[s]||[]).forEach(x=>{ if(/^[cpb]:/.test(x.id)&&!isDone(x.id)) n++; }); return n; }
function replan(){
 const c=cfg(), t=todayS();
 ST.cfg=Object.assign({},ST.cfg||{},{rpPrev:c.rp||"",rp:t});
 changed(); rebuild();
 const last=lastDay();
 toast("Pronto: o que ficou para trás foi redistribuído a partir de hoje."+(last>END?" O plano agora vai até "+fmtShort(last)+".":""));
 rerenderKeep();
}
function replanUndo(){ const c=cfg(); ST.cfg=Object.assign({},ST.cfg||{},{rp:c.rpPrev||"",rpPrev:""}); changed(); rebuild(); rerenderKeep(); toast("Reorganização desfeita."); }
function lastDay(){ const ks=Object.keys(SCHED); return ks.length?ks.sort()[ks.length-1]:END; }

/* ================= v4: RESUMO SEMANAL E ESTATÍSTICAS ================= */
function weekStats(a){
 const b=addD(a,6), t=todayS(); let planned=0,pd=0,done=0,mins=0,cand=0,cards=0,tm=0; const byK={};
 for(let s=a;s<=b;s=addD(s,1)){
  (SCHED[s]||[]).forEach(x=>{ if(x.k==="folga")return; if(s<=t){planned++; if(isDone(x.id)) pd++;} });
  tm+=(ST.log&&ST.log[s])||0; cards+=(ST.rv&&ST.rv[s])||0;
 }
 for(const id in ST.done){ const d=ST.done[id]; if(d<a||d>b) continue; done++; const x=IDX[id]; if(x){mins+=x.m; byK[x.k]=(byK[x.k]||0)+1;} }
 Object.values(ST.apps||{}).forEach(p=>{ if(p.data>=a&&p.data<=b) cand++; });
 return {a,b,planned,pd,done,mins,cand,cards,tm,byK};
}
function weekCard(ws,prev,title){
 const pct=ws.planned?Math.round(ws.pd/ws.planned*100):0;
 const cmp=(v,p,u)=>p==null?"":'<span class="muted small">'+(v>p?"▲ ":v<p?"▼ ":"= ")+(v===p?"igual":Math.abs(v-p)+(u||""))+' vs semana anterior</span>';
 const best=Object.entries(ws.byK).sort((x,y)=>y[1]-x[1])[0];
 let msg;
 if(!ws.planned) msg="Semana sem tarefas no plano.";
 else if(todayS()<=ws.b&&diff(ws.a,todayS())<3&&pct<70) msg="Semana começando. Faça as tarefas de hoje; o balanço vale mais no fim da semana.";
 else if(pct>=90) msg="Semana excelente. Mantenha o ritmo e não acrescente coisas novas: constância vence intensidade.";
 else if(pct>=70) msg="Boa semana. Veja o que ficou pendente e escolha só o mais importante (curso ou projeto) para recuperar.";
 else if(pct>=40) msg="Semana pela metade. Se foi falta de tempo, use \"Reorganizar o plano\" em Hoje em vez de acumular.";
 else msg="Semana difícil. Sem culpa: reorganize o plano e recomece com o mínimo (uma tarefa por dia).";
 return '<section class="panel"><h4>'+title+' · '+fmtShort(ws.a)+' a '+fmtShort(ws.b)+'</h4><div class="grid g4"><div class="fact"><span class="k">Em dia</span><span class="big">'+pct+'%</span><span class="muted small num">'+ws.pd+'/'+ws.planned+' planejadas</span></div><div class="fact"><span class="k">Feitas</span><span class="big">'+ws.done+'</span>'+cmp(ws.done,prev&&prev.done)+'</div><div class="fact"><span class="k">Foco no cronômetro</span><span class="big">'+hrs(ws.tm)+' h</span>'+cmp(Math.round(ws.tm/6)/10,prev&&Math.round(prev.tm/6)/10," h")+'</div><div class="fact"><span class="k">Flashcards</span><span class="big">'+ws.cards+'</span>'+(ws.cand?'<span class="muted small">'+ws.cand+' candidatura'+(ws.cand>1?"s":"")+'</span>':"")+'</div></div><p class="small">'+esc(msg)+(best?' Área mais forte: '+KINDS[best[0]].toLowerCase()+'.':'')+'</p></section>';
}
function weeksChart(n){
 const t=todayS(); let m=mondayOf(t<START?START:t); const rows=[];
 for(let i=n-1;i>=0;i--){ const a=addD(m,-7*i); if(addD(a,6)<START) continue; rows.push(weekStats(a)); }
 if(!rows.length) return '<p class="muted small">O gráfico aparece a partir da primeira semana do plano.</p>';
 const mx=Math.max(1,...rows.map(r=>Math.max(r.planned,r.done)));
 return '<div class="wk">'+rows.map(r=>'<div class="wkr"><span class="small num">'+fmtShort(r.a)+'</span><span class="wkb"><span class="wkp" style="width:'+Math.round(r.planned/mx*100)+'%"></span><span class="wkd" style="width:'+Math.round(r.pd/mx*100)+'%"></span></span><span class="small num muted">'+r.pd+'/'+r.planned+'</span></div>').join("")+'</div><p class="muted small"><span class="lg lgd"></span> feitas no plano <span class="lg lgp"></span> planejadas</p>';
}
function projection(){
 const t=todayS(); const ids=MAINQ.filter(q=>q.k==="curso").map(q=>q.id); const left=ids.filter(id=>!isDone(id)).length;
 let n=0; const from=addD(t,-27); for(const id of ids){const d=ST.done[id]; if(d&&d>=from&&d<=t) n++;}
 const rate=n/4; if(t<START||rate<=0) return null;
 const weeks=left/rate, end=addD(t,Math.ceil(weeks*7)); const plan=IDX[ids[ids.length-1]]&&IDX[ids[ids.length-1]].date;
 return {left,rate,end,plan};
}

/* ================= v4: NOTIFICAÇÕES PUSH (versão instalável do GitHub) ================= */
const VAPID_PUB="BKi1rhDT9AgD0pBxEUEAbBgg3QQ7BsTD1T_G3ZMsg6oBK4SjLUHcgeSrwF7Ol1g4wT8i9Cj5kPZ3o-10VSsgSew";
const PUSH_K=KEY+"-push";
const PUSH_OK=!IN_CLAUDE&&location.protocol==="https:"&&"serviceWorker" in navigator&&"PushManager" in window&&"Notification" in window;
function pushGet(){try{return JSON.parse(localStorage.getItem(PUSH_K)||"null");}catch(e){return null;}}
function pushSet(o){try{o?localStorage.setItem(PUSH_K,JSON.stringify(o)):localStorage.removeItem(PUSH_K);}catch(e){}}
function pushPlan(){
 const out=[], now=Date.now(), before=+cfg().pmin||10, cc=srsCounts();
 for(let i=0;i<14;i++){
  const s=addD(todayS(),i), T=(SCHED[s]||[]).filter(x=>x.k!=="folga"); if(!T.length) continue;
  const pend=T.filter(x=>!isDone(x.id)); if(!pend.length) continue;
  const first=timeOf(pend[0].id).split("–")[0]; if(!first) continue;
  const [H,M]=first.split(":").map(Number); const d=parse(s); d.setHours(H,M-before,0,0); if(d.getTime()<=now) continue;
  const mins=pend.reduce((a,x)=>a+x.m,0);
  out.push({t:d.getTime(),ti:"Em "+before+" min: "+pend[0].t.slice(0,60),b:pend.length+(pend.length===1?" tarefa":" tarefas")+" hoje ("+hrs(mins)+" h)."+(i===0&&cc.due?" "+cc.due+" flashcards para revisar.":"")+" Toque para abrir.",u:"./"});
 }
 return out;
}
const b64u=s=>{const p="=".repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(b,c=>c.charCodeAt(0));};
async function pushOn(){
 const msg=$("#pushMsg");
 try{
  const perm=await Notification.requestPermission();
  if(perm!=="granted"){if(msg)msg.textContent="As notificações foram bloqueadas. Libere nas configurações do navegador para este site.";return;}
  const reg=await navigator.serviceWorker.ready;
  const sub=(await reg.pushManager.getSubscription())||await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u(VAPID_PUB)});
  pushSet({sub:sub.toJSON(),h:""}); await pushSync(true);
  toast("Pronto. Os avisos chegam mesmo com o app fechado.");
 }catch(e){if(msg)msg.textContent="Não deu para ativar: "+(e.message||e);return;}
 rerenderKeep();
}
async function pushOff(){
 const o=pushGet(); pushSet(null);
 try{if(o) await rpc("tp_push",{p_sub:o.sub,p_plan:[]});const reg=await navigator.serviceWorker.ready,s=await reg.pushManager.getSubscription();if(s)await s.unsubscribe();}catch(e){}
 rerenderKeep();
}
let pushT=null;
async function pushSync(now){
 const o=pushGet(); if(!o||!PUSH_OK) return;
 const plan=pushPlan(), h=JSON.stringify(plan);
 if(!now&&h===o.h) return;
 try{const r=await rpc("tp_push",{p_sub:o.sub,p_plan:plan});if(r!==undefined){o.h=h;o.at=Date.now();pushSet(o);}}catch(e){}
}
if(PUSH_OK){setTimeout(()=>pushSync(),4000);setInterval(()=>pushSync(),6*3600e3);}
function pushKick(){if(!PUSH_OK||!pushGet())return;clearTimeout(pushT);pushT=setTimeout(()=>pushSync(),8000);}
function pushPanel(){
 const o=pushGet();
 if(!PUSH_OK) return '<section class="panel"><h3>Notificações no celular</h3><p class="small">'+(IN_CLAUDE?"Aqui no claude.ai o navegador não permite avisos com a página fechada. Ative na versão instalável: ela avisa antes do primeiro bloco de cada dia, com a tarefa e as revisões pendentes.":"Este navegador não aceita notificações push. No iPhone, instale o app na tela de início (Compartilhar → Adicionar à Tela de Início) e abra por lá.")+'</p>'+(IN_CLAUDE?'<div class="row"><a class="btn ghost sm" href="'+GH_URL+(CL.code?"#sync="+CL.code:"")+'" target="_blank" rel="noopener">Abrir a versão instalável</a></div>':"")+'<p class="muted small">A Google Agenda continua avisando 30 min antes de cada bloco.</p></section>';
 const nx=pushPlan()[0];
 return '<section class="panel"><h3>Notificações no celular</h3><p class="small">'+(o?"Ligadas. O aviso chega "+(+cfg().pmin||10)+" min antes do primeiro bloco de cada dia, mesmo com o app fechado."+(nx?" Próximo: "+new Date(nx.t).toLocaleString("pt-BR",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})+".":""):"Receba um aviso antes do primeiro bloco de estudo de cada dia, com a tarefa e as revisões pendentes.")+'</p><div class="cfgrow"><label for="cPm">Avisar quantos minutos antes</label><select id="cPm">'+[0,5,10,15,30].map(v=>'<option value="'+v+'"'+((+cfg().pmin||10)===v||(v===0&&cfg().pmin===0)?" selected":"")+'>'+(v?v+" min":"Na hora")+'</option>').join("")+'</select></div><div class="row">'+(o?'<button class="btn ghost sm" id="pushOffB" type="button">Desligar</button><button class="btn ghost sm" id="pushTest" type="button">Testar agora</button>':'<button class="btn sm" id="pushOnB" type="button">Ativar notificações</button>')+'</div><p class="small muted" id="pushMsg" role="status"></p></section>';
}

/* ================= v4: TUTOR COM IA (capability sample, só no claude.ai) ================= */
let SAMPLE=null, SAMPLE_ST="wait";
setTimeout(async()=>{ try{ if(!IN_CLAUDE){SAMPLE_ST="off";return;} SAMPLE=await window.claude.use("sample"); SAMPLE_ST=SAMPLE?"ok":"off"; }catch(e){SAMPLE_ST="off";} if(current==="rev") rerenderKeep(); },0);
let TUT={mode:"erro",msgs:[],busy:false,ctrl:null};
async function tutorSend(txt){
 txt=String(txt||"").trim(); if(!txt||TUT.busy) return; if(!SAMPLE){toast("O tutor funciona só no app do claude.ai.");return;}
 const md=TUTOR_MODES[TUT.mode];
 TUT.msgs.push({role:"user",content:txt}); TUT.msgs.push({role:"assistant",content:""}); TUT.busy=true; rerenderTutor();
 const hist=TUT.msgs.slice(0,-1).slice(-12);
 const input=[{role:"user",content:md.sys+"\n\n---\n\n"+hist[0].content}].concat(hist.slice(1));
 TUT.ctrl=new AbortController();
 try{
  const r=await SAMPLE(input,{signal:TUT.ctrl.signal,cache:false,onText:({text})=>{TUT.msgs[TUT.msgs.length-1].content=text;updTutorLast();}});
  TUT.msgs[TUT.msgs.length-1].content=r.text+(r.truncated?"\n\n(resposta cortada)":"");
 }catch(e){
  const c=e&&e.code; TUT.msgs[TUT.msgs.length-1].content=c==="not_granted"?"Sem permissão para usar o Claude nesta página. Libere no menu Permissões e tente de novo.":c==="rate_limited"?"Muitas perguntas seguidas. Espere um minuto e tente de novo.":(e&&e.text)||"Não deu para responder agora. Tente de novo em instantes.";
  if(c==="not_granted"){SAMPLE_ST="denied";}
 }
 TUT.busy=false; TUT.ctrl=null; rerenderTutor();
}
function tutorMd(s){ return esc(s).replace(/```[a-zA-Z]*\n?([\s\S]*?)```/g,(m,c)=>'<pre class="copybox">'+c+'</pre>').replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\n/g,"<br>"); }
function tutorLog(){ if(!TUT.msgs.length) return '<p class="muted small">'+esc(TUTOR_MODES[TUT.mode].ph)+'</p>'; return TUT.msgs.map((m,i)=>'<div class="msg '+m.role+'"'+(i===TUT.msgs.length-1?' id="tutLast"':'')+'>'+(m.role==="assistant"&&!m.content?'<span class="muted">Pensando…</span>':tutorMd(m.content))+'</div>').join(""); }
function updTutorLast(){ const e=$("#tutLast"); if(e){const m=TUT.msgs[TUT.msgs.length-1]; e.innerHTML=m.content?tutorMd(m.content):'<span class="muted">Pensando…</span>';} }
function rerenderTutor(){ if(current==="rev"&&revSeg==="tut"){ const l=$("#tutLog"); if(l){l.innerHTML=tutorLog(); const b=$("#tutGo"); if(b){b.disabled=TUT.busy;b.textContent=TUT.busy?"Respondendo…":"Enviar";} const st=$("#tutStop"); if(st) st.hidden=!TUT.busy; } } }
function tutorAsk(mode,txt){ TUT.mode=mode; TUT.msgs=[]; revSeg="tut"; go("rev"); setTimeout(()=>tutorSend(txt),50); }


/* ================= MENTORIA (v23): cada sessão vira prática ================= */
function mentorOf(t){ const k=t.k==="curso"?t.c:t.k==="projeto"?t.p:null; const M=k&&MENTOR[k]; if(!M) return null; const n=parseInt(String(t.id).split(":").pop(),10)||0; return {d:M.d,q:M.q[n%M.q.length],proj:t.k==="projeto"}; }
function mentorPrompt(t){ const m=mentorOf(t); return "Quero mentoria, não a resposta pronta. Estou na sessão: "+t.t+"."+(t.ok?"\nCritério de pronto: "+t.ok:"")+"\nDesafio sem olhar: "+m.d+"\nNo fim, me faça esta pergunta de entrevista e avalie minha resposta: "+m.q; }
function mentorHTML(t){ const m=mentorOf(t); if(!m) return "";
 return '<details class="tdq"><summary>Mentoria desta sessão</summary><ol class="small" style="margin:6px 0 6px 18px;padding:0;display:grid;gap:4px">'
  +'<li><strong>Antes (2 min):</strong> escreva numa linha o que você vai saber fazer ao fim.</li>'
  +(m.proj?'<li><strong>Durante:</strong> faça você mesmo; pesquise só o que travar e anote a decisão no diário do projeto.</li>':'<li><strong>Durante:</strong> a cada vídeo, pause e refaça sozinho, sem copiar. Errar primeiro e corrigir depois é o que fixa.</li>')
  +'<li><strong>Desafio sem olhar:</strong> '+esc(m.d)+'</li>'
  +'<li><strong>Explique em voz alta (2 min):</strong> como se ensinasse a um colega da seção. Onde travar, é o que falta estudar.</li>'
  +'<li><strong>Pergunta de entrevista:</strong> '+esc(m.q)+'</li></ol>'
  +'<div class="row"><button type="button" class="btn ghost sm" data-mentor="'+esc(t.id)+'">'+(SAMPLE?"Pedir mentoria ao Claude":"Copiar pedido de mentoria para o Claude")+'</button></div></details>'; }
function ivGo(btn){ if(SAMPLE){ tutorAsk("entrev",IV_PROMPT); return; } pfSeg="ent"; go("perfil"); toast("Use as perguntas e o cronômetro de 2 min. No app do Claude, o tutor faz o simulado com você."); }
function mentorGo(id,btn){ const t=IDX[id]; if(!t||!mentorOf(t)) return; const txt=mentorPrompt(t); if(SAMPLE){ tutorAsk("mentor",txt); return; } copyText(TUTOR_MODES.mentor.sys+"\n\n"+txt,btn).then(()=>toast("Pedido copiado. Cole numa conversa no app do Claude.")); }
/* ================= v4: MODO ÁUDIO (flashcards falados) ================= */
/* ===== Estudo em áudio: mesma ideia do app da Transpetro (fila de trechos falados, pausa para pensar, botões do fone, modo bolso) ===== */
const TTS_OK="speechSynthesis" in window;
const AU_MODES=[["mix","Mix do dia","dica, pontos da PL-300 e flashcards"],["fc","Flashcards","pergunta, pausa para pensar e resposta"],["pl","Guia da PL-300","os pontos da prova que você ainda não domina"],["dicas","Dicas de carreira","estudo, portfólio, currículo e entrevista"]];
const AUK=KEY+"-au";
let AU=null, AUC=null;
function auCfg(){ if(!AUC){ try{AUC=JSON.parse(localStorage.getItem(AUK)||"null");}catch(e){} AUC=Object.assign({mode:"mix",src:"open",rate:1,pause:6,timer:0,n:0},AUC||{}); } return AUC; }
function auSave(){ try{localStorage.setItem(AUK,JSON.stringify(AUC));}catch(e){} }
const shuf=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
function auCards(src){ if(src==="due") return srsQueue("all").all; if(src==="open") return CARDS.filter(c=>deckOpen(c[0])); return CARDS.filter(c=>c[0]===src); }
function auItemsFc(src,n){ const pz=auCfg().pause*1000, S=ST.srs||{}, t=todayS(); const pool=auCards(src); const due=pool.filter(c=>S[c.id]&&S[c.id].d<=t);
 return (src==="due"?pool:due.concat(shuf(pool.filter(c=>!due.includes(c))))).slice(0,n).map(c=>({k:"Flashcard",lb:DECKS[c[0]].n,show:[c[1],c[2]],segs:[{t:c[1],w:pz},{t:c[2],w:1500,rev:1}]})); }
function auItemsPl(n){ const pz=auCfg().pause*1000, out=[]; SKILLS.forEach(d=>d.g.forEach(gr=>gr.items.forEach(o=>{ const g=gr[0], x=o.t; if(skLv(o.id)<2) out.push({k:"PL-300",lb:d.n+" · "+g,show:[x,"Explique de cabeça como faria no Power BI. Se travou, revise este ponto no Guia PL-300."],segs:[{t:"Guia da PL-300. "+g+". "+x+". Explique de cabeça como faria.",w:pz},{t:"Se travou, marque para revisar.",w:1200,rev:1}]}); })));
 return shuf(out).slice(0,n); }
function auItemsTips(n,first){ const out=TIPS.map(([a,b])=>({k:"Dica",lb:a,show:[a,b],segs:[{t:"Dica. "+a+". "+b,w:1500}]})); const tipI=(diff("2026-01-01",todayS())%TIPS.length+TIPS.length)%TIPS.length; return first?[out[tipI]]:shuf(out).slice(0,n); }
function auBuild(){ const c=auCfg(); if(c.mode==="fc") return auItemsFc(c.src,25); if(c.mode==="pl") return auItemsPl(15); if(c.mode==="dicas") return auItemsTips(12); return [].concat(auItemsTips(1,true),auItemsPl(3),auItemsFc(c.src,10)); }
function auVoice(){ const vs=TTS_OK?speechSynthesis.getVoices():[]; return vs.find(v=>/pt[-_]BR/i.test(v.lang))||vs.find(v=>/^pt/i.test(v.lang))||null; }
if(TTS_OK) try{speechSynthesis.getVoices();}catch(e){}
function auSay(text,run){
 return new Promise(res=>{
  if(!TTS_OK||!text){res();return;}
  const parts=String(text).match(/[^.!?;:]+[.!?;:]?/g)||[text], ch=[]; let cur="";
  parts.forEach(p=>{if((cur+p).length>200){if(cur)ch.push(cur);cur=p;}else cur+=p;}); if(cur) ch.push(cur);
  const v=auVoice(); sndDuck(true);
  const next=()=>{if(!AU||AU.run!==run||!ch.length){sndDuck(false);res();return;}
   const u=new SpeechSynthesisUtterance(ch.shift().trim());u.lang="pt-BR";if(v)u.voice=v;u.rate=auCfg().rate;u.onend=next;u.onerror=next;speechSynthesis.speak(u);};
  next();
 });
}
const auWait=(ms,run)=>new Promise(r=>{const t0=Date.now(),tk=()=>{if(!AU||AU.run!==run||Date.now()-t0>=ms){r();return;}AU.tw=setTimeout(tk,Math.min(250,ms));};tk();});
async function auLoop(run){
 while(AU&&AU.run===run&&AU.i<AU.items.length){
  const it=AU.items[AU.i];
  for(;AU.seg<it.segs.length;AU.seg++){ const sg=it.segs[AU.seg]; auDraw(); await auSay(sg.t,run); if(!AU||AU.run!==run) return; await auWait(sg.w||800,run); if(!AU||AU.run!==run) return; }
  AU.i++; AU.seg=0; auCfg().n++;
 }
 if(AU&&AU.run===run){AU.play=false;auLock(false);auDraw();auSave();sndMedia();}
}
function auStart(){ if(!TTS_OK){toast("Este navegador não tem leitura em voz alta.");return;} const it=auBuild(); if(!it.length){toast("Nada para tocar: escolha outro baralho ou outro modo.");return;} AU={items:it,i:0,seg:0,play:false,run:0}; auPlay(); }
function auPlay(){ if(!AU){auStart();return;} if(AU.play){auPause();return;} if(AU.i>=AU.items.length){AU.i=0;AU.seg=0;} AU.play=true; AU.run++; auLock(true); auTimerArm(); auMedia(); auLoop(AU.run); auDraw(); }
function auPause(){ if(!AU) return; AU.play=false; AU.run++; clearTimeout(AU.tw); try{speechSynthesis.cancel();}catch(e){} sndDuck(false); auLock(false); auDraw(); sndMedia(); }
function auStop(){ auPause(); }
function auSkip(d){ if(!AU) return; const was=AU.play; auPause(); AU.i=Math.min(AU.items.length-1,Math.max(0,AU.i+d)); AU.seg=0; if(was) auPlay(); else auDraw(); }
let auWL=null;
async function auLock(on){try{if(on&&!auWL&&navigator.wakeLock){auWL=await navigator.wakeLock.request("screen");auWL.addEventListener("release",()=>{auWL=null;});}else if(!on&&auWL){await auWL.release();auWL=null;}}catch(e){auWL=null;}}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible"&&AU&&AU.play)auLock(true);});
let auTT=null;
function auTimerArm(){ clearTimeout(auTT); const m=auCfg().timer; if(m) auTT=setTimeout(()=>{auPause();sndStop(8000);toast("Áudio pausado: o tempo que você escolheu terminou.");},m*60000); }
function auMedia(){
 if(!("mediaSession" in navigator)||!AU) return;
 if(!AU.play&&SND.k){sndMedia();return;}
 try{const it=AU.items[AU.i]||{}; navigator.mediaSession.metadata=new MediaMetadata({title:(it.k||"Estudo")+": "+(it.lb||""),artist:"Carreira em Dados",album:AU_MODES.find(m=>m[0]===auCfg().mode)[1]});
  navigator.mediaSession.setActionHandler("play",()=>{if(!AU.play)auPlay();}); navigator.mediaSession.setActionHandler("pause",auPause);
  navigator.mediaSession.setActionHandler("nexttrack",()=>auSkip(1)); navigator.mediaSession.setActionHandler("previoustrack",()=>auSkip(-1));}catch(e){}
}
function auDraw(){
 auMedia(); pocketDraw();
 const box=$("#auNow"); if(!box) return;
 if(!AU){box.innerHTML="";return;}
 const it=AU.items[AU.i]||AU.items[AU.items.length-1], rev=(it.segs[AU.seg]&&it.segs[AU.seg].rev)||AU.seg>=it.segs.length;
 box.innerHTML='<section class="panel stack aunow"><div class="row" style="justify-content:space-between;gap:8px"><span class="pill pri">'+esc(it.k)+' · '+Math.min(AU.i+1,AU.items.length)+' de '+AU.items.length+'</span><span class="muted small">'+esc(it.lb)+'</span></div><p class="auq">'+esc(it.show[0])+'</p><p class="aua'+(rev?" on":"")+'">'+(rev||it.k==="Dica"?esc(it.show[1]):"…")+'</p><div class="track"><div class="fill" style="width:'+Math.round(AU.i/AU.items.length*100)+'%"></div></div><div class="row auctl"><button class="btn ghost" type="button" id="auPrev" aria-label="Anterior">⏮</button><button class="btn aupp" type="button" id="auPP">'+(AU.play?"Pausar":"Tocar")+'</button><button class="btn ghost" type="button" id="auNext" aria-label="Próximo">⏭</button></div><button class="btn ghost sm" type="button" id="auPk">Modo bolso (tela escura)</button></section>';
 $("#auPrev").onclick=()=>auSkip(-1); $("#auPP").onclick=auPlay; $("#auNext").onclick=()=>auSkip(1); $("#auPk").onclick=pocketOn;
}
let pocket=false;
function pocketOn(){pocket=true;let el=$("#pocket");if(!el){el=document.createElement("div");el.id="pocket";document.body.appendChild(el);}pocketDraw();}
function pocketOff(){pocket=false;const el=$("#pocket");if(el)el.remove();}
function pocketDraw(){const el=$("#pocket");if(!el||!pocket)return;const it=AU&&AU.items[AU.i];
 el.innerHTML='<button type="button" class="pk1" id="pk1">'+(AU&&AU.play?"❚❚  Pausar":"▶  Tocar")+'</button><button type="button" class="pk2" id="pk2">⏭  Próximo</button><p class="pkt">'+(it?esc(it.k+" · "+it.lb):"")+'</p><button type="button" class="pkx" id="pkx">Sair do modo bolso</button>';
 $("#pk1").onclick=auPlay; $("#pk2").onclick=()=>auSkip(1); $("#pkx").onclick=pocketOff;}


/* ================= v4: ABA REVISAR ================= */
let revSeg="cards", fcDeck="all", fcCur=null, fcShow=false, skOpen="prep";
function vRev(){
 const segs=[["cards","Flashcards"],["pl","Habilidades PL-300"],["sql","Desafio SQL"],["au","Áudio e sons"],["tut","Tutor IA"]];
 let h=estNav()+'<section class="panel"><p class="muted small">Flashcards com revisão espaçada, o checklist da PL-300, desafios de SQL, áudio e um tutor com IA.</p><div class="seg" role="tablist">'+segs.map(([k,n])=>'<button role="tab" type="button" data-r="'+k+'" aria-selected="'+(revSeg===k)+'">'+n+'</button>').join("")+'</div></section>';
 if(revSeg==="cards") h+=vCards(); else if(revSeg==="pl") h+=vSkills(); else if(revSeg==="au") h+=vAudio(); else if(revSeg==="sql") h+=vSql(); else h+=vTutor();
 return h;
}
function vCards(){
 const q=srsQueue(fcDeck), S=ST.srs||{};
 const open=Object.keys(DECKS).filter(deckOpen);
 let h='<section class="panel"><div class="dayhead"><h3>Revisão de hoje</h3><span class="pill pri num">'+q.due.length+' para revisar · '+q.fresh.length+' novos</span></div>';
 h+='<div class="row" style="gap:6px"><button class="chip'+(fcDeck==="all"?" on":"")+'" data-dk="all" type="button">Todos liberados</button>'+Object.entries(DECKS).map(([k,d])=>'<button class="chip'+(fcDeck===k?" on":"")+'" data-dk="'+k+'" type="button"'+(deckOpen(k)?"":" disabled")+'>'+esc(d.n)+(deckOpen(k)?"":" 🔒")+'</button>').join("")+'</div>';
 if(!open.length) h+='<p class="small">Os baralhos abrem sozinhos quando o curso ligado a eles começa na agenda (Excel abre em 07/12). Para estudar antes, ligue "Liberar todos os baralhos" em Configurações.</p>';
 else if(!q.all.length) h+='<p class="small">Nada para revisar agora neste baralho. Volte amanhã: revisar no dia certo vale mais que revisar muito.</p>';
 else {
  if(!fcCur||!q.all.some(c=>c.id===fcCur)){fcCur=q.all[0].id;fcShow=false;}
  const c=CARDS.find(x=>x.id===fcCur), e=S[c.id];
  h+='<div class="fc" id="fc"><span class="muted small">'+esc(DECKS[c[0]].n)+(e?" · revisão":" · novo")+'</span><p class="fcq">'+esc(c[1])+'</p>'+(fcShow?'<p class="fca">'+esc(c[2])+'</p>':'')+'</div>';
  if(!fcShow) h+='<div class="row"><button class="btn" id="fcShow" type="button">Mostrar resposta</button></div>';
  else h+='<div class="fcg">'+[[1,"De novo"],[2,"Difícil"],[3,"Bom"],[4,"Fácil"]].map(([g,n])=>'<button class="btn '+(g===1?"warn":g===3?"":"ghost")+' sm" data-g="'+g+'" type="button">'+n+'<span class="small">'+srsIv(c.id,g)+'</span></button>').join("")+'</div>'+(SAMPLE?'<div class="row"><button class="linkbtn" id="fcAsk" type="button">Pedir explicação ao tutor</button></div>':"");
 }
 h+='</section>';
 const tot=CARDS.length, seen=Object.keys(S).length, firm=Object.values(S).filter(e=>e.s>=21).length;
 const fc=[]; for(let i=1;i<=7;i++){const d=addD(todayS(),i); fc.push([d,Object.values(S).filter(e=>e.d===d).length]);}
 const mx=Math.max(1,...fc.map(x=>x[1]));
 h+='<section class="panel"><h3>Seu progresso nos cards</h3><div class="grid g3"><div class="fact"><span class="k">Vistos</span><span class="big">'+seen+'</span><span class="muted small">de '+tot+'</span></div><div class="fact"><span class="k">Fixados (3+ semanas)</span><span class="big">'+firm+'</span></div><div class="fact"><span class="k">Revisados hoje</span><span class="big">'+((ST.rv&&ST.rv[todayS()])||0)+'</span></div></div><h4>Próximos 7 dias</h4><div class="fcst">'+fc.map(([d,n])=>'<div class="fcb"><span class="fcbar" style="height:'+Math.max(4,Math.round(n/mx*60))+'px"></span><span class="small num">'+n+'</span><span class="muted small">'+fmtShort(d).slice(0,2)+'</span></div>').join("")+'</div><p class="muted small">Como funciona: "De novo" volta hoje; "Bom" espaça cada vez mais (1, 3, 8, 20 dias…). É o mesmo método (FSRS) do app da Transpetro. Até '+(+cfg().newc||10)+' cards novos por dia (muda em Configurações).</p></section>';
 return h;
}
function skLv(id){const e=ST.sk&&ST.sk[id];return e?e.v:0;}
function skPct(d){const it=d.g.flatMap(g=>g.items);return it.reduce((a,x)=>a+skLv(x.id),0)/(it.length*2);}
function vSkills(){
 const ready=SKILLS.reduce((a,d)=>a+skPct(d)*d.w,0)/SKILLS.reduce((a,d)=>a+d.w,0);
 let h='<section class="panel"><div class="dayhead"><h3>Prontidão para a PL-300</h3><span class="big">'+Math.round(ready*100)+'%</span></div><div class="track"><div class="fill'+(ready>=.8?" ok":"")+'" style="width:'+Math.round(ready*100)+'%"></div></div><p class="small">Marque cada habilidade como <strong>Estudei</strong> ou <strong>Domino</strong> (consegue fazer sem consultar). A média já considera o peso de cada área na prova. Agende a prova quando passar de 80% e acertar 75% ou mais no <a href="https://aka.ms/PL300-PA" target="_blank" rel="noopener">simulado gratuito da Microsoft</a>.</p></section>';
 SKILLS.forEach(d=>{ const p=Math.round(skPct(d)*100);
  h+='<section class="panel"><details class="acc" style="border:0;padding:0"'+(skOpen===d.id?" open":"")+' data-sko="'+d.id+'"><summary><span class="stack" style="gap:4px;flex:1;min-width:0"><span class="row" style="gap:8px"><strong>'+esc(d.n)+'</strong><span class="pill">'+(d.w===17.5?"15–20%":"25–30%")+' da prova</span></span><span class="track"><span class="fill'+(p>=80?" ok":"")+'" style="display:block;width:'+p+'%"></span></span><span class="muted small num">'+p+'% pronto</span></span><span class="chev">›</span></summary>'+d.g.map(g=>'<h4 style="margin-top:12px">'+esc(g[0])+'</h4>'+g.items.map(x=>'<div class="skr"><span class="small">'+esc(x.t)+'</span><span class="sks" role="radiogroup" aria-label="'+esc(x.t)+'">'+SK_LV.map((n,v)=>'<button type="button" role="radio" aria-checked="'+(skLv(x.id)===v)+'" data-sk="'+x.id+'" data-v="'+v+'">'+n+'</button>').join("")+'</span></div>').join("")).join("")+'</details></section>';
 });
 return h;
}
function vAudio(){
 const c=auCfg(), dk=Object.entries(DECKS).filter(([k])=>deckOpen(k));
 let h='<section class="panel stack"><h3>Estudo em áudio</h3><p class="small">Para o ônibus, a academia ou lavando louça, de fone e sem mexer no celular. Escolha o que ouvir, toque em Tocar e guarde o celular. Os botões do fone pausam e pulam.</p>';
 if(TTS_OK){
  h+='<div class="aumodes" role="radiogroup">'+AU_MODES.map(([k,t,d])=>'<label class="aumode'+(c.mode===k?" on":"")+'"><input type="radio" name="auMode" value="'+k+'"'+(c.mode===k?" checked":"")+'><b>'+t+'</b><span class="muted small">'+d+'</span></label>').join("")+'</div>';
  h+='<div class="cfgrow"><label for="auSrc">Flashcards de</label><select id="auSrc"><option value="open"'+(c.src==="open"?" selected":"")+'>Todos os baralhos liberados</option><option value="due"'+(c.src==="due"?" selected":"")+'>Só a revisão de hoje</option>'+dk.map(([k,d])=>'<option value="'+k+'"'+(c.src===k?" selected":"")+'>'+esc(d.n)+'</option>').join("")+'</select></div>';
  h+='<div class="cfgrow"><label for="auRate">Velocidade da voz</label><select id="auRate">'+[[.85,"Devagar"],[1,"Normal"],[1.15,"Um pouco rápida"],[1.3,"Rápida"],[1.5,"Muito rápida"]].map(([v,t])=>'<option value="'+v+'"'+(v===c.rate?" selected":"")+'>'+t+'</option>').join("")+'</select></div>';
  h+='<div class="cfgrow"><label for="auPause">Tempo para pensar</label><select id="auPause">'+[4,6,8,12,20].map(v=>'<option value="'+v+'"'+(v===c.pause?" selected":"")+'>'+v+' segundos</option>').join("")+'</select></div>';
  h+='<div class="cfgrow"><label for="auTimer">Parar sozinho depois de</label><select id="auTimer">'+[[0,"Não parar"],[15,"15 min"],[30,"30 min"],[45,"45 min"],[60,"1 hora"],[90,"1h30"]].map(([v,t])=>'<option value="'+v+'"'+(v===c.timer?" selected":"")+'>'+t+'</option>').join("")+'</select></div>';
  h+='<button class="btn" type="button" id="auGo">'+(AU?"Montar de novo e tocar":"Tocar")+'</button><p class="muted small">A voz é a do próprio aparelho e funciona sem internet. Com a tela apagada, o celular costuma calar a voz: enquanto toca, o app mantém a tela acesa, e o <strong>Modo bolso</strong> deixa tudo escuro com dois botões grandes. '+(c.n?c.n+' trechos ouvidos até agora.':'')+'</p>';
 } else h+='<p class="small">Este navegador não tem leitura em voz alta. Tente pelo Chrome (Android) ou pelo Safari (iPhone).</p>';
 h+='</section><div id="auNow" aria-live="polite"></div>';
 h+='<section class="panel stack"><h3>Sons para concentrar</h3><p class="small">Gerados aqui mesmo, sem internet e sem gastar dados. Tocam junto com a voz (que abaixa o som enquanto fala) e continuam nas outras telas, por exemplo enquanto você faz um curso.</p><div class="sndgrid">'+SNDS.map(([k,t,d])=>'<button type="button" class="sndbtn'+(SND.k===k?" on":"")+'" data-k="'+k+'" aria-pressed="'+(SND.k===k)+'"><b>'+t+'</b><span class="muted">'+d+'</span><span class="sst"></span></button>').join("")+'</div>';
 h+='<div class="cfgrow"><label for="sndA">Tocar sozinho durante o foco do cronômetro</label><input type="checkbox" id="sndA"'+(SND.auto?" checked":"")+'></div>';
 h+='<p class="muted small">O volume é o do celular: use os botões de volume do aparelho. Pelo fone ou pela tela bloqueada dá para pausar e, no botão de próxima, trocar de som.</p>';
 h+='<details class="acc"><summary><strong>Qual escolher e outras opções de música</strong><span class="chev">›</span></summary><div class="stack" style="gap:8px"><p class="small"><strong>Rua ou ônibus:</strong> ruído marrom, que cobre o ronco grave. Volume baixo a médio.</p><p class="small"><strong>Para fazer curso, SQL ou DAX:</strong> ruído rosa, chuva ou ambiente lo-fi. <strong>Evite música com letra</strong>: palavras cantadas disputam atenção com a leitura.</p><p class="small"><strong>Para ouvir o estudo em áudio:</strong> deixe o volume num nível em que a voz fique clara; o som de fundo já toca mais baixo que ela.</p><p class="small"><strong>Se preferir música de verdade</strong> (precisa de internet): lo-fi sem letra, piano calmo ou trilhas instrumentais.</p><div class="row" style="gap:6px;flex-wrap:wrap"><a class="btn ghost sm" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=lofi+hip+hop+radio+beats+to+study">Lo-fi (YouTube)</a><a class="btn ghost sm" target="_blank" rel="noopener" href="https://open.spotify.com/search/foco%20profundo">Foco profundo (Spotify)</a><a class="btn ghost sm" target="_blank" rel="noopener" href="https://open.spotify.com/search/peaceful%20piano">Peaceful Piano (Spotify)</a><a class="btn ghost sm" target="_blank" rel="noopener" href="https://mynoise.net/noiseMachines.php">myNoise</a><a class="btn ghost sm" target="_blank" rel="noopener" href="https://www.noisli.com/">Noisli</a></div><p class="muted small">Para música de outro app tocar junto com a voz, abra a música primeiro e depois volte aqui. Alguns celulares pausam um áudio quando o outro começa.</p></div></details></section>';
 return h;
}
function vTutor(){
 if(SAMPLE_ST!=="ok") return '<section class="panel"><h3>Tutor com IA</h3><p class="small">'+(SAMPLE_ST==="wait"?"Conectando…":IN_CLAUDE?"O tutor não está disponível nesta visualização. Abra o app direto pelo claude.ai, entrando na sua conta.":"O tutor usa o Claude da sua conta, então funciona só no app do claude.ai (o mesmo progresso, sincronizado).")+'</p>'+(IN_CLAUDE?"":'<div class="row"><a class="btn ghost sm" href="https://claude.ai/artifact/3QgJ1QWWD8CrntaYdKDghu" target="_blank" rel="noopener">Abrir no claude.ai</a></div>')+'</section>';
 return '<section class="panel"><h3>Tutor com IA</h3><div class="seg" role="tablist" id="tutM">'+Object.entries(TUTOR_MODES).map(([k,m])=>'<button type="button" role="tab" data-v="'+k+'" aria-selected="'+(TUT.mode===k)+'">'+esc(m.n)+'</button>').join("")+'</div><div id="tutLog" class="tutlog" aria-live="polite">'+tutorLog()+'</div><textarea id="tutIn" aria-label="Mensagem para o tutor" placeholder="'+esc(TUTOR_MODES[TUT.mode].ph)+'"></textarea><div class="row"><button class="btn" id="tutGo" type="button"'+(TUT.busy?" disabled":"")+'>'+(TUT.busy?"Respondendo…":"Enviar")+'</button><button class="btn ghost sm" id="tutStop" type="button"'+(TUT.busy?"":" hidden")+'>Parar</button><button class="btn ghost sm" id="tutNew" type="button">Nova conversa</button></div><p class="muted small">Não cole dados pessoais nem informações internas da FAB. A conversa não fica salva.</p></section>';
}
WIRES.rev=el=>{
 wireEst(el); el.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{revSeg=b.dataset.r;rerenderKeep();});
 if(revSeg==="sql") wireSql(el);
 el.querySelectorAll("[data-dk]").forEach(b=>b.onclick=()=>{fcDeck=b.dataset.dk;fcCur=null;rerenderKeep();});
 const sh=$("#fcShow"); if(sh) sh.onclick=()=>{fcShow=true;rerenderKeep();};
 el.querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{srsGrade(fcCur,+b.dataset.g);fcCur=null;fcShow=false;rerenderKeep();});
 const fa=$("#fcAsk"); if(fa) fa.onclick=()=>{const c=CARDS.find(x=>x.id===fcCur); tutorAsk("duvida","Explique melhor este flashcard, com um exemplo prático:\nPergunta: "+c[1]+"\nResposta: "+c[2]);};
 el.querySelectorAll("[data-sk]").forEach(b=>b.onclick=()=>{ST.sk=ST.sk||{};ST.sk[b.dataset.sk]={v:+b.dataset.v,t:Date.now()};changed();rerenderKeep();});
 el.querySelectorAll("details[data-sko]").forEach(d=>d.addEventListener("toggle",()=>{if(d.open)skOpen=d.dataset.sko;}));
 const c=auCfg();
 el.querySelectorAll("input[name=auMode]").forEach(r=>r.onchange=()=>{c.mode=r.value;auSave();el.querySelectorAll(".aumode").forEach(l=>l.classList.toggle("on",l.querySelector("input").checked));});
 const sv=(id,f,num)=>{const e=el.querySelector("#"+id);if(e)e.onchange=()=>{c[f]=num?+e.value:e.value;auSave();if(f==="timer")auTimerArm();};};
 sv("auSrc","src"); sv("auRate","rate",1); sv("auPause","pause",1); sv("auTimer","timer",1);
 const ag=el.querySelector("#auGo"); if(ag) ag.onclick=()=>{auPause();AU=null;auStart();};
 el.querySelectorAll(".sndbtn").forEach(b=>b.onclick=()=>sndPlay(b.dataset.k));
 const sa=el.querySelector("#sndA"); if(sa) sa.onchange=e=>{SND.auto=e.target.checked;sndStore();};
 el.querySelectorAll("[data-snd-on]").forEach(b=>b.onclick=sndToggle);
 auDraw(); sndDrawAll();
 el.querySelectorAll("#tutM button").forEach(b=>b.onclick=()=>{if(TUT.busy)return;TUT.mode=b.dataset.v;TUT.msgs=[];rerenderKeep();});
 const tg=$("#tutGo"); if(tg) tg.onclick=()=>{const v=$("#tutIn").value;$("#tutIn").value="";tutorSend(v);};
 const ts=$("#tutStop"); if(ts) ts.onclick=()=>{if(TUT.ctrl)TUT.ctrl.abort();};
 const tn=$("#tutNew"); if(tn) tn.onclick=()=>{if(TUT.ctrl)TUT.ctrl.abort();TUT.msgs=[];TUT.busy=false;rerenderKeep();};
 const ti=$("#tutIn"); if(ti) ti.onkeydown=e=>{if(e.key==="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();tg&&tg.click();}};
};

/* ================= v4: CANDIDATURAS (Carreira › Candidaturas) ================= */
let apEdit=null, apFilter="ativas";
function apList(){return Object.entries(ST.apps||{}).map(([id,p])=>Object.assign({id},p)).sort((a,b)=>(b.data||"").localeCompare(a.data||""));}
const AP_ACTIVE=new Set(["env","tri","tec","ent","fin","prop"]);
function apFollow(){ const t=todayS(); return apList().filter(p=>(p.etapa==="env"||p.etapa==="tri")&&p.data&&diff(p.data,t)>=10&&!(p.fu&&diff(p.fu,t)<7)); }
function vApps(){
 const L=apList(), t=todayS();
 const n=L.length, act=L.filter(p=>AP_ACTIVE.has(p.etapa)).length, resp=L.filter(p=>!["env","sem"].includes(p.etapa)).length, ent=L.filter(p=>["ent","fin","prop"].includes(p.etapa)).length;
 let h='<section class="panel"><h3>Controle de candidaturas</h3>'+(t<CIVIL?'<p class="small">Até a baixa ('+fmtShort(BAIXA)+'), candidate-se só para vagas com início depois dela e deixe isso claro no currículo ("disponível a partir de '+fmtShort(CIVIL)+'").</p>':'')+'<div class="grid g4"><div class="fact"><span class="k">Enviadas</span><span class="big">'+n+'</span></div><div class="fact"><span class="k">Em andamento</span><span class="big">'+act+'</span></div><div class="fact"><span class="k">Com resposta</span><span class="big">'+(n?Math.round(resp/n*100):0)+'%</span></div><div class="fact"><span class="k">Entrevistas</span><span class="big">'+ent+'</span></div></div>'+(n>=20&&!ent?'<p class="small tip">20 ou mais candidaturas sem entrevista costuma ser sinal de currículo ou portfólio. Use o tutor (Estudar › Revisar › Tutor IA) para revisar o currículo e peça opinião a alguém da área.</p>':'')+'</section>';
 const fu=apFollow();
 if(fu.length) h+='<section class="panel"><h3>Cobrar retorno <span class="pill bad num">'+fu.length+'</span></h3><p class="small muted">Enviadas há 10 dias ou mais sem resposta. Mande uma mensagem curta ao recrutador no LinkedIn ou marque como "Sem retorno".</p>'+fu.map(p=>'<div class="cust"><div class="stack" style="gap:2px;min-width:0"><strong>'+esc(p.emp)+'</strong><span class="small muted">'+esc(p.vaga)+' · '+diff(p.data,t)+' dias</span></div><div class="row"><button class="btn ghost sm" data-fu="'+p.id+'" type="button">Cobrei</button><button class="btn ghost sm" data-sem="'+p.id+'" type="button">Sem retorno</button></div></div>').join("")+'</section>';
 const e=apEdit&&apEdit!=="new"?Object.assign({id:apEdit},(ST.apps||{})[apEdit]):{data:t,etapa:"env",fonte:"LinkedIn"};
 h+='<section class="panel"><details class="acc" style="border:0;padding:0"'+(apEdit?" open":"")+' id="apForm"><summary><h3>'+(apEdit&&apEdit!=="new"?"Editar candidatura":"+ Nova candidatura")+'</h3><span class="chev">›</span></summary><div class="stack"><div class="g2f"><label class="fl">Empresa<input type="text" id="apE" value="'+esc(e.emp||"")+'"></label><label class="fl">Vaga<input type="text" id="apV" value="'+esc(e.vaga||"")+'"></label><label class="fl">Data do envio<input type="date" id="apD" value="'+esc(e.data||t)+'"></label><label class="fl">Etapa<select id="apS">'+ETAPAS.map(([k,n])=>'<option value="'+k+'"'+(e.etapa===k?" selected":"")+'>'+n+'</option>').join("")+'</select></label><label class="fl">Onde achou<select id="apF">'+FONTES.map(f=>'<option'+(e.fonte===f?" selected":"")+'>'+f+'</option>').join("")+'</select></label><label class="fl">Link da vaga<input type="url" id="apL" value="'+esc(e.link||"")+'" placeholder="https://"></label></div><label class="fl">Anotações (salário, contato, próximos passos)<textarea id="apO">'+esc(e.obs||"")+'</textarea></label><div class="row"><button class="btn" id="apSave" type="button">Salvar</button>'+(apEdit&&apEdit!=="new"?'<button class="btn ghost sm" id="apCancel" type="button">Cancelar</button><button class="btn warn sm" id="apDel" type="button">Excluir</button>':'')+(SAMPLE?'<button class="linkbtn" id="apTut" type="button">Treinar entrevista para esta vaga</button>':'')+'</div></div></details></section>';
 const F=L.filter(p=>apFilter==="todas"||(apFilter==="ativas"?AP_ACTIVE.has(p.etapa):!AP_ACTIVE.has(p.etapa)));
 h+='<section class="panel"><div class="dayhead"><h3>Suas candidaturas</h3><div class="seg" id="apFl">'+[["ativas","Ativas"],["fechadas","Encerradas"],["todas","Todas"]].map(([k,nm])=>'<button type="button" data-v="'+k+'" aria-selected="'+(apFilter===k)+'">'+nm+'</button>').join("")+'</div></div>'+(F.length?F.map(p=>'<div class="apr"><div class="stack" style="gap:2px;min-width:0"><strong style="overflow-wrap:anywhere">'+esc(p.emp)+'</strong><span class="small">'+esc(p.vaga)+'</span><span class="small muted">'+(p.data?fmtShort(p.data):"")+' · '+esc(p.fonte||"")+(p.link?' · <a href="'+esc(p.link)+'" target="_blank" rel="noopener">vaga</a>':'')+'</span></div><div class="row" style="gap:6px"><select data-st="'+p.id+'" aria-label="Etapa de '+esc(p.emp)+'">'+ETAPAS.map(([k,n])=>'<option value="'+k+'"'+(p.etapa===k?" selected":"")+'>'+n+'</option>').join("")+'</select><button class="btn ghost sm" data-ed="'+p.id+'" type="button">Editar</button></div></div>').join(""):'<p class="muted small">'+(n?"Nenhuma nesta lista.":"Nenhuma candidatura registrada ainda. Registre cada envio: em poucas semanas você vê o que funciona (fonte, tipo de vaga, currículo).")+'</p>')+'</section>';
 return h;
}
function apSet(id,o){ST.apps=ST.apps||{};ST.apps[id]=Object.assign({},ST.apps[id]||{},o,{u:Date.now()});changed();}
function wireApps(el){
 const v=id=>($("#"+id)||{}).value||"";
 const sv=$("#apSave"); if(sv) sv.onclick=()=>{ const emp=v("apE").trim(), vaga=v("apV").trim(); if(!emp||!vaga){toast("Informe a empresa e a vaga.");return;} const link=v("apL").trim(); const id=apEdit&&apEdit!=="new"?apEdit:"a"+Date.now().toString(36)+Math.random().toString(36).slice(2,5); apSet(id,{emp,vaga,data:v("apD"),etapa:v("apS"),fonte:v("apF"),link:/^https?:\/\//.test(link)?link:"",obs:v("apO")}); apEdit=null; rerenderKeep(); toast("Candidatura salva."); };
 const cc=$("#apCancel"); if(cc) cc.onclick=()=>{apEdit=null;rerenderKeep();};
 const dl=$("#apDel"); if(dl) dl.onclick=e=>{const b=e.currentTarget; if(!b.dataset.arm){b.dataset.arm="1";b.textContent="Toque de novo para excluir";return;} delete ST.apps[apEdit]; changed(); apEdit=null; rerenderKeep(); toast("Candidatura excluída.");};
 const tu=$("#apTut"); if(tu) tu.onclick=()=>tutorAsk("entrev","Vaga: "+v("apV")+" na empresa "+v("apE")+(v("apL")?" ("+v("apL")+")":"")+". "+(v("apO")?"Anotações: "+v("apO"):"")+" Comece a entrevista.");
 const fm=$("#apForm"); if(fm) fm.addEventListener("toggle",()=>{if(fm.open&&!apEdit)apEdit="new"; if(!fm.open)apEdit=null;});
 el.querySelectorAll("[data-ed]").forEach(b=>b.onclick=()=>{apEdit=b.dataset.ed;rerenderKeep();const f=$("#apForm");if(f)f.scrollIntoView({block:"start"});});
 el.querySelectorAll("select[data-st]").forEach(s=>s.onchange=()=>{apSet(s.dataset.st,{etapa:s.value});toast("Etapa atualizada: "+ETAPA_N[s.value]+".");rerenderKeep();});
 el.querySelectorAll("[data-fu]").forEach(b=>b.onclick=()=>{apSet(b.dataset.fu,{fu:todayS()});rerenderKeep();});
 el.querySelectorAll("[data-sem]").forEach(b=>b.onclick=()=>{apSet(b.dataset.sem,{etapa:"sem"});rerenderKeep();});
 el.querySelectorAll("#apFl button").forEach(b=>b.onclick=()=>{apFilter=b.dataset.v;rerenderKeep();});
}

/* ================= v4: DIÁRIO DE PROJETOS ================= */
function diaryOf(pid){return Object.entries(ST.diary||{}).filter(([,e])=>e.p===pid).map(([id,e])=>Object.assign({id},e)).sort((a,b)=>(a.d+a.u)<(b.d+b.u)?-1:1);}
function diaryAdd(pid,txt,tid){txt=String(txt||"").trim(); if(!txt) return false; ST.diary=ST.diary||{}; ST.diary["d"+Date.now().toString(36)+Math.random().toString(36).slice(2,5)]={p:pid,d:todayS(),txt,tid:tid||"",u:Date.now()}; changed(); return true;}
function readmeFor(pid){
 const p=PROJECTS.find(x=>x.id===pid), D=diaryOf(pid), steps=p.s.filter((_,i)=>isDone("p:"+pid+":"+i));
 return "# "+p.n+"\n\n"+(/fict/i.test(p.src)?"> Dados 100% fictícios, criados para este estudo.\n\n":"")+"## Por que este projeto\n"+p.why+"\n\n## Fonte dos dados\n"+p.src+(p.u?" ("+p.u+")":"")+"\n\n## O que eu fiz\n"+(steps.length?steps.map(s=>"- "+s).join("\n"):"- (marque as etapas concluídas no app)")+"\n\n## Diário de desenvolvimento\n"+(D.length?D.map(e=>"- **"+fmtShort(e.d)+"**: "+e.txt.replace(/\n+/g," ")).join("\n"):"- (anote o que fez em cada sessão)")+"\n\n## Principais resultados\n1. \n2. \n3. \n\n## Prints\n![Visão geral](img/visao-geral.png)\n\n## Como reproduzir\n1. \n\n## Contato\nLinkedIn: linkedin.com/in/seu-nome\n";
}
function diaryHTML(pid){
 const D=diaryOf(pid);
 return '<div class="stack diary"><h4>Diário do projeto ('+D.length+')</h4>'+(D.length?'<ul class="plain">'+D.slice(-6).map(e=>'<li class="small"><strong class="num">'+fmtShort(e.d)+'</strong> '+esc(e.txt)+' <button class="linkbtn" data-dx="'+e.id+'" type="button" aria-label="Apagar anotação">apagar</button></li>').join("")+'</ul>'+(D.length>6?'<p class="muted small">Mais '+(D.length-6)+' anotações antigas entram no README.</p>':''):'<p class="muted small">Anote em 1 ou 2 linhas o que fez em cada sessão: decisões, problemas e resultados. Vira o README e assunto de entrevista.</p>')+'<textarea data-dt="'+pid+'" aria-label="Nova anotação" placeholder="Ex.: limpei datas no Power Query; 3% das linhas sem setor, criei categoria Não informado." style="min-height:64px"></textarea><div class="row"><button class="btn ghost sm" data-da="'+pid+'" type="button">Anotar</button><button class="btn ghost sm" data-rm="'+pid+'" type="button">Gerar README</button></div><pre class="copybox" id="rm-'+pid+'" hidden></pre></div>';
}
function wireDiary(el){
 el.querySelectorAll("[data-da]").forEach(b=>b.onclick=()=>{const pid=b.dataset.da, ta=el.querySelector('[data-dt="'+pid+'"]'); if(diaryAdd(pid,ta.value)){ta.value="";rerenderKeep();toast("Anotado no diário.");} else toast("Escreva o que você fez.");});
 el.querySelectorAll("[data-dx]").forEach(b=>b.onclick=()=>{if(!b.dataset.arm){b.dataset.arm="1";b.textContent="confirmar";return;} delete ST.diary[b.dataset.dx]; changed(); rerenderKeep();});
 el.querySelectorAll("[data-rm]").forEach(b=>b.onclick=async()=>{const pid=b.dataset.rm, md=readmeFor(pid), pre=$("#rm-"+pid); pre.textContent=md; pre.hidden=false; try{await navigator.clipboard.writeText(md);toast("README copiado. Cole no GitHub e complete os resultados.");}catch(e){toast("README gerado abaixo. Selecione e copie.");}});
}

/* Tema */
let theme="auto"; try{theme=localStorage.getItem(KEY+"-theme")||"auto";}catch(e){}
const THL={auto:"Automático",light:"Claro",dark:"Escuro"};
function applyTheme(){ if(theme==="auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme",theme); }
let fz=1; try{fz=+localStorage.getItem(KEY+"-fz")||1;}catch(e){}
function applyFz(){document.documentElement.style.setProperty("--fz",fz);}
applyFz();
$("#cfgBtn").onclick=()=>go("config"); $("#progBtn").onclick=()=>go("prog");
$("#clChip").onclick=()=>{go("config");setTimeout(()=>{const s=$("#cfgSync");if(s)s.scrollIntoView({block:"start"});},50);};
$("#cfgBtn").setAttribute("aria-current",current==="config"?"page":"false"); $("#progBtn").setAttribute("aria-current",current==="prog"?"page":"false");
applyTheme();
render();
if(TM) tmEnsureUI();
setInterval(()=>{refreshHeader();},60000);
