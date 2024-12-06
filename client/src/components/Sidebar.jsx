import React from 'react';
import { HomeSharp, PersonSharp, AccessibilitySharp, BulbSharp } from 'react-ionicons';

const Sidebar = () => {
  
  const handleClickToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div 
      className="fixed right-[40px] flex flex-col justify-center h-[100vh]
      max-[480px]:left-0 max-[480px]:right-0 max-[480px]:bottom-[50px] max-[480px]:items-center max-[480px]:h-0"
    >
      <ul 
        className="flex flex-col justify-center gap-6 bg-[#1a2d42] px-[10px] rounded-[20px] py-[20px]
        max-[480px]:flex-row max-[480px]:py-[10px] max-[480px]:px-[20px]"
      >
        <li><button onClick={() => handleClickToSection("home")}><HomeSharp color={'#ffffff'} /></button></li>
        <li><button onClick={() => handleClickToSection("about")}><PersonSharp color={'#ffffff'} /></button></li>
        <li><button onClick={() => handleClickToSection("skill")}><AccessibilitySharp color={'#ffffff'} /></button></li>
        <li><button onClick={() => handleClickToSection("project")}><BulbSharp color={'#ffffff'} /></button></li>
      </ul>
    </div>
  );
}

export default Sidebar;