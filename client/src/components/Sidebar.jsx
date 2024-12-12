import React from 'react';

// import icons ...
import { IoHomeSharp } from 'react-icons/io5';
import { IoPersonSharp, IoAccessibilitySharp } from 'react-icons/io5';
import { FaLightbulb } from 'react-icons/fa';
import { PiDotsThreeBold } from "react-icons/pi";

const Sidebar = ({ onDrag, onDrop }) => {

  const menuItem = [
    { name: "home", icon: <IoHomeSharp />, },
    { name: "about", icon: <IoPersonSharp />, },
    { name: "skill", icon: <IoAccessibilitySharp />, },
    { name: "project", icon: <FaLightbulb />, },
  ];

  const handleClickToSection = (section, position) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className="fixed right-[40px] flex flex-col justify-center h-[100vh] z-[999]
      max-[480px]:left-0 max-[480px]:right-0 max-[480px]:bottom-[50px] max-[480px]:items-center max-[480px]:h-0"
      draggable
      onDrag={onDrag}
      onDrop={onDrop}
    >
      <div className="flex flex-col justify-center items-center text-white text-[1.5rem] bg-[#1a2d42] rounded-[20px] gap-3 py-[20px]"> 
        <ul
          className="relative flex flex-col justify-center gap-6 px-[10px] 
        max-[480px]:flex-row max-[480px]:py-[10px] max-[480px]:px-[20px] max-[480px]:text-[1rem] max-[480px]:hidden"
        >
          {menuItem.map((item, index) => (
            <li key={index}>
              <button onClick={() => handleClickToSection(item.name)}>{item.icon}</button>
            </li>
          ))}
        </ul>
        {/* <div className="flex justify-start text-gray-200 cursor-move">
          <PiDotsThreeBold />
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;