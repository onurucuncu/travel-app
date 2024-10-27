import React from 'react'

const PriceComp = ({
   cardData,
   showPrice,
 }) => {

   const {
      oldPriceText,
      currentPriceText,
    } = cardData;

  return (
   <>
   {showPrice && (
      <span className="discount line-through text-md mr-1">
        {oldPriceText}
      </span>
    )}
    <span className="current text-2xl font-semibold">
      {currentPriceText}
    </span>
   </>
   
  )
}

export default PriceComp