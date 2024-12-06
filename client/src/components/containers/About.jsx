import React from 'react';

const About = () => {
  return (
    <div 
      className="bg-white flex" 
      id="about"
    >
      <div 
        className="flex justify-center bg-[#e3e5e5] m-[50px] rounded-[20px]
        max-[1280px]:flex-wrap 
        max-[768px]:m-[20px]"
      >
        <div className="flex justify-center items-center">
          <img 
            src="/assets/image-3-4.png" 
            alt="No Image" 
            className="rounded-[60px] p-[40px] min-w-[520px] w-[500px]
            max-[768px]:min-w-[300px] max-[768px]:rounded-[40px]
            max-[480px]:p-[20px] max-[480px]:min-w-0" 
          />
        </div>
        <div 
          className="flex flex-col justify-center items-start p-[40px]
          max-[1280px]:py-[20px]"
        >
          <h1 className="text-[3rem] font-bold">About me</h1>
          <p className="text-[1.2rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, itaque quas sequi 
            vitae temporibus enim perferendis sint iste doloremque rerum ipsum magni! Animi nobis, 
            porro sed mollitia assumenda aut et!  
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;