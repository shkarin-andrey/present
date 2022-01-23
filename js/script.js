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


});