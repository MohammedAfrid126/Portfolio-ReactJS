import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({ title, description, imgUrl, demo, githubRepoUrl, githubDemoUrl }) => {
    return (
        <>
            <Col sm={6} md={4}>
                <div className="projectImageBox">
                    <img className='projectImage' src={imgUrl}  alt='projectImg' />
                    <div className="projectTextBox" >
                        <h4>{title}</h4>
                        <span>{description}</span>
                        <div className="buttonContainer d-flex align-items-center justify-content-around">
                            <a href={githubRepoUrl} target="__blank"><button className='buttonHref'>Github</button></a>
                            {demo ? <a href={githubDemoUrl} target="__blank"><button className='buttonHref'>Demo</button></a>: ""}
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default ProjectCard;