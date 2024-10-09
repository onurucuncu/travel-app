import React from "react";
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
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        USD
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        EUR
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        TRY
      </a>
    ),
    key: "2",
  },
];
  
const paragraphCSS =
  "my-2 mr-6 ml-6 cursor-pointer text-white duration-75 font-extralight hover:text-gray-300";
  const iconsCSS =
    "text-lg text-white hover:bg-white hover:text-black hover:rounded-full p-2 duration-200 text-lg hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.7)] transition-all transform hover:-translate-y-1";
    
const NavigationBar = () => {
  return (
    <div className="h-16 flex items-center justify-between font-sans text-sm bg-blue-500">
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
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  EUR
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
