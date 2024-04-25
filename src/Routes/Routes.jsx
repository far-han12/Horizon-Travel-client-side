import React from 'react';
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import {
    createBrowserRouter,
  } from "react-router-dom";

  const routes = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout> ,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
      ]
      
    },
  ]);
export default routes;