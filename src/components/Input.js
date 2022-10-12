import React from 'react';

const Input = ({htmlFor, label, type}) => {
    return (
        <div className='create__form__group'>
            <label htmlFor={htmlFor} >{label}</label>
            <input type={type} id={htmlFor} />
        </div>
    );
};

export default Input;