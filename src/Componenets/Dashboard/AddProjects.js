import React, {useState} from 'react';
import {Alert, Button, Form, Navbar, Spinner} from "react-bootstrap";
import Menu from "../Header/Menu";
import Footer from "../Footer/Footer";

const AddProjects = () => {
    const [addingproject,setaddedproject]=useState(false);
    const [newporject,setnewproject]=useState({});
    const [success, setSuccess] = useState(false);


    const handleOnBlur=(e)=>{

        const field = e.target.name;
        const value = e.target.value;
        const newProjectdata = {...newporject};
        newProjectdata[field] = value;
        console.log(newProjectdata)
        setnewproject(newProjectdata);

    }
    const name=newporject.name;
    const img=newporject.img;
    const img1=newporject.img1;
    const img2=newporject.img2;
    const img3=newporject.img3;
    const description=newporject.description;
    const SiteLink=newporject.SiteLink;
    const CodeLink=newporject.CodeLink;
    const Technologies=newporject.technologies;




    const handleaddproject = e => {
        setaddedproject(true);
        const projectdata={name,img,img1,img2,img3,description,SiteLink,CodeLink,Technologies}
        // setAdddedService(true);
        setSuccess(false);
        e.preventDefault();

        fetch("https://fathomless-ravine-51636.herokuapp.com/addproject", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(projectdata),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    e.target.reset();
                    setSuccess(true);
                    setaddedproject(false);
                }
            });
        e.preventDefault();




    }



    return (
        <div>

            <Menu/>




            <div data-aos="zoom-in">
                <h2 className="text-center pt-4">Add Product</h2>
                {success && <Alert variant='success'>Service Added Succesfully!</Alert> }
                <Form onSubmit={handleaddproject}>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                        <Form.Control type="text" placeholder="Enter Project Name" name="name"  onBlur={handleOnBlur}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter Project Main Image" name="img"  onBlur={handleOnBlur}/>

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter Image1 Link" name="img1"  onBlur={handleOnBlur}/>

                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter Image2 Link" name="img2"  onBlur={handleOnBlur}/>

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter Image3 Link" name="img3"  onBlur={handleOnBlur}/>

                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter description" name="description"  onBlur={handleOnBlur}/>

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter SiteLink" name="SiteLink"  onBlur={handleOnBlur}/>

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter CodeLink" name="CodeLink"  onBlur={handleOnBlur}/>

                    </Form.Group>


                    <Form.Group className="mb-3 w-50 mx-auto" >

                        <Form.Control type="text" placeholder="Enter Product Technologies" name="technologies"  onBlur={handleOnBlur}
                        />
                    </Form.Group>

                    {addingproject  && <Spinner animation="border" />}
                    <div className="mx-auto text-center">
                        <Button variant="primary" type="submit" className="w-50 ">
                            Add Service
                        </Button>
                    </div>
                </Form>

            </div>


            <Footer/>
        </div>
    );
};

export default AddProjects;