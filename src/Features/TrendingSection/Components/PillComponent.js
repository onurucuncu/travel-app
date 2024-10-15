import React from "react";

const PillComponent = ({ text, color }) => {
  const defaultColors = {
    featured: "sky",
    discount: "red",
  }
  return (
    <div
      className={`bg-white fo text-${defaultColors[color]}-500 px-3 py-2 rounded-2xl`}
    >
      {text}
    </div>
  );
};

export default PillComponent;
