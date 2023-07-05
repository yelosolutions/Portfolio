import React from 'react'

const About = () => {
    return (
        <section id='about' className='justify-center content-center text-center h-screen'>
            <h2 className="section_title">About</h2>
            <div className="about">
                <div className="about_left">
                    <img src="../assets/about.png" alt="about pic" />
                </div>

                <div className="about_right">
                    <p className='section_info'>
                    I am a full-stack Web Developer with a passion for AI, Data Analysis and Data Visualization.
                    Apart from developing amazing software, I like to draw and paint. 
                    Sometimes I feel like if I was not into Web Development I would have probably been an artist.
                    Whenever I am not doing any of the above, I usually ponder about how and why the universe is as it is, 
                    call it philosophical inquiry. I end up stargazing.
                    ”I am something of a philosopher myself!”
                    *insert Willem Dafoe’s voice(from spiderman)*
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default About