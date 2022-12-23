import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * 
 * @param {string} goto - link for the navlink
 * @param {string} text - text of the button
 * @param {string} classname -className of the element
 * @returns {HTMLElement}
 */
const Button = ({goto, text, classname, label}) => {
    return (
        <div className={`button ${classname}`} >
            <NavLink to={goto} aria-label={label} ><button>{text}</button> </NavLink>
        </div>
    );
};

Button.propTypes = {
    goto: PropTypes.string,
    text: PropTypes.string,
    classname: PropTypes.string,
}

export default Button;