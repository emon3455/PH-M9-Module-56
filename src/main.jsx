import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Component/Layout';
import Home from './Component/Home';
import OrderRevies from './Component/OrderRevies';
import Contact from './Component/Contact';
import About from './Component/About';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("tshirts.json")
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
