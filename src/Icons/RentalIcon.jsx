import React from "react";

export const RentalIcon = ({
  width = 256,
  height = 256,
  fillColor = "#000000",
  strokeWidth = 1,
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    width={width}
    height={height}
    enableBackground="new 0 0 256 256"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <g>
          <path
            fill={fillColor}
            stroke={fillColor}
            strokeWidth={strokeWidth}
            d="M67.7,81.9C5.9,143.6,8.5,140.7,11,143.2c2.2,2.2,2.7,1.9,16.7-12.1L40.8,118v55.8v55.9l1.1,1l1.1,1.1H72c25.3,0,29-0.1,30-0.8l1.1-0.7v-28.9v-28.8h26.2h26.2v28.8v28.9l1.1,0.7c1,0.7,4.5,0.8,28.8,0.8h27.8l1-1.3c1-1.3,1-1.4,1-56v-54.6l13.4,13.4c9.5,9.5,13.7,13.3,14.4,13.3c0.6,0,1.5-0.4,2.1-1c2.4-2.4,5.2,0.5-57.9-62.5c-51.9-52-59-58.9-60.3-58.9C125.5,24.2,118.5,31,67.7,81.9z M168,72.8l40.8,40.8v55.9v56H185h-23.7v-28.7c0-26.3,0-28.8-0.8-29.6c-0.8-0.9-2.2-0.9-31.2-0.9c-16.7,0-30.7,0.2-31,0.4c-1.5,0.9-1.6,3.4-1.6,31v27.9H71.9H47.2v-56.9v-56.9L87,71.8C108.9,50,126.9,32,127,32C127.2,32,145.6,50.4,168,72.8z"
          />
        </g>
      </g>
    </g>
  </svg>
);
