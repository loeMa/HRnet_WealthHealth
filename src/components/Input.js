import React from 'react';


const Input = ({htmlFor, label, type, name, changeValue}) => {


    const handleChange = e => {
        const { name, value } = e.target;
        const nameRegex = /^[a-zA-Z|\s]{2,20}$/
        const numberRegex = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/ ;

        if(type === "text"){
            
            if(value.match(nameRegex)){
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else {
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ""
                }));
            } 

        }else{
            if(value.match(numberRegex)){
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else{
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ""
                }));
            }
        }
    };

    return (

        <div className='create__form__group'>

            <label htmlFor={htmlFor} >{label}</label>
            <input type={type} name={name} id={htmlFor} onChange={handleChange} />
            
        </div>

    );
};

export default Input;