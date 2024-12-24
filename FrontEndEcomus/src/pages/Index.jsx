import React from 'react'

// Components
import CategorySlide from '../components/CategorySlide';
import Bestseller from '../components/Bestseller';
import { Sliders } from '../components/Slider';
import ShopTheLook from '../components/ShopTheLook';
import Happy_client from '../components/Happy_client';
import Shop_gram from '../components/Shop_gram';
import FlatIconBox from '../components/FlatIconBox';
import Footers from '../components/Footer';

const Index = () => {
    // console.log("index page");
    return (
        <div>
            <main>
                <Sliders />
                <CategorySlide />
                <div>
                    <div className='flex flex-col justify-center items-center w-full my-5 md:my-14 text-center '>
                        <p className='text-4xl font-semibold mb-4'>Best Seller</p>
                        <p className='text-sm md:text-base px-5'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
                    </div>
                    <Bestseller />
                </div>
                <ShopTheLook />
                <Happy_client />
                <Shop_gram />
                <FlatIconBox />
                <Footers />
            </main>
        </div>

    )
}

export default Index
