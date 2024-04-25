import React from 'react';
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
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
      ]
      
    },
  ]);
export default routes;