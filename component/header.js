
import { useState } from "react"
import { useEffect } from "react"
import Nav from "./nav"

export default function Header({ handleNavOpen, className }) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    useEffect(() => {
        handleNavOpen(isNavOpen)
        if (windowWidth > 768) {
            setIsNavOpen(false)
        }
    })

    const handleHamburgerClick = () => {
        setIsNavOpen(!isNavOpen)
    }
    return (
        <header className={className}>
            <div id="logo">&lt;NDSH/&gt;</div>
            <button className={isNavOpen ? "open" : ""} onClick={handleHamburgerClick} id="hamburger" aria-label="Menu navigasi"><span></span></button>
            <Nav className="main" />
        </header>
    )
}
