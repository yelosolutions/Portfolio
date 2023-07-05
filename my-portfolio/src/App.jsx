import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Hero from './components/hero';

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