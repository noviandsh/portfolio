import Head from "next/head"
import Aside from "./aside"
import Header from "./header"
import PageIndicator from "./page-indicator"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"
import Nav from "./nav"

export default function Layout({ children }) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const router = useRouter()
    const capitalizeFirstChar = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    const pageName = router.pathname.substring(1) || 'home'
    const handleNavOpen = (isOpen) => {
        setIsNavOpen(isOpen)
    }
    return (
        <>
            <Head>
                <title>{capitalizeFirstChar(pageName)} - Novian D Syahrizal</title>
                <meta name="description" content="Hi, my name is Novian Dwi Syahrizal Hilmi and currently live in Gresik, Indonesia. I am a Frontend Developer and sometimes become a Fullstack while working on a freelance projects." />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://noviandsh.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Novian D Syahrizal - Frontend Dev" />
                <meta property="og:description" content="Hi, my name is Novian Dwi Syahrizal Hilmi and currently live in Gresik, Indonesia. I am a Frontend Developer and sometimes become a Fullstack while working on a freelance projects." />
                <meta property="og:image" content="/images/thumb.png" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="noviandsh.com" />
                <meta property="twitter:url" content="https://noviandsh.com/" />
                <meta name="twitter:title" content="Novian D Syahrizal - Frontend Dev" />
                <meta name="twitter:description" content="Hi, my name is Novian Dwi Syahrizal Hilmi and currently live in Gresik, Indonesia. I am a Frontend Developer and sometimes become a Fullstack while working on a freelance projects." />
                <meta name="twitter:image:src" content="https://noviandsh.com/images/thumb.png"></meta>

                <link rel="icon" href="/images/logo.png" />

            </Head>
            <Nav className="phone" />
            <Header className={isNavOpen ? "nav-open" : ""} handleNavOpen={handleNavOpen} />
            <main className={isNavOpen ? "nav-open" : ""}>
                <Aside />
                {children}
                <PageIndicator />
            </main>
        </>
    )
}
