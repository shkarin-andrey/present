document.addEventListener('DOMContentLoaded', () => {
    
    // menu
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active')

        if (hamburger.classList.contains('hamburger-active')) {
            menu.classList.add('menu-active')
        } else {
            menu.classList.remove('menu-active')
        }
    });


    // scroll
    document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

});