import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowDownCircle } from 'react-bootstrap-icons';
import Tilt from 'react-parallax-tilt';

//Assets 
import '../style/banner.css'
import headerImg from "../assets/stickers/code-1.gif"

export default function Banner() {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const wordArray = ["Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker); }
        // eslint-disable-next-line
    }, [text]);

    const tick = () => {
        let i = loopNumber % wordArray.length;
        let fullWordText = wordArray[i];
        let updatedWordText = isDeleting ? fullWordText.substring(0, text.length - 1) : fullWordText.substring(0, text.length + 1);
        setText(updatedWordText);


        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedWordText === fullWordText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedWordText === "") {
            setIsDeleting(false);
            setLoopNumber(loopNumber + 1)
            setDelta(500)
        }
    }

    return (
        <>
            <section className='banner' id="home">
                <Container>
                    <Row className='align-items-center '>
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>Welcome to my portfolio</span>
                            <h1>Hello I am</h1>
                            <h1 className='text-Sacramento'>Mohammed <span className='lastName text-Sacramento'>Afrid</span></h1>
                            <h1><span className='arrayText'>{text}&nbsp;</span></h1>
                            <p>I am a Web Developer with a wide range of technical abilities, that enable me to create complicated web apps from scratch. I am knowledgeable on both frontend and backend technologies, and I can nimbly combine the various elements to produce effective webapps.  I am passionate about staying up-to-date with the latest technologies and best practices in web development.</p>
                            <a href='https://drive.google.com/file/d/1dVeF0e9RvaLlsOEYXR6leoEGQTNp_fUI/view?usp=drive_link'><button >Resume <ArrowDownCircle size={25} /></button></a>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <Tilt>
                                <div className='image'>
                                    <img src={headerImg} alt="" />
                                </div>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
