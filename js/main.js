document.addEventListener('DOMContentLoaded', () => {
  const btnDarkMode = document.querySelector('.dark-mode-btn');

  // 1. checking the user's preference for dark mode using the matchMedia method
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    btnDarkMode.classList.add('dark-mode-btn--active');
  }

  // checking the local storage if it has a value of dark mode set to dark or light
  if (localStorage.getItem('dark-mode') === 'dark') {
    document.body.classList.add('dark');
    btnDarkMode.classList.add('dark-mode-btn--active');
  } else if (localStorage.getItem('dark-mode') === 'light') {
    document.body.classList.remove('dark');
    btnDarkMode.classList.remove('dark-mode-btn--active');
  }

  // check if the user's preference for dark mode changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('dark');
      btnDarkMode.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnDarkMode.classList.remove('dark-mode-btn--active');
    }
  });

  // adding an event listener to the dark mode button
  btnDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
      localStorage.setItem('dark-mode', 'dark');
    } else {
      localStorage.setItem('dark-mode', 'light');
    }
  });
});
