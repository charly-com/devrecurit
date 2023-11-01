import React from "react";
import Layout from "./Layout";
import success from "../assets/image 447.png";
import { useLocation } from "react-router-dom";

const Sucess = () => {
    const location = useLocation(); 
    const username = location.state.username;
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center mt-[10%] mb-[11%]">
        <div className="flex flex-col gap-[20px] justify-center items-center rounded-2xl bg-white shadow-lg py-[59px] px-[132px] ">
          <img src={success} alt="success" className="w-[82px] h-[82px] " />
          <div className="w-[55%]">
            <p className="text-black text-center font-poppins text-2xl font-semibold leading-7">
              Congrats{" "}
              <span className="text-[#2ED1A5] font-poppins text-2xl font-bold leading-7">
              {username}
              </span>{" "}
              You are all set!
            </p>
          </div>
          <button className="flex w-[250px] h-[47px] p-[13.82px] justify-center items-center gap-[13.82px] rounded-[9.674px] bg-[#2ED1A5] text-white font-inter text-[16px] font-bold leading-160 mt-7">
          Start Experience!
              </button>
        </div>
      </div>
    </Layout>
  );
};

export default Sucess;
