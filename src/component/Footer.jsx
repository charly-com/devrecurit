import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import medium from "../assets/medium.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="bg-[#111] flex justify-between pl-[160px] pt-[50px] pb-[40px] pr-[60px] bottom-0 w-full ">
      <div className="flex justify-between w-[25%]">
        <p className="text-gray-600 font-inter text-base font-medium">
          Developers
        </p>
        <p className="text-gray-600 font-inter text-base font-medium">
          Organizations
        </p>
        <p className="text-gray-600 font-inter text-base font-medium">About</p>
      </div>
      <div className="flex flex-col gap-[14px]">
        <div className="flex gap-[28px]">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={medium} alt="medium" />
        <img src={youtube} alt="youtube" />
        </div>
        
        <div className="flex justify-end ">
          <p className="text-gray-600 font-inter text-base font-medium ">
            © 2022 DevRecruit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
