import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
  LinkedinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";

const menuItems = [
  {
    key: "1",
    label: <span>EUR</span>,
  },
  {
    key: "2",
    label: <span>USD</span>,
  },
  {
    key: "3",
    label: <span>TRY</span>,
  },
];

const HomePage = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent">
      <div className="flex-grow">
        <Breadcrumb
          separator={<span className="mx-2">|</span>}
          items={[
            {
              href: "#",
              title: "000 - 999 - 99 - 88",
            },
            {
              href: "#",
              title: "info@mytravel.com.tr",
            },
          ]}
        />
      </div>
      <div className="flex space-x-4 items-center">
        <Breadcrumb
          separator=""
          items={[
            {
              href: "#",
              title: <FacebookOutlined />,
            },
            {
              type:"separator",
              separator:""
            },
            {
              href: "#",
              title: <InstagramOutlined  />,
            },
            {
              type:"separator",
              separator:""
            },
            {
              href: "#",
              title: <XOutlined className="" />,
            },
            {
              type:"separator",
              separator:""
            },
            {
              href: "#",
              title: <LinkedinOutlined />,
            },
            {
              type:"separator",
              separator:"|"
            },
            {
              href: "#",
              title: (
                <>
                  <UserOutlined className="text-gray-600" />
                  <span className="ml-2">Sign in or Register</span>
                </>
              ),
            },
            {
              type:"separator",
              separator:"|"
            },
            {
              title: <a href="">EUR</a>,
              menu: { items: menuItems },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
