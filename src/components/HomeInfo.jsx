import React from 'react';
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5">
            Меня зовут <span className="font-bold">Сергей!</span> <br/> Добро пожаловать на мою персональную страницу!
            <br/>
            Full-Stack React + Node.js разработчик
        </h1>
    ),
    2: (
        <InfoBox text="Веб-разработчик на React и Node.js.
                Преподаватель программирования.
                 Выпускник факультета ИУ7 МГТУ им.Баумана"
                 link="/interactiveResume/about" btnText="Обо мне"/>
    ),
    3: (
        <InfoBox text="Более 10 собственных проектов WEB-3.
        Занимался разработкой API и базами данных в командах и индивидуально."
                 link="/interactiveResume/projects" btnText="Увидеть портфолио"/>
    ),
    4: (
        <InfoBox text="Всегда открыт к чему-то новому! Давай реализуем твои мечты!"
                 link="/interactiveResume/contact" btnText="Связаться со мной"/>
    )
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null
};

export default HomeInfo;
