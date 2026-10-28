"""Monta a versão instalável (GitHub Pages) do app Carreira em Dados 2027.

src/app.html é a mesma página publicada no claude.ai (artifact, sem <html>/<head>).
Saída: index.html com manifest, ícones e service worker próprios.
"""
import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
app = open(os.path.join(ROOT, 'src', 'app.html'), encoding='utf8').read()
i = app.index('</style>') + len('</style>')
head, body = app[:i], app[i:]
head_add = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
            '<meta name="theme-color" content="#2F5C9E"><link rel="manifest" href="manifest.json">'
            '<link rel="icon" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/apple-180.png">'
            '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">'
            '<meta name="apple-mobile-web-app-title" content="Carreira">')
sw = ('<script>if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost")){const sw=navigator.serviceWorker;let had=!!sw.controller;'
      'sw.register("sw.js",{scope:"./"}).then(r=>{document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")r.update().catch(()=>{});});}).catch(()=>{});'
      'sw.addEventListener("controllerchange",()=>{if(had)location.reload();had=true;});}</script>')
out = '<!doctype html><html lang="pt-BR"><head>' + head_add + head + '</head><body>' + body + sw + '</body></html>'
open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf8').write(out)
v = re.search(r'const C="carreira-v(\d+)"', open(os.path.join(ROOT, 'sw.js'), encoding='utf8').read())
print(f'index.html {len(out)} bytes · cache sw v{v.group(1) if v else "?"}')
