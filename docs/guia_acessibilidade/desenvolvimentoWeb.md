# Desenvolvimento

Esta seção apresenta diretrizes para implementar interfaces digitais acessíveis, considerando aspectos técnicos essenciais. Ela é destinada a **desenvolvedores front-end, back-end e engenheiros de software**, responsáveis por construir sistemas robustos, compatíveis com diferentes tecnologias assistivas e capazes de oferecer uma experiência consistente para todos os usuários

Esta parte do guia foi construida com base no capítulo 6 "Desenvolvimento" do <a href="#GuiaUK">Guia de Boas Práticas para Acessibilidade Digital (UK + Brasil)</a> e com base na <a href="#WCAG">Web Content Accessibility Guidelines (WCAG) 2.2</a> e na <a href="#NBR"> ABNT-NBR-17225-Acessibilidade-Digital</a> 

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

## 1. Navegação 
  
### links

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
 Todos os links são usados para navegação (A). <a href="#NBR">[NBR 5.7.2] </a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  A finalidade dos links é clara pelo texto dos links ou pelo seu contexto próximo e programaticamente associado (A). <a href="#NBR">[NBR 5.7.4]</a> <a href="#1">[WCAG 2.4.4]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
 Todos os mecanismos de ajuda que se repetem em um conjunto de páginas estão na mesma ordem relativa (A). <a href="#NBR">[NBR 2.7.16]</a> <a href="#2">[WCAG 3.2.6]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
 Há um ou mais links (ou outro mecanismo) que permitem contornar blocos de conteúdo na página (A). <a href="#NBR">[NBR 5.7.11]</a> <a href="#3">[WCAG 2.4.1]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
 Há mais de uma forma para encontrar uma página em um conjunto de páginas ou A página é o resultado ou uma etapa de um processo (AA). <a href="#NBR">[NBR 5.7.13]</a> <a href="#4">[WCAG 2.4.5]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
Todos os mecanismos de navegação que se repetem em um conjunto de páginas estão na mesma ordem relativa ou o usuário que altera (AA). <a href="#NBR">[NBR 5.7.15]</a> <a href="#5">[WCAG 3.2.3]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAAdev">
A finalidade dos links é claramente identificável apenas pelo texto dos links, sem depender do contexto (AAA). <a href="#6">[WCAG 2.4.9]</a>
</label>

### Botões

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Todos os botões possuem uma definição clara de sua função e devem executar uma funcionalidade (A). <a href="#NBR">[NBR 5.8.1]</a> <a href="#NBR">[NBR 5.8.2]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Componente de interface recebe foco, não muda de contexto a não ser que o usuário seja avisado (A). <a href="#7">[WCAG 3.2.1]</a> <a href="#8">[WCAG 3.2.2]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Toda funcionalidade operada por movimento pode ser operada também por componentes que não exigem esse modo de operação (A). <a href="#9">[WCAG 2.5.4]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
Os componentes que têm a mesma funcionalidade em um conjunto de páginas web são identificados de forma consistente (AA). <a href="#10">[WCAG 3.2.4]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
Toda funcionalidade operada por movimento de arrastar pode ser operada também por um ponteiro único sem movimento de arrastar (AA). <a href="#11">[WCAG 2.5.7]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
  O tamanho do alvo para entradas de ponteiro é pelo menos 24 por 24 pixels CSS (AA). <a href="#12">[WCAG 2.5.8]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAAdev">
  Toda mudança de contexto é iniciada apenas a pedido do usuário ou pode ser desativada (AAA). <a href="#13">[WCAG 3.2.5]</a>
</label>


