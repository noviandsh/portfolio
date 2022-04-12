import Layout from '../component/layout'
import { motion } from 'framer-motion'

export default function Home() {
	return (
		<Layout>
			<motion.div id="greeting" initial="hidden" animate="visible" variants={{
				hidden: {
					scale: .8,
					opacity: 0,
				},
				visible: {
					scale: 1,
					opacity: 1,
					transition: {
						delay: .2
					}
				}
			}} >
				<span>Hi, I'm</span>
				<h1>Novian Dwi Syahrizal Hilmi.</h1>
				<span>a Front-End Developer</span>
			</motion.div>
		</Layout>
	)
}
