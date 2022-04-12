import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Aside() {
    return (
        <aside>
            <FontAwesomeIcon icon={faFacebookF} size="10x" />
            <FontAwesomeIcon icon={faTwitter} size="10x" />
            <FontAwesomeIcon icon={faInstagram} size="10x" />
        </aside>
    )
}
