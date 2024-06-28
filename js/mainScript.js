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





let exp = new Date().getFullYear() - 2021 + ((new Date().getMonth() - 5) > 0 ? '.5' : '');
exp += exp < 4 ? ' года' : ' лет';
document.querySelector('#exp').innerHTML = exp;

let age = new Date().getFullYear() - 2012;
document.querySelector('#age').innerHTML = age;

let now = new Date().getFullYear();
document.querySelector('#now').innerHTML = now;






document.querySelector('.about__h').style.top = ((document.querySelector('.about__foto').clientHeight / 2) - (document.querySelector('.about__h').clientHeight / 2)).toString() + 'px';






















let works = [
    {
        name: 'Список задач',
        link: 'https://thissasha.github.io/toDoList',
        description: 'React pet-project. Темы, минимализм, функции.'
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















document.querySelector('.arrows__right').onclick = arrows;
document.querySelector('.arrows__left').onclick = arrows;


document.onscroll = function () {
    if (window.scrollY > 600) {
        document.querySelector('.about').classList.remove('_noscroll');
    };

    if (window.scrollY > 1150) {
        document.querySelector('.scills').classList.remove('_noscroll');
    };

    if (window.scrollY > 1700) {
        document.querySelector('.projects').classList.remove('_noscroll');
    };
};


document.onscroll();













function arrows(e) {
    let list = document.querySelector('.projects__list');
    let lft = document.querySelector('.projects__item').clientWidth + 20;
    if (e.target.className.includes('left')) {
        lft = -lft;
    };
    list.scrollTo({
        left: list.scrollLeft + lft,
        behavior: 'smooth'
    });
};










document.querySelectorAll('.form__item input, .form__item textarea').forEach(el => {
    el.addEventListener('focus', () => {
        el.parentNode.classList.add('input_focus')
    });
    el.onblur = () => {
        if (!el.value) {
            el.parentNode.classList.remove('input_focus')
        };
    };
});
