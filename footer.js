let header = document.querySelector('header')
let footer = document.querySelector('footer');
/* scroll event */
window.addEventListener('scroll', () => {

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 5) {
        footer.classList.add('show');
        header.style.display = 'none'
        return
    } 
    header.style.display = 'block'
    footer.classList.remove('show');
});
