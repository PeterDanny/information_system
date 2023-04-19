const menubar = document.querySelector('.hamburger')
const icon = document.querySelector('.hamburger i')
const dropDown = document.querySelector('.drop-menu');
let isOpen = false;

const openMenuBar = ()=>{
    dropDown.classList.toggle('open')
    if(dropDown.classList.contains('open')){
        isOpen = true;
    }else{
        isOpen= false;
    }
    if(isOpen){
        menubar.innerHTML = '<i class="fa fa-xmark"></i>'
    }else{
        menubar.innerHTML = '<i class="fa fa-bars"></i>'
    }
}

menubar.addEventListener('click', openMenuBar)