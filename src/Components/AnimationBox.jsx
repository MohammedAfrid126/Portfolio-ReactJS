import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//Assets
import '../style/animationBox.css'

export default function AnimationBox() {
    const [animation, setAnimation] = useState("cube");
    const [stageAnimation, setStageAnimation] = useState("");

    const handleClick = () => {
        if (animation === "cube") {
            setAnimation("ring")
            setStageAnimation("translateZ(-200px)");
        } else {
            setAnimation("cube")
            setStageAnimation("");
        }
    }

    return (
        <>
            <hr />
            <section id='cubeAnimation' className="cubeAnimation">
                <Container>
                    <Row>
                        <Col sm={12} className="d-flex justify-content-center">
                            <div id="container">
                                <div id="stage" style={{transform : `${stageAnimation}`}}>
                                    <div id="shape" className={`${animation} backfaces`}>
                                        <div className="plane one">M</div>
                                        <div className="plane two">O</div>
                                        <div className="plane three">H</div>
                                        <div className="plane four">A</div>
                                        <div className="plane five">M</div>
                                        <div className="plane six">E</div>
                                        <div className="plane seven">D</div>
                                        <div className="plane eight">A</div>
                                        <div className="plane nine">F</div>
                                        <div className="plane ten">R</div>
                                        <div className="plane eleven">I</div>
                                        <div className="plane twelve">D</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} className="d-flex justify-content-center">
                            <button className='cubeBtn' onClick={handleClick} >Click me </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
