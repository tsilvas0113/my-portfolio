import React from "react";

function Aboutme () {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Aspiring software developer from Texas</p>

            <div className="about-me__body">
                <p>I've been a computer gamer since I was a very young child. This sparked my fascination with technology and led to the development of my love for the web, computers, and video games. As a result, I was certain that I would pursue a computer science degree when the time came.</p>
                <p>I didn't start realizing how much I liked programming until I started studying for my computer science degree. After spending several years in college, I made the decision that my dream job would be as a software engineer. And although I adore all things related to web development, becoming a software developer in general, is where most of my interests lie.</p>
            </div>

            <img src="./images/113.png" alt='Tristan graduation pose' className="about-me__img" />
        </section>
    )
}

export default Aboutme