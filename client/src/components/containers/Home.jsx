import React from 'react';

const Home = () => {

  const handleDownload = (e) => {
    e.preventDefault();
    window.alert("Nothing ;)");
  }

  return (
    <div 
      className="grid grid-cols-2 h-[100vh]
      max-[1280px]:mx-[100px]
      max-[768px]:grid-cols-1" 
      id="home"
    >
      <div 
        className="flex flex-col justify-center items-center
        max-[768px]:order-2"
      >
        <div className="flex flex-col">
          <h1 className="text-[3rem] font-bold max-[480px]:text-[2.5rem]">Hi, I'm</h1>
          <h1 className="text-[3rem] font-bold max-[480px]:text-[2.5rem]">Watcharapong Yospunya</h1>
          <h1 className="text-[1.8rem] max-[480px]:text-[1rem]">Backend Developer</h1>
          <h3 className="text-[1rem] max-[480px]:text-[.8rem]">I'm a Computer-engineering student at Naresuan University</h3>
          <div className="my-[10px]">
            <button 
              className="px-[20px] py-[8px] bg-[#1a2d42] text-[#ffffff] rounded-[16px]"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div 
        className="flex justify-center items-center
        max-[768px]:order-1"
      >
        <img
          src="/assets/image-1-1.png"
          alt="No Image"
          className="shadow-[#1a2d42] shadow-2xl w-[400px] min-w-[400px] rounded-[20px]
          max-[480px]:min-w-[280px]"
        />
      </div>
    </div>
  )
}

export default Home;