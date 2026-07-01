# Estratégia de Serviço: Canvas e Blueprint

A acessibilidade deve ser compreendida de forma sistêmica, impactando não apenas a interface visual, mas também a arquitetura de código e os processos de desenvolvimento.

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

## Accessibility Canvas

| Categoria | Descrição |
| :--- | :--- |
| **Problema** | Interfaces web frequentemente criam barreiras de navegação e operabilidade para usuários com deficiências ou limitações temporárias/situacionais. |
| **Solução** | Implementação de um guia de diretrizes técnicas baseado na NBR 17225:2025 e WCAG 2.2 para atuar como checklist de desenvolvimento e avaliação. |
| **Público-Alvo** | Pessoas com deficiência visual, motora, auditiva ou cognitiva, além de usuários em cenários de uso restritivos. |
| **Métricas de Sucesso** | Taxa de aprovação em validadores automatizados (Lighthouse/Axe); tempo de tarefa concluída em testes de usabilidade; redução do número de erros heurísticos. |

## Service Blueprint de Acessibilidade

O Service Blueprint mapeia como a interface (front-stage) se conecta com a estrutura de código (back-stage) para entregar uma experiência acessível.

- [ ] **Evidência Física (Interface):**

<div class="a11y-item" data-id="estrategia-001" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Botões com contraste > 4.5:1.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-002" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Foco de teclado visível em elementos interativos.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-003" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Textos com fonte legível e espaçamento adequado.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

- [ ] **Ação do Usuário:**

<div class="a11y-item" data-id="estrategia-004" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Navega utilizando a tecla <code>Tab</code>.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-005" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Escuta o conteúdo via leitor de tela.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-006" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Amplia o zoom da tela para 200%.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

- [ ] **Front-stage (O que o usuário percebe):**

<div class="a11y-item" data-id="estrategia-007" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> Feedback imediato de erro no formulário.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-008" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Ícones funcionais acompanhados de rótulos de texto visíveis.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

- [ ] **Back-stage (Código / Semântica):**

<div class="a11y-item" data-id="estrategia-009" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Uso correto de tags semânticas HTML5 (<code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;button&gt;</code>).
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-010" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Inserção de atributos <code>aria-label</code> e <code>alt</code> em elementos não textuais.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-011" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Gerenciamento de estado de foco dinâmico via JavaScript sem quebra de fluxo.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

- [ ] **Processos de Suporte:**

<div class="a11y-item" data-id="estrategia-012" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Auditoria contínua de código via ferramentas de avaliação.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


<div class="a11y-item" data-id="estrategia-013" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> Testes periódicos com tecnologias assistivas e usuários reais.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>


---

## Referências Bibliográficas

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/>. Acesso em: 1 jul. 2026.
