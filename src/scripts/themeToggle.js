const toggleTheme = document.querySelectorAll('input[name="theme-toggle__btn"]');

toggleTheme.forEach(toggle => {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  })
})