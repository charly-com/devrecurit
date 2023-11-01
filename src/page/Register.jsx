import React from "react";
import "./style.css";
import Layout from "./Layout";
import logo from "../assets/logo.svg";
import sms from "../assets/sms.svg";
import lock from "../assets/lock.svg";

const Register = () => {
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center mt-[5%] mb-[5%] ">
        <img src={logo} alt="logo" className="w-[180px] py-9" />
        <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-lg py-[37px] px-[48.309px] ">
          <div className="flex flex-col justify-center items-center mb-[10px]">
            <h1 className="text-black font-poppins text-[24px] font-bold">
              Sign up on DevRecruit
            </h1>
            <p className="text-[#52525285] font-poppins text-[10px] font-medium leading-[205.5%]">
              Access your account or get started with us
            </p>
          </div>
          <div className="relative flex flex-col gap-[10px] ">
            <div className="flex flex-col items-start">
              <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[50px] py-[13px]"
              />
              <div className="absolute top-10 left-3 pl-2 flex items-center pointer-events-none">
                <img src={sms} alt="icon" className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[50px] py-[13px]"
              />
              <div className="absolute top-[31%] left-3 pl-2 flex items-center pointer-events-none">
                <img src={sms} alt="icon" className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                Signup As
              </label>
              <select className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[20px] py-[13px]">
                <option
                  value="Developer"
                  className="text-[#00000069] font-poppins text-[13px] font-normal leading-[157.5%] tracking-[0.26px]"
                >
                  Developer
                </option>
                <option
                  value="Employer"
                  className="text-[#00000069] font-poppins text-[13px] font-normal leading-[157.5%] tracking-[0.26px]"
                >
                  Employer
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter Password"
                className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[50px] py-[13px]"
              />
              <div className="absolute top-[74%] left-3 pl-2 flex items-center pointer-events-none">
                <img src={lock} alt="icon" className="h-5 w-5" />
              </div>
            </div>
            <button className="flex w-[421px] h-[47px] p-[13.82px] justify-center items-center gap-[13.82px] rounded-[9.674px] bg-[#2ED1A5] text-white font-inter text-[16px] font-bold leading-160 mb-3">
              Create Account
            </button>
          </div>
          <p className="text-[#00000069] font-poppins text-xs font-normal leading-[17.325px] tracking-[0.22px] ">
            By clicking Create Account, you agree to our{" "}
            <span>Terms of Use.</span>
          </p>
          <p className="text-[#85C8BF] font-poppins text-sm font-medium leading-[157.5%] tracking-[0.26px]">
            Already have an account? Sign In
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
