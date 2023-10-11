import React from "react"

export default function Info(){
    return (
        <div className="info">
            <img className="profile-pic" src="images/avatar-andrea.jpeg"/>
            <div className="container-padding">
                <h1>Andrea Axelsson</h1>
                <h4>Frontend Developer</h4>
                <a className="button" href="mailto:hello@andreaaxelsson.com">
                <i className="fa-solid fa-envelope button-icon"></i>
                Email
                </a>
                
                <a className="button" href="https://www.linkedin.com/in/axelsson-andrea/">
                <i className="fa-brands fa-linkedin button-icon"></i>
                LinkedIn
                </a>
            </div>
            
            
        </div>
    )
}