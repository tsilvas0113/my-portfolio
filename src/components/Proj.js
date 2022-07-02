import React from "react";

function Proj (props) {
    return (
        <div className="portfolio">
            <img className="port-pic" src={props.projectImg} alt='' />
            <div className="port-info">
                <div className="port-title">{props.projectTitle}</div>
                <div className="port-desc">{props.projectDescription}</div>
                <div className="port-btns">
                    <a href={props.demoLink}>Live Demo</a>
                    <a href={props.githubLink}>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Proj