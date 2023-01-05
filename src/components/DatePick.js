import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Error from './Error';
import PropTypes from 'prop-types';


/**
 * 
 * @param {string} htmlFor - string for the htmlFor
 * @param {string} label - string for the label
 * @param {string} name - string for the name
 * @param {Function} changeValue - to set the value
 * @param {boolean} error - true if employee.date is empty after submit
 * @param {string} message - message of the error
 * @param {boolean} isSubmit - to know if data is the store
 * @returns {HTMLElement}
 */
const DatePick = ({htmlFor, label, name, changeValue, error, message, isSubmit}) => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [errorDate, setErrorDate] = useState(false)

    // function to know if the employee is above 18 and below 70
    const isGoodAge = (date) => {
        const difference = Date.now() - date.getTime();
        const age= new Date(difference);
        const result = Math.abs(age.getUTCFullYear() - 1970)
        
        return result >= 18 && result <= 70
    };
    
    // to disable days after today (for start date)
    const isEntry = (date) =>{
        return date <= Date.now();
    }

    // reset startDate when the form is reset
    useEffect(() => {
        if (!isSubmit) {
            setStartDate(new Date());
        }
    }, [isSubmit]);
    

    // to set the value in the employee array
    const handleChange = (date, name)=> {

        setStartDate(date)
        const  value  = date;
        const difference = Date.now() - date.getTime();
        const age= new Date(difference);
        const result = Math.abs(age.getUTCFullYear() - 1970)

        if(htmlFor === "date-of-birth"){
            
            if(result >= 18 && result <= 70){
                error = false;
                setErrorDate(false)
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value.toLocaleDateString("en-US")
                }));
            }else{
                console.log(value, 'error')
                setErrorDate(true)
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ""
                }));
            } 
        }else{
            
            if(date.getTime() < Date.now()){
                setErrorDate(false)
                error = false;
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value.toLocaleDateString("en-US")
                }));
            }else{
                console.log(value, 'error')
                setErrorDate(true)
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
            <DatePicker
                        name={name} 
                        id={htmlFor}
                        dateFormat="MM/dd/yyyy"
                        selected={startDate}
                        onChange={date => handleChange(date, name)}
                        filterDate={name === 'dateOfBirth'? isGoodAge : isEntry}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
                    />
            {(error === true || errorDate === true) ? <Error message={message} /> : '' }
        </div>
    );
};

DatePick.propTypes = {
    htmlFor: PropTypes.string, 
    label: PropTypes.string,
    name: PropTypes.string,
    changeValue: PropTypes.func, 
    error: PropTypes.bool, 
    message: PropTypes.string, 
    isSubmit: PropTypes.bool,
}

export default DatePick;