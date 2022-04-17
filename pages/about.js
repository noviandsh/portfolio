import Layout from '../component/layout'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCode } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faAndroid } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    const variants = (delay) => ({
        initialZoom: {
            opacity: 0, scale: .1
        },
        animateZoom: {
            opacity: 1, scale: 1, transition: { delay: delay }
        },
        initialSlideUp: {
            opacity: 0, y: 500
        },
        animateSlideUp: {
            opacity: 1, y: 0, transition: { delay: delay }
        },
        initialSlideRight: {
            opacity: 0, x: -500
        },
        animateSlideRight: {
            opacity: 1, x: 0, transition: { delay: delay }
        },
    })
    return (
        <Layout>
            <div id="about-container">
                <motion.div initial="initialSlideRight" animate="animateSlideRight" variants={variants(.2)} id='about-description'>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sit dolorem. Animi praesentium odit sunt? Ab veniam amet maxime, aliquam non iure quas dignissimos recusandae voluptatem, reprehenderit, ullam illum eius?</p>
                    <a href='#' className='styled-btn'>Download CV <FontAwesomeIcon icon={faDownload} /></a>
                </motion.div>
                <div id='my-photo'>
                    <motion.div initial="initialSlideUp" animate="animateSlideUp" variants={variants(.4)} id="photo-circle">
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(.7)} className="circle-skils"><FontAwesomeIcon icon={faCode} /></motion.div>
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(.9)} className="circle-skils"><FontAwesomeIcon icon={faReact} /></motion.div>
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(1.1)} className="circle-skils"><FontAwesomeIcon icon={faNodeJs} /></motion.div>
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(1.3)} className="circle-skils"><FontAwesomeIcon icon={faAndroid} /></motion.div>
                        <div className='image-cut'>
                            <motion.img initial="initialZoom" animate="animateZoom" variants={variants(.6)} src="/images/me_sm.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}
