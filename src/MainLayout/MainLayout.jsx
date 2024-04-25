import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;