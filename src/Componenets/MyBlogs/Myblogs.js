import React, {useEffect, useState} from 'react';
import Menu from "../Header/Menu";
import Footer from "../Footer/Footer";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

const Myblogs = () => {
    const [allblogs,setAllBlogs]=useState([]);
    const[isloaded,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://fathomless-ravine-51636.herokuapp.com/allblogs')
            .then(res=>res.json())
            .then(data=>{
                setAllBlogs(data)
                setLoading(false)
            })
    },[])
    if(isloaded){
        return <Spinner animation="border" />
    }
    return (
        <div>
            <Menu></Menu>
            <Container className="mt-5">

            {
                allblogs.map(blogs=>(
                    <Row xs={1} md={3} className="g-4">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src={blogs.img} />
                                <Card.Body>
                                    <Card.Title>{blogs.blogName}</Card.Title>
                                    <Card.Text>
                                     <Link to={`/blog/${blogs._id}`}> <Button variant="primary">View Blog Post</Button></Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                </Row>))
            }
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Myblogs;