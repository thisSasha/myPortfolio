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
    document.querySelector('.nav__social').classList.toggle('nav__social_active');
    document.querySelector('.nav__links').classList.toggle('nav__links_active');
    document.querySelector('.nav__gamburger').classList.toggle('nav__gamburger_active');
};


let exp = new Date().getFullYear() - 2021;
exp += exp < 4 ? ' года' : ' лет';
document.querySelector('#exp').innerHTML = exp;

let age = new Date().getFullYear() - 2012;
document.querySelector('#age').innerHTML = age;










let slides = 3;

if (window.innerWidth < 768) {
    slides = 1;
};




function myMedia() {
    document.querySelector('.about__h').style.top = ((document.querySelector('.about__foto').clientHeight / 2) - (document.querySelector('.about__h').clientHeight / 2)).toString() + 'px';
};

myMedia();







let works = [
    {
        name: 'Список задач',
        link: 'https://thissasha.github.io/toDoList',
        description: 'REACT project. Темы, минимализм, функции.'
    },
    {
        name: 'Опрос',
        link: 'https://thissasha.github.io/opros',
        description: 'Это опрос, как нужно питаться. Я вижу ответы и статистику. Таким же способом можно делать формы заказов.'
    },
    {
        name: 'Форма заказов',
        link: 'https://thissasha.github.io/form/',
        description: 'Турецкая компания по готовке и доставке еды заказала эту форму за 25$.',
    },
    {
        name: 'Шаблоны JavaScript',
        link: 'https://thissasha.github.io/shablons/',
        description: 'Мой пет-проект с шаблонами для программистов. Документация в разработке.',
    },
    {
        name: 'Угадай число',
        link: 'https://thissasha.github.io/seekNum/',
        description: 'Простой сайт угадай число за 3 попытки. Программисты могут "угадать" число с одной попытки.',
    },
    {
        name: 'Лендинг "Финансы и налоги"',
        link: 'https://fin-nal.by',
        description: '',
    },
    {
        name: 'Рандомные гонки',
        link: 'https://is.gd/randRace',
        description: 'Это простая игра - ты ставишь ставку на машину, и если она победила, ты получаешь очки. На её создание ушло много времени - было много багов, да и работы немало',
    },
];

works.forEach(el => {
    let work = document.createElement('div');
    work.className = 'swiper-slide project-item';
    work.innerHTML = `<h4 title="${el.description}">${el.name}</h4>`;
    work.onclick = function () {
        setTimeout(() => {window.open(el.link)}, 1000);
    };
    work.title = el.description;
    document.querySelector('.swiper-wrapper').appendChild(work);
});




let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    slidesPerView: 3,
    spaceBetween: '15%',

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