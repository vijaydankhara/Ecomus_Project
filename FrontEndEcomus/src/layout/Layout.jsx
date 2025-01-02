import React from 'react'
import Index from '../pages/Index'
import Shop from '../pages/Shop'
import Products from '../pages/Products'
import Blog from '../pages/Blog'
import Buynow from '../pages/Buynow'
import Pages from '../pages/Pages'
import Navbar from '../components/Navbar'
import AboutUs from '../pages/AboutUs'
import AuthForm from '../pages/AuthForm'
import UserProfile from '../pages/UserProfile'
import Wishlist from '../pages/Wishlist'
import AddToCart from '../pages/AddToCart'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const navList = createBrowserRouter([
    {
        path: '',
        element: <Navbar />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/product',
                element: <Products />
            },
            {
                path: '/about',
                element: <AboutUs />,
                // children: [

                //     {
                //         path: '/page/about',
                //         element: <AboutUs />
                //     }
                // ]
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/buynow',
                element: <Buynow />
            },
            {
                path: '/authform',
                element: <AuthForm/>
            },
            {
                path: '/userprofile',
                element: <UserProfile/>
            },
            {
                path: '/wishlist',
                element: <Wishlist/>
            },
            {
                path: '/addtocart',
                element: <AddToCart/>
            },
        ]
    }
])

const Layout = () => {
    return (

        <div className=''>
            <RouterProvider router={navList}></RouterProvider>

        </div>
    )
}

export default Layout