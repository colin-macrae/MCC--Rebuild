import "../pages/Landing.css";
import { FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [sliderOpen, setSliderOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="HEADER bg-[#005067] sticky top-0 z-10">
        <div className="header-container flex items-center justify-between">
          <div className="LOGO flex h-36">
            <a>
              <img
                className="self-start mt-6"
                src={coloredLogo}
                onClick={() => navigate("/")}
              ></img>
            </a>
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

        <NavLinks />
        <button onClick={() => setSliderOpen(!sliderOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        {sliderOpen === true ? (
          <SliderMenu setSliderOpen={setSliderOpen} />
        ) : null}
      </div>
      <Outlet />
    </>
  );
}

export function NavLinks() {
  const [servicesOnHover, setServicesOnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar flex justify-center">
      <div className="HEAD-CENTER desktop-nav-links flex text-white font-bold">
        <Link className="nav-item" to="/">
          <div>HOME</div>
        </Link>
        <Link className="nav-item" to="/about">
          <div>ABOUT</div>
        </Link>
        <Link className="nav-item" to="/employment">
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
                  onClick={() => navigate("/Commercial-Cleaning")}
                >
                  Commercial Cleaning
                </button>
                <button
                  className="text-m pt-2 px-2 text-left"
                  onClick={() => navigate("/Janitorial-Services")}
                >
                  Janitorial Services
                </button>
                <button
                  className="text-m pt-2 px-2 text-left"
                  onClick={() => navigate("/Carpet-Cleaning")}
                >
                  Commercial Carpet Cleaning
                </button>
                <button
                  className="text-m pt-2 px-2 pb-2 text-left"
                  onClick={() => navigate("/Office-Cleaning")}
                >
                  Office Cleaning
                </button>
              </div>
            )}
          </div>
        </div>

        <Link className="nav-item" to="/contact">
          <div>CONTACT</div>
        </Link>
      </div>
    </div>
  );
}

export function SliderMenu({ setSliderOpen }: any) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeSliderAndNavigate = (path: any) => {
    setServicesOpen(false);
    setSliderOpen(false);
    navigate(path);
  };

  return (
    <div className="slider-menu">
      <button onClick={() => setSliderOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="navbar flex justify-center pb-4">
        <div className="HEAD-CENTER mobile-nav-links flex text-white font-bold">
          <Link
            onClick={() => setSliderOpen(false)}
            className="nav-item"
            to="/"
          >
            <div>HOME</div>
          </Link>
          <Link
            onClick={() => setSliderOpen(false)}
            className="nav-item"
            to="/about"
          >
            <div>ABOUT</div>
          </Link>
          <Link
            onClick={() => setSliderOpen(false)}
            className="nav-item"
            to="/employment"
          >
            <div>EMPLOYMENT</div>
          </Link>
          <div className="SERVICES relative nav-item">
            <div onClick={toggleServices} className="services w-[7rem]">
              SERVICES &#9660;
              {servicesOpen && (
                <div className="DROP-DOWN absolute top-6 left-0 h-max bg-[#008cb3] flex flex-col w-60 rounded">
                  <button
                    className="text-m pt-2 px-2 text-left"
                    onClick={() =>
                      closeSliderAndNavigate("/Commercial-Cleaning")
                    }
                  >
                    Commercial Cleaning
                  </button>
                  <button
                    className="text-m pt-2 px-2 text-left"
                    onClick={() =>
                      closeSliderAndNavigate("/Janitorial-Services")
                    }
                  >
                    Janitorial Services
                  </button>
                  <button
                    className="text-m pt-2 px-2 text-left"
                    onClick={() =>
                      closeSliderAndNavigate("Carpet-Cleaning")
                    }
                  >
                    Commercial Carpet Cleaning
                  </button>
                  <button
                    className="text-m pt-2 px-2 pb-2 text-left"
                    onClick={() =>
                      closeSliderAndNavigate("/Office-Cleaning")
                    }
                  >
                    Office Cleaning
                  </button>
                </div>
              )}
            </div>
          </div>

          <Link
            onClick={() => setSliderOpen(false)}
            className="nav-item"
            to="/contact"
          >
            <div>CONTACT</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
