import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

//Assets 
import '../style/projects.css';
import project0 from '../assets/projectImages/project-00.jpg'
import project1 from '../assets/projectImages/project-01.jpg'
import project2 from '../assets/projectImages/project-02.jpg'
import project3 from '../assets/projectImages/project-03.jpg'
import project4 from '../assets/projectImages/project-04.jpg'
import project5 from '../assets/projectImages/project-05.jpg'
import project6 from '../assets/projectImages/project-06.jpg'
import project7 from '../assets/projectImages/project-07.jpg'
import project8 from '../assets/projectImages/project-08.jpg'
import project9 from '../assets/projectImages/project-09.jpg'
import project10 from '../assets/projectImages/project-10.jpg'
import project11 from '../assets/projectImages/project-11.jpg'
import project12 from '../assets/projectImages/project-12.jpg'
import project13 from '../assets/projectImages/project-13.jpg'
import project14 from '../assets/projectImages/project-14.jpg'
import project15 from '../assets/projectImages/project-15.jpg'
import project16 from '../assets/projectImages/project-16.jpg'
import project17 from '../assets/projectImages/project-17.jpg'

export default function Projects() {
    const projects = [
        {
            title: "LightTube",
            description: "This YouTube clone is a web application developed using MongoDB, Express, React, Nodejs, Firebase, and Redux Toolkit.",
            imgUrl: project0,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/LightTube_ReactJS",
            githubRepoUrl : "https://github.com/MohammedAfrid126/LightTube_ReactJS"
        },
        {
            title: "E-notes",
            description: "E-Notes web app is a MERN stack project that allows users to create, edit, and organize their notes in a simple and intuitive interface.",
            imgUrl: project1,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/E-notes_React-JS",
            githubRepoUrl : "https://github.com/MohammedAfrid126/E-notes_React-JS"
        },
        {
            title: "Text it UP",
            description: "Its a React_JS project built with Bootstrap and React-Library.This webapp performs the different operations on the entered text by the user.",
            imgUrl: project2,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Text_it_UP-React_JS",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Text_it_UP-React_JS"
        },
        {
            title: "Taaza Khabar",
            description: "This is News web app built using Bootstrap and ReactJS and fetch the data from external API.",
            imgUrl: project3,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/Taaza_khabar-ReactJS",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Taaza_khabar-ReactJS"
        },
        {
            title: "Trans UP",
            description: "This is a Text translation app built using React JS. Using the Free API of Libre Translate.",
            imgUrl: project4,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Trans-UP_ReactJS ",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Trans-UP_ReactJS "
        },
        {
            title: "Game of Flags",
            description: "This is a game webpage built using React JS.",
            imgUrl: project5,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/game-of-flags_ReactJS",
            githubRepoUrl : "https://github.com/MohammedAfrid126/game-of-flags_ReactJS"
        },
    ]

    const projects2 =[
        {
            title: "Facebook Login Page",
            description: "This is FB login page Clone - Using Tailwind CSS.",
            imgUrl: project6,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/FB-Login-page___Tailwind",
            githubRepoUrl : "https://github.com/MohammedAfrid126/FB-Login-page___Tailwind"
        },
        {
            title: "Microsoft Page",
            description: "This is Microsoft website Home page Clone built using HTML and Tailwind CSS.",
            imgUrl: project7,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/Microsoft-Website_Clone-TAILWIND-CSS",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Microsoft-Website_Clone-TAILWIND-CSS"
        },
        {
            title: "PDF-MergeX",
            description: "This is a PDF merger built using NPM and Vanilla JS.",
            imgUrl: project8,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/PDF-MergeX ",
            githubRepoUrl : "https://github.com/MohammedAfrid126/PDF-MergeX "
        },
        {
            title: "SearchX",
            description: "This is a Dictionary Web App made using HTML and Bootstrap which fetches the data from a Free Dictionary API.",
            imgUrl: project9,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/SearchX",
            githubRepoUrl : "https://github.com/MohammedAfrid126/SearchX"
        },
        {
            title: "Quiet_Weather",
            description: "This is Weather Web App built using HTML , JS and Bootstrap. Which is using API Ninja's to fetch the weather Data.",
            imgUrl: project10,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Quiet_Weather",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Quiet_Weather"
        },
        {
            title: "Chat-Karo",
            description: "This is a chat app web page built using HTML,CSS and JS. As dependency used the node package : socket.io.",
            imgUrl: project11,
            demo : false,
            githubDemoUrl : "https://mohammedafrid126.github.io/Chat-Karo",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Chat-Karo"
        },
    ]

    const projects3 =[
        {
            title: "Play-Karo",
            description: "This is Music player Web page built with HTML,CSS and JS.",
            imgUrl: project12,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Play-Karo_Music-Player",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Play-Karo_Music-Player"
        },
        {
            title: "Snake-game",
            description: "This is a snake game built with Pure HTML, CSS and JS.",
            imgUrl: project13,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Snake-game",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Snake-game"
        },
        {
            title: "Calculator",
            description: "This is Basic Calculator using HTML,CSS and JS.",
            imgUrl: project14,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Calculator/",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Calculator"

        },
        {
            title: "i-Educate",
            description: "This is a Pure HTML,CSS and JS. This is fully Responsive website with Hamburger Icon and Responsive.",
            imgUrl: project15,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/i-Educate",
            githubRepoUrl : "https://github.com/MohammedAfrid126/i-Educate"
        },
        {
            title: "Analog-clock ",
            description: "Analog clock using HTML, CSS and JS.",
            imgUrl: project16,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Analog-clock ",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Analog-clock "
        },
        {
            title: "Food-Delivery",
            description: "This website is a pure HTML & CSS Project. This is a Responsive Website",
            imgUrl: project17,
            demo : true,
            githubDemoUrl : "https://mohammedafrid126.github.io/Food-Delivery-website",
            githubRepoUrl : "https://github.com/MohammedAfrid126/Food-Delivery-website"
        },
    ]


    return (
        <>
            <section className="project" id="project">
                <Container>
                    <Row>
                        <Col size={12}>
                            <h2>Projects</h2>
                            <p>I have consistently approached each project with a growth mindset, seeking to learn from my experiences and continuously improve my skills apply those to my future projects.</p>
                            <Tab.Container id='projectTabs' defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills d-flex mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">React</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tailwind CSS / JS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Other Projects</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project)=>{
                                                    return <ProjectCard key={project.title} {...project}/>
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane  eventKey="second">
                                        <Row>
                                            {
                                                projects2.map((project)=>{
                                                    return <ProjectCard key={project.title} {...project}/>
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane  eventKey="third">
                                        <Row>
                                            {
                                                projects3.map((project)=>{
                                                    return <ProjectCard key={project.title} {...project}/>
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
