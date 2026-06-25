# ASES

O ASES (Avaliador e Simulador de Acessibilidade em Sítios) é uma ferramenta gratuita desenvolvida pelo SERPRO em parceria com o governo federal brasileiro. Diferente de ferramentas baseadas apenas nas diretrizes WCAG, o ASES avalia a conformidade com o **e-MAG** (Modelo de Acessibilidade em Governo Eletrônico), padrão obrigatório para sites governamentais brasileiros. A ferramenta identifica erros críticos e avisos de melhoria organizados por categoria.

## Como Usar

1. Acessar o site [ases.estaleiro.serpro.gov.br](https://ases.estaleiro.serpro.gov.br/).
2. Inserir a URL do site Tela Brasil (`https://telabrasil.cultura.gov.br/`).
3. Clicar em **Avaliar**.
4. Aguardar a geração do relatório.
5. Analisar os erros críticos e avisos por categoria e-MAG.
6. Exportar o relatório em PDF para documentação.

## Resultado obtido

A ferramenta ASES foi executada sobre a página principal do site Tela Brasil em 25/06/2026, obtendo a pontuação de **82.87%**.

| Categoria e-MAG | Erros Críticos | Avisos |
|---|---|---|
| Marcação | 3 | 21 |
| Comportamento | 1 | 14 |
| Conteúdo / Informação | 0 | 0 |
| Apresentação / Design | 1 | 0 |
| Multimídia | 0 | 0 |
| Formulários | 0 | 0 |
| **Total** | **5** | **35** |

## Pontos Positivos

* **Conteúdo e informação sem problemas:** A categoria Conteúdo / Informação não apresentou erros nem avisos, indicando que os textos e informações da página estão adequadamente estruturados para tecnologias assistivas.
* **Multimídia acessível:** Nenhum problema foi identificado na categoria Multimídia, sugerindo que os elementos de vídeo e áudio presentes no site possuem alternativas adequadas.
* **Formulários corretos:** A categoria Formulários não registrou erros ou avisos, indicando que os campos de entrada estão rotulados e organizados corretamente.
* **Pontuação geral elevada:** A pontuação de 82.87% indica que a maior parte das recomendações e-MAG é atendida, com problemas concentrados em categorias específicas e tratáveis.

## Problemas encontrados

Durante a avaliação com o ASES, foram identificados os seguintes erros críticos e avisos de melhoria:

### Marcação (3 erros críticos, 21 avisos)

* **Níveis de cabeçalho incorretos (e-MAG 1.3):** A hierarquia de cabeçalhos da página não está sendo utilizada corretamente, o que prejudica a navegação por leitores de tela e a compreensão da estrutura do conteúdo.
* **Ausência de âncoras para blocos de conteúdo (e-MAG 1.5):** A página não fornece links de salto (skip links) que permitam ao usuário ir diretamente ao conteúdo principal, obrigando usuários de teclado e leitores de tela a percorrer toda a navegação a cada acesso.
* **14 violações aos Padrões Web (e-MAG 1.1):** Foram encontrados 14 elementos que não respeitam os padrões de marcação HTML, comprometendo a interoperabilidade e a interpretação correta por tecnologias assistivas.
* **3 problemas de organização semântica (e-MAG 1.2):** Partes do código HTML não estão organizadas de forma lógica e semântica, dificultando a compreensão da estrutura pelo navegador e por tecnologias assistivas.
* **4 áreas de informação não divididas (e-MAG 1.8):** Blocos de conteúdo não estão devidamente separados, o que impede a navegação eficiente entre seções distintas da página.

### Comportamento (1 erro crítico, 14 avisos)

* **Objetos programáveis inacessíveis (e-MAG 2.2):** Foram identificados elementos interativos (como scripts e componentes dinâmicos) que não são acessíveis por teclado ou tecnologias assistivas, tanto em nível crítico quanto como avisos de melhoria, totalizando 15 ocorrências nessa recomendação.

### Apresentação / Design (1 erro crítico)

* **Foco visualmente não evidente (e-MAG 4.4):** O indicador de foco do teclado não está claramente visível em pelo menos um elemento interativo da página, o que impede usuários que navegam por teclado de identificar onde estão posicionados na interface.

## Acessar o site

> Tela Brasil:
[https://telabrasil.cultura.gov.br/](https://telabrasil.cultura.gov.br/)
