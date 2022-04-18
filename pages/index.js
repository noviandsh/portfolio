import Layout from '../component/layout'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function Home() {
	const router = useRouter()
	const variants = {
		span1: {
			hidden: {
				y: -500,
				opacity: 0
			},
			visible: {
				y: 0,
				opacity: 1,
				transition: {
					delay: .1,
				}
			}
		},
		h1: {
			hidden: {
				x: -500,
				opacity: 0
			},
			visible: {
				x: 0,
				opacity: 1,
				transition: {
					delay: .3,
				}
			}
		},
		span2: {
			hidden: {
				x: 500,
				opacity: 0
			},
			visible: {
				x: 0,
				opacity: 1,
				transition: {
					delay: .5,
				}
			}
		},
	}
	return (
		<Layout>
			<div id='greeting'>
				<AnimatePresence>
					<motion.span key="greet" initial="hidden" animate="visible" variants={variants.span1}>Hi, i&apos;m</motion.span>
					<motion.h1 key="name" initial="hidden" animate="visible" exit="hidden" variants={variants.h1}>
						Novian Dwi Syahrizal Hilmi.
					</motion.h1>
					<motion.span key="works" initial="hidden" animate="visible" variants={variants.span2}>a Front-End Developer</motion.span>
				</AnimatePresence>
			</div>
		</Layout>
	)
}
