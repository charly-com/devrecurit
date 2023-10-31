import React from "react";
import logo from "../assets/logo.svg";
import down from "../assets/arrow-down.png";

const Nabar = () => {
  return (
    <div className="bg-[#03433B] flex h-[77px] items-center justify-between pl-[80px] pr-[70px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-[45px] items-center ">
        <p className="text-white font-poppins text-15 font-medium">Home</p>
        <p className="text-white font-poppins text-15 font-medium">
          Challenge Library
        </p>
        <p className="flex gap-2 text-white font-poppins text-15 font-medium">
          Starter Courses{" "}
          <img src={down} alt="" className="w-[18px] h-[18px]" />{" "}
        </p>
        <p className="flex gap-2  text-white font-poppins text-15 font-medium">
          Interview Kits <img src={down} alt="" className="w-[18px] h-[18px]" />
        </p>
      </div>
      <div className="flex gap-[35px] items-center">
        <button className="flex w-[125px] h-[39px] justify-center items-center gap-5 flex-shrink-0 rounded bg-[#85C8BF] text-white font-poppins text-15 font-bold">
          Signup
        </button>
        <p className="text-white font-poppins text-15 font-medium">Upgrade</p>
      </div>
    </div>
  );
};

export default Nabar;
