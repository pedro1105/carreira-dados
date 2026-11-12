/* Dados do app Carreira em Dados: listas e textos fixos (sem lógica). Gerado a partir do app em 12/11/2026; edite aqui. */
const PHASES=[
 {id:"f0",n:"Fase 0 · Base (férias)",a:"2026-12-07",b:"2027-01-03",h:"cerca de 20 h/semana (férias)",goal:"Excel intermediário com certificado, Git, SQL básico, primeiro painel no Power BI, currículos A e B, LinkedIn e GitHub com cara profissional."},
 {id:"f1",n:"Fase 1 · Fundamentos",a:"2027-01-04",b:"2027-02-28",h:"cerca de 15 h/semana até o Carnaval (tardes livres), depois 10 h (noites)",goal:"SQL e Power BI do curso completo, modelagem e DAX, PL-300 aprovada (02/02), projetos 1 e 2 publicados, Python, currículo pronto e candidaturas para início em março."},
 {id:"f2",n:"Fase 2 · Certificação",a:"2027-03-01",b:"2027-05-31",h:"cerca de 20 h/semana de estudo + busca de vaga (civil)",goal:"Projeto 3 publicado (até 17/03), estatística, governança e LGPD, AI-901, Fabric e liderança (cursos até 20/04) e 15 candidaturas por semana."},
 {id:"f3",n:"Fase 3 · Primeira vaga",a:"2027-06-01",b:"2027-09-30",h:"cerca de 20 h/semana de estudo + busca de vaga",goal:"Candidaturas e networking toda semana, melhorias nos 3 projetos e revisão trimestral. Meta: vaga até 30/06 (otimista) ou 30/09 (realista)."}
];
const COURSES=[
 {id:"claude",n:"Claude como tutor de estudos",plat:"Udemy (assinatura)",free:true,src:"Domine o Claude AI, Claude Cowork e Engenharia de Prompts (Paulo Andrade, nota 4,7, 5 h, iniciante). Cobre Projetos, Skills, Conectores, Cowork e Artefatos. Aprenda a usar o Claude para explicar erros, revisar SQL e DAX e montar resumos, sempre conferindo o resultado.",u:"https://www.udemy.com/course/claude-e-engenharia-de-prompts/",alt:"Na lista Trilha BI 2026-2027 da Udemy. Para ir mais fundo depois: Claude – Domine Cowork, Claude Code, Skills e Plugins e Claude Code do Zero (Kleber Bernardo), opcionais no Módulo 4.",s:["Primeiro quarto do curso: conversas e engenharia de prompts","Projetos, Skills e Conectores","Cowork e Artefatos","Montar seu prompt de tutor para SQL, DAX e Excel e testar com um erro real"]},
 {id:"excel",n:"Excel e Power Query",plat:"Udemy (já tenho)",free:true,src:"Tratativas de Dados no Excel via Power Query + Excel do Básico ao Avançado + SQL + Dashboards com Power BI (Edmilson Alves dos Santos). Do Edmilson, faça os módulos de Excel avançado; os de SQL e Power BI servem de primeiro contato. Pule o básico se passou no diagnóstico.",u:"https://www.udemy.com/course/excel-sql-powerbi/",alt:"Power Query: curso Tratativas de Dados no Excel via Power Query (Pedro Henrique Franco), na lista Trilha BI 2026-2027 da Udemy. Reserva: 7 Cursos em 1 (Jilson Santana).",s:["Fórmulas essenciais: SOMASES, CONT.SES e SE aninhado","PROCX/PROCV e ÍNDICE + CORRESP","Tabelas dinâmicas e gráficos dinâmicos","Power Query: importar, limpar e transformar","Power Query: mesclar e acrescentar consultas","Desafio: painel de controle administrativo no Excel"]},
 {id:"git",n:"Git e GitHub para portfólio",plat:"Grátis",free:true,src:"GitHub Learn (antigo GitHub Skills) + Curso em Vídeo (Git e GitHub)",u:"https://learn.github.com/skills",alt:"",s:["Instalar o Git, criar o primeiro repositório","Commit, push e README em Markdown","Branches, .gitignore e pastas de um projeto de dados"]},
 {id:"sql",n:"SQL do zero ao intermediário",plat:"Udemy (assinatura)",free:true,src:"SQL para Análise de Dados: Do básico ao avançado (Midori Toyota): nota 4,8, 9 mil avaliações, 6 h, focado no que o analista de BI usa no dia a dia. Por ser curto, sobra tempo para praticar cada aula.",u:"https://www.udemy.com/courses/search/?q=SQL%20para%20An%C3%A1lise%20de%20Dados%20Midori%20Toyota",alt:"Consulta: O curso completo de Banco de Dados e SQL (Felipe Mafra, 4,7, 58,5 h), só para tirar dúvidas de um tema. Reserva: curso do André Krul, que você já tem. Treino grátis: SQLBolt e Kaggle Learn.",s:["Preparar o ambiente indicado no curso; SELECT e WHERE","ORDER BY, LIMIT, BETWEEN, IN e LIKE","Agregações: COUNT, SUM, AVG e GROUP BY","HAVING e desafios de agregação","JOINs: INNER e LEFT","JOINs: FULL, SELF e desafios","Funções de data e de texto","Subconsultas","CREATE TABLE, tipos, chaves primária e estrangeira","INSERT, UPDATE, DELETE e constraints","CASE, COALESCE, NULLIF e VIEWs","Projeto do curso e revisão geral"]},
 {id:"pbi",n:"Power BI Desktop",plat:"Udemy (já tenho)",free:true,src:"Master Power BI – De A à Z (Felipe Mafra): nota 4,7, mais de 14 mil avaliações, 20,5 h. Depois vem o Master DAX, do mesmo professor, que continua de onde este para.",u:"https://www.udemy.com/course/curso-completo-master-power-bi/",alt:"Reserva: Formação Microsoft Power BI Profissional (André Rosa). Opcional no Módulo 2: Business Intelligence Completo do ETL ao Power BI na Prática (André Rosa), como modelo de projeto para o portfólio.",s:["Interface e fluxo de trabalho do Power BI","Power Query: conexão e perfil dos dados","Transformações: tipos, colunas, dinamizar e despivotar","Mesclar, acrescentar e boas práticas de consulta","Modelo de dados: tabelas fato e dimensão","Relacionamentos, cardinalidade e direção de filtro","Tabela calendário","DAX: colunas calculadas x medidas","DAX: SUM, COUNTROWS, DIVIDE e CALCULATE","DAX: ALL, FILTER e REMOVEFILTERS","DAX: inteligência de tempo (acumulado no ano, mês anterior)","Visuais: escolher o gráfico certo","Interatividade: segmentações, drill e dicas de ferramenta","Layout e storytelling do relatório","Power BI Service: publicar, compartilhar e atualizar","Projeto final do curso"]},
 {id:"model",n:"Modelagem dimensional",plat:"Grátis",free:true,src:"The Data Warehouse Toolkit (Kimball), cap. 1–3 + vídeos da SQLBI",u:"https://www.sqlbi.com/topics/data-modeling/",alt:"",s:["Esquema estrela x floco de neve","Granularidade e tabelas fato","Dimensões e chaves substitutas","Exercício: modelar o projeto 1 no papel e no SQL"]},
 {id:"dax",n:"DAX a fundo",plat:"Udemy (já tenho)",free:true,src:"Master DAX – Power BI orientado a projeto (Felipe Mafra), com o Introducing DAX da SQLBI (grátis) para a teoria de contexto",u:"https://www.udemy.com/course/powerbi-dax/",alt:"Introducing DAX (SQLBI, grátis): https://www.sqlbi.com/p/introducing-dax-video-course/",s:["Contexto de linha x contexto de filtro","CALCULATE a fundo","Iteradores: SUMX e AVERAGEX","Variáveis e legibilidade das medidas","RELATED e USERELATIONSHIP","Desafios de DAX"]},
 {id:"sqladv",n:"SQL avançado para análise",plat:"Grátis",free:true,src:"Kaggle Learn – Advanced SQL",u:"https://www.kaggle.com/learn/advanced-sql",alt:"",s:["CTEs (WITH)","Funções de janela: ROW_NUMBER e RANK","Janela: LAG, LEAD e somas acumuladas","Noções de desempenho e índices"]},
 {id:"ia1",n:"IA generativa para quem trabalha com dados",plat:"Grátis",free:true,src:"Generative AI for Everyone (DeepLearning.AI, Coursera, modo ouvinte gratuito)",u:"https://www.coursera.org/learn/generative-ai-for-everyone",alt:"",s:["Como funcionam os modelos de linguagem e seus limites","Usar IA para escrever e revisar SQL e DAX, conferindo sempre o resultado","Privacidade, LGPD e ética no uso de IA no trabalho"]},
 {id:"pl300",n:"Preparação PL-300",plat:"Udemy + Microsoft Learn",free:true,src:"Power BI Completo: do Básico ao Avançado + SQL e PL-300 (Ricardo Pacheco, nota 4,8, 24 h), com 60 questões no formato da prova, junto com a trilha oficial grátis do Microsoft Learn",u:"https://www.udemy.com/courses/search/?q=Power%20BI%20Completo%20Ricardo%20Pacheco%20PL-300",alt:"Trilha oficial: learn.microsoft.com/pt-br/credentials/certifications/data-analyst-associate/. A prova é paga (valor em reais no site da Microsoft); fique de olho em desafios do Microsoft Learn que dão desconto.",s:["Preparar dados (parte 1)","Preparar dados (parte 2)","Modelar dados (parte 1)","Modelar dados (parte 2)","Modelar dados: DAX para o exame","Visualizar e analisar (parte 1)","Visualizar e analisar (parte 2)","Implantar e manter: workspaces e RLS","Implantar e manter: gateway e atualização","Revisão dos pontos fracos","Simulado oficial 1","Corrigir os erros do simulado 1","Simulado oficial 2","Revisão final e agendamento da prova"],exam:"Fazer a prova PL-300"},
 {id:"copilot",n:"Copilot e IA no Excel e no Power BI",plat:"Udemy (assinatura) + grátis",free:true,src:"Microsoft Copilot for Excel: AI-Powered Data Analysis (Maven Analytics, 4,6, 2 h, em inglês com legendas) + Microsoft Learn – Copilot no Power BI e no Fabric",u:"https://www.udemy.com/courses/search/?q=Microsoft%20Copilot%20for%20Excel%20Maven%20Analytics",alt:"Se o inglês pesar, ative as legendas em português da Udemy. Copilot no Power BI: learn.microsoft.com/pt-br/power-bi/create-reports/copilot-introduction",s:["Curso de Copilot para Excel (Maven Analytics)","O que o Copilot faz no Power BI e no Fabric","Prática: gerar medidas e resumos e validar cada resposta"]},
 {id:"py",n:"Python para análise de dados",plat:"Udemy (já tenho)",free:true,src:"Análise de Dados com Pandas: do Zero ao Dashboard (Rodrigo Macedo e Diego Davila): 28 h, nota 4,8, atualizado em 10/2026. Faça os módulos de Python, Pandas, transformação e análise exploratória.",u:"https://www.udemy.com/course/analise-de-dados-com-python-e-pandas/",alt:"Grátis: Kaggle Learn – Python e Pandas (https://www.kaggle.com/learn/pandas)",s:["Python básico: variáveis e tipos","Listas, dicionários e laços","Funções","Pandas: ler CSV e explorar","Filtrar, ordenar e agrupar","Juntar tabelas (merge)","Datas e limpeza de dados","Gráficos com matplotlib e seaborn","Notebook de análise completa","Publicar o notebook no GitHub"]},
 {id:"ia2",n:"IA aplicada a dados",plat:"Grátis",free:true,src:"Documentação de APIs de IA com camada gratuita + prática própria",u:"https://www.kaggle.com/learn",alt:"",s:["Prompting para análise: descrever dados e pedir hipóteses","Chamar uma API de IA em Python para classificar textos","Avaliar a IA: conferir uma amostra à mão","Documentar o uso de IA no portfólio"]},
 {id:"stats",n:"Estatística para análise",plat:"Grátis",free:true,src:"Khan Academy – Estatística e probabilidade",u:"https://pt.khanacademy.org/math/statistics-probability",alt:"Reforço: módulo Estatística Aplicada do seu curso de Pandas (Udemy)",s:["Média, mediana, moda e dispersão","Distribuições e outliers","Amostragem e margem de erro","Correlação x causalidade","Teste A/B em linguagem simples","Aplicar estatística descritiva num projeto"]},

 {id:"gov",n:"Governança de dados, LGPD e segurança",plat:"ENAP + Udemy (já tenho)",free:true,src:"Escola Virtual.Gov (ENAP), grátis e com certificado: Governança de Dados; Governança de Dados na Transformação Digital; Fundamentos da LGPD. Depois, seu curso ISO 27001 & 27002 na Prática (Tiago Souza, Udemy).",u:"https://www.escolavirtual.gov.br/curso/270",alt:"Links: escolavirtual.gov.br/curso/270 · /curso/536 · /curso/603 · udemy.com/course/iso-27002-guia-completo-93-controles-pratica/",s:["ENAP Governança de Dados: inscrição e módulos iniciais","ENAP Governança de Dados: conclusão e certificado","ENAP Governança de Dados na Transformação Digital: módulos 1 e 2","ENAP Governança de Dados na Transformação Digital: conclusão e certificado","ENAP Fundamentos da LGPD: primeira metade","ENAP Fundamentos da LGPD: conclusão e certificado","ISO 27001 & 27002: o que é um SGSI e os controles organizacionais","ISO 27002: controles de pessoas, físicos e tecnológicos","Aplicar no portfólio: revisar o dicionário de dados e as regras de qualidade dos projetos 2 e 3 e atualizar os READMEs"]},
 {id:"sc900",n:"Segurança, conformidade e identidade (SC-900)",plat:"Grátis",free:true,src:"Microsoft Learn: trilha da SC-900 e o módulo do Purview \"Governar e proteger informações confidenciais na era da IA\", os dois na sua coleção \"Certificações Microsoft – Roteiro 2027-2028\". É a certificação que mais conversa com governança e LGPD. A prova é opcional e paga.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/security-compliance-and-identity-fundamentals/",alt:"",s:["Conceitos de segurança, conformidade e identidade","Microsoft Entra: identidade e controle de acesso","Microsoft Purview: classificação, rótulos e retenção de dados","Purview: Governar e proteger informações confidenciais na era da IA","Revisão e avaliação prática gratuita da SC-900"]},
 {id:"ai900",n:"Fundamentos de IA (AI-901)",plat:"Grátis",free:true,src:"Microsoft Learn – trilha da AI-901, que substituiu a AI-900 em 30/06/2026. A prova é opcional e paga e pede noções de Python (você terá visto em fevereiro).",u:"https://learn.microsoft.com/pt-br/credentials/certifications/azure-ai-fundamentals/",alt:"",s:["Conceitos de IA e IA responsável","Modelos generativos, prompts e agentes","Texto, fala e visão computacional","Microsoft Foundry na prática","Revisão e simulado gratuito"]},
 {id:"dp900",n:"Fundamentos de dados no Azure (DP-900)",plat:"Grátis",free:true,src:"Microsoft Learn: trilha da DP-900, na sua coleção \"Certificações Microsoft – Roteiro 2027-2028\". Base de bancos de dados, ETL e nuvem antes do Fabric. A prova é opcional e paga.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/azure-data-fundamentals/",alt:"",s:["Conceitos de dados: relacional, não relacional e analítico","Bancos de dados relacionais no Azure","Dados não relacionais e armazenamento","Analytics em larga escala e em tempo real","Revisão e avaliação prática gratuita da DP-900"]},
 {id:"fabric",n:"Microsoft Fabric para analistas",plat:"Grátis",free:true,src:"Microsoft Learn – Fabric (base para a futura DP-600, que está na sua coleção \"Certificações Microsoft – Roteiro 2027-2028\")",u:"https://learn.microsoft.com/pt-br/training/fabric/",alt:"",s:["O que é o Fabric: lakehouse e warehouse","Dataflows Gen2","Lakehouse e modelos semânticos","Governança e workspaces","Direct Lake","Mini-projeto no Fabric (avaliação gratuita)"]},
 {id:"lider",n:"Liderança e gestão de equipes",plat:"Grátis",free:true,src:"Escola Virtual.Gov (ENAP), grátis e com certificado: Liderança e Gestão de Equipes (30 h) e Desenvolvendo Times de Alta Performance (30 h). Inscrição a qualquer momento.",u:"https://www.escolavirtual.gov.br/curso/373",alt:"Segundo curso: escolavirtual.gov.br/curso/356. Guarde os certificados na aba Carreira → Certificados.",s:["Liderança e Gestão de Equipes: essência da liderança","Liderança e Gestão de Equipes: técnicas de trabalho em equipe","Liderança e Gestão de Equipes: clima organizacional e certificado","Times de Alta Performance: competências gerenciais","Times de Alta Performance: coaching e feedback","Times de Alta Performance: ferramentas e certificado"]},
 {id:"pl900",n:"Power Platform (PL-900, opcional)",plat:"Grátis",free:true,src:"Microsoft Learn: trilha da PL-900, na sua coleção \"Certificações Microsoft – Roteiro 2027-2028\". Power Automate e Power Apps para automatizar controles: pesa nas vagas administrativas, de planejamento e de controladoria. Opcional: se estiver sem tempo, pule.",u:"https://learn.microsoft.com/pt-br/credentials/certifications/power-platform-fundamentals/",alt:"",s:["Visão geral da Power Platform e do Dataverse","Power Automate: automatizar um controle administrativo","Power Apps: um app simples de cadastro","Revisão e avaliação prática gratuita da PL-900"]},
];
const PROJECTS=[
 {id:"p1",sn:"LAI",n:"Prazos da Lei de Acesso à Informação no governo federal (SLA) com governança",repo:"lai-prazos-sla",why:"Projeto 1 de 3. SLA de verdade: cada pedido da LAI tem prazo legal de 20 dias (+10). Com dados reais da CGU, mostra o ciclo completo de BI (Power Query, SQL, modelagem, DAX, painel) e o seu diferencial: governança, qualidade, LGPD em texto real, segurança por linha e IA conferida. Liga com o seu curso de Acesso à Informação da ENAP.",src:"CGU: pedidos e recursos da LAI (dados abertos)",u:"https://buscalai.cgu.gov.br/",skills:"Power Query, MySQL, SQL (JOIN, CTE, janela), modelagem estrela, DAX, Power BI, RLS, qualidade de dados, LGPD, IA, Copilot",s:["Entender o negócio: a LAI e seus prazos (20 dias + 10), 6 perguntas, os indicadores (% no prazo, tempo médio, taxa de negativa, recursos) e quem usaria o painel","Baixar 2 anos de pedidos e recursos na CGU e ler o dicionário oficial dos arquivos","Power Query: juntar os arquivos, acertar tipos e datas e padronizar, anotando cada passo","Perfil dos dados reais: nulos, duplicados, datas impossíveis e órgãos com nomes diferentes (relatório de qualidade, parte 1)","MySQL: modelo estrela (fato_pedido, fato_recurso, dim_orgao, dim_assunto, dim_data)","SQL: 8 consultas de negócio com JOIN, GROUP BY, CTE e função de janela (ranking de órgãos por atraso)","Qualidade de dados: regras de validação em SQL e relatório de qualidade (parte 2)","Dicionário de dados e catálogo: cada coluna com descrição, tipo, regra e dono","Power BI: modelo estrela, relacionamentos e tabela calendário","DAX: % no prazo, tempo médio, backlog, taxa de negativa, acumulado do ano e comparação com o ano anterior","Página 1: visão executiva (indicadores e tendência)","Página 2: órgãos e gargalos, com drill-through (inclua o Comando da Aeronáutica)","Página 3: qualidade dos dados, ligada ao relatório de qualidade","Segurança e LGPD: RLS por órgão; os textos dos pedidos podem ter dados pessoais, então mascare antes de qualquer uso e nunca publique o texto","IA com critério: classificar o assunto de 300 pedidos (texto mascarado) com IA e medir a concordância com a sua revisão","IA no Power BI: peça uma medida ou página ao Copilot (se tiver acesso) ou ao Claude, confira cada número contra o SQL e registre o que a IA errou","Publicar: Power BI na web (ou PDF) e vídeo de 2 min explicando o painel","README completo (perguntas, modelo, qualidade, LGPD, decisões), GitHub e post no LinkedIn","README em inglês: versão curta (problem, data, model, findings) para vagas de empresas maiores"],ok:["As 6 perguntas e os 4 indicadores estão no README, com quem usaria o painel.", "Os arquivos de 2 anos estão em data/raw e você sabe o que é cada coluna do dicionário oficial.", "Uma consulta única no Power Query junta tudo, sem erro, com tipos certos e passos renomeados.", "O relatório de qualidade (parte 1) tem a contagem de nulos, duplicados e datas impossíveis.", "As 5 tabelas estão carregadas no MySQL, com chaves, e o script está em sql/01_criar_tabelas.sql.", "As 8 consultas rodam, estão comentadas no repositório e cada uma responde a uma pergunta.", "Cada regra de validação tem uma consulta e o relatório mostra quantos registros falharam.", "Toda coluna das tabelas finais está no dicionário, com descrição, tipo, regra e dono.", "O modelo está em estrela, com relações 1:N e a calendário marcada como tabela de datas.", "As medidas batem com o SQL para o mesmo filtro (anote 2 conferências no diário).", "A página mostra os 4 indicadores e a tendência, e alguém de fora entende em 10 segundos.", "O drill-through abre o detalhe de um órgão e o Comando da Aeronáutica aparece no filtro.", "A página mostra os números do relatório de qualidade e diz o quanto confiar nos dados.", "A RLS foi testada com Exibir como e nenhum texto de pedido aparece no painel ou no repositório.", "A concordância entre a IA e a sua revisão está calculada e registrada no README.", "Cada número da IA foi conferido no SQL e os erros dela estão listados no README.", "O link do painel (ou o PDF) abre e o vídeo de 2 min está publicado (gravado 2 vezes, ficou o melhor).", "O README tem todas as seções, o repositório está público e o post está no ar.", "O README em inglês tem as 4 seções e foi revisado sem erro grave."]},
 {id:"p2",sn:"Defesa",n:"Dinheiro público da Defesa: orçamento, compras e viagens",repo:"defesa-gastos-publicos",why:"Projeto 2 de 3. Junta o que você viu na prática (empenho, pregão, contratos, diárias) com dados reais e grandes. Mostra ETL com várias fontes, modelo com mais de um fato, reconciliação de totais, Python e storytelling: o projeto para vagas administrativas, de controladoria e do setor público.",src:"Portal da Transparência (despesas e viagens) · PNCP (contratações públicas)",u:"https://portaldatransparencia.gov.br/download-de-dados",skills:"Power Query, Python (pandas), MySQL, SQL, modelo com vários fatos, inteligência de tempo em DAX, curva ABC, storytelling",s:["Definir as perguntas: quanto se empenha, liquida e paga; de quem se compra; quanto se gasta em viagens","Baixar as despesas de Aeronáutica, Exército e Marinha (2020–2026) no Portal da Transparência","Power Query: juntar e limpar os arquivos de despesas","Baixar os contratos do Ministério da Defesa no PNCP (2024–2026)","Power Query: limpar contratos e fornecedores (CNPJ, modalidade, datas)","MySQL: modelo com fatos de despesa e contrato e dimensões compartilhadas (órgão, data, natureza)","SQL: execução orçamentária, top 10 fornecedores, curva ABC e tempo de processo","Validação: conferir os totais com o Portal (reconciliação) e registrar no relatório de qualidade","Power BI: modelo com vários fatos e inteligência de tempo","DAX: empenhado, liquidado, pago, % de execução, variação anual e curva ABC","Estatística: a execução mudou de verdade entre os anos e entre as Forças? Média, mediana e correlação no Excel, com conclusão em linguagem de gestor (o curso de estatística vem em março: depois dele, acrescente um teste simples)","Página 1: execução orçamentária comparando as três Forças","Página 2: compras e contratos (fornecedores, modalidades, tempo de processo)","Python (pandas): baixar e limpar diárias e passagens (se ainda não fez o curso de Python, faça em Power Query e refaça depois)","Página 3: viagens (gasto por destino e antecedência da compra)","Página de resumo: 3 achados com recomendação, como numa reunião com a chefia","Automação da atualização (Power Query agora; script Python depois do curso), README, GitHub e post no LinkedIn","README em inglês: versão curta (problem, data, model, findings)"],ok:["As perguntas estão no README, cada uma com o indicador que a responde.", "Os arquivos de 2020 a 2026 das três Forças estão em data/raw, com a data do download anotada.", "Uma consulta única junta todos os anos, sem erros e com valores em número.", "Os contratos de 2024 a 2026 estão baixados e você sabe o que cada coluna significa.", "CNPJ, modalidade e datas estão padronizados e não há fornecedor repetido com grafia diferente.", "O modelo está no MySQL com os dois fatos ligados às mesmas dimensões, e o script está no repositório.", "As consultas rodam e o top 10 de fornecedores bate com o Portal da Transparência.", "A diferença entre o seu total e o do Portal é menor que 1% em cada ano, ou a causa está explicada.", "Os dois fatos filtram juntos por calendário e órgão, sem números repetidos.", "As medidas batem com o SQL e a curva ABC classifica todos os fornecedores.", "Média, mediana e correlação estão calculadas e a conclusão cabe em 3 frases para a chefia.", "A página compara as três Forças no mesmo eixo e destaca a maior diferença no título.", "A página mostra fornecedores, modalidades e tempo de processo, com filtro por ano.", "Diárias e passagens estão limpas, com o código (ou os passos do Power Query) no repositório.", "A página mostra gasto por destino e antecedência, com um achado escrito no título.", "Os 3 achados têm número, causa provável e recomendação, como numa reunião.", "A atualização roda com um clique (ou um script), o README está completo e o post está no ar.", "O README em inglês tem as 4 seções e foi revisado sem erro grave."]},
 {id:"p3",sn:"Combustíveis",n:"Combustíveis no Brasil: preços, vendas e previsão",repo:"combustiveis-anp",why:"Projeto 3 de 3. Assunto de entrevista na Transpetro e em energia e logística. Mostra Python, séries temporais, previsão, detecção de valores fora do normal, Microsoft Fabric e IA para resumir números, com governança (linhagem e qualidade).",src:"ANP: dados abertos (preços na bomba e vendas de derivados)",u:"https://www.gov.br/anp/pt-br/centrais-de-conteudo/dados-abertos",skills:"Python (pandas), séries temporais, previsão, Fabric (lakehouse), DAX, mapas, IA, linhagem de dados",s:["Perguntas de negócio (preço por região, sazonalidade, logística) e contexto do transporte de combustíveis","Baixar a série de preços na bomba e as vendas de derivados por UF na ANP","Power Query: tratar a série histórica (datas, unidades, UF)","Modelo semântico: fato preços, fato vendas, dimensão UF e região, calendário","DAX: variação anual, média móvel, ranking por UF e participação","Página de mapa por UF e preços por região","Página de vendas e sazonalidade","Python: análise exploratória (tendência, sazonalidade e valores fora do normal), com gráficos","Python: alertas das semanas com variação fora do normal (anomalias) e página no painel","Previsão simples de preço ou venda e um parágrafo explicando o limite dela","Estatística: correlação entre preço e vendas e um teste simples da diferença de preço entre regiões, explicando o que o resultado prova e o que não prova","Fabric (avaliação gratuita): levar os arquivos para um lakehouse e refazer a carga num notebook (se preferir, deixe para depois do curso de Fabric, em abril)","IA: resumo automático dos números do mês, conferido por você e com aviso de limite","Governança: dicionário, linhagem (de onde vem cada número) e checagens de qualidade","README com contexto de logística, publicar e postar no LinkedIn","README em inglês: versão curta (problem, data, model, findings), útil também para a Transpetro"],ok:["As perguntas e o contexto de logística estão no README, com a fonte de cada dado.", "As séries de preço e de vendas por UF estão em data/raw, com o período anotado.", "A série tem datas, unidades e UF padronizadas, sem semanas duplicadas.", "O modelo tem os dois fatos ligados à UF e ao calendário e filtra sem erro.", "As medidas batem com uma conta feita à mão para uma UF e um mês.", "O mapa mostra o preço por UF e a página deixa clara a diferença entre as regiões.", "A página mostra a sazonalidade, com o mês mais forte e o mais fraco no título.", "O notebook roda do começo ao fim, com gráficos de tendência, sazonalidade e valores fora do normal.", "As semanas fora do normal aparecem no painel, com a regra usada explicada.", "A previsão tem o erro medido (ex.: erro médio em reais) e o parágrafo do limite está escrito.", "Correlação e teste estão calculados e o texto diz o que prova e o que não prova.", "Os arquivos estão no lakehouse e o notebook refaz a carga, ou a etapa ficou marcada para depois do curso de abril.", "O resumo da IA foi conferido número por número e tem o aviso de limite.", "Dicionário, desenho da linhagem e checagens de qualidade estão no repositório.", "O README está completo, o painel publicado e o post no ar.", "O README em inglês tem as 4 seções e foi revisado sem erro grave."]}
];
const BRAND=[
 {id:"pes",g:"car",t:"Seção de Pessoal: data do licenciamento, férias, compensação pecuniária e correção do SIGPES",d:"Confirme a data do licenciamento, as férias a gozar e a compensação pecuniária. Peça também a correção das funções no SIGPES (constam Pessoal e Processos Disciplinares, e o SD nas funções) e confirme o registro do CFC e do CESD. Pergunte quais documentos pedir na saída (certidão de tempo de serviço, alterações)."},
 {id:"drv",g:"red",t:"Drive pessoal: apagar arquivos da FAB com dados de terceiros",d:"Fichas, telefones, identidades, placas e documentos internos não podem ficar no seu Drive (LGPD e segurança orgânica). Guarde só modelos sem dados reais. Nada disso entra no portfólio."},
 {id:"exB",g:"car",t:"Certificado de Excel para o currículo (Caminho Digital ou Fundação Bradesco)",d:"Gratuitos e com certificado. Caminho Digital: gov.br/trabalho-e-emprego, Qualificação profissional. Fundação Bradesco: ev.org.br. Vale para a Frente B já em fevereiro."},
 {id:"mail",g:"red",t:"Criar e-mail profissional e definir seu nome profissional",d:"Formato nome.sobrenome@gmail.com. Use o nome completo do diploma ou uma forma curta fixa, igual em todas as redes."},
 {id:"gh1",g:"gh",t:"GitHub: ativar a verificação em duas etapas",d:"Mantenha o usuário pedro1105: os links do GitHub Pages (este app e o da Transpetro) dependem dele. Ative a verificação em duas etapas em Settings → Password and authentication, se ainda não ativou."},
 {id:"gh2",g:"gh",t:"GitHub: foto, bio, cidade e link do LinkedIn",d:"Feito em 11/11/2026: nome profissional, foto, bio de dados e BI, Rio de Janeiro, link do LinkedIn e e-mail profissional verificado."},
 {id:"li1",g:"li",t:"LinkedIn: foto profissional",d:"Rosto ocupando 60% da foto, fundo neutro, roupa civil, boa luz. Celular com modo retrato resolve."},
 {id:"li2",g:"li",t:"LinkedIn: título",d:"Use o texto pronto da aba Carreira → LinkedIn."},
 {id:"li3",g:"li",t:"LinkedIn: seção Sobre",d:"Use o seu texto, montado a partir da carta de recomendação, ou o modelo da aba Carreira → LinkedIn. Nunca publique a carta inteira: ela tem CPF."},
 {id:"red1",g:"red",t:"Redes: revisar o Instagram (e Facebook e TikTok, se tiver)",d:"Pelo celular: decida entre privado ou público, ponha a foto profissional, uma bio curta com o link do LinkedIn e revise os posts antigos. Recrutador pesquisa seu nome: nada de farda ou rotina interna da FAB."},
 {id:"li4",g:"li",t:"LinkedIn: experiência na FAB com bullets",d:"Use o texto da aba Carreira → LinkedIn: um cargo para cada função (SAT, recepção do III COMAR, patrimônio, Honras e Ala 11), dentro da mesma empresa. Escreva sempre como auxiliar do chefe e do encarregado."},
 {id:"li5",g:"li",t:"LinkedIn: certificados da ENAP e competências",d:"A formação (ADS, Estácio) já está feita. Em Licenças e certificados: LGPD, Acesso à Informação, Ética e Serviço Público, Gestão da Ética Pública, com o código de validação da EV.G. Ligue cada certificado às competências (LGPD, Gestão documental, Excel)."},
 {id:"li8",g:"li",t:"LinkedIn: URL personalizada",d:"linkedin.com/in/seu-nome. Use a mesma no currículo e no GitHub."},
 {id:"car1",g:"car",t:"Currículo: versão 1 (uma página)",d:"Feito em 11/11/2026, em Word, com grau 8,75, promoção por merecimento, comportamento Ótimo e Bizagi; sem estado civil e sem idade. Para enviar, gere um PDF só: currículo primeiro e, a partir de janeiro, a carta sem CPF."},
 {id:"carB",g:"car",t:"Currículo: versão B (administrativo com dados)",d:"Mesmo modelo, com o resumo B da aba Currículo e a experiência da FAB primeiro. Use para vagas de assistente ou analista administrativo, planejamento, controladoria e compras."},
 {id:"car2",g:"car",t:"Criar a planilha de candidaturas",d:"Colunas: data, empresa, vaga, link, salário, status, contato, próximo passo. Vire seu próprio projeto de dados depois."},
 {id:"alB",g:"car",t:"Alertas de vagas nas plataformas (Gupy, Indeed, Vagas.com e InfoJobs)",d:"Os 5 alertas do LinkedIn (Dados Júnior, BI e Assistente de Dados no RJ; Dados Júnior e BI remotos) já chegam no e-mail profissional desde 11/11. Ligue alertas parecidos nas plataformas criadas em 18/01. Frente A: Analista de BI, Dados ou Relatórios Júnior. Frente B: Assistente ou Analista Administrativo, Planejamento, Controladoria. Frente C (rede): Supervisor de Controle de Acesso."},
 {id:"li10",g:"li",t:"LinkedIn: projeto 1 na seção Destaques",d:"Adicione o link do repositório e o vídeo de 2 min do projeto da LAI. Para mostrar o painel aberto, publique o relatório com Publicar na Web (só com dados públicos) e ponha o link no README e nos Destaques. O NovyPro saiu do ar (conferido em 11/11/2026); o Kaggle é opcional. Repita com os projetos 2 e 3."},
 {id:"gh3",g:"gh",t:"GitHub: README de perfil",d:"Publicado em 11/11/2026: apresentação, o que está estudando, projetos e contato. Quando o projeto 1 ficar pronto, troque os links da seção de projetos."},
 {id:"li6",g:"li",t:"LinkedIn: competências (top 5)",d:"Top 5 no Sobre: Análise de dados, Microsoft Power BI, SQL, Microsoft Excel e Gestão administrativa. Lista completa (dados, governança, administração e comportamentais) já cadastrada em 10/11. A cada curso concluído, acrescente a competência e ligue ao certificado: DAX e Modelagem de dados (jan), Python (fev), Estatística e Governança de dados (mar), Microsoft Fabric (abr). Depois do projeto 1, troque Gestão administrativa por Governança de dados no top 5."},
 {id:"li7",g:"li",t:"LinkedIn: banner",d:"Feito em 10/11/2026 no Canva. Quando tiver o painel do projeto 1, troque por uma versão com a miniatura dele."},
 {id:"gh4",g:"gh",t:"GitHub: arrumar repositórios antigos da faculdade",d:"Feito em 11/11/2026: 7 repositórios privados, Diario-Digital renomeado e 3 fixados. Não mexa em carreira-dados, estudos-transpetro e Simulado-CFC: estão no ar."},
 {id:"li9",g:"li",t:"LinkedIn: seguir 20 empresas-alvo e 15 profissionais de BI",d:"Inclua Transpetro, Petrobras, Embraer, empresas de logística e bancos do RJ. Comente com conteúdo útil, não só 'parabéns'."},
 {id:"red2",g:"red",t:"Redes: mesma foto e mesmo nome em todas",d:"LinkedIn, GitHub e Microsoft Learn já estão com a foto e o nome profissional (11/11). Faltam Instagram e WhatsApp."},
 {id:"li11",g:"li",t:"LinkedIn: 'Open to Work' só para recrutadores",d:"Cargos: Analista de BI, Analista de Dados, Analista de Relatórios, Analista de Planejamento. Início: a partir da data da baixa."},
 {id:"pf",g:"gh",t:"Página de portfólio com links (GitHub Pages ou Notion)",d:"Uma página: foto, 3 frases sobre você, cards dos projetos com print e link. Vai no topo do currículo."},
 {id:"vid23",g:"gh",t:"Vídeos de 2 min dos projetos 2 e 3",d:"Grave a tela (Xbox Game Bar no Windows: Win+Alt+R) mostrando a pergunta, o painel e 1 achado. Grave duas vezes e fique com a melhor: a segunda sai mais clara. Publique no YouTube como não listado ou direto no LinkedIn."},
 {id:"gh5",g:"gh",t:"GitHub: fixar os 3 projetos no topo do perfil",d:"Ordem: LAI (projeto 1), Defesa (projeto 2) e combustíveis (projeto 3), no lugar dos fixados de hoje (Diario-Digital e Plataforma-Analise-Cripto). O Simulado-CFC pode ficar como 4º. Cada projeto com README em português e em inglês, prints e link do vídeo."},
 {id:"li12",g:"li",t:"Pedir 2 recomendações no LinkedIn",d:"A primeira, do chefe da SAT, que assinou a carta: peça pelo próprio LinkedIn, lembrando 2 pontos da carta. A segunda, de um colega da seção ou da faculdade. Ofereça escrever uma para a pessoa também."},
 {id:"car3",g:"car",t:"Currículo em inglês (versão simples)",d:"Mesmo conteúdo, revisado com ajuda de IA e conferido por você. Serve para multinacionais."}
];
const POSTS=["Primeiro mês estudando dados: o que aprendi de Excel, SQL e Power BI e o que vem agora","O que 8 anos controlando documentos e prazos me ensinaram sobre indicadores","Projeto 1: prazos da Lei de Acesso à Informação. A pergunta, o modelo e o que descobri","Um erro de DAX que cometi e como corrigi","SQL em 3 consultas: como respondi uma pergunta de negócio","Orçamento público explicado com um dashboard: empenho, liquidação e pagamento","O que aprendi estudando para a PL-300","Antes e depois: refazendo um visual para ficar mais claro","Dados abertos que pouca gente usa (e o que dá para analisar com eles)","Como uso IA para revisar SQL sem confiar cegamente","Um mês de candidaturas: números da minha própria planilha","LGPD na prática para quem trabalha com dados","Qualidade de dados: as checagens que faço antes de qualquer dashboard","Dicionário de dados: o documento que ninguém faz e todo mundo precisa"];
const TIPS=[
 ["Termine antes de colecionar","Um curso terminado vale mais que cinco começados. Não abra o próximo antes de fechar o atual."],
 ["Estude no mesmo horário","Horário fixo vira hábito. Escolha 2 horas que você consegue proteger quase todo dia."],
 ["Pratique mais do que assiste","Para cada aula de 10 minutos, abra o Power BI ou o SQL e refaça sozinho, sem o vídeo."],
 ["Escreva o que aprendeu","Ao fim de cada sessão, anote 3 linhas no caderno ou no Notion. Isso vira post e resposta de entrevista."],
 ["Erro é conteúdo","Guarde os erros que você resolveu. Recrutador gosta de ouvir como você destravou um problema."],
 ["Pergunta antes do gráfico","Todo dashboard começa com perguntas de negócio. Sem pergunta, é só decoração."],
 ["Menos visuais, mais clareza","Uma página boa tem de 4 a 6 visuais. Se precisa explicar o gráfico, troque o gráfico."],
 ["README é a vitrine","Quem avalia portfólio lê o README, não o arquivo .pbix. Coloque prints, perguntas e conclusões."],
 ["Dados fictícios valem","Quando o dado real é sigiloso, crie uma base fictícia realista e diga isso no README."],
 ["Nada da FAB no portfólio","Nunca use dado interno, nem anonimizado. Use dados públicos ou simulados."],
 ["Candidatura personalizada","3 candidaturas ajustadas à vaga rendem mais que 30 genéricas. Copie palavras-chave da descrição."],
 ["Vaga pede 1 ano? Mande assim mesmo","Requisito de vaga é lista de desejos. Se você cobre 60%, candidate-se."],
 ["Vagas híbridas são porta de entrada","Analista administrativo, de planejamento ou de controladoria com Power BI aceitam melhor sua experiência."],
 ["Networking sem pedir emprego","Peça 15 minutos para entender a rotina de alguém da área. A indicação vem depois, naturalmente."],
 ["Inglês todo dia, pouco","30 minutos diários vencem 4 horas no domingo. Documentação de dados é em inglês."],
 ["IA como copiloto, não piloto","Use IA para explicar erros e sugerir SQL, mas rode, confira e entenda cada linha."],
 ["Durma","Sono ruim derruba memória. Estudar cansado até tarde rende pouco."],
 ["Revise no domingo","20 minutos olhando o que fez na semana fixam mais que estudar coisa nova."],
 ["Mostre o processo","Posts sobre o que você está aprendendo atraem recrutadores. Não precisa ser especialista para postar."],
 ["Traduza o militar","Troque 'Cabo SAD' por 'Assistente Administrativo' e diga o resultado, não só a tarefa."],
 ["Números no currículo","'Controlei 300 documentos por mês' é mais forte que 'controlei documentos'. Estime com honestidade."],
 ["STAR nas entrevistas","Situação, Tarefa, Ação, Resultado. Prepare 4 histórias e treine em voz alta."],
 ["Por que dados?","Tenha uma resposta de 30 segundos ligando sua rotina administrativa à análise de dados."],
 ["Saída da FAB, pelo futuro","Responda 'por que saiu' falando do plano, nunca de problemas na instituição."],
 ["Modelo estrela sempre","Fato no centro, dimensões em volta. Resolve metade dos problemas de DAX antes de existirem."],
 ["Calendário é obrigatório","Todo modelo com datas precisa de uma tabela calendário marcada como tabela de datas."],
 ["Medidas em vez de colunas","Prefira medidas DAX a colunas calculadas: modelo mais leve e flexível."],
 ["Commit todo dia de projeto","Commits pequenos e frequentes mostram constância no GitHub."],
 ["Uma vaga real por semana","Leia uma vaga com atenção e anote o que falta. Isso ajusta seus estudos ao mercado."],
 ["Cuide do dinheiro da transição","Saiba quantos meses suas reservas cobrem e defina a data-limite para aceitar uma vaga híbrida."]
];
const CATALOG=[
 {n:"Elements of AI",p:"Universidade de Helsinque · português de Portugal ou inglês",tags:["ia"],free:true,u:"https://www.elementsofai.com/",note:"Base conceitual de IA, com certificado. Ótimo primeiro passo."},
 {n:"Introduction to Generative AI",p:"Google Cloud Skills Boost",tags:["ia"],free:true,u:"https://www.cloudskillsboost.google/",note:"Curso curto com selo digital para o LinkedIn."},
 {n:"Generative AI Fundamentals",p:"Databricks Academy",tags:["ia","cert"],free:true,u:"https://www.databricks.com/learn/training",note:"Credencial gratuita de uma empresa líder em dados."},
 {n:"AI-901 Azure AI Fundamentals",p:"Microsoft Learn",tags:["ia","cert"],free:false,u:"https://learn.microsoft.com/pt-br/credentials/certifications/azure-ai-fundamentals/",note:"Substituiu a AI-900 em 30/06/2026. Trilha grátis, prova paga. Já está no cronograma; a prova é opcional."},
 {n:"DP-900 Azure Data Fundamentals",p:"Microsoft Learn",tags:["dados","cert"],free:false,u:"https://learn.microsoft.com/pt-br/credentials/certifications/azure-data-fundamentals/",note:"Fundamentos de bancos, nuvem e analytics. Boa depois da PL-300."},
 {n:"DP-600 Fabric Analytics Engineer",p:"Microsoft Learn",tags:["dados","cert"],free:false,u:"https://learn.microsoft.com/pt-br/credentials/certifications/fabric-analytics-engineer-associate/",note:"Meta para 2028, já como analista júnior. Trilha grátis no Microsoft Learn, prova paga."},
 {n:"Google Data Analytics",p:"Coursera",tags:["dados","cert"],free:false,u:"https://www.coursera.org/professional-certificates/google-data-analytics",note:"Certificado conhecido por recrutadores. Pago, mas a Coursera oferece auxílio financeiro."},
 {n:"Kaggle Learn: Data Visualization e Intro to ML",p:"Kaggle",tags:["dados","ia"],free:true,u:"https://www.kaggle.com/learn",note:"Curtos, práticos e com certificado de conclusão."},
 {n:"EXIN Privacy & Data Protection Foundation (PDPF)",p:"EXIN · prova paga, com cursos preparatórios em português",tags:["gd","cert"],free:false,u:"https://www.exin.com/",note:"Certificação de privacidade e LGPD mais pedida em vagas. Meta para o primeiro ano empregado, depois do curso de governança do cronograma."},
 {n:"CDMP – Certified Data Management Professional",p:"DAMA International",tags:["gd","cert"],free:false,u:"https://cdmp.info/",note:"A certificação de governança de dados. Meta de médio prazo (2029+), com experiência na área."},
 {n:"DAMA-DMBOK (guia de gestão de dados)",p:"DAMA International · livro",tags:["gd"],free:false,u:"https://dama.org/learning-resources/dama-data-management-body-of-knowledge-dmbok/",note:"Leitura de referência para governança. Comece pelos capítulos de governança e qualidade de dados."},
 {n:"Caminho Digital (antiga Escola do Trabalhador 4.0)",p:"Ministério do Trabalho + Microsoft",tags:["dados","ia"],free:true,u:"https://www.gov.br/trabalho-e-emprego/pt-br/servicos/trabalhador/qualificacao-profissional/caminho-digital",note:"Trilhas gratuitas de Excel, dados e IA com certificado. Mudou de endereço em outubro de 2026."},
 {n:"Fundação Bradesco – Escola Virtual",p:"Fundação Bradesco",tags:["dados"],free:true,u:"https://www.ev.org.br/",note:"Excel do básico ao avançado e Power BI, com certificado."},
 {n:"SQL Murder Mystery",p:"Knight Lab",tags:["dados"],free:true,u:"https://mystery.knightlab.com/",note:"Resolva um crime com consultas SQL. Lógica pura, bom para quem gosta de xadrez."},
 {n:"Maven Analytics Challenges",p:"Maven Analytics",tags:["dados"],free:true,u:"https://mavenanalytics.io/challenges",note:"Desafios mensais com bases reais. Bom para os projetos 3 em diante e para aparecer no LinkedIn."},
 {n:"Catálogo da ENAP: ciência de dados, governança de dados e IA",p:"Escola Virtual.Gov",tags:["gov","dados","ia"],free:true,u:"https://www.escolavirtual.gov.br/",note:"Você já tem 5 certificados lá. Procure 'dados', 'governança' e 'inteligência artificial'."},
 {n:"Fundação Bradesco: Excel avançado e introdução à IA",p:"Escola Virtual Fundação Bradesco",tags:["dados","ia"],free:true,u:"https://www.ev.org.br/",note:"Certificados gratuitos em português."},
 {n:"Bootcamps DIO (Power BI, IA, dados)",p:"DIO",tags:["dados","ia"],free:true,u:"https://www.dio.me/",note:"Gratuitos com projetos práticos. Escolha um e termine."},
 {n:"Fundamentos de Scrum e métodos ágeis",p:"Scrum.org (avaliação aberta) / ENAP",tags:["gestao"],free:true,u:"https://www.scrum.org/open-assessments",note:"Times de dados trabalham em sprints. Você já tem o curso Gestão Ágil com Scrum (Gustavo Farias) na Udemy; depois faça o Scrum Open, grátis."},
 {n:"Liderança e gestão de equipes",p:"ENAP / Fundação Bradesco",tags:["gestao","gov"],free:true,u:"https://www.escolavirtual.gov.br/curso/373",note:"Liderança e Gestão de Equipes (30 h) entrou no cronograma em abril de 2027, depois do Fabric."}
 ,{n:"Executivo de Dados e IA (programa, 260 h)",p:"ENAP · Escola Virtual.Gov",tags:["gd","gestao","gov"],free:true,u:"https://www.escolavirtual.gov.br/programa/352",note:"Governança, cultura de dados e uso estratégico de IA. A formação gratuita mais próxima do papel de CDO; faça aos poucos depois da primeira vaga."}
 ,{n:"Desenvolvendo Times de Alta Performance (30 h)",p:"ENAP · Escola Virtual.Gov",tags:["gestao"],free:true,u:"https://www.escolavirtual.gov.br/curso/356",note:"Competências gerenciais, coaching e feedback. Está no cronograma junto com Liderança e Gestão de Equipes."}
 ,{n:"Pós em Governança de Dados (EAD)",p:"Unyleya, Wpós, Cruzeiro do Sul Virtual, UniCesumar, Uniasselvi",tags:["pos","gd"],free:false,u:"https://emec.mec.gov.br/",note:"Para 2028–2029, já como Júnior. Prefira grade com DAMA-DMBOK, qualidade de dados e LGPD, e confira o credenciamento no e-MEC."}
 ,{n:"MBA em Data Science, IA e Analytics",p:"USP/Esalq · EAD, 18 meses",tags:["pos","dados","ia"],free:false,u:"https://mbauspesalq.com/cursos/mba-em-data-science-e-analytics",note:"Nome forte no currículo. Cerca de 22 x R$ 627 (nov/2026). Melhor com a empresa ajudando a pagar."}
 ,{n:"MBA em Business Intelligence & Analytics",p:"ECA-USP · EAD",tags:["pos","dados"],free:false,u:"https://www.google.com/search?q=MBA+Business+Intelligence+Analytics+ECA-USP+EAD",note:"Alternativa da USP mais focada em BI. Compare grade e preço com o da Esalq."}
];
const DECKS={
 excel:{n:"Excel",c:["excel"]},
 pq:{n:"Power Query",c:["excel","pbi"]},
 sql:{n:"SQL",c:["sql","sqladv"]},
 model:{n:"Modelagem",c:["model","pbi"]},
 dax:{n:"DAX",c:["dax","pbi"]},
 pbi:{n:"Power BI Service",c:["pbi","pl300"]},
 py:{n:"Python e estatística",c:["py","stats"]},
 ia:{n:"IA e carreira",c:["claude","ia1","copilot"]},
 gd:{n:"Governança e qualidade",c:["model","sql"]},
 en:{n:"Inglês de dados",c:["claude"]}
};
const CARDS=[
 ["excel","Diferença entre PROCV e PROCX?","PROCX procura em qualquer direção, devolve várias colunas, tem valor padrão para 'não encontrado' e busca exata por padrão. PROCV só olha para a direita e depende do número da coluna."],
 ["excel","Para que serve SOMASES?","Somar um intervalo aplicando vários critérios ao mesmo tempo. Ex.: =SOMASES(Valor;Setor;\"Compras\";Mês;3)."],
 ["excel","Referência absoluta x relativa","$A$1 não muda ao copiar a fórmula; A1 muda. $A1 trava só a coluna; A$1 trava só a linha."],
 ["excel","Por que formatar os dados como Tabela (Ctrl+Alt+T)?","A tabela cresce sozinha, as fórmulas usam nomes de colunas e o Power Query e as tabelas dinâmicas leem o intervalo certo sempre."],
 ["excel","ÍNDICE + CORRESP faz o quê?","CORRESP acha a posição do valor; ÍNDICE devolve o valor daquela posição em outra coluna. Funciona para a esquerda e é mais leve que PROCV em bases grandes."],
 ["excel","Quando usar tabela dinâmica?","Para resumir milhares de linhas por categoria (soma, contagem, média) sem fórmulas, e mudar a visão arrastando campos."],
 ["pq","O que é o Power Query?","Ferramenta de ETL do Excel e do Power BI: conecta a fontes, limpa e transforma os dados em passos gravados, que se repetem sozinhos a cada atualização."],
 ["pq","Mesclar x Acrescentar consultas","Mesclar junta colunas de duas tabelas por uma chave (como um JOIN). Acrescentar empilha linhas de tabelas com a mesma estrutura (como UNION)."],
 ["pq","O que faz 'Transformar colunas em linhas' (unpivot)?","Converte colunas de meses (jan, fev, mar…) em duas colunas: Atributo e Valor. Deixa a tabela no formato longo, que o Power BI modela melhor."],
 ["pq","Referência x Duplicar consulta","Referência cria uma consulta que parte do resultado da outra (mudanças na original propagam). Duplicar copia todos os passos e fica independente."],
 ["pq","Por que definir o tipo de dado cedo?","Tipos errados (texto em vez de número ou data) quebram somas, relacionamentos e inteligência de tempo. Defina logo após importar e confira de novo no fim."],
 ["pq","O que é um parâmetro no Power Query?","Um valor reutilizável (caminho de pasta, data de corte, servidor) que alimenta as consultas. Trocar o parâmetro muda todas de uma vez."],
 ["pq","Como tratar erros de importação?","Use Manter erros para ver as linhas problemáticas, corrija a origem ou o tipo, e use Substituir erros só quando souber o valor certo."],
 ["sql","Ordem lógica de execução de um SELECT","FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT. Por isso o WHERE não enxerga apelidos criados no SELECT."],
 ["sql","WHERE x HAVING","WHERE filtra linhas antes de agrupar; HAVING filtra grupos depois do GROUP BY (ex.: HAVING COUNT(*) > 10)."],
 ["sql","INNER JOIN x LEFT JOIN","INNER traz só o que casa nas duas tabelas. LEFT traz tudo da tabela da esquerda e NULL onde não houver par na direita."],
 ["sql","Como achar registros sem par (ex.: setores sem documentos)?","LEFT JOIN e filtrar onde a chave da direita é nula: SELECT s.* FROM setor s LEFT JOIN doc d ON d.setor_id=s.id WHERE d.id IS NULL."],
 ["sql","COUNT(*) x COUNT(coluna)","COUNT(*) conta todas as linhas; COUNT(coluna) ignora os NULL daquela coluna. COUNT(DISTINCT coluna) conta valores únicos."],
 ["sql","Para que serve uma CTE (WITH)?","Nomear uma consulta intermediária e usá-la logo abaixo. Deixa consultas longas legíveis, em etapas."],
 ["sql","O que faz ROW_NUMBER() OVER (PARTITION BY x ORDER BY y)?","Numera as linhas dentro de cada grupo x, na ordem de y. Serve para pegar o mais recente por grupo (filtrar rn = 1)."],
 ["sql","Função de janela x GROUP BY","GROUP BY reduz as linhas a uma por grupo. Funções de janela (OVER) calculam por grupo mas mantêm todas as linhas."],
 ["sql","Como somar acumulado no SQL?","SUM(valor) OVER (ORDER BY data ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)."],
 ["sql","CASE WHEN serve para quê?","Criar categorias e regras dentro da consulta: CASE WHEN dias > 30 THEN 'Atrasado' ELSE 'No prazo' END."],
 ["sql","Por que evitar SELECT * em produção?","Traz colunas desnecessárias, pesa na rede e quebra relatórios quando a tabela muda. Liste as colunas que você usa."],
 ["sql","Chave primária x chave estrangeira","Primária identifica cada linha da tabela, sem repetir. Estrangeira aponta para a primária de outra tabela e garante o relacionamento."],
 ["sql","UNION x UNION ALL","UNION remove duplicadas (mais lento); UNION ALL mantém todas as linhas. Use UNION ALL quando souber que não há repetição."],
 ["model","O que é esquema estrela?","Uma tabela fato no centro (eventos com números) ligada a tabelas dimensão (quem, o quê, quando, onde). É o modelo recomendado no Power BI."],
 ["model","Fato x dimensão","Fato tem muitas linhas, chaves e valores medidos (vendas, documentos). Dimensão tem poucas linhas e atributos descritivos (setor, produto, data)."],
 ["model","Por que criar uma tabela de datas?","Para usar inteligência de tempo (acumulado, mês anterior), ter todos os dias sem buracos e filtrar várias tabelas pelo mesmo calendário. Marque como tabela de datas."],
 ["model","Cardinalidade mais comum e recomendada","Um para muitos (1:*), da dimensão para a fato, com filtro em direção única."],
 ["model","Quando evitar filtro bidirecional?","Quase sempre: cria ambiguidade e deixa o modelo lento. Use só em casos específicos (ex.: muitos para muitos com tabela ponte)."],
 ["model","O que é uma dimensão com várias funções (role-playing)?","A mesma dimensão ligada mais de uma vez à fato, como Data do pedido e Data de entrega. Uma relação fica ativa; as outras se usam com USERELATIONSHIP."],
 ["model","Coluna calculada x medida","Coluna calculada é gravada linha a linha na atualização e ocupa memória. Medida é calculada na hora, conforme os filtros do visual. Prefira medidas para números."],
 ["model","Como reduzir o tamanho do modelo?","Remover colunas e linhas que não usa, diminuir a granularidade (mês em vez de segundo), evitar colunas de texto únicas e preferir tipos inteiros."],
 ["dax","O que faz CALCULATE?","Avalia uma expressão mudando o contexto de filtro. Ex.: CALCULATE([Total], Setor[Nome]=\"Compras\")."],
 ["dax","Contexto de linha x contexto de filtro","Linha: a linha atual numa coluna calculada ou iterador. Filtro: os filtros vindos de visuais, segmentações e CALCULATE."],
 ["dax","SUM x SUMX","SUM soma uma coluna. SUMX percorre a tabela linha a linha calculando uma expressão (ex.: Qtd * Preço) e soma o resultado."],
 ["dax","Para que serve DIVIDE?","Dividir sem erro quando o denominador é zero: DIVIDE([Atrasados],[Total]) devolve vazio (ou o valor alternativo) em vez de erro."],
 ["dax","Como fazer acumulado do ano (YTD)?","TOTALYTD([Total], 'Data'[Data]) ou CALCULATE([Total], DATESYTD('Data'[Data])). Exige tabela de datas marcada."],
 ["dax","Valor do mesmo período do ano anterior","CALCULATE([Total], SAMEPERIODLASTYEAR('Data'[Data]))."],
 ["dax","O que faz ALL?","Remove filtros de uma tabela ou coluna. Usado para % do total: DIVIDE([Total], CALCULATE([Total], ALL(Setor)))."],
 ["dax","ALL x ALLEXCEPT x REMOVEFILTERS","ALL tira os filtros da tabela/coluna; ALLEXCEPT tira todos menos os indicados; REMOVEFILTERS é o nome mais claro para tirar filtros dentro do CALCULATE."],
 ["dax","Para que serve VAR em DAX?","Guardar um resultado intermediário: deixa a medida legível e calcula uma vez só. VAR x = … RETURN …"],
 ["dax","O que é medida semi-aditiva?","Um valor que não se soma no tempo, como saldo ou estoque. Use LASTDATE/LASTNONBLANK para pegar o último valor do período."],
 ["dax","FILTER dentro do CALCULATE: quando usar?","Quando o filtro depende de uma medida ou de uma condição complexa. Para filtros simples de coluna, a forma direta é mais rápida."],
 ["dax","O que são grupos de cálculo?","Itens reutilizáveis (YTD, mês anterior, % do total) aplicados a qualquer medida, sem repetir a fórmula. Criados no modelo (Power BI Desktop ou Tabular Editor)."],
 ["dax","Como achar uma medida lenta?","Use o Performance Analyzer no Power BI Desktop e copie a consulta para a visualização de consulta DAX para medir e testar alternativas."],
 ["pbi","Import x DirectQuery x Direct Lake","Import copia os dados para o modelo (mais rápido, precisa atualizar). DirectQuery consulta a fonte a cada clique. Direct Lake lê arquivos Delta do Fabric sem importar."],
 ["pbi","Quando é preciso um gateway?","Quando o Power BI Service precisa atualizar dados de uma fonte local (servidor ou pasta da rede) que não está na nuvem."],
 ["pbi","O que é RLS (segurança em nível de linha)?","Regras DAX por função que limitam as linhas que cada usuário vê, como cada chefe ver só o próprio setor. Atribua pessoas ou grupos às funções no Service."],
 ["pbi","Funções do workspace (do maior ao menor acesso)","Administrador, Membro, Colaborador e Visualizador."],
 ["pbi","App x compartilhar relatório","App distribui um pacote de relatórios para muitos usuários, com navegação própria. Compartilhar um item é para casos pontuais."],
 ["pbi","Dashboard x relatório no Power BI","Relatório tem várias páginas interativas a partir de um modelo. Dashboard é uma página do Service com blocos fixados de vários relatórios e alertas."],
 ["pbi","Para que servem os indicadores (bookmarks)?","Guardar um estado da página (filtros, visuais visíveis) para criar navegação, botões de alternar visões e apresentações."],
 ["pbi","O que é drill-through?","Clicar num item e ir para uma página de detalhe já filtrada por ele (ex.: do setor para a lista dos documentos do setor)."],
 ["pbi","Rótulos de confidencialidade servem para quê?","Classificar o conteúdo (público, interno, confidencial) e manter a proteção quando exportado. Fazem parte da governança cobrada na PL-300."],
 ["pbi","Atualização agendada: o que configurar?","Credenciais da fonte, gateway (se local), frequência e fuso horário, e e-mail de falha. No Pro, até 8 atualizações por dia."],
 ["py","pandas: como ler um CSV e ver o começo?","import pandas as pd; df = pd.read_csv('arquivo.csv', sep=';'); df.head()"],
 ["py","pandas: agrupar e somar","df.groupby('setor')['valor'].sum().sort_values(ascending=False)"],
 ["py","Média x mediana: qual usar com valores extremos?","Mediana. Ela não é puxada por poucos valores muito altos ou muito baixos (como salários ou prazos atípicos)."],
 ["py","O que é desvio padrão?","Medida de quanto os valores se afastam da média. Baixo: dados parecidos. Alto: dados espalhados."],
 ["py","Correlação implica causa?","Não. Duas variáveis podem andar juntas por coincidência ou por um terceiro fator. Para falar em causa é preciso experimento ou análise específica."],
 ["py","O que é um outlier e como achar?","Valor muito fora do padrão. Regra comum: abaixo de Q1 − 1,5×IQR ou acima de Q3 + 1,5×IQR (boxplot)."],
 ["ia","O que é um prompt bom para análise de dados?","Contexto (quem é o público), tarefa clara, dados ou estrutura das tabelas, formato da resposta e restrições. Ex.: 'Explique esta medida DAX para um gestor, em 3 frases'."],
 ["ia","Onde o Copilot entra no Power BI?","Criar páginas de relatório, sugerir conteúdo, escrever narrativas e resumir o modelo semântico. Desde 2025 isso aparece na PL-300."],
 ["ia","Cuidado número 1 ao usar IA com dados","Não colar dados pessoais ou internos em ferramentas públicas (LGPD). Use dados fictícios ou anonimizados e confira as respostas."],
 ["ia","Como contar a sua história de transição numa entrevista?","Situação (8 anos de gestão administrativa na FAB), o que você fez com dados lá (controles, relatórios), o que estudou e construiu (projetos), e por que BI agora. Em 1 minuto."],
 ["ia","Método STAR para perguntas comportamentais","Situação, Tarefa, Ação e Resultado. Sempre termine com um número ou efeito concreto."],
 ["ia","O que um recrutador de BI Júnior mais quer ver?","SQL e Power BI na prática (projetos com README), comunicação clara de resultados e vontade de aprender. Certificação ajuda a passar na triagem."],
 ["gd","O que é governança de dados?","O conjunto de regras, papéis e processos que garante que os dados da empresa sejam confiáveis, seguros e usados do jeito certo. Responde: quem é dono, o que significa cada campo e quem pode ver."],
 ["gd","Quais são as dimensões mais usadas de qualidade de dados?","Completude (falta valor?), unicidade (tem duplicado?), validade (segue o formato e a regra?), consistência (bate entre sistemas?), exatidão (corresponde à realidade?) e atualidade (está em dia?)."],
 ["gd","O que vai num dicionário de dados?","Para cada campo: nome, descrição em português claro, tipo, formato, valores permitidos, origem, regra de cálculo e quem é o responsável."],
 ["gd","Dono do dado (data owner) x curador (data steward)","O dono responde pelo dado e decide regras e acessos (geralmente um gestor da área). O curador cuida do dia a dia: define padrões, monitora a qualidade e corrige problemas."],
 ["gd","O que é linhagem de dados (data lineage)?","O caminho que o dado percorre da origem até o relatório, com cada transformação no meio. Serve para saber de onde veio um número e o que quebra se uma tabela mudar."],
 ["gd","Como checar qualidade com SQL antes de um dashboard?","COUNT(*) x COUNT(coluna) para nulos; GROUP BY chave HAVING COUNT(*)>1 para duplicados; MIN/MAX para valores absurdos; LEFT JOIN com a dimensão para achar códigos órfãos."],
 ["gd","Quais as bases legais mais comuns da LGPD no trabalho com dados?","Consentimento, cumprimento de obrigação legal, execução de contrato, legítimo interesse e execução de políticas públicas (no setor público). Todo uso de dado pessoal precisa de uma."],
 ["gd","Anonimização x pseudonimização na LGPD","Anonimizado não permite voltar à pessoa e deixa de ser dado pessoal. Pseudonimizado troca o identificador por um código, mas ainda dá para reidentificar com a chave, então continua sendo dado pessoal."],
 ["gd","O que é o DAMA-DMBOK?","O guia de referência de gestão de dados da DAMA International. Organiza a área em 11 disciplinas, com governança no centro. É a base da certificação CDMP."],
 ["en","dataset","Conjunto de dados. Ex.: \"I downloaded the dataset from the CGU portal.\""],
 ["en","to clean / data cleaning","Limpar os dados / limpeza de dados. Ex.: \"Data cleaning took most of the time.\""],
 ["en","missing values","Valores ausentes (nulos). Ex.: \"10% of the rows had missing values.\""],
 ["en","duplicate","Duplicado. Ex.: \"I removed duplicate records.\""],
 ["en","measure (Power BI)","Medida, cálculo em DAX. Ex.: \"I created a measure for on-time rate.\""],
 ["en","insight / finding","Achado, descoberta. Ex.: \"The main finding is that 3 agencies cause most delays.\""],
 ["en","trend","Tendência. Ex.: \"The trend is going down since 2024.\""],
 ["en","stakeholder","Parte interessada, quem usa ou decide. Ex.: \"I presented it to stakeholders.\""],
 ["en","data governance","Governança de dados: regras, papéis e responsabilidades sobre os dados."],
 ["en","data quality","Qualidade dos dados: completos, corretos, sem duplicados e atualizados."],
 ["en","data owner / data steward","Dono do dado (responde pelo dado) / curador do dado (cuida da qualidade no dia a dia)."],
 ["en","lineage","Linhagem: de onde vem cada número e por onde ele passou."],
 ["en","star schema / fact table / dimension","Esquema estrela / tabela fato (eventos, números) / dimensão (quem, onde, quando)."],
 ["en","deadline / on time / overdue","Prazo / no prazo / atrasado. Ex.: \"85% of requests were answered on time.\""],
 ["en","forecast","Previsão. Ex.: \"The forecast has an average error of R$ 0.10.\""],
 ["en","outlier","Valor fora do normal. Ex.: \"I flagged outliers in weekly prices.\""],
 ["en","row-level security (RLS)","Segurança por linha: cada usuário vê só os dados dele."],
 ["en","I'm transitioning into data","Estou migrando para a área de dados. Use na apresentação da entrevista."],
 ["en","Tell me about yourself","Fale sobre você. Responda em 1 min: passado (FAB), presente (estudos e projetos), futuro (a vaga)."],
 ["en","What was the biggest challenge?","Qual foi o maior desafio? Responda no formato STAR: situação, tarefa, ação e resultado."]
];
const SKILLS=[
 {id:"prep",n:"Preparar os dados",w:27.5,g:[
  ["Obter ou conectar aos dados",["Conectar a fontes de dados ou a um modelo semântico compartilhado","Alterar configurações da fonte: credenciais e níveis de privacidade","Escolher entre Direct Lake, DirectQuery e Import","Criar e modificar parâmetros"]],
  ["Perfilar e limpar",["Avaliar os dados: estatísticas e propriedades das colunas","Resolver inconsistências, nulos e problemas de qualidade","Resolver erros de importação"]],
  ["Transformar e carregar",["Escolher os tipos de dados das colunas","Criar e transformar colunas","Agrupar e agregar linhas","Dinamizar, transformar colunas em linhas e transpor","Converter dados semiestruturados em tabela","Criar tabelas fato e dimensão","Saber quando usar consulta de referência ou duplicada","Mesclar e acrescentar consultas","Criar chaves adequadas para relacionamentos","Configurar o carregamento das consultas"]]]},
 {id:"mod",n:"Modelar os dados",w:27.5,g:[
  ["Projetar o modelo",["Configurar propriedades de tabelas e colunas","Implementar dimensões com várias funções (role-playing)","Definir cardinalidade e direção do filtro cruzado","Criar uma tabela de datas comum","Saber quando usar colunas e tabelas calculadas"]],
  ["Cálculos com DAX",["Medidas de agregação simples","Usar CALCULATE","Medidas de inteligência de tempo","Funções estatísticas básicas","Medidas semiaditivas","Medidas rápidas","Tabelas ou colunas calculadas","Grupos de cálculo"]],
  ["Otimizar o desempenho",["Remover linhas e colunas desnecessárias","Achar medidas, relações e visuais lentos (Performance Analyzer e consulta DAX)","Reduzir a granularidade"]]]},
 {id:"vis",n:"Visualizar e analisar",w:27.5,g:[
  ["Criar relatórios",["Escolher o visual adequado","Formatar e configurar visuais","Criar visual de narrativa com Copilot","Aplicar e personalizar tema","Formatação condicional","Segmentação e filtros","Criar página de relatório com Copilot","Pedir sugestões de conteúdo ao Copilot","Configurar a página do relatório","Saber quando usar relatório paginado","Cálculos visuais com DAX"]],
  ["Usabilidade e storytelling",["Indicadores (bookmarks)","Dicas de ferramenta personalizadas","Interações entre visuais","Navegação do relatório","Classificação nos visuais","Sincronizar segmentações","Agrupar e organizar camadas no painel Seleção","Drill-through com páginas, filtros e botões","Configurações de exportação","Layout para celular","Personalização de visuais","Acessibilidade","Atualização automática de página"]],
  ["Padrões e tendências",["Recurso Analisar","Agrupamento, compartimentalização e clusterização","Visuais de IA","Linhas de referência, barras de erro e previsão","Detectar outliers e anomalias","Resumir o modelo semântico com Copilot"]]]},
 {id:"man",n:"Gerenciar e proteger",w:17.5,g:[
  ["Workspaces e itens",["Criar e configurar workspace","Configurar e atualizar um app","Publicar, importar e atualizar itens","Criar dashboards","Escolher a forma de distribuição","Assinaturas e alertas de dados","Promover ou certificar conteúdo","Saber quando precisa de gateway","Agendar atualização do modelo semântico"]],
  ["Segurança e governança",["Atribuir funções do workspace","Acesso por item","Acesso a modelos semânticos","Criar funções de RLS","Associar grupos às funções de RLS","Aplicar rótulos de confidencialidade"]]]}
];
const KB_TIP="Antes de começar: crie o repositório e o quadro Kanban do projeto no GitHub Projects (modelo Board, colunas A fazer, Fazendo e Feito). No Portfólio, o botão Copiar etapas traz a lista pronta, com o critério de pronto de cada uma. A cada sessão, mova o cartão: isso é Scrum na prática e vira assunto de entrevista. ";
const PREP=[
 {id:"prep:gh",k:"marca",t:"Conta do GitHub",m:10,d:"Conta pedro1105, mantida assim de propósito: os links do GitHub Pages (este app e o da Transpetro) dependem dela. Perfil revisado em 11/11/2026.",u:"https://github.com/signup"},
 {id:"prep:li",k:"marca",t:"LinkedIn: conta com foto profissional e título provisório",m:15,d:"Título provisório: \"Analista de Dados em formação | Excel · SQL · Power BI | 8 anos de experiência administrativa\". O texto completo está em Carreira › LinkedIn.",u:"https://www.linkedin.com/"},
 {id:"prep:ms",k:"marca",t:"Perfil no Microsoft Learn e coleção da PL-300",m:5,d:"Feito em 11/11/2026: perfil público, foto, e-mail profissional, nome legal igual à identidade (pronto para a prova PL-300) e a coleção \"Trilha BI 2026-2027 – Power BI (PL-300)\" com os 5 roteiros. Coloque o link do perfil no LinkedIn quando concluir o 1º roteiro.",u:"https://learn.microsoft.com/pt-br/"},
 {id:"prep:bt",k:"marca",t:"Banco de Talentos do Portal do Militar",m:20,d:"Feito em 11/11/2026: termos aceitos, todo o território nacional, áreas de Análise de Sistemas, Tecnólogo em TI e Administração (técnico e básico), LinkedIn no perfil e 6 cursos cadastrados (LGPD e Acesso à Informação aguardam validação da SPM). Falta cadastrar o e-mail novo e o inglês (Hoje › Pendências do plano)."},
 {id:"prep:ct",k:"marca",t:"Carta de recomendação em duas vias (com e sem CPF)",m:20,d:"Feito em 11/11/2026, em Word: a via com CPF é a original (uso oficial, fica guardada) e a via sem CPF vai para as empresas. Datada de 04/01/2027, quando o chefe assina as duas."},
 {id:"prep:sw",k:"marca",t:"Instalar no notebook: Power BI Desktop, Git e VS Code, e conferir o Excel",m:15,d:"Confira se o Excel desktop está instalado: a versão web é limitada para Power Query e tabelas dinâmicas. Se não tiver, assine o Microsoft 365 Personal. Power BI Desktop pela Microsoft Store (atualiza sozinho); Git em git-scm.com; VS Code em code.visualstudio.com. Seu Windows 11 Pro com 16 GB roda tudo com folga.",u:"https://apps.microsoft.com/detail/9ntxr16hnw1t"}
];
const MS={
 "2026-12-07":["Início do plano: diagnóstico rápido de Excel (20 min)","Sem consultar nada, tente fazer numa planilha sua: 1) PROCX ou PROCV, 2) SE aninhado, 3) SOMASES, 4) tabela dinâmica, 5) formatação condicional, 6) gráfico, 7) lista suspensa (validação de dados) e 8) importar um CSV pelo Power Query. Se fizer 6 dos 8, marque como feitas em Estudar › Cursos as sessões de Excel do que você já domina e use o horário livre para adiantar o SQL. Os horários das férias (9h às 13h30) já estão na agenda. No Microsoft Learn, clique em Iniciar no plano \"PL-300 – prova em 02/02/2027\".",20],
 "2027-01-04":["Pedir ao chefe a carta de recomendação assinada","Leve impressas as duas vias já prontas: a com CPF (original, fica guardada) e a sem CPF (para as empresas). Peça assinatura e carimbo nas duas e escaneie em PDF no mesmo dia. Depois monte um PDF só: currículo primeiro e a carta sem CPF em seguida. Detalhes em Carreira → Currículo. No mesmo dia, peça a recomendação dele pelo LinkedIn, lembrando 2 pontos da carta.",20],
 "2026-12-14":["Microsoft Learn: ver os Desafios abertos","Na aba Desafios do Learn, entre num desafio de Power BI ou Fabric se houver. Alguns dão desconto na prova. Leva 10 min.",10],
 "2027-01-12":["Agendar a prova PL-300 para 02/02/2027","No Microsoft Learn, na página da certificação, clique em Agendar prova. O valor em reais aparece na hora. Se algum Desafio do Learn der desconto ou voucher, use agora.",15],
 "2027-02-15":["Ativar o mês grátis do LinkedIn Premium Career","Use o mês para mandar InMail aos recrutadores das vagas em que se candidatou, ver a comparação com outros candidatos e quem olhou seu perfil. No mesmo dia, crie um lembrete para cancelar em 12/03: o teste vira assinatura paga sozinho.",15],
 "2027-03-12":["Cancelar o LinkedIn Premium (fim do mês grátis)","Cancele hoje, antes da cobrança. Só mantenha se estiver trazendo entrevistas. Preço de referência: R$ 69,99 por mês ou R$ 26,24 por mês no plano anual (ago/2026).",10],
 "2027-01-18":["Criar perfis nas plataformas de vaga","Gupy (canal das grandes empresas), Indeed, Vagas.com, InfoJobs e Portal Emprega Brasil (gov.br/SINE), com o currículo em PDF. Catho só com os recursos grátis, se quiser. Glassdoor é só para pesquisar salários e empresas. Detalhes em Carreira › Candidaturas.",40],
 "2027-01-11":["Conferir se saiu o resultado da Transpetro","Se aprovado, siga estudando normalmente: a convocação pode levar meses."],
 "2027-02-01":["Conferir o resultado ou a convocação da Transpetro",""],
 "2027-02-27":["Revisão trimestral (Progresso, no ícone de gráfico do topo)","Responda as 3 perguntas da revisão: o que deu certo, o que travou e o que ajustar antes da vida civil.",20],
 "2027-05-30":["Revisão trimestral (Progresso, no ícone de gráfico do topo)","Compare horas, cursos e candidaturas com o trimestre anterior e ajuste o plano.",20],
 "2027-08-29":["Revisão trimestral (Progresso, no ícone de gráfico do topo)","Veja o que funcionou nas candidaturas e o que mudar no portfólio.",20],
 "2027-03-06":["Escolher um mentor de carreira","Procure no LinkedIn alguém de BI ou governança de dados com 3 a 10 anos de área. Mande uma mensagem curta: quem você é, o que admira no trabalho dele e o pedido de uma conversa de 30 min por mês. A partir de abril, o app marca a conversa no 2º sábado do mês.",20],
 "2027-03-13":["Procurar um trabalho voluntário de dados","Depois da baixa você pode: ONGs que precisam de painel, projetos de dados abertos (ex.: Open Knowledge Brasil) ou plataformas como Atados. Poucas horas por mês já rendem um caso real para o currículo.",20],
 "2027-04-24":["Executivo em Dados e IA (ENAP) e Comitê Central de Governança de Dados","Faça a inscrição no programa Executivo em Dados e IA da Escola Virtual.Gov (trilha completa, fase de liderança) e passe a acompanhar as reuniões e publicações do Comitê Central de Governança de Dados: é onde estão as pessoas de governança do governo federal.",20],
 "2027-06-30":["Checkpoint: meta otimista da primeira vaga","Se ainda não houve entrevistas, revise currículo e portfólio antes de enviar mais."],
 "2027-07-31":["Checkpoint: revisar estratégia de candidatura","Sem entrevistas? O problema é currículo ou portfólio. Peça revisão a alguém da área."],
 "2027-09-30":["Checkpoint final: revisar o plano para a fase Júnior","Abra o plano mestre e ajuste as metas de 2027–2029."]
};
const EXTRA_MAIN=["Sessão de curso extra (Estudar › Cursos › Explorar mais cursos)","Desafio de DAX: recrie 3 medidas de um projeto sem consultar","Estudar uma vaga real e listar o que falta aprender","Sessão de curso extra (Estudar › Cursos › Explorar mais cursos)","Refazer um visual de um projeto para ficar mais claro"];
const EN_PLAN={A1:"15 min de vocabulário de dados (Estudar › Revisar › Flashcards › Inglês de dados) e 15 min de uma lição básica (Duolingo ou BBC Learning English)",A2:"15 min de vocabulário de dados (Estudar › Revisar › Flashcards › Inglês de dados) e 15 min de uma lição (BBC Learning English ou Duolingo)",B1:"15 min de vocabulário de dados e 15 min lendo em voz alta um README seu em inglês ou 1 página da documentação do Power BI",B2:"15 min de vocabulário de dados e 15 min de fala: explique um projeto seu em inglês por 2 min e grave",C1:"15 min de leitura técnica (documentação ou blog de dados) e 15 min de conversa (Cambly ou simulado em inglês com o tutor)",C2:"15 min de leitura técnica e 15 min de simulado de entrevista em inglês com o tutor"};
const NEWS={32:"App mais limpo: 5 abas (Estudar junta Cursos e Revisar; Carreira é o antigo Perfil), Progresso no ícone de gráfico do topo, tarefas em uma linha (toque para ver detalhes, mentoria e diário), trilha de cursos em Módulos dentro das 4 fases e Pendências do plano no Hoje. Progresso com os números num cartão só e medalhas compactas.",31:"Ferramentas: agendar a PL-300 em 12/01, LinkedIn Premium grátis de 15/02 a 12/03 (com lembrete de cancelar), conferir o Excel desktop antes de 07/12 e um quadro do que pagar e do que não pagar em Perfil › Transição.",30:"Certificações da Microsoft no cronograma: SC-900 (mar/abr), DP-900 e PL-900 (opcional), além da AI-901; DP-600 e Applied Skills na trilha. Plataformas de vaga em 18/01, painel de mercado em Candidaturas e o texto da brigada corrigido (apoio às instruções, referência em jun/2026).",29:"Atualização de 11/11: GitHub, currículo, carta em duas vias (com e sem CPF), Microsoft Learn e Banco de Talentos marcados como feitos. Novas pendências: e-mail e inglês no Portal do Militar, correção do SIGPES e link do Learn no LinkedIn. Instagram, NovyPro e perfis na Gupy, Indeed, Vagas.com e Catho entraram nas tarefas.",6:"Cronograma das férias e do meio expediente; link antigo do GitHub junta o progresso no Netlify.",7:"Aviso de versão nova com botão Atualizar e a versão de cada aparelho em Configurações.",8:"Inglês 3 vezes por semana (terça, quinta e sábado) nas férias e no meio expediente; texto de home office no Currículo.",9:"Preparação antes de 07/12 (contas e programas) e diagnóstico de Excel no primeiro dia.",10:"A seção Sobre agora mostra a versão real do app.",11:"Checklist dos cursos da Udemy na aba Cursos.",12:"Plano usa os cursos que você já tem na Udemy; SQL agora em MySQL.",13:"Novo checklist de cursos complementares gratuitos na aba Cursos.",14:"Checklist do que fazer depois da PL-300, com o link de cada curso e certificação.",15:"Trilha completa do início ao CDO, em 9 fases, na aba Cursos; curso de governança no cronograma; revisão geral.",16:"Áudio igual ao do app da Transpetro: 4 modos, pausa para pensar, botões do fone, modo bolso e 7 sons que seguem nas outras telas.",17:"Novidades: analisador de vaga, treino de entrevista, cofre de certificados, contatos e planejador da transição (Perfil); desafio de SQL (Revisar); nível, medalhas, meta semanal e relatório em PDF (Progresso); mapa da trilha (Cursos). Currículo com compras, SIAFI e SILOMS.",18:"Revisão geral: AI-900 trocada pela AI-901 (a Microsoft aposentou a antiga), simulado da PL-300 no endereço novo e links quebrados corrigidos.",19:"Cursos trocados pelos melhores da Udemy.",20:"Trilha da Udemy atualizada (lista única Trilha BI, 18 cursos): Claude como tutor na 1ª semana (Paulo Andrade), SQL da Midori Toyota, Master Power BI do Felipe Mafra, PL-300 do Ricardo Pacheco e Copilot para Excel; Cowork e Claude Code (Kleber) opcionais na Fase 4; Python Data V e Python + RPA opcionais na Fase 6; repetidos foram para a Reserva.",21:"Carta de recomendação no plano: lembrete para pedir a assinatura em 04/01/2027 e um guia de como usá-la nas candidaturas e entrevistas (Perfil → Currículo).",28:"Textos do LinkedIn finais: Sobre em blocos, competências por fase e datas dos 5 cargos na FAB conferidas por você.",27:"LinkedIn em dia: título, Sobre, experiência em 5 cargos, certificados, competências, foto, capa e URL marcados como feitos. Nas pendências entrou a primeira publicação (com 30 a 50 conexões) e, em 04/01, o pedido de recomendação junto com a carta.",26:"Novidades para a vaga: quadro Kanban e critério de pronto em cada etapa dos projetos, simulado de entrevista toda semana a partir de 15/02, inglês pelo seu nível do EF SET com cartões de vocabulário, desafio de Power BI, mentor e leitura do DAMA todo mês a partir de abril, rotina de treinos no Hoje e revisão mensal da reserva.",25:"Revisão geral: contagem regressiva lado a lado no celular, metas das fases e medalha do portfólio ajustadas aos 3 projetos, currículo, planilha e alertas de vagas antes das candidaturas (15/02), tarefas repetidas trocadas e vídeos dos projetos 2 e 3 no plano.",24:"Projeto 1 agora com dados reais: prazos da Lei de Acesso à Informação (CGU). Os 3 projetos ganharam README em inglês, e os projetos 2 e 3 uma etapa de estatística; o projeto 1 ganhou IA no Power BI.",23:"Mentoria em cada sessão (desafio sem olhar, explicar em voz alta e pergunta de entrevista), 3 projetos completos no lugar de 6, contagem regressiva no Hoje, orçamento das provas e backup das finanças (Transição), 5 histórias para entrevista, pendências em Configurações e revisão trimestral (Progresso).",22:"Revisão de novembro: curso de liderança da ENAP no cronograma (abril), pós e MBA no catálogo, trilha com opções concretas de pós, MBA e do programa Executivo de Dados e IA, e semanas de fevereiro e dias de busca de vaga sem passar do horário de estudo."};
const ICONS={
 hoje:'<path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/><circle cx="12" cy="12" r="4"/>',
 agenda:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 cursos:'<path d="M3 6.5 12 3l9 3.5-9 3.5z"/><path d="M7 8.5V14c0 1.7 2.2 3 5 3s5-1.3 5-3V8.5"/>',
 port:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
 perfil:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
 prog:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 rev:'<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/><path d="M7 13h6M7 16h4"/>'
};
const README_TPL=`# Prazos da Lei de Acesso à Informação no governo federal

> Dados públicos da CGU. Textos dos pedidos não publicados (LGPD).

## Pergunta de negócio
Quais órgãos respondem fora do prazo legal (20 dias + 10) e por quê?

## O que eu fiz
- Baixei 2 anos de pedidos e recursos da LAI (CGU)
- Tratei no Power Query e fiz o relatório de qualidade dos dados
- Modelei em estrela no MySQL (2 fatos, 3 dimensões)
- Escrevi 8 consultas SQL para responder às perguntas
- Construí o dashboard no Power BI com medidas DAX e RLS por órgão

## Principais resultados
1. O órgão X concentra 40% dos atrasos
2. Pedidos sobre o assunto Y levam o dobro do prazo médio
3. ...

## Prints
![Visão geral](img/visao-geral.png)

## Ferramentas
Power Query · MySQL · Power BI · DAX · Python

## Como reproduzir
1. Baixe os arquivos em buscalai.cgu.gov.br
2. Rode sql/01_criar_tabelas.sql
3. Abra powerbi/lai-prazos.pbix

## Contato
LinkedIn: linkedin.com/in/seu-nome`;
const TREE=`nome-do-projeto/
├── README.md        ← vitrine do projeto
├── dados/           ← CSV pequenos ou link para a fonte
├── sql/             ← scripts numerados (01_, 02_...)
├── notebooks/       ← Python, quando houver
├── powerbi/         ← .pbix (ou só prints, se for grande)
├── img/             ← prints usados no README
└── .gitignore`;
const TXT={
 headline:"Cabo da FAB – Administração | Em transição para Análise de Dados e BI | Excel · Power BI · SQL | Formado em ADS",
 about:`Profissional administrativo em transição para Análise de Dados e BI. Formado em Análise e Desenvolvimento de Sistemas, com 8 anos na Força Aérea Brasileira lidando com documentos, prazos, controles, compras públicas e informação sensível.

Na FAB, atuei como auxiliar da chefia e dos encarregados de seção em:
• Documentos e gestão: confecção de Normas Padrão de Ação, Notas de Serviço e ofícios no SIGADAER, atualização das apresentações semanais das chefias e organização de reuniões.
• Controle e acompanhamento: situação de um programa em mais de 60 organizações para a chefia, além da emissão e solicitação de passes e crachás.
• Compras públicas: processos de aquisição, pregões eletrônicos, consulta de empenhos e pagamentos no SIAFI e no SILOMS e acompanhamento de prazos e entregas com fornecedores.
• Rotinas e operações: escalas, permutas e treinamento de uma tropa de cerca de 64 militares, controle de acesso de um complexo com nove organizações e logística de eventos com até 100 participantes.
• Apoio técnico: suporte de informática, instalação de softwares como o Bizagi (mapeamento de processos) e projeções em palestras e reuniões.

Reconhecimentos: promovido a Cabo por merecimento (grau 8,75 no curso de formação), comportamento "Ótimo" e referência elogiosa pelo apoio às instruções do Curso de Combate a Incêndio para brigadistas (jun/2026).

Formação: Tecnólogo em Análise e Desenvolvimento de Sistemas (Estácio, 2026) e cursos da ENAP em LGPD, Acesso à Informação e Ética no Serviço Público.

Por que dados: percebi que boa parte do trabalho era reunir informação à mão para alguém decidir. Hoje estudo Excel, Power BI e SQL para transformar controles em indicadores e painéis confiáveis, com atenção à qualidade e à governança dos dados.

Busco: vaga de Analista de Dados ou BI Júnior, ou funções administrativas, de planejamento e de controladoria que usem dados. Disponível a partir de março de 2027, no Rio de Janeiro (presencial, híbrido ou remoto).

Competências: Organização · Cumprimento de prazos · Proteção de dados (LGPD) · Comunicação · Resolução de problemas · Pacote Office`,
 exp:`Força Aérea Brasileira · mar/2019 – fev/2027 · Rio de Janeiro
(No LinkedIn, cada função abaixo é um cargo dentro da mesma empresa. Datas conferidas em 10/11/2026.)

Auxiliar administrativo · III COMAR, Subcoordenadoria de Acompanhamento das Atividades Terrestres (SAT) · fev/2025 – fev/2027
• Auxiliar do chefe da subcoordenadoria e do encarregado da seção na rotina administrativa.
• Redigi documentos oficiais (ofícios, NPA e NS) no SIGADAER, o sistema de gestão documental do Comando.
• Atualizei a apresentação semanal de acompanhamento das atividades usada nas reuniões das chefias.
• Mantive o controle de acompanhamento de um programa em mais de 60 organizações, com a situação de cada uma para a chefia.
• Apoiei o chefe no sistema de gestão de tarefas, atualizando prazos e andamentos.
• Organizei a logística de eventos com até 100 participantes (marcha, instrução de tiro, competição esportiva).
• Apoio de informática: instalação de programas (como o Bizagi, de modelagem de processos) e projeções em reuniões e briefings.
• Apoio às atividades e instruções práticas e teóricas de formação da brigada de incêndio e primeiros socorros, com referência elogiosa formal (jun/2026).

Recepção e controle de acesso · III COMAR · nov/2023 – fev/2025
• Controle de acesso de pessoas e veículos de um complexo com 9 organizações: identificação, passes e crachás, contato com os setores e com a guarda do dia.

Auxiliar de patrimônio · Grupamento de Segurança e Defesa do Rio de Janeiro (GSD-RJ) · fev/2023 – nov/2023
• Apoiei a montagem de processos de compra de material (equipamentos para a segurança de autoridades e material esportivo): pesquisa de preços, contato com fornecedores e acompanhamento de pregões eletrônicos no portal de compras do governo federal.
• Consultei empenhos e acompanhei pagamentos no SIAFI e no SILOMS, com prazos e entregas junto aos fornecedores.
• Apoio de informática à seção.

Esquadrão de Honras Militares · GSD-RJ · fev/2022 – fev/2023
• Montei escalas de serviço, permutas e controle de faltas de uma tropa de cerca de 64 militares.
• Treinei a tropa para formaturas e atuei na recepção de autoridades.

Segurança e Defesa · Ala 11 e GSD-RJ · mar/2019 – fev/2022
• Serviço na 1ª, 2ª e 3ª esquadrilhas de segurança e defesa; indicado para o Esquadrão de Honras pelo histórico e por elogios.

Promovido a Cabo por merecimento em 2025 (nota 8,75 no curso de formação).`,
 resA:`Analista de Dados e BI em formação, com 8 anos de experiência em controles administrativos, indicadores e compras públicas na Força Aérea Brasileira, incluindo o acompanhamento de empenhos e pagamentos no SIAFI. Tecnólogo em ADS, com projetos em Power BI, SQL e Excel publicados no GitHub e foco em qualidade e governança de dados. Disponível a partir de março de 2027.`,
 ho:`Estrutura para home office: notebook Intel Core i7 (11ª geração), 16 GB de RAM, SSD e placa de vídeo dedicada, com Windows 11 Pro e monitor secundário. Internet de alta velocidade e estável e ambiente isolado para reuniões.`,
 resB:`Profissional administrativo com 8 anos na Força Aérea Brasileira: documentos oficiais, processos de compra, contato com fornecedores, acompanhamento de empenhos, pagamentos e entregas (SIAFI e SILOMS), escalas, controle de acesso, logística de eventos e apresentações para a chefia. Domínio do pacote Office, com Excel aplicado a controles e relatórios. Tecnólogo em ADS. Disponível a partir de março de 2027.`,
 gh:`### Olá! Sou o Pedro Henrique

Analista de Dados e BI em formação, vindo de 8 anos de gestão administrativa na Força Aérea Brasileira.
Gosto de transformar controles manuais em painéis que ajudam a decidir.

**Ferramentas:** Power BI · DAX · SQL (MySQL) · Excel · Power Query · Python (aprendendo)

**Projetos em destaque**
- [Prazos da LAI no governo federal](link) — SQL + Power BI, governança e LGPD
- [Dinheiro público da Defesa](link) — orçamento, compras e viagens
- [Combustíveis no Brasil (ANP)](link) — séries temporais, previsão e Fabric

**Formação:** Tecnólogo em ADS (Estácio, 2026) · LGPD e Acesso à Informação (ENAP)

📫 [LinkedIn](link) · nome.sobrenome@gmail.com`
};
const KW=[
 ["Power BI",/power\s?bi/i,["pbi","pl300"]],["DAX",/\bdax\b/i,["dax"]],["Power Query",/power\s?query|\betl\b|tratamento de dados/i,["excel","pbi"]],
 ["SQL",/\bsql\b|consultas? em banco|banco de dados/i,["sql","sqladv"]],["Excel avançado",/excel( avan[çc]ado)?|procv|procx|tabela[s]? din[âa]mica/i,["excel"]],
 ["Python",/python|pandas/i,["py"]],["Estatística",/estat[íi]stica/i,["stats"]],["Modelagem de dados",/modelagem|modelo estrela|data warehouse|\bdw\b/i,["model"]],
 ["Dashboards e indicadores",/dashboard|painel|painéis|indicadores|\bkpis?\b/i,["pbi"]],["Relatórios gerenciais",/relat[óo]rios?/i,[]],
 ["VBA / macros",/\bvba\b|macros?/i,[]],["Tableau / Looker / Qlik",/tableau|looker|qlik/i,[]],["Azure / Fabric / nuvem",/azure|fabric|databricks|nuvem|cloud/i,["fabric"]],
 ["Git / GitHub",/\bgit(hub)?\b/i,["git"]],["Inglês",/ingl[êe]s|english/i,[]],["LGPD",/lgpd|prote[çc][ãa]o de dados/i,["gov"]],
 ["Governança de dados",/governan[çc]a de dados|data governance|metadados|dicion[áa]rio de dados/i,["gov"]],["Qualidade de dados",/qualidade de dados|data quality|consist[êe]ncia/i,["gov"]],
 ["Metodologias ágeis",/scrum|[áa]gil|kanban/i,[]],["SAP / ERP",/\bsap\b|\berp\b|totvs|protheus/i,[]],
 ["Compras e licitações",/compras?|licita[çc][ãa]o|preg[ãa]o|cota[çc][ãa]o|suprimentos/i,[]],["Contratos e fornecedores",/contratos?|fornecedor/i,[]],
 ["Orçamento e controladoria",/or[çc]amento|controladoria|custos|financeir/i,[]],["SIAFI / setor público",/siafi|siads|siloms|setor p[úu]blico|administra[çc][ãa]o p[úu]blica/i,[]],
 ["Logística e estoque",/log[íi]stica|estoque|almoxarifado|patrim[ôo]nio/i,[]],["Planejamento",/planejamento/i,[]],["Liderança e equipes",/lideran[çc]a|gest[ãa]o de equipe|coordena[çc][ãa]o de equipe/i,["lider"]],["Gestão de documentos",/document|arquiv|protocolo/i,[]],
 ["Inteligência artificial",/intelig[êe]ncia artificial|\bia\b|copilot|chatgpt|machine learning/i,["claude","ia1","ia2","copilot"]],
 ["Certificação Microsoft",/pl-?300|certifica[çc][ãa]o microsoft/i,["pl300"]],["Superior em TI",/sistemas de informa[çc][ãa]o|ci[êe]ncia da computa[çc][ãa]o|an[áa]lise e desenvolvimento|\bads\b|tecnologia da informa[çc][ãa]o/i,[]],
 ["Comunicação e apresentação",/comunica[çc][ãa]o|apresenta[çc]|storytelling/i,[]],["Organização e prazos",/organiza|prazos?|proatividade/i,[]]
];
const IVQ=[
 ["c","Fale um pouco sobre você.","Em 1 minuto: FAB (8 anos, administração e compras), ADS, por que dados agora e o que você já construiu (projetos). Termine com o que busca."],
 ["c","Por que você quer sair da Força Aérea?","Fale do futuro, nunca de problemas: o tempo de serviço termina em 2027 e você escolheu dados porque já fazia controles e relatórios."],
 ["c","Por que dados e BI?","Ligue a rotina (prazos, empenhos, entregas, escalas) à vontade de automatizar e decidir com números. Cite um projeto."],
 ["c","Conte uma situação em que você lidou com um prazo apertado.","Use STAR: situação (processo de compra urgente ou evento), tarefa, o que você fez, resultado com número ou prazo."],
 ["c","Conte um erro que você cometeu e o que aprendeu.","Escolha um erro real e pequeno, mostre a correção e o que mudou no seu método (checklist, conferência)."],
 ["c","Como você lida com informação sigilosa?","Processos disciplinares, dados pessoais e LGPD (curso ENAP): acesso mínimo, nada fora do sistema, conferência."],
 ["c","Conte uma vez em que precisou convencer alguém.","Ex.: mostrar a um fornecedor ou à chefia um prazo ou uma alternativa, com dados na mão."],
 ["c","Como você se organiza com muitas demandas ao mesmo tempo?","Lista de prioridades por prazo e impacto, controle em planilha, aviso antecipado quando algo vai atrasar."],
 ["c","Onde você se vê em 5 anos?","Analista pleno com foco em qualidade e governança de dados, com certificações (PL-300, EXIN, CDMP)."],
 ["c","Qual é a sua pretensão salarial?","Pesquise a faixa antes (Glassdoor, vagas parecidas). Dê uma faixa, não um número, e diga que está aberto a conversar."],
 ["t","Explique a diferença entre medida e coluna calculada no Power BI.","Coluna: calculada linha a linha e guardada no modelo. Medida: calculada na hora, conforme os filtros. Prefira medidas."],
 ["t","O que é um modelo estrela?","Uma tabela fato no centro (eventos, valores) ligada a dimensões (data, setor, produto). Mais simples e mais rápido para DAX."],
 ["t","Para que serve o CALCULATE?","Muda o contexto de filtro de uma medida. Ex.: vendas só de 2026, ou ignorando o filtro de setor."],
 ["t","Qual a diferença entre INNER JOIN e LEFT JOIN?","INNER traz só o que existe nas duas tabelas. LEFT traz tudo da esquerda e completa com nulo o que não achou na direita."],
 ["t","Como você trataria dados com duplicados e valores vazios?","Perfilar no Power Query, entender a causa, remover duplicados pela chave certa, decidir caso a caso o que fazer com vazios e documentar a regra."],
 ["t","Como você garante que um número do dashboard está certo?","Conferir com a fonte (total do sistema), testar com um caso conhecido, regras de validação e um dicionário de dados."],
 ["t","Que gráfico você usaria para mostrar evolução mensal?","Linha. Barras para comparar categorias; evite pizza com muitas fatias."],
 ["t","Fale de um projeto do seu portfólio.","Pergunta de negócio, dados (fonte), modelo, 2 medidas, uma descoberta e o que faria diferente."],
 ["t","O que é RLS no Power BI?","Segurança em nível de linha: cada usuário vê só as linhas permitidas (ex.: só o seu setor)."],
 ["a","Como funciona um processo de compra pública?","Planejamento e pesquisa de preços, termo de referência, licitação (pregão eletrônico), empenho, entrega, liquidação e pagamento (Lei 14.133)."],
 ["a","O que você fazia no SIAFI e no SILOMS?","Consultava empenhos e acompanhava pagamentos; acompanhava prazos e entregas com os fornecedores. Mostre que entende o ciclo da despesa."],
 ["a","Como você acompanharia entregas atrasadas de fornecedores?","Planilha ou painel com prazo, status e dias de atraso; contato com o fornecedor; aviso à chefia; registro para avaliar o fornecedor depois."],
 ["a","Você sabe Excel avançado?","Diga o que faz de verdade: PROCX, SOMASES, tabela dinâmica, Power Query. Ofereça mostrar um projeto."],
 ["a","Como você priorizaria pedidos de várias áreas?","Prazo legal ou de entrega, impacto, ordem de chegada. Combine o critério com a chefia e deixe visível para todos."]
];
const STORIES=[
 {t:"Organizar uma tropa de cerca de 64 militares",q:"Fale de uma vez em que você organizou pessoas ou liderou sem ter o cargo de chefe.",s:"No Esquadrão de Honras Militares, uma tropa de cerca de 64 militares, as formaturas e cerimônias mudavam com frequência.",ta:"Como Soldado de Primeira Classe, auxiliar na organização das escalas, das permutas e do treinamento da tropa.",a:"Mantive a escala atualizada, controlei permutas e faltas e apoiei o treino, avisando a chefia quando alguma cerimônia ficava descoberta.",r:"Cerimônias com o efetivo completo [diga quantas por mês]. Aprendi a coordenar muita gente com regra clara e registro.",d:"Controle de escala é um controle de dados: regra, registro e conferência."},
 {t:"Documentos oficiais com prazo (NPA e Notas de Serviço)",q:"Conte um momento em que você trabalhou com prazo apertado e muitos envolvidos.",s:"Na SAT do III COMAR, eventos como TACF, tiro anual, 7 de Setembro e Marcha Administrativa dependem de Notas de Serviço e NPA publicadas no prazo.",ta:"Auxiliar na confecção e na conferência desses documentos.",a:"Usei os modelos anteriores, conferi datas, efetivos e responsáveis com os setores e controlei as versões até a publicação.",r:"Documentos publicados no prazo [diga quantos por ano], sem retrabalho na publicação.",d:"É governança na prática: padrão, versão, dono e prazo de cada documento."},
 {t:"Acompanhar um projeto em mais de 60 organizações",q:"Conte uma vez em que você usou dados ou controles para ajudar uma decisão.",s:"A chefia precisava saber a situação de um projeto institucional em mais de 60 organizações militares.",ta:"Auxiliar no controle do que estava concluído e do que estava pendente.",a:"Montei e mantive a planilha de controle, cobrei os pendentes e atualizei a situação nas apresentações semanais das chefias.",r:"A chefia passou a ver o andamento toda semana [diga o % concluído no fim]. Foi meu primeiro indicador de verdade.",d:"É um painel de BI feito à mão: indicador, atualização semanal e cobrança."},
 {t:"Apoio às instruções da brigada de incêndio",q:"Conte uma vez em que você ensinou algo ou foi reconhecido pelo seu trabalho.",s:"O III COMAR mantém uma brigada de incêndio, e o GAP-RJ fez um Curso de Combate a Incêndio para brigadistas em maio de 2026.",ta:"Auxiliar o encarregado do setor nas atividades e nas instruções práticas e teóricas do curso.",a:"Ajudei nas instruções práticas e teóricas ministradas pelo encarregado, na preparação do material e na segurança dos alunos.",r:"Recebi referência elogiosa, publicada em junho de 2026. Aprendi a explicar com calma para quem nunca fez.",d:"Explicar um painel para quem não é de dados usa a mesma habilidade."},
 {t:"Eventos com até 100 participantes",q:"Fale de uma vez em que você planejou algo com várias áreas envolvidas.",s:"A SAT apoia reuniões, palestras e briefings com até 100 participantes.",ta:"Auxiliar na organização: passes e crachás, projeção e apoio no dia.",a:"Levantei a lista de participantes, emiti os passes e crachás, testei a projeção antes e fiquei de apoio durante o evento.",r:"Eventos sem atraso na entrada nem falha de projeção [diga quantos eventos].",d:"Planejar, conferir antes e ter um plano B é o mesmo cuidado de publicar um dashboard."}
];
const CERT_SEED=[
 {n:"Tecnólogo em Análise e Desenvolvimento de Sistemas",org:"Estácio",d:"2026-07-01",h:"",tp:"form"},
 {n:"Introdução à Lei Brasileira de Proteção de Dados Pessoais (LGPD)",org:"ENAP",d:"",h:"10",tp:"cert"},
 {n:"Acesso à Informação",org:"ENAP",d:"",h:"25",tp:"cert"},
 {n:"Ética e Serviço Público",org:"ENAP",d:"",h:"20",tp:"cert"},
 {n:"Gestão e Apuração da Ética Pública",org:"ENAP",d:"",h:"24",tp:"cert"},
 {n:"Prevenção e Enfrentamento do Assédio",org:"ENAP",d:"",h:"6",tp:"cert"}
];
const CCOST=[
 {id:"pl300",n:"PL-300 (Power BI)",usd:99,q:"jan/2027, 2 semanas antes da prova"},
 {id:"pl300r",n:"Refazer a PL-300, se precisar",usd:99,q:"só se não passar de primeira"},
 {id:"ai901",n:"AI-901 (fundamentos de IA)",usd:59,q:"abr/2027, depois do curso"},
 {id:"sc900",n:"SC-900 (segurança, conformidade e identidade)",usd:59,q:"mar–abr/2027, depois do curso"},
 {id:"dp900",n:"DP-900 (fundamentos de dados no Azure)",usd:59,q:"abr–mai/2027, opcional"},
 {id:"pl900",n:"PL-900 (Power Platform)",usd:59,q:"opcional, só se sobrar reserva"},
 {id:"dp600",n:"DP-600 (Fabric)",usd:99,q:"depois da primeira vaga (2027–2028)"},
 {id:"pdpf",n:"EXIN PDPF (LGPD)",usd:295,q:"depois da primeira vaga (2027–2028)"},
 {id:"cdmp",n:"CDMP Associate (DAMA)",usd:311,q:"fase Pleno (2028–2029)"}];
