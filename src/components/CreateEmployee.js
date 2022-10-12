import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown';
import Input from './Input';
import {states, workDepartment} from '../data/data';

const CreateEmployee = () => {

    const [employee, setEmployee] = useState({
        firstName:"",
        lastName: "",
        birthDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
        startDate: "",
    })
    
    const dispatch = useDispatch();
    

    const saveEmployee = (e) =>{
        e.preventDefault();
console.log(employee)
        if(employee ){
            console.log("on a tout")
        }
    }

    return (
        <div className='create'>
            <h2>Create Employee</h2>
            <form className='create__form' onSubmit={saveEmployee}>
                
                <Input htmlFor={"first-name"} label={"First Name"} type={"text"} onChange={(e) => setEmployee({...employee, firstName: e.target.value})} />
                
                <Input htmlFor={"last-name"} label={"Last Name"} type={"text"} onChange={(e) => setEmployee({...employee, lastName: e.target.value})}/>
                    
                <Input htmlFor={"date-of-birth"} label={"Date of Birth"} type={"date"} onChange={(e) => setEmployee({...employee, birthDate: e.target.value})}/>
                
                <fieldset className="create__form__address">
                    <legend>Address</legend>
                    
                    <Input htmlFor={"street"} label={"Street"} type={"text"} onChange={(e) => setEmployee({...employee, street: e.target.value})} />
                    
                    <Input htmlFor={"city"} label={"City"} type={"text"} onChange={(e) => setEmployee({...employee, city: e.target.value})} />

                    <Dropdown name={"state"} label={"State"} options={states} onChange={(e) => setEmployee({...employee, state: e.target.value})} />
                    
                    <Input htmlFor={"zip-code"} label={"Zip Code"} type={"number"} onChange={(e) => setEmployee({...employee, zipCode: e.target.value})} />
                </fieldset>

                <Dropdown name={"department"} label={"Department"} options={workDepartment}  onChange={(e) => setEmployee({...employee, department: e.target.value})} />

                <Input htmlFor={"start-date"} label={"Start Date"} type={"date"} onChange={(e) => setEmployee({...employee, startDate: e.target.value})} />
                
                <div className='create__form__button'>
                    <button className='create__form__button--style' type='submit'>Save</button>
                </div>
                
            </form>
            
        </div>
    );
};

export default CreateEmployee;