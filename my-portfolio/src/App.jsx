import React from 'react';
import './App.css';
import Navbar from './navbar';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Hero from './hero';

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
                
            </div>
            <div className="app">
                <Navbar/>
                <Hero/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
            
        </main>
    )
}

export default App