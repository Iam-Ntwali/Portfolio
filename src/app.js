import('./scripts/copyright.js')

// THEME SWITCHER
// Theme Switcher Logic
const toggleTheme = document.querySelector('#theme-toggle__btn');

// Check if a theme is stored in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the stored theme if it exists
if (currentTheme) {
  document.body.classList.add(currentTheme);
  toggleTheme.textContent = currentTheme === 'light-mode' ? '🌑' : '☀';
}

// Function to handle theme toggle
const handleThemeToggle = () => {
  const isLightMode = document.body.classList.toggle('light-mode');

  if (isLightMode) {
    localStorage.setItem('theme', 'light-mode');
    toggleTheme.textContent = '🌑';  // Change icon to moon for light mode
  } else {
    localStorage.removeItem('theme');
    toggleTheme.textContent = '☀';  // Change icon to sun for dark mode
  }
};

// Add event listener to the toggle button
toggleTheme.addEventListener('click', handleThemeToggle);

// TABS
// Debounce function to improve performance
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const tabsButtons = document.querySelectorAll('.tab-btn');
const tabsContent = document.querySelectorAll('.tab-content');

tabsButtons.forEach(tabBtn => {
  tabBtn.addEventListener('click', debounce(() => {
    tabsButtons.forEach(btn => btn.classList.remove('active_tab'));
    tabBtn.classList.add('active_tab');
    tabsContent.forEach(content => content.classList.add('hidden'));
    const tabId = tabBtn.id + 'Section';
    document.getElementById(tabId).classList.remove('hidden');
  }));
});


const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
