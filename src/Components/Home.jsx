import React from 'react'
import { Row,Col, Button } from 'react-bootstrap';
import { ReactTyped } from "react-typed";
import '../Styles/Home.css';
import {faLinkedin,faGithub }  from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  return (
    <>
    <Row className='home'>
    <Col md={6} sm={12} className='home-name-col'>
        <Row className='home-name-row'>
            <h1 className='home-name'>Its Asha Mol</h1>
        </Row>
        <Row className='home-role-row'>
            <h5 className='home-role'>I'm <ReactTyped strings={["Full Stack Developer"]} typeSpeed={200} loop /></h5>
        </Row>
        <Row className='home-stack-row'>
            <h6 className='home-stack'>React JS + .NET</h6>
        </Row>
        <Row>
            <Col>
            <Button className='brand-icon' target='_blank' href='https://www.linkedin.com/in/asha-mol-9a3561239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FontAwesomeIcon icon={faLinkedin}/></Button>
            </Col>
            <Col>
            <Button className='brand-icon' target='_blank' href='https://github.com/ashamold2002'><FontAwesomeIcon icon={faGithub}/></Button>
            </Col>
        </Row>
        
    </Col>
    <Col md={6} sm={12} className='home-img-col'>
        <Row   className='home-img-box'>
            
            <Row  className='home-img-box2'>
            <img className='home-img' src="Images/Selected photo.jpg"/>
            
            </Row>

        </Row>
    </Col>
    </Row>
    
    </>
  )
}

export default Home
