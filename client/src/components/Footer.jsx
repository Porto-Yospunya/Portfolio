import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[rgb(26,45,66)]">
      <div className="flex flex-col justify-center items-center">
        <h1 
          className="text-[#ffffff] text-[1rem] py-[10px]
          max-[480px]:text-[.8rem]"
        >
          Copyright © 2024 by @porto | All Rights Reserverd.
        </h1>
        <div className="flex gap-[15px] mb-[10px] text-[2.4rem] text-white">
          <Link to={"https://www.facebook.com/wacharapong.yospunya.1"}><FaFacebook /></Link>
          <Link to={"https://www.instagram.com/p.porto_o/"}><FaInstagram /></Link>
          <Link to={"https://github.com/Porto-Yospunya"}><FaGithub /></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;