import React from 'react';
import Error from './Error';


const Input = ({htmlFor, label, type, name, value, changeValue, error, message}) => {
    
    const nameRegex = /^[a-zA-Z|\s]{3,20}$/
    const numberRegex = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/ ;
    const streetRegex = /^\d+\s[A-z]+\s[A-z]+/g;


    const filterErrorBase =() =>{
            return <Error message={message} />
    }
    

    const handleChange = e => {
        const { name, value } = e.target;

        if(name === 'street'){
            if(value.match(streetRegex)&& value.length >= 7){
                error = false
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else {
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ''
                }));
                error = true;
                console.log(error)
                return <span className='error'>'Veuillez rentrer dans le bon format'</span>
            } 
        }

        if(type === "text" && value.length >= 3 && name !== "street"){
            if(value.match(nameRegex)  ){
                console.log(value.match(nameRegex) )
                error = false
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else {
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ''
                }));
                error = true;
                console.log('msg erreur')
                return <span className='error'>'Veuillez rentrer dans le bon format'</span>
            } 
        }

        if(type === "number" && value.length >= 3 && name !== "street"){
            if(value.match(numberRegex)){
                error = false
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value
                }));
            }else{
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ''
                }));
                error = true;
                console.log('msg erreur')
                return <span className='error'>'Veuillez rentrer dans le bon format'</span>
            }
        }
    };


    return (

        <div className='create__form__group'>
            <label htmlFor={htmlFor} >{label}</label>
            <input type={type} name={name} id={htmlFor} value={value} onChange={handleChange} />
            <span className={`error ${name}`}  ></span>
            {error === true  && filterErrorBase()  }   
        </div>

    );
};

export default Input;