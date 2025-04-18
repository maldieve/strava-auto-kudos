;(function() {
  const CLICK_INTERVAL = 5 * 60 * 1000;  // 5 minutes
  const MIN_DELAY      = 500;            // min 0.5s before each click
  const MAX_DELAY      = 2000;           // max 2.0s before each click

  function clickAllKudos() {
    const buttons = Array.from(document.querySelectorAll('button[title="Give kudos"]'));
    if (!buttons.length) {
      console.warn('âš ï¸ No "Give kudos" buttons found');
      return;
    }
    buttons.forEach((btn, idx) => {
      const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
      setTimeout(() => {
        btn.click();
        console.log(`âœ… Clicked ${idx+1}/${buttons.length} kudos button after ${Math.round(delay)}ms`);
      }, delay);
    });
  }

  // first runâ€¦
  clickAllKudos();

  // â€¦and every 5m, click again then reload
  setInterval(() => {
    clickAllKudos();
    console.log('ðŸ”„ Refreshing page nowâ€¦');
    window.location.reload();
  }, CLICK_INTERVAL);
})();
