import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Error from './Error';


const DatePick = ({htmlFor, label, name, changeValue, error, message}) => {
    
    const [startDate, setStartDate] = useState(new Date());

    const isGoodAge = (date) => {
        const difference = Date.now() - date.getTime();
        const age= new Date(difference);
        const result = Math.abs(age.getUTCFullYear() - 1970)
        
        return result >= 18 && result <= 70
    };
    
    const isEntry = (date) =>{
        return date <= Date.now();
    }

    const handleChange = (date, name)=> {

        setStartDate(date)
        const  value  = date;
        const difference = Date.now() - date.getTime();
        const age= new Date(difference);
        const result = Math.abs(age.getUTCFullYear() - 1970)

        if(htmlFor === "date-of-birth"){

            if(result >= 18 && result <= 70){
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value.toLocaleDateString()
                }));
            }else{
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: ""
                }));
            } 
        }else{
            
            if(date.getTime() < Date.now()){
                console.log(value, 'ok')
                changeValue(prevState => ( {
                    ...prevState,
                    [name]: value.toLocaleDateString()
                }));
            }else{
                console.log(value, 'nop')
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
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => handleChange(date, name)}
                        filterDate={name === 'birthDate'? isGoodAge : isEntry}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
                    />
            {error && <Error message={message} /> }
        </div>
    );
};

export default DatePick;