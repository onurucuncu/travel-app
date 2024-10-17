import React, { useState } from "react";
import SectionNavbar from "./Components/SectionNavbar";
import TourCards from "./Components/TourCards";
import HotelCards from "./Components/HotelCards";
import ActivityCards from "./Components/ActivityCards";
import RentalCards from "./Components/RentalCards";
import CarCards from "./Components/CarCards";
import YatchCards from "./Components/YatchCards";

const TrendingSection = () => {
  // const cardData = [
  //   {
  //     ratingValue: 3.5,
  //     oldPriceText: "$465.00",
  //     tourNameText: "Atraction Tickets",
  //     currentPriceText: "$350.00",
  //     reviewText: "1",
  //     timeText: "3 hours 45 minutes",
  //     locationText: "Greater London, United Kingdom",
  //     placeText: "Stonehenge, Windsor Castle, and Bath from London",
  //     featuredText: "Featured",
  //     discountText: "%25",
  //     activity: "Tour",
  //   },
  //   {
  //     ratingValue: 3.5,
  //     oldPriceText: "$465.00",
  //     tourNameText: "Atraction Tickets",
  //     currentPriceText: "$350.00",
  //     reviewText: "1",
  //     timeText: "3 hours 45 minutes",
  //     locationText: "Greater London, United Kingdom",
  //     placeText: "Stonehenge, Windsor Castle, and Bath from London",
  //     featuredText: "Featured",
  //     discountText: null,
  //     activity: "Hotel",
  //   },
  //   {
  //     ratingValue: 3.5,
  //     oldPriceText: "$465.00",
  //     tourNameText: "Atraction Tickets",
  //     currentPriceText: "$350.00",
  //     reviewText: "1",
  //     timeText: "3 hours 45 minutes",
  //     locationText: "Greater London, United Kingdom",
  //     placeText: "Stonehenge, Windsor Castle, and Bath from London",
  //     featuredText: null,
  //     discountText: "%25",
  //     activity: "Hotel",
  //   },
  //   {
  //     ratingValue: 3.5,
  //     oldPriceText: "$465.00",
  //     tourNameText: "Atraction Tickets",
  //     currentPriceText: "$350.00",
  //     reviewText: "1",
  //     timeText: "3 hours 45 minutes",
  //     locationText: "Greater London, United Kingdom",
  //     placeText: "Stonehenge, Windsor Castle, and Bath from London",
  //     featuredText: null,
  //     discountText: null,
  //     activity: "Hotel",
  //   }
  // ];

  // const [cardsData, setCardsData] = useState(cardData);

  // console.log(cardData, "carddata");

  const [currentTitle, setCurrentTitle] = useState("hotel")

  console.log(setCurrentTitle, "currentTitle")


  return (
    <div className="mt-32">
      <SectionNavbar setCurrentTitle={setCurrentTitle} />
      <div className="titles-card w-full h-32 flex justify-center mt-5">
         {currentTitle === "tour" && <TourCards currentTitle={currentTitle} /> }
         {currentTitle === "hotel" && <HotelCards currentTitle={currentTitle} /> }
         {currentTitle === "activity" && <ActivityCards currentTitle={currentTitle} /> }
         {currentTitle === "rental" && <RentalCards currentTitle={currentTitle} /> }
         {currentTitle === "car" && <CarCards currentTitle={currentTitle} /> }
         {currentTitle === "yatch" && <YatchCards currentTitle={currentTitle} /> }
         
      </div>

      {/* <h1 className="section-title text-black font-rubik text-center py-10 text-6xl mb-0">
        Trending
      </h1>
      <div className="flex gap-5 pb-36 px-20">
        {cardsData.map((cardData) => (
          <CustomCard
            cardData={cardData}
            showPrice={cardData.discountText !== null}
            showFeatured ={cardData.featuredText !== null}
          />
        ))}
      </div> */}
    </div>
  );
};

export default TrendingSection;
