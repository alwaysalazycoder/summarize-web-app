import React from "react";
import { Link, Route, Routes } from "react-router-dom";
const IntroLayout = () => {
  return (
    <div className="main-container main-page-container h-screen w-screen bg-[#f5f0e7] relative flex flex-col justify-center items-cente">
      <div className="logo ">
        <img
          src="https://res.cloudinary.com/dfwvu60ef/image/upload/v1683553298/icon_lwovmv.png"
          alt="main-logo"
          className="w-screen h-[70vh] object-contain"
        />
      </div>
      <div className="logo-text absolute top-[45%] text-[48px] font-thin text-center w-full ">summarize</div>
      <div className="bottom-text w-full text-center">
        <Link to={"/main/"} className="w-full text-center cursor-pointer ">Ride an ocean of stories &#10230;</Link>
      </div>
    </div>
  );
};

export default IntroLayout;
