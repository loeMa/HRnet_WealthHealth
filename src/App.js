import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmployeesList from "./pages/EmployeesList";
import Home from "./pages/Home";


function App() {
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
