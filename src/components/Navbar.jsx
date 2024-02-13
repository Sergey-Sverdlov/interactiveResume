import React from 'react';
import {NavLink} from "react-router-dom";
import {github} from "../assets/icons";
import {github_link} from "../assets/icons"

const Navbar = () => {
    return (
        <header className="header items-center ">
            <NavLink to="/interactiveResume/"
                     className="w-10 h-10 rounded-lg bg-white items-center justify-center flex flex-col
                          font-bold shadow-md items-center">
                <p className="blue-gradient_text">SS</p>
            </NavLink>
            <nav
                className="flex text-2xl gap-12 font-medium max-[600px]:flex-col max-[600px]:gap-0 max-[600px]:text-xl justify-center">
                <NavLink to="/interactiveResume/about"
                         className={({isActive}) => !isActive ? 'text-blue-900' : 'text-black'}>
                    <p>Информация</p>
                </NavLink>
                <NavLink to="/interactiveResume/projects"
                         className={({isActive}) => !isActive ? 'text-blue-900 ' : 'text-black'}>
                    <p>Проекты</p>
                </NavLink>
                <NavLink to="/interactiveResume/contact"
                         className={({isActive}) => !isActive ? 'text-blue-900 ' : 'text-black'}>
                    <p>Связаться со мной</p>
                </NavLink>
                <a href="https://github.com/Sergey-Sverdlov" target="_blank"
                         className={'text-black-900'}>
                    <p>Github Profile</p>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
