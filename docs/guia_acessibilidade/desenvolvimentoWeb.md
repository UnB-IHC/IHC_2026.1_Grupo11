### Estrutura Semântica

- [ ] Elementos da interface devem usar marcação semântica adequada, evitando substituir botões, links e regiões por `<div>` genéricas sem significado programático. [NBR 5.13.11] [WCAG 2.2 - 4.1.2 Nome, Função, Valor]

- [ ] Todos os cabeçalhos devem possuir semântica determinada programaticamente, permitindo que tecnologias assistivas compreendam a hierarquia da página. [NBR 5.3.1] [WCAG 2.2 - 1.3.1 Informação e Relações]

- [ ] A estrutura de cabeçalhos deve ser lógica e consistente, seguindo uma organização que represente corretamente as seções do conteúdo. [NBR 5.3.5] [WCAG 2.2 - 2.4.6 Cabeçalhos e Rótulos]

- [ ] Regiões como navegação, conteúdo principal e rodapé devem ser identificadas semanticamente para facilitar a compreensão da interface. [NBR 5.4.1] [WCAG 2.2 - 1.3.1 Informação e Relações, 2.4.1 Ignorar Blocos]

- [ ] A ordem dos elementos conforme aparece no código deve ser lógica e intuitiva, preservando o significado e a operabilidade da interface. [NBR 5.13.6] [WCAG 2.2 - 1.3.2 Sequência com Significado]

- [ ] Atributos ARIA (Accessible Rich Internet Applications) devem ser utilizados de forma complementar e apenas quando o HTML semântico nativo não for suficiente para descrever a função ou o estado dinâmico de um elemento. [WCAG 2.2 - 4.1.2 Nome, Função, Valor]

---

### Navegação por Teclado

- [ ] Todo elemento interativo essencial deve ser acessível por teclado, garantindo uso por pessoas que não utilizam mouse. [NBR 5.1.13] [WCAG 2.2 - 2.1.1 Teclado]

- [ ] O indicador de foco deve ser visível, permitindo que o usuário saiba qual elemento está selecionado durante a navegação. [NBR 5.1.1] [WCAG 2.2 - 2.4.7 Foco Visível]

- [ ] A ordem de foco deve ser previsível e seguir uma sequência coerente com a organização visual da interface. [NBR 5.1.4] [WCAG 2.2 - 2.4.3 Ordem do Foco]

- [ ] A interface não deve prender o usuário em uma armadilha de foco, impedindo que ele saia de menus, modais ou componentes interativos pelo teclado. [NBR 5.1.6] [WCAG 2.2 - 2.1.2 Sem Armadilha de Teclado]

- [ ] O indicador de foco deve possuir área de contraste suficiente para ser notado e não pode ser completamente ocultado por conteúdos sobrepostos, como banners fixos ou modais na tela. [WCAG 2.2 - 2.4.11 Foco Não Oculto (Mínimo)] e [WCAG 2.2 - 2.4.13 Aparência do Foco]

---

### Botões, Links e Controles

- [ ] Botões devem possuir semântica de botão, sendo implementados com elementos adequados, como `<button>`, e não apenas com elementos visuais clicáveis. [NBR 5.8.1] [WCAG 2.2 - 4.1.2 Nome, Função, Valor]

- [ ] Botões devem ter propósito claro, indicando de forma compreensível a ação que será realizada. [NBR 5.8.3] [WCAG 2.2 - 2.4.4 Propósito do Link (Em Contexto)]

- [ ] Links devem possuir semântica de link e indicar claramente seu destino ou função. [NBR 5.7.1] [WCAG 2.2 - 2.4.4 Propósito do Link (Em Contexto)]

- [ ] O propósito de um link deve ser compreensível pelo texto ou pelo contexto em que ele aparece, evitando textos genéricos como “clique aqui”. [NBR 5.7.4] [WCAG 2.2 - 2.4.4 Propósito do Link (Em Contexto)]

- [ ] Elementos com a mesma função devem manter identificação consistente ao longo da página ou do conjunto de páginas. [NBR 5.8.5] [WCAG 2.2 - 3.2.4 Identificação Consistente]

- [ ] A área de clique e toque (target size) dos controles interativos deve ter dimensões mínimas de 24x24 pixels CSS, garantindo que usuários com mobilidade reduzida ou tremores não ativem elementos vizinhos por engano. [WCAG 2.2 - 2.5.8 Tamanho do Alvo (Mínimo)]

- [ ] Qualquer funcionalidade que exija movimento de arrastar (drag-and-drop) deve oferecer uma alternativa simples de clique único ou toque para ser executada, beneficiando usuários com limitações motoras. [WCAG 2.2 - 2.5.7 Movimentos de Arrastar]

---

### Referências Bibliográficas

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **ABNT NBR 17225: Acessibilidade em conteúdo e aplicações web - Requisitos**. Rio de Janeiro: ABNT, 2025. Disponível em: <https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf>. Acesso em: 16 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Web Content Accessibility Guidelines (WCAG) 2.2**. [S.l.]: W3C, 2023. Disponível em: <https://www.w3.org/TR/WCAG22/>. Acesso em: 17 jun. 2026.

WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2**. Tradução autorizada. [S.l.]: W3C Brasil, 2023. Disponível em: <https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/>. Acesso em: 17 jun. 2026.
