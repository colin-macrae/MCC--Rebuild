import "./Employment.css";
import EmploymentForm from "./EmploymentForm";

export default function Employment() {
  return (
    <div className="background-image">
      <section className="about-heading-section">
        <div className="about-heading-text">
          <h2>Become An Employee Owner</h2>
          <p>
            What makes MCC stand out from other cleaning companies in
            Massachusetts is that we are employee-owned. When you do business
            with us, you are directly supporting our cleaners and community.
          </p>
          <button className="btn">CONTACT US &rsaquo;</button>
        </div>
      </section>
      <section className="form-container">
        <EmploymentForm />
      </section>
      
    </div>
  );
};
