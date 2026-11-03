const themeToggle = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
function darkTheme() {
  return document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : systemTheme.matches;
}
function syncThemeButton() {
  const dark = darkTheme();
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#131816' : '#f9f9f6';
}
if (themeToggle) {
  themeToggle.hidden = false;
  syncThemeButton();
  systemTheme.addEventListener('change', syncThemeButton);
  themeToggle.addEventListener('click', () => {
    const choice = darkTheme() ? 'light' : 'dark';
    document.documentElement.dataset.theme = choice;
    try { localStorage.setItem('egor-theme', choice); } catch (_) {}
    syncThemeButton();
  });
}
const printButton = document.querySelector('[data-print]');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

// Preserve bookmarks to sections moved off the homepage.
if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
  const movedSections = {
    '#publications': 'research.html#publications',
    '#research': 'research.html#forecasting',
    '#other-work': 'about.html#software'
  };
  const destination = movedSections[location.hash];
  if (destination) location.replace(destination);
}
