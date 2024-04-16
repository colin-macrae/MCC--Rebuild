import "../pages/Landing.css";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [servicesOnHover, setServicesOnHover] = useState(false);

    const navigate = useNavigate();
  

  return (
    <>
      <div className="HEADER flex bg-[#005067] sticky top-0 z-10">
        <div className="HEAD-LEFT basis-1/3 CONTENTS flex items-center justify-center">
          <div className="LOGO flex h-36 object-contain">
            <img className="self-start mt-6" src={coloredLogo}></img>
          </div>
        </div>
        <div className="HEAD-CENTER flex basis-1/3 justify-center items-center text-white font-bold">
          <Link to="/MCC-Rebuild/">
            <div className="mb-10 mr-12">HOME</div>
          </Link>
          <Link to="/MCC-Rebuild/about">
            <div className="mb-10 mr-12">ABOUT</div>
          </Link>
          <Link to="/MCC-Rebuild/employment">
            <div className="mb-10 mr-12">EMPLOYMENT</div>
          </Link>
          <div
            onMouseEnter={() => setServicesOnHover(true)}
            onMouseLeave={() => setServicesOnHover(false)}
            className="SERVICES relative mb-10 mr-12"
          >
            <div className="services w-[5.625rem]">
              SERVICES &#9660;
              {servicesOnHover && (
                <div className="DROP-DOWN absolute top-6 left-0 h-max bg-[#008cb3] flex flex-col w-60 rounded">
                  <button
                    className="text-m pt-2 px-2 text-left"
                    onClick={() => navigate("/MCC-Rebuild/Commercial-Cleaning")}
                  >
                    Commercial Cleaning
                  </button>
                  <button
                    className="text-m pt-2 px-2 text-left"
                    onClick={() => navigate("/MCC-Rebuild/Janitorial-Services")}
                  >
                    Janitorial Services
                  </button>
                  <button
                    className="text-m pt-2 px-2 text-left"
                    onClick={() => navigate("/MCC-Rebuild/Carpet-Cleaning")}
                  >
                    Commercial Carpet Cleaning
                  </button>
                  <button
                    className="text-m pt-2 px-2 pb-2 text-left"
                    onClick={() => navigate("/MCC-Rebuild/Office-Cleaning")}
                  >
                    Office Cleaning
                  </button>
                </div>
              )}
            </div>
          </div>

          <Link to="/MCC-Rebuild/contact">
            <div className="mb-10 mr-12">CONTACT</div>
          </Link>
        </div>
        <div className="HEAD-RIGHT basis-1/3 flex justify-center items-center mb-20 text-white font-bold leading-5">
          <div className=" EMAIL-US flex justify-between items-baseline text-white font-bold leading-5 mr-14">
            <button className="flex leading-5">
              <span className="pr-1.5">
                <HiOutlineMail size={20} />
              </span>{" "}
              EMAIL US
            </button>
          </div>
          <button className="text-white text-center h-12 px-4 self-center bg-[#F58800] rounded font-bold">
            CALL US NOW
          </button>
          <button className="flex text-white ml-14">
            <FaLinkedin size={40} />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
