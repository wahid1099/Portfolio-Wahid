import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Bounce from 'react-reveal/Bounce';

const Tools = () => {
    return (
        <div className="mt-5">
                    <Bounce bottom>

            <h2 className="mb-5">Tools</h2>
            <Container className="mt-5"> 
                <Row>
                    <Col md={2} sm={4}>
                    <img src="https://i.ibb.co/zm9qsQL/vscode.jpg" alt="vscode" className="img-fluid w-50"/>
                         <h6>VS CODE</h6>
                    </Col>
                    <Col md={2} sm={4}>
                    <img src="https://i.ibb.co/q5XVKrk/WebStorm.png" alt="webstrom" className="img-fluid w-50"/>
                         <h6>WEBSTROM</h6>
                    </Col>
                    <Col md={2} sm={4}>
                    <img src="https://i.ibb.co/g3F6zqd/git.png" alt="GIT" className="img-fluid w-50"/>
                         <h6>GIT</h6>
                    </Col>
                    <Col md={2} sm={4}>
                    <img src="https://i.ibb.co/WBVfD1J/figma.jpg" alt="FIGMA" className="img-fluid w-50"/>
                         <h6>FIGMA</h6>
                    </Col>
                    <Col md={2} sm={4}>
                    <img src="https://i.ibb.co/zNwhfFV/XAMPP-logo-svg.png" alt="vscode" className="img-fluid w-50"/>
                         <h6>XAMPP</h6>
                    </Col>
                    <Col md={2} sm={4}>
                    <img src="https://i.ibb.co/MNphHGy/androidstudio.jpg" alt="android-stuido" className="img-fluid w-50"/>
                         <h6>ANDROID STUDIO</h6>
                    </Col>
                    
                     </Row>
            </Container>
              </Bounce>
        </div>
    )
}

export default Tools;
