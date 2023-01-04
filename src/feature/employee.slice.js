import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    employees: []
}

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        createEmployee: (state, {payload}) =>{
            
            const employee = {
                firstName : payload.firstName,
                lastName : payload.lastName,
                dateOfBirth : payload.dateOfBirth,
                street : payload.street,
                city : payload.city,
                state : payload.state,
                zipCode : payload.zipCode,
                department : payload.department,
                startDate : payload.startDate,
            }
            state.employees.push(employee)
            
        }
    }
})

export const { createEmployee } = employeeSlice.actions;
export const employee = (state) => state.employees;
export default employeeSlice.reducer;