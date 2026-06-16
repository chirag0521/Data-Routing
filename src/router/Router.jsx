import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Service from '../pages/Service'
import MainLayout from '../Layouts/MainLayout'
import AuthLayout from '../Layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'about',
                element:<About />,
            },
            {
                path:'service',
                element:<Service />
            },
            {
                path:'contact',
                element:<Contact />
            },
            {
                path:'auth',
                element:<AuthLayout />,
                children:[
                    {
                        path:'login',
                        element:<Login />
                    },
                    {
                        path:'register/:id', // register tab khule jab id ho
                        element:<Register />
                    }
                ]
            }
        ]
    },
])