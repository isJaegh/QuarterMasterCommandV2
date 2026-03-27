// ============================================================================
// QUARTERMASTER COMMAND - MAIN ROUTER & EVENT DELEGATION
// ============================================================================

import { state, saveState, loadState, clearAll, generateShareCode, loadShareCode } from './state/store.js';
import { openModal, closeModal, switchTab, toggleSidebar } from './ui/modals.js';
import { restartPipeline, navFocus, setPipelineView, toggleGlobalPref, toggleStep, updatePathChoice } from './core/pipeline.js';
import { calculate, handleModeChange, targetMetalChanged, calculateMax } from './core/app.js';
import { applyColors, resetColors, toggleTheme } from './ui/theme.js';
import { sendToDiscord, copyDiscord } from './network/discord.js';
import { autoFillCart, clearCart } from './ui/market_bank.js';
import { setLang } from './data/lang.js';

document.addEventListener('DOMContentLoaded', () => {

    // 1. BOOT SEQUENCE
    loadState();
    calculate(); // App will now calculate on boot!

    // --- Register the Service Worker ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    // ========================================================================
    // 2. GLOBAL CLICK DELEGATION
    // ========================================================================
    document.addEventListener('click', (e) => {
        const target = e.target;

        // --- UI & Modals ---
        if (target.closest('.close[data-close]')) {
            closeModal(target.closest('.close').dataset.close);
            return;
        }

        if (target.closest('[data-action="openModal"]')) {
            openModal(target.closest('[data-action="openModal"]').dataset.modal);
            if (target.closest('.sidebar-links')) toggleSidebar();
            return;
        }

        if (target.closest('[data-action="switchTab"]')) {
            switchTab(target.closest('[data-action="switchTab"]').dataset.tab);
            return;
        }

        if (target.closest('#btnToggleSidebar') || target.id === 'sidebarOverlay' || target.closest('#btnCloseSidebar')) {
            toggleSidebar();
            return;
        }

        if (target.closest('.module-header')) {
            const modId = target.closest('.module-header').id.replace('header_', 'mod_');
            const el = document.getElementById(modId);
            if (el) {
                el.classList.toggle('collapsed');
                state.collapsedState[modId] = el.classList.contains('collapsed');
                saveState();
            }
            return;
        }

        if (target.closest('#btnOpenPrefs')) {
            e.stopPropagation();
            openModal('prefsModal');
            return;
        }

        // --- Action Buttons ---
        if (target.id === 'ui_btnResetColors') resetColors();
        if (target.id === 'ui_btnMaxText') calculateMax();
        if (target.id === 'ui_maxAcknowledge') closeModal('maxCraftModal');
        if (target.id === 'ui_btnAutoFill') autoFillCart();
        if (target.id === 'ui_btnClearCart') clearCart();
        if (target.id === 'ui_btnSend') sendToDiscord();
        if (target.id === 'ui_btnDiscord') copyDiscord();
        if (target.id === 'ui_btnGenCode') generateShareCode();
        if (target.id === 'ui_btnLoadCode') loadShareCode();

        if (target.id === 'ui_btnReset') {
            clearAll();
            closeModal('settingsModal');
        }

        // --- Pipeline Controls ---
        if (target.id === 'btnPipeReset') restartPipeline();
        if (target.id === 'btnFocusPrev') navFocus(-1);
        if (target.id === 'btnFocusNext') navFocus(1);

        if (target.closest('[data-action="setPipeView"]')) {
            setPipelineView(target.closest('[data-action="setPipeView"]').dataset.view);
            return;
        }

        // Scroll to Top Button
        if (target.closest('#btnReturnTop')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
    });

    // ========================================================================
    // 3. GLOBAL CHANGE DELEGATION (Dropdowns, Checkboxes, Pickers)
    // ========================================================================
    document.addEventListener('change', (e) => {
        const target = e.target;

        // --- Display & Theme ---
        if (target.id === 'mode') handleModeChange();
        if (target.id === 'lang') setLang(target.value);
        if (target.id === 'themeToggleCb') toggleTheme();
        if (['colorAccent', 'colorBg', 'colorText'].includes(target.id)) applyColors();

        // --- Dashboard Module Visibility ---
        if (target.id?.startsWith('view_')) {
            const modId = target.id.replace('view_', 'mod_');
            const el = document.getElementById(modId);
            if (el) {
                el.classList.toggle('module-hidden', !target.checked);
                state.moduleVisibility[modId] = target.checked;
                saveState();
            }
        }

        // --- Pipeline Recalculation Triggers ---
        if (['modMast', 'modRef', 'modExt', 'chkBp', 'showAllBank', 'showAllCart'].includes(target.id)) calculate();
        if (target.id === 'chkEff') toggleGlobalPref('efficient', target.checked);
        if (target.id === 'chkYld') toggleGlobalPref('yield', target.checked);
    });

    // ========================================================================
    // 4. GLOBAL INPUT DELEGATION (Typing in number fields)
    // ========================================================================
    document.addEventListener('input', (e) => {
        const target = e.target;

        if (['targetAmount', 'crafters'].includes(target.id)) calculate();
        if (target.id === 'targetMetal') targetMetalChanged();
    });

    // ========================================================================
    // 5. WINDOW EVENTS
    // ========================================================================
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('btnReturnTop');
        if (btn) btn.style.display = (window.scrollY > 200) ? 'flex' : 'none';
    });
});

// ============================================================================
// 6. GLOBAL SCOPE EXPOSURE (CRITICAL FOR DYNAMIC HTML)
// Because app.js and market_bank.js generate HTML with inline onclick="" attributes,
// those functions must be explicitly attached to the global window object.
// ============================================================================
import { quickAdd, quickSub, clearItem, removeMarketTier, addMarketTier, quickAddMarket, quickSubMarket, autoFillMarketItem, clearMarketTier, updateMarketTier } from './ui/market_bank.js';

window.toggleStep = toggleStep;
window.updatePathChoice = updatePathChoice;
window.quickAdd = quickAdd;
window.quickSub = quickSub;
window.clearItem = clearItem;
window.removeMarketTier = removeMarketTier;
window.addMarketTier = addMarketTier;
window.quickAddMarket = quickAddMarket;
window.quickSubMarket = quickSubMarket;
window.autoFillMarketItem = autoFillMarketItem;
window.clearMarketTier = clearMarketTier;
window.updateMarketTier = updateMarketTier;