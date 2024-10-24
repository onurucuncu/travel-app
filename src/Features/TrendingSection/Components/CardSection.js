import React from "react";
import CustomCard from "./CustomCard";

const CardSection = ({ currentTitle, cardsData, iconData, name }) => {

  return (
    <div className="titles-card w-full h-32 flex justify-center mt-5">
      <div className="w-11/12 flex justify-between flex-wrap gap-10 px-20">
      {cardsData.map(
        (cardData, index) =>
          cardData.card_type === name && (
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
     
    </div>
  );
};

export default CardSection;
