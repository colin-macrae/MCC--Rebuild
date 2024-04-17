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
      <div className="HEADER bg-[#005067] sticky top-0 z-10">
        <div className="header-container flex items-center justify-between">
          <div className="LOGO flex h-36">
            <img className="self-start mt-6" src={coloredLogo}></img>
          </div>
          <div className="HEAD-RIGHT flex items-center mb-10 text-white font-bold">
            <button className="flex leading-5">
              <span className="pr-1.5">
                <HiOutlineMail size={20} />
              </span>{" "}
              EMAIL US
            </button>
            <button className="call-us-btn text-white text-center h-12 px-4 self-center bg-[#F58800] rounded font-bold mx-5">
              CALL US NOW
            </button>
            <button className="flex text-white">
              <FaLinkedin size={40} />
            </button>
          </div>
        </div>
        <div className="navbar flex justify-center pb-4">
          <div className="HEAD-CENTER flex text-white font-bold">
            <Link className="nav-item" to="/MCC-Rebuild/">
              <div>HOME</div>
            </Link>
            <Link className="nav-item" to="/MCC-Rebuild/about">
              <div>ABOUT</div>
            </Link>
            <Link className="nav-item" to="/MCC-Rebuild/employment">
              <div>EMPLOYMENT</div>
            </Link>
            <div
              onMouseEnter={() => setServicesOnHover(true)}
              onMouseLeave={() => setServicesOnHover(false)}
              className="SERVICES relative nav-item"
            >
              <div className="services w-[5.625rem]">
                SERVICES &#9660;
                {servicesOnHover && (
                  <div className="DROP-DOWN absolute top-6 left-0 h-max bg-[#008cb3] flex flex-col w-60 rounded">
                    <button
                      className="text-m pt-2 px-2 text-left"
                      onClick={() =>
                        navigate("/MCC-Rebuild/Commercial-Cleaning")
                      }
                    >
                      Commercial Cleaning
                    </button>
                    <button
                      className="text-m pt-2 px-2 text-left"
                      onClick={() =>
                        navigate("/MCC-Rebuild/Janitorial-Services")
                      }
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

            <Link className="nav-item" to="/MCC-Rebuild/contact">
              <div>CONTACT</div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
