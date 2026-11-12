"""Monta o app Carreira em Dados a partir das partes em src/.

Fontes (edite estas):
  src/head.html   título e meta da página
  src/styles.css  todo o visual (cores claro/escuro, layout)
  src/body.html   cabeçalho, abas e área das telas
  src/data.js     listas e textos fixos: cursos, projetos, cartões, pendências, textos do LinkedIn...
  src/app.js      a lógica: cronograma, telas, sincronização, áudio, tutor

Saídas (não edite à mão):
  dist/app.html   página única publicada no claude.ai (sem <html>/<head>)
  index.html      versão instalável do GitHub Pages, com manifest, ícones e service worker

Uso: python3 build.py   (depois: node tests/telas.js para testar todas as telas)
"""
import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
rd = lambda p: open(os.path.join(ROOT, p), encoding='utf8').read()

head = rd('src/head.html').strip()
css = rd('src/styles.css')
body = rd('src/body.html').strip()
js = rd('src/data.js') + '\n' + rd('src/app.js')

app = head + '\n<style>\n' + css + '</style>\n\n' + body + '\n\n<script>\n' + js + '</script>\n'
os.makedirs(os.path.join(ROOT, 'dist'), exist_ok=True)
open(os.path.join(ROOT, 'dist', 'app.html'), 'w', encoding='utf8').write(app)

i = app.index('</style>') + len('</style>')
h, b = app[:i], app[i:]
head_add = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
            '<meta name="theme-color" content="#2F5C9E"><link rel="manifest" href="carreira.webmanifest">'
            '<link rel="icon" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/apple-180.png">'
            '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">'
            '<meta name="apple-mobile-web-app-title" content="Carreira">')
sw = ('<script>if("serviceWorker" in navigator&&(location.protocol==="https:"||location.hostname==="localhost")){const sw=navigator.serviceWorker;let had=!!sw.controller;'
      'sw.register("sw.js",{scope:"./"}).then(r=>{document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")r.update().catch(()=>{});});}).catch(()=>{});'
      'sw.addEventListener("controllerchange",()=>{if(had){if(typeof swUpdated==="function")swUpdated();else location.reload();}had=true;});}</script>')
out = '<!doctype html><html lang="pt-BR"><head>' + head_add + h + '</head><body>' + b + sw + '</body></html>'
open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf8').write(out)

v = re.search(r'const C="carreira-v(\d+)"', rd('sw.js'))
av = re.search(r'const APP_V=(\d+);', js)
print(f'dist/app.html {len(app)} bytes · index.html {len(out)} bytes · versão {av.group(1) if av else "?"} · cache sw v{v.group(1) if v else "?"}')
