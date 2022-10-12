import { createSlice } from "@reduxjs/toolkit"


const initialState = {

    firstName:"",
    lastName: "",
    birthDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    StartDate: "",
    department: "",

}

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        createEmployee: (state, {payload}) =>{
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.birthDate = payload.birthDate;
            state.street = payload.street;
            state.city = payload.city;
            state.state = payload.state;
            state.zipCode = payload.zipCode;
            state.StartDate = payload.StartDate;
            state.department = payload.department;
        }
    }
})

export const { createEmployee } = employeeSlice.actions;
export const employee = (state) => state.employees;
export default employeeSlice.reducer;