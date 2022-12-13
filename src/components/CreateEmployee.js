import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import Input from './Input';
import {states, workDepartment} from '../data/data';
import DatePick from './DatePick'; 
import { controlAge } from '../data/controlInputs';
import { createEmployee } from '../feature/employee.slice';
import Modal from './Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
import Error from './Error';


const CreateEmployee = () => {

    const [error, setError ] = useState(false)
    const [employee, setEmployee] = useState({
        firstName:"",
        lastName: "",
        birthDate: "",
        street: "",
        city: "",
        state: states[0].name,
        zipCode: "",
        department: workDepartment[0].name,
        startDate: new Date().toLocaleDateString(),
    });
    const emptyInput =[];
    const [isShowing, setIsShowing] = useState(false);
    const dispatch = useDispatch();
    
    const isEmptyObject = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
            //console.log(`${key}: ${value}`);
            if(value === ''){
                //emptyInput.push(key)
                
                return true
            }
            return false
        }
    }

    const saveEmployee = (e) =>{
        e.preventDefault();
        //isEmptyObject(employee)
        if(!isEmptyObject(employee)){
            console.log('yo')
            dispatch(createEmployee(employee));
            console.log(employee)
            setIsShowing(true)
        } else{
            console.log(e.target)
            setError(true)
            /* console.log(emptyInput, !employee.firstName)
            emptyInput.map(name =>{
                const inputSelect = document.getElementsByName(name);
                
                
            }) */
        }
        console.log(employee)
        
    }

    return (
        <div className='create'>
            <h2>Create Employee</h2>
            <form className='create__form' onSubmit={saveEmployee}>
                
                <Input htmlFor={"first-name"} label={"First Name"} type={"text"} error={error} message={'Fistname field is required'} name={'firstName'} value={employee.firstName} changeValue={ setEmployee} />
                <Input htmlFor={"last-name"} label={"Last Name"} type={"text"} error={error} message={'Lastname field is required'} name={'lastName'} value={employee.lastName} changeValue={ setEmployee} />
                <DatePick htmlFor={"date-of-birth"} label={"Date of Birth"} error={error} message={'The date of birth field is required'} name={'birthDate'} changeValue={ setEmployee} />
                
                <fieldset className="create__form__address">
                    <legend>Address</legend>
                    
                    <Input htmlFor={"street"} label={"Street"} type={"text"} error={error} message={'The street field is required'} name={'street'} value={employee.street} changeValue={ setEmployee}/>
                    <Input htmlFor={"city"} label={"City"} type={"text"} error={error} message={'The city field is required'} name={'city'} value={employee.city} changeValue={ setEmployee}/>
                    <Dropdown name={"state"} label={"State"} options={states} onChange={(e) => setEmployee({...employee, state: e.target.value})} />
                    <Input htmlFor={"zip-code"} label={"Zip Code"} type={"number"} error={error} message={'Zip code field is required'} name={'zipCode'} value={employee.zipCode} changeValue={ setEmployee} />
                    
                </fieldset>

                <Dropdown name={"department"} label={"Department"} options={workDepartment}  onChange={(e) => setEmployee({...employee, department: e.target.value})} />
                <DatePick htmlFor={"start-date"} label={"Start Date"} name={'startDate'} changeValue={ setEmployee} />
                
                <div className='create__form__button'>
                    <button className='create__form__button--style' type='submit'>Save</button>
                </div>
                
            </form>
            {isShowing === true && <Modal />}
        </div>
    );
};

export default CreateEmployee;