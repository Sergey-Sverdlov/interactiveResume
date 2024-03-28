import {meta, shopify, starbucks, tesla} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    postgresql,
    nginx,
    qoollo,
    school,
    bmstu,
    telegram
} from "../assets/icons";

export const skills = [
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: css,
        name: "CSS3",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },

    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Backend"
    },
    {
        imageUrl: nginx,
        name: "NGINX",
        type: "Backend"
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "QOOLLO",
        icon: qoollo,
        iconBg: "#accbe1",
        date: "Октябрь 2022 - Декабрь 2023",
        points: [
            "Реализовал интерфейс авторизации пользователя в личном кабинете с использованием React,\n" +
            "TypeScript, Redux для 80 человек в компании.",
            "Спроектировал backend и frontend CRM сервиса для сотрудников на Express и React с загрузкой и\n" +
            "получением информации о клиентах и результатах взаимодействия с ними (Rest API, JWT токены)",
            "Переделал MPA веб-приложение в SPA для просмотра списка дел, увеличил вовлеченность\n" +
            "пользователей на 20%.",
            "Оптимизировал серверную часть на Node JS для API согласно документации Swagger, ускорил\n" +
            "обработку запросов на 5%.",
            "Создал адаптивные версии веб-приложения списка дел для различных устройств, увеличил количество\n" +
            "пользователей на 10% и среднее время пребывания на 35%.",
            "Произвел SEO оптимизацию проекта, улучшил метрики Web Vitals на 15% и увеличил usability сайта на\n" +
            "10%.",
            "Принимал участие в создании стоматологического проекта на Three js для более 200 стоматологий.",
            "Переписал устаревшие классовые компоненты на функциональные, улучшил читаемость кода.",
            "Исправил ошибки анимации компонента при scroll и drag and drop, возникающие у 30% пользователей.",
            "Тестировал код компонентов и бизнес-логики, исправил более 30 критических ошибок.",
        ],
    },
    {
        title: "Full stack Разработчик",
        company_name: "МГТУ им Н.Э.Баумана",
        icon: bmstu,
        iconBg: "#b7e4c7",
        date: "Август 2022 - Декабрь 2022",
        points: [
            "Создал SPA приложение для покупки образовательных курсов согласно REST API с подключением к\n" +
            "базе данных PostgreSQL и написал документацию Swagger. Сервисом воспользовались более 100\n" +
            "студентов.",
            "Разработал backend архитектуру приложения на Node.js с использованием ORM Sequelize,\n" +
            "авторизацией̆ через JWT токен для эффективного взаимодействие с проектом.",
            "Написал запросы к базе данных с асинхронной загрузкой сайта, ускорил работу проекта на 30%.",
            "Создал макеты приложения для различных устройств в Figma с анимацией и переходами.",
        ],
    },
    {
        title: "Преподаватель программирования",
        company_name: "ГБОУ 1517",
        icon: school,
        iconBg: "#fbc3bc",
        date: "Сентябрь 2022 - Февраль 2024",
        points: [
            "Объяснение материала.",
            "Обучение алгоритмов и разработки программ на языке Python и JavaScript",
            "Подготовка к выпускным экзаменам по информатике и олимпиадам",
            "Рефакторинг чужого кода",
            "Тестирование и объяснение ошибок",
            "Обучение технологиям WEB-разработки для создания SPA приложений"
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/interactiveResume/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sergey-Sverdlov',
    },
    {
        name: 'Telegram',
        iconUrl: telegram,
        link: 'https://t.me/serega_sverdlov',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Магазин курсов',
        description: 'Rest API для магазина курсов с возможностью авторизации через JWT токен ' +
            'и доступом управления к курсам у администратора',
        link: 'https://github.com/Sergey-Sverdlov/APICourse',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Страница современной методы оплаты',
        description: 'Сайт, содержащий информацию о новом методе оплаты, написанный на React.JS',
        link: 'https://github.com/Sergey-Sverdlov/InnovPay',
        WebSite: 'https://innovpay.netlify.app',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Аниме фильмы',
        description: 'Приложение для просмотра популярных аниме, использующее фреймфорк Next Js 13.',
        link: 'https://github.com/Sergey-Sverdlov/NextJS',
        WebSite: 'https://animenextjs.netlify.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Сервис аренды автомобилей',
        description: 'Сервис для аренды автомобиля с возможностью фильтрации и выбора нужного авто на определенный срок.',
        link: 'https://github.com/Sergey-Sverdlov/CarsApp',
        WebSite: 'https://carsfilterapp.netlify.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Интернет-магазин ',
        description: 'Разработан интернет-магазин с возможностью добавлением товара. Используется TypeScript и React.JS.',
        link: 'https://github.com/Sergey-Sverdlov/ShopReactApp',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Автомобили',
        description: 'Приложения для просмотра информации о популярных автомобилях.',
        link: 'https://github.com/Sergey-Sverdlov/CarsPageLayout',
        WebSite: 'https://carspagelayout.netlify.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Университеты',
        description: 'Полноценный сервис для просмотра информации и сравнения различных университетов с возможностью ' +
            'регистрации и личным кабинетом.',
        link: 'https://github.com/Sergey-Sverdlov/DataBaseUniversity',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Напиши.Пост',
        description: 'Сервис, позволяющий просматривать и добавливать собственные посты.',
        link: 'https://github.com/Sergey-Sverdlov/ReactApiPosts',
        WebSite: 'https://createposts.netlify.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Планирование задач',
        description: 'Сервис, позволяющий добавлять дела, изменять их и удалять с использованием технологии Redux.',
        link: 'https://github.com/Sergey-Sverdlov/Redux',
        WebSite: 'https://todoreduxposts.netlify.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Погода',
        description: 'Веб-сайт для просмотра погоды в выбранном городе.',
        link: 'https://github.com/Sergey-Sverdlov/WeatherApp',
        WebSite: 'https://weather-siteapp.netlify.app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Генератор случайных имен',
        description: 'Приложение для выбора случайного имени.',
        link: 'https://github.com/Sergey-Sverdlov/WebPack',
        WebSite: 'https://generaternames.netlify.app',
    },


];