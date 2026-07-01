# Guia Prático de Acessibilidade Digital e Design Empático

*IHC 2026.1 — Grupo 11*

## Como usar este guia

Este guia reúne diretrizes práticas de acessibilidade digital e design empático para apoiar **qualquer pessoa da equipe** — pesquisa, design, desenvolvimento, conteúdo ou gestão — na construção de produtos digitais mais inclusivos, com base na ABNT NBR 17225:2025 e na WCAG 2.2.

Mais do que normas isoladas, a ideia é ajudar a entender *por que* cada prática existe e *como* aplicá-la no dia a dia do projeto, da concepção à manutenção.

Cada tema técnico do menu segue a mesma estrutura:

1. **Explicação em linguagem simples** — o que é a prática e por que ela importa, com exemplo de barreira real.
2. **Tabela de conformidade** — para quem está auditando ou revisando, com três estados possíveis (não dois).
3. **Referência normativa** — ABNT NBR 17225:2025 e WCAG 2.2, para quem precisa justificar a decisão tecnicamente.

### Os três estados de conformidade

Um critério nunca deveria ser forçado a "passar" ou "falhar" se ele simplesmente não existe no seu produto. Por isso, toda tabela deste guia usa três estados:

| Estado | Quando usar |
|---|---|
| ✅ **Conforme** | O critério foi implementado e verificado. |
| ❌ **Não conforme** | O critério se aplica, mas ainda não foi implementado ou falhou na verificação. |
| ➖ **Não aplicável (N/A)** | O critério não existe no contexto do produto (ex.: "legendas ao vivo" num site sem transmissão ao vivo). |

> **Regra importante:** todo item marcado como N/A precisa de uma justificativa escrita na coluna correspondente. N/A sem justificativa não deve ser aceito em revisão — é a forma mais comum de uma não conformidade real se disfarçar de "não se aplica".

### Painel de conformidade

Alguns temas abrem com um painel visual mostrando o progresso por nível WCAG (A, AA, AAA) — assim quem está navegando o guia enxerga o status sem precisar contar checkboxes manualmente. O cálculo é simples:

```
% do nível = (itens "Conforme" do nível) / (itens "Conforme" + "Não conforme" do nível)
```

Itens **N/A não entram no denominador** — senão eles inflam artificialmente a porcentagem de conformidade.

> **O que esse painel é (e o que ele não é):** a WCAG não define porcentagem nenhuma — conformidade lá é binária (a página atende ao nível completo ou não atende) e é avaliada por página real do produto, não por tema deste guia. Os anéis aqui são uma ferramenta de **acompanhamento da sua auditoria**, não uma reivindicação formal de conformidade WCAG. Use-os para enxergar progresso, não como selo de aprovação.
>
> **Sobre o Nível AAA:** o próprio W3C recomenda *não* tratar o Nível AAA como meta obrigatória para o site inteiro, porque nem todo tipo de conteúdo consegue satisfazer todos os critérios AAA. Na prática, **o Nível AA é o alvo realista** — é o que a maioria das organizações busca e o que costuma ser referenciado legalmente. Trate o painel de AAA como aspiracional: bom de perseguir onde for viável, não um requisito para considerar o trabalho "completo".

A página **Desenvolvimento Web** já traz o painel funcionando de verdade — com checkboxes clicáveis que salvam o estado no seu navegador e recalculam os anéis sozinhos. As demais páginas ainda usam a tabela estática; dá pra convertê-las pro mesmo padrão depois, seguindo aquele modelo.

### Lembrete sobre conformidade WCAG

A conformidade **não é uma média**. Para declarar conformidade com o nível AA, por exemplo, todos os critérios aplicáveis do nível A *e* do nível AA precisam estar marcados como conforme — não basta ter uma porcentagem alta no geral.

## Introdução

Acessibilidade digital não é sobre conformidade de código — é sobre colocar a pessoa usuária no centro da experiência. As barreiras de uso afetam perfis diferentes em momentos diferentes:

- **Permanentes** — deficiências visuais, motoras, auditivas ou cognitivas (cegueira, daltonismo, surdez, dislexia).
- **Temporárias** — limitações de curto prazo (um braço imobilizado, recuperação de cirurgia ocular).
- **Situacionais** — limitações impostas pelo ambiente (sol forte na tela, ambiente barulhento, internet lenta).

Este guia é organizado em pilares práticos, pensados para consulta durante o desenvolvimento e a avaliação de interfaces:

- **Pesquisa e UX** — mapeamento de personas, jornadas e barreiras reais.
- **Estratégia e Serviço** — como a interface se conecta ao código.
- **Gestão de Projetos** — planejamento, responsabilidades e melhoria contínua.
- **Desenvolvimento Web** — estrutura semântica, teclado, controles.
- **Design e UI** — contraste, cores, responsividade.
- **Formulários** — entrada de dados, feedback, prevenção de erros.
- **Conteúdo** — imagens, clareza textual, multimídia, animações.

Base técnica: **ABNT NBR 17225:2025** e **WCAG 2.2**.