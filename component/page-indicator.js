import Link from "next/link"
import { useRouter } from "next/router"

export default function PageIndicator() {
    const router = useRouter()

    const setActiveLink = (page) => router.pathname === page ? 'active' : ''

    return (
        <div id='page-indicator'>
            <ul>
                <li><Link href="/"><a className={setActiveLink('/')}></a></Link></li>
                <li><Link href="/about"><a className={setActiveLink('/about')}></a></Link></li>
                <li><Link href="/portfolio"><a className={setActiveLink('/portfolio')}></a></Link></li>
                <li><Link href="/contact"><a className={setActiveLink('/contact')}></a></Link></li>
            </ul>
        </div>
    )
}
