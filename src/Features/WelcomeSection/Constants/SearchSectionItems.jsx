import React from 'react'
import { HotelIcon } from '../../../Icons/HotelIcon'
import { TourIcon } from '../../../Icons/TourIcon';
import { RentalIcon } from '../../../Icons/RentalIcon';
import { ActivityIcon } from '../../../Icons/ActivityIcon';
import { CarIcon } from '../../../Icons/CarIcon';
import { YachtIcon } from '../../../Icons/YachtIcon';
import CustomDropdown from '../Components/CustomDropdown';


const searchItems = [
  {
    header: "Hotel",
    item: "",
    icon: (
      <HotelIcon
        width={"40"}
        height={"40"}
        fillColor={"white"}
        strokeWidth={"1"}
      />
    ),
  },
  {
    header: "Tours",
    item: "",
    icon: (
      <TourIcon
        width={"40"}
        height={"40"}
        fillColor={"white"}
        strokeWidth={"1"}
      />
    ),
  },
  {
    header: "Activity",
    item: "",
    icon: (
      <ActivityIcon
        width={"40"}
        height={"40"}
        fillColor={"white"}
        strokeWidth={"1"}
      />
    ),
  },
  {
    header: "Rental",
    item: "",
    icon: (
      <RentalIcon
        width={"40"}
        height={"40"}
        fillColor={"white"}
        strokeWidth={"1"}
      />
    ),
  },
  {
    header: "Car",
    item: "",
    icon: (
      <CarIcon
        width={"40"}
        height={"40"}
        fillColor={"white"}
        strokeWidth={"1"}
      />
    ),
  },
  {
    header: "Yacht",
    item: "",
    icon: (
      <YachtIcon
        width={"40"}
        height={"40"}
        fillColor={"white"}
        strokeWidth={"1"}
      />
    ),
  },
];
const SearchSectionItems = () => {
   return (
     <div className="flex text-white items-center font-rubik">
       {searchItems.map((item,index) => (
         <CustomDropdown
           key={index}
           items={item.items}
           header={item.header}
           headerIcon={item.icon}
           withItemIcon={true}
               headerIconClasses='mr-4'
        
         />
       ))}
     </div>
   );
}

export default SearchSectionItems