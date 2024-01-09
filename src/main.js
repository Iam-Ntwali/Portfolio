import('./scripts/themeToggle.js');

// Tabs

const tabsButtons = document.querySelectorAll('.tab-btn');
const tabsContent = document.querySelectorAll('.tab-content');

tabsButtons.forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {
    // Remove 'active_tab' class from all buttons
    tabsButtons.forEach(btn => btn.classList.remove('active_tab'));

    // Add 'active_tab' class to the clicked button
    tabBtn.classList.add('active_tab');

    // Hide all tab contents
    tabsContent.forEach(content => content.classList.add('hidden'));

    // Show the corresponding tab content
    const tabId = tabBtn.id + 'Section';
    document.getElementById(tabId).classList.remove('hidden');
  });
});