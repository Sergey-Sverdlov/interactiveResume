import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">SS</p>
            </NavLink>
            <nav className="flex text-lg gap-12 font-medium max-[400px]:flex-col ">
                <NavLink to="/about" className={({isActive}) => !isActive ? 'text-blue-500' : 'text-black'}>
                    <p>Информация</p>
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => !isActive ? 'text-blue-500' : 'text-black'}>
                    <p>Проекты</p>
                </NavLink>
                <NavLink to="/contact" className={({isActive}) => !isActive ? 'text-blue-500' : 'text-black'}>
                    <p>Связаться со мной</p>
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
