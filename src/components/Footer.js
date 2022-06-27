import React from "react";

function Footer () {
    return (
        <footer>
            <div className="footer__text">© 2022, Created by Tristan Silvas</div>
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link"
                href="https://www.linkedin.com/in/tristan-silvas-004273241/">a</a></li>
                <li className="social-list__item"><a className="social-list__link"
                href="https://twitter.com/Chiknnuggets99">b</a></li>
                <li className="social-list__item"><a className="social-list__link"
                href="mailto:tsilvas0113@gmail.com">c</a></li>
                <li className="social-list__item"><a className="social-list__link"
                href="https://github.com/tsilvas0113">d</a></li>
            </ul>
        </footer>
    )
}

export default Footer