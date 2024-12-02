import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';

const ManiLayOuts = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default ManiLayOuts;