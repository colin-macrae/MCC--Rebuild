import ContactForm from "./ContactForm";
import "./Employment.css";
import "./Contact.css";

export default function Contact(): JSX.Element {
  return (
    <div className="background-image">
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
      <section className="form-container bg-[url('../assets/Carousel-Bg.jpg')]">
        <h2 className="text-5xl pb-8 pl-5 font-medium text-[#005067] ">Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}
