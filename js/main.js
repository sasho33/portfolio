document.addEventListener('DOMContentLoaded', () => {
  const btnDarkMode = document.querySelector('.dark-mode-btn');

  if (btnDarkMode) {
    btnDarkMode.addEventListener('click', () => {
      btnDarkMode.classList.toggle('dark-mode-btn--active');
      document.body.classList.toggle('dark');
    });
  }
});
