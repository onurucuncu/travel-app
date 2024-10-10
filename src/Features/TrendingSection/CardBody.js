import { ClockCircleOutlined, PushpinOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import React from 'react'
import "./CardBody.css"

const CardBody
 = () => {
  return (
    <div className='px-5'>
      <p className="location text-slate-500"><span className="location-icon"><PushpinOutlined /></span>Greater London, United Kingdom</p>
      <h1 className='title font-bold text-lg'>Stonehenge, Windsor Castle, and Bath from London</h1>
   <div className="stars flex gap-2">
     <div className="star text-green-400">
      <StarFilled/>
      <StarFilled/>
      <StarFilled/>
      <StarFilled/>
      <StarOutlined />
      </div> <div className="review text-slate-500">
         <p>1 review</p>
      </div>
      
   </div>
   <div className="time text-slate-500">
    <p className=''><ClockCircleOutlined /> 3 hours 45 minutes</p>
   </div>

    </div>
  )
}

export default CardBody
