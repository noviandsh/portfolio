
import { useState } from "react"
import { useEffect } from "react"
import Nav from "./nav"

export default function Header({ handleNavOpen, className }) {
    const [isNavOpen, setIsNavOpen] = useState(false)

    useEffect(() => {
        handleNavOpen(isNavOpen)
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
