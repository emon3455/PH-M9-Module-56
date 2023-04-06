import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './Component/Layout';
import Home from './Component/Home';
import OrderRevies from './Component/OrderRevies';
import Contact from './Component/Contact';
import About from './Component/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:  "/about",
        element: <About></About>
      },
      {
        path: "/orders",
        element: <OrderRevies></OrderRevies>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
