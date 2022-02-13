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
    const notic = modal.querySelector('.notice')
    const classModalForm = modal.querySelector('.modal__form')

    function overflow() {
        if (modal.classList.contains('modal__hidden')) {
            document.querySelector('body').style.overflow = 'overlay';
        } else {
            document.querySelector('body').style.overflow = 'hidden';
        }
    }
    overflow()

    function modalOpen() {
        modal.classList.remove('modal__hidden')
        modal.classList.add('modal__show-animate')
        overflow()
        setTimeout(() => {
            modal.classList.remove('modal__show-animate')
        }, 500)
    }

    function modalHide() {
        modal.classList.add('modal__hidden-animate')
        setTimeout(() => {
            modal.classList.remove('modal__hidden-animate')
            modal.classList.add('modal__hidden')
            overflow()
            classModalForm.classList.remove('modal__hidden')
            notic.classList.remove('modal__show')
        }, 500)
    }

    function closeModal() {
        setTimeout(() => {
            modalHide()
            setTimeout(() => {
                classModalForm.classList.remove('modal__hidden')
                notic.classList.remove('modal__show')
            }, 500)
        }, 3000)
    }

    function notice() {
        modalHide()
        setTimeout(() => {
            classModalForm.classList.add('modal__hidden')
            notic.classList.add('modal__show')
            modalOpen()
        }, 500)
        closeModal()
    }

    open.forEach(btn => {
        btn.addEventListener('click', modalOpen)
    })

    close.addEventListener('click', modalHide)


    // form
    const modalForm = document.querySelector('#modalForm')
    const consultation = document.querySelector('#consultation')
    const order = document.querySelector('#order')

    modalForm.addEventListener('submit', () => formSend('mailer/smartModal.php', modalForm))
    consultation.addEventListener('submit', () => formSend('mailer/smartConsultation.php', consultation))
    order.addEventListener('submit', () => formSend('mailer/smartOrder.php', order))

    async function formSend(url, form) {
        window.event.preventDefault()

        let formData = new FormData(form)
        let response = await fetch(url, {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            form.reset();
            notice()
        } else alert('Error')
    }


    // mask tel
    const elements = document.querySelectorAll('input[type=tel]');
        for (var i = 0; i < elements.length; i++) {
        new IMask(elements[i], {
            mask: '+{7} (000) 000-00-00',
        });
    }

  });