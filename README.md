# Carreira em Dados 2027

App pessoal de rotina para a transição de carreira para Analista de BI/Dados: cronograma diário de 07/12/2026 em diante, cursos, flashcards com revisão espaçada, checklist da PL-300, portfólio, perfil profissional e controle de candidaturas.

- Versão instalável: https://pedro1105.github.io/carreira-dados/
- A mesma página também é publicada no claude.ai (`src/app.html`, sem `<html>`/`<head>`).

## Como funciona

- `src/app.html` é a fonte. `python3 build.py` gera `index.html` com manifest, ícones e service worker.
- Ao publicar uma versão nova, troque o cache em `sw.js` (`carreira-vN`).
- Sincronização entre aparelhos: tabela `progress` do Supabase do projeto Estudos Transpetro, pelas funções `tp_get`/`tp_save`/`tp_ver`, com códigos `cd-…`. No claude.ai a página usa o conector Supabase; aqui chama a API direto.
- Notificações: a inscrição push e o plano dos próximos 14 dias vão pela função `tp_push`; a Edge Function `tp-push` (no repositório estudos-transpetro) envia o que venceu.
