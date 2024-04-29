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
import Addtourist from '../Pages/Addtourist';
import PrivateRoute from './PrivateRoute';
import Alltourists from '../Pages/Alltourists';
import MyList from '../Pages/MyList';
import Update from '../Pages/Update';
import ViewDetails from '../Components/ViewDetails';

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
          path:"/addtourists",
          element:<PrivateRoute><Addtourist></Addtourist></PrivateRoute>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/alltourists",
          element:<Alltourists></Alltourists>,
          loader: () => fetch("http://localhost:5000/tourist")
        },
        {
          path:"/mylist",
          element:<PrivateRoute><MyList></MyList></PrivateRoute>
          // loader: () =>  fetch("http://localhost:5000/mylist")
        },
        {
          path:"/contactus",
          element:<ContactUs></ContactUs>,
        },
        {
          path:"/update/:id",
          element:<Update></Update>,
          loader: ({params}) => fetch(`http://localhost:5000/tourist/${params.id}`)
          },
        {
          path:"/viewdetails/:id",
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/tourist/${params.id}`)
          },
       
      ]
      
    },
  ]);
export default routes;