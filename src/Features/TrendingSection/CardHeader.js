import { HeartOutlined } from '@ant-design/icons'
import React from 'react'
import "./CardHeader.css"

const CardHeader = () => {
  return (
    <div className='card-header p-4 flex flex-col justify-between'>
      <div className="top px-2 py-4 flex justify-between">
         <div className="left">
            <span className="badge featured text-sky-500 p-2 bg-white rounded-lg ">Featured</span>
         <span className="badge percent text-red-500 p-2 ml-4 bg-white rounded-lg">% 25</span>
         </div>
         <div className="right text-white">
            <span className="favIcon"><HeartOutlined /></span>
         </div>
         
      </div>
      <div className="body text-white px-3">
         <p className="text">Atraction Tickets</p>
         <p className="price"><span className="discount line-through text-sm ">$465.00</span><span className='current text-lg font-bold'>$350.00</span></p>
      </div>
      
    </div>
  )
}

export default CardHeader