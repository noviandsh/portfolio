import Layout from "../component/layout";
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useState, createRef } from "react";
import { send } from "emailjs-com"
import { ReCAPTCHA } from "react-google-recaptcha";
import Swal from "sweetalert2";

export default function Contact() {
    const siteKey = "6LeINJIfAAAAAI3IznqkabRVk1c2gTfIi4KrBwXB"
    const recaptchaRef = createRef()
    const emailjs = {
        SERVICE_ID: "service_d3bxq4s",
        TEMPLATE_ID: "template_2mjgdtt",
        PUBLIC_KEY: "TCru4-klmCI1H8254"
    }
    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        message: ''
    })
    const variants = (delay) => ({
        initialZoom: {
            opacity: 0, scale: .1
        },
        animateZoom: {
            opacity: 1, scale: 1, transition: { delay: delay }
        },
        initialSlideDown: {
            opacity: 0, y: -500
        },
        animateSlideDown: {
            opacity: 1, y: 0, transition: { delay: delay }
        },
        initialSlideRight: {
            opacity: 0, x: -500
        },
        animateSlideRight: {
            opacity: 1, x: 0, transition: { delay: delay }
        },
        initialSlideUp: {
            opacity: 0, y: 500
        },
        animateSlideUp: {
            opacity: 1, y: 0, transition: { delay: delay }
        },
    })
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const recaptchaValue = recaptchaRef.current.getValue()
        const params = { ...toSend, 'g-recaptcha-response': recaptchaValue }
        if (toSend.from_name.trim() === "" || toSend.from_email.trim() === "" || toSend.message.trim() === "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Make sure all fields are filled',
                heightAuto: false,
            })
        } else {
            Swal.fire({
                title: 'Sending message...',
                heightAuto: false,
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            })
            send(emailjs.SERVICE_ID, emailjs.TEMPLATE_ID, params, emailjs.PUBLIC_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        icon: 'success',
                        title: 'Message sent',
                        heightAuto: false,
                    })
                    setToSend({
                        from_name: '',
                        from_email: '',
                        message: ''
                    })
                })
                .catch((error) => {
                    console.log('FAILED...', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to send message',
                        heightAuto: false,
                    })
                });
        }
    }
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }
    return (
        <Layout>
            <div id="contact-container">
                <div id="contact-detail">
                    <motion.h1 initial="initialSlideDown" animate="animateSlideDown" variants={variants(.2)}>Get in touch.</motion.h1>
                    <motion.p initial="initialSlideRight" animate="animateSlideRight" variants={variants(.4)}>If you wanna talk about work or just wanna talk with me, please contact me on Email or Telegram below.</motion.p>
                    <motion.div id="contact-link" initial="initialSlideUp" animate="animateSlideUp" variants={variants(.6)}>
                        <a href="mailto:noviandsh@gmail.com" className="styled-btn">noviandsh@gmail.com <FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="https://t.me/noviandsh" target="_blank" rel="noreferrer" className="styled-btn">Telegram <FontAwesomeIcon icon={faPaperPlane} /></a>
                        <a href="https://github.com/noviandsh" target="_blank" rel="noreferrer" className="styled-btn phone">Github <FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.facebook.com/noviandsh/" target="_blank" rel="noreferrer" className="styled-btn phone">Facebook <FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://twitter.com/noviandsh_" target="_blank" rel="noreferrer" className="styled-btn phone">Twitter <FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.linkedin.com/in/novian-dwi-syahrizal-hilmi/" target="_blank" rel="noreferrer" className="styled-btn phone">LinkedIn <FontAwesomeIcon icon={faLinkedin} /></a>

                    </motion.div>
                </div>
                <motion.div id="contact-form" initial="initialZoom" animate="animateZoom" variants={variants(.2)}>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="from_name"
                            id="name"
                            placeholder="Name"
                            value={toSend.from_name}
                            onChange={handleChange} />
                        <input
                            type="email"
                            name="from_email"
                            id="email"
                            placeholder="Email"
                            value={toSend.from_email}
                            onChange={handleChange} />
                        <textarea
                            type="message"
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Message"
                            value={toSend.message}
                            onChange={handleChange} />
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={siteKey} />
                        <button type="submit" className="styled-btn" style={{ padding: '10px 105px 10px 80px' }}>Send <FontAwesomeIcon icon={faPlay} /></button>
                    </form>
                </motion.div>
            </div>
        </Layout>
    )
}
