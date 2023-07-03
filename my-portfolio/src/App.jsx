import React from 'react';
import './App.css';
import Navbar from './navbar';
import Projects from './projects';
import About from './about';
import Contact from './contact';

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
                
            </div>
            <div className="app">
                <Navbar/>
                <section id="hero" className="h-screen">
                    <h2 className='section_title'>Hero</h2>
                </section>
                <About/>
                <Projects/>
                <Contact/>
            </div>
            
        </main>
    )
}

export default App