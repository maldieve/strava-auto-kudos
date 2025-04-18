 # strava-auto-kudos

 A simple JavaScript snippet that automatically clicks all "Give kudos" buttons on Strava pages, with human-like random delays and an auto-refresh every 5 minutes.

 ## Features
 - Clicks every button with `title="Give kudos"`
 - Random delay between clicks (default 0.5s–2s)
 - Auto-refresh the page every 5 minutes
 - Easy to use via browser console, DevTools Snippet, or Bookmarklet

 ## Usage

 ### 1. Browser Console
 1. Navigate to your Strava activity feed or individual activities.
 2. Open the Developer Tools:
    - Chrome/Edge: `Ctrl+Shift+I` (or `F12`)
    - Firefox: `Ctrl+Shift+K`
 3. In the Console pane, paste the following code:
    ```js
    ;(function() {
      const CLICK_INTERVAL = 5 * 60 * 1000;  // 5 minutes
      const MIN_DELAY      = 500;            // min 0.5s before each click
      const MAX_DELAY      = 2000;           // max 2.0s before each click

      function clickAllKudos() {
        const buttons = Array.from(document.querySelectorAll('button[title="Give kudos"]'));
        if (!buttons.length) {
          console.warn('⚠️ No "Give kudos" buttons found');
          return;
        }
        buttons.forEach((btn, idx) => {
          const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
          setTimeout(() => {
            btn.click();
            console.log(`✅ Clicked ${idx+1}/${buttons.length} kudos button after ${Math.round(delay)}ms`);
          }, delay);
        });
      }

      // First run
      clickAllKudos();

      // Repeat every 5 minutes and reload
      setInterval(() => {
        clickAllKudos();
        console.log('🔄 Refreshing page now…');
        window.location.reload();
      }, CLICK_INTERVAL);
    })();
    ```
 4. Press `Enter` to execute.

 ### 2. DevTools Snippet
 1. Open Developer Tools and go to the **Sources** panel.
 2. Click the **Snippets** tab.
 3. Create a new snippet named `strava-auto-kudos.js`.
 4. Paste the code above and save.
 5. Run the snippet (▶️) on your Strava page after each reload.

 ### 3. Bookmarklet
 1. Create a new bookmark in your browser.
 2. Set the URL to the following (URI‑encoded) one-liner:
    ```text
    javascript:(function(){const CLICK_INTERVAL=5*60*1e3,MIN_DELAY=500,MAX_DELAY=2000;function clickAll(){const b=[...document.querySelectorAll('button[title="Give kudos"]')];if(!b.length){console.warn('⚠️ No "Give kudos" buttons found');return}b.forEach((x,i)=>{const d=Math.random()*(MAX_DELAY-MIN_DELAY)+MIN_DELAY;setTimeout(()=>{x.click();console.log(`✅ Clicked ${i+1}/${b.length} kudos after ${Math.round(d)}ms`)},d)})}clickAll();setInterval(()=>{clickAll();console.log('🔄 Refreshing page...');window.location.reload()},CLICK_INTERVAL)})();
    ```
 3. Click the bookmark while on a Strava page.

 ## Configuration
 - `CLICK_INTERVAL`: Interval between runs (in milliseconds).
 - `MIN_DELAY`, `MAX_DELAY`: Minimum and maximum delay between individual clicks (in milliseconds).

 ## Contributing
 Contributions are welcome! Feel free to open issues or submit pull requests.

 ## License
 