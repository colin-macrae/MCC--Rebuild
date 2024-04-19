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
    <div className="">
      <div className={sentClassName}>
        Thank you for contacting us. We will be in touch soon!
      </div>
      <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first" />
        <div className="w-full mb-4">
          {" "}
          <input
            className="w-full"
            id="first"
            placeholder="First Name*"
            {...register("first", { required: true })}
          />
          {errors.first && <span className="required-field">This field is required</span>}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="last" />
          <input
            className="w-full"
            id="last"
            placeholder="Last Name*"
            {...register("last", { required: true })}
          />
          {errors.last && <span className="required-field">This field is required</span>}
        </div>

        <label htmlFor="phone" />
        <div className="w-full mb-4">
          {" "}
          <input
            className="w-full"
            id="phone"
            placeholder="Phone*"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span className="required-field">This field is required</span>}
        </div>

        <label htmlFor="email" />
        <div className="w-full mb-4">
          {" "}
          <input
            className="w-full"
            id="email"
            placeholder="Email*"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="required-field">This field is required</span>}
        </div>

        <label htmlFor="message" />
        <div className="w-full mb-4 ">
          {" "}
          <textarea
            className="w-full min-h-[100px] border-slate-300 p-2"
            id="message"
            placeholder="Message*"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="required-field">This field is required</span>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="btn bg-[#F48700] text-white my-2"
            value="SEND MESSAGE"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
