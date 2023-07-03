import React from 'react'
import './App.css'
import Navbar from './navbar'
import Projects from './projects'

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
                <section id="about" className="">
                    <h2 className='section_title'>About</h2>
                </section>
                <Projects/>
                <section id="contact" className="h-screen">
                    <h2 className='section_title'>Contact</h2>
                </section>
            </div>
            
        </main>
    )
}

export default App