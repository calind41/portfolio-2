import React, { useState } from 'react'
import './Footer.css'
import axios from 'axios'

export default function Footer({ mode }) {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const sendEmail = async (evt) => {
        evt.preventDefault();

        if (message.length === 0) {
            alert('Please enter a message');
            return;
        }

        let isValid = validateEmail(to);
        if (isValid) {
            console.log('is valid')
            try {
                setName('');
                setSubject('');
                setTo('');
                setMessage('');
                await axios.post('https://calindodon.site/send', { name, subject, to, message });
            }
            catch (err) {
                console.log(err);
            }

        }
        else {
            alert('Please enter a valid email');
        }





    }

    return (
        <div className={mode === 'light' ? 'footer' : 'footer footer-dark'}>
            <h2 className={mode === 'light' ? '' : 'h2-dark'}>Get In Touch</h2>
            <form className={mode === 'light' ? '' : 'form-dark'}>
                <label for='name'>Name</label>
                <input onChange={e => setName(e.target.value)} type='text' id='name' value={name} />
                <label for='subject'>Subject</label>
                <input onChange={e => setSubject(e.target.value)} type='text' id='subject' value={subject} />
                <label for='email'>Email</label>
                <input onChange={e => setTo(e.target.value)} type='email' id='email' value={to} />
                <label for='text'>Message</label>
                <textarea onChange={e => setMessage(e.target.value)} id='text' value={message}></textarea>
                <button onClick={sendEmail}>Send</button>
            </form>
        </div>
    )
}
