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
        <section className="form-container contact-bg p-auto m-auto">
          <h2 className="text-5xl pb-8 font-medium text-[#005067] ">Contact Us</h2>

          <div className="w-full lg:flex ">
            <div className="lg:w-2/3">
              <ContactForm />
            </div>

            <div className="text-md font-medium lg:ml-12 ml-6 mt-12 lg:mt-1">
              <p className="pb-1">140 Pine Street,</p>
              <p className="pb-6">Florence, MA 01062</p>
              <p className="pb-1">660 Main Street, </p>
              <p className=" pb-6">Sturbridge, MA 01566</p>
              <p className="pb-1">(413) 568-4696</p>
              <p className="">Info@macommercialclean.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
