import React from "react";
import { TravelTipsInfos } from "../Constant/TravelTipsConst";

const TravelTips = () => {
  const { imageUrl, title, description, btnTxt } = TravelTipsInfos;
  return (
    <div
      className="Travel-Tips-Section flex flex-col items-center justify-center gap-8 bg-cover bg-no-repeat bg-center mt-20 text-white font-rubik"
      style={{ height: "500px", backgroundImage: `url(${imageUrl})` }}
    >
      <div className="title text-5xl font-semibold"> {title} </div>
      <div className="description text-2xl w-2/5 text-center">
        {description}
      </div>
      <div className="inspired-btn text-xl border-2 border-white rounded-lg px-16 py-5 cursor-pointer hover:bg-white hover:text-darky hover:-translate-y-2 transition delay-150 duration-150 ease-in-out">
        {btnTxt}
      </div>
    </div>
  );
};

export default TravelTips;
