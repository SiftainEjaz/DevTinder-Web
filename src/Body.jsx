import React from 'react';
import NavBar from './NavBar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const Body = () => {

    return (
        <div>
            <NavBar/>
            {/* Any children routes of the body will render here in the Outlet*/}
            <Outlet/> 
            <Footer />   
        </div>
    )
}

export default Body;

