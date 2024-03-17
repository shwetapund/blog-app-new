import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./views/Home";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/SignUp";
import Projects from "./views/Projects";

function App() {
  return (
    <>
     {/* <h1 className='text-3xl text-red-500'>app</h1> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login />}/>

     </Routes>
     </BrowserRouter>
    </>
   
  )
}

export default App