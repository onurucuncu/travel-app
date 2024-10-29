import React from "react";

const TravelTips = () => {
   const imageUrl = "https://t4.ftcdn.net/jpg/08/55/93/69/360_F_855936921_NK3rcRsz6MVvu0NvmQuJdZRIchNQGGMm.jpg"

   const title = "Travel Tips"
   const description = "Northern Ireland’s is now contingent. Britain is getting a divorce Northern Ireland is being offered a trial separation for Britain there is a one"
   const btnTxt = "Get Inspired"
  return (
    <div className="Travel-Tips-Section flex flex-col items-center justify-center gap-8 bg-cover bg-no-repeat bg-center mt-10 text-white font-rubik"
    style={{height: "500px", 
      backgroundImage: `url(${imageUrl})`
    }}>
      <div className="title text-5xl font-semibold"> {title} </div>
      <div className="description text-2xl w-2/5 text-center">
        {description}
      </div>
      <div className="inspired-btn text-xl border-2 border-white rounded-lg px-16 py-5 cursor-pointer hover:bg-white hover:text-darky hover:-translate-y-2 transition delay-150 duration-150 ease-in-out">{btnTxt}</div>
    </div>
  );
};

export default TravelTips;
