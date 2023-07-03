import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

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
                <a href="#contact">Contact</a>
            </div>
            <div className="media">
                <a href="#"><FontAwesomeIcon
                    color='gray'
                    icon={faGithub} /></a>
                <a href="#"><FontAwesomeIcon
                    color='#00aced'
                    icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon
                    color='#007bb6'
                    icon={faLinkedinIn} /></a>
            </div>
        </nav>
    )
}

export default Navbar