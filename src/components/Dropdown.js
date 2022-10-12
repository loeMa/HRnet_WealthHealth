import React from 'react';

const Dropdown = ({name, options, onChange}) => {

    return (
        <select name={name} id={name} onChange={onChange} >
            {
                options.map((option, index) =>{
                    return <option key={index}>{option.name}</option>
                })
            }  
        </select>
    );
};

export default Dropdown;