# Guia Prático de Acessibilidade Digital e Design Empático
*IHC 2026.1 — Grupo 11*

## Bem-vindo ao Guia
Acessibilidade digital não é sobre alcançar uma nota perfeita em um validador de código — é sobre colocar a pessoa usuária no centro da experiência. Este guia foi desenhado para apoiar **todas as pessoas da equipe** (pesquisa, design, desenvolvimento, conteúdo e gestão) na construção de produtos digitais genuinamente inclusivos. 

Nossa base técnica é sólida, fundamentada na **ABNT NBR 17225:2025** e na **WCAG 2.2**, mas nosso foco principal é a **aplicação prática**. Queremos ajudar você a entender *por que* cada diretriz existe, para *quem* ela importa e *como* implementá-la da concepção à manutenção do projeto.

### Por que Empatia?
O Design Empático reconhece que as barreiras de uso não são exclusividade de um grupo pequeno, mas afetam perfis diferentes em momentos distintos da vida. Ao projetar, devemos considerar três níveis de barreiras:

*   **Permanentes:** Condições contínuas, como deficiências visuais, motoras, auditivas ou cognitivas (ex: cegueira, surdez, dislexia).
*   **Temporárias:** Limitações de curto prazo que mudam a forma como interagimos com a interface (ex: um braço imobilizado, recuperação de uma cirurgia ocular).
*   **Situacionais:** Barreiras impostas pelo ambiente no momento do uso (ex: reflexo de sol forte na tela do celular, tentar ouvir um áudio em um metrô barulhento, conexão de internet instável).

Ao resolvermos uma barreira permanente, quase sempre melhoramos a experiência para as temporárias e situacionais também.

---

## Como usar este guia no dia a dia

Este material foi feito para ser usado como uma ferramenta de consulta ativa, estruturada em pilares práticos:

*   **Pesquisa e UX:** Mapeamento de personas, jornadas e barreiras reais.
*   **Estratégia e Serviço:** A conexão entre as necessidades do usuário, a interface e o código.
*   **Design e UI:** Contraste, uso de cores, tipografia e responsividade.
*   **Desenvolvimento Web:** Estrutura semântica HTML, operabilidade por teclado e atributos ARIA.
*   **Conteúdo e Formulários:** Clareza textual, prevenção de erros e alternativas para mídias.

Em cada um desses temas, você encontrará critérios interativos divididos da seguinte forma:
1. **O Critério:** Uma declaração direta e clara da regra técnica ou prática que precisa ser atendida.
2. **A Ação:** Botões interativos para marcar o status daquele item no seu projeto.
3. **A Base Legal:** Referências diretas à NBR e à WCAG para justificar decisões técnicas.

### Avaliando a Conformidade
Um critério nunca deve ser forçado a "passar" ou "falhar" se ele simplesmente não existe no contexto do seu produto. Por isso, toda avaliação neste guia utiliza três estados:

| Estado | O que significa na prática |
| :--- | :--- |
| ✅ **Conforme** | A diretriz foi implementada no produto, validada pela equipe e testada (idealmente com usuários). |
| ❌ **Não conforme** | A diretriz é necessária para o produto, mas ainda não foi implementada ou falhou nos testes. |
| ➖ **Não aplicável (N/A)** | O recurso não existe na sua interface. (Exemplo: exigir legendas em um site que possui apenas textos e imagens). |

> **Regra importante:** todo item marcado como N/A precisa de uma justificativa escrita na coluna correspondente. N/A sem justificativa não deve ser aceito em revisão — é a forma mais comum de uma não conformidade real se disfarçar de "não se aplica".

### Painel de conformidade

Alguns temas abrem com um painel visual mostrando o progresso por nível WCAG (A, AA, AAA) assim quem está navegando o guia enxerga o status sem precisar contar checkboxes manualmente. O cálculo é simples:

```
% do nível = (itens "Conforme" do nível) / (itens "Conforme" + "Não conforme" do nível)
```

Itens **N/A não entram no denominador** senão eles inflam artificialmente a porcentagem de conformidade.

> **O que esse painel é (e o que ele não é):** a WCAG não define porcentagem nenhuma, conformidade lá é binária (a página atende ao nível completo ou não atende) e é avaliada por página real do produto, não por tema deste guia. Os anéis aqui são uma ferramenta de **acompanhamento da sua auditoria**, não uma reivindicação formal de conformidade WCAG. Use-os para enxergar progresso, não como selo de aprovação.
>
> **Sobre o Nível AAA:** o próprio W3C recomenda *não* tratar o Nível AAA como meta obrigatória para o site inteiro, porque nem todo tipo de conteúdo consegue satisfazer todos os critérios AAA. Na prática, **o Nível AA é o alvo realista** — é o que a maioria das organizações busca e o que costuma ser referenciado legalmente. Trate o painel de AAA como aspiracional: bom de perseguir onde for viável, não um requisito para considerar o trabalho "completo".

### Lembrete sobre conformidade WCAG

A conformidade **não é uma média**. Para declarar conformidade com o nível AA, por exemplo, todos os critérios aplicáveis do nível A *e* do nível AA precisam estar marcados como conforme, não basta ter uma porcentagem alta no geral.

Este guia é organizado em pilares práticos, pensados para consulta durante o desenvolvimento e a avaliação de interfaces:

## Visão Geral do Guia

- **Pesquisa e UX** — mapeamento de personas, jornadas e barreiras reais.
- **Estratégia e Serviço** — como a interface se conecta ao código.
- **Gestão de Projetos** — planejamento, responsabilidades e melhoria contínua.
- **Desenvolvimento Web** — estrutura semântica, teclado, controles.
- **Design e UI** — contraste, cores, responsividade.
- **Formulários** — entrada de dados, feedback, prevenção de erros.
- **Conteúdo** — imagens, clareza textual, multimídia, animações.

Base técnica: **ABNT NBR 17225:2025** e **WCAG 2.2**.