import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import React from "react";

const ActivitySearch = () => {
  return (
    <div className="bg-white rounded-md flex items-center w-11/12 h-32 font-rubik">
      <div className="w-full p-4 flex justify-between">
        <div className="content flex justify-between w-full mr-5">
          <div className="flex flex-col w-full mr-4">
            <label className="text-gray-400 mb-2 ml-3">Activities, Tours or Destination</label>
            <Input
              placeholder="Where are you going ?"
              prefix={
                <EnvironmentOutlined className="text-blue-500 text-lg mr-4" />
              }
              className="border-0 border-b-2 border-gray-500 bg-transparent text-white rounded-none focus:border-gray-500 h-12"
            />
          </div>
        </div>

        <div className="button">
          <Button
            className="w-44 h-16 text-lg font-rubik mt-2 mr-1"
            type="primary"
            icon={<SearchOutlined className="text-2xl" />}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActivitySearch;
