const btnMenu = document.querySelector('.btn-menu');
const dropdown = document.querySelector('.nav-content');

btnMenu.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display !== 'block' ? 'block' : 'none';
});