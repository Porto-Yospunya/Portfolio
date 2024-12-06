import React from 'react';

import projects from '../../../project.json';

const Project = () => {

  const handleClickToVisit = (path) => {
    window.alert(path);
  }

  return (
    <div className="bg-[#e3e5e5] py-[40px]" id="project">
      <div className="flex justify-center">
        <h1  className="text-[#1a2d42] text-[3rem] font-bold">My Projects</h1>
      </div>
      <div 
        className="grid grid-cols-2 m-[40px] gap-[20px]
        max-[768px]:grid-cols-1"
      >
        {projects.map((project, index) => (
          <div className="flex flex-row justify-center" key={index}>
            <img 
              src={project.image} 
              alt="No Image" 
              className="rounded-[20px] w-[300px] min-w-[200px] h-auto
              max-[480px]:min-w-[100px]"
            />
            <div className="flex flex-col justify-center p-[10px] gap-[6px] mx-[10px]">
              <h1 className="text-[#1a2d42] text-[2rem] font-bold max-[480px]:text-[1rem]">{project.title}</h1>
              <p className="text-[#2e4156] max-[480px]:text-[.8rem]">{project.description}</p>
              <div className="my-[5px]">
                <button 
                  onClick={() => handleClickToVisit(project.link)} 
                  className="py-[6px] px-[30px] bg-[#1a2d42] text-[1.2rem] text-[#ffffff] rounded-[10px]
                  max-[480px]:px-[20px]"
                >
                  visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;