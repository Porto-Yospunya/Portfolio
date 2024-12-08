import React, { useState} from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const Skill = () => {

  const [active, setActive] = useState(true);

  const icons = [
    { icon: "devicon-html5-plain", name: "HTML" },
    { icon: "devicon-css3-plain", name: "CSS" },
    { icon: "devicon-javascript-plain", name: "Javascript" },
    { icon: "devicon-typescript-plain", name: "Typescript" },
    { icon: "devicon-nodejs-plain-wordmark", name: "NodeJS" },
    { icon: "devicon-react-original", name: "React" },
    { icon: "devicon-tailwindcss-plain", name: "Tailwindcss" },
    { icon: "devicon-mysql-plain", name: "MySQL" },
    { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
    { icon: "devicon-mongodb-plain", name: "MongoDB" },
    { icon: "devicon-python-plain", name: "Python" },
    { icon: "devicon-java-plain", name: "Java" },
  ];
  
  return (
    <div 
      id="skill"
      className="my-[20px] mx-[60px] flex flex-col items-center
      max-[480px]:mx-[20px]" 
    >
      <div className="flex justify-center">
        <h1 className="text-[#1a2d42] text-[3rem] font-bold">Skills</h1>
      </div>
      <div 
        className={`grid grid-cols-5 w-[100%] h-[800px] transition-all overflow-hidden
        max-[768px]:grid-cols-3
        max-[480px]:grid-cols-2 ${!active && "max-[480px]:h-[1200px]"} ${active && "max-[480px]:h-[550px]"}`}
      >
        {icons.map((icon, index) => (
          <div className="flex flex-col justify-center items-center my-[40px]" key={index}>
            <i 
              class={`${icon.icon} text-[6rem] font-[500] text-[#1a2d42]
              max-[480px]:text-[4.5rem]`}
            ></i>
            <h1 className="text-[1.8rem] text-[#1a2d42] font-bold my-[5px] max-[480px]:text-[1.2rem]">{icon.name}</h1>
          </div>
        ))}
      </div>
      <button
        onClick={() => active ? setActive(false) : setActive(true)}
        className="flex justify-center items-center w-[100px]
        min-[480px]:opacity-0"
      >
        {active ? (
          <FaChevronDown />
        ) : (
          <FaChevronUp />
        )}
      </button>
    </div>
  );
}

export default Skill;