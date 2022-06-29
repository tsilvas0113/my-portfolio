import React from "react";

function Myprojects () {
    return (
        <section className="projects" id="projects">
            <h2 className="section__title section__title--projects">My projects</h2>
            <p className="section__subtitle section__subtitle--projects">A selection of my range of projects</p>

            <div className="portfolio">
                <a href="#blank" className="portfolio__item">
                    <img src="./images/project1.png" className="portfolio__img" alt="" />
                </a>

                <a href="#blank" className="portfolio__item">
                    <img src="./images/project1.png" className="portfolio__img" alt="" />
                </a>

                <a href="#blank" className="portfolio__item">
                    <img src="./images/project1.png" className="portfolio__img" alt="" />
                </a>

                <a href="#blank" className="portfolio__item">
                    <img src="./images/project1.png" className="portfolio__img" alt="" />
                </a>

                <a href="#blank" className="portfolio__item">
                    <img src="./images/project1.png" className="portfolio__img" alt="" />
                </a>
            </div>
        </section>
    )
}

export default Myprojects