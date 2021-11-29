import logo from './logo.svg';
import './App.css';
import Menu from './Componenets/Header/Menu';
import Topbanner from './Componenets/TopBanner/Topbanner';
import ParticlesComponenet from '../src/Componenets/Particles/Particle';
import codingbg from '../src/Images/codingbg.jpg';
import Myproject from './Componenets/MyProjects/Myproject';
import Aboutme from './Componenets/Aboutme/Aboutme';
import Contactme from './Componenets/ContactMe/Contactme';
import Footer from './Componenets/Footer/Footer';
function App() {

	const bg={
		background: `url('${codingbg}')`,
        height:'500px',
        backgroundSize:'cover',
        // backgroundColor: 'rgba(0, 0, 0, 0.7)',
        //  backgroundBlendMode: 'darken, luminosity',
        //  paddingTop:'80px'

	}
  return (
    <div className="App">
      {/* // <Particles /> */}
   <Menu></Menu>
   
 
  
 
        <div style={bg}>
		{/* <ParticlesComponenet></ParticlesComponenet> */}
  
  <div id="text_div center_all">
	 <div className="center_all">
	  <Topbanner></Topbanner>
	 </div>
   </div>
  </div>   
  <Aboutme></Aboutme>
<Myproject></Myproject>
<Contactme></Contactme>
<Footer></Footer>
	
   
   
    </div>
  );
}

export default App;
