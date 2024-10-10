import { HeartOutlined } from '@ant-design/icons'
import React from 'react'
import "./CardHeader.css"

const CardHeader = () => {
  return (
    <div className='card-header flex flex-col relative'>
      <div class="absolute inset-0 bg-black opacity-0"></div>
      <div className="head-line flex justify-between items-center ">
         <div className="left basis-3/4 relative">
            <span className="badge featured text-sky-500 bg-white rounded-3xl absolute top-4 left-3 px-4 py-2">Featured</span>
         <span className="badge percent text-red-500 bg-white rounded-3xl absolute top-4 left-24 px-4 py-2 ml-6">% 25</span>
         </div>
         <div className="right basis-1/4 relative text-white">
            <span className="favIcon absolute top-4 right-4 p-1 hover:text-neutral-300 hover:cursor-pointer transition delay-150 duration-300 ease-in-out"><HeartOutlined style={{ fontSize: '24px' }} /></span>
         </div>
         
      </div>
      <div className="body text-white absolute bottom-0 left-3 leading-3">
         <p className="text hover:text-neutral-300 hover:cursor-pointer transition delay-150 duration-300 ease-in-out">Atraction Tickets</p>
         <p className="price"><span className="discount line-through text-md ">$465.00</span><span className='current text-2xl font-bold ml-1'>$350.00</span></p>
      </div>
      
    </div>
  )
}

export default CardHeader