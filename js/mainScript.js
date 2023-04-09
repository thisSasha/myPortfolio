document.querySelectorAll('a[href^="#N"]').forEach(link => {
    link.onclick = function (e) {
        if (document.querySelector('.nav__links').classList.contains('nav__links_active')) {
            document.querySelector('.nav__links').classList.toggle('nav__links_active');
            document.querySelector('.nav__gamburger').classList.toggle('nav__gamburger_active');
        };
        e.preventDefault();
        let href = this.getAttribute('href').substring(2);
        const scrollTarget = document.querySelector(href);
        console.log(document.querySelector(href));
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };
});

document.querySelector('.nav__gamburger').onclick = function () {
    document.querySelector('.nav__links').classList.toggle('nav__links_active');
    document.querySelector('.nav__gamburger').classList.toggle('nav__gamburger_active');
};


let exp = new Date().getFullYear() - 2021;
// document.querySelector('#exp').innerHTML = exp;

let age = new Date().getFullYear() - 2012;
document.querySelector('#age').innerHTML = age;
let slides = 3;
if(window.matchMedia('(max-width: 768px)')){
    slides = 1;
};

let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    effect: 'coverflow',
    slidesPerView: slides,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});