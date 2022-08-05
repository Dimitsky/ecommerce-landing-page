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

// 


// explore swiper 

const bestsellersOpts = {
    slidesPerView: 2, 
    spaceBetween: 15, 
    pagination: {
        el: '.pagination-swiper-bestsellers', 
        bulletActiveClass: 'pagination-swiper-bestsellers--active', 
        bulletClass: 'pagination-swiper-bestsellers__bullet', 
        currentClass: 'pagination-swiper-bestsellers--current', 
    }, 
};
let bestsellersSwiper = null;

// 

// explore swiper 

const trendsOpts = {
    slidesPerView: 2, 
    spaceBetween: 15, 
    pagination: {
        el: '.pagination-swiper-trends', 
        bulletActiveClass: 'pagination-swiper-trends--active', 
        bulletClass: 'pagination-swiper-trends__bullet', 
        currentClass: 'pagination-swiper-trends--current', 
    }, 
};
let trendsSwiper = null;

// matchmedia

const mq = window.matchMedia('(min-width: 1440px)');

mq.addEventListener('change', event => {
    if (event.matches) {
        bestsellersSwiper = new Swiper('.swiper-bestsellers', bestsellersOpts);
        trendsSwiper = new Swiper('.swiper-trends', trendsOpts);
    } else {
        bestsellersSwiper.destroy(true, true);
        trendsSwiper.destroy(true, true);
    }
})

if (mq.matches) {
    bestsellersSwiper = new Swiper('.swiper-bestsellers', bestsellersOpts);
    trendsSwiper = new Swiper('.swiper-trends', trendsOpts);
}