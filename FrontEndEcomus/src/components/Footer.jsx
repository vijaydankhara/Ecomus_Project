import React from "react";

// icon
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTiktok, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";


// images
import visa from '/asset_83.png'
import paypal from "/asset_84.png";
import masterCard from '/asset_85.png'
import amex from '/asset_86.png'
import dinnerclub from '/asset_87.png'
import Logo from '../assets/logo.svg'


const help_detail = [
    {
        desc: "Privacy Policy"
    },
    {
        desc: "Returns + Exchanges"
    },
    {
        desc: "Shipping"
    },
    {
        desc: "Terms & Conditions"
    },
    {
        desc: "FAQ's"
    },
    {
        desc: "Compare"
    },
    {
        desc: "My Wishlist"
    },
]
const about_detail = [
    {
        desc: "Our Story"
    },
    {
        desc: "Visit Our Store"
    },
    {
        desc: "Contact Us"
    },
    {
        desc: "Account"
    },

]
const social_detail = [
    {
        desc: <BiLogoFacebook />

    },
    {
        desc: <FaXTwitter />
    },
    {
        desc: <FaInstagram />
    },
    {
        desc: <FaTiktok />
    },
    {
        desc: <FaPinterestSquare />
    },

]



// import logo from "../../assets/logo-white.svg";

export default function Footers() {
    return (
        <footer className="bg-white text-black flex  h-auto   items-center flex-col px-8  w-screen border-t-2 mt-14">
            <div className="container  flex flex-col md:flex-row h-full w-screen justify-between mt-8">
                <div className=" flex flex-col lg:flex-row sm:w-[50%] lg:w-1/2 justify-between sm:gap-4 ">
                    <div className="mb-6 md:mb-0  lg:w-[50%] flex flex-col gap-3 text-[14px] text-black">
                        <a href="/">

                            <img src={Logo} alt="" className="mb-5" />
                        </a>

                        {/* <img src={logo} alt="logo" className="mb-4 lg:w-full sm:w-1/2" /> */}
                        <p className="sm:w-10/12 lg:w-full w-full">
                            Address: 1234 Fashion Street, Suite 567 <br />New York, NY 10001
                        </p>
                        <p className="flex gap-1">
                            Email: <a href=" " className="text-gray-700 font-semibold ">info@fashionshop.com</a>
                        </p>
                        <p className="text-muted-foreground">
                            Phone: <span>(212) 555-1234</span>
                        </p>


                        <a href="#" className="flex items-center text-center text-primary  underline hover:underline hover:text-[red] hover:duration-300 duration-300">
                            <span>
                                Get direction
                            </span>
                            <MdOutlineArrowOutward className="text-center place-items-center" />
                        </a>


                        <div className="flex gap-3 sm:w-[500px]">
                            {
                                social_detail.map((current, index) => {
                                    return (

                                        <Social_media key={index} details={current} />

                                    );
                                })}

                        </div>
                    </div>
                    <div className="mb-6 md:mb-0 lg:w-[30%]">
                        <h3 className="mb-5 text-[18px]">Help</h3>
                        <ul className="list-none flex flex-col gap-1 text-[14px] duration-1000 text-black ">
                            {
                                help_detail.map((current, index) => {
                                    return (

                                        <Help_details key={index} details={current} />

                                    );
                                })}

                        </ul>
                    </div>
                </div>

                <div className=" flex flex-col lg:flex-row sm:gap-14 lg:gap-0 sm:w-[50%] lg:w-[45%] justify-between ">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-[18px] mb-5">About us</h3>
                        <ul className="list-none flex flex-col gap-3 text-[14px] mt-2 text-black">
                            {
                                about_detail.map((current, index) => {
                                    return (

                                        <About_details key={index} details={current} />

                                    );
                                })}

                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0 flex flex-col lg:w-[50%]  w-full gap-5">
                        <h3 className="font-semibold ">Sign Up for Email</h3>
                        <p className="text-[14px] w-full  text-black">
                            Sign up to get first dibs on new arrivals, sales, exclusive
                            content, events and more!
                        </p>
                        <div className="flex relative items-cente justify-center w-fit md:w-full p-2 border">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="border  border-transparent  rounded-l-lg p-2   md:w-full h-12 "
                            />
                            <a href="" className="bg-black md:w-full h-fit text-white text-md justify-center font-semibold rounded-e-sm sm:py-3 md:px-3 px-2 py-3 md:py-3  flex items-center gap-1 relative before:absolute before:content-[''] before:BgGradientMove before:h-full before:w-full before:translate-x-[100%] hover:before:-translate-x-[150%] before:duration-1000 overflow-hidden z-0 before:-skew-x-12 hover:before:BgGradient ">
                                <span>Subscribe</span>
                                <MdOutlineArrowOutward className='text-white font-bold text-lg' />

                            </a>
                        </div>
                        {/* Dropdown */}
                        <div className="flex justify-around">

                            <div className="text-white flex items-center gap-2 relative">
                                <p>ENGLISH</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <p className=" bg-gray-300 w-full mt-10 h-[1px]"></p>
           
            <div className="flex sm:flex-row flex-col items-center gap-3 sm:gap-0 sm:justify-between w-full py-6">
                <p className="text-[14px] text-[#545454] ">
                    © 2024 Ecomus Store. All Rights Reserved
                </p>

                <div className="flex gap-2">
                    <img src={visa} alt="" />
                    <img src={paypal} alt="" />
                    <img src={masterCard} alt="" />
                    <img src={amex} alt="" />
                    <img src={dinnerclub} alt="" />

                </div>
            </div>
            {/* devloper name */}

        </footer>
    );
}

function Help_details({ details }) {
    return (
        <>

            <li>
                <a
                    href="#"
                    className="text-muted-foreground hover:text-[red] duration-300 hover:duration-300"
                >
                    {details.desc}
                </a>
            </li>
        </>
    )
}
function About_details({ details }) {
    return (
        <>

            <li>
                <a
                    href="#"
                    className="text-muted-foreground hover:text-[red] duration-300 hover:duration-300"
                >
                    {details.desc}
                </a>
            </li>
        </>
    )
}
function Social_media({ details }) {
    return (
        <>

            <div className="w-[40px] h-[40px]  flex items-center justify-center rounded-[50%] p-1  border">
                <i className="text-2xl">
                    {details.desc}

                </i>
            </div>
        </>
    )
}
