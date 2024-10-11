import { ClockCircleOutlined, PushpinOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import React from 'react'

const CardBody
 = () => {
  return (
    <div className='mt-3.5 px-3'>
      <div className="location text-slate-500 "><span className="location-icon"><PushpinOutlined /></span>Greater London, United Kingdom</div>
      <h1 className='title font-bold text-lg hover:text-sky-500'>Stonehenge, Windsor Castle, and Bath from London</h1>
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
