// ============================================================================
// QUARTERMASTER COMMAND - CENTRAL STATE MANAGEMENT
// ============================================================================

export const state = {
    currentLang: 'en',
    prevMode: 'units',
    marketData: {},
    pipelineStepsRaw: [],
    completedSteps: [],
    focusIndex: 0,
    byproductsRaw: {},
    pureDeficits: {},
    userPathChoices: {},
    collapsedState: {},
    moduleVisibility: {},
    pipelineViewMode: 'overview',
    globalRoutePref: null,
    timer: null
};

/**
 * Safely updates nested market data so modules don't accidentally overwrite objects
 */
export function updateMarketTier(item, index, field, val) {
    if (state.marketData[item] && state.marketData[item][index]) {
        state.marketData[item][index][field] = Number(val) || 0;
    }
}

/**
 * Gathers the current state and DOM values, then saves to localStorage
 */
export function saveState() {
    const isLight = document.body.classList.contains('light-theme');

    // Safely grab DOM values (they might not exist if modals aren't lazy-loaded yet)
    const targetEl = document.getElementById('targetAmount');
    const metalEl = document.getElementById('targetMetal');
    const craftEl = document.getElementById('crafters');
    const modeEl = document.getElementById('mode');

    const data = {
        lang: state.currentLang,
        market: state.marketData,
        target: targetEl ? targetEl.value : 10000,
        metal: metalEl ? metalEl.value : 'bleck',
        crafters: craftEl ? craftEl.value : 1,
        mode: modeEl ? modeEl.value : 'units',
        mods: {
            mast: document.getElementById('modMast')?.checked ?? true,
            ref: document.getElementById('modRef')?.checked ?? true,
            ext: document.getElementById('modExt')?.checked ?? true
        },
        choices: state.userPathChoices,
        collapsed: state.collapsedState,
        visibility: state.moduleVisibility,
        theme: isLight ? 'light' : 'dark'
    };

    localStorage.setItem('qm_data', JSON.stringify(data));

    // Flash the save status indicator in the footer
    const status = document.getElementById('saveStatus');
    if (status) {
        status.innerText = "Saved";
        setTimeout(() => { if (status) status.innerText = "Ready"; }, 2000);
    }
}

/**
 * Loads data from localStorage on boot
 */
export function loadState() {
    try {
        const raw = localStorage.getItem('qm_data');
        if (raw) {
            const data = JSON.parse(raw);
            if (data.lang) state.currentLang = data.lang;
            if (data.market) state.marketData = data.market;
            if (data.choices) state.userPathChoices = data.choices;
            if (data.collapsed) state.collapsedState = data.collapsed;
            if (data.visibility) state.moduleVisibility = data.visibility;
        }
    } catch (e) {
        console.error("Save load failed", e);
    }
}

/**
 * Nuke the state
 */
export function clearAll() {
    if (!confirm("Reset all inventory values and shopping cart to zero?")) return;
    localStorage.removeItem('qm_data');
    location.reload(); // The most secure way to ensure memory is cleared
}

/**
 * Generates a base64 share code for Discord/Guild members
 */
export function generateShareCode() {
    const data = {
        market: state.marketData,
        target: document.getElementById('targetAmount')?.value,
        metal: document.getElementById('targetMetal')?.value
    };
    const str = btoa(JSON.stringify(data));
    const shareCodeEl = document.getElementById('shareCode');

    if (shareCodeEl) {
        shareCodeEl.value = str;
        shareCodeEl.select();
        document.execCommand('copy');
        alert("Share code copied to clipboard!");
    }
}

/**
 * Imports a base64 share code and applies it to the state
 */
export function loadShareCode() {
    const shareCodeEl = document.getElementById('shareCode');
    if (!shareCodeEl || !shareCodeEl.value) return;

    try {
        const data = JSON.parse(atob(shareCodeEl.value));
        if (data.market) state.marketData = data.market;

        const targetEl = document.getElementById('targetAmount');
        if (targetEl && data.target) targetEl.value = data.target;

        const metalEl = document.getElementById('targetMetal');
        if (metalEl && data.metal) metalEl.value = data.metal;

        saveState();
        location.reload(); // Reload to apply the new state across the entire app
    } catch (e) {
        alert("Invalid share code.");
        console.error(e);
    }
}