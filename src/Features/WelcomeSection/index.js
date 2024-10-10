import React from 'react';
import NavigationBar from './Components/NavigationBar';
import MenuSection from './Components/MenuSection';
import HeaderSection from './Components/HeaderSection';

const WelcomeSection = () => {
  return (
    <div className='backgroundImage'>
      <div className='overlay'></div>
      <div className='content'>
        <NavigationBar />
        <MenuSection />
        <HeaderSection/>
      </div>
    </div>
  );
};

export default WelcomeSection;
