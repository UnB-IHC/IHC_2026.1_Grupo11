# Desenvolvimento Web

Aqui a equipe de desenvolvimento precisa saber implementar, verificar e testar acessibilidade e entender como pessoas com deficiência realmente usam sites e aplicativos.

Esta página usa os componentes interativos do guia: clique em **Conforme**, **Não conforme** ou **Não aplicável** em cada critério. Sua escolha fica salva no seu navegador, e o painel abaixo recalcula sozinho.

<div class="a11y-panel">
  <div class="a11y-donut" data-level-group="A">
    <div class="a11y-donut-label">Nível A</div>
    <div class="a11y-donut-count">(0/0)</div>
    <div class="a11y-donut-ring">
      <div class="a11y-donut-center">0%</div>
    </div>
  </div>
  <div class="a11y-donut" data-level-group="AA">
    <div class="a11y-donut-label">Nível AA</div>
    <div class="a11y-donut-count">(0/0)</div>
    <div class="a11y-donut-ring">
      <div class="a11y-donut-center">0%</div>
    </div>
  </div>
  <div class="a11y-donut" data-level-group="AAA">
    <div class="a11y-donut-label">Nível AAA</div>
    <div class="a11y-donut-count">(0/0)</div>
    <div class="a11y-donut-ring">
      <div class="a11y-donut-center">0%</div>
    </div>
  </div>
</div>

## Estrutura semântica

Botões, links e regiões da página precisam de marcação com significado — não dá pra trocar tudo por `<div>` genérica, porque aí o leitor de tela perde a referência de "isso é clicável" ou "isso é um menu". Os cabeçalhos (`<h1>` a `<h6>`) precisam seguir uma hierarquia lógica, e regiões como navegação, conteúdo principal e rodapé devem estar identificadas semanticamente. ARIA deve ser usado só de forma complementar, quando o HTML nativo não for suficiente.

<div class="a11y-item" data-id="dev-001" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Elementos interativos usam marcação semântica adequada, e não <code>&lt;div&gt;</code> genérica sem significado programático.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.13.11</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value" target="_blank">WCAG 2.2 — 4.1.2 Nome, Função, Valor</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-002" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Cabeçalhos com semântica determinada programaticamente (<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>).
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.3.1</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships" target="_blank">WCAG 2.2 — 1.3.1 Informação e Relações</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-003" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> A estrutura de cabeçalhos é lógica e consistente, representando corretamente as seções do conteúdo.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.3.5</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels" target="_blank">WCAG 2.2 — 2.4.6 Cabeçalhos e Rótulos</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-004" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Regiões como navegação, conteúdo principal e rodapé são identificadas semanticamente.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.4.1</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#bypass-blocks" target="_blank">WCAG 2.2 — 1.3.1 / 2.4.1 Ignorar Blocos</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-005" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> A ordem dos elementos no código é lógica e intuitiva, preservando significado e operabilidade.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.13.6</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#meaningful-sequence" target="_blank">WCAG 2.2 — 1.3.2 Sequência com Significado</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-006" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Atributos ARIA são usados de forma complementar, só quando o HTML semântico nativo não é suficiente.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value" target="_blank">WCAG 2.2 — 4.1.2 Nome, Função, Valor</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

## Navegação por teclado

Todo elemento interativo essencial precisa funcionar sem mouse. O foco precisa ser visível, seguir uma ordem previsível, e nunca prender a pessoa dentro de um menu ou modal sem saída ("armadilha de teclado").

<div class="a11y-item" data-id="dev-007" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Todo elemento interativo essencial é acessível por teclado.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.1.13</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#keyboard" target="_blank">WCAG 2.2 — 2.1.1 Teclado</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-008" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> O indicador de foco é visível durante a navegação por teclado.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.1.1</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible" target="_blank">WCAG 2.2 — 2.4.7 Foco Visível</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-009" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> A ordem de foco é previsível e coerente com a organização visual da interface.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.1.4</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-order" target="_blank">WCAG 2.2 — 2.4.3 Ordem do Foco</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-010" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> A interface não prende o usuário em uma armadilha de foco dentro de menus, modais ou componentes.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.1.6</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#no-keyboard-trap" target="_blank">WCAG 2.2 — 2.1.2 Sem Armadilha de Teclado</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-011" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> O indicador de foco tem contraste suficiente e não fica oculto por banners fixos ou modais.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-not-obscured-minimum" target="_blank">WCAG 2.2 — 2.4.11 Foco Não Oculto (Mínimo)</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

## Botões, links e controles

<div class="a11y-item" data-id="dev-012" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Botões são implementados com semântica de botão (<code>&lt;button&gt;</code>), não só elementos clicáveis visuais.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.8.1</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value" target="_blank">WCAG 2.2 — 4.1.2 Nome, Função, Valor</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-013" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Botões têm propósito claro, indicando de forma compreensível a ação que será realizada.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.8.3</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context" target="_blank">WCAG 2.2 — 2.4.4 Propósito do Link (Em Contexto)</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-014" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Links têm semântica de link e indicam claramente seu destino, evitando textos genéricos como "clique aqui".
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.7.1, 5.7.4</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context" target="_blank">WCAG 2.2 — 2.4.4 Propósito do Link</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-015" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Elementos com a mesma função mantêm identificação consistente ao longo da página ou do conjunto de páginas.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.8.5</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification" target="_blank">WCAG 2.2 — 3.2.4 Identificação Consistente</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-016" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> A área de clique/toque dos controles interativos tem no mínimo 24×24 pixels CSS.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum" target="_blank">WCAG 2.2 — 2.5.8 Tamanho do Alvo (Mínimo)</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="dev-017" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Funcionalidades de arrastar (drag-and-drop) oferecem uma alternativa simples de clique único ou toque.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#dragging-movements" target="_blank">WCAG 2.2 — 2.5.7 Movimentos de Arrastar</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

## Referências Bibliográficas

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225: Acessibilidade em conteúdo e aplicações web - Requisitos**. Rio de Janeiro: ABNT, 2025. Disponível em: <https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. [S.l.]: W3C, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 1.3.1: Informação e Relações. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 1.3.2: Sequência com Significado. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#meaningful-sequence>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.1.1: Teclado. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#keyboard>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.1.2: Sem Armadilha de Teclado. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#no-keyboard-trap>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.4.1: Ignorar Blocos. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#bypass-blocks>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.4.3: Ordem do Foco. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-order>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.4.4: Propósito do Link (Em Contexto). Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.4.6: Cabeçalhos e Rótulos. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.4.7: Foco Visível. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.4.11: Foco Não Oculto (Mínimo). Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-not-obscured-minimum>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.5.7: Movimentos de Arrastar. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#dragging-movements>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 2.5.8: Tamanho do Alvo (Mínimo). Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-minimum>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.2.4: Identificação Consistente. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 4.1.2: Nome, Função, Valor. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value>. Acesso em: 23 jun. 2026.