import React from "react";

function Intro () {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Tristan Silvas</strong>
            </h1>
            <p className="section__subtitle section_subtitle--intro">front-end dev</p>
            <img src="./images/github-profile.png" alt="Tristan Silvas smiling" />
        </section>
    )
}

export default Intro