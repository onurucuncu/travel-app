import React from "react";

const PillComponent = ({ text, color }) => {
  const defaultColors = {
    featured: "text-sky-500",
    discount: "text-red-600",
  }
  return (
    <div
      className={` text-lg bg-white fo ${defaultColors[color]} px-5 py-1 rounded-full`}
    >
      {text}
    </div>
  );
};

export default PillComponent;
