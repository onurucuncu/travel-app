import React from "react";

const TravelTips = () => {
   const imageUrl = "https://t4.ftcdn.net/jpg/08/55/93/69/360_F_855936921_NK3rcRsz6MVvu0NvmQuJdZRIchNQGGMm.jpg"
  return (
    <div className="Travel-Tips-Section flex flex-col items-center justify-center gap-8 bg-cover bg-no-repeat bg-center mt-10 text-white font-rubik"
    style={{height: "500px", 
      backgroundImage: `url(${imageUrl})`
    }}>
      <div className="title text-5xl font-semibold">Travel Tips</div>
      <div className="description text-2xl w-2/5 text-center">
        Northern Ireland’s is now contingent. Britain is getting a divorce
        Northern Ireland is being offered a trial separation for Britain there
        is a one
      </div>
      <div className="inspired-btn">Get Inspired</div>
    </div>
  );
};

export default TravelTips;
