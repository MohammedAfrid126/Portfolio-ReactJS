import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//Assets
import '../style/footer.css'
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <Container>
                    <Row className='align-items-center'>
                        <Col sm={6} className='logoContainerFooter'>
                            <img className='logo' src={logo} alt="logo" />
                        </Col>
                        <Col sm={6} className='text-center text-sm-end'>
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/mohammed-afrid-140a3621a/" target="__blank"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/MohammedAfrid126" target="__blank"><img src={navIcon2} alt="" /></a>
                            </div>
                            <p>CopyRight &#169; {year} | All Right Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
