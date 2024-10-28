import React from "react";
import StarRating from "./StarRating";
import PriceComp from "./PriceComp";

const HACustomBottomCard = ({ cardData, showPrice, currentTitle }) => {
  const {
    itemText,
    pointNumber,
    reviewText,
  } = cardData;

  const isHotel = currentTitle === "hotel" 

  return (
    <div className="flex flex-col gap-1">
      { isHotel ? <div className="star-rating flex items-center mb-3 text-lg">
        <StarRating cardData={cardData} />
      </div> : null}
      
      <div className="place-text text-darky text-2xl font-semibold mb-3 group-hover:text-sky-500 transition-colors">
        {itemText}
      </div>
      <div className="point-rating flex items-center mb-3 text-lg">
        <div className="mr-2 flex items-center text-sky-600">
          <div className="mr-1">{pointNumber}.0/5.0</div>
        </div>
        <div className="review text-slate-500">({reviewText} review)</div>
      </div>
      <div className="flex items-center gap-3 text-darky">
        <div className="text-slate-800">From</div>
        <PriceComp cardData={cardData} showPrice={showPrice} />
      </div>
    </div>
  );
};

export default HACustomBottomCard;
