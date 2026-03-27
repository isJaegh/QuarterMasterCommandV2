// ============================================================================
// QUARTERMASTER COMMAND - LAZY LOAD MODAL ENGINE
// ============================================================================

// TODO: Uncomment this once you add 'export' to your changeLang function in lang.js
// import { changeLang } from '../data/lang.js'; 

/**
 * Opens a modal. If it hasn't been opened yet, it lazy-loads the HTML from its template.
 * @param {string} modalId - The ID of the modal container (e.g., 'settingsModal')
 */
export function openModal(modalId) {
    // 1. Hide all currently open modals to prevent overlapping
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');

    const modalContainer = document.getElementById(modalId);
    if (!modalContainer) {
        console.error(`Modal container #${modalId} not found.`);
        return;
    }

    // 2. PHASE 3 LAZY LOAD: If the container is empty, stamp the template!
    if (modalContainer.childElementCount === 0) {
        const template = document.getElementById(`tpl_${modalId}`);
        if (template) {
            // Clone the template's content and inject it into the live DOM
            modalContainer.appendChild(template.content.cloneNode(true));

            // Re-run localization so the newly injected HTML gets translated immediately
            // if (typeof changeLang === 'function') changeLang(); 
        } else {
            console.error(`Template #tpl_${modalId} not found.`);
        }
    }

    // 3. Display the modal
    modalContainer.style.display = 'block';

    // 4. Reset specific states based on which modal opened
    if (modalId === 'settingsModal') {
        switchTab('view'); // Always open settings to the 'View' tab
    }
}

/**
 * Closes a specific modal by ID.
 * @param {string} modalId 
 */
export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Handles switching between tabs inside the Settings Modal
 * @param {string} tabId - 'view' or 'data'
 */
export function switchTab(tabId) {
    // Hide all tab contents and remove active state from all buttons
    document.querySelectorAll('#settingsModal .tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('#settingsModal .tab-btn').forEach(el => el.classList.remove('active'));

    // Target the specific tab and button to activate
    const targetTab = document.getElementById('tab_' + tabId);
    const targetBtn = document.getElementById('tabBtn_' + tabId);

    if (targetTab) targetTab.style.display = 'block';
    if (targetBtn) targetBtn.classList.add('active');
}

/**
 * Toggles the mobile/desktop sidebar menu
 */
export function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
}