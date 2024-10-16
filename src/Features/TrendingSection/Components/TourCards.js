import React from "react";
import CustomCard from "./CustomCard";

const TourCards = ({ currentTitle, cardsData }) => {
  return (
    <div className="w-11/12 flex justify-between flex-wrap gap-10 px-20">
      {cardsData.map((cardData, index) => (
        cardData.card_type === "tour" && <CustomCard
          key={index}
          currentTitle={currentTitle}
          cardData={cardData}
          showPrice={cardData.discountText !== null}
          showFeatured={cardData.featuredText !== null}
        />
      ))}
    </div>
  );
};

export default TourCards;
