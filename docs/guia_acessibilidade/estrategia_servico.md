# Estratégia de Serviço: Canvas e Blueprint

A acessibilidade deve ser compreendida de forma sistêmica, impactando não apenas a interface visual, mas também a arquitetura de código e os processos de desenvolvimento.

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
  - [ ] Botões com contraste > 4.5:1.
  - [ ] Foco de teclado visível em elementos interativos.
  - [ ] Textos com fonte legível e espaçamento adequado.
- [ ] **Ação do Usuário:**
  - [ ] Navega utilizando a tecla `Tab`.
  - [ ] Escuta o conteúdo via leitor de tela.
  - [ ] Amplia o zoom da tela para 200%.
- [ ] **Front-stage (O que o usuário percebe):**
  - [ ] Feedback imediato de erro no formulário.
  - [ ] Ícones funcionais acompanhados de rótulos de texto visíveis.
- [ ] **Back-stage (Código / Semântica):**
  - [ ] Uso correto de tags semânticas HTML5 (`<main>`, `<nav>`, `<button>`).
  - [ ] Inserção de atributos `aria-label` e `alt` em elementos não textuais.
  - [ ] Gerenciamento de estado de foco dinâmico via JavaScript sem quebra de fluxo.
- [ ] **Processos de Suporte:**
  - [ ] Auditoria contínua de código via ferramentas de avaliação.
  - [ ] Testes periódicos com tecnologias assistivas e usuários reais.