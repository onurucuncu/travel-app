import React, { useState } from "react";
import SectionNavbar from "./Components/SectionNavbar";
import cardData from "./Constant/CardData";
import CardSection from "./Components/CardSection";

const TrendingSection = () => {
  

  const [cardsData, setCardsData] = useState(cardData);

  console.log(cardData, "carddata");

  const [currentTitle, setCurrentTitle] = useState("tour");

  console.log(currentTitle, "currentTitle");

  return (
    <div className="mt-32 h-screen">
      <SectionNavbar setCurrentTitle={setCurrentTitle} />
      <CardSection currentTitle={currentTitle} cardsData={cardsData} />
    </div>
  );
};

export default TrendingSection;
