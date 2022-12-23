import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} name -name of the dropdown
 * @param {string} label -label of the dropdown
 * @param {Array} options -options of the dropdown
 * @param {Function} onChange - to set the value
 * @param {string} value -value of the dropdown
 * @returns {HTMLElement}
 */
const Dropdown = ({name, label, options, onChange, value}) => {

    return (
        <div className='create__form__group'>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={onChange} value={value} >
                {
                    options.map((option, index) =>{
                        return <option key={index} >{option.name}</option>
                    })
                }  
            </select>
        </div>
    );
};

Dropdown.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func, 
    value: PropTypes.string, 
    
}

export default Dropdown;