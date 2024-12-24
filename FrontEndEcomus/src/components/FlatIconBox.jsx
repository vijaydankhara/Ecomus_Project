import React from 'react'

//icon
import { BsBox } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const BoxDetails = [
    {
        tittle: "Free Shipping",
        description: 'Free shipping over order $120',
        icon: <BsBox />
    },
    {
        tittle: "Flexible Payment",
        description: 'Pay with Multiple Credit Cards',
        icon: <MdOutlinePayment />
    },
    {
        tittle: "14 Day Returns",
        description: 'Within 30 days for an exchange',
        icon: <IoMdReturnLeft />
    },
    {
        tittle: "Premium Support",
        description: 'Outstanding premium support',
        icon: <BiSupport />

    },
]

const FlatIconBox = () => {
    return (
        <div className='h-1/2 px-5 md:px-20 lg:px-32 px-auto' >

            <div className='grid  sm:grid-cols-2 grid-cols-1 lg-1150:grid-cols-4 gap-4 justify-center items-center w-full h-full flatIconBox '>
                {
                    BoxDetails.map((current, index) => {
                        return (
                            <IconBox key={index} details={current} />
                        )
                    })
                }


            </div>

        </div>
    )
}

export default FlatIconBox

function IconBox({ details }) {
    return (
        <>
            <div className='border-2 flex flex-col flex-nowrap text-nowrap w-full justify-center  items-center text-center p-6 gap-6 rounded-xl'>
                <div className=' text-4xl'>
                    {details.icon}
                </div>
                <div className=' leading-5'>
                    <p className='font-semibold text-lg '>{details.tittle}</p>
                    <p className='text-[14px]'>{details.description}</p>
                </div>
            </div>

        </>
    )

}