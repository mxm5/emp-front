import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import AddEmp from "./components/AddEmp";
import Navbar from "./components/Navbar";
import EmpList from "./components/EmpList";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index element={<EmpList/>}/>
                    <Route path="/" element={<EmpList/>}/>
                    <Route path="/employees" element={<EmpList/>}/>
                    <Route path="/add-emp" element={<AddEmp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
