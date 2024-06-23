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

let now = new Date().getFullYear();
document.querySelector('#now').innerHTML = now;










// let slides = 3;

// if (window.innerWidth < 768) {
//     slides = 1;
// };




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
        description: 'Сайт компании "Финансы и налоги"',
    },
    {
        name: 'Рандомные гонки',
        link: 'https://is.gd/randRace',
        description: 'Это простая игра - ты ставишь ставку на машину, и если она победила, ты получаешь очки. На её создание ушло много времени - было много багов, да и работы немало',
    },
];

works.forEach(el => {
    document.querySelector('.projects__list').innerHTML += `
<a href='${el.link}'><div class="projects__item">
    <h3>${el.name}</h3>
    <p class="scills__text">${el.description}</p>
</div></a>
`;

});



document.querySelector('.arrows__right').onclick = function () {
    let list = document.querySelector('.projects__list');
    list.scrollTo({
        left: list.scrollLeft + document.querySelector('.projects__item').clientWidth + 20,
        behavior: 'smooth'
    })
};

document.querySelector('.arrows__left').onclick = function () {
    let list = document.querySelector('.projects__list');
    list.scrollTo({
        left: list.scrollLeft - (document.querySelector('.projects__item').clientWidth + 20),
        behavior: 'smooth'
    })
};




document.querySelectorAll('.form__item input').forEach(el => {
    el.addEventListener('focus', () => {
        el.parentNode.classList.add('input_focus')
    });
    el.onblur = () => {
        if (!el.value) {
            el.parentNode.classList.remove('input_focus')
        };
    };
});


document.querySelectorAll('.form__item textarea').forEach(el => {
    el.addEventListener('focus', () => {
        el.parentNode.classList.add('input_focus')
    });
    el.onblur = function (e) {
        if (!el.value) {
            el.parentNode.classList.remove('input_focus')
        };
    };
});





// let swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     slidesPerView: 3,
//     spaceBetween: '15%',

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });