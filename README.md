# Carreira em Dados 2027

App pessoal de rotina para a transição de carreira para Analista de BI/Dados: cronograma diário de 07/12/2026 em diante, cursos, flashcards com revisão espaçada, checklist da PL-300, portfólio, carreira (LinkedIn, vagas, documentos) e progresso.

- Versão instalável: https://pedro1105.github.io/carreira-dados/ (GitHub Pages, publica sozinho a cada push na `main`). O Netlify antigo parou na v17 e não é mais usado.
- A mesma página também é publicada no claude.ai (`dist/app.html`, sem `<html>`/`<head>`).

## Onde fica cada coisa

| Arquivo | O que tem |
|---|---|
| `src/data.js` | Listas e textos fixos: fases, cursos, projetos, cartões, pendências, textos do LinkedIn, notas de versão (`NEWS`) |
| `src/app.js` | A lógica: cronograma, telas, sincronização, áudio, tutor |
| `src/styles.css` | Visual (tokens de cor claro/escuro e layout) |
| `src/head.html`, `src/body.html` | Título, cabeçalho e abas |
| `build.py` | Junta tudo em `dist/app.html` (claude.ai) e `index.html` (GitHub Pages) |
| `tests/telas.js` | Teste de todas as telas no celular e no computador, em 3 datas |

## Publicar uma versão nova

1. Edite os arquivos em `src/`. Suba `APP_V` em `src/app.js` e escreva `NEWS[APP_V]` em `src/data.js` (uma frase).
2. Troque o cache em `sw.js` (`carreira-vN`).
3. `python3 build.py` e `node tests/telas.js` (precisa do Playwright; tem de terminar "sem erro").
4. Push na `main` e publique `dist/app.html` no artifact do claude.ai.

## Sincronização e avisos

- Entre aparelhos: tabela `progress` do Supabase do projeto Estudos Transpetro, pelas funções `tp_get`/`tp_save`/`tp_ver`, com códigos `cd-…`. No claude.ai a página usa o conector Supabase; aqui chama a API direto.
- Notificações: a inscrição push e o plano dos próximos 14 dias vão pela função `tp_push`; a Edge Function `tp-push` (no repositório estudos-transpetro) envia o que venceu.
