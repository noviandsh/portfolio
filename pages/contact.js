import Layout from "../component/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
    return (
        <Layout>
            <div id="contact-container">
                <div id="contact-detail">
                    <h1>Get in touch.</h1>
                    <p>If you wanna talk about work or just wanna talk with me, please contact me on Email or Telegram below.</p>
                    <div id="contact-link">
                        <a href="mailto:noviandwish@gmail.com" className="styled-btn">noviandwish@gmail.com <FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="https://t.me/noviandsh" target="_blank" className="styled-btn">Telegram <FontAwesomeIcon icon={faPaperPlane} /></a>
                    </div>
                </div>
                <div id="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="nama" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <textarea type="message" name="message" id="message" rows={5} placeholder="Message" />
                        <button className="styled-btn" style={{ padding: '10px 105px 10px 80px' }}>Send <FontAwesomeIcon icon={faPlay} /></button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
