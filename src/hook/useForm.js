import omit from 'lodash.omit';
import React, { useState } from 'react';

const useForm = () => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        //A function to validate each input values
        /* const initialState = {
            firstName:"",
            lastName: "",
            birthDate: "",
            street: "",
            city: "",
            state: states[0].name,
            zipCode: "",
            department: workDepartment[0].name,
            startDate: new Date().toLocaleDateString(),
        } */
        switch (name) {
            case 'firstName': case 'lastName': case 'city':
                if(value.length <= 3 &&  !new RegExp(/^[a-zA-Z|\s]{3,20}$/).test(value) ){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        name:'This field need at least have 3 letters, with only letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "firstName");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'street':
                if( value.length <= 3 && 
                    !new RegExp( /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        street:'Enter a valid address'
                    })
                }else{

                    let newObj = omit(errors, "street");
                    setErrors(newObj);
                    
                }
            break;
            
            case 'zipCode':
                if(value.length <= 5 && 
                    !new RegExp(/^\d+\s[A-z]+\s[A-z]+/g).test(value)
                ){
                    setErrors({
                        ...errors,
                        zipCode:'Enter a valid zip code'
                    })
                }else{

                    let newObj = omit(errors, "zipCode");
                    setErrors(newObj);
                    
                }
            break;
            
            default:
                break;
        }
    }
    console.log(errors)
    const handleChange = (event) => {   
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);

        setValues({
            ...values,   //spread operator to store old values
            [name]:val,
        })

    }

    return {
        values,
        errors,
        handleChange,
    }
};

export default useForm;