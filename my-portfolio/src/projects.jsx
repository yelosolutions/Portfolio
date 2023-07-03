import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className='justify-center content-center h-screen text-center' >
            <h2 className='section_title'>Projects</h2>
            <article className='project'>
                <img src="../assets/intelli.PNG" alt="" />
                <h4 className='project_title'>Intellisumm</h4>
                <p className='project_info'>Intellisumm is an AI article summarizer. 
                    It leverages OpenAI’s API through RapidAPIs to provide users with exceptional summarization experience!
                </p>
            </article>
        </section>
    )
}

export default Projects