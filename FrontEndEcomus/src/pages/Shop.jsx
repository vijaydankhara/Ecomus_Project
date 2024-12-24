import React from 'react'
import page_image from '../assets/page_title_blog.png'
import Bestseller from '../components/Bestseller'
import Footers from '../components/Footer'

// icon 

import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

// Select Menu

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




const Shop = () => {
  return (
    <div className='mt-10'>

      <div style={{ backgroundImage: `url(${page_image})` }} className='text-center py-16  leading-9 '>
        <p className='text-4xl '>New Arrival</p>
        <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
      </div>

      <div className='w-[92%] m-auto mt-7 flex justify-between'>
        <button className='flex items-center gap-2 border px-3 py-2 hover:border-black rounded hover:duration-200 duration-200'>

          <BiMenuAltLeft className='text-2xl' />
          FILTER
        </button>



        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Featured" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        {/* Featured
          <IoIosArrowDown /> */}

        {/* <button className=' flex  items-center gap-20 border px-4 py-2 hover:border-black rounded hover:duration-200 duration-200'>
        </button> */}
      </div>

      <Bestseller />
      <div className='my-10'>

      </div>
      <Footers />
    </div>
  )
}

export default Shop






