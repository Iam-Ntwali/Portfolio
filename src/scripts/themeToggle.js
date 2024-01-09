const toggleTheme = document.querySelector('.theme-toggle');
// console.log(toggleTheme);

toggleTheme.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

})
