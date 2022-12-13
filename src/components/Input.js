import React from 'react';
import Error from './Error';


const Input = ({htmlFor, label, type, name, value, changeValue, error, message}) => {
    /* const errorInput = document.querySelector('.errorInput'+name)
    console.log(errorInput) */
    
    const handleChange = e => {
        const { name, value } = e.target;
       
        const nameRegex = /^[a-zA-Z|\s]{3,20}$/
        const numberRegex = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/ ;
        
        if(type === "text"){
            
            if(value.match(nameRegex)){
                //errorInput.innerHTML = ''
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else {
                //errorInput.innerHTML = 'Veuillez rentrer dans le bon format'
                console.log('msg erreur')
                
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
                    [name]: undefined
                }));
            }
        }
    };

    return (

        <div className='create__form__group'>

            <label htmlFor={htmlFor} >{label}</label>
            <input type={type} name={name} id={htmlFor} value={value} onChange={handleChange} />
            {error && <Error message={message} /> }
        </div>

    );
};

export default Input;