import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//Assets
import '../style/navBar.css'
import logo from '../assets/img/logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export default function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY> 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img className='logo' src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-Sacramento mt-1">
                            <h1>Mohammed <span className='lastName'>Afrid</span></h1>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/mohammed-afrid-140a3621a/" target="__blank"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/MohammedAfrid126" target="__blank"><img src={navIcon2} alt="" /></a>
                            </div>
                            <a href='#contact'><button className='btnLetsConnect'><span>Let's Connect</span></button></a>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
