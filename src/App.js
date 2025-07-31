import React from "react";
import './App.css';
import Login from './components/login/Login';
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
