import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import {Home, About, Projects, Contact} from "../src/pages/index"

const App = () => {
    return (
        <main className="bg-slate-300/20 h-full ">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/interactiveResume/" element={<Home/>}/>
                    <Route path="interactiveResume/about" element={<About/>}/>
                    <Route path="interactiveResume/projects" element={<Projects />}/>
                    <Route path="interactiveResume/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </main>
    );
};
export default App;
