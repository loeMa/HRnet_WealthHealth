import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import Input from './Input';
import {states, workDepartment} from '../data/data';
import DatePicker from './DatePicker';
import { controlAge } from '../data/controlInputs';
import { createEmployee } from '../feature/employee.slice';


const CreateEmployee = () => {

    const [employee, setEmployee] = useState({
        
    })
    
    const dispatch = useDispatch();
    
   
    const saveEmployee = (e) =>{
        e.preventDefault();
        if(Object.keys(employee).length === 9){
            dispatch(createEmployee(employee))
           }
console.log(employee)
        
    }

    return (
        <div className='create'>
            <h2>Create Employee</h2>
            <form className='create__form' onSubmit={saveEmployee}>
                
                <Input htmlFor={"first-name"} label={"First Name"} type={"text"} name={'firstName'} changeValue={ setEmployee} />
                <Input htmlFor={"last-name"} label={"Last Name"} type={"text"} name={'lastName'} changeValue={ setEmployee} />
                <DatePicker htmlFor={"date-of-birth"} label={"Date of Birth"} name={'birthDate'} changeValue={ setEmployee} />
                
                <fieldset className="create__form__address">
                    <legend>Address</legend>
                    
                    <Input htmlFor={"street"} label={"Street"} type={"text"} name={'street'} changeValue={ setEmployee}/>
                    <Input htmlFor={"city"} label={"City"} type={"text"} name={'city'} changeValue={ setEmployee}/>
                    <Dropdown name={"state"} label={"State"} options={states} onChange={(e) => setEmployee({...employee, state: e.target.value})} />
                    <Input htmlFor={"zip-code"} label={"Zip Code"} type={"number"} name={'zipCode'} changeValue={ setEmployee} />
                </fieldset>

                <Dropdown name={"department"} label={"Department"} options={workDepartment}  onChange={(e) => setEmployee({...employee, department: e.target.value})} />
                <DatePicker htmlFor={"start-date"} label={"Start Date"} name={'startDate'} changeValue={ setEmployee} />
                
                <div className='create__form__button'>
                    <button className='create__form__button--style' type='submit'>Save</button>
                </div>
                
            </form>
            
        </div>
    );
};

export default CreateEmployee;