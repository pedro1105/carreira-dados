const C="carreira-v6";
const FILES=["./","index.html","manifest.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:"reload"})))));self.skipWaiting();});
/* só apaga caches deste app; os da Transpetro, no mesmo site, ficam */
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("carreira-")&&k!==C).map(k=>caches.delete(k)))));self.clients.claim();});
/* abre na hora pelo cache e atualiza em segundo plano; o resto (Supabase etc.) vai direto para a rede */
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=="GET"||u.origin!==location.origin||!u.pathname.includes("/carreira-dados/")) return;
  e.respondWith(caches.open(C).then(c=>c.match(e.request,{ignoreSearch:true}).then(m=>{
    const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r;});
    if(m){e.waitUntil(net.catch(()=>{}));return m;}
    return net.catch(()=>c.match("index.html"));
  })));
});
/* push: avisos agendados pelo servidor (Supabase, mesma função tp-push da Transpetro) com o app fechado */
self.addEventListener("push",e=>{let d={};try{d=e.data.json();}catch(x){d={title:"Carreira em Dados",body:e.data?e.data.text():""};}
  e.waitUntil(self.registration.showNotification(d.title||"Carreira em Dados",{body:d.body||"",icon:"icons/icon-192.png",badge:"icons/icon-192.png",tag:d.tag||"cd-push",data:{url:d.url||"./"}}));});
self.addEventListener("notificationclick",e=>{e.notification.close();const u=new URL((e.notification.data&&e.notification.data.url)||"./",self.registration.scope).href;
  e.waitUntil(clients.matchAll({type:"window"}).then(ws=>{for(const w of ws){if(w.url.startsWith(self.registration.scope)&&"focus" in w)return w.focus();}return clients.openWindow(u);}));});
