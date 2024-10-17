import React from "react";

const SectionNavbar = ({ setCurrentTitle }) => {
  const handleDisplayTitle = (titleName) => {
    setCurrentTitle(titleName);
    console.log(titleName, "title");
  };

  return (
    <div className="mt-12 w-full flex flex-col items-center justify-center">
      <div className="section-title block text-black font-medium font-rubik text-center py-10 text-4xl mb-0">
        Trending
      </div>
      <div className="w-14 h-0.5 bg-sky-800 mx-auto"></div>
      <div className="title flex gap-2 justify-between mt-4 mb-6">
        <div
          onClick={() => handleDisplayTitle("tour")}
          className="tour text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full "
        >
          Tour
        </div>
        <div
          onClick={() => handleDisplayTitle("hotel")}
          className="hotel text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full"
        >
          Hotel
        </div>
        <div
          onClick={() => handleDisplayTitle("activity")}
          className="activity text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full"
        >
          Activity
        </div>
        <div
          onClick={() => handleDisplayTitle("rental")}
          className="rental text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full"
        >
          Rental
        </div>
        <div
          onClick={() => handleDisplayTitle("car")}
          className="car text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full"
        >
          Car
        </div>
        <div
          onClick={() => handleDisplayTitle("yatch")}
          className="yatch text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full"
        >
          Yatch
        </div>
      </div>
    </div>
  );
};

export default SectionNavbar;
