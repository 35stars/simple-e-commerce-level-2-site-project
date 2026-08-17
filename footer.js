
let footer = document.querySelector('footer');
/* scroll event */
window.addEventListener('scroll', () => {

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 5) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }

});