import React from 'react';
import {Row,Col,Card, Container,Button} from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import './myproject.css';

const Myproject = () => {
    return (
        <div id="myproject">
            <h1 className="pt-5 pb-5">My Projects</h1>
            <Container>
            <Row xs={1} md={3} className="g-4">
            <Zoom left>
  
    <Col>
      <Card className="cardzoom border-0">
        <Card.Img variant="top" src="https://i.ibb.co/J7tHbnX/Screenshot-121.png" alt="Screenshot of website" />
        <Card.Body>
          <Card.Title>DOCTORS PORTAL</Card.Title>
          <Card.Text>
           <p className="text-start"><small>Doctor portal is a health releated website a user can sing up with email or google account. He can book an appoinment on available dates and time. He can also cancel his appoinment.An admin can manage  appoinment add doctors etc.</small></p>
          </Card.Text>
          <div className="mb-2">
         <h6>Technology: <small>React | Metarial Ui | React Router | Firebase | Mongo DB | Express</small></h6>
          
          </div>
          <div>
              <Button variant="danger">
              <a target="_blank" href="https://github.com/wahid1099/Docter-portal-ClientSide" className="text-decoration-none text-white">View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank" href="https://doctor-portal-bc7ad.web.app/home" className="text-decoration-none text-white">View Website</a></Button>
              </div>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card  className="cardzoom border-0">
        <Card.Img variant="top" src="https://i.ibb.co/rtRBj8n/Screenshot-120.png"/>
        <Card.Body>
          <Card.Title>UPGRADE (Online Classes)</Card.Title>
          <Card.Text>
           <p className="text-start"><small>I have build the website using react bootstrap ,react icons , react routing
It's online course selling project with this website you can sell your online teaching courses
There are multipule section one is for the user feedback which will encourage new student to enroll this course.</small></p>
          </Card.Text>
          <div className="mb-2">
         <h6>Technology: <small>React | Bootstrap | React Router | Firebase | Mongo DB | Express</small></h6>
          
          </div>
          <div>
              <Button variant="danger">
              <a target="_blank" href="https://github.com/wahid1099/upgrage-onlineCourses" className="text-decoration-none text-white">View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank" href="https://laughing-wing-551895.netlify.app/home" className="text-decoration-none text-white">View Website</a></Button>
              </div>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card  className="cardzoom border-0">
        <Card.Img variant="top" src="https://i.ibb.co/bsk2N0C/Screenshot-127.png" />
        <Card.Body>
          <Card.Title>Medic</Card.Title>
          <Card.Text>
           <p className="text-start"><small>It's a medical health care website showing their work experince branches
I have use firebase authentication with this you can manage user and let the user to register and book an appoiment
It's a simple and minimalistic website</small></p>
          </Card.Text>
          <div className="mb-2">
         <h6>Technology: <small>React | Metarial Ui  | React Router | Firebase | Mongo DB | Express</small></h6>
          
          </div>
          <div>
              <Button variant="danger">
              <a target="_blank" href="https://github.com/wahid1099/Medic-ensures-best-health-care-service" className="text-decoration-none text-white">View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank" href="https://fir-auth-react-deb4b.web.app/home" className="text-decoration-none text-white">View Website</a></Button>
              </div>
        </Card.Body>
      </Card>
    </Col>



    <Col>
      <Card  className="cardzoom border-0">
        <Card.Img variant="top" src="https://i.ibb.co/k05xwgh/Screenshot-124.png" />
        <Card.Body>
          <Card.Title>Car Bd</Card.Title>
          <Card.Text>
           <p className="text-start"><small>
               
               
           I have used react for client site as react is best library for fron end devlopment
I have used react bootsrap for css library as it's easy and fast to build react apps and for icons i have used react icons .
In this project a user can register with email or google sing in i have used firebase for authentication.
With this type of project a user can buy any car add reviews and they also cancel their orders

               
               </small></p>
          </Card.Text>
          <div className="mb-2">
         <h6>Technology: <small>React |  Bootstrap  | React Router | Firebase | Mongo DB | Express</small></h6>
          
          </div>
          <div>
              <Button variant="danger">
              <a target="_blank" href="https://github.com/wahid1099/carBd-Clientsite" className="text-decoration-none text-white">View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank" href="https://cardealer-41de4.web.app/" className="text-decoration-none text-white">View Website</a></Button>
              </div>
        </Card.Body>
      </Card>
    </Col>



    <Col>
      <Card className="cardzoom border-0">
        <Card.Img variant="top" src="https://i.ibb.co/H2CjfpK/Screenshot-123.png" />
        <Card.Body>
          <Card.Title>Trip Bd</Card.Title>
          <Card.Text>
           <p className="text-start"><small>
           I have used firebase authentication including github , google and email & password login a user can register and book his trip and see his order history2
I have used react icons and react bootstrap, readct router to optimize my app
The web site has some basic component and pages i have used mongo db as a database and node js as server site
               </small></p>
          </Card.Text>
          <div className="mb-2">
         <h6>Technology: <small>React |  Bootstrap  | React Router | Firebase | Mongo DB | Express</small></h6>
          
          </div>
          <div>
              <Button variant="danger">
              <a target="_blank" href="https://github.com/wahid1099/TtripBd-client-site" className="text-decoration-none text-white">View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank" href="https://tripadvisor-fd35d.web.app/home" className="text-decoration-none text-white">View Website</a></Button>
              </div>
        </Card.Body>
      </Card>
    </Col>


    <Col>
      <Card className="cardzoom border-0">
        <Card.Img variant="top" src="https://i.ibb.co/8j7WLRv/Screenshot-122.png" />
        <Card.Body>
          <Card.Title>Beuty Perlour</Card.Title>
          <Card.Text>
           <p className="text-start"><small>
          
          I have used Metarialui  to build this fancy website for beutyperlour business . Users can sing up with email or goolge account and book their appoinmetn for health tratement . Admin can see all booked appoinments of user .
          
          </small></p>
          </Card.Text>
          <div className="mb-2">
         <h6>Technology: <small>React |  Metarial Ui   | React Router | Firebase | Mongo DB | Express</small></h6>
          
          </div>
          <div>
              <Button variant="danger">
              <a target="_blank" href="https://github.com/wahid1099/BeutyPerlour-Clientsite" className="text-decoration-none text-white">View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank" href="https://beuty-perlour.web.app/" className="text-decoration-none text-white">View Website</a></Button>
              </div>
        </Card.Body>
      </Card>
    </Col>
    </Zoom>
</Row>
</Container>
            
        </div>
    );
};

export default Myproject;