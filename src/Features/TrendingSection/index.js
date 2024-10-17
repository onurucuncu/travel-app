import React, { useState } from "react";
import SectionNavbar from "./Components/SectionNavbar";
import TourCards from "./Components/TourCards";
import HotelCards from "./Components/HotelCards";
import ActivityCards from "./Components/ActivityCards";
import RentalCards from "./Components/RentalCards";
import CarCards from "./Components/CarCards";
import YatchCards from "./Components/YatchCards";

const TrendingSection = () => {
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/Africa6-300x225.jpg",
      featuredText: null,
      discountText: "%25",
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/paris6-300x225.jpg",
      featuredText: null,
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2021/11/paris6-300x225.jpg",
      featuredText: null,
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
      featuredText: "Featured",
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
      featuredText: "Featured",
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
      featuredText: "Featured",
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg",
      featuredText: "Featured",
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
        "https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg",
      featuredText: "Featured",
      discountText: null,
      card_type: "rental",
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
      card_type: "rental",
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
      card_type: "rental",
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
      card_type: "rental",
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
      card_type: "car",
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
      card_type: "yatch",
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
      card_type: "car",
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
      card_type: "yatch",
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
      card_type: "car",
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
      card_type: "yatch",
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
      card_type: "car",
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
      card_type: "yatch",
    },
  ];

  const [cardsData, setCardsData] = useState(cardData);

  console.log(cardData, "carddata");

  const [currentTitle, setCurrentTitle] = useState("tour");

  console.log(currentTitle, "currentTitle");

  return (
    <div className="mt-32 h-screen">
      <SectionNavbar setCurrentTitle={setCurrentTitle} />
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
          <RentalCards currentTitle={currentTitle} cardsData={cardsData} />
        )}
        {currentTitle === "car" && (
          <CarCards currentTitle={currentTitle} cardsData={cardsData} />
        )}
        {currentTitle === "yatch" && (
          <YatchCards currentTitle={currentTitle} cardsData={cardsData} />
        )}
      </div>
    </div>
  );
};

export default TrendingSection;
