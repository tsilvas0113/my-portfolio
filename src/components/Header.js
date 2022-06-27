import React from "react";

function Header () {
    return (
        <header className="header">
            <div className="logo">
                <div>&lt; devtristan &gt;</div>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#skills" className="nav__link">What I Know</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                    <li className="nav__item"><a href="#projects" className="nav__link">My Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header