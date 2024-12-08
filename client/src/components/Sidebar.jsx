import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { IoPersonSharp, IoAccessibilitySharp } from 'react-icons/io5';
import { FaLightbulb  } from 'react-icons/fa';

const Sidebar = () => {

  const menuItem = [
    { name: "home", icon: <IoHomeSharp />, },
    { name: "about", icon: <IoPersonSharp />, },
    { name: "skill", icon: <IoAccessibilitySharp />, },
    { name: "project", icon: <FaLightbulb />, },
  ];

  const handleClickToSection = (section, position) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
    setPosition(position);
  }

  return (
    <div 
      className="fixed right-[40px] flex flex-col justify-center h-[100vh]
      max-[480px]:left-0 max-[480px]:right-0 max-[480px]:bottom-[50px] max-[480px]:items-center max-[480px]:h-0"
    >
      <ul 
        className="relative flex flex-col justify-center gap-6 bg-[#1a2d42] px-[10px] rounded-[20px] py-[20px] text-[1.5rem] text-white
        max-[480px]:flex-row max-[480px]:py-[10px] max-[480px]:px-[20px] max-[480px]:text-[1rem] max-[480px]:hidden"
      >
        {menuItem.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleClickToSection(item.name)}>{item.icon}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;