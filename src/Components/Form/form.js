import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './form.css';

export default function Form() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [sentMessage, setSentMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const clearForm = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setUserMessage('');
    }

    const sendEmail = async (event) => {
        event.preventDefault();
        const emailContents = {
            to_name: 'Josh Barnes',
            from_name: `${firstName} ${lastName}`,
            reply_to: email,
            message: userMessage
        }
        try {
            const sentResponse = await
                emailjs.send(
                    'service_q3urom4',
                    'template_fpeipdk',
                    emailContents,
                    'hNNmlDyZ97Yp-4jc5'
                )
            console.log(sentResponse);
            setSentMessage(true);
            clearForm();
        } catch (err) {
            setErrorMessage("Uh Oh, that email wasn't sent. Please contact me at jbarnes439@gmail.com");
            console.log(err);
        }
    }

    return (
        <form
            className={'contact-form'}
            name='contact form'
            aria-label='contact form'
        >
            {sentMessage && !errorMessage &&
                <span className={'thanks-message'}>
                    Thank you for reaching out! I will respond to you via email shortly!
                </span>
            }
            <label htmlFor='Email' className={'contact-form__label'}>Email</label>
            <input
                id='email'
                name='email'
                aria-label='email'
                type='text'
                value={email}
                placeholder='YourEmail@email.com'
                onChange={(e) => setEmail(e.target.value)}
                required
                className={'contact-form__input'}
            />
            <label htmlFor='first name' className={'contact-form__label'}>First Name</label>
            <input
                id='firstname'
                name='firstname'
                aria-label='first name'
                type='text'
                value={firstName}
                placeholder='Bartholomew'
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={'contact-form__input'}
            />
            <label htmlFor='last name' className={'contact-form__label'}>Last Name</label>
            <input
                id='lastname'
                name='lastname'
                aria-label='last name'
                type='text'
                value={lastName}
                placeholder='Hunt'
                onChange={(e) => setLastName(e.target.value)}
                required
                className={'contact-form__input'}
            />
            <label htmlFor='message' className={'contact-form__label'}>Message</label>
            <textarea
                id='message'
                name='message'
                aria-label='message'
                type='text'
                value={userMessage}
                placeholder='I would love to connect and have you build my website!'
                onChange={(e) => setUserMessage(e.target.value)}
                required
                className={'contact-form__textarea'}
            />
            <button
                className={'contact-form__button'}
                aria-label='submit'
                onClick={sendEmail}
            >
                Submit
            </button>
            {errorMessage &&
                <span className={'error-message'}>{errorMessage}</span>
            }
        </form>
    )
}