// Teste de fumaça: abre o index.html no celular e no computador, passa por todas as telas,
// clica nas sub-abas, grupos, seções recolhidas, marca uma tarefa e inicia o cronômetro.
// Falha (código 1) se aparecer qualquer erro de JavaScript.
// Uso: python3 build.py && node tests/telas.js [AAAA-MM-DD ...]
// Sem datas, testa antes do plano (hoje), no meio (12/01/2027) e depois da baixa (15/04/2027).
// Não acessa a internet: Supabase e sites externos ficam bloqueados, então nada vai para a sincronização.
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.css': 'text/css' };
const VIEWS = ['hoje', 'agenda', 'cursos', 'rev', 'port', 'perfil', 'prog', 'config'];
const dates = process.argv.slice(2).length ? process.argv.slice(2) : [null, '2027-01-12', '2027-04-15'];

const srv = http.createServer((q, r) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r);
});

(async () => {
  await new Promise(ok => srv.listen(0, ok));
  const url = 'http://localhost:' + srv.address().port + '/index.html';
  const b = await chromium.launch(); let fail = 0;
  for (const date of dates) for (const [name, vp] of [['celular', { width: 390, height: 844 }], ['computador', { width: 1366, height: 900 }]]) {
    const ctx = await b.newContext({ viewport: vp, serviceWorkers: 'block' });
    await ctx.route('**/*', r => r.request().url().startsWith('http://localhost') ? r.continue() : r.abort());
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    if (date) await p.clock.install({ time: new Date(date + 'T10:00:00') });
    await p.goto(url); await p.waitForTimeout(600);
    let clicks = 0;
    for (const v of VIEWS) {
      await p.evaluate(v => go(v), v); await p.waitForTimeout(80);
      const wide = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      if (wide) errs.push('tela ' + v + ' mais larga que a janela');
      for (const sel of ['[data-est]', '[data-r]', '[data-ps]', '[data-pm]', '[data-pg]', '.seg button[data-s]', 'summary']) {
        const n = await p.$$eval('#view ' + sel, e => e.length);
        for (let i = 0; i < Math.min(n, 25); i++) { const els = await p.$$('#view ' + sel); if (!els[i]) break; try { await els[i].click({ timeout: 500 }); clicks++; } catch (e) { } }
      }
    }
    await p.evaluate(() => go('hoje')); await p.waitForTimeout(80);
    const cb = await p.$('#view .task input[type=checkbox]:visible'); if (cb) { await cb.click(); clicks++; }
    const tm = await p.$('#view [data-tm]:visible'); if (tm) { await tm.click(); clicks++; }
    const fg = await p.$('#focusGo'); if (fg) { await fg.click(); clicks++; for (const id of ['#fGo', '#fP', '#fP', '#fOk', '#fX']) { const e = await p.$(id); if (e) { await e.click(); clicks++; await p.waitForTimeout(50); } } }
    await p.evaluate(() => go('config')); clicks += await p.$$eval('#view input[type=checkbox][id^=cHc-]', es => { es.forEach(e => { for (let i = 0; i < 2; i++) { e.checked = !e.checked; e.dispatchEvent(new Event('change')); } }); return es.length * 2; });
    for (const bt of await p.$$('#tabs button')) { await bt.click(); clicks++; }
    await p.click('#progBtn'); await p.click('#cfgBtn'); clicks += 2;
    console.log((date || 'hoje') + ' · ' + name + ': ' + clicks + ' cliques, ' + (errs.length ? errs.length + ' erro(s)' : 'sem erro'));
    errs.forEach(e => console.log('   ' + e)); if (errs.length) fail = 1;
    await ctx.close();
  }
  await b.close(); srv.close(); process.exit(fail);
})();
