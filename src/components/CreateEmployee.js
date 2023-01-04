import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import Input from './Input';
import {states, workDepartment} from '../data/dataDropdown';
import DatePick from './DatePick'; 
import { createEmployee } from '../feature/employee.slice';
import Modal from './Modal';





const CreateEmployee = () => {


    const initialState = {
        firstName:"",
        lastName: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: states[0].name,
        zipCode: "",
        department: workDepartment[0].name,
        startDate: new Date().toLocaleDateString("en-US"),
        formValid : []
    }

    const dispatch = useDispatch();
    const [employee, setEmployee] = useState(initialState);
    const [isShowing, setIsShowing] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const spanError = document.querySelectorAll('.error');
    let array =[];


    // to know if the array of response has empty object
    const isEmptyObject = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
            
            if(value === ''){
                array.push(key)
            }
        }
    }

    // to save the new employee into the redux state
    const saveEmployee = (e) =>{
        e.preventDefault();

        isEmptyObject(employee)
        setIsClick(true)

        if(array.length === 0 && spanError){
            dispatch(createEmployee(employee));
            setEmployee(initialState)
            setIsShowing(true)
            setIsClick(false)
            setIsSubmit(true)
            console.log(employee)

        } else{
            console.log('error')
        }
    }

    return (
        <div className='create'>
            <h2>Create Employee</h2>
            <form className='create__form' name='form' onSubmit={saveEmployee}>
                
                <Input  htmlFor={"first-name"} label={"First Name"} type={"text"} value={employee.firstName} error={!employee.firstName && isClick === true ? true : false} message={'Please enter only letter'} name={'firstName'} isClick={isClick} changeValue={ setEmployee} />
                <Input htmlFor={"last-name"} label={"Last Name"} type={"text"} value={employee.lastName}  error={!employee.lastName && isClick === true ? true : false} message={'Please enter only letter'} name={'lastName'} isClick={isClick} changeValue={ setEmployee} />
                <DatePick htmlFor={"date-of-birth"} label={"Date of Birth"} error={!employee.birthDate && isClick === true ? true : false}  message={'The date of birth field is required'} name={'dateOfBirth'} isSubmit={isSubmit} isClick={isClick} changeValue={ setEmployee} />
                
                <fieldset className="create__form__address">
                    <legend>Address</legend>
                    
                    <Input htmlFor={"street"} label={"Street"} type={"text"} error={!employee.street && isClick === true ? true : false} message={'Please enter a valid adress'} name={'street'} value={employee.street} isClick={isClick} changeValue={ setEmployee}/>
                    <Input htmlFor={"city"} label={"City"} type={"text"} error={!employee.city && isClick === true? true : false} message={'Please enter only letter'} name={'city'} value={employee.city} isClick={isClick} changeValue={ setEmployee}/>
                    <Dropdown name={"state"} label={"State"} options={states} value={employee.state} onChange={(e) => setEmployee({...employee, state: e.target.value})} />
                    <Input htmlFor={"zip-code"} label={"Zip Code"} type={"number"} error={!employee.zipCode && isClick === true ? true : false} message={'Please enter only number'} name={'zipCode'} value={employee.zipCode} isClick={isClick} changeValue={ setEmployee} />
                    
                </fieldset>

                <Dropdown name={"department"} label={"Department"} options={workDepartment} value={employee.department} isClick={isClick} onChange={(e) => setEmployee({...employee, department: e.target.value})} />
                <DatePick htmlFor={"start-date"} label={"Start Date"} name={'startDate'} isSubmit={isSubmit} changeValue={ setEmployee} />
                
                <div className='create__form__button'>
                    <button className='create__form__button--style' type='submit'>Save</button>
                </div>
                
            </form>
            {isShowing === true && <Modal IsShowing={setIsShowing} isSubmit={setIsSubmit} />}
        </div>
    );
};

export default CreateEmployee;