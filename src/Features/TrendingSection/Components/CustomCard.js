import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  LoadingOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

import PillComponent from "./PillComponent";

const CustomCard = ({ cardData, showPrice, showFeatured, currentTitle }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFavouriteClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsFavourite(!isFavourite);
      setIsLoading(false);
    }, 700);
  };

  const {
    ratingValue,
    oldPriceText,
    tourNameText,
    reviewText,
    locationText,
    placeText,
    timeText,
    currentPriceText,
    featuredText,
    discountText,
  } = cardData;

  return (
    <div className="font-rubik">
      <div className="card w-80 h-96 border rounded-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition delay-150 duration-300 ease-in-out">
        <div
          className="card-top flex flex-col justify-between h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg)",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="card-top-top flex justify-between pills px-5 pt-7">
            <div className="flex gap-2">
              {showFeatured && (
                <div className="">
                  <PillComponent text={featuredText} color="featured" />
                </div>
              )}

              {showPrice && (
                <div className="">
                  <PillComponent text={discountText} color="discount" />
                </div>
              )}
            </div>

            <div className="cursor-pointer">
              {isLoading ? (
                <LoadingOutlined className=" text-white text-2xl py-1.5 animate-spin" />
              ) : isFavourite ? (
                <HeartFilled
                  className="text-red-600 text-2xl py-1.5"
                  onClick={handleFavouriteClick}
                />
              ) : (
                <HeartOutlined
                  className="text-white text-2xl py-1.5 hover:text-neutral-300 transition delay-100 duration-200 ease-in-out"
                  onClick={handleFavouriteClick}
                />
              )}
            </div>
          </div>

          <div className="card-top-bottom px-5 pb-2 text-white">
            <span className="text-md font-semibold cursor-pointer hover:text-neutral-300 transition delay-150 duration-150 ease-in-out">
              {tourNameText}
            </span>

            <div className="text-lg font-bold">
              {showPrice && (
                <span className="discount line-through text-md mr-1">
                  {oldPriceText}
                </span>
              )}

              <span className="current text-2xl font-bold">
                {currentPriceText}
              </span>
            </div>
          </div>
        </div>

        <div className="card-bottom p-4 h-48 bg-white cursor-pointer group">
          <div className="location-text flex items-center mb-2">
            <EnvironmentOutlined className="text-gray-500 mr-2" />
            <span className="text-gray-800">{locationText}</span>
          </div>

          <div className="place-text text-xl font-semibold mb-3 group-hover:text-sky-500 transition-colors">
            {placeText}
          </div>

          <div className="star-rating flex items-center mb-3 text-xl">
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

            <div className="review text-slate-500">({reviewText} review)</div>
          </div>

          <div className="time-arrived flex items-center text-gray-600">
            <ClockCircleOutlined className="mr-2" />
            <span>{timeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
