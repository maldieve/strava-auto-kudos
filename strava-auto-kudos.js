// ==UserScript==
// @name         Strava Auto Kudos
// @namespace    https://github.com/maldieve/strava-auto-kudos
// @version      1.0
// @description  Automatically clicks all "Give kudos" buttons every 5 min on Strava
// @match        https://www.strava.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function() {
  const CLICK_INTERVAL = 5 * 60 * 1000;  // 5 min
  const MIN_DELAY = 500;                 // 0.5s
  const MAX_DELAY = 2000;                // 2.0s

  function clickAllKudos() {
    const buttons = Array.from(document.querySelectorAll('button[title="Give kudos"]'));
    if (!buttons.length) {
      console.warn('⚠️ No "Give kudos" buttons found');
      return;
    }
    buttons.forEach((btn, idx) => {
      const delay = Math.random()*(MAX_DELAY-MIN_DELAY)+MIN_DELAY;
      setTimeout(() => {
        btn.click();
        console.log(`✅ Clicked ${idx+1}/${buttons.length} after ${Math.round(delay)}ms`);
      }, delay);
    });
  }

  clickAllKudos();
  setInterval(() => {
    clickAllKudos();
    console.log('🔄 Refreshing…');
    window.location.reload();
  }, CLICK_INTERVAL);
})();