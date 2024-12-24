import React from 'react'
import Product_details from '../components/Product_details'
import Footer from '../components/Footer'
// import { Link } from "next/link"

// icon
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TbLayoutGrid } from "react-icons/tb";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const Products = () => {
    return (
        <div>

       
        <div className='px-10'>
            <div className='my-6 flex  justify-between'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/product">Women</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Cotton jersey top</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='flex gap-2 text-2xl'>
                    <IoIosArrowBack />
                    <TbLayoutGrid />
                    <IoIosArrowForward />
                </div>
            </div>
            <Product_details />
        </div>
            <Footer/>
        </div>
    )
}

export default Products
