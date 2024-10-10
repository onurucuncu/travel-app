import React, { useState } from "react";
import {
  FacebookOutlined,
  XOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <div>USD</div>,
    key: "0",
    value: "USD",
  },
  {
    label: <div>EUR</div>,
    key: "1",
    value: "EUR",
  },
  {
    label: <div>TRY</div>,
    key: "2",
    value: "TRY",
  },
];

const paragraphCSS =
  "my-2 mr-6 ml-6 cursor-pointer text-white duration-75 font-extralight hover:text-gray-300";
const iconsCSS =
  "cursor-pointer text-lg text-white hover:bg-white hover:text-black hover:rounded-full p-2 duration-200 text-lg hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)] transition-all transform hover:-translate-y-1";

const NavigationBar = () => {
  const [currentCurency, setCurrentCurency] = useState("EUR");

  const handleClick = (e) => {
    console.log(e.item.props);
    setCurrentCurency(e.item.props.value);
  };

  return (
    <div className="relative w-full">
      {/* relative */}
      <div className="bg-blue-900 opacity-30 absolute inset-0 z-0"></div>
      {/* absolute */}
      <div className="h-16 flex items-center justify-between font-sans text-sm bg-transparent border-b z-10 relative">
        <div className="left-menu-items bg-transparent flex">
          <div className="my-4 border-r flex items-center justify-center">
            <div className={paragraphCSS}>(000) 999 - 898 - 999</div>
          </div>

          <div className="my-4 flex items-center justify-center">
            <div className={paragraphCSS}>info@mytravel.com</div>
          </div>
        </div>
        <div className="right-menu-items bg-transparent flex">
          <div className="my-4 border-r flex items-center justify-center">
            <div className="mr-3">
              <FacebookOutlined className={iconsCSS} />
            </div>
            <div className="mr-3">
              <XOutlined className={iconsCSS} />
            </div>
            <div className="mr-3">
              <InstagramOutlined className={iconsCSS} />
            </div>
            <div className="mr-3">
              <LinkedinOutlined className={iconsCSS} />
            </div>
          </div>

          <div className="my-4 flex border-r items-center justify-center">
            <div className={paragraphCSS}>
              <UserOutlined className="text-lg" /> Sign In or Register
            </div>
          </div>

          <div className="my-4 flex items-center justify-center">
            <div className={paragraphCSS}>
              <Dropdown
                menu={{
                  items,
                  onClick: handleClick,
                }}
              >
                <Space>
                  {currentCurency}
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
