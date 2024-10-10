import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const CustomDropdown = ({ items, header, withDownArrow, iconSize }) => {
    const iconSizes = {
        xs: "text-xs",
        md: "text-md",
        lg: "text-lg"
    }
    return (
      <div className="mr-6 cursor-pointer">
        <Dropdown
          menu={{
            items: items.map((item) => ({
              label: <div>{item}</div>,
              key: item,
              value: item,
            })),
          }}
        >
          <Space>
            {header}
            {withDownArrow && <DownOutlined className={iconSizes[iconSize]} />}
          </Space>
        </Dropdown>
      </div>
    );
};

export default CustomDropdown;
