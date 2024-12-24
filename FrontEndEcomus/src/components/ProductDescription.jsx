import React from 'react'
import DescriptionNav from './DescriptionNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const ProductDescription = () => {
    return (

        // <BrowserRouter>
        //     <DescriptionNav />
        //     <Routes>
        //         <Route path="/description" element={<Descriptions />}></Route>
        //         <Route path="/review" element={<Reviews />}></Route>
        //         <Route path="/shipping" element={<Shippings />}></Route>
        //         <Route path="/returnpolicy" element={<Returnpolicy />}></Route>
        //     </Routes>
        // </BrowserRouter>

        // <div className='flex gap-6'>

        //     <div onClick={Descriptions}>Description</div>
        //     <div onClick={Reviews}>Review</div>
        //     <div onClick={Shippings}>Shipping</div>
        //     <div onClick={Returnpolicy}>Return policy</div>


        // </div>

        <div>
            <Descriptions />

        </div>

    )
}

export default ProductDescription


function Descriptions() {
    // console.log('Description');
    return (
        <div className='my-5 p-8 border flex flex-col gap-8 '>
            <div>
                <p>Button-up shirt sleeves and a relaxed silhouette. It's tailored with drapey, crinkle-texture fabric that's made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.</p>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-5'>
                    {/* Features section */}
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl font-semibold'>Features</p>
                        <ul className='flex flex-col gap-5'>
                            <li>Front button placket</li>
                            <li>Adjustable sleeve tabs</li>
                            <li>Babaton embroidered crest at placket and hem</li>
                        </ul>
                    </div>

                    {/* Materials Care */}
                    <div className='flex flex-col gap-5'>
                        <p className='text-xl font-semibold'>Materials Care</p>
                        <ul className='flex flex-col gap-5'>
                            <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                            <li>Care: Hand wash</li>
                            <li>Imported</li>
                        </ul>
                    </div>
                </div>

                {/* Materials Care */}
                <div className='flex flex-col gap-5'>
                    <p className='text-xl font-semibold'>Materials Care</p>
                    <div className='flex flex-col gap-5'>


                        <div>
                            <span>Machine wash max. 30ºC. Short spin.</span>
                        </div>
                        <div>
                            <span>Iron maximum 110ºC.</span>
                        </div>
                        <div>
                            <span>Do not bleach/bleach.</span>
                        </div>
                        <div>
                            <span>Do not dry clean.</span>
                        </div>
                        <div>
                            <span>Tumble dry, medium hear.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Reviews() {
    console.log('Review');
    return (
        <div>
            This is Review section
        </div>
    )
}

function Shippings() {
    console.log('Shipping');
    return (
        <div>
            This is Shipping section
        </div>
    )
}

function Returnpolicy() {
    console.log('Return policy');

    return (
        <div>
            This is Return policy section
        </div>
    )
}
