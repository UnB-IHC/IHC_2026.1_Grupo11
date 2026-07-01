/**
 * heuristicas.js
 * Controla itens de checklist com 1 estado (Verificado / Pendente),
 * persiste a escolha no localStorage do navegador e recalcula os anéis
 * de progresso por heurística sempre que algo muda.
 *
 * Compatível com a navegação instantânea do Material for MkDocs
 * (feature `navigation.instant`), que troca o conteúdo da página via
 * JS sem recarregar — por isso o init() é re-executado a cada troca
 * de página através do observable `document$`, quando disponível.
 */
(function () {
  "use strict";

  function storagePrefix() {
    return "heuristicas:" + location.pathname + ":";
  }

  function loadState(id) {
    try {
      var raw = localStorage.getItem(storagePrefix() + id);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn("heuristicas: não foi possível ler o estado salvo.", e);
      return null;
    }
  }

  function saveState(id, data) {
    try {
      localStorage.setItem(storagePrefix() + id, JSON.stringify(data));
    } catch (e) {
      console.warn("heuristicas: não foi possível salvar o estado (localStorage indisponível ou cheio).", e);
    }
  }

  function applyVisualState(item, checked) {
    var btn = item.querySelector(".heuristica-btn");
    if (btn) {
      btn.classList.toggle("is-active", !!checked);
      btn.setAttribute("aria-pressed", checked ? "true" : "false");
    }
    item.setAttribute("data-current-state", checked ? "verificado" : "");
  }

  function updateDonuts() {
    var groups = {};
    var items = document.querySelectorAll(".heuristica-item");

    items.forEach(function (item) {
      var level = item.getAttribute("data-level");
      var state = item.getAttribute("data-current-state");
      if (!level) return;

      if (!groups[level]) {
        groups[level] = { total: 0, verificado: 0 };
      }
      groups[level].total++;
      if (state === "verificado") groups[level].verificado++;
    });

    var donuts = document.querySelectorAll(".heuristica-donut");
    donuts.forEach(function (donut) {
      var level = donut.getAttribute("data-level-group");
      var g = groups[level] || { total: 0, verificado: 0 };
      var pct = g.total > 0 ? Math.round((g.verificado / g.total) * 100) : 0;

      var ring = donut.querySelector(".heuristica-donut-ring");
      var center = donut.querySelector(".heuristica-donut-center");
      var count = donut.querySelector(".heuristica-donut-count");

      if (ring) ring.style.setProperty("--pct", pct);
      if (center) center.textContent = pct + "%";
      if (count) count.textContent = "(" + g.verificado + "/" + g.total + ")";
    });
  }

  function initItem(item) {
    var id = item.getAttribute("data-id");
    if (!id) {
      console.warn("heuristicas: item de checklist sem data-id foi ignorado.", item);
      return;
    }

    var saved = loadState(id);
    applyVisualState(item, saved ? saved.checked : false);

    var btn = item.querySelector(".heuristica-btn");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = loadState(id) || {};
        current.checked = !current.checked;
        saveState(id, current);
        applyVisualState(item, current.checked);
        updateDonuts();
      });
    }
  }

  function init() {
    var items = document.querySelectorAll(".heuristica-item");
    items.forEach(initItem);
    updateDonuts();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();