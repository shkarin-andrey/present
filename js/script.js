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
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });


    // modal
    const modal = document.querySelector('.modal')
    const close = document.querySelector('.modal__close')
    const open = document.querySelectorAll('.js-open')

    function overflow() {
        if (modal.classList.contains('modal__hidden')) {
            document.querySelector('body').style.overflow = 'overlay';
        } else {
            document.querySelector('body').style.overflow = 'hidden';
        }
    }
    overflow()

    function modalOpen(btn) {
        btn.addEventListener('click', () => {
            modal.classList.remove('modal__hidden')
            modal.classList.add('modal__show-animate')
            overflow()
            setTimeout(() => {
                modal.classList.remove('modal__show-animate')
            }, 500)
        })
    }

    function modalHide() {
        modal.classList.add('modal__hidden-animate')
        setTimeout(() => {
            modal.classList.remove('modal__hidden-animate')
            modal.classList.add('modal__hidden')
            overflow()
        }, 500)
    }

    open.forEach(btn => modalOpen(btn))

    close.addEventListener('click', modalHide)


    // form
    const modalForm = document.querySelector('#modalForm')
    modalForm.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault()
        let formData = new FormData(modalForm)
        let response = await fetch('mailer/smart.php', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            modalForm.reset();
            modalHide()
        } else alert('Error')
    }


    // mask tel
    var elements = document.querySelectorAll('input[type=tel]');
        for (var i = 0; i < elements.length; i++) {
        new IMask(elements[i], {
            mask: '+{7}(000)000-00-00',
        });
    }

  });