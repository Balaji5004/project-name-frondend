import React from "react";
import NavBar from "./components/NavBar";
import UploadScreen from "./components/UploadScreen";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";



function Home  ()  {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<NavBar/>}></Route>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/UploadScreen"  element={<UploadScreen/>}></Route>
  </Routes>
  </BrowserRouter>
  
   
    

 
 
  );
}

export default Home;
