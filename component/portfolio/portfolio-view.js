import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faAngleLeft, faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons"
import ImageList from './image-list'
import PortfolioDetail from './portfolio-detail';

export default function PortfolioView(props) {
    const [index, setIndex] = useState(props.projectIndex)
    const [imageIndex, setImageIndex] = useState(0)
    const [isViewZoom, setIsViewZoom] = useState(false)
    const projects = props.projects
    useEffect(() => {
        setIndex(props.projectIndex)
        document.addEventListener('keydown', (e) => {
            (e.key === 'Escape' && isViewZoom) && setIsViewZoom(false)
        })
    })
    const handleCardClick = () => {
        setIsViewZoom(true)
        setImageIndex(0)
    }
    const handleCloseClick = () => {
        setIsViewZoom(false)
        setImageIndex(0)
    }
    const variants = {
        initialZoom: {
            opacity: 0, scale: .1
        },
        animateZoom: {
            opacity: 1, scale: 1
        },
        initialSlide: {
            opacity: 0, x: 500
        },
        animateSlide: {
            opacity: 1, x: 0
        },
        exit: {
            opacity: 0, x: -700
        }

    }
    const handleImageChange = (i) => {
        setImageIndex(i)
    }
    return (
        <motion.div key={isViewZoom} id="portfolio-view" style={isViewZoom ? { position: 'unset' } : { position: 'relative' }}>
            <AnimatePresence>
                <motion.div
                    id="project-card"
                    className={isViewZoom ? 'zoom' : ''}
                    key={index}
                    initial={isViewZoom ? 'initialZoom' : 'initialSlide'}
                    animate={isViewZoom ? 'animateZoom' : 'animateSlide'}
                    exit='exit'
                    variants={variants}>
                    <div id="project-detail" className={isViewZoom ? 'zoom' : ''}>
                        {
                            isViewZoom ?
                                (
                                    <>
                                        <PortfolioDetail project={projects[index]} />
                                        <ImageList className="zoom" detail={true} projects={projects} projectIndex={index} handleItemClick={handleImageChange} />
                                    </>
                                ) :
                                <strong>{projects[index].name}</strong>
                        }
                    </div>
                    <motion.div id="project-image" key={imageIndex} initial="initialZoom" animate="animateZoom" variants={variants} >
                        <Image layout="fill" objectFit="contain" onClick={handleCardClick} src={projects[index].images[imageIndex]} alt={`User interface ${projects[index].name}`} />
                    </motion.div>
                    {!isViewZoom && <div className="project-stack">{projects[index].stack.map((stack, i) => ((i ? ', ' : '') + stack))}</div>}

                    {!isViewZoom && <button onClick={() => props.handleItemClick(index - 1)} className="project-button left"><FontAwesomeIcon icon={faAngleLeft} /></button>}
                    {!isViewZoom && <button onClick={() => props.handleItemClick(index + 1)} className="project-button right"><FontAwesomeIcon icon={faAngleRight} /></button>}
                    {isViewZoom && <button id="close-btn" onClick={handleCloseClick}><FontAwesomeIcon icon={faClose} /></button>}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}
