import React, { useState } from "react";
import Layout from "./Layout";
import logo from "../assets/logo.svg";
import sms from "../assets/sms.svg";
import lock from "../assets/lock.svg";
import { useApi } from "../api/ApiContext";

const Login = () => {
  const api = useApi();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.login(formData);
      if (response.status === 200) {
        console.log("Login Success");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center mt-[7%] mb-[3%]">
        <img src={logo} alt="logo" className="w-[180px] py-9" />
        <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-lg py-[37px] px-[48.309px] ">
          <div className="flex flex-col justify-center items-center mb-[10px]">
            <h1 className="text-black font-poppins text-[24px] font-bold">
              Login as a Developer
            </h1>
            <p className="text-[#52525285] font-poppins text-[10px] font-medium leading-[205.5%]">
              Access your account or get started with us
            </p>
            <div className=" flex flex-col gap-[10px] ">
              <div className="flex flex-col items-start relative">
                <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                  Username/Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Username/ Email"
                  className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[50px] py-[13px]"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                />
                <div className="absolute top-10 left-3 pl-2 flex items-center pointer-events-none">
                  <img src={sms} alt="icon" className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col items-start relative">
                <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[50px] py-[13px]"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="absolute top-[50%] left-3 pl-2 flex items-center pointer-events-none">
                  <img src={lock} alt="icon" className="h-5 w-5" />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="flex w-[421px] h-[47px] p-[13.82px] justify-center items-center gap-[13.82px] rounded-[9.674px] bg-[#2ED1A5] text-white font-inter text-[16px] font-bold leading-160 mb-3"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-5  gap-[100px]">
          <p className="text-white font-poppins text-base font-bold leading-[157.5%] tracking-[0.26px]">
            Don’t have an account? Register
          </p>
          <p className="text-[#329789] font-poppins text-base font-bold leading-[157.5%] tracking-[0.26px]">
            Forgot Password?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
