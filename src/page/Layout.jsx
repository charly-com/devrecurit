import React from "react";
import left from "../assets/Ellipse 1.png";
import right from "../assets/Rectangle 338.png";
import rightbuttom from "../assets/Polygon 1.png";
import leftbuttom from "../assets/Rectangle 337.png";
import Footer from "../component/Footer";
import Nabar from "../component/Nabar";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#0C2D29] h-screen relative overflow-y-auto">
      <div className=" relative z-[1000]">
      <Nabar />
      <div className="overflow-y-auto h-[calc(100vh - 64px)]">
          {children}
        </div>
      <img src={left} alt="" className=" absolute top-[-50px] left-10 z-[-10]" />
      <img src={right} alt="" className="absolute top-[-50px] right-[-4px] z-[-10]" />
     
      <img src={rightbuttom} alt="" className="absolute right-[-4px] top-[50%]" />
      <img src={leftbuttom} alt="" className="absolute top-[56%] " />
      </div>
      
        
      <Footer />
    </div>
  );
};

export default Layout;
