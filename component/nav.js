import Link from "next/link"
import { useRouter } from "next/dist/client/router"

export default function Nav({ className }) {
    const router = useRouter()

    const setActiveLink = (page) => router.pathname === page ? 'active' : ''
    return (
        <nav className={className}>
            <ul>
                <li><Link href="/"><a className={setActiveLink('/')}>Home</a></Link></li>
                <li><Link href="/about"><a className={setActiveLink('/about')}>About</a></Link></li>
                <li><Link href="/portfolio"><a className={setActiveLink('/portfolio')}>Portfolio</a></Link></li>
                <li><Link href="/contact"><a className={setActiveLink('/contact')}>Contact</a></Link></li>
                <li><Link href="https://doyancoding.com"><a target="_blank">Blog</a></Link></li>
            </ul>
        </nav>
    )
}
