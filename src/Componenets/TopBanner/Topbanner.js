import React from 'react';
import Typical from 'react-typical';
import {Button} from 'react-bootstrap';

const Topbanner = () => {
    const steps = [
        'Hello 👋', 3000,
        'I am Md Wahid', 3000,
        'I am Mern stack devloper 👌', 3000,
        'I am open source devloper', 3000,
       'I am quick learner', 3000,
        'Contact me for more info', 2000
        
      ];
    return (
        <div className="text-white">
                  <Typical wrapper="span" steps={steps} loop={40} className={'caca'} />
                  <br/>
                  <br/>
                  <h1>Hello I'm ABDUL WAHID</h1>
                  <h3>MERN STACK DEVLOPER</h3>

                  <br/>
                  <Button variant="danger">
                      <a target="_blank" href="https://drive.google.com/file/d/1WC-hGLETyxhQjj6xqTFtpn98ahmRg0no/view" className="text-decoration-none text-white">Download My Resume</a></Button>

        </div>
    );
};

export default Topbanner;