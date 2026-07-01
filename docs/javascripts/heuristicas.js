/**
 * heuristicas.js
 * Controla itens de checklist, persiste a escolha no localStorage
 * e recalcula o progresso dos anéis automaticamente.
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
      return null;
    }
  }

  function saveState(id, data) {
    try {
      localStorage.setItem(storagePrefix() + id, JSON.stringify(data));
    } catch (e) {}
  }

  function updateDonuts() {
    var groups = {};
    
    var items = document.querySelectorAll(".heuristica-item");

    items.forEach(function (item) {
      var level = item.getAttribute("data-level") || "geral";
      var checkbox = item.querySelector(".heuristica-checkbox");
      if (!checkbox) return;
      
      var checked = checkbox.checked;

      if (!groups[level]) {
        groups[level] = { total: 0, marcados: 0 };
      }
      groups[level].total++;
      if (checked) groups[level].marcados++;
    });

  
    var donuts = document.querySelectorAll(".heuristica-donut");
    donuts.forEach(function (donut) {
      var level = donut.getAttribute("data-level-group") || "geral";
      var g = groups[level] || { total: 0, marcados: 0 };
      var pct = g.total > 0 ? Math.round((g.marcados / g.total) * 100) : 0;

      var ring = donut.querySelector(".heuristica-donut-ring");
      var center = donut.querySelector(".heuristica-donut-center");
      var count = donut.querySelector(".heuristica-donut-count");

      if (ring) ring.style.setProperty("--pct", pct);
      if (center) center.textContent = pct + "%";
      if (count) count.textContent = "(" + g.marcados + "/" + g.total + ")";
    });
  }

  function init() {
    var items = document.querySelectorAll(".heuristica-item");
    
    items.forEach(function (item) {
      var id = item.getAttribute("data-id");
      var checkbox = item.querySelector(".heuristica-checkbox");
      if (!id || !checkbox) return;

      var saved = loadState(id);
      if (saved) checkbox.checked = saved.checked;

      checkbox.addEventListener("change", function () {
        saveState(id, { checked: checkbox.checked });
        updateDonuts();
      });
    });
    
 
    updateDonuts();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();