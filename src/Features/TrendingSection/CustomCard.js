import React from "react";
import {
  HeartOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";

const CustomCard = () => {
  const ratingValue = 3.5;
  const discountText = "%25";
  const featuredText = "Featured";
  const tourNameText = "Atraction Tickets";
  const oldPriceText = "$465.00";
  const currentPriceText = "$350.00";
  const reviewText = "1";
  const timeText = "3 hours 45 minutes";
  const locationText = "Greater London, United Kingdom";
  const placeText = "Stonehenge, Windsor Castle, and Bath from London";

  return (
    <div className="w-screen h-screen relative font-rubik">
      <div className="w-80 h-96 absolute top-10 left-20 border rounded-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition delay-150 duration-300 ease-in-out">
        <div
          className="relative h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://mytravel.madrasthemes.com/wp-content/uploads/2022/03/stone-resize-300x225.jpg)",
          }}
        >
          <div class="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
          <div className="flex gap-3 absolute top-5 left-3 ">
            <div
              className="bg-white text-sky-500 px-3 py-2 rounded-2xl"
              style={{ color: "#297cbb" }}
            >
              {featuredText}
            </div>

            <div className="bg-white text-red-500 px-3 py-2 rounded-2xl">
              {discountText}
            </div>
          </div>

          <div className="absolute top-5 right-3">
            <HeartOutlined className="text-white text-2xl hover:text-neutral-200 hover:cursor-pointer transition delay-150 duration-300 ease-in-out" />
          </div>

          <div className="absolute bottom-2 left-2 text-white">
            <span className="text-md font-semibold hover:text-neutral-300 hover:cursor-pointer transition delay-150 duration-150 ease-in-out">
              {tourNameText}
            </span>

            <div className="text-lg font-bold">
              <span className="discount line-through text-md ">
                {oldPriceText}
              </span>
              <span className="current text-2xl font-bold ml-1">
                {currentPriceText}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 h-48 bg-white cursor-pointer">
          <div className="flex items-center mb-2">
            <EnvironmentOutlined className="text-gray-500 mr-2" />
            <span className="text-gray-800">{locationText}</span>
          </div>

          <div className="text-xl font-semibold mb-3 hover:text-sky-500 transition-colors">
            {placeText}
          </div>

          <div className="flex items-center mb-3 text-xl">
            <div className="mr-2">
              {Array.from({ length: 5 }, (_, index) =>
                index + 0.5 <= ratingValue ? (
                  <StarFilled
                    className="mr-1"
                    key={index}
                    style={{ color: "#b0d12b" }}
                  />
                ) : (
                  <StarOutlined
                    className="mr-1"
                    key={index}
                    style={{ color: "#b0d12b" }}
                  />
                )
              )}
            </div>

            <div className="text-slate-500">({reviewText} review)</div>
          </div>

          <div className="flex items-center text-gray-600">
            <ClockCircleOutlined className="mr-2" />
            <span>{timeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
