import('./scripts/themeToggle.js');
import('./scripts/copyright.js')

// Tabs

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
