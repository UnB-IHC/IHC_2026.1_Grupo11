Esta seção apresenta diretrizes para projetar interfaces digitais acessíveis, considerando aspectos visuais fundamentais. Ela é destinada a **designers de UI/UX, designers de produto e designers visuais**, responsáveis por conceber soluções que sejam visualmente claras, intuitivas e confortáveis para diferentes perfis de usuários

Esta seção do guia foi construida com base no capítulo 7 "Design" do <a href="#GuiaUK">Guia de Boas Práticas para Acessibilidade Digital (UK + Brasil)</a> e com base na <a href="#WCAG">Web Content Accessibility Guidelines (WCAG) 2.2</a> e na <a href="#NBR"> ABNT-NBR-17225-Acessibilidade-Digital</a> 

## Gráficos
<div class="progress-sidebar" style="display: flex; flex-direction: row;">
    <div style="text-align: center;">
        <h3>Nível A</h3>
        <canvas id="graficoAdev" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div style="text-align: center;">
        <h3>Nível AA</h3>
        <canvas id="graficoAAdev" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
    <div style="text-align: center;">
        <h3>Nível AAA</h3>
        <canvas id="graficoAAAdev" width="200" height="200" style="width: 200px; height: 200px;"></canvas>
    </div>
</div>

## 1. Cores e Contraste
<!-- CORES E CONTRASTE -->
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Utiliza instruções claras e específicas para que qualquer usuário consiga entender, independentemente de cor ou posição dos elementos na página (A).
  <a href="#NBR">[NBR 5.11.1]</a> <a href="#1">[WCAG 1.4.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  A apresentação visual de texto e imagens de texto tem uma relação de contraste de, no mínimo, 4.5:1 (AA).
  <a href="#2">[WCAG 1.4.3]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todos os componentes de interface e objetos gráficos têm relação de contraste de pelo menos 3:1 com o fundo e entre seus estados ou quando estiverem inativos (AA).
  <a href="#3">[WCAG 1.4.11]</a>
</label>

## 2. Conteúdo Textual
<!-- CONTEÚDO TEXTUAL -->
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todos os trechos de texto de ênfase, citação, abreviação ou outro tipo de texto especial possuem semântica determinada programaticamente (A).
  <a href="#NBR">[NBR 5.12.8]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todos os blocos de texto têm espaçamento entre as linhas de pelo menos 1,5 vez o tamanho da fonte e entre os parágrafos de 2 vezes o tamanho da fonte (AA).
  <a href="#NBR">[NBR 5.1.12]</a> <a href="#NBR">[NBR 5.12.2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todos os blocos de texto têm espaçamento entre letras de pelo menos 0,12 vezes o tamanho da fonte e entre palavras de pelo menos 0,16 vezes o tamanho da fonte (AA).
  <a href="#NBR">[NBR 5.12.3]</a> <a href="#NBR">[NBR 5.12.4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Não há perda de conteúdo ou funcionalidade quando o texto é redimensionado em até 200% sem o uso de tecnologia assistiva (AA).
  <a href="#4">[WCAG 1.4.4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
  Todos os blocos de texto estão alinhados à esquerda ou à direita dependendo do idioma e sentido de leitura (AAA).
  <a href="#NBR">[NBR 5.12.5]</a>
</label>

## 3. Animação
<!-- ANIMAÇÃO -->
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Não há animação que inicie automaticamente, dure mais que 5s e seja apresentada em paralelo com outro conteúdo; se houver, pode ser pausada ou ocultada (A).
  <a href="#NBR">[NBR 5.15.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todo conteúdo que pisca está abaixo dos limites de flash geral e flash vermelho (A).
  <a href="#NBR">[NBR 5.15.4]</a> <a href="#5">[WCAG 2.3.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
  A animação de movimento acionada por interação pode ser desativada (AAA).
  <a href="#NBR">[NBR 5.15.3]</a> <a href="#6">[WCAG 2.3.3]</a>
</label>

## 4. Conteúdo Visual e Audidtivo
<!-- CONTEÚDO VISUAL E AUDITIVO -->
<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todo o conteúdo não textual exibido ao usuário tem uma alternativa textual equivalente (A).
  <a href="#7">[WCAG 1.1.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  É criada uma alternativa de legenda para áudio pré-gravado (A).
  <a href="#NBR">[NBR 5.14.1]</a> <a href="#8">[WCAG 1.2.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todo vídeo com áudio pré-gravado tem legenda descritiva disponível (A).
  <a href="#NBR">[NBR 5.14.2]</a> <a href="#9">[WCAG 1.2.2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todo conteúdo em áudio ou áudio e vídeo ao vivo tem legendas disponíveis (AA).
  <a href="#NBR">[NBR 5.14.9]</a> <a href="#10">[WCAG 1.2.4]</a>
</label>


## Referências Bibliograficas

<!-- CORES E CONTRASTE -->

> <a id="1" href="">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.4.1 Uso de Cor (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#use-of-color). Acesso em: 10 nov. 2025.

> <a id="2" href="">2.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.4.3 Contraste (Mínimo) (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#contrast-minimum](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#contrast-minimum). Acesso em: 10 nov. 2025.

> <a id="3" href="">3.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.4.11 Contraste de Não-Texto (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-contrast](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-contrast). Acesso em: 10 nov. 2025.

<!-- CONTEÚDO TEXTUAL -->

> <a id="4" href="">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.4.4 Redimensionar Texto (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#resize-text](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#resize-text). Acesso em: 10 nov. 2025.

<!-- ANIMAÇÃO-->

> <a id="5" href="">5.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.3.1 Três Intermitências ou Limite Inferior (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#three-flashes-or-below-threshold](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#three-flashes-or-below-threshold). Acesso em: 10 nov. 2025.

> <a id="6" href="">6.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.3.3 Animação por Interações (Nível AAA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#animation-from-interactions](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#animation-from-interactions). Acesso em: 10 nov. 2025.

<!-- CONTEÚDO VISUAL E AUDITIVO-->

> <a id="7" href="">7.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.1.1 Conteúdo Não Textual (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-content](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#non-text-content). Acesso em: 10 nov. 2025.

> <a id="8" href="">8.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.2.1 Apenas Áudio e Apenas Vídeo (Pré-gravado) (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-only-and-video-only-prerecorded](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-only-and-video-only-prerecorded). Acesso em: 10 nov. 2025.

> <a id="9" href="">9.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.2.2 Legendas (Pré-gravadas) (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#captions-prerecorded](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#captions-prerecorded). Acesso em: 10 nov. 2025.

> <a id="10" href="">10.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.2.4 Legendas (Ao Vivo) (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#captions-live](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#captions-live). Acesso em: 10 nov. 2025.

<!-- Outras referências-->
> <a id="WCAG" href=""> </a> WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2.** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/) Acesso em: 23 Jun. 2025

> <a id="NBR" href=""> </a> ABNT NBR 17225:2025. **Acessibilidade em conteúdo e aplicações web – Requisitos**. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf) Acesso em: 23 Jun. 2025

> <a id="GuiaUK" href=""></a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 9 Mai. 2024. 

##  Histórico de Versão

| Versão | Data | Descrição | Autor(es)| Revisor(es) |
|--------|------|-----------|-----------|-------------|
| 1.0 | 15/11/2025 | Criação dos critérios |[Isabella Choukaira](https://github.com/isabellachoukaira) | [ Giovana Fontes ](https://github.com/GiovanaFontesS) | 
| 1.1 | 16/11/2025 | Adição das Referências |[Isabella Choukaira](https://github.com/isabellachoukaira) | [ Giovana Fontes ](https://github.com/GiovanaFontesS) | 