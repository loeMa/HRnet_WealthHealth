import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div className='header'>
            <NavLink to={"/"} aria-label='link to Home' />
            <img src='./logo.jpg' alt="logo wealth health" />
            <h1>HRnet</h1>
        </div>
    );
};

export default Header;