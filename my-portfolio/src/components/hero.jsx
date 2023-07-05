import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='hero'>
            <div className="hero_left">
                <div className="profile">
                    <img src="../assets/profile.png" alt="" />
                </div>
                <div className="name">
                    <span>Joseph </span>
                    Rono
                </div>
                <h2 className='indigo_gradient font-extrabold text-3xl'>Web Developer</h2>
                
            </div>
            <div className="hero_right">
                <div className="greeting">
                    <h2 className='indigo_gradient font-extrabold text-4xl'>Hi, there!</h2>
                    <img src="../assets/hand.png" alt="" />
                </div>
                <p className='hero_info'>Welcome! 
                You are here because you need to know what I have to offer. 
                Seat tight my friend, I am your captain now.</p>
            </div>
            
        </section>
    )
}

export default Hero