## 2. Navegação por teclado

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Toda a funcionalidade do conteúdo é operável através de uma interface de teclado (A). <a href="#14">[WCAG 2.1.1]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Elementos focáveis aparecem em ordem sequencial lógica e intuitiva ao receber foco (A). <a href="#NBR">[NBR 5.1.4]</a> <a href="#15">[WCAG 2.4.3]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Não há componentes que bloqueiam, impedem ou interrompem a navegação por teclado (A). <a href="#NBR">[NBR 5.1.6]</a> <a href="#16">[WCAG 2.1.2]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Há um mecanismo simples para desativar ou remapear o atalho de teclado sem tecla modificadora (A). <a href="#17">[WCAG 2.1.4]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
 Todos os elementos focáveis possuem um indicador de foco visível (AA). <a href="#NBR">[NBR 5.1.1]</a> <a href="#18">[WCAG 2.4.7]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAAdev">
  Todos os elementos focáveis estão completamente visíveis quando recebem foco (AAA). <a href="#NBR">[NBR 5.1.2]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAAdev">
  Todas as funcionalidades da página são acessíveis com o teclado, sem exceção (AAA). <a href="#NBR">[NBR 5.1.2]</a>
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAAdev">
  Não há funcionalidade na página que restringe o uso de algum mecanismo de entrada disponível (AAA). <a href="#NBR">[NBR 5.1.14]</a> <a href="#19">[WCAG 2.5.6]</a> 
</label>

