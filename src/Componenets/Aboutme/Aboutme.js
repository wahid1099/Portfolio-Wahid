import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import wahidbg from '../../Images/wahid.png';
import Bounce from 'react-reveal/Bounce';
import { GrFacebook, GrTwitter,GrLinkedin,GrGithub } from "react-icons/gr";
import './aboutme.css';
const Aboutme = () => {
    return (
        <div className="mt-5" id="aboutme">
            <h2>About Me</h2>
            <Container className="mt-5">
                <Row>
                    
                    
                    <Col md={6} sm={12} className="mt-5"> 
                    <Bounce left>
                    <h2 className="text-start mt-5">I am Abdul Wahid</h2>
                    <p className="text-start">I'm a mern stack devloper. I have worked with firebase, Mongo db, React, Express bootstrap and metarial ui. I am currently studying and learnig new technologies.</p>

                    <h2 className="text-start mt-5">Connect With Me</h2>
                    <div className="text-start">
                     

                          <a href="https://www.facebook.com/md.wahid.007/" target="_blank" className="text-decoration-none me-2">
                         <GrFacebook className="iconsize"/></a>  
                         <a href="https://github.com/wahid1099" target="_blank" className="text-decoration-none me-2 text-dark">
                         <GrGithub className="iconsize"/></a>       

                          <a href="https://www.linkedin.com/in/md-wahid-645851117/" target="_blank" className="text-decoration-none me-2 text-primary">
                         <GrLinkedin className="iconsize"/></a>     

                          <a href="https://twitter.com/Wahid45237631" target="_blank" className="text-decoration-none me-2">
                         <GrTwitter className="iconsize"/></a>      
                   </div>
                    </Bounce>
                    </Col>
                   
                   
                    <Col md={6} sm={12}>
                       <Bounce right>
                        <img  src={wahidbg} className="img-fluid" />
                        </Bounce>
                         </Col>
                       
                   
                </Row>
            </Container>
        </div>
    );
};

export default Aboutme;