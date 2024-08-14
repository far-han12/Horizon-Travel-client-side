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
import Travelai from '../Components/Travelai';
import CountrySpots from '../Components/CountrySpots';

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
          loader: () => fetch("  https://react-tourism-server.vercel.app/tourist")
        },
        {
          path:"/mylist",
          element:<PrivateRoute><MyList></MyList></PrivateRoute>
        },
        {
          path:"/contactus",
          element:<ContactUs></ContactUs>,
        },
        {
          path:"/travelai",
          element:<Travelai></Travelai>,
        },
        {
          path: "/spot/bycountry/:country_Name",
          element: <CountrySpots />,
          loader: ({ params }) => fetch(`https://react-tourism-server.vercel.app/spot/bycountry/${params.country_Name}`)
        },
        {
          path:"/update/:id",
          element:<Update></Update>,
          loader: ({params}) => fetch(`  https://react-tourism-server.vercel.app/tourist/${params.id}`)
          },
        {
          path:"/viewdetails/:id",
          element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`  https://react-tourism-server.vercel.app/tourist/${params.id}`)
          },
      
       
      ]
      
    },
  ]);
export default routes;