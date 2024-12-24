import React, { useRef } from 'react'

// slider

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import categoryImg1 from '../assets/asset_30.jpeg'
import categoryImg2 from '../assets/asset_31.jpeg'
import categoryImg3 from '../assets/asset_32.jpeg'
import categoryImg4 from '../assets/asset_33.jpeg'
import categoryImg5 from '../assets/asset_34.jpeg'


// react icon

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { MdArrowOutward } from "react-icons/md";

let Category = [
    {
        id: 1,
        categoryImage: categoryImg1,
        btnDescription: 'Clothing'
    },
    {
        id: 2,
        categoryImage: categoryImg2,
        btnDescription: 'Sunglasses'
    },
    {
        id: 3,
        categoryImage: categoryImg3,
        btnDescription: 'Bags'
    },
    {
        id: 4,
        categoryImage: categoryImg4,
        btnDescription: 'Fashion'
    },
    {
        id: 5,
        categoryImage: categoryImg5,
        btnDescription: 'Accessories'
    }


]

const CategorySlide = () => {

    const slider = useRef(null);

    function handleNextButtonOnClick() {
        // console.log("button trigger")
        slider.current.slickNext()
    }
    
    function handlePrevButtonOnClick() {
        // console.log("button trigger")
        slider.current.slickPrev()
    }

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1149,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (

        <div className='flex flex-col overflow-x-hidden px-4 lg:px-8  md:my-10 lg:mx-5 '>

            <div className='flex gap-4 items-center mb-4 my-10' >
                <div className='flex gap-2 '>

                    <p className='text-lg border-2 p-1 rounded-full hover:bg-black hover:text-white duration-300 hover:duration-300 category_prev ' onClick={handlePrevButtonOnClick} ><IoIosArrowBack /></p>
                    <p className='text-lg border-2 p-1 rounded-full hover:bg-black hover:text-white duration-300 hover:duration-300 ' onClick={handleNextButtonOnClick}> <IoIosArrowForward /></p>

                </div>

                <p className='font-semibold'>SHOP BY CATEGORIES</p>
            </div>

            <div className='h-[50%] w-[100%] flex flex-col md:flex-row  gap-2 '>

                {/* <div className='absolute z-10 right-0 flex  flex-col justify-end gap-4  bg-white  rounded-md h-full w-1/6 border-2 p-3'>
                    <p className=' text-2xl '>Discover all new items</p>
                    <a href="#" className='text-2xl border-2 p-1 rounded-full hover:bg-black hover:text-white duration-300 hover:duration-300 w-fit '>  <MdArrowOutward className=' ' /></a>
                </div> */}

                <div className='category-slider w-full lg:w-[75%]'>

                    <div className="slider-container">

                        <Slider {...settings} className='categoryArrows' ref={slider}>

                            {
                                Category.map((current, index) => {
                                    return (

                                        <CategoryDetails key={current.id} details={current} />

                                    );
                                })}

                        </Slider>

                    </div>
                    {/* {
                        Category.map((current) => {
                            return (
                                <CategoryDetails key={current.id} details={current} />
                            )
                        }
                        )
                    } */}
                </div>

                <div className='lg:w-[25%] border border-black rounded-lg p-3 lg:p-8 gap-5 flex  lg:flex-col justify-between  lg:justify-end md:mx-5'>
                    <p className='text-xl md:text-2xl'>Discovery all new items</p>
                    <a href="" className='border border-black rounded-full w-fit h-fit p-2 sm:p-3 lg:p-4  text-black bg-white  hover:bg-black hover:text-white'>

                        <MdArrowOutward />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CategorySlide


function CategoryDetails({ details }) {

    return (
        <div>
            <div className="relative rounded-md overflow-hidden  h-fit mx-1 md:mx-5 group">
                <img
                    src={details.categoryImage}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover group-hover:scale-105 duration-1000 hover:duration-1000 "

                />
                {/* <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div> */}
                <div className="absolute bottom-4 left-4 text-left">

                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm hover:text-smfont-semibold text-black bg-white p-2 gap-2 duration-700 hover:duration-700 hover:bg-black hover:text-white group/btn">
                        {details.btnDescription}
                        <MdArrowOutward className='hidden group-hover/btn:block  ' />
                    </button>
                </div>
            </div>
        </div>
    )
}