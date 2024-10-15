import React from "react";
import MenuItems from "../Constants/MenuItems";

const MenuSection = () => {
  return (
    <div className="relative w-full">
      {/* relative  */}
      <div className="bg-gray-800 opacity-30 absolute inset-0 z-0"></div>
      {/* absolute */}
      <div className="flex justify-between mx-16 py-4 z-10 relative font-rubik">
        <div className="logo flex items-center justify-start">
          <div className="w-14 h-14 mr-4">
            <img
              width="55"
              height="53"
              src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/04/logo-white.svg"
              alt=""
            />
          </div>
          <div className="text-3xl font-semibold text-white font-rubik">
            MyTravel
          </div>
        </div>
        <MenuItems />
      </div>
    </div>
  );
};

export default MenuSection;
