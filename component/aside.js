import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faFacebookF, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Aside() {
    return (
        <aside>
            <ul>
                <li>
                    <a href="https://github.com/noviandsh">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/noviandsh/">
                        <FontAwesomeIcon icon={faFacebookF} size="xl" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/noviandsh_">
                        <FontAwesomeIcon icon={faTwitter} size="xl" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/novian-dwi-syahrizal-hilmi/">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}
