# Gestão de Projetos 

Um produto digital acessível não surge apenas de uma revisão técnica feita antes da publicação. A acessibilidade precisa orientar decisões de escopo, orçamento, pesquisa, design, desenvolvimento, conteúdo, testes e manutenção.

Este roteiro apresenta práticas para incorporar a acessibilidade à gestão do projeto. As orientações têm como base a **ABNT NBR 17225:2025**, as **WCAG 2.1 e 2.2** e o **Guia de Boas Práticas para Acessibilidade Digital**.

## Acessibilidade como compromisso do projeto

Na abertura do projeto, a equipe deve identificar quem pode encontrar barreiras, quais jornadas são essenciais e quais áreas influenciam a entrega. Essa análise inicial evita que a acessibilidade seja reduzida a uma tarefa exclusiva de desenvolvimento.

O documento de visão ou termo de abertura deve apresentar:

- [ ] o problema que o produto pretende resolver;
- [ ] as pessoas e os contextos de uso considerados;
- [ ] as jornadas digitais essenciais;
- [ ] o objetivo de acessibilidade da entrega;
- [ ] as normas e diretrizes adotadas;
- [ ] as áreas responsáveis pelas decisões e validações;
- [ ] os principais riscos de exclusão digital.

Pessoas com deficiência devem participar das atividades de pesquisa, avaliação e tomada de decisão. Também devem ser considerados usuários com baixo letramento digital, pessoas idosas, limitações temporárias ou situacionais, tecnologias assistivas, dispositivos de menor desempenho e conexões limitadas.

## Distribuição de responsabilidades

A acessibilidade é uma responsabilidade compartilhada, mas isso não significa deixá-la sem responsáveis definidos. Cada área deve saber o que precisa entregar e como seu trabalho será avaliado.

| Área | Responsabilidades relacionadas à acessibilidade |
| --- | --- |
| **Gestão** | Definir objetivos, responsáveis, orçamento, cronograma, riscos e critérios de aprovação. |
| **Pesquisa** | Incluir pessoas com deficiência, investigar barreiras e representar diferentes contextos de uso. |
| **Design** | Criar fluxos previsíveis, componentes perceptíveis, boa hierarquia visual e interação independente de precisão motora. |
| **Desenvolvimento** | Utilizar HTML semântico, garantir operação por teclado e compatibilidade com tecnologias assistivas. |
| **Conteúdo** | Produzir textos claros, alternativas para imagens e recursos acessíveis para áudio e vídeo. |
| **Qualidade** | Combinar avaliações automáticas, inspeções manuais e testes com usuários. |
| **Manutenção** | Preservar os requisitos após atualizações e tratar relatos de novas barreiras. |

Essa divisão deve aparecer no plano do projeto e nas tarefas da equipe. Sempre que houver dependência entre áreas, como a produção de legenda, texto alternativo ou mensagem de erro, o responsável e o prazo devem ser explícitos.

## Planejamento das entregas

Os requisitos de acessibilidade devem ser convertidos em trabalho planejado. O cronograma precisa reservar tempo para capacitação, revisão de protótipos, implementação, produção de conteúdo alternativo, testes, correções e novas verificações.

Antes do início da execução, confirme se:

- [ ] o nível de conformidade pretendido foi definido;
- [ ] os requisitos aplicáveis da ABNT NBR 17225:2025 e da WCAG 2.2 foram identificados;
- [ ] os critérios dos níveis A e AA da WCAG são contemplados como referência geral;
- [ ] há orçamento para ferramentas, dispositivos, tecnologias assistivas e apoio especializado;
- [ ] a participação de pessoas com deficiência está prevista e possui recursos;
- [ ] as jornadas completas serão avaliadas, e não somente páginas isoladas;
- [ ] os riscos possuem impacto, prioridade, responsável e ação de resposta;
- [ ] existem pontos de verificação ao longo do cronograma.

Uma jornada deve ser analisada do início ao fim. Em um cadastro, por exemplo, não basta que os campos sejam acessíveis se a confirmação, a recuperação de erro ou a autenticação criarem uma barreira.

## Requisitos que podem ser verificados

Requisitos genéricos, como “a página deve ser acessível”, dificultam a implementação e a avaliação. Cada tarefa deve dizer qual comportamento é esperado e como ele será testado.

Um bom critério de aceite informa:

1. qual pessoa ou forma de interação está sendo considerada;
2. qual tarefa precisa ser concluída;
3. qual comportamento acessível é esperado;
4. qual diretriz ou requisito fundamenta a decisão;
5. como a equipe verificará o resultado.

Por exemplo:

> Ao navegar somente pelo teclado, a pessoa usuária consegue alcançar e acionar todos os controles do formulário em uma ordem lógica, com o foco sempre visível. A verificação será feita manualmente, sem o uso do mouse. [WCAG 2.1.1, 2.4.3 e 2.4.7]

Para componentes e fluxos interativos, avalie se os critérios de aceite incluem:

