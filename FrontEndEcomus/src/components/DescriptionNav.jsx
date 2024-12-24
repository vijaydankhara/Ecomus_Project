import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';


const DescriptionNav = () => {
    return (
        <div>
            <ul className='flex gap-4 font-semibold text-lg max-lg:hidden'>
                <li> <NavLink to='/description'>Description</NavLink></li>
                <li> <NavLink to='/review'>Review</NavLink></li>
                <li> <NavLink to='/shipping'>Shipping</NavLink></li>
                <li> <NavLink to='/returnpolicy'>Return Policy</NavLink></li>

            </ul>
            <Outlet />
        </div>
    )
}

export default DescriptionNav
