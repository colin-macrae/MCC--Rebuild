import "./Landing.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import house from "/House-Icon.jpg";
import building from "/Building-Icon.jpg";
import tools from "/Tools-Icon.jpg";
import imagetile1 from "/111-Thatcher-Day-1-roback-11.jpg";
import imagetile2 from "/AdobeStock_327396949_Preview@2x.jpg";
import imagetile3 from "/AdobeStock_568417620_Preview@2x.jpg";
import imagetile4 from "/giorgio-trovato-XxAy813D66I-unsplash@2x.jpg";

export default function Landing() {
  return (
    <div className="relative top-0 left-0 w-full h-full bg-fixed bg-cover bg-center bg-[url('/111-Thatcher-Day-1-roback-3.jpg')]">
      <div className="FIRSTSECTION relative bg-white bg-opacity-85 h-[64rem]">
        <div className="relative pt-[22%] pr-[25%] pb-[10%] pl-[10%]">
          <h2 className=" text-[#005067] text-5xl font-bold mb-3">
            Professional Commercial Cleaning
          </h2>
          <p className="mb-[30px] leading-7">
            Mass Commercial Cleaning is a technology-enabled janitorial partner
            serving 170 facilities in over 50 cities across Massachusetts and
            Connecticut. Leading the way for reliable cleaning services, we're
            the corporate cleaning company in the New England area.
          </p>
          <button className="bg-[#F58800] text-white px-[40px] py-[10px] rounded-sm font-bold shadow-md">
            CONTACT US &gt;
          </button>
        </div>
      </div>
      <div className="flex bg-white h-[34rem] justify-evenly content-center pt-24 text-center">
        <div>
          <img src={house}></img>
          <p className="pt-20">Affordable & Consistent</p>
        </div>
        <div>
          <img src={building}></img>
          <p className="pt-20">Employee-Owned</p>
        </div>
        <div>
          <img src={tools}></img>
          <p className="pt-20">Management Oversight</p>
        </div>
      </div>
      <div className="flex h-[48rem] bg-[url(./assets/Carousel-Bg.jpg)] justify-around">
        <div className="self-center"> Image Carousel</div>
        <div className=" self-center flex flex-col content-evenly justify-evenly h-full">
          <div>Environmental Cleaning</div>
          <ul className="list-disc">
            <li>Utilize Environmentally Preferable Cleaning Products</li>
            <li>Equipment & Practices that Prevent Cross-Contamination</li>
            <li>Improve Indoor Air Quality</li>
            <li>
              Ensure a Safe & Clean Work Environment for Employees, Clients, &
              Visitors
            </li>
          </ul>
          <div>Large Scale</div>
          <ul className="list-disc">
            <li>Carpet Cleaning & Extraction</li>
            <li>Restoration & Post-Construction Cleaning</li>
            <li>Window Washing & Maintenance</li>
            <li>Day Porter</li>
            <li>Floor Care</li>
          </ul>
          <div>Industry Certified</div>
          <ul className="list-disc">
            <li>
              Certified in Clean Room & IT Data Storage Room Federal Standards
            </li>
            <li>Members of ISSA</li>
            <li>Utilize the Cleaning Industry Management Standard (CIMS)</li>
            <li>FAC114-Compliant & Insured</li>
          </ul>
        </div>
      </div>
      <div className="MCCADVANTAGE h-[96rem] bg-white flex flex-wrap justify-around">
        <div className="HEADER mt-12 flex flex-wrap justify-center text-center">
          <div className="w-full font-semibold text-4xl text-[#005067]">
            The MCC Advantage
          </div>
          <div className="w-[50rem]">
            Serving clients from small offices to large industrial manufacturers
            and government contractors, MCC is a commercial cleaning contractor
            with trained and managed cleaners offering a higher level of
            affordability, consistency, and reliable service than any other
            cleaning company in Massachusetts. If you’re on a budget, we’ll
            propose a price that works for everyone. Whatever your cleaning
            needs, MCC is the solution.
          </div>
        </div>
        <div className="FIRSTROW w-full flex justify-around">
          <div className="IMAGETILEONE flex flex-col justify-center text-center">
            <img
              className="h-[280px] w-[550px] object-cover"
              src={imagetile1}
            ></img>
            <div>Affordable & Consistent</div>
            <div className="w-[24rem] self-center">
              We leave spaces looking and feeling clean, with attention to
              detail. No corner, surface, or room is left untouched thanks to
              our dedicated team.
            </div>
          </div>
          <div className="IMAGETILETWO  flex flex-col justify-center text-center">
            <img
              className="h-[280px] w-[550px] object-cover"
              src={imagetile2}
            ></img>
            <div>Responsive & Reliable</div>
            <div className="w-[24rem] self-center">
              When it comes to cleaning companies in Massachusetts, you won’t
              find one you can trust more than MCC. We always ensure we’re
              meeting your expectations to create a clean and safe environment.
            </div>
          </div>
        </div>
        <div className="SECONDROW w-full flex justify-around">
          <div className="IMAGETILEONE basis-1/2  flex flex-col items-center text-center">
            <img
              className="h-[280px] w-[550px] object-cover"
              src={imagetile3}
            ></img>
            <div>Employee-Owned</div>
            <div className="w-[32rem] self-center">
              We founded our business in 1989 and became employee-owned and
              operated in 2021, resulting in passionate and dedicated employees
              who each participate in profit distribution. This means you’re
              working with a team committed to providing exceptional services,
              no matter who at MCC you speak to.
            </div>
          </div>
          <div className="IMAGETILETWO basis-1/2 items-center flex flex-col text-center">
            <img
              className="h-[280px] w-[550px] object-cover"
              src={imagetile4}
            ></img>
            <div>Technology-Supported</div>
            <div className="w-[24rem] self-center">
              Our mobile app can be used to communicate with our cleaners in
              their native language. Plus, our digital inspections and cleaning
              checklists ensure we’re always going above and beyond.
            </div>
          </div>
        </div>
      </div>
      <div className="EMPLOYEE QUOTE border-t-[1.15rem] border-[#F58800] h-[34rem] bg-[#005067] flex justify-center content-center text-center">
        <div className="QUOTEDIV text-center mt-44 text-lg font-semibold text-white w-[60rem]">
          I am a Supervisor of Equipment and Facilities for a global medical
          device manufacturer, Karl Storz. Being in business with MCC makes my
          work life less stressful and gives our employees a spotless and
          sanitary facility that we are quite proud of. Mass Commercial Cleaning
          is responsive, reliable, and thorough. With the labor market as tight
          as it is having Bill Hickman and MCC on the team allows Advanced
          Machining the ability to grow the business by allowing us to put more
          time and focus into equipment reliability and building systems.
          #highlyrecommended #teamwork<br></br> – Chris
        </div>
      </div>
      <div className="h-[40rem] bg-white p-20">
        <div className="BORDER border-2 border-[#F58800] p-12 flex flex-col text-center justify-center content-center">
          <div className=" pb-16 text-3xl font-bold">
            Cost Effective Cleaning
          </div>
          <div className="CONTENTDIV flex justify-around content-center">
            <div className="CONTENT1 basis-1/3 flex flex-col text-center content-center justify-center">
              <IoCheckmarkCircleOutline size={60} className="self-center" />
              <div className="CheckmarkHeader text-[#F58800] text-3xl font-bold my-10">
                Supplies & Equipment
              </div>
              <div className="CheckmarkInfo self-center w-[15rem]">
                We invest in the right equipment and supplies to ensure our
                cleaners have the tools to get the job done well.
              </div>
            </div>
            <div className="CONTENT2 basis-1/3 flex flex-col text-center content-center justify-center">
              <IoCheckmarkCircleOutline size={60} className="self-center" />
              <div className="CheckmarkHeader text-[#F58800] text-3xl font-bold my-10">
                Supplies & Equipment
              </div>
              <div className="CheckmarkInfo self-center w-[15rem]">
                We invest in the right equipment and supplies to ensure our
                cleaners have the tools to get the job done well.
              </div>
            </div>
            <div className="CONTENT3 basis-1/3 flex flex-col text-center content-center justify-center">
              <IoCheckmarkCircleOutline size={60} className="self-center" />
              <div className="CheckmarkHeader text-[#F58800] text-3xl font-bold my-10">
                Supplies & Equipment
              </div>
              <div className="CheckmarkInfo self-center w-[15rem]">
                We invest in the right equipment and supplies to ensure our
                cleaners have the tools to get the job done well.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[24rem]">Map/Where to find us</div>
      <div className="h-[30rem] p-24 bg-[url(./assets/Carousel-Bg.jpg)]">
        <div className="bg-white p-10 flex flex-col justify-center content-center text-center">
          <div className="HEADER text-6xl font-semibold text-[#276969]">
            Get In Touch
          </div>
          <div className="mt-8 self-center w-[35rem] text-md">
            When it comes to commercial cleaning, Massachusetts businesses know
            MCC is the one to call. Let’s get started on ensuring your cleaning
            needs are being met.
          </div>
          <button className="mt-8 bg-[#F58800] px-20 py-3 rounded self-center text-white shadow-2xl font-bold text-lg">
            CONTACT US &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
