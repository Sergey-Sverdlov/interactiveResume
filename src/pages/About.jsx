import React from 'react';
import {skills} from "../constants";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">Меня зовут <span className="blue-gradient_text font-semibold
            drop-shadow">Сергей!</span>
                <br/>
                Добро пожаловать на мое WEB-портфолио</h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Обожаю Frontend разработку на React.JS и занимаюсь backend
                    проектированием на Node.JS. <br/>
                    Преподаватель программирования для детей и взрослых по самым современным и
                    востребованным направлениям в web-разработки. <br/>
                    Более 10 реализованных проектов с использованием WEB-3 технологий. <br/>
                    Выпускник МГТУ им. Баумана по специальности "Программная инженерия"
                </p>
                <div className="py-10 flex flex-col">
                    <h3 className="subhead-text text-center">Ключевые навыки </h3>
                    <div className="mt-16 flex flex-wrap gap-16">
                        {skills.map((skill) => (
                            <div className="block-container w-28 h-28">
                                <div className="btn-back rounded-x1" />
                                <div className="btn-front rounded-x1 flex flex-col  justify-center items-center">
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className="w-1/2 h-1/2 object-contain cursor-pointer"
                                        title={skill.name}
                                    />
                                    <div>
                                        {skill.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
