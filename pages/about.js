import Layout from '../component/layout'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCode } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faAndroid } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    const cvLink = "#"
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
                    <p>Hi, my name is Novian Dwi Syahrizal Hilmi and currently live in Gresik, Indonesia. You can call me Rizal. I am a Frontend Developer and sometimes become a Fullstack while working on a freelance projects. I always like to learn new things, especially about programming and computer things.</p>
                    <div id="skill-list">
                        <h2>Skills</h2>
                        <ul>
                            <li><span>HTML</span></li>
                            <li><span>CSS</span></li>
                            <li><span>Javascript</span></li>
                            <li><span>Kotlin</span></li>
                            <li><span>PHP</span></li>
                            <li><span>MySQL</span></li>
                            <li><span>Codeigniter 3</span></li>
                            <li><span>NodeJs</span></li>
                            <li><span>ReactJs</span></li>
                            <li><span>NextJs</span></li>
                            <li><span>ExpressJs</span></li>
                        </ul>
                    </div>
                    <a href={cvLink} className='styled-btn'>Download Resume <FontAwesomeIcon icon={faDownload} /></a>
                </motion.div>
                <div id='my-photo'>
                    <motion.div initial="initialSlideUp" animate="animateSlideUp" variants={variants(.4)} id="photo-circle">
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(.7)} className="circle-skils"><FontAwesomeIcon icon={faCode} /></motion.div>
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(.9)} className="circle-skils"><FontAwesomeIcon icon={faReact} /></motion.div>
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(1.1)} className="circle-skils"><FontAwesomeIcon icon={faNodeJs} /></motion.div>
                        <motion.div initial="initialZoom" animate="animateZoom" variants={variants(1.3)} className="circle-skils"><FontAwesomeIcon icon={faAndroid} /></motion.div>
                        <div className='image-cut'>
                            <motion.div initial="initialZoom" animate="animateZoom" variants={variants(.6)}>
                                <Image src="/images/me_sm.png" layout='fill' objectFit='contain'></Image>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}
