import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employee.slice";

export const store = configureStore({
    reducer:{
        employees: employeeReducer,
    }
})