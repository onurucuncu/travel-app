import React from 'react';
import NavigationBar from './Components/NavigationBar';
import MenuSection from './Components/MenuSection';
import HeaderSection from './Components/HeaderSection';
import SearchSection from './Components/SearchSection';

const WelcomeSection = () => {
  return (
    <div className='bg-black w-full'>
      <div className='overlay'></div>
      <div className='content w-full'>
        <NavigationBar />
        <MenuSection />
        <HeaderSection />
        <SearchSection />
      </div>
    </div>
  );
};

export default WelcomeSection;
