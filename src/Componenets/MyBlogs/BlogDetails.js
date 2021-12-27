import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Menu from "../Header/Menu";
import Footer from "../Footer/Footer";
import {Container, Spinner} from "react-bootstrap";

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blogdetails,setBlogdetails]=useState({});
    const [dataloading,setloading]=useState(true);

    useEffect(() => {
        fetch(`https://fathomless-ravine-51636.herokuapp.com/blogs/${blogId}`)
            .then(res=>res.json())
            .then(data =>(
                setBlogdetails(data),
                    setloading(false)
            ))
    },[])
    if(dataloading){
        return <Spinner animation="border" />
    }
    return (
        <div>
            <Menu></Menu>
            <h2 className="mt-5">{blogdetails.blogName}</h2>
            <h4>Blog Owner:Md Wahid</h4>
           <Container>
               <div className="text-start mt-5">
                   <h5>{blogdetails.q1}</h5>
                   <p>{blogdetails.q1ans}</p>
                   <h5>{blogdetails.q2}</h5>
                   <p>{blogdetails.q2ans}</p>
                   <h5>{blogdetails.q3}</h5>
                   <p>{blogdetails.q3ans}</p>
                   <h5>{blogdetails.q4}</h5>
                   <p>{blogdetails.q4ans}</p>
                   <h5>{blogdetails.q5}</h5>
                   <p>{blogdetails.q5ans}</p>
                   <h5>{blogdetails.q6}</h5>
                   <p>{blogdetails.q6ans}</p>
                   <h5>{blogdetails.q7}</h5>
                   <p>{blogdetails.q7ans}</p>
                   <h5>{blogdetails.q8}</h5>
                   <p>{blogdetails.q8ans}</p>
                   <h5>{blogdetails.q9}</h5>
                   <p>{blogdetails.q9ans}</p>
                   <h5>{blogdetails.q10}</h5>
                   <p>{blogdetails.q10ans}</p>
                   <h5>{blogdetails.q11}</h5>
                   <p>{blogdetails.q11ans}</p>

                   <h5>{blogdetails.q12}</h5>
                   <p>{blogdetails.q12ans}</p>

                   <h5>{blogdetails.q13}</h5>
                   <p>{blogdetails.q13ans}</p>

                   <h5>{blogdetails.q14}</h5>
                   <p>{blogdetails.q14ans}</p>
                   <h5>{blogdetails.q15}</h5>
                   <p>{blogdetails.q15ans}</p>






               </div>
           </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default BlogDetails;