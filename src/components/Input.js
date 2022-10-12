import React from 'react';


const Input = ({htmlFor, label, type, onChange}) => {
    return (

        <div className='create__form__group'>

            <label htmlFor={htmlFor} >{label}</label>
            <input type={type} id={htmlFor} onChange={onChange} />
            
        </div>

    );
};

export default Input;