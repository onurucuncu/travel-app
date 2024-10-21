import React from "react";
import TourCards from "../Pages/TourCards";
import HotelCards from "../Pages/HotelCards";
import ActivityCards from "../Pages/ActivityCards";
import RentalCards from "../Pages/RentalCards";
import CarCards from "../Pages/CarCards";
import YatchCards from "../Pages/YatchCards";

const CardSection = ({ currentTitle, cardsData, iconData }) => {
  return (
    <div className="titles-card w-full h-32 flex justify-center mt-5">
      {currentTitle === "tour" && (
        <TourCards currentTitle={currentTitle} cardsData={cardsData} />
      )}
      {currentTitle === "hotel" && (
        <HotelCards currentTitle={currentTitle} cardsData={cardsData} />
      )}
      {currentTitle === "activity" && (
        <ActivityCards currentTitle={currentTitle} cardsData={cardsData} />
      )}
      {currentTitle === "rental" && (
        <RentalCards currentTitle={currentTitle} cardsData={cardsData} iconData={iconData} />
      )}
      {currentTitle === "car" && (
        <CarCards currentTitle={currentTitle} cardsData={cardsData} iconData={iconData} />
      )}
      {currentTitle === "yatch" && (
        <YatchCards currentTitle={currentTitle} cardsData={cardsData} iconData={iconData} />
      )}
    </div>
  );
};

export default CardSection;
