# UX e Pesquisa: O Fator Humano

A acessibilidade digital exige que o processo de Interação Humano-Computador (IHC) coloque o usuário no centro das decisões. Para tangibilizar as diretrizes técnicas e aplicar o verdadeiro Design Empático, mapeamos perfis de usuários (personas) que enfrentam barreiras permanentes, temporárias e situacionais.

## Personas e Contextos de Uso

- [ ] **Persona 1: Marcos (Deficiência Permanente - Visual)**
  - [ ] **Perfil:** 34 anos, cego, utiliza leitor de tela (NVDA) no desktop e VoiceOver no smartphone em velocidade acelerada.
  - [ ] **Objetivo:** Preencher formulários de cadastro e navegar por catálogos de produtos de forma autônoma.
  - [ ] **Barreiras comuns:** Botões genéricos desenvolvidos com `<div>` (semântica invisível para o leitor de tela) e campos de formulário sem rótulo programático associado.
 

- [ ] **Persona 2: Roberto (Limitação Situacional e Baixo Letramento Digital)**
  - [ ] **Perfil:** 58 anos, sem deficiências físicas ou cognitivas crônicas, mas possui baixa intimidade com interfaces complexas. Acessa o sistema pelo smartphone enquanto está no ônibus (ambiente instável, luz do sol forte na tela).
  - [ ] **Objetivo:** Finalizar uma compra rapidamente sem precisar pedir ajuda a terceiros.
  - [ ] **Barreiras comuns:** Textos com baixo contraste (que desaparecem sob a luz do sol), botões ou links muito próximos (causando cliques errados com o solavanco do ônibus) e mensagens de erro muito técnicas que não explicam como resolver o problema (ex: "Erro 404").


- [ ] **Persona 3: Júlia (Limitação Temporária Motora e Fadiga)**
  - [ ] **Perfil:** 28 anos. Quebrou o braço direito (dominante) e está precisando usar o computador apenas com a mão esquerda, navegando preferencialmente pelo teclado para evitar a precisão exigida pelo mouse.
  - [ ] **Objetivo:** Agendar consultas online e preencher cadastros longos.
  - [ ] **Barreiras comuns:** Interface onde o elemento selecionado pelo teclado não ganha um contorno visível (foco oculto), armadilhas que prendem a navegação dentro de um menu, e formulários que exigem digitar a mesma informação várias vezes, gerando dor e fadiga.


## Jornada do Usuário e Mapeamento de Barreiras

Abaixo, simulamos a jornada desses diferentes perfis interagindo com um sistema não acessível, e como o nosso guia soluciona essas quebras de experiência.

| Etapa da Interação | Perfil Afetado | Barreira Identificada na Interface | Solução Aplicada (Baseada no Guia) |
| :--- | :--- | :--- | :--- |
| **Descoberta** | Marcos | Leitor de tela lê informações sem ordem lógica de cabeçalhos. | Implementar semântica correta (`<h1>` a `<h6>`) para organização hierárquica. |
| **Interação** | Roberto | Clica no botão errado porque as áreas de toque são minúsculas. | Garantir target size (área de clique) mínimo de 24x24 pixels CSS. |
| **Entrada de Dados** | Júlia | O sistema pede o mesmo endereço de entrega e cobrança, forçando digitação extra. | Habilitar preenchimento automático ou reaproveitamento de dados já inseridos. |
| **Correção de Erro** | Roberto | O campo de senha fica vermelho, mas não explica o que faltou. | Fornecer mensagem de erro em texto claro e oferecer sugestão de correção. |
| **Conclusão** | Marcos | Um pop-up de "Sucesso" aparece visualmente, mas o leitor de tela fica mudo. | Configurar `ARIA live regions` para anunciar mudanças de status dinâmicas. |

