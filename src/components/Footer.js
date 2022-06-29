import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <footer className="footer">
            <div className="footer__text">© 2022, Created by Tristan Silvas</div>
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link"
                href="https://www.linkedin.com/in/tristan-silvas-004273241/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li className="social-list__item"><a className="social-list__link"
                href="https://twitter.com/Chiknnuggets99"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="social-list__item"><a className="social-list__link"
                href="mailto:tsilvas0113@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li className="social-list__item"><a className="social-list__link"
                href="https://github.com/tsilvas0113"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer