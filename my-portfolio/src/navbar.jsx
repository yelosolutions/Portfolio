import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                Yelo
                <span>Solutions</span>
            </div>
            <div className="links">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contacts</a>
            </div>
            <div className="media">
                <ul>
                    <li>
                        <a href="#"><i className='fab fa-facebook'></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='fab fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='fab fa-instagram'></i></a>
                    </li>
                    <li>
                        <a href="#"><i className='fab fa-github'></i></a>
                    </li>
                    
                </ul>
            </div>
                
        </nav>
    )
}

export default Navbar