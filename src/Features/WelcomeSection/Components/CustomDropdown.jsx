import React from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const CustomDropdown = ({
  items = [],
  header,
  headerIcon,
  withDownArrow = false,
  withItemIcon = false,
  iconSize,
  headerIconClasses = "",
}) => {
  const iconSizes = {
    xs: "text-xs",
    md: "text-md",
    lg: "text-lg",
  };

  if (items.length === 0) {
    return (
      <div className="mr-6 flex cursor-pointer">
        <div className={headerIconClasses}>{withItemIcon && headerIcon}</div>
        <Space>
          {header}
          {withDownArrow && <DownOutlined className={iconSizes[iconSize]} />}
        </Space>
      </div>
    );
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
        <div className="flex">
          <div className={headerIconClasses}> {withItemIcon && headerIcon}</div>
          <Space>
            {header}
            {withDownArrow && <DownOutlined className={iconSizes[iconSize]} />}
          </Space>
        </div>
      </Dropdown>
    </div>
  );
};

export default CustomDropdown;
