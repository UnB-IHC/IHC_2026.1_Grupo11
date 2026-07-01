# Formulários, Entrada de Dados e Prevenção de Erros

Preencher formulários costuma ser a parte mais crítica e suscetível a erros na jornada de qualquer usuário. Para pessoas com deficiência visual, cognitiva ou motora, um formulário mal construído pode ser um bloqueio definitivo. O objetivo desta seção é garantir que a entrada de dados seja guiada, previsível e fácil de corrigir.

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

## Formulários e Entrada de Dados

O usuário nunca deve precisar adivinhar o que digitar em um campo. Rótulos permanentes, identificação clara de campos obrigatórios e instruções antes de o erro acontecer são requisitos básicos para uma experiência acessível.

<div class="a11y-item" data-id="form-001" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Campos de formulário devem possuir rótulos visíveis e compreensíveis, indicando claramente a informação esperada.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.1</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.2%20R%C3%B3tulos%20ou%20Instru%C3%A7%C3%B5es" target="_blank">WCAG 2.2 — 3.3.2 Rótulos ou Instruções</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-002" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Os rótulos devem estar programaticamente associados aos seus respectivos campos, permitindo identificação por leitores de tela.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.3</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%201.3.1%20Informa%C3%A7%C3%B5es%20e%20Rela%C3%A7%C3%B5es" target="_blank">WCAG 2.2 — 1.3.1 Informação e Relações / 4.1.2 Nome, Função, Valor</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-003" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Campos obrigatórios devem ser claramente identificados, sem depender somente de cor ou símbolo sem explicação.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.7</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.2%20R%C3%B3tulos%20ou%20Instru%C3%A7%C3%B5es" target="_blank">WCAG 2.2 — 3.3.2 Rótulos ou Instruções</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-004" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> O tipo de dado esperado deve ser determinado quando aplicável, como e-mail, telefone, data ou número.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.8</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%201.3.5%20Identificar%20o%20Prop%C3%B3sito%20de%20Entrada" target="_blank">WCAG 2.2 — 1.3.5 Identificar o Propósito da Entrada de Dados</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-005" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Mensagens de erro devem ser descritivas, indicando o problema ocorrido de forma objetiva.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.9</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.1%20Identifica%C3%A7%C3%A3o%20do%20Erro" target="_blank">WCAG 2.2 — 3.3.1 Identificação de Erro</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-006" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Quando possível, a interface deve apresentar sugestão de correção para o erro identificado, como “Digite um e-mail válido”.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.10</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.3%20Sugest%C3%A3o%20de%20Erro" target="_blank">WCAG 2.2 — 3.3.3 Sugestão de Erro</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-007" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Em formulários críticos, devem existir mecanismos de prevenção de erro, como confirmação, revisão ou possibilidade de correção antes do envio final.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.9.12</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.4%20Preven%C3%A7%C3%A3o%20de%20erros%20(legais%2C%20financeiros%2C%20de%20dados)" target="_blank">WCAG 2.2 — 3.3.4 Prevenção de Erros</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-008" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Se o usuário já tiver inserido uma informação em um passo anterior do processo (como endereço de entrega), o sistema deve preencher os próximos campos redundantes automaticamente ou oferecer uma forma fácil de resgatar esse dado, reduzindo a fadiga cognitiva e o esforço de digitação.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.7%20Entrada%20Redundante" target="_blank">WCAG 2.2 — 3.3.7 Entrada de Dados Redundante</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

## Feedback, Previsibilidade e Recuperação de Erros

Ações do usuário precisam de respostas do sistema. Se algo foi salvo, deu erro ou carregou, isso precisa ser avisado visualmente e programaticamente (para leitores de tela), sem tirar o foco do usuário do que ele estava fazendo.

<div class="a11y-item" data-id="form-009" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> A interface deve fornecer feedback claro sobre ações realizadas pelo usuário, como envio, carregamento, sucesso ou erro.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.13.8</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#status-messages" target="_blank">WCAG 2.2 — 4.1.3 Mensagens de Status</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-010" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Mudanças de contexto ao receber foco devem ser previsíveis, evitando que a interface mude de tela ou execute ações inesperadas apenas porque um elemento recebeu foco.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.8.9</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-focus" target="_blank">WCAG 2.2 — 3.2.1 Ao Receber Foco</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-011" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Mudanças de contexto após entrada de dados devem ser previsíveis e compreensíveis para o usuário.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.8.10</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-input" target="_blank">WCAG 2.2 — 3.2.2 Na Entrada de Dados</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="form-012" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Componentes customizados devem possuir semântica, estados, propriedades e valores acessíveis, garantindo que tecnologias assistivas compreendam seu funcionamento.
  <span class="a11y-ref"><a href="https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf" target="_blank">NBR 5.13.12 / NBR 5.13.13</a> · <a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value" target="_blank">WCAG 2.2 — 4.1.2 Nome, Função, Valor</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

---

## Referências Bibliográficas

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225: Acessibilidade em conteúdo e aplicações web - Requisitos**. Rio de Janeiro: ABNT, 2025. Disponível em: <https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. [S.l.]: W3C, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 1.3.1: Informações e Relações. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%201.3.1%20Informa%C3%A7%C3%B5es%20e%20Rela%C3%A7%C3%B5es>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 1.3.5: Identificar o Propósito da Entrada de Dados. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%201.3.5%20Identificar%20o%20Prop%C3%B3sito%20de%20Entrada>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.2.1: Ao Receber Foco. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-focus>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.2.2: Na Entrada de Dados. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-input>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.3.1: Identificação do Erro. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.1%20Identifica%C3%A7%C3%A3o%20do%20Erro>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.3.2: Rótulos ou Instruções. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.2%20R%C3%B3tulos%20ou%20Instru%C3%A7%C3%B5es>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.3.3: Sugestão de Erro. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.3%20Sugest%C3%A3o%20de%20Erro>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.3.4: Prevenção de Erros (Jurídicos, Financeiros, de Dados). Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.4%20Preven%C3%A7%C3%A3o%20de%20erros%20(legais%2C%20financeiros%2C%20de%20dados)>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 3.3.7: Entrada Redundante. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation:~:text=Crit%C3%A9rio%20de%20Sucesso%203.3.7%20Entrada%20Redundante>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 4.1.2: Nome, Função, Valor. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value>. Acesso em: 23 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Seção 4.1.3: Mensagens de Status. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#status-messages>. Acesso em: 23 jun. 2026.