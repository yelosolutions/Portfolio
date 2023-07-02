import React from 'react'
import './App.css'
import Navbar from './navbar'

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>
            <div className="app">
                <Navbar/>
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
        </main>
    )
}

export default App