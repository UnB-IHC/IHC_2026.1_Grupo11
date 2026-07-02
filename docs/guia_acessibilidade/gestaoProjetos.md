# Gestão de Projetos e Pesquisa de UX

A acessibilidade deve orientar pesquisa, escopo, responsabilidades, implementação, validação e manutenção desde o início do projeto. Use o checklist abaixo para acompanhar o progresso da equipe.

<div class="heuristica-donut" data-level-group="geral">
  <div class="heuristica-donut-ring">
    <div class="heuristica-donut-center">0%</div>
  </div>
  <div class="heuristica-donut-count">(0/0)</div>
</div>

## Pesquisa de UX e personas

Personas ajudam a representar barreiras permanentes, temporárias e situacionais. Elas devem orientar decisões e ser complementadas por pesquisa e validação com pessoas reais.

Considere no planejamento os seguintes exemplos de público:

<div class="heuristica-item" data-id="gestao-persona-01" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas com Deficiência Visual</strong> (cegueira, baixa visão, daltonismo ou deficiência cromática). <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-02" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas com Deficiência Física</strong> (fraqueza, tremores, movimentos involuntários, paralisia, limitações da sensação, dor que impede movimento, ausência de membros). <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-03" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas com Deficiência Auditiva</strong> (surdez, baixa audição, surdocegueira). <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-04" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas com Deficiência na Fala</strong> (dificuldade para falar, volume insuficiente, gagueira, mudez). <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-05" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas Neurodiversas</strong> (autismo, TDAH, dislexia e outras condições cognitivas). <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-06" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas com Múltiplas Deficiências</strong> (combinação de duas ou mais deficiências). <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-07" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Possíveis Limitações Decorrentes do Envelhecimento</strong> (visão reduzida, audição prejudicada, mobilidade limitada). <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-persona-08" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content"><strong>Pessoas com Analfabetismo</strong> (analfabetismo digital e funcional, níveis 1, 2 e 3). <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R4" aria-label="Referência 4">[4]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

### Jornada e barreiras

| Etapa | Perfil afetado | Barreira | Resposta do projeto |
| :--- | :--- | :--- | :--- |
| Descoberta | Pessoa com deficiência visual | Ordem de cabeçalhos incoerente. | Aplicar estrutura semântica e hierarquia lógica. |
| Interação | Pessoa com limitação situacional ou motora | Áreas de toque pequenas. | Garantir alvos de interação com tamanho adequado. |
| Entrada de dados | Pessoa com limitação motora temporária | Informações precisam ser digitadas novamente. | Permitir preenchimento automático e reaproveitamento de dados. |
| Correção de erro | Pessoa com baixo letramento digital | O erro depende apenas de cor ou usa linguagem técnica. | Explicar o problema em texto claro e indicar como corrigi-lo. |
| Conclusão | Pessoa que utiliza leitor de tela | A confirmação aparece apenas visualmente. | Anunciar mudanças de estado às tecnologias assistivas. |

## Acessibilidade como compromisso do projeto

Defina acessibilidade desde a abertura do projeto, considerando pessoas, jornadas, normas, responsabilidades e riscos de exclusão.

<div class="heuristica-item" data-id="gestao-001" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">o problema que o produto pretende resolver; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-002" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">as pessoas e os contextos de uso considerados; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-003" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">as jornadas digitais essenciais; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-004" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">o objetivo de acessibilidade da entrega; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-005" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">as normas e diretrizes adotadas; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-006" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">as áreas responsáveis pelas decisões e validações; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-007" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">os principais riscos de exclusão digital. <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

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

Transforme requisitos de acessibilidade em atividades com orçamento, recursos, prazos e verificações ao longo de jornadas completas.

<div class="heuristica-item" data-id="gestao-008" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">o nível de conformidade pretendido foi definido; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-009" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">os requisitos aplicáveis da ABNT NBR 17225:2025 e da WCAG 2.2 foram identificados; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-010" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">os critérios dos níveis A e AA da WCAG são contemplados como referência geral; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-011" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">há orçamento para ferramentas, dispositivos, tecnologias assistivas e apoio especializado; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-012" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">a participação de pessoas com deficiência está prevista e possui recursos; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-013" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">as jornadas completas serão avaliadas, e não somente páginas isoladas; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-014" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">os riscos possuem impacto, prioridade, responsável e ação de resposta; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-015" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">existem pontos de verificação ao longo do cronograma. <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

## Requisitos que podem ser verificados

Escreva critérios de aceite objetivos, indicando a tarefa, o comportamento esperado, a diretriz aplicável e o método de teste.

<div class="heuristica-item" data-id="gestao-016" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">operação completa por teclado; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-017" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">ordem de foco lógica e indicador de foco visível; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-018" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">nomes, funções e estados compreensíveis para tecnologias assistivas; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-019" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">rótulos e instruções associados aos campos; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-020" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">mensagens de erro claras e identificadas sem depender apenas de cor; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-021" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">comunicação de atualizações dinâmicas; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-022" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">tamanho adequado dos alvos de interação; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-023" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">alternativas para gestos complexos ou movimentos de arrastar; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-024" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">alternativas textuais e recursos equivalentes para mídias. <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

