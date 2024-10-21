import React from "react";
import CustomCard from "../Components/CustomCard";

const CarCards = ({ currentTitle, cardsData, iconData }) => {
  return (
    <div className="w-11/12 flex justify-between flex-wrap gap-10 px-20">
      {cardsData.map(
        (cardData, index) =>
          cardData.card_type === "car" && (
            <CustomCard
              key={index}
              currentTitle={currentTitle}
              cardData={cardData}
              showPrice={cardData.discountText !== null}
              showFeatured={cardData.featuredText !== null}
              iconData={iconData}
            />
          )
      )}
    </div>
  );
};

export default CarCards;
