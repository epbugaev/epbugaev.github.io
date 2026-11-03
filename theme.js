// Apply a saved preference before the page is painted. With no saved choice,
// the CSS follows the operating-system preference, including without JavaScript.
try {
  const choice = localStorage.getItem('egor-theme');
  if (choice === 'light' || choice === 'dark') document.documentElement.dataset.theme = choice;
} catch (_) { /* Storage can be unavailable in private browsing. */ }
