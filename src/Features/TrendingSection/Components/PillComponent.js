import React from "react";

const PillComponent = ({ text, color }) => {
  const defaultColors = {
    featured: "text-sky-500",
    discount: "text-red-600",
  }
  return (
    <div
      className={`bg-white fo ${defaultColors[color]} px-3 py-2 rounded-2xl`}
    >
      {text}
    </div>
  );
};

export default PillComponent;
