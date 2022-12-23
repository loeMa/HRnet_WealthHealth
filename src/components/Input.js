import React from 'react';
import { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} htmlFor - string for the htmlFor
 * @param {string} label - string for the label
 * @param {string} type - type of the input
 * @param {string} name - string for the name
 * @param {string} value - value of the input
 * @param {Function} changeValue - to set the value
 * @param {boolean} error - true if employee.input is empty after submit
 * @param {string} message - error's message
 * @param {boolean} isClick - to know if user already click on submit
 * @returns {HTMLElement}
 */
const Input = ({htmlFor, label, type, name, value, changeValue, error, message, isClick}) => {
    
    const nameRegex = /^[a-zA-Z|\s]{3,20}$/
    const numberRegex = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/ ;
    const streetRegex = /^\d+\s[A-z]+\s[A-z]+/g;
    const [errorInput, setErrorInput] = useState(false)

    const messageError =() =>{
            return <Error message={message} />
    }
    
    // to set the new value in the employee array and if no set an error message
    const handleChange = e => {
        const { name, value } = e.target;

        changeValue(prevState => ( {
            ...prevState,
            [name]: value
        }));

        if(name === 'street' && isClick === true){
            value.match(streetRegex)&& value.length >= 7 ? setErrorInput(false) : setErrorInput(true) ;
        }

        if(type === "text"  && name !== "street" && isClick === true){
            value.match(nameRegex) && value.length >= 3 ? setErrorInput(false) : setErrorInput(true);
        }

        if(type === "number"  && name !== "street" && isClick === true){
            value.match(numberRegex)&& value.length >= 3 ? setErrorInput(false) : setErrorInput(true);
        }
    };


    return (

        <div className='create__form__group'>
            <label htmlFor={htmlFor} >{label}</label>
            <input type={type} name={name} id={htmlFor}   value={value}   onChange={handleChange} />
            <span className={`error ${name}`}  ></span>
            {errorInput === true || error === true  ? messageError() : ''  }   
        </div>

    );
};

Input.propTypes = {
    htmlFor: PropTypes.string, 
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    changeValue: PropTypes.func,
    error: PropTypes.bool, 
    message: PropTypes.string, 
    isClick: PropTypes.bool,
}

export default Input;