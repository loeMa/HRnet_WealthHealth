import { createSlice } from "@reduxjs/toolkit"


const initialState = {

    firstName:"",
    lastName: "",
    birthDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
    startDate: "",

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
            state.department = payload.department;
            state.startDate = payload.startDate;
        }
    }
})

export const { createEmployee } = employeeSlice.actions;
export const employee = (state) => state.employees;
export default employeeSlice.reducer;