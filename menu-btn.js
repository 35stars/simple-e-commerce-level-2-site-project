
let menuBtn = document.getElementById('menu-btn')
let ulMenu = document.getElementById('ul-menu')

//=================================
// MOBILE MENU
// ================================
menuBtn.innerText = 'MENU'

let logo = ulMenu.previousElementSibling.firstElementChild

menuBtn.addEventListener('click', () => {

    let isOpen = ulMenu.classList.toggle('open')

    menuBtn.innerText = isOpen ? 'CLOSE' : 'MENU'

    if(isOpen) {
        logo.style.display = 'none'
        return
    }

    logo.style.display = 'block'
});

window.addEventListener('resize',()=>{

    if(!ulMenu.classList.contains('open')){
        logo.style.display = 'block'
    }
    else {
        logo.style.display = 'none'
    }

    if(window.innerWidth >= 768) {
        logo.style.display = 'block'
    }
})

