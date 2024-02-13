import React from 'react';
import {skills, experiences, socialLinks} from "../constants";

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">Рад знакомству<br/> <span className="blue-gradient_text font-semibold
            drop-shadow">Меня зовут Сергей!</span>
                <br/>
                Добро пожаловать на мое WEB-портфолио</h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
                <p>
                    Создаю Frontend SPA веб-сайты на React.JS и занимаюсь backend
                    проектированием на Node.JS. <br/>
                    Преподаю программирование для детей и взрослых по самым современным и
                    востребованным направлениям в web-разработки. <br/>
                    Более 10 реализованных собственных и коммерческих проектов с использованием WEB-3 технологий.
                    Выпускник МГТУ им. Баумана по специальности "Программная инженерия"
                </p>
                <div className="py-10 flex flex-col">
                    <h3 className="subhead-text text-center">Ключевые навыки </h3>
                    <div className="mt-16 flex flex-wrap gap-16">
                        {skills.map((skill) => (
                            <div className="block-container w-28 h-28">
                                <div className="btn-back rounded-x1"/>
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

                <div className="py-16">
                    <h3 className="subhead-text">Стаж работы</h3>
                    <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
                        <p>
                            Обладаю многолетним опытом в проектировании, разработки и внедрении WEB-технологий
                            в самых различных отраслях.
                            Большое количество собственных и коммерческих проектов с использованием самых современных
                            WEB-3 технологий.
                            Являюсь выпускником университета им. Баумана по направлению "Программная инженерия"
                            Более пяти лет являюсь преподавателем программирования для людей со всего мира!
                            Люблю изучать новое, реализовывать идеи согласно ТЗ, объяснять и помогать с
                            web-программированием.
                        </p>
                    </div>
                    <div className="nt-12 flex">
                        <VerticalTimeline>
                            {experiences.map((experience) => (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    icon={
                                        <div className="flex justify-center items-center w-full h-full">
                                            <img
                                                src={experience.icon}
                                                alt={experience.company_name}
                                                className="w-[60%] h-[60%] object-contain"
                                            />
                                        </div>}
                                    iconStyle={{background: experience.iconBg}}
                                    contentStyle={{
                                        borderBottom: '8px',
                                        borderStyle: 'solid',
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: 'none'
                                    }
                                    }>
                                    <div>
                                        <h3 className="text-black text-xl
                                        font-poppis font-semibold">
                                            {experience.title}
                                        </h3>
                                        <p className="text-black-500 font-medium
                                        font-base" style={{margin: 0}}>
                                            {experience.company_name}
                                        </p>
                                    </div>
                                    <ul className="my-5 list-disc ml-5 space-y-2">
                                        {experience.points.map((point, index) => (
                                            <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1
                                            text-sm">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
            <hr className="border-slate-200"/>
            <CTA/>

        </section>
    );
};

export default About;
