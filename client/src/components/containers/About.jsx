import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className="bg-white flex z-0"
      id="about"
    >
      <div
        className="flex justify-center bg-[#e3e5e5] m-[50px] rounded-[20px] overflow-hidden
        max-[1280px]:flex-wrap 
        max-[768px]:m-[20px]"
      >
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: '-300px' }}
        >
          <img
            src="/assets/me-3-4.jpg"
            alt="No Image"
            className="rounded-[60px] p-[40px] min-w-[520px] w-[500px]
            max-[768px]:min-w-[300px] max-[768px]:rounded-[40px]
            max-[480px]:p-[20px] max-[480px]:min-w-0"
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-start p-[40px]
          max-[1280px]:py-[20px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: '-300px' }}
        >
          <h1 className="text-[#1a2d42] text-[3rem] font-bold">About ME</h1>
          <br />
          <p className="text-[#2e4156] text-[1.2rem]">ID : 66364694</p>
          <br />
          <p className="text-[#2e4156] text-[1.2rem]">
            My name is Watcharapong Yospunya, Nickname is Porto
            I'm from Phitsanulok in Thailand because I studing in faculy of Engineering at Naresuan University,
            Of course I'm Computer Engineering, I'm want to be Full-stack Developer.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;