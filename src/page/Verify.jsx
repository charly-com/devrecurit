import React, { useState } from "react";
import Layout from "./Layout";
import logo from "../assets/logo.svg";
import { useApi } from "../api/ApiContext";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const api = useApi();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleVerification = async () => {
    try {
      const verificationResponse = await api.verifyUser(otp);
      if (verificationResponse.success) {
        const username = verificationResponse.username;

        navigate("/success", { state: { username } });
      } else {
        console.error(verificationResponse.error || "Verification failed");
      }
    } catch (error) {
      console.error("Verification error:", error);
    }
  };
  
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center mt-[7%] mb-[11%]">
        <img src={logo} alt="logo" className="w-[180px] py-9" />
        <div className="flex flex-col justify-center items-center rounded-2xl bg-white shadow-lg py-[37px] px-[48.309px] ">
          <div className="flex flex-col justify-center items-center mb-[10px]">
            <h1 className="text-black font-poppins text-[24px] font-bold">
              Verification
            </h1>
            <p className="text-[#52525285] font-poppins text-[10px] font-medium leading-[205.5%]">
              Enter the unique code sent to your email address
            </p>
            <div className=" flex flex-col gap-[10px] ">
              <div className="flex flex-col items-start relative">
                <label className="mb-1 text-[#00000069] font-poppins text-xs font-normal leading-[157.5%] tracking-[0.22px]">
                  OTP
                </label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-[421px] h-[50px] rounded-[6.91px] border border-solid border-[#0000002b] px-[30px] py-[13px]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button
                onClick={handleVerification}
                className="flex w-[421px] h-[47px] p-[13.82px] justify-center items-center gap-[13.82px] rounded-[9.674px] bg-[#2ED1A5] text-white font-inter text-[16px] font-bold leading-160 mb-3"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