- [ ] operação completa por teclado;
- [ ] ordem de foco lógica e indicador de foco visível;
- [ ] nomes, funções e estados compreensíveis para tecnologias assistivas;
- [ ] rótulos e instruções associados aos campos;
- [ ] mensagens de erro claras e identificadas sem depender apenas de cor;
- [ ] comunicação de atualizações dinâmicas;
- [ ] tamanho adequado dos alvos de interação;
- [ ] alternativas para gestos complexos ou movimentos de arrastar;
- [ ] alternativas textuais e recursos equivalentes para mídias.

## Acessibilidade nos artefatos da equipe

Documentos internos também fazem parte do projeto. Diagramas inacessíveis, planilhas sem cabeçalhos e apresentações com baixo contraste podem excluir integrantes da própria equipe e prejudicar decisões.

Revise requisitos, atas, relatórios, protótipos e apresentações observando:

- [ ] hierarquia lógica de títulos;
- [ ] textos alternativos em imagens, gráficos e diagramas;
- [ ] contraste adequado entre conteúdo e fundo;
- [ ] informação que não dependa exclusivamente de cor ou posição;
- [ ] linguagem clara, com siglas explicadas;
- [ ] links que indiquem seu destino;
- [ ] tabelas com títulos e cabeçalhos identificados;
- [ ] ordem de leitura coerente;
- [ ] verificação de acessibilidade dos arquivos PDF e DOCX exportados.

Quando um formato não puder ser tornado plenamente acessível, deve ser fornecida uma alternativa equivalente.

## Controle de qualidade da entrega

A validação deve acontecer durante a produção, permitindo correções antes que uma barreira se espalhe por várias páginas ou componentes. Ferramentas automáticas agilizam parte da inspeção, mas não substituem avaliações manuais e testes com pessoas.

Uma entrega somente deve ser considerada concluída quando os itens aplicáveis forem verificados:

- [ ] os critérios de aceite de acessibilidade foram atendidos;
- [ ] a análise automática foi executada e seus resultados foram revisados;
- [ ] todas as funções podem ser utilizadas sem mouse;
- [ ] o foco está visível e segue uma sequência coerente;
- [ ] ao menos um fluxo crítico foi percorrido com leitor de tela;
- [ ] os contrastes de textos e componentes foram avaliados;
- [ ] a ampliação e o redimensionamento não causam perda de conteúdo;
- [ ] diferentes tamanhos de tela foram testados;
- [ ] erros e atualizações dinâmicas são comunicados adequadamente;
- [ ] imagens, áudio e vídeo possuem alternativas acessíveis;
- [ ] a documentação foi atualizada;
- [ ] problemas pendentes possuem severidade, responsável e prazo.

Plugins, sobreposições e outras soluções automáticas não devem ser usados como substitutos para código semântico, conteúdo acessível e validação humana.

## Indicadores e tratamento de barreiras

O acompanhamento não deve se limitar a uma pontuação gerada por ferramenta. Indicadores precisam mostrar se as pessoas conseguem concluir tarefas e se a equipe está corrigindo problemas de forma sustentável.

Podem ser acompanhados:

- [ ] quantidade de barreiras por severidade e etapa da jornada;
- [ ] tempo médio de correção de barreiras críticas;
- [ ] cobertura de testes manuais e com tecnologias assistivas;
- [ ] percentual de requisitos de acessibilidade atendidos;
- [ ] conclusão de tarefas essenciais por pessoas com deficiência;
- [ ] reincidência de problemas anteriormente corrigidos;
- [ ] manifestações recebidas pelos canais de atendimento.

Cada barreira deve ser registrada com evidência, requisito relacionado, impacto para a pessoa usuária, prioridade, responsável e estado da correção. Mudanças de escopo, tecnologia ou conteúdo também devem passar por análise de impacto em acessibilidade.

## Entrega, manutenção e melhoria contínua

No encerramento, a equipe deve avaliar o escopo completo da entrega, documentar limitações e transferir o conhecimento para quem manterá o produto. Barreiras críticas não devem ser ignoradas apenas porque o cronograma terminou.

O plano de continuidade deve assegurar:

- [ ] documentação das decisões, resultados e limitações conhecidas;
- [ ] registro das pendências e dos respectivos prazos;
- [ ] orientação para equipes de conteúdo e manutenção;
- [ ] canal acessível para o relato de dificuldades;
- [ ] inclusão dos relatos no backlog do produto;
- [ ] nova avaliação após mudanças relevantes;
- [ ] calendário de revisões periódicas;
- [ ] preservação dos requisitos em futuras contratações e atualizações.

A conformidade não é calculada por média. Para declarar conformidade com um nível da WCAG, todos os critérios aplicáveis desse nível e dos níveis inferiores devem ser satisfeitos dentro do escopo declarado. Como produtos e conteúdos mudam, a acessibilidade deve ser reavaliada continuamente.

---

## Referências Bibliográficas

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. Rio de Janeiro: ABNT, 2025.

DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: <https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf>. Acesso em: 9 maio 2024.

WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.1**. Recomendação W3C, 21 set. 2023. Disponível em: <https://www.w3.org/TR/WCAG21/#sotd>. Acesso em: 9 maio 2024.

WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. [S.l.]: W3C, out. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>. Acesso em: 28 jun. 2026.
