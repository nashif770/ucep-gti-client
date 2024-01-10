import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import SocialMedia from '../Pages/Home/SocialMedia/SocialMedia';

const Main = () => {

    const location = useLocation();
    console.log("location",location)

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration') 

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* { noHeaderFooter || <Footer></Footer>} */}
            { noHeaderFooter || <SocialMedia></SocialMedia>}
        </div>
    );
};

export default Main;