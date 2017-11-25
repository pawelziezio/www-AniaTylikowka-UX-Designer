const navBars = document.getElementById('navBars');
const mainMenu = document.getElementById('mainMenu');
const nav = document.querySelector('nav')

navBars.addEventListener('click',function(){
  let top = innerWidth > 420 ? '70px' : '50px';
  mainMenu.style.top = top;
  mainMenu.classList.toggle('show');
})