const SQL_DB=`CREATE TABLE setores(id INTEGER PRIMARY KEY, nome TEXT);
INSERT INTO setores VALUES (1,'Compras'),(2,'Pessoal'),(3,'Finanças'),(4,'Logística'),(5,'Protocolo');
CREATE TABLE fornecedores(id INTEGER PRIMARY KEY, nome TEXT, uf TEXT);
INSERT INTO fornecedores VALUES (1,'Alfa Esportes','RJ'),(2,'Beta Motos','SP'),(3,'Gama Informática','RJ'),(4,'Delta Papelaria','MG'),(5,'Ômega Uniformes','RJ');
CREATE TABLE compras(id INTEGER PRIMARY KEY, item TEXT, fornecedor_id INTEGER, setor_id INTEGER, modalidade TEXT, valor REAL, empenho TEXT, prazo TEXT, entrega TEXT);
INSERT INTO compras VALUES
(1,'Bolas e redes',1,1,'Pregão',4200,'2026-02-03','2026-03-05','2026-03-01'),
(2,'Capacetes para batedores',2,4,'Pregão',18500,'2026-02-10','2026-04-10','2026-04-22'),
(3,'Notebooks',3,3,'Pregão',32000,'2026-03-01','2026-04-15','2026-04-12'),
(4,'Papel A4',4,5,'Dispensa',1900,'2026-03-08','2026-03-20','2026-03-19'),
(5,'Uniformes de treino',5,2,'Pregão',7600,'2026-03-15','2026-05-15',NULL),
(6,'Cones e coletes',1,1,'Dispensa',850,'2026-04-02','2026-04-20','2026-04-25'),
(7,'Luvas para motociclistas',2,4,'Pregão',5400,'2026-04-05','2026-05-30','2026-05-28'),
(8,'Impressora',3,5,'Dispensa',2300,'2026-04-18','2026-05-10',NULL),
(9,'Toner',4,5,'Pregão',3100,'2026-05-02','2026-05-30','2026-06-04'),
(10,'Tênis de corrida',5,2,'Pregão',9800,'2026-05-20','2026-07-01','2026-06-28'),
(11,'Monitores',3,3,'Pregão',12600,'2026-06-01','2026-07-15','2026-07-30'),
(12,'Jaquetas para batedores',2,4,'Pregão',14300,'2026-06-10','2026-08-10',NULL);
CREATE TABLE documentos(id INTEGER PRIMARY KEY, setor_id INTEGER, tipo TEXT, recebido TEXT, prazo_dias INTEGER, concluido TEXT);
INSERT INTO documentos VALUES
(1,1,'Ofício','2026-05-02',10,'2026-05-09'),(2,1,'Memorando','2026-05-03',5,'2026-05-12'),(3,2,'Ofício','2026-05-04',10,'2026-05-10'),
(4,2,'Requerimento','2026-05-05',15,NULL),(5,3,'Ofício','2026-05-06',10,'2026-05-20'),(6,3,'Nota técnica','2026-05-07',20,'2026-05-22'),
(7,4,'Memorando','2026-05-08',5,'2026-05-11'),(8,4,'Ofício','2026-05-09',10,NULL),(9,5,'Requerimento','2026-05-10',15,'2026-05-18'),
(10,5,'Ofício','2026-05-11',10,'2026-05-30'),(11,1,'Nota técnica','2026-05-12',20,'2026-05-25'),(12,2,'Memorando','2026-05-13',5,'2026-05-15');`;
const SQLC=[
 ["Todas as compras","Liste item e valor de todas as compras.","SELECT item, valor FROM compras;",0],
 ["Compras caras","Liste item e valor das compras acima de R$ 10.000.","SELECT item, valor FROM compras WHERE valor > 10000;",0],
 ["Ordenar por valor","Liste item e valor do maior para o menor valor.","SELECT item, valor FROM compras ORDER BY valor DESC;",1],
 ["Só pregões","Quantas compras foram por pregão?","SELECT COUNT(*) FROM compras WHERE modalidade = 'Pregão';",0],
 ["Total por modalidade","Mostre a modalidade e o valor total de cada uma.","SELECT modalidade, SUM(valor) FROM compras GROUP BY modalidade;",0],
 ["Ainda não entregues","Liste o item das compras sem data de entrega.","SELECT item FROM compras WHERE entrega IS NULL;",0],
 ["Entregas atrasadas","Liste o item das compras entregues depois do prazo.","SELECT item FROM compras WHERE entrega > prazo;",0],
 ["Compra e fornecedor","Liste o item e o nome do fornecedor de cada compra (JOIN).","SELECT c.item, f.nome FROM compras c JOIN fornecedores f ON f.id = c.fornecedor_id;",0],
 ["Gasto por fornecedor","Mostre o nome do fornecedor e o total comprado dele.","SELECT f.nome, SUM(c.valor) FROM compras c JOIN fornecedores f ON f.id = c.fornecedor_id GROUP BY f.nome;",0],
 ["Fornecedores do RJ","Quanto foi comprado de fornecedores do RJ?","SELECT SUM(c.valor) FROM compras c JOIN fornecedores f ON f.id = c.fornecedor_id WHERE f.uf = 'RJ';",0],
 ["Setor que mais compra","Mostre o setor e o total, só dos setores com mais de R$ 20.000 (HAVING).","SELECT s.nome, SUM(c.valor) FROM compras c JOIN setores s ON s.id = c.setor_id GROUP BY s.nome HAVING SUM(c.valor) > 20000;",0],
 ["Documentos pendentes","Quantos documentos ainda não foram concluídos?","SELECT COUNT(*) FROM documentos WHERE concluido IS NULL;",0],
 ["Dias para concluir","Liste o id e os dias entre recebido e concluído dos documentos concluídos (use julianday).","SELECT id, julianday(concluido) - julianday(recebido) FROM documentos WHERE concluido IS NOT NULL;",0],
 ["Fora do prazo","Liste o id dos documentos concluídos depois do prazo em dias.","SELECT id FROM documentos WHERE concluido IS NOT NULL AND julianday(concluido) - julianday(recebido) > prazo_dias;",0],
 ["SLA por setor","Mostre o setor e o % de documentos concluídos no prazo (pendentes contam como fora).","SELECT s.nome, ROUND(100.0 * SUM(CASE WHEN d.concluido IS NOT NULL AND julianday(d.concluido) - julianday(d.recebido) <= d.prazo_dias THEN 1 ELSE 0 END) / COUNT(*), 1) FROM documentos d JOIN setores s ON s.id = d.setor_id GROUP BY s.nome;",0],
 ["Ranking com janela","Mostre item, valor e a posição de cada compra no ranking de valor (RANK).","SELECT item, valor, RANK() OVER (ORDER BY valor DESC) FROM compras;",0]
];
const PEND=[
 {id:"baixa",t:"Data da baixa",a:"Fim de fevereiro (28/02/2027). Pode ser liberado um pouco antes."},
 {id:"carta",t:"Quem assina a carta",a:"TC chefe da SAT. Pedir em 04/01/2027."},
 {id:"local",t:"Cidade e modelo de trabalho",a:"Rio, presencial ou home office. Fora do Rio, SP."},
 {id:"sal",t:"Pretensão salarial",a:"Faixa de mercado, com o líquido atual da FAB como piso (Carreira → Transição)."},
 {id:"transp",t:"Resultado da Transpetro",h:"Quando sair, o plano segue o cenário certo. O app lembra de conferir em 11/01 e 01/02."},
 {id:"ingles",t:"Teste de inglês (EF SET, grátis, 50 min)",h:"Escolha o nível que deu no teste: as sessões de inglês passam a seguir o plano desse nível.",u:"https://www.efset.org/pt/",lv:1},
 {id:"orc",t:"Reserva para as provas",h:"Carreira → Transição → Orçamento das certificações."},
 {id:"li",t:"Endereço do LinkedIn",a:"URL personalizada criada em 10/11/2026. Use a mesma no currículo e no GitHub."},
 {id:"post1",t:"Primeira publicação no LinkedIn (formação em ADS e transição para dados)",h:"Texto pronto. Publique quando tiver de 30 a 50 conexões e depois fixe nos Destaques."},
 {id:"gh",t:"Endereço do GitHub",a:"github.com/pedro1105, mantido porque os links do GitHub Pages dependem dele. Perfil e README revisados em 11/11/2026."},
 {id:"bt",t:"Banco de Talentos do Portal do Militar",a:"Cadastrado em 11/11/2026, com área nacional e 6 cursos. LGPD e Acesso à Informação aguardam validação da SPM."},
 {id:"ptm",t:"Portal do Militar: e-mail novo e inglês",h:"Dados Pessoais → Cadastro → Dados Pessoais. Cadastre o e-mail profissional e o inglês (básico)."},
 {id:"sig",t:"SIGPES: corrigir funções e confirmar CFC e CESD",h:"Na Seção de Pessoal: no SIGPES constam Pessoal e Processos Disciplinares e o SD nas funções. O app lembra junto da tarefa da Seção de Pessoal."},
 {id:"mlk",t:"Link do Microsoft Learn e da Transcrição no LinkedIn",h:"Depois do 1º roteiro do plano PL-300: gere o link público da Transcrição no Learn e ponha os dois links no LinkedIn."},
 {id:"msl",t:"Coleções do Microsoft Learn",a:"Feito em 11/11/2026: plano \"PL-300 – prova em 02/02/2027\" (5 roteiros) e coleção pública \"Certificações Microsoft – Roteiro 2027-2028\" (PL-300, SC-900, DP-900, AI-901, PL-900, DP-600 e o módulo do Purview)."}];
