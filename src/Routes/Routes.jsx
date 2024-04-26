import React from 'react';
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ContactUs from '../Pages/ContactUs';
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from '../Pages/ErrorPage';

  const routes = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout> ,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/contactus",
          element:<ContactUs></ContactUs>,
        },
      ]
      
    },
  ]);
export default routes;