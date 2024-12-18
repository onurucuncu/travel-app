import React, { useState } from "react";
import { Space } from "antd";
import { HotelIcon } from "../../../Icons/HotelIcon";
import { TourIcon } from "../../../Icons/TourIcon";
import { ActivityIcon } from "../../../Icons/ActivityIcon";
import { RentalIcon } from "../../../Icons/RentalIcon";
import { CarIcon } from "../../../Icons/CarIcon";
import { YachtIcon } from "../../../Icons/YachtIcon";
import HotelSearch from "./HotelSearch";
import ActivitySearch from "./ActivitySearch";
import ToursSearch from "./ToursSearch";
import RentalSearch from "./RentalSearch";
import CarSearch from "./CarSearch";
import YachtSearch from "./YachtSearch";
const SearchSection = () => {
  const [currentCard, setCurrentCard] = useState("hotel");

  const handleDisplayCard = (cardType) => {
    setCurrentCard(cardType);
    console.log(cardType);
  };

  return (
    <div className="container mt-12 w-full flex flex-col items-center justify-center">
      <div className="searchbar-items flex ml-32 mt-24 mb-6">
        <div onClick={() => handleDisplayCard("hotel")} className="hotel flex">
          <HotelIcon
            width={"40"}
            height={"40"}
            fillColor={"white"}
            strokeWidth={"1"}
          />
          <Space className="text-white ml-3 mt-1 font-rubik">Hotel</Space>
        </div>
        <div
          onClick={() => handleDisplayCard("tour")}
          className="tour flex ml-12"
        >
          <TourIcon
            width={"40"}
            height={"40"}
            fillColor={"white"}
            strokeWidth={"1"}
          />
          <Space className="text-white ml-3 mt-1 font-rubik">Tour</Space>
        </div>
        <div
          onClick={() => handleDisplayCard("activity")}
          className="activity flex ml-12"
        >
          <ActivityIcon
            width={"40"}
            height={"40"}
            fillColor={"white"}
            strokeWidth={"1"}
          />
          <Space className="text-white ml-3 mt-1 font-rubik">Activity</Space>
        </div>
        <div
          onClick={() => handleDisplayCard("rental")}
          className="rental flex ml-12"
        >
          <RentalIcon
            width={"40"}
            height={"40"}
            fillColor={"white"}
            strokeWidth={"1"}
          />
          <Space className="text-white ml-3 mt-1 font-rubik">Rental</Space>
        </div>
        <div
          onClick={() => handleDisplayCard("car")}
          className="car flex ml-12"
        >
          <CarIcon
            width={"40"}
            height={"40"}
            fillColor={"white"}
            strokeWidth={"1"}
          />
          <Space className="text-white ml-3 mt-1 font-rubik">Car</Space>
        </div>
        <div
          onClick={() => handleDisplayCard("yacht")}
          className="yacht flex ml-12"
        >
          <YachtIcon
            width={"40"}
            height={"40"}
            fillColor={"white"}
            strokeWidth={"1"}
          />
          <Space className="text-white ml-3 mt-1 font-rubik">Yacht</Space>
        </div>
      </div>
      {/* <div>
        <SearchSectionItems />
      </div> */}
      <div className="items-card w-full h-32 flex justify-center mt-5 ml-36">
        {currentCard === "hotel" && <HotelSearch />}
        {currentCard === "tour" && <ToursSearch />}
        {currentCard === "activity" && <ActivitySearch />}
        {currentCard === "rental" && <RentalSearch />}
        {currentCard === "car" && <CarSearch />}
        {currentCard === "yacht" && <YachtSearch />}
      </div>
    </div>
  );
};

export default SearchSection;
