import React from "react";
import NavigationBar from "./Components/NavigationBar";
import MenuSection from "./Components/MenuSection";
import HeaderSection from "./Components/HeaderSection";
import SearchSection from "./Components/SearchSection";
import backgroundImage from "../../Images/background.jpg";

const WelcomeSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-screen bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="content relative z-10 w-full">
        <NavigationBar />
        <MenuSection />
        <HeaderSection />
        <SearchSection />
      </div>
    </div>
  );
};

export default WelcomeSection;
