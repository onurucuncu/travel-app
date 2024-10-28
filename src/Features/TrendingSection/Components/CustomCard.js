import React, { useState } from "react";
import {
  HeartOutlined,
  HeartFilled,
  LoadingOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import PillComponent from "./PillComponent";
import RCYCustomBottomCard from "./RCY_CustomBottomCard";
import HACustomBottomCard from "./HA_CustomBottomCard";
import StarRating from "./StarRating";
import PriceComp from "./PriceComp";

const CustomCard = ({
  cardData,
  showPrice,
  showFeatured,
  currentTitle,
  iconData,
}) => {
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
    locationText,
    reviewText,
    itemText,
    imageUrl,
    timeText,
    featuredText,
    discountText,
    card_type,
  } = cardData;

  const isHotAct = currentTitle === "hotel" || currentTitle === "activity";

  const isRntCrYt =
    currentTitle === "rental" ||
    currentTitle === "car" ||
    currentTitle === "yatch";

  return (
    <div
      className="card border rounded-lg font-rubik hover:rounded-lg hover:-translate-y-3 hover:shadow-2xl transition delay-150 duration-300 ease-in-out"
      style={{ width: "360px" }}
    >
      <div
        className="card-top rounded-t-lg flex flex-col justify-between h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <div
          className={`card-top-top flex ${
            showFeatured || showPrice ? "justify-between" : "justify-end"
          } pills px-5 pt-7`}
        >
          <div className="flex gap-2">
            {showFeatured && (
              <div>
                <PillComponent text={featuredText} color="featured" />
              </div>
            )}

            {showPrice && (
              <div>
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
          {isHotAct ? (
            <div className="location-text text-white flex items-center mb-2">
              <EnvironmentOutlined className="mr-2 text-2xl" />
              <span className="text-lg">{locationText}</span>
            </div>
          ) : (
            <div>
              <span className="text-md cursor-pointer hover:text-neutral-300 transition delay-150 duration-150 ease-in-out">
                {itemText}
              </span>

              <div className="text-lg font-bold">
                <PriceComp cardData={cardData} showPrice={showPrice} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="card-bottom p-3 bg-white cursor-pointer group">
        {isRntCrYt ? (
          card_type === currentTitle && (
            <div>
              <RCYCustomBottomCard
                cardData={cardData}
                iconData={iconData}
                currentTitle={currentTitle}
              />
            </div>
          )
        ) : isHotAct ? (
          card_type === currentTitle && (
            <div>
              <HACustomBottomCard cardData={cardData} showPrice={showPrice} currentTitle={currentTitle} />
            </div>
          )
        ) : (
          <>
            <div className="location-text flex items-center mb-2">
              <EnvironmentOutlined className="text-gray-500 mr-2" />
              <span className="text-lg text-gray-800">{locationText}</span>
            </div>
            <div className="place-text text-2xl text-darky font-semibold mb-3 group-hover:text-sky-500 transition-colors">
              {itemText}
            </div>
            <div className="star-rating flex items-center mb-3 text-2xl">
              <StarRating cardData={cardData} />
              <div className="review text-slate-500">({reviewText} review)</div>
            </div>

            <div className="time-arrived flex items-center text-gray-600">
              <ClockCircleOutlined className="mr-2" />
              <span className="text-lg">{timeText}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
