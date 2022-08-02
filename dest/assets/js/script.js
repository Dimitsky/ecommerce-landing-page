document.documentElement.classList.add('js');

const menuEl = document.querySelector('#main-menu');
const triggerEl = document.querySelector('#trigger-menu')

function openMenu() {
    triggerEl.setAttribute('aria-expanded', 'true');
    menuEl.classList.add('open');
}

function closeMenu() {
    triggerEl.setAttribute('aria-expanded', 'false');
    menuEl.classList.remove('open');
}

function triggerHandle(event) {
    const isExpanded = this.getAttribute('aria-expanded') === 'true' ? true : false;

    if (isExpanded) {
        closeMenu();
    } else {
        openMenu();
    }

    if (event.type === 'touchstart') {
        event.preventDefault();
    }
}

triggerEl.addEventListener('click', triggerHandle);
triggerEl.addEventListener('touchstart', triggerHandle);