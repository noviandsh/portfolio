import { motion, AnimatePresence } from 'framer-motion'

export default function ImageList(props) {
    // props.handleItemClick(3)
    return (
        <motion.div
            className={props.className}
            id='image-list'
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -700 }}>
            <ul>
                {
                    props.detail ?
                        props.projects[props.projectIndex].images.map((image, i) => (
                            <li key={i}>
                                <img onClick={() => props.handleItemClick(i)} src={image} />
                            </li>
                        ))
                        :
                        props.projects.map((project, i) => (
                            <li key={i}>
                                <img onClick={() => props.handleItemClick(i)} src={project.images[0]} alt={`User interface ${project.name}`} />
                            </li>
                        ))
                }
            </ul>
        </motion.div>
    )
}
