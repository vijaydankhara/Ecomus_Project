import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import GirlImg_1 from '../assets/asset_66.jpeg'
import GirlImg_2 from '../assets/asset_69.jpeg'

const ShopTheLook = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 0,
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 0,
                    infinite: false,
                    dots: false,
                    swipe: false,
                    swipeToSlide: false,
                    touchMove: false,
                    draggable: false,
                    accessibility: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true,
                    accessibility: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    draggable: true,
                    accessibility: true,
                }
            }
        ]
    };
    return (
        <div className=' h-fit pt-4 flex flex-col justify-between py-20'>
            <div className='flex flex-col items-center gap-3 mb-8 px-4'>
                <p className='text-[43px] '>Shop the look</p>
                <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>

            </div>

            <Slider {...settings} className='grid md:grid-cols-2'>

                <img src={GirlImg_2} alt="" className=' h-fit w-fit' />
                <img src={GirlImg_1} alt="" className=' h-fit w-fit' />

            </Slider>
        </div>

    )
}

export default ShopTheLook
