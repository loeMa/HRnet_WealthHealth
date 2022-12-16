import React from 'react';
import { useState } from 'react';
import Error from './Error';


const Input = ({htmlFor, label, type, name, value, changeValue, error, message, isClick}) => {
    
    const nameRegex = /^[a-zA-Z|\s]{3,20}$/
    const numberRegex = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/ ;
    const streetRegex = /^\d+\s[A-z]+\s[A-z]+/g;
    const [errorInput, setErrorInput] = useState(false)

    const messageError =() =>{
            return <Error message={message} />
    }
    
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

export default Input;