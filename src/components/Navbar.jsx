import React from "react";
import bell from "../assets/bell.png";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <div>
      <nav className="flex flex-col ">
        <div className=" bg-navbarColor text-white px-[200px] flex flex-wrap  py-3 items-center justify-between ">
          <div className=" flex flex-wrap items-center justify-center">
            <Link className="mr-10 cursor-pointer">Dashboard</Link>
            <Link className="mr-10 cursor-pointer">Master Price</Link>
            <Link className="mr-10 cursor-pointer">Custom Price</Link>
            <Link className="mr-10 cursor-pointer">Calendar</Link>
            <Link className="mr-10 cursor-pointer">Report</Link>
          </div>

          <div className="flex items-center gap-5 ">
            <a href="">
              <img src={bell} alt="" />
            </a>
            <div className="bg-white h-[35px] w-[35px] rounded-full "></div>
          </div>
        </div>
        <div className="py-2 px-[200px] border-b ">
          <h1 className="font-bold text-xl ">
            {location.pathname == "/"
              ? `Master Price`
              : ` ${location.pathname.substring(1)}`}
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
