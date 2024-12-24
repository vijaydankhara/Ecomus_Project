import React from 'react'

// slick slider
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// shop images
import shop_img_1 from '../assets/asset_78.jpeg'
import shop_img_2 from '../assets/asset_79.jpeg'
import shop_img_3 from '../assets/asset_80.jpeg'
import shop_img_4 from '../assets/asset_81.jpeg'
import shop_img_5 from '../assets/asset_82.jpeg'


let icons_images = [
    {
        id: 1,
        icon_img: shop_img_1
    },
    {
        id: 2,
        icon_img: shop_img_2
    },
    {
        id: 3,
        icon_img: shop_img_3
    },
    {
        id: 4,
        icon_img: shop_img_4
    },
    {
        id: 5,
        icon_img: shop_img_5
    },

]




const Shop_gram = () => {

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
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
                    infinite: false,
                    dots: false,

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
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='h-fit pb-16'>
            <div className='flex flex-col items-center gap-3 mb-8 px-4'>
                <p className='text-[43px] '>Shop gram</p>
                <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>

            </div>

            <div className="slider-container mx-4 ">
                <Slider {...settings}>
                    {
                        icons_images.map((currents, index) => {
                            return (

                                <Shop_details key={currents.id} detail={currents} />

                            );
                        })

                    }

                </Slider>
            </div>
        </div>
    )
}

export default Shop_gram


function Shop_details({ detail }) {

    return (

        <div className='border flex items-center justify-center mx-1 rounded-xl overflow-hidden'>
            <img src={detail.icon_img} alt="" className='rounded-xl hover:scale-105 duration-1000 hover:duration-1000 ' />
        </div>


    )
}
