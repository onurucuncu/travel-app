import React, { useState } from "react";
import SectionNavbar from "./Components/SectionNavbar";
import cardData from "./Constant/CardData";
import CardSection from "./Components/CardSection";
import iconData from "./Constant/IconData";

const TrendingSection = () => {
  const [cardsData, setCardsData] = useState(cardData);

  const [currentTitle, setCurrentTitle] = useState("tour");

  console.log(currentTitle, "currentTitle");

  return (
    <div>
      <SectionNavbar
        setCurrentTitle={setCurrentTitle}
        currentTitle={currentTitle}
      />
      <CardSection
        currentTitle={currentTitle}
        cardsData={cardsData}
        iconData={iconData}
        name={currentTitle}
      />
    </div>
  );
};

export default TrendingSection;
