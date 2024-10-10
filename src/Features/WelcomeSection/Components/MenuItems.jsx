import React from 'react'
import CustomDropdown from './CustomDropdown'

const dropdownItems = [
  {
    header: "Home",
    items: ["Home 1", "Home 2", "Home 3"],
  },
  {
    header: "Hotel",
    items: ["Hotel 1", "Hotel 2", "Hotel 3"],
  },
  {
    header: "Tour",
    items: ["Tour 1", "Tour 2", "Tour 3"],
  },
  {
    header: "Activity",
    items: ["Activity 1", "Activity 2", "Activity 3"],
  },
  {
    header: "Rental",
    items: ["Rental 1", "Rental 2", "Rental 3"],
  },
  {
    header: "Car",
    items: ["Car 1", "Car 2", "Car 3"],
  },
  {
    header: "Yacht",
    items: ["Yacht 1", "Yacht 2", "Yacht 3"],
  },
  {
    header: "Pages",
    items: ["Pages 1", "Pages 2", "Pages 3"],
  },
];

const MenuItems = () => {
  return (
    <div className='flex text-white items-center font-rubik'>
      {dropdownItems.map((item) => (
        <CustomDropdown  items={item.items} header={item.header} withDownArrow={true} iconSize={"xs"} />
      ))}
    </div>
  );
};

export default MenuItems