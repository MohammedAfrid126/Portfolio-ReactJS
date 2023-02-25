import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


//Assets
import '../style/contact.css';
import contact from '../assets/stickers/contact.gif';

export default function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const form = useRef();

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...formDetails,
            [key]: value,
        })
    }

    const handleSubmit = async(e) => {
        setButtonText("Sending...")
        e.preventDefault()
        document.getElementById('contactButton').style.animation = "bounceOutRight 2s linear 1"
        
        await emailjs.sendForm('service_us0ptih', 'template_1gp4ym7', form.current, 'vY0a7FSQ8wXPvm6lE')
        .then((result) => {
                console.log(result.text);
            }, (error) => {
                    console.log(error.text);
            });
        
        setButtonText("Send")
        setFormDetails(formInitialDetails)
        document.getElementById('contactButton').style.animation = null;
    }


    return (
        <>
            <section className='contact' id='contact'>
                <Container>
                    <Row className='align-items-center' >
                        <Col>
                            <h2>Connect</h2>
                            <form name='submit-to-google-sheet' onSubmit={handleSubmit} ref={form}>
                                <Row>
                                    <Col sm={6} className='px-1'>
                                        <input name='firstName' type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input name='lastName' type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input name='email' type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className='px-1'>
                                        <input name='phone' type="number" id='phoneNumber' value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>
                                    <Col sm={12} className='px-1'>
                                        <textarea name='message' type="text" value={formDetails.message} rows="6" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                        <button type='submit' id='contactButton' onClick={handleSubmit}><span>{buttonText}</span></button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <img src={contact} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}