const SNDS=[
 ["brown","Ruído marrom","Grave e uniforme. O que melhor abafa barulho de rua, ônibus e conversa."],
 ["pink","Ruído rosa","Equilibrado, mais suave que o branco. Bom para ler e fazer exercícios."],
 ["white","Ruído branco","Mais agudo, como um chiado. Abafa vozes por perto."],
 ["rain","Chuva","Chuva constante com gotas. Relaxa sem distrair."],
 ["waves","Ondas do mar","Ondas lentas, a cada 8 segundos. Bom para revisar com calma."],
 ["pad","Ambiente lo-fi","Acordes suaves e lentos, sem letra e sem batida forte."],
 ["piano","Piano calmo","Notas soltas de piano com eco, bem espaçadas."]
];
const TUTOR_MODES={
 mentor:{n:"Mentoria (sem dar a resposta)",ph:"Diga o que está estudando ou cole o que tentou fazer.",sys:"Você é mentor e tutor de um iniciante brasileiro em BI (8 anos na área administrativa da Força Aérea, formado em Análise e Desenvolvimento de Sistemas) que quer aprender a FAZER, não só assistir, para se sair bem nas entrevistas. Use o método socrático: não entregue a resposta pronta de primeira. 1) Pergunte o que ele já tentou ou peça que tente; 2) dê uma dica de cada vez; 3) quando ele acertar, peça que explique com as palavras dele; 4) corrija conceitos errados com franqueza; 5) no fim, faça uma pergunta de entrevista sobre o tema e avalie a resposta dele (nota de 0 a 10 e o que faltou). Use exemplos administrativos (documentos, prazos, compras). Português do Brasil, frases curtas."},
 erro:{n:"Explicar um erro",ph:"Cole a consulta SQL, a medida DAX ou o passo do Power Query e a mensagem de erro.",sys:"Você é um tutor paciente de SQL, DAX, Power Query e Excel para um iniciante brasileiro que está migrando para BI. Explique em português simples: 1) o que o erro quer dizer, 2) a causa mais provável no código enviado, 3) o código corrigido num bloco, 4) uma dica para não repetir. Seja breve."},
 duvida:{n:"Tirar uma dúvida",ph:"Ex.: qual a diferença entre ALL e REMOVEFILTERS? Quando usar DirectQuery?",sys:"Você é um tutor de dados e Power BI para um iniciante brasileiro que vai fazer a certificação PL-300. Responda em português, direto, com um exemplo curto e prático (de preferência com dados administrativos, como documentos, prazos e compras). No fim, diga em uma linha se o tema costuma cair na PL-300."},
 texto:{n:"Revisar texto (LinkedIn, currículo, post)",ph:"Cole o texto e diga onde vai usar.",sys:"Você revisa textos profissionais em português para alguém em transição de carreira: 8 anos como Cabo de Administração na Força Aérea Brasileira, formado em Análise e Desenvolvimento de Sistemas, buscando vaga de Analista de BI/Dados Júnior. Devolva: 1) a versão revisada, pronta para colar; 2) três ajustes que você fez e por quê. Regras: tom profissional e humano, verbos de ação, números quando houver, sem exagero nem clichês, sem jargão militar sem explicação. Nunca inclua informações internas da FAB. Enquanto ele for militar da ativa, não sugira oferecer serviços pagos."},
 entrev:{n:"Simular entrevista",ph:"Escreva \"começar\" ou cole a descrição da vaga.",sys:"Você é um recrutador brasileiro entrevistando um candidato para Analista de BI/Dados Júnior. Faça UMA pergunta por vez (alternando comportamental e técnica de SQL, Power BI, DAX e Excel). Depois de cada resposta, dê uma nota de 0 a 10, um ponto forte, um ponto a melhorar e uma versão melhor da resposta em até 5 linhas (método STAR quando couber), e então faça a próxima pergunta. O candidato tem 8 anos de experiência administrativa na Força Aérea e está saindo em 2027. Responda sempre em português."}
};
const MENTOR={
 claude:{d:"Escreva um prompt pedindo ao Claude para corrigir uma consulta SQL sem dar a resposta pronta, só dicas, e teste.",q:["Como você usa IA no trabalho sem confiar cegamente?","Dê um exemplo de tarefa que a IA acelerou para você e de como conferiu o resultado."]},
 excel:{d:"Numa planilha nova, sem consultar: PROCX entre duas tabelas, SE com duas condições e uma tabela dinâmica por mês.",q:["Qual a diferença entre PROCV e PROCX?","Como você limparia uma base com datas em formatos diferentes?","Quando uma tabela dinâmica não basta?"]},
 git:{d:"Crie um repositório, faça 3 commits com mensagens claras e escreva um README com 4 seções.",q:["Para que serve o Git num projeto de BI?","Como você organiza um repositório de portfólio?"]},
 sql:{d:"Sem olhar a aula, escreva uma consulta com JOIN, WHERE, GROUP BY e HAVING na base do Desafio SQL (Estudar › Revisar).",q:["Qual a diferença entre WHERE e HAVING?","Explique INNER JOIN e LEFT JOIN com um exemplo de documentos e setores.","Como você acharia registros duplicados numa tabela?"]},
 pbi:{d:"Importe uma planilha, crie 2 relacionamentos e um visual com filtro, sem seguir o vídeo.",q:["Qual a diferença entre Power Query e DAX?","O que você faz quando um relatório está lento?","Como você escolhe o visual certo para uma pergunta?"]},
 model:{d:"Desenhe no papel um modelo estrela para documentos e setores: fato, dimensões e chaves.",q:["O que é modelo estrela e por que usar?","Qual a diferença entre tabela fato e dimensão?","O que é granularidade?"]},
 dax:{d:"Escreva de memória: total, % do total com ALL e acumulado do ano com TOTALYTD; depois teste.",q:["O que é contexto de filtro e contexto de linha?","Para que serve o CALCULATE?","Qual a diferença entre coluna calculada e medida?"]},
 sqladv:{d:"Resolva com CTE e função de janela: os 3 setores com mais atraso em cada mês.",q:["O que é uma CTE e quando usar?","Para que servem ROW_NUMBER e RANK?","Como você deixaria uma consulta lenta mais rápida?"]},
 ia1:{d:"Peça a uma IA o resumo de uma tabela sua e encontre pelo menos um erro ou exagero na resposta.",q:["Quais os riscos de usar IA generativa com dados da empresa?","Como você confere se uma resposta da IA está certa?"]},
 pl300:{d:"Faça 10 questões do simulado sem consultar e explique em voz alta por que cada alternativa errada está errada.",q:["Como você implementaria segurança por linha (RLS)?","Qual a diferença entre importação e DirectQuery?","Como você publica e compartilha um relatório no Power BI Service?"]},
 copilot:{d:"Use o Copilot para criar uma medida DAX e depois explique cada parte dela sem ajuda.",q:["Onde o Copilot ajuda e onde ele erra no Power BI?","Que cuidado tomar ao usar Copilot com dados sensíveis?"]},
 py:{d:"Com pandas, leia um CSV, trate os nulos, agrupe por mês e salve o resultado, sem copiar da aula.",q:["Quando você usaria Python em vez de Power Query?","Como você trata valores nulos no pandas?","O que o groupby faz?"]},
 ia2:{d:"Classifique 20 textos com IA, revise à mão e calcule quantos ela acertou.",q:["Como você avaliaria se um modelo de IA está acertando?","O que é viés num modelo e como perceber?"]},
 stats:{d:"Calcule média, mediana e desvio padrão de uma coluna e explique qual resume melhor e por quê.",q:["Média ou mediana: quando usar cada uma?","O que é correlação e por que ela não prova causa?","Como você identificaria um valor fora do normal?"]},
 gov:{d:"Escreva o dicionário de 5 colunas de um projeto seu: nome, descrição, tipo, regra de validação e dono.",q:["O que é governança de dados, em uma frase?","Como a LGPD afeta um dashboard?","O que é qualidade de dados e como você mede?","Para que serve um dicionário de dados?"]},
 sc900:{d:"Explique, sem ler, como um rótulo de confidencialidade do Purview protege um relatório com dados pessoais.",q:["Qual a diferença entre autenticação e autorização?","Como a LGPD aparece no Microsoft Purview?"]},
 dp900:{d:"Explique a diferença entre um banco relacional, um não relacional e um data warehouse, com um exemplo de cada.",q:["O que é ETL e o que é ELT?","Quando usar processamento em lote e quando usar tempo real?"]},
 pl900:{d:"Desenhe um fluxo do Power Automate que avisa por e-mail quando um prazo vence numa planilha.",q:["Que tarefa administrativa você automatizaria primeiro?","Qual a diferença entre Power Apps e Power Automate?"]},
 ai900:{d:"Explique em 2 minutos, sem ler, a diferença entre visão computacional, linguagem natural e IA generativa.",q:["O que é IA responsável?","Dê um exemplo de uso de IA numa área administrativa."]},
 fabric:{d:"Desenhe o caminho do dado: arquivo → lakehouse → modelo semântico → relatório, e explique cada etapa.",q:["O que é um lakehouse?","O que é Direct Lake e qual a vantagem?","Quando faz sentido usar Fabric em vez de só Power BI?"]},
 lider:{d:"Escreva como você daria um feedback difícil a um colega usando situação, comportamento e impacto.",q:["Como você lida com um colega que não entrega?","Conte uma vez em que você organizou pessoas para um objetivo.","Como você dá e recebe feedback?"]},
 p1:{d:"Antes de abrir qualquer tutorial, escreva o plano desta etapa em 3 passos. Só pesquise o que travar.",q:["Conte sobre um projeto de BI que você fez, do começo ao fim.","Que problemas você achou nos dados reais e como tratou?","Por que você escolheu esse modelo de dados?","Como você protegeu dados pessoais que estavam no texto dos pedidos?"]},
 p2:{d:"Antes de abrir qualquer tutorial, escreva o plano desta etapa em 3 passos. Só pesquise o que travar.",q:["Como você trabalha com dados públicos grandes e bagunçados?","Como você conferiu se os totais estavam certos?","Qual foi o achado mais interessante e o que você recomendaria?"]},
 p3:{d:"Antes de abrir qualquer tutorial, escreva o plano desta etapa em 3 passos. Só pesquise o que travar.",q:["Como você faria uma previsão e explicaria o limite dela para um gestor?","Como você detecta um valor fora do normal?","Como você usou IA sem perder o controle do resultado?"]}
};
const IV_PROMPT="Simulado semanal de entrevista (20 min) para vaga de Analista de BI/Dados Júnior. Faça 5 perguntas, uma por vez: 3 sobre os meus projetos (prazos da LAI com governança e LGPD; gastos da Defesa com orçamento, compras e viagens; combustíveis da ANP com Python, previsão e Fabric), 1 técnica de SQL ou DAX e 1 comportamental pedindo uma história no formato STAR. Avalie cada resposta e, no fim, diga o que treinar na próxima semana.";
