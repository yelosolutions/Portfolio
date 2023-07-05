import React, {useState} from 'react'

const Contact = () => {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text, email, message);
        setEmail('');
        setText('');
        setMessage('');
    };
    return (
        <section id="contact" className="contact">
            <div className="contact_img">
                <img src="../assets/contact.png" alt="about pic" />
            </div>
            <div className="container mx-auto bg-indigo-50 rounded-sm shadow-md p-3">
                <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
                <p className="text-center text-indigo-600 mb-8">Kindly, feel free to reach out via email.</p>
                <div className="max-w-md mx-auto">
                    <p className="text-center text-lg font-semibold mb-4">Email: ronokamau@gmail.com</p>
                    <form className="mb-4" onSubmit={handleSubmit}>
                        <label className="label_style" htmlFor="name">Name</label>
                        <input 
                            className="input_style" 
                            type="text" 
                            id="name"
                            placeholder='Enter name'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            name="name" 
                            required/>
                        <label className="label_style" htmlFor="email">Email</label>
                        <input 
                            className="input_style" 
                            type="email" 
                            id="email"
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" 
                            required/>
                        <label className="label_style" htmlFor="message">Message</label>
                        <textarea 
                            className="text_area" 
                            id="message"
                            placeholder="What's on your mind?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message" 
                            rows="4" 
                            required
                        >
                        </textarea>
                        <button className="btn" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;