## Acessibilidade nos artefatos da equipe

Documentos, protótipos, planilhas e apresentações também devem ser acessíveis para não excluir integrantes da equipe.

<div class="heuristica-item" data-id="gestao-025" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">hierarquia lógica de títulos; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-026" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">textos alternativos em imagens, gráficos e diagramas; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-027" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">contraste adequado entre conteúdo e fundo; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-028" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">informação que não dependa exclusivamente de cor ou posição; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-029" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">linguagem clara, com siglas explicadas; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-030" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">links que indiquem seu destino; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-031" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">tabelas com títulos e cabeçalhos identificados; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-032" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">ordem de leitura coerente; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-033" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">verificação de acessibilidade dos arquivos PDF e DOCX exportados. <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a></span>
  </label>
</div>

## Controle de qualidade da entrega

Valide durante todo o desenvolvimento, combinando automação, inspeção manual, tecnologias assistivas e testes com pessoas.

<div class="heuristica-item" data-id="gestao-034" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">os critérios de aceite de acessibilidade foram atendidos; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-035" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">a análise automática foi executada e seus resultados foram revisados; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-036" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">todas as funções podem ser utilizadas sem mouse; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-037" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">o foco está visível e segue uma sequência coerente; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-038" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">ao menos um fluxo crítico foi percorrido com leitor de tela; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-039" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">os contrastes de textos e componentes foram avaliados; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-040" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">a ampliação e o redimensionamento não causam perda de conteúdo; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-041" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">diferentes tamanhos de tela foram testados; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-042" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">erros e atualizações dinâmicas são comunicados adequadamente; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-043" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">imagens, áudio e vídeo possuem alternativas acessíveis; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-044" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">a documentação foi atualizada; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-045" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">problemas pendentes possuem severidade, responsável e prazo. <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

## Indicadores e tratamento de barreiras

Acompanhe impacto nas tarefas, cobertura dos testes, reincidência e tempo de correção, não apenas pontuações automáticas.

<div class="heuristica-item" data-id="gestao-046" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">quantidade de barreiras por severidade e etapa da jornada; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-047" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">tempo médio de correção de barreiras críticas; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-048" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">cobertura de testes manuais e com tecnologias assistivas; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-049" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">percentual de requisitos de acessibilidade atendidos; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-050" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">conclusão de tarefas essenciais por pessoas com deficiência; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-051" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">reincidência de problemas anteriormente corrigidos; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-052" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">manifestações recebidas pelos canais de atendimento. <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R3" aria-label="Referência 3">[3]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

## Entrega, manutenção e melhoria contínua

Documente limitações e pendências, mantenha um canal acessível e reavalie o produto após mudanças relevantes.

<div class="heuristica-item" data-id="gestao-053" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">documentação das decisões, resultados e limitações conhecidas; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-054" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">registro das pendências e dos respectivos prazos; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-055" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">orientação para equipes de conteúdo e manutenção; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-056" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">canal acessível para o relato de dificuldades; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-057" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">inclusão dos relatos no backlog do produto; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-058" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">nova avaliação após mudanças relevantes; <a href="#GP-R1" aria-label="Referência 1">[1]</a> <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R5" aria-label="Referência 5">[5]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a> <a href="#GP-R7" aria-label="Referência 7">[7]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-059" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">calendário de revisões periódicas; <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

<div class="heuristica-item" data-id="gestao-060" data-level="geral">
  <label class="heuristica-check-label">
    <input type="checkbox" class="heuristica-checkbox">
    <span class="heuristica-check-content">preservação dos requisitos em futuras contratações e atualizações. <a href="#GP-R2" aria-label="Referência 2">[2]</a> <a href="#GP-R6" aria-label="Referência 6">[6]</a></span>
  </label>
</div>

---

## Referências Bibliográficas

<span id="GP-R1">1.</span> ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225:2025 — Acessibilidade em conteúdo e aplicações web — Requisitos**. Rio de Janeiro: ABNT, 2025.

<span id="GP-R2">2.</span> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. 2023. Disponível em: <https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf>.

<span id="GP-R3">3.</span> G3ICT. **Digital Accessibility: Evaluating with Users with Disabilities**. 2021. Disponível em: <https://g3ict.org/>.

<span id="GP-R4">4.</span> IBGE. **Censo Demográfico 2022 — Resultados sobre Pessoas com Deficiência**. 2025. Disponível em: <https://agenciadenoticias.ibge.gov.br/>.

<span id="GP-R5">5.</span> WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>.

<span id="GP-R6">6.</span> WORLD WIDE WEB CONSORTIUM. **Planning and Managing Web Accessibility**. Web Accessibility Initiative. Disponível em: <https://www.w3.org/WAI/planning-and-managing/>.

<span id="GP-R7">7.</span> WORLD WIDE WEB CONSORTIUM. **Evaluating Web Accessibility Overview**. Web Accessibility Initiative. Disponível em: <https://www.w3.org/WAI/test-evaluate/>.
