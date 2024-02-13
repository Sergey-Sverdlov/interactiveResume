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
        imageUrl: javascript,
        name: "JavaScript",
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
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
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
        company_name: "Qoollo",
        icon: qoollo,
        iconBg: "#accbe1",
        date: "Июль 2023 - Декабрь 2023",
        points: [
            "Разработка интерфейсов с применением современных frontend - технологий, таких как React, NextJS, Redux ToolKit и TailWind",
            "Взаимодействие с Backend (Rest API, работа с JWT токенами при авторизации и выборе роли пользователей, отправка и валидация форм)",
            "Верстка макетов различной сложности, используя технологии БЭМ, препроцессоры SCSS, модули CSS",
            "Кроссбраузерная верстка.",
            "Работа с современными WEB API и JS библиотеками",
            "Помощь в написании серверной части на Node JS и Express",
            "Pixel Perfect"
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
    {
        title: "Full stack Разработчик",
        company_name: "МГТУ им Н.Э.Баумана",
        icon: bmstu,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Создание SPA приложения согласно REST API с подключением к собственной базе данных PostgreSQL и написанием " +
            "документацией Swagger",
            "Разработка backend части приложение на Node.js с использованием ORM Sequelize, авторизацией через JWT токен",
            "Написание асинхронного кода для запросов к базе данных и последующая отправка на сайт",
            "Разработка интерфейса приложения на React, используя TypeScript, TailWind и MUI",
            "Создание макетов сайта в Figma с компонентами",
            "Использование SASS, HTML, CSS"
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
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Аниме фильмы',
        description: 'Приложение для просмотра популярных аниме, использующее фреймфорк Next Js 13.',
        link: 'https://github.com/Sergey-Sverdlov/NextJS',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Сервис аренды автомобилей',
        description: 'Сервис для аренды автомобиля с возможностью фильтрации и выбора нужного авто на определенный срок.',
        link: 'https://github.com/Sergey-Sverdlov/CarsApp',
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
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Планирование задач',
        description: 'Сервис, позволяющий добавлять дела, изменять их и удалять с использованием технологии Redux.',
        link: 'https://github.com/Sergey-Sverdlov/Redux',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Погода',
        description: 'Веб-сайт для просмотра погоды в выбранном городе.',
        link: 'https://github.com/Sergey-Sverdlov/WeatherApp',
    },


];