import React from 'react'
import Logo from '../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    return (
        <div>
            {/* Header Section Start */}

            <header className='relative w-[100%]'>
                <nav className='  w-full  flex justify-between mx-3 lg:mx-0 py-5 items-center  '>

                    {/* nav icon */}
                    <div className='relative lg:hidden flex items-center'>
                        <Sheet>
                            <SheetTrigger><RiMenu2Fill className='text-xl font-semibold hover:duration-300 hover:text-red-600' /></SheetTrigger>
                            <SheetContent side={"left"}>
                            <SheetTitle></SheetTitle>
                                <SheetHeader>   
                  
                                 <ul className='flex flex-col gap-4 font-semibold text-lg '>
                                        <li> <NavLink to='/'>Home</NavLink></li>
                                        <li> <NavLink to='/shop'>Shop</NavLink></li>
                                        <li> <NavLink to='/product'>Products</NavLink></li>
                                        {/* <li onClick={page_details()}> <NavLink to='/page' className='flex place-items-center gap-1' >Pages <IoIosArrowDown className='relative top-0.5' /></NavLink> */}
                                        <li className=''> <NavLink to='/about'>About</NavLink></li>

                                        {/* </li> */}
                                        <li> <NavLink to='blog'>Blog</NavLink></li>
                                        <li> <NavLink to='buynow'>Buy now</NavLink></li>
                                     </ul>
                                </SheetHeader>    
                                    <SheetDescription>
                                    </SheetDescription>                  
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* ecomus logo */}
                    <div className='text-center pl-4 max-md:p-0 '>
                        <NavLink to='/'>
                            <img src={Logo} alt="" className='h-4 sm:h-auto' />
                        </NavLink>

                    </div>

                    {/* Nav list */}
                    <ul className='flex gap-4 font-semibold text-lg max-lg:hidden'>
                        <li> <NavLink to='/'>Home</NavLink></li>
                        <li> <NavLink to='/shop'>Shop</NavLink></li>
                        <li> <NavLink to='/product'>Products</NavLink></li>
                        {/* <li onClick={page_details()}> <NavLink to='/page' className='flex place-items-center gap-1' >Pages <IoIosArrowDown className='relative top-0.5' /></NavLink></li> */}
                        <li className=''> <NavLink to='/about'>About</NavLink></li>

                        {/* </li> */}
                        <li> <NavLink to='blog'>Blog</NavLink></li>
                        <li> <NavLink to='buynow'>Buy now</NavLink></li>
                    </ul>

                    {/* icon */}
                    <div className='flex gap-1 md:gap-3 mr-10 md:mr-12 lg:mr-14 xl:mr-16 text-lg *:*:duration-300 '>
                        <Link><IoSearch className='hover:text-red-600' /></Link>
                        <NavLink to={'/authform'} ><FiUser className=' max-md:hidden hover:text-red-600' /></NavLink>
                        <Link><FaRegHeart className=' max-md:hidden hover:text-red-600' /></Link>
                        <Link><RiShoppingBag2Line className='hover:text-red-600' /></Link>
                    </div>
                </nav>
            </header>

            {/* Header Section End */}


            <Outlet />
        </div>
    )
}

export default Navbar

