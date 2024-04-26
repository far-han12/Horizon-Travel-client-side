import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import routes from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>   <HelmetProvider><RouterProvider router={routes} /></HelmetProvider>
<Toaster></Toaster>
</AuthProvider>
  </React.StrictMode>,
)
// Horizon Journeys