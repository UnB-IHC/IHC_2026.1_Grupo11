# UX e Pesquisa: O Fator Humano

A acessibilidade digital exige que o processo de Interação Humano-Computador (IHC) coloque o usuário no centro das decisões. Para tangibilizar as diretrizes técnicas e aplicar o verdadeiro Design Empático, mapeamos perfis de usuários (personas) que enfrentam barreiras permanentes, temporárias e situacionais.

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

## Personas e Contextos de Uso

- **Persona 1: Marcos (Deficiência Permanente - Visual)**
  - **Perfil:** 34 anos, cego, utiliza leitor de tela (NVDA) no desktop e VoiceOver no smartphone em velocidade acelerada.
  - **Objetivo:** Preencher formulários de cadastro e navegar por catálogos de produtos de forma autônoma.
  - **Barreiras comuns:** Botões genéricos desenvolvidos com `<div>` (semântica invisível para o leitor de tela) e campos de formulário sem rótulo programático associado.
 

- **Persona 2: Roberto (Limitação Situacional e Baixo Letramento Digital)**
  - **Perfil:** 58 anos, sem deficiências físicas ou cognitivas crônicas, mas possui baixa intimidade com interfaces complexas. Acessa o sistema pelo smartphone enquanto está no ônibus (ambiente instável, luz do sol forte na tela).
  - **Objetivo:** Finalizar uma compra rapidamente sem precisar pedir ajuda a terceiros.
  - **Barreiras comuns:** Textos com baixo contraste (que desaparecem sob a luz do sol), botões ou links muito próximos (causando cliques errados com o solavanco do ônibus) e mensagens de erro muito técnicas que não explicam como resolver o problema (ex: "Erro 404").


- **Persona 3: Júlia (Limitação Temporária Motora e Fadiga)**
  - **Perfil:** 28 anos. Quebrou o braço direito (dominante) e está precisando usar o computador apenas com a mão esquerda, navegando preferencialmente pelo teclado para evitar a precisão exigida pelo mouse.
  - **Objetivo:** Agendar consultas online e preencher cadastros longos.
  - **Barreiras comuns:** Interface onde o elemento selecionado pelo teclado não ganha um contorno visível (foco oculto), armadilhas que prendem a navegação dentro de um menu, e formulários que exigem digitar a mesma informação várias vezes, gerando dor e fadiga.


## Jornada do Usuário e Mapeamento de Barreiras

Abaixo, simulamos a jornada desses diferentes perfis interagindo com um sistema não acessível, e como o nosso guia soluciona essas quebras de experiência.

<div class="a11y-item" data-id="ux-001" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> <strong>Descoberta</strong> — Marcos: Leitor de tela lê informações sem ordem lógica de cabeçalhos. Implementar semântica correta (<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>) para organização hierárquica.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2 — 1.3.1 Informações e Relações</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="ux-002" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> <strong>Interação</strong> — Roberto: Clica no botão errado porque as áreas de toque são minúsculas. Garantir target size (área de clique) mínimo de 24x24 pixels CSS.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2 — 2.5.8 Tamanho do Alvo (Mínimo)</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="ux-003" data-level="A">
  <p class="a11y-text"><strong>[A]</strong> <strong>Entrada de Dados</strong> — Júlia: O sistema pede o mesmo endereço de entrega e cobrança, forçando digitação extra. Habilitar preenchimento automático ou reaproveitamento de dados já inseridos.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2 — 3.3.7 Entrada Redundante</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="ux-004" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> <strong>Correção de Erro</strong> — Roberto: O campo de senha fica vermelho, mas não explica o que faltou. Fornecer mensagem de erro em texto claro e oferecer sugestão de correção.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2 — 3.3.3 Sugestão de Erro</a></span></p>
  <div class="a11y-states" role="group" aria-label="Estado de conformidade deste critério">
    <button type="button" class="a11y-btn" data-state="conforme">Conforme</button>
    <button type="button" class="a11y-btn" data-state="nao-conforme">Não conforme</button>
    <button type="button" class="a11y-btn" data-state="na">Não aplicável</button>
  </div>
  <textarea class="a11y-justificativa" hidden placeholder="Por que este critério não se aplica ao seu produto?"></textarea>
</div>

<div class="a11y-item" data-id="ux-005" data-level="AA">
  <p class="a11y-text"><strong>[AA]</strong> <strong>Conclusão</strong> — Marcos: Um pop-up de "Sucesso" aparece visualmente, mas o leitor de tela fica mudo. Configurar <code>ARIA live regions</code> para anunciar mudanças de status dinâmicas.
  <span class="a11y-ref"><a href="https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/" target="_blank">WCAG 2.2 — 4.1.3 Mensagens de Estado</a></span></p>
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
