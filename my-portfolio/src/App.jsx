import React from 'react'
import './App.css'
import Navbar from './navbar'

const App = () => {
    return (
        <div className="main">
            <Navbar/>
            <div className="pt-20">
                <section id="hero" className="h-screen">
                    <h2>Hero</h2>
                </section>
                <section id="about" className="h-screen">
                    <h2>About</h2>
                </section>
                <section id="projects" className="h-screen">
                    <h2>Projects</h2>
                </section>
                <section id="contact" className="h-screen">
                    <h2>Contact</h2>
                </section>
            </div>
        </div>
    )
}

export default App