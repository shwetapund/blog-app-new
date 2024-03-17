import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/SignUp";
import Projects from "./views/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/signup',
        element:<Signup />
    },
    {
        path:'/projects',
        element:<Projects />
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    }
])
root.render(
  <>
  <RouterProvider router={router}/>
  </>
);


