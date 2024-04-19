import ContactForm from "./ContactForm";
import "./Employment.css";
import "./Contact.css";

export default function Contact(): JSX.Element {
  return (
    <div className="background-image-contact">
      <section className="about-heading-section">
        <div className="about-heading-text">
          <h2>Cleaning Done Right</h2>
          <p>
            Experience why we're the preferred corporate cleaning company in the New
            England area. Contact us today to get a quote on your services and discover
            what makes Mass Commercial Cleaning a trusted janitorial partner.
          </p>
          <button className="btn">CONTACT US &rsaquo;</button>
        </div>
      </section>
      <div className="w-full">
        <section className="form-container contact-bg">
          <h2 className="text-4xl pb-8 font-semibold text-[#005067] ">Contact Us</h2>

          <div className="w-full lg:flex ">
            <div className="lg:w-2/3">
              <ContactForm />
            </div>

            <div className="text-md font-medium ml-10 mt-12 lg:mt-0">
              <p className="">660 Main Street, </p>
              <p className=" pb-4">Sturbridge, MA 01566</p>
              <p className="">140 Pine Street,</p>
              <p className="pb-4">Florence, MA 01062</p>
              <p className="">(413) 568-4696</p>
              <p className="">Info@macommclean.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
