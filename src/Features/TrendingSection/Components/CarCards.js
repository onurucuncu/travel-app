import React, { useState } from 'react'
import CustomCard from './CustomCard';

const CarCards = ({currentTitle}) => {
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
        featuredText: "Featured",
        discountText: "%25",
        activity: "Tour",
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
        featuredText: "Featured",
        discountText: null,
        activity: "Hotel",
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
        featuredText: null,
        discountText: "%25",
        activity: "Hotel",
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
        featuredText: null,
        discountText: null,
        activity: "Hotel",
      }
    ];
  
    const [cardsData, setCardsData] = useState(cardData);
     console.log(setCardsData)
  
    console.log(cardData, "carddata");
  return (
    <div>
      <div className="flex gap-5 pb-36 px-20">
        {cardsData.map((cardData) => (
          <CustomCard
            currentTitle={currentTitle}
            cardData={cardData}
            showPrice={cardData.discountText !== null}
            showFeatured ={cardData.featuredText !== null}
          />
        ))}
      </div>
    </div>
  )
}

export default CarCards