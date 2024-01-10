const toggleTheme = document.querySelector('#theme-toggle__btn');
// console.log(toggleTheme);
// state
const theme = localStorage.getItem('theme');

//on mount
theme && document.body.classList.add(theme);

const handleThemeToggle = () => {
  document.body.classList.toggle('light-mode');

  // keep theme state on document load
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light-mode');
  } else {
    localStorage.removeItem('theme');
    document.body.removeAttribute('class');
  }
}

toggleTheme.addEventListener('click', handleThemeToggle)