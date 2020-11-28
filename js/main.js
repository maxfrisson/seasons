const imgBx = document.querySelectorAll('.imgBx');
imgBx.forEach(popup => popup.addEventListener('click', () => {
  popup.classList.toggle('active');
}));


function toggle() {
  const menu = document.querySelector('.menu');
  
  menu.classList.toggle('active');
}