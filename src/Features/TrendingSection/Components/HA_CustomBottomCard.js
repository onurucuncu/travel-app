import { StarFilled, StarOutlined } from "@ant-design/icons";
import React from "react";

const HACustomBottomCard = ({ cardData, showPrice }) => {
  const { ratingValue, itemText, pointNumber, reviewText, oldPriceText, currentPriceText
   } = cardData;

  return (
    <div className="flex flex-col gap-3">
      <div className="star-rating flex items-center mb-3 text-md">
        <div className="mr-2">
          {Array.from({ length: 5 }, (_, index) =>
            index + 0.5 <= ratingValue ? (
              <StarFilled
                className="mr-3"
                key={index}
                style={{ color: "#b0d12b" }}
              />
            ) : (
              <StarOutlined
                className="mr-3"
                key={index}
                style={{ color: "#b0d12b" }}
              />
            )
          )}
        </div>
      </div>
      <div className="place-text text-darky text-2xl font-semibold mb-3 group-hover:text-sky-500 transition-colors">
              {itemText}
            </div>
            <div className="point-rating flex items-center mb-3 text-lg">
          <div className="mr-2 flex items-center text-sky-600">
            <div className="mr-1">{pointNumber}.0/5.0</div>
          </div>
          <div className="review text-slate-500">({reviewText} review)</div>
        </div>
        <div className="flex items-center gap-3">
                  <div className="text-slate-800">From</div>
                {showPrice && (
                  <span className="discount line-through text-md mr-1">
                    {oldPriceText}
                  </span>
                )}
                <span className="current text-2xl text-darky font-medium">
                  {currentPriceText}
                </span>
              </div>
    </div>
  );
};

export default HACustomBottomCard;
