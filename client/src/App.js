import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./views/Home";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import SignIn from "./views/SignIn";
import Signup from "./views/SignUp";
import Projects from "./views/Projects";
import Header from './components/Header';

function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<SignIn />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App