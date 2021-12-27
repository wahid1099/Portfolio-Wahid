import React from 'react'
import Menu from '../Componenets/Header/Menu';
import Topbanner from '../Componenets/TopBanner/Topbanner';
import codingbg from '../Images/codingbg.jpg';
import  Aboutme from '../Componenets/Aboutme/Aboutme';
import  Myproject from '../Componenets/MyProjects/Myproject';
import  Contactme from '../Componenets/ContactMe/Contactme';
import  Footer from '../Componenets/Footer/Footer';
import Myskills from '../Componenets/MySkills/Myskills';
import Tools from '../Componenets/Tools/Tools';
import TopContent from "../Componenets/TopContent/TopContent";

function componentName() {


    return (
        <div>
           <TopContent></TopContent>
  <Aboutme></Aboutme>
<Myproject></Myproject>
<Myskills></Myskills>
<Tools></Tools>
<Contactme></Contactme>
<Footer></Footer>
	
        </div>
    )
}

export default componentName
