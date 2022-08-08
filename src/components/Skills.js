import React from "react";

function Skills () {
    return (
        <section className="my-skills" id="skills">
            <h2 className="section__title section__title--skills">What I Know</h2>
            <div className="skills">
                <div className="skill">
                    <h3>HTML</h3>
                    <img className="skill-logo" src="./images/html-logo.png" alt="" />
                </div>

                <div className="skill">
                    <h3>CSS</h3>
                    <img className="skill-logo" src="./images/css-logo.png" alt="" />
                </div>

                <div className="skill">
                    <h3>JavaScript</h3>
                    <img className="skill-logo" src="./images/javascript-logo.png" alt="" />
                </div>

                <div className="skill">
                    <h3>React.js</h3>
                    <img className="skill-logo" src="./images/react-logo.png" alt="" />
                </div>

                <div className="skill">
                    <h3>Git</h3>
                    <img className="skill-logo" src="./images/git-logo.png" alt="" />
                </div>

            </div>

            <a href="#projects" className="btn">See my projects</a>
        </section>
    )
}

export default Skills