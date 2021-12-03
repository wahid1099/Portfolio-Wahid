import React,{useState,useEffect} from 'react';
import {Row,Col,Card, Container,Button,Spinner} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import './myproject.css';
import { Link } from 'react-router-dom';
import Menu from '../Header/Menu';

const Myproject = () => {
  const [projects,setProjects] = useState([]);
  const [success,setSuccess] = useState(true);
  useEffect(() => {
    fetch('https://fathomless-ravine-51636.herokuapp.com/allprojects')
    .then(res=>res.json())
    .then(data=>(
      setProjects(data),
      setSuccess(false)
    ))
    
  },[]);

  if(success){
    return <Spinner animation="border" />
  }


  console.log(projects);
    return (
        <div id="myproject" style={{marginTop: '40px'}}>
        
            
            <Container>
            <h1 className="pt-5 ">My Projects</h1>
            <br/>
            
          
            <Row xs={1} md={3} className="g-4 mt-5 ">
         
              {
                projects?.map(project =>(
                
                  <Slide right>
                <Col>
                <Card className="cardzoom">
  <Card.Img variant="top" src={project.img} />
  <Card.Body>
    <Card.Title>Project:{project.name}</Card.Title>
    
    <Link to={`/projects/${project._id}`}> <Button variant="primary">View Project</Button></Link>
  </Card.Body>
</Card>
                        
            

           
          
                  
                  </Col>
                  </Slide>
                 
                ))
              }
            
</Row>
</Container>
            
        </div>
    );
};

export default Myproject;