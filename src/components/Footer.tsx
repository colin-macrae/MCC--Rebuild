import coloredLogo from "../assets/Mass_Commercial_Cleaning_FINAL-1cREV-SCREEN.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="p-5 pt-10 px-12 bg-[#005067] text-[#ffffff] w-full flex flex-col justify-center lg:flex-row ">
        <div className="lg:w-1/5 w-full flex justify-center ">
          <img className="" src={coloredLogo}></img>
        </div>

        <div className="lg:w-1/5 flex-col w-full">
          <div className="text-sm font-bold mb-4 flex justify-center mt-4 lg:mt-auto">
            CONTACT US
          </div>
          <div className="text-sm">
            <p className="flex justify-center footer-txt">660 Main Street </p>
            <p className="flex justify-center pb-3">Sturbridge, MA 01566</p>
            <p className="flex justify-center">140 Pine Street</p>
            <p className="flex justify-center pb-3">Florence, MA 01062</p>
            <p className="flex justify-center">(413) 568-4696</p>
            <p className="flex justify-center">Info@macommclean.com</p>
          </div>
        </div>

        <div className="lg:w-1/5 flex-col w-full">
          <div className="text-sm flex justify-center  mt-4 lg:mt-auto pb-3 font-bold">
            HOURS
          </div>
          <div>
            <p className="font-bold flex text-sm justify-center">Mon - Fri</p>
            <p className="text-sm flex justify-center pb-3">8 am - 5pm</p>
            <p className="font-bold text-sm flex justify-center">Sat & Sun</p>
            <p className="text-sm flex justify-center">Closed</p>
          </div>
        </div>

        <div className="lg:w-1/5 flex-col w-full">
          <div className="mt-4 lg:mt-auto">
            <Link to="/MCC-Rebuild/">
              <p className="flex justify-center text-sm font-bold pb-2 hover:text-[#F48700]">
                HOME
              </p>
            </Link>
            <Link to="/MCC-Rebuild/about">
              <p className="flex justify-center text-sm font-bold pb-2 hover:text-[#F48700]">
                ABOUT
              </p>
            </Link>
            <Link to="/MCC-Rebuild/employment">
              <p className="flex justify-center text-sm font-bold pb-2 hover:text-[#F48700]">
                EMPLOYMENT
              </p>
            </Link>
            <Link to="/MCC-Rebuild/contact">
              <p className="flex justify-center text-sm font-bold hover:text-[#F48700]">
                CONTACT
              </p>
            </Link>
          </div>
        </div>

        {/* <div className="lo:w-1/5 flex-col">PRIVACY POLICY</div> */}
      </div>
    </footer>
  );
}
