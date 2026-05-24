/**
 * CIPS Level 5 – Module Navigator
 * Handles tab switching between module panels.
 */

/**
 * Show a specific module panel and mark its nav button as active.
 * @param {string} id   - The element ID of the module panel (e.g. "L5M1")
 * @param {HTMLElement} btn - The nav button that was clicked
 */
function showModule(id, btn) {
  // Hide all panels
  document.querySelectorAll('.module-panel').forEach(function (panel) {
    panel.classList.remove('active');
  });

  // Deactivate all nav buttons
  document.querySelectorAll('.module-nav button').forEach(function (navBtn) {
    navBtn.classList.remove('active');
  });

  // Activate selected panel and button
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// On DOM ready: ensure the first panel and button are visible
document.addEventListener('DOMContentLoaded', function () {
  var firstBtn = document.querySelector('.module-nav button');
  if (firstBtn) {
    firstBtn.classList.add('active');
  }
  var firstPanel = document.querySelector('.module-panel');
  if (firstPanel) {
    firstPanel.classList.add('active');
  }
});
