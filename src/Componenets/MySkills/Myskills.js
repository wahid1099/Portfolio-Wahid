import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

const Myskills = () => {
    return (
        <div className="mt-5">
            <Fade bottom>
            <h2>MY SKILLS</h2>
            <Container className="mt-5">
                <Row> 
                    <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/q7YR9kp/html.png" alt="html" className="img-fluid w-50"/>
                         <h6>HTML</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/nnh5XsX/css3.png" alt="css" className="img-fluid w-50"/>
                         <h6>CSS</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/ct1XkRG/bootstrap-logo.png" alt="bootstrap" className="img-fluid w-50"/>
                         <h6>BOOTSTRAP</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/fnjMtpF/Sass-Logo-Color-svg.png" alt="SASS" className="img-fluid w-50"/>
                         <h6>SASS</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/6mj4Crx/mui.png" alt="mui" className="img-fluid w-50"/>
                         <h6>METARIAL UI</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/H7szVfS/javascript.jpg" alt="JS" className="img-fluid w-50"/>
                         <h6>JAVASCRIPT</h6>
                         </Col>
                </Row>
                <Row className="mt-4"> 
                    <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/LtX9spM/React-icon-svg.png" alt="react" className="img-fluid w-50"/>
                         <h6>REACT JS</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/NsswpZF/nodejs.png" alt="NODE" className="img-fluid w-50"/>
                         <h6>NODE JS</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/x65gMzw/express-logo.png" alt="bootstrap" className="img-fluid w-50"/>
                         <h6>EXPRESS JS</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/R2LKrz2/Laravel-svg.png" alt="laravel" className="img-fluid w-50"/>
                         <h6>LARAVEL</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/ZYn48JB/mongodb.png" alt="mongo" className="img-fluid w-50"/>
                         <h6>MONGO DB</h6>
                         </Col>
                         <Col md={2} sm={4}>
                         <img src="https://i.ibb.co/zx3wqvY/mysql.png" alt="MYSQL" className="img-fluid w-50"/>
                         <h6>MY SQL</h6>
                         </Col>
                         
                </Row>
            </Container>

           </Fade>
            
        </div>
    )
}

export default Myskills;