## 3. Conteúdo Visual e Auditivo

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Legendas para áudio e vídeo ao vivo (A). 
  <a href="#NBR">[NBR 5.14.9]</a> <a href="#20">[WCAG 1.2.4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  É possível controlar o volume do áudio, sem afetar o volume geral do sistema (A). 
  <a href="#NBR">[NBR 5.14.7]</a> <a href="#21">[WCAG 1.4.2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todos os vídeos pré-gravados têm audiodescrição para todo o conteúdo visual (AA). 
  <a href="#NBR">[NBR 5.14.4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAAdev">
  Há janela de Libras para conteúdo em áudio (AAA). 
  <a href="#NBR">[NBR 5.14.6]</a> <a href="#22">[WCAG 1.2.6]</a>
</label>

## 4. Estrutura Semântica

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Todos os cabeçalhos possuem semântica determinada programaticamente (A) <a href="#NBR">[NBR 5.3.1]</a> <a href="#23">[WCAG 1.3.1]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  A ordem dos elementos conforme aparece no código é lógica e intuitiva, de modo que preserva o significado e a operabilidade (A). <a href="#NBR">[NBR 5.13.6]</a> <a href="#24">[WCAG 1.3.2]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  A página tem seu idioma declarado de forma programaticamente determinada (A). <a href="#NBR">[NBR 5.13.6]</a> <a href="#25">[WCAG 1.3.2]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="Adev">
  Todos os componentes que requerem identificação por nome possuem um nome acessível (A). <a href="#NBR">[NBR 5.13.9]</a> <a href="#26">[WCAG 4.1.2]</a> 
</label>

<label class="criterio">
<input type="checkbox" class="criterio" data-level="AAdev">
 Os cabeçalhos e os rótulos descrevem o tópico ou a finalidade (AA). <a href="#27">[WCAG 2.4.6]</a> 
</label>

## 5. Formulários e interação 

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todos os campos de formulário possuem um rótulo que os identifica (A). 
  <a href="#NBR">[NBR 5.9.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  As informações, a estrutura e os relacionamentos visuais do conteúdo devem poder ser identificados automaticamente por tecnologias assistivas ou estar claramente disponíveis no texto (A). 
  <a href="#23">[WCAG 1.3.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Rótulos ou instruções são fornecidos quando o conteúdo exigir a entrada de dados por parte do usuário (A). 
  <a href="#28">[WCAG 3.3.2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todos os rótulos estão associados e identificam o propósito dos respectivos campos de formulário (A). 
  <a href="#NBR">[NBR 5.9.3]</a> <a href="#NBR">[NBR 5.9.4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Todas as mensagens de erro descrevem em texto qual é o erro e identificam qual é o campo com erro (A). 
  <a href="#29">[WCAG 3.3.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todos os campos de entrada têm seu tipo de dado determinado programaticamente (AA). 
  <a href="#NBR">[NBR 5.9.8]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  Todos os formulários críticos permitem uma forma de reverter, verificar ou confirmar os dados (AA). 
  <a href="#30">[WCAG 3.3.4]</a>
</label>

## 6. Tempo e Responsividade

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Há um mecanismo para desligar, ajustar ou estender o limite de tempo antes de atingi-lo (A).  
  <a href="#NBR">[NBR 5.16.2]</a> <a href="#31">[WCAG 2.2.1]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="Adev">
  Não há atualização que inicie automaticamente e seja apresentada em paralelo com outro conteúdo (A).  
  <a href="#NBR">[NBR 5.16.3]</a> <a href="#32">[WCAG 2.2.2]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  O conteúdo não requer uma orientação de exibição específica (AA).  
  <a href="#NBR">[NBR 5.10.3]</a> <a href="#33">[WCAG 1.3.4]</a>
</label>

<label class="criterio">
  <input type="checkbox" class="criterio" data-level="AAdev">
  O design é responsivo (AA).  
  <a href="#NBR">[NBR 5.10.4]</a> <a href="#34">[WCAG 1.4.10]</a>
</label>


## Referências Bibliograficas

<!-- NAVEGAÇÃO-->
> <a id="1" href="">1.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.4 Finalidade do Link (Em contexto) (Nível A)**. Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-in-context). Acesso em: 10 nov. 2025.

> <a id="2" href="">2.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.2.6 Identificação Consistente (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-help](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-help). Acesso em: 10 nov. 2025.

> <a id="3" href="">3.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.1 Blocos de Contorno (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#bypass-blocks](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#bypass-blocks). Acesso em: 10 nov. 2025.

> <a id="4" href="">4.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.5 Várias Formas (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#multiple-ways](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#multiple-ways). Acesso em: 10 nov. 2025.

> <a id="5" href="">5.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.2.3 Navegação Consistente (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-navigation). Acesso em: 10 nov. 2025.

> <a id="6" href="">6.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.9 Finalidade do Link (Apenas Link) (Nível AAA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-link-only](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#link-purpose-link-only). Acesso em: 10 nov. 2025.

> <a id="7" href="">7.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.2.1 Ao Receber o Foco (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-focus](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-focus). Acesso em: 10 nov. 2025.

> <a id="8" href="">8.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.2.2 Ao Receber Dados (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-input](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#on-input). Acesso em: 10 nov. 2025.

> <a id="9" href="">9.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.5.4 Ativação por Movimento (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#motion-actuation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#motion-actuation). Acesso em: 10 nov. 2025.

> <a id="10" href="">10.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.2.4 Identificação Consistente (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#consistent-identification). Acesso em: 10 nov. 2025.

> <a id="11" href="">11.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.5.7 Movimento de Arrastar (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#dragging-movements](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#dragging-movements). Acesso em: 10 nov. 2025.

> <a id="12" href="">12.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.5.8 Tamanho do Alvo (Aprimorado) (Nível AAA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-enhanced](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#target-size-enhanced). Acesso em: 10 nov. 2025.

> <a id="13" href="">13.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.2.5 Mudança a Pedido (Nível AAA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#change-on-request](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#change-on-request). Acesso em: 10 nov. 2025.

<!-- NAVEGAÇÃO POR TECLADO -->
> <a id="14" href="">14.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.1.1 Teclado (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#keyboard](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#keyboard). Acesso em: 10 nov. 2025.

> <a id="15" href="">15.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.3 Ordem do Foco (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-order](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-order). Acesso em: 10 nov. 2025.

> <a id="16" href="">16.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.1.2 Sem Armadilha de Teclado (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#no-keyboard-trap](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#no-keyboard-trap). Acesso em: 10 nov. 2025.

> <a id="17" href="">17.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.1.4 Atalhos de Teclado com Caracteres (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#character-key-shortcuts](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#character-key-shortcuts). Acesso em: 10 nov. 2025.

> <a id="18" href="">18.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.7 Foco Visível (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#focus-visible). Acesso em: 10 nov. 2025.

> <a id="19" href="">19.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.5.6 Mecanismos de Entrada Concorrentes (Nível AAA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#concurrent-input-mechanisms](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#concurrent-input-mechanisms). Acesso em: 10 nov. 2025.

<!-- CONTEÚDO VISUAL E AUDITIVO-->

> <a id="20" href="">20.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.2.4 Legendas (Ao Vivo) (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#captions-live](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#captions-live). Acesso em: 10 nov. 2025.

> <a id="21" href="">21.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.4.2 Controle de Áudio (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-control](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#audio-control). Acesso em: 10 nov. 2025.

> <a id="22" href="">22.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.2.6 Língua de Sinais (Pré-gravada) (Nível AAA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#sign-language-prerecorded](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#sign-language-prerecorded). Acesso em: 10 nov. 2025.

<!-- SEMÂNTICA-->
> <a id="23" href="">23.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.3.1 Informação e Relacionamentos (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#info-and-relationships). Acesso em: 10 nov. 2025.

> <a id="24" href="">24.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.3.2 Sequência com Significado (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#meaningful-sequence](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#meaningful-sequence). Acesso em: 10 nov. 2025.

> <a id="25" href="">25.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.1.1 Idioma da Página (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#language-of-page](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#language-of-page). Acesso em: 10 nov. 2025.

> <a id="26" href="">26.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 4.1.2 Nome, Função e Valor (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#name-role-value). Acesso em: 10 nov. 2025.

> <a id="27" href="">27.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.4.6 Cabeçalhos e Rótulos (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#headings-and-labels). Acesso em: 10 nov. 2025.

<!-- FORMULÁRIOS-->
> <a id="28" href="">28.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. Critério de Sucesso 3.3.2 Rótulos ou Instruções (Nível A). Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#labels-or-instructions](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#labels-or-instructions). Acesso em: 10 nov. 2025.

> <a id="29" href="">29.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.3.1 Identificação de Erros (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#error-identification](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#error-identification). Acesso em: 10 nov. 2025.

> <a id="30" href="">30.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 3.3.4 Sugestão para Erros (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#error-prevention-legal-financial-data](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#error-prevention-legal-financial-data). Acesso em: 10 nov. 2025.


<!-- RESPONSIVIDADE-->
> <a id="31" href="">31.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.2.1 Ajuste de Tempo (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#timing-adjustable](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#timing-adjustable). Acesso em: 10 nov. 2025.

> <a id="32" href="">32.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 2.2.2 Pausar, Parar, Ocultar (Nível A).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#pause-stop-hide](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#pause-stop-hide). Acesso em: 10 nov. 2025.

> <a id="33" href="">33.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.3.4 Orientação (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#orientation). Acesso em: 10 nov. 2025.

> <a id="34" href="">34.</a> Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2. **Critério de Sucesso 1.4.10 Refluxo (Nível AA).** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/#reflow). Acesso em: 10 nov. 2025.

<!-- REFERENCIA DE MATERIAL-->

> <a id="WCAG" href=""> </a>  WORLD WIDE WEB CONSORTIUM. **Diretrizes de Acessibilidade para Conteúdo Web (WCAG) 2.2.** Disponível em: [https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/](https://www.w3c.br/traducoes/wcag/wcag22-pt-BR/) Acesso em: 16 Nov. 2025

> <a id="NBR" href=""> </a> ABNT NBR 17225:2025. **Acessibilidade em conteúdo e aplicações web – Requisitos**. Disponível em: [https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf](https://mwpt.com.br/wp-content/uploads/2025/04/ABNT-NBR-17225-Acessibilidade-Digital.pdf) Acesso em: 16 Nov. 2025

> <a id="GuiaUK" href=""></a> DINIZ, V.; FERRAZ, R.; NASCIMENTO, C. M.; CREDIDIO, R. **Guia de Boas Práticas para Acessibilidade Digital**. Programa de Cooperação entre Reino Unido e Brasil em Acesso Digital, 2023. Disponível em: [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 10 Nov. 2025. 

##  Histórico de Versão

| Versão | Data | Descrição | Autor(es)| Revisor(es) |
|--------|------|-----------|-----------|-------------|
| 1.0 | 14/11/2025 | Criação dos critérios |[Isabella Choukaira](https://github.com/isabellachoukaira) | [ Giovana Fontes ](https://github.com/GiovanaFontesS) | 
| 1.1 | 15/11/2025 | Adição das Referências |[Isabella Choukaira](https://github.com/isabellachoukaira) | [ Giovana Fontes ](https://github.com/GiovanaFontesS) | 