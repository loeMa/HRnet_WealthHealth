import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import Input from './Input';
import {states, workDepartment} from '../data/data';
import DatePick from './DatePick'; 
import { createEmployee } from '../feature/employee.slice';
import Modal from './Modal';




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

    let array =[];
    const [isShowing, setIsShowing] = useState(false);
    const dispatch = useDispatch();
    const [isClick, setIsClick] = useState(false)


    const isEmptyObject = (obj) => {
        for (const [key, value] of Object.entries(obj)) {
            
            if(value === ''){
                array.push(key)
            }
        }
    }



    const saveEmployee = (e) =>{
        e.preventDefault();
        isEmptyObject(employee)
        setIsClick(true)

        if(array.length === 0){
            dispatch(createEmployee(employee));
            console.log(employee)
            setIsShowing(true)

        } else{
            console.log('error')
            
        }
        /* console.log(employee) */
    }
    
    return (
        <div className='create'>
            <h2>Create Employee</h2>
            <form className='create__form' name='form' onSubmit={saveEmployee}>
                
                <Input  htmlFor={"first-name"} label={"First Name"} type={"text"} error={!employee.firstName && isClick === true ? true : false} message={'Please enter only letter'} name={'firstName'}  changeValue={ setEmployee} />
                <Input htmlFor={"last-name"} label={"Last Name"} type={"text"}  error={!employee.lastName && isClick === true ? true : false} message={'Please enter only letter'} name={'lastName'}  changeValue={ setEmployee} />
                <DatePick htmlFor={"date-of-birth"} label={"Date of Birth"} error={!employee.birthDate && isClick === true ? true : false}  message={'The date of birth field is required'} name={'birthDate'} changeValue={ setEmployee} />
                
                <fieldset className="create__form__address">
                    <legend>Address</legend>
                    
                    <Input htmlFor={"street"} label={"Street"} type={"text"} error={!employee.street && isClick === true ? true : false} message={'Please enter a valid adress'} name={'street'}  changeValue={ setEmployee}/>
                    <Input htmlFor={"city"} label={"City"} type={"text"} error={!employee.city && isClick === true? true : false} message={'Please enter only letter'} name={'city'}  changeValue={ setEmployee}/>
                    <Dropdown name={"state"} label={"State"} options={states} onChange={(e) => setEmployee({...employee, state: e.target.value})} />
                    <Input htmlFor={"zip-code"} label={"Zip Code"} type={"number"} error={!employee.zipCode && isClick === true? true : false} message={'Please enter only number'} name={'zipCode'}  changeValue={ setEmployee} />
                    
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