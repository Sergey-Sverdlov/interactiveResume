import React from 'react';
import {projects} from "../constants"
import {arrow} from "../assets/icons"
import {Link} from "react-router-dom";
import CTA from "../components/CTA";

const Projects = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">Мои реализованные <span className="blue-gradient_text font-semibold
            drop-shadow">проекты!</span></h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
                <p>
                    Создаю Frontend SPA веб-сайты на React.JS и занимаюсь backend
                    проектированием на Node.JS. На этой страницу указаны самые основные мои проекты, большинство из них
                    с открытым исходным кодом.
                    Преподаватель программирования для детей и взрослых по самым современным и
                    востребованным направлениям в web-разработки.
                    Более 10 реализованных собственных и коммерческих проектов с использованием WEB-3 технологий.
                    Всегда готов к сотрудничеству!
                </p>
            </div>
            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`bnt-back rounded-x1 ${project.theme}`}/>
                            <div className="btn-front rounded-x1 flex justify-center items-center">
                                <img
                                    src={project.iconUrl}
                                    alt="Project Icon"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <h4 className="text-2xl font-poppins font-semibold">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-slate-500">
                                {project.description}
                            </p>
                            <div className="mt-5 flex items-center gap-2
                            font-poppins">
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-blue-600"
                                >
                                    <img
                                        src={arrow}
                                        alt="arrow"
                                        className="w-4 h-4 object-contain"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-slate-200"/>
            <CTA />
        </section>
    );
};

export default Projects;
