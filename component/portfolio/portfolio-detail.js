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
                {project.github && <a href={project.github} className="project-link" target="_blank"><FontAwesomeIcon icon={faGithub} /> Github</a>}
                {project.link && <a href={project.link} className="project-link" target="_blank"><FontAwesomeIcon icon={faLink} /> Visit</a>}
                {project.demo && <a href={project.demo} className="project-link" target="_blank"><FontAwesomeIcon icon={faLink} /> Demo</a>}
            </div>
        </div>
    )
}
