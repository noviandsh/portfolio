import Layout from "../component/layout";
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


export default function Contact() {
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
    return (
        <Layout>
            <div id="contact-container">
                <div id="contact-detail">
                    <motion.h1 initial="initialSlideDown" animate="animateSlideDown" variants={variants(.2)}>Get in touch.</motion.h1>
                    <motion.p initial="initialSlideRight" animate="animateSlideRight" variants={variants(.4)}>If you wanna talk about work or just wanna talk with me, please contact me on Email or Telegram below.</motion.p>
                    <motion.div id="contact-link" initial="initialSlideUp" animate="animateSlideUp" variants={variants(.6)}>
                        <a href="mailto:noviandwish@gmail.com" className="styled-btn">noviandwish@gmail.com <FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="https://t.me/noviandsh" target="_blank" rel="noreferrer" className="styled-btn">Telegram <FontAwesomeIcon icon={faPaperPlane} /></a>
                        <a href="https://github.com/noviandsh" target="_blank" rel="noreferrer" className="styled-btn phone">Github <FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.facebook.com/noviandsh/" target="_blank" rel="noreferrer" className="styled-btn phone">Facebook <FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://twitter.com/noviandsh_" target="_blank" rel="noreferrer" className="styled-btn phone">Twitter <FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.linkedin.com/in/novian-dwi-syahrizal-hilmi/" target="_blank" rel="noreferrer" className="styled-btn phone">LinkedIn <FontAwesomeIcon icon={faLinkedin} /></a>

                    </motion.div>
                </div>
                <motion.div id="contact-form" initial="initialZoom" animate="animateZoom" variants={variants(.2)}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="nama" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <textarea type="message" name="message" id="message" rows={5} placeholder="Message" />
                        <button className="styled-btn" style={{ padding: '10px 105px 10px 80px' }}>Send <FontAwesomeIcon icon={faPlay} /></button>
                    </form>
                </motion.div>
            </div>
        </Layout>
    )
}
