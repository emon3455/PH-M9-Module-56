import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {

    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Layout;