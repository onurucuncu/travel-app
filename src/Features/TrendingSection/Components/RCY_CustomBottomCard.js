import { EnvironmentOutlined } from "@ant-design/icons";
import React from "react";

const RCYCustomBottomCard = ({ cardData, iconData, currentTitle }) => {
  const {
    pointNumber,
    reviewText,
    locationText,
    area,
    room,
    shower,
    bed,
    range,
    gear,
    fuel,
    model,
    longiutude,
    speed,
    person,
  } = cardData;

  const {
    areaIcon,
    roomIcon,
    showerIcon,
    bedIcon,
    rangeIcon,
    gearIcon,
    fuelIcon,
    modelIcon,
    longiutudeIcon,
    personIcon,
  } = iconData || {};

  const handleAverageText = (a) => {
    if (Math.round(a) % 5 === 0) return "Exceptional";
    if (Math.round(a) % 5 === 4) return "Excellent";
    if (Math.round(a) % 5 === 3) return "Good";
    return "";
  };

  const renderBottom = (icon, text) => (
    <div className="flex items-center gap-1 w-1/2 py-2">
      <div className="text-2xl">{icon}</div>
      <div>{text}</div>
    </div>
  );

  const renderBottomDetails = () => {
    switch (currentTitle) {
      case "rental":
        return (
          <>
            {renderBottom(areaIcon, `${area} sq ft`)}
            {renderBottom(roomIcon, `${room} rooms`)}
            {renderBottom(showerIcon, `${shower} bathrooms`)}
            {renderBottom(bedIcon, `${bed} beds`)}
          </>
        );
      case "car":
        return (
          <>
            {renderBottom(rangeIcon, `${range} mi`)}
            {renderBottom(gearIcon, gear)}
            {renderBottom(fuelIcon, fuel)}
            {renderBottom(modelIcon, model)}
          </>
        );
        case "yatch":
        return (
          <>
            {renderBottom(longiutudeIcon, `${longiutude} M`)}
            {renderBottom(rangeIcon, `${speed} MPH`)}
            {renderBottom(personIcon, `${person} Persons`)}
            {renderBottom(bedIcon, `${bed} Beds`)}
          </>
        );
      default:
        return null
    }
  };

  return (
    <div className="custom-bottom-card flex flex-col px-3">
      <div className="custom-bottom-top h-1/2 flex flex-col py-3">
        <div className="location-text flex mb-2">
          <EnvironmentOutlined className="text-gray-500 mr-2" />
          <span className="text-lg text-gray-800">{locationText}</span>
        </div>
        <div className="point-rating flex items-center mb-3 text-lg">
          <div className="mr-2 flex items-center text-sky-600">
            <div className="mr-1">{Math.round(pointNumber)}.0/5.0</div>
            <div>{handleAverageText(pointNumber)}</div>
          </div>
          <div className="review text-slate-500">({reviewText} review)</div>
        </div>
      </div>
      <div className="custom-bottom-bottom py-3 flex items-center flex-wrap text-slate-500 border-t-2">
        {renderBottomDetails()}
      </div>
    </div>
  );
};

export default RCYCustomBottomCard;
