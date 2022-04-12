import Link from "next/link"
import { useRouter } from "next/dist/client/router"

export default function Header() {
    const router = useRouter()

    const setActiveLink = (page) => router.pathname === page ? 'active' : ''

    return (
        <header>
            <div id="logo">&lt;NDSH/&gt;</div>
            <nav>
                <ul>
                    <li><Link href="/"><a className={setActiveLink('/')}>Home</a></Link></li>
                    <li><Link href="/about"><a className={setActiveLink('/about')}>About</a></Link></li>
                    <li><Link href="/portfolio"><a className={setActiveLink('/portfolio')}>Portfolio</a></Link></li>
                    <li><Link href="/contact"><a className={setActiveLink('/contact')}>Contact</a></Link></li>
                    <li><Link href="https://doyancoding.com" target="_blank"><a>Blog</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
