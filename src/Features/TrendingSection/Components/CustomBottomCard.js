import { EnvironmentOutlined } from "@ant-design/icons";
import React from "react";

const CustomBottomCard = ({ cardData, iconData, currentTitle }) => {
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
    if (a % 5 === 0) {
      return <div>Exceptional</div>;
    } else if (a % 5 === 4) {
      return <div>Exellent</div>;
    } else if (a % 5 === 3) {
      return <div>Good</div>;
    }
  };

  return (
    <div className="custom-bottom-card flex flex-col items-center p-3">
      <div className="custom-bottom-top h-1/2 flex flex-col py-3">
        <div className="location-text flex mb-2">
          <EnvironmentOutlined className="text-gray-500 mr-2" />
          <span className="text-lg text-gray-800">{locationText}</span>
        </div>
        <div className="point-rating flex items-center mb-3 text-lg">
          <div className="mr-2 flex items-center text-sky-600">
            <div className="mr-1">{pointNumber}.0/5.0</div>
            <div>{handleAverageText(pointNumber)}</div>
          </div>
          <div className="review text-slate-500">({reviewText} review)</div>
        </div>
      </div>
      {currentTitle === "rental" ? (
        <div className="custom-bottom-bottom py-3 flex items-center flex-wrap text-slate-500 border-t-2">
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{areaIcon}</div>
            <div>{area} sq ft</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{roomIcon}</div>
            <div>{room} rooms</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{showerIcon}</div>
            <div>{shower} bathrooms</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{bedIcon}</div>
            <div>{bed} beds</div>
          </div>
        </div>
      ) : currentTitle === "car" ? (
        <div className="custom-bottom-bottom py-3 flex items-center flex-wrap text-slate-500 border-t-2">
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{rangeIcon}</div>
            <div>{range} mi</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{gearIcon}</div>
            <div>{gear}</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{fuelIcon}</div>
            <div>{fuel}</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{modelIcon}</div>
            <div>{model}</div>
          </div>
        </div>
      ) : (
        <div className="custom-bottom-bottom py-3 flex items-center flex-wrap text-slate-500 border-t-2">
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{longiutudeIcon}</div>
            <div>{longiutude} M</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{rangeIcon}</div>
            <div>{speed} MPH</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{personIcon}</div>
            <div>{person} Persons</div>
          </div>
          <div className="flex items-center gap-1 w-1/2 py-2">
            <div className="text-2xl">{bedIcon}</div>
            <div>{bed} Beds</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomBottomCard;
