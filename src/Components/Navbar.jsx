import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Skill from "./Skill";
import {
  faHouse,
  faUser,
  faGraduationCap,
  faTools,
  faProjectDiagram,
  faEnvelope,
  faFaceSmile
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import "../Styles/nav.css";

function Navbar() {
  return (
    <>
      <Row className="heading">
        <Col md={2} sm={4} xs={4} className="head-col">
          <h6 className="head-name">Asha</h6>
        </Col>
        <Col md={{span:10,offset:2}}
        //  sm={{span:12,offset:4}} xs={{span:8,offset:4}} 
         className="head-end">
        <Button className='dwld-cv me-3'href="Pdf/AshaMol_Resume.pdf" target="_blank" download>Download CV</Button>
          <Button className="emoji-btn" onClick={() => window.location = 'mailto:ashamold2002@gmail.com'}><span className="emji-p">Say Hi<span id="emoji"><FontAwesomeIcon icon={faFaceSmile}/></span></span></Button>
        </Col>
      </Row>
      <Row>
        <Col className="nav-side" md={1} sm={1} xs={2}>
          <ul className="side-head">
            <li
              className="side-list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Home"
              data-tooltip-place="top"
            >
              <Link
                activeClass="active"
                to="section1"
                // spy={true}
                smooth={true}
                duration={500}
              >
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            <li
              className="side-list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="About"
              data-tooltip-place="top"
            >
              <Link to="section2" 
              // spy={true}
               smooth={true} duration={500}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li
              className="side-list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Education"
              data-tooltip-place="top"
            >
              <Link to="section3"
              //  spy={true} 
               smooth={true} duration={500}>
                <FontAwesomeIcon icon={faGraduationCap} />
              </Link>
            </li>
            <li
              className="side-list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Skills"
              data-tooltip-place="top"
            >
              <Link to="section4" 
              // spy={true} 
              smooth={true} duration={500}>
                
                <FontAwesomeIcon icon={faTools} />
              </Link>
            </li>
            <li
              className="side-list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Project"
              data-tooltip-place="top"
            >
              <Link to="section5" 
              // spy={true}
               smooth={true} duration={500}>
                <FontAwesomeIcon icon={faProjectDiagram} />
              </Link>
            </li>
            <li
              className="side-list"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Contact"
              data-tooltip-place="top"
            >
              <Link to="section6" 
              // spy={true}
               smooth={true} duration={500}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </li>
          </ul>
          <Tooltip id="my-tooltip" />
        </Col>
        <Col md={11} sm={11} xs={10} className="nav-content">
          <Row id="section1">
            <Home />
          </Row>
          <Row id="section2">
            <About />
          </Row>
          <Row id="section3">
            <Education />
          </Row>
          <Row id="section4">
            <Skill />
          </Row>
          <Row id="section5">
            <Project />
          </Row>
          <Row id="section6">
            <Contact />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
