import React from 'react';
import NavigationBar from './Components/NavigationBar';
import MenuSection from './Components/MenuSection';
import HeaderSection from './Components/HeaderSection';
import SearchSection from './Components/SearchSection';

const WelcomeSection = () => {
  return (
    <div className='bg-black'>
      <div className='overlay'></div>
      <div className='content'>
        <NavigationBar />
        <MenuSection />
        <HeaderSection />
        <SearchSection />
      </div>
    </div>
  );
};

export default WelcomeSection;
