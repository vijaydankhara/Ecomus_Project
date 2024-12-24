import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import small_img_1 from '../assets/asset_small_67.png'
import small_img_2 from '../assets/asset_small_71.png'
import small_img_3 from '../assets/asset_small_68.png'
import small_img_4 from '../assets/asset_small_70.png'

// icon images

import icon_img_1 from '../assets/asset_icon_72.png'
import icon_img_2 from '../assets/asset_icon_73.png'
import icon_img_3 from '../assets/asset_icon_74.png'
import icon_img_4 from '../assets/asset_icon_75.png'
import icon_img_5 from '../assets/asset_icon_76.png'
import icon_img_6 from '../assets/asset_icon_77.png'


// icon 

import { MdStar } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
// import { MdArrowOutward } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

let Clients = [
    {
        id: 1,
        tittle: 'Best Online Fashion Site',
        description: 'I always find something stylish and affordable on this web fashion site .',
        name: 'Robert smith',
        from: 'USA',
        img: small_img_1,
        img_desc: 'Jersey thong body',
        price: 105.95

    },
    {
        id: 2,
        tittle: 'Greate Selection and Quality',
        description: 'I love the variety of styles and the high-quality clothing on this web fashion site',
        name: 'Allen Lyn',
        from: 'France',
        img: small_img_2,
        img_desc: 'Cotton jersey top',
        price: 7.95

    },
    {
        id: 3,
        tittle: 'Best Online Fashion Site',
        description: 'I finally founsd a web fashion site with stylish and flattering options in my size.',
        name: 'Peter Rope',
        from: 'USA',
        img: small_img_3,
        img_desc: 'Ribbed modal T-shirt',
        price: 18.95

    },
    {
        id: 4,
        tittle: 'Greate Selection and Quality',
        description: 'I love the variety of styles and the high-quality clothing on this web fashion site',
        name: 'Hellen Ase',
        from: 'Japan',
        img: small_img_4,
        img_desc: 'Customer from Japan',
        price: 16.95

    },
]


let icons_images = [
    {
        id: 1,
        icon_img: icon_img_1
    },
    {
        id: 2,
        icon_img: icon_img_2
    },
    {
        id: 3,
        icon_img: icon_img_3
    },
    {
        id: 4,
        icon_img: icon_img_4
    },
    {
        id: 5,
        icon_img: icon_img_5
    },
    {
        id: 6,
        icon_img: icon_img_6
    }
]

const icon_img_slider = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 0,
        initialSlide: 0,


        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        accessibility: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1149,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true,
                    accessibility: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
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
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <>  <div className='imgSlider'>


            <div className="slider-container mx-4 overflow-hidden ">
                <Slider {...settings}>
                    {
                        icons_images.map((currents, index) => {
                            return (

                                <Image_sliders key={currents.id} detail={currents} />

                            );
                        })

                    }

                </Slider>
            </div>
        </div>
        </>
    )
}

function Image_sliders({ detail }) {

    return (

        <div className='border flex items-center justify-center p-4 '>

            <img src={detail.icon_img} alt="" className='' />
        </div>


    )
}


const Happy_client = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1149,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className='h-fit md:px-4'>
            <div className=' h-full happy-slider  my-auto'>
                <div className='flex flex-col justify-center items-center w-full mb-10'>
                    <p className='text-4xl font-semibold mb-4'>Happy Clients</p>
                    <p>Hear what they say about us</p>
                </div>
                <div className="slider-container mx-4 ">
                    <Slider {...settings}>
                        {
                            Clients.map((current, index) => {
                                return (

                                    <Clients_slider key={current.id} details={current} />

                                );
                            })}

                    </Slider>

                </div>
                <div className='my-20 h-full '>
                    {
                        icon_img_slider()
                    }
                </div>

            </div>
        </div>
    );
}


export default Happy_client

function Clients_slider({ details }) {
    return (

        <div className=' md:mx-4 group '>

            <div className='border flex flex-col gap-4 md:p-9 p-4  rounded-xl '>
                {/* review star icon section */}

                <div className='flex gap-3 text-xl'>
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                    <MdStar className=' text-orange-500 ' />
                </div>


                <p className='font-semibold'>{details.tittle}</p>
                <p>"{details.description}"</p>

                <div>
                    <p className='font-semibold text-sm'>{details.name}</p>
                    <p>Customer from {details.from}</p>
                </div>

                <div className=" ">
                    <hr />
                    <div className='flex items-center text-nowrap md:flex-row pt-4'>


                        <a href="" className='h-full min-w-fit'>
                            <img
                                src={details.img}
                                alt="Laptop"
                                className='h-full w-fit'
                            />
                        </a>


                        <div className="px-4 w-full">
                            <a href='' className="inline-flex items-center text-md hover:text-red-600 duration-300 hover:duration-300">
                                {details.img_desc}
                            </a>
                            <p className="mt-3 text-sm text-gray-900 flex items-center font-bold">
                                <BiDollar /> {details.price}
                            </p>
                        </div>


                    </div>
                    <div className={`relative z-0 h-[10px] w-[10px]   after:absolute  after:content-[''] after:h-[20px] after:w-[20px] after:text-xl after:text-red-600  after:block `}>
                        {/* hathe karvanu chhe */}
                    </div>
                </div>

            </div>
        </div>

    )
}

