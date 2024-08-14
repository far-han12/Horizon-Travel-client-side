import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {loading ,user} = useContext(AuthContext)
 if(loading){
    return <div className='fixed inset-0 flex justify-center items-center'>
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600 dark:border-cyan-600"></div>
  </div>
 }
 if(user){
    return children
 }
 return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;