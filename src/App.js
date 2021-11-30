import logo from './logo.svg';
import './App.css';

import ProjectDetails from '../src/Componenets/MyProjects/ProjectDetails';
import Homepage from '../src/Pages/Homepage';
import MyprojectsPage from '../src/Pages/MyprojectsPage';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

	
  return (
    <div className="App">
      
      <Router>
          <Routes>
          <Route exact path="/" element={<Homepage />}>
            </Route>

            
          <Route path="/home" element={<Homepage/>}>
            </Route>

           
            <Route  path="/myprojects" element={<MyprojectsPage />}>
            </Route>



<Route path={`/projects/:projectId`} element={<ProjectDetails></ProjectDetails>}>

</Route>

   
</Routes>
        </Router>

    </div>
  );
}

export default App;
