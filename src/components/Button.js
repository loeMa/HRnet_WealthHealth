import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({link, text, classname}) => {
    return (
        <div className={`button ${classname}`} >
            <NavLink to={link} ><button>{text}</button> </NavLink>
        </div>
    );
};

export default Button;