let currentYear = document.querySelector('#currentYear');

const getCurrentYear = new Date().getFullYear();

currentYear.textContent = getCurrentYear;