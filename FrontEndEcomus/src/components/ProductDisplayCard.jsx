import React, { useState } from 'react'
import { BiDollar } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { TbArrowsCross } from 'react-icons/tb'

const ProductDisplayCard = ({ product }) => {
    const [currentColor, setCurrentColor] = useState(product.product_color_images[0])
    console.log(product);

    return (
        <div className=' h-fit rounded-md mt-5 m-auto '>
            <div className=" h-fit w-fit  rounded-md overflow-hidden relative group/card">
                {/* card image */}
                <a href="">
                    <img
                        src={currentColor.product_image_link}
                        alt={currentColor.product_image_alt_text}
                        className="z-0 h-full w-full rounded-md object-cover hover:scale-105 duration-1000 hover:duration-1000 group-hover/card:opacity-0"
                    />
                </a>

                <div className='absolute h-full w-full inset-0 opacity-0 group-hover/card:opacity-100 duration-1000'>
                    <div className='relative'>
                        <div>
                            <img src={product.product_hover_image.product_image_link} alt="fd" className='hover:scale-105 duration-700' />
                        </div>
                        <div className=' flex flex-col gap-2 justify-center items-center absolute h-14 w-full bottom-0'>
                            <div className='flex gap-2 justify-center items-center'>
                                <RiShoppingBag2Line className='bg-white text-4xl p-2 rounded hover:bg-black hover:text-white' />
                                <FaRegHeart className='bg-white text-4xl p-2 rounded hover:bg-black hover:text-white' />
                                <TbArrowsCross className='bg-white text-4xl p-2 rounded hover:bg-black hover:text-white' />
                                <MdOutlineRemoveRedEye className='bg-white text-4xl p-2 rounded hover:bg-black hover:text-white' />
                            </div>
                            {
                                product.product_sizes && <div className='flex gap-2 items-center justify-center bg-[#00000044] w-full'>
                                    {
                                        product.product_sizes.map((crr) => {
                                            return <div className=' p-2 mb-10 text-white font-bold '>
                                                <span>
                                                    {crr}
                                                </span>
                                            </div>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-left text-sm md:text-base ">

                <p className='hover:text-red-500 hover:duration-300 my-1' >{product.product_name} </p>
                <p className='flex items-center' ><BiDollar /> {product.product_price} </p>

                <div className='flex gap-2 '>
                    {
                        product.product_color_images.map((crr) => { // for single condition use && otherwise use tarnery operator 
                            return <div onMouseOver={() => setCurrentColor(crr)} className={` ${currentColor.product_color == crr.product_color ? 'outline-1 outline outline-black outline-offset-2' : null} h-3 w-3 md:h-5 md:w-5 rounded-full shadow-[rgba(0,0,0,0.24)_0px_3px_8px] md:p-2`} style={{ backgroundColor: crr.product_color }}> </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDisplayCard
