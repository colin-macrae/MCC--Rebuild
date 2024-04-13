import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactForm(): JSX.Element {
  type Inputs = {
    first: string;
    last: string;
    phone: string;
    email: string;
    message: string;
  };

  const [sentClassName, setSentClassName] = useState("email-sent hide");
  const [formClassName, setFormClassName] = useState("form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Send email using emailjs
      await emailjs.send(
        // below is "YOUR_SERVICE_ID"
        "service_wvced9l",
        // below is "YOUR_TEMPLATE_ID"
        "template_o2s41io",
        data,
        // below is "YOUR_USER_ID"/public key
        "Bv07-mPb90fppYjnE"
      );
      setSentClassName("email-sent");
      setFormClassName("form hide");
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div>
      <div className={sentClassName}>
        Thank you for contacting us. We will be in touch soon!
      </div>
      <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first" />
        <div>
          {" "}
          <input
            id="first"
            placeholder="First Name*"
            {...register("first", { required: true })}
          />
          {errors.first && (
            <span className="required-field">This field is required</span>
          )}
          <label htmlFor="last" />
          <input
            id="last"
            placeholder="Last Name*"
            {...register("last", { required: true })}
          />
          {errors.last && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <label htmlFor="phone" />
        <div>
          {" "}
          <input
            id="phone"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
        </div>

        <label htmlFor="email" />
        <div>
          {" "}
          <input
            id="email"
            placeholder="Email*"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <label htmlFor="message" />
        <div>
          {" "}
          <textarea
            id="message"
            placeholder="Message*"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <div>
          <input type="submit" className="submit-btn" value="SEND MESSAGE" />
        </div>
      </form>
    </div>
  );
}