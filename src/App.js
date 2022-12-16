import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createEmployee } from "./feature/employee.slice";

import EmployeesList from "./pages/EmployeesList";
import Home from "./pages/Home";


function App() {

  useSelector(createEmployee)

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/employee-list" element={<EmployeesList/>} />
          
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
