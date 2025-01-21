const openMenu = document.getElementById('open');
const container = document.querySelector('.container');

openMenu.addEventListener('click', ()=>{
    container.classList.add('show-nav')
})