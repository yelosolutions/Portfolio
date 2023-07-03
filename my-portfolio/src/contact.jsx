import React, {useState} from 'react'

const Contact = () => {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text, email);
        setEmail('');
        setText('');
    };
    return (
        <section id='contact' className='content-between gap-24 justify-center content-center text-center h-screen'>
            <h2 className="section_title">
                Contact
            </h2>
            <div className="contact">
                <div className="contact_img">
                    <img src="../assets/contact.png" alt="about pic" />
                </div>
                <form 
                    action=""
                    onSubmit={handleSubmit}
                    className='flex flex-col items-center content-center justify-center gap-8 w-full p-2 rounded-lg bg-indigo-200 max-h-60'
                >
                    <div className="form">
                        <div className='form_control'>
                        <label 
                            htmlFor="text"
                            className='p-1'
                        >
                            Name
                        </label>
                        <input 
                            type="text"
                            className='bg-indigo-100 rounded-sm w-full p-2'
                            placeholder='Enter name'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        </div>
                        <div className='form_control'>
                            <label 
                                htmlFor="email"
                                className='p-1'
                            >
                                Email
                            </label>
                            <input 
                                type="email"
                                className='bg-indigo-100 rounded-sm w-full p-2'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <button type='submit' className='btn'>
                        <h4>Submit</h4>
                    </button>
                </form>
            </div>
            
        </section>
    )
}

export default Contact