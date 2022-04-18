import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PortfolioDetail({ project }) {
    return (
        <div id="project-info">
            <h2>{project.name}</h2>
            <div id="project-description">
                <p>{project.description}</p>
            </div>
            <div id="project-stack">
                Tech Stack:&nbsp;
                {
                    project.stack.map((stack, i) => (
                        <span key={i}>{(i ? ', ' : '') + stack}</span>
                    ))
                }
            </div>
            <div id="project-link">
                {project.github && <a href={project.github} className="styled-btn" target="_blank">Github <FontAwesomeIcon icon={faGithub} /></a>}
                {project.link && <a href={project.link} className="styled-btn" target="_blank">Visit <FontAwesomeIcon icon={faLink} /></a>}
                {project.demo && <a href={project.demo} className="styled-btn" target="_blank">Demo <FontAwesomeIcon icon={faLink} /></a>}
            </div>
        </div>
    )
}
