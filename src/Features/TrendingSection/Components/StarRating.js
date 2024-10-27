import { StarFilled, StarOutlined } from '@ant-design/icons'
import React from 'react'

const StarRating = ({cardData}) => {
   const {
      ratingValue,
    } = cardData;
  
  return (
   <div className="mr-2">
     {Array.from({ length: 5 }, (_, index) =>
       index + 0.5 <= ratingValue ? (
         <StarFilled
           className="mr-1"
           key={index}
           style={{ color: "#b0d12b" }}
         />
       ) : (
         <StarOutlined
           className="mr-1"
           key={index}
           style={{ color: "#b0d12b" }}
         />
       )
     )}
   </div>
  )
}

export default StarRating