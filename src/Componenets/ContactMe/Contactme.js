import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import {Form,Button, Container,FloatingLabel,Alert}  from 'react-bootstrap';
const Contactme = () => {

          const [success,setSuccess]=useState(false);
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3i121za', 'template_x3maqx7', e.target, 'user_o7iOu5SK5szXkyNvOq8bm')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

   }
    return (
        <div className="mt-5 " id="contactme">
          <h2 className="mb-5 ">Contact Me</h2>
          {success &&  <Alert  variant="success">
    Your Massage has been successfully send
  </Alert>}
  
          <Container>
           <Form onSubmit={sendEmail}>
  <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" name="email"/>
  
  </Form.Group>
  <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Enter Name" name="name"/>
  
  </Form.Group>

  
    <Form.Control
      className="w-50 mx-auto"
      as="textarea"
      name="message"
      placeholder="Your Massage"
      style={{ height: '130px' }}
    />
   
  <Button variant="primary" type="submit" className="mt-4">
   Send Massage
  </Button>
</Form> 
</Container>
        </div>
    );
};

export default Contactme;