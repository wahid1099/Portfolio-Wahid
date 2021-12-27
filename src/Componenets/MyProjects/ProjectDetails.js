import React,{useState,useEffect} from 'react';
import { Container, Row,Col,Button,Spinner ,Carousel} from 'react-bootstrap';
import { useParams } from 'react-router';
import { RiGithubFill,RiEarthFill } from "react-icons/ri";
import Menu from '../Header/Menu';
import { BsCaretRightFill ,BsFillArrowRightCircleFill} from "react-icons/bs";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projectDetails,setProjectDetails]=useState({});
    const [image,setImge]=useState('');
    const [dataloading,setloading]=useState(true);
    useEffect(() => {
        fetch(`https://fathomless-ravine-51636.herokuapp.com/projects/${projectId}`)
        .then(res=>res.json())
        .then(data =>(
            setProjectDetails(data),
            setloading(false)
        ))
    },[])
    console.log(projectDetails);

   
     
    const imageonclick=e=>{
        let imgsrc=e.target.getAttribute('src');

    }
    
    if(dataloading){
        return <Spinner animation="border" />;
    }

    return (
        <div className="text-black">
           <Menu></Menu>

            <h1 className="mt-5">Project Name:{projectDetails.name}</h1>
            <Container>
                <Row>
                    <Col md={6} sm={12}>

                    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={projectDetails.img}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={projectDetails.img1}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={projectDetails.img2}
      alt="Third slide"
    />


  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={projectDetails.img3}
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
                       




                       
                            
                            <div className="mt-4">
                                <h6>Project Screenshot</h6>
                            <img src={projectDetails.img2} className="img-fluid w-25"/>
                                <img src={projectDetails.img1} className="img-fluid w-25"/>
                                <img src={projectDetails.img2} className="img-fluid w-25 "/>
                                <img src={projectDetails.img3} className="img-fluid w-25 "/>
                            </div>
                       
                        
                         </Col>
                    <Col md={6} sm={12}>
                        <h5 className="mt-5">Project Details : <small>
                            
                            {projectDetails.description}
                            </small></h5>

                            <div className="text-start">
                            <h5><BsCaretRightFill/> Technologies : </h5>
                            <h6><BsFillArrowRightCircleFill/> FrameWork: {projectDetails.Technologies.frameworks}</h6>
                            <h6><BsFillArrowRightCircleFill/> Css : {projectDetails.Technologies.css}</h6>
                            <h6><BsFillArrowRightCircleFill/> Authetication: {projectDetails.Technologies.Authentication}</h6>
                            <h6><BsFillArrowRightCircleFill/> Routing: {projectDetails.Technologies.routing}</h6>
                            <h6><BsFillArrowRightCircleFill/> Server site: {projectDetails.Technologies.Serversite}</h6>
                            <h6><BsFillArrowRightCircleFill/> Database: {projectDetails.Technologies.Database}</h6>
                            </div>
                            <div>
              <Button variant="danger">
              <a target="_blank" href={projectDetails.CodeLink} className="text-decoration-none text-white"><RiGithubFill/> View Code</a></Button>
              
              <Button variant="success" className="ms-4">
              <a target="_blank"  href={projectDetails.SiteLink} className="text-decoration-none text-white"><RiEarthFill/>  View Website</a></Button>
              </div>

                        
                         </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectDetails;