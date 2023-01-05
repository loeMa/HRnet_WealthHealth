import { DataTable } from 'datable-react';
import React from 'react';
import { useSelector } from 'react-redux';
import {labels} from '../data/data-labels.js';
import { createEmployee } from '../feature/employee.slice.js';
import Header from '../components/Header'
import Button from '../components/Button.js';

/* import data from '../data/MOCK_DATA.json'
import { exampleData, exampleLabels } from '../data/data-mock'; */

const EmployeesList = () => {


    const selector = useSelector(createEmployee);
    const employee = selector.payload.employees.employees
    
    return (
        <div className='list'>
            <Header />
            <div className='list__content'>
                <h2>Current Employees</h2>
                <DataTable labels={labels} data={employee} firstBackground='#546e03' language={true} /> 
                <Button goto={'/'} text='Create an new employee' classname={'list__content--btn'} label={'go to page create employee'} />
            </div>
        </div>
    );
};

export default EmployeesList;