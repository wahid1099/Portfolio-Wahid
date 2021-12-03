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

function componentName() {

    const bg={
		background: `url('${codingbg}')`,
        height:'500px',
        backgroundSize:'cover',
     

	}
    return (
        <div>
            <Menu></Menu>
            <div style={bg}>
            <div id="text_div center_all">
	 <div className="center_all">
	  <Topbanner></Topbanner>
	 </div>
   </div>
  </div>   
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
