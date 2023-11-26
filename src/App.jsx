import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home, About, Projects, Contact} from "../src/pages/index"

const App = () => {
    return (
        <main className="whitespace-nowrap overflow-hidden scrollbar-hide">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </main>
    );
};
export default App;
