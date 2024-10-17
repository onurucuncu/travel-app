import React, { useState } from "react";
import CustomCard from "./CustomCard";

const TourCards = ({ currentTitle }) => {
  const cardData = [
    {
      ratingValue: 3.5,
      oldPriceText: "$465.00",
      tourNameText: "Atraction Tickets",
      currentPriceText: "$350.00",
      reviewText: "1",
      timeText: "3 hours 45 minutes",
      locationText: "Greater London, United Kingdom",
      placeText: "Stonehenge, Windsor Castle, and Bath from London",
      imageUrl:
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
      featuredText: "Featured",
      discountText: "%25",
      card_type: "tour",
    },
    {
      ratingValue: 3.5,
      oldPriceText: "$465.00",
      tourNameText: "Atraction Tickets",
      currentPriceText: "$350.00",
      reviewText: "1",
      timeText: "3 hours 45 minutes",
      locationText: "Greater London, United Kingdom",
      placeText: "Stonehenge, Windsor Castle, and Bath from London",
      imageUrl:
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
      featuredText: "Featured",
      discountText: null,
      card_type: "hotel",
    },
    {
      ratingValue: 3.5,
      oldPriceText: "$465.00",
      tourNameText: "Atraction Tickets",
      currentPriceText: "$350.00",
      reviewText: "1",
      timeText: "3 hours 45 minutes",
      locationText: "Greater London, United Kingdom",
      placeText: "Stonehenge, Windsor Castle, and Bath from London",
      imageUrl:
        "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Africa6-300x225.jpg",
      featuredText: null,
      discountText: "%25",
      card_type: "activity",
    },
    {
      ratingValue: 3.5,
      oldPriceText: "$465.00",
      tourNameText: "Atraction Tickets",
      currentPriceText: "$350.00",
      reviewText: "1",
      timeText: "3 hours 45 minutes",
      locationText: "Greater London, United Kingdom",
      placeText: "Stonehenge, Windsor Castle, and Bath from London",
      imageUrl:
        "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/paris6-300x225.jpg",
      featuredText: null,
      discountText: null,
      card_type: "rental",
    },
  ];

  const [cardsData, setCardsData] = useState(cardData);
  console.log(setCardsData, "setCardData");

  console.log(cardData, "carddata");
  return (
    <div>
      <div className="flex gap-5 pb-36 px-20">
        {cardsData.map((index, cardData) => (
          <CustomCard
            key={index}
            currentTitle={currentTitle}
            cardData={cardData}
            showPrice={cardData.discountText !== null}
            showFeatured={cardData.featuredText !== null}
          />
        ))}
      </div>
    </div>
  );
};

export default TourCards;
