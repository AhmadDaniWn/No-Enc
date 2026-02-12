// ==UserScript==
// @name         New Userscript
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-end
// @match        https://*/*
// @grant        none
// ==/UserScript==

// ==UserScript==
// @name         KB Remote 1-54
// @version      1.0
// @description  Remote control for 1-54 number game (small: 1-31, big: 32-54)
// @author       kaurev
// @match        *://*.google.com/*
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  if (window.kb54Loaded) return;
  window.kb54Loaded = true;

  const REMOTE_URL = 'http://159.65.144.10:3000';
  const API_PATH = '/8095496681/VOZZn8pyggcmQwwY';
  let currentMode = 'normal'; // 'small', 'big', 'normal'
  const originalRandom = Math.random;

  // Fungsi untuk ambil mode dari server
  async function fetchMode() {
    try {
      const res = await fetch(`${REMOTE_URL}${API_PATH}/check`);
      const filename = (await res.text()).trim();
      const scriptRes = await fetch(`${REMOTE_URL}${API_PATH}/${filename}`);
      const script = await scriptRes.text();
      const match = script.match(/KB_REMOTE_MODE\s*=\s*["'](\w+)["']/);
      if (match && ['small', 'big', 'normal'].includes(match[1])) {
        currentMode = match[1];
        console.log(`[KB 1-54] Mode: ${currentMode}`);
      }
    } catch (e) {
      console.warn('[KB] Gagal ambil mode');
    }
  }

  // Override Math.random dengan logika 1-54
  Math.random = function () {
    if (currentMode === 'small') {
      // Hasilkan angka 0.0 – ~0.574 (karena 31/54 ≈ 0.574)
      return originalRandom() * (31 / 54);
    } else if (currentMode === 'big') {
      // Hasilkan angka ~0.592 – 1.0 (32/54 ≈ 0.592)
      return (32 / 54) + originalRandom() * (23 / 54);
    }
    // normal: acak penuh 0.0 – 1.0
    return originalRandom();
  };

  // Mulai polling mode
  fetchMode();
  setInterval(fetchMode, 5000);
})();