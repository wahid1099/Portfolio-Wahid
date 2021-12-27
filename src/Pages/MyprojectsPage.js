import React from 'react';
import Menu from '../Componenets/Header/Menu';
import Myproject from '../Componenets/MyProjects/Myproject';
import Footer from "../Componenets/Footer/Footer";

const MyprojectsPage = () => {
    return (
        <div >
            <Menu></Menu>
            <Myproject></Myproject>
            <Footer></Footer>
        </div>
    );
};

export default MyprojectsPage;