import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex flex-wrap justify-center items-center gap-5 p-4'>
            <NavLink 
                to={'/'} 
                className='bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300'
            >
                Home
            </NavLink>
            <NavLink 
                to={'/addcoffee'} 
                className='bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300'
            >
                Add Coffee
            </NavLink>
            <NavLink 
                to={'/allcoffee'} 
                className='bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-300'
            >
                All Coffee
            </NavLink>
            <NavLink 
                to={'/signin'} 
                className='bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-300'
            >
                Login 
            </NavLink>
            <NavLink 
                to={'/signup'} 
                className='bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-300'
            >
                Sign Up
            </NavLink>
            <NavLink 
                to={'/users'} 
                className='bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 transition duration-300'
            >
                Users 
            </NavLink>
        </div>
    );
};

export default NavBar;
