import React from 'react';

const Dropdown = ({name, label, options, onChange}) => {

    return (
        <div className='create__form__group'>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={onChange} >
                {
                    options.map((option, index) =>{
                        return <option key={index}>{option.name}</option>
                    })
                }  
            </select>
        </div>
    );
};

export default Dropdown;