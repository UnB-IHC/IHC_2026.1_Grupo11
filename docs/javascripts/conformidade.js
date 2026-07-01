/**
 * conformidade.js
 * Controla itens de checklist com 3 estados (Conforme / Não conforme / N/A),
 * persiste a escolha no localStorage do navegador e recalcula os anéis
 * de progresso por nível WCAG (A, AA, AAA) sempre que algo muda.
 *
 * Os itens N/A NÃO entram no denominador do cálculo de % — só
 * "Conforme" e "Não conforme" contam como "aplicável".
 *
 * Compatível com a navegação instantânea do Material for MkDocs
 * (feature `navigation.instant`), que troca o conteúdo da página via
 * JS sem recarregar — por isso o init() é re-executado a cada troca
 * de página através do observable `document$`, quando disponível.
 */
(function () {
  "use strict";

  function storagePrefix() {
    // Namespacing por página: cada rota tem seu próprio conjunto de respostas.
    return "a11y:" + location.pathname + ":";
  }

  function loadState(id) {
    try {
      var raw = localStorage.getItem(storagePrefix() + id);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn("a11y: não foi possível ler o estado salvo.", e);
      return null;
    }
  }

  function saveState(id, data) {
    try {
      localStorage.setItem(storagePrefix() + id, JSON.stringify(data));
    } catch (e) {
      console.warn("a11y: não foi possível salvar o estado (localStorage indisponível ou cheio).", e);
    }
  }

  function applyVisualState(item, state) {
    var buttons = item.querySelectorAll(".a11y-btn");
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = btn.getAttribute("data-state") === state;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }
    item.setAttribute("data-current-state", state || "");

    var textarea = item.querySelector(".a11y-justificativa");
    if (textarea) {
      textarea.hidden = state !== "na";
    }
  }

  function updateDonuts() {
    var groups = {};
    var items = document.querySelectorAll(".a11y-item");

    items.forEach(function (item) {
      var level = item.getAttribute("data-level");
      var state = item.getAttribute("data-current-state");
      if (!level) return;

      if (!groups[level]) {
        groups[level] = { conforme: 0, naoConforme: 0, na: 0 };
      }
      if (state === "conforme") groups[level].conforme++;
      else if (state === "nao-conforme") groups[level].naoConforme++;
      else if (state === "na") groups[level].na++;
    });

    var donuts = document.querySelectorAll(".a11y-donut");
    donuts.forEach(function (donut) {
      var level = donut.getAttribute("data-level-group");
      var g = groups[level] || { conforme: 0, naoConforme: 0, na: 0 };
      var applicable = g.conforme + g.naoConforme; // N/A fica fora do denominador
      var pct = applicable > 0 ? Math.round((g.conforme / applicable) * 100) : 0;

      var ring = donut.querySelector(".a11y-donut-ring");
      var center = donut.querySelector(".a11y-donut-center");
      var count = donut.querySelector(".a11y-donut-count");

      if (ring) ring.style.setProperty("--pct", pct);
      if (center) center.textContent = pct + "%";
      if (count) {
        var label = "(" + g.conforme + "/" + applicable + ")";
        if (g.na > 0) label += " · " + g.na + " N/A";
        count.textContent = label;
      }
    });
  }

  function initItem(item) {
    var id = item.getAttribute("data-id");
    if (!id) {
      console.warn("a11y: item de checklist sem data-id foi ignorado.", item);
      return;
    }

    var saved = loadState(id);
    applyVisualState(item, saved ? saved.state : null);

    var textarea = item.querySelector(".a11y-justificativa");
    if (textarea && saved && saved.justificativa) {
      textarea.value = saved.justificativa;
    }

    var buttons = item.querySelectorAll(".a11y-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var state = btn.getAttribute("data-state");
        var current = loadState(id) || {};
        current.state = state;
        saveState(id, current);
        applyVisualState(item, state);
        updateDonuts();
      });
    });

    if (textarea) {
      textarea.addEventListener("input", function () {
        var current = loadState(id) || {};
        current.justificativa = textarea.value;
        saveState(id, current);
      });
    }
  }

  function init() {
    var items = document.querySelectorAll(".a11y-item");
    items.forEach(initItem);
    updateDonuts();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    // Material for MkDocs com navegação instantânea
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();