import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faFacebookF, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

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
                    <a href="https://www.instagram.com/noviandsh/">
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                    </a>
                </li>
            </ul>
        </aside>
    )
}
