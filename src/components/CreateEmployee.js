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
        StartDate: "",
        department: "",
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
                {/* {inputNames.map((input) =>{
                    return <Input htmlFor={input.id} label={input.name} type={input.type} />
                })}
                 */}

                <div className='create__form__group'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" onChange={(e) => setEmployee({...employee, firstName: e.target.value})} />
                </div>
                    
                <div className='create__form__group'>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" onChange={(e) => setEmployee({...employee, lastName: e.target.value})}/>
                </div>
                    
                <div className='create__form__group'>
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input type="date" id="date-of-birth"  onChange={(e) => setEmployee({...employee, birthDate: e.target.value})}/>
                </div>
                
                
                    
                <fieldset className="create__form__address">
                    <legend>Address</legend>
                    {/* {adressNames.map((input) =>{
                    return <Input htmlFor={input.id} label={input.name} type={input.type} />
                })} */}

                    <div className='create__form__group'>
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" onChange={(e) => setEmployee({...employee, street: e.target.value})}/>
                    </div>
                    
                    <div className='create__form__group'>
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" onChange={(e) => setEmployee({...employee, city: e.target.value})}/>
                    </div>
                    
                    <div className='create__form__group'>
                        <label htmlFor="state">State</label>
                        <Dropdown name={"state"} options={states} onChange={(e) => setEmployee({...employee, state: e.target.value})} />
                    </div>
                    
                    <div className='create__form__group'>
                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" onChange={(e) => setEmployee({...employee, zipCode: e.target.value})}/>
                    </div>
                    
                </fieldset>

                <div className='create__form__group'>
                    <label htmlFor="department">Department</label>
                    <Dropdown name={"department"} options={workDepartment}  onChange={(e) => setEmployee({...employee, department: e.target.value})} />
                    
                </div>
                <div className='create__form__group'>
                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" onChange={(e) => setEmployee({...employee, startDate: e.target.value})}></input>
                </div>
                <div className='create__form__button'>
                    <button className='create__form__button--style' type='submit'>Save</button>
                </div>
                
            </form>
            
        </div>
    );
};

export default CreateEmployee;