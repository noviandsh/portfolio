import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div id="logo">&lt;NDSH/&gt;</div>
            <nav>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="https://doyancoding.com" target="_blank"><a>Blog</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}
