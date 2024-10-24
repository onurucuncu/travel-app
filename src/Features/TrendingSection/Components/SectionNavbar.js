import React from "react";
import { titleList } from "../Constant/SectionTitles";

const SectionNavbar = ({ setCurrentTitle }) => {
  const handleDisplayTitle = (titleName) => {
    setCurrentTitle(titleName);
  };

  return (
    <div className="mt-12 w-full flex flex-col items-center justify-center">
      <div className="section-title block text-black font-medium font-rubik text-center py-10 text-4xl mb-0">
        Trending
      </div>
      <div className="w-14 h-0.5 bg-sky-800 mx-auto"></div>
      <div className="title flex gap-2 justify-between mt-4 mb-6">
        {titleList.map((title) => {
          return (
            <div
              key={title.id}
              onClick={() => handleDisplayTitle(title.id)}
              className={`${title.id} text-black font-rubik text-2xl px-10 py-4 hover:bg-sky-800 hover:text-white hover:rounded-full cursor-pointer`}
            >
              {title.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionNavbar;
