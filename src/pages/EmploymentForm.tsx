import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import "./Employment.css";

export default function EmploymentForm(): JSX.Element {
  type Inputs = {
    first: string;
    last: string;
    addressOne: string;
    addressTwo: string;
    city: string;
    state: string;
    zipCode: number;
    phone: string;
    email: string;
    emailConfirm: string;
    workAuth: string;
    areaPreferred: string;
    daysAvailable: string;
    timeAvailable: string;
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
        Application sent successfully. We'll contact you if you are a good
        potential match.
      </div>

      <p className="instructions">
        Submit the form below to apply to MCC as a custodial employee-owner.
      </p>

      <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
        <div className="input-category">
          <div>
            <label>
              <strong>
                Name <span className="asterisk">*</span>
              </strong>
            </label>
          </div>
          <div className="full-width-inputs">
            {" "}
            <input
              className="input-left"
              placeholder="First"
              {...register("first", { required: true })}
            />
            <input
              className="input-right"
              placeholder="Last"
              {...register("last", { required: true })}
            />
          </div>
          <div className="errors">
            <div className="error">
              {errors.first && (
                <span className="required-field">This field is required</span>
              )}
            </div>
            <div className="error error-right">
              {errors.last && (
                <span className="required-field">This field is required</span>
              )}
            </div>
          </div>
        </div>

        <div className="input-category">
          <div>
            {" "}
            <label>
              <strong>Address</strong>
            </label>
          </div>
          <div>
            {" "}
            <input className="full-width" {...register("city")} />
          </div>
          <div className="sub-label">
            <span>Address 1</span>
          </div>
          <div>
            {" "}
            <input className="full-width" {...register("addressTwo")} />
          </div>
          <div className="sub-label">
            <span>Address 2</span>
          </div>

          <div className="full-width-inputs">
            {" "}
            <input className="input-left" {...register("city")} />
            <select
              className="input-right"
              defaultValue="MA"
              {...register("state")}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div className="full-width-inputs">
            <div className="input-left sub-label">
              <span>City</span>
            </div>
            <div className="input-right sub-label">
              <span>State</span>
            </div>
          </div>

          <div>
            {" "}
            <input className="input-left" {...register("zipCode")} />
          </div>
          <div className="sub-label">
            <span>Zip Code</span>
          </div>
        </div>

        <div className="input-category">
          <label>
            <strong>
              Phone <span className="asterisk">*</span>
            </strong>
          </label>
          <div>
            {" "}
            <input
              className="width-sixty"
              {...register("phone", { required: true })}
            />
          </div>
          <div>
            <span>Phone</span>
          </div>
          <div>
            {errors.phone && (
              <span className="required-field">This field is required</span>
            )}
          </div>
        </div>

        <div className="input-category">
          <label>
            <strong>
              Email <span className="asterisk">*</span>
            </strong>
          </label>
          <div className="full-width-inputs">
            {" "}
            <input
              className="input-left"
              type="email"
              {...register("email", { required: true })}
            />{" "}
            <input
              className="input-right"
              type="email"
              {...register("emailConfirm", { required: true })}
            />
          </div>
          <div className="errors">
            <div className="error">
              {errors.email && (
                <span className="required-field">This field is required</span>
              )}
            </div>
            <div className="error error-right">
              {errors.emailConfirm && (
                <span className="required-field">This field is required</span>
              )}
            </div>
          </div>
          <div className="errors">
            <div className="error">
              <span>Email</span>
            </div>
            <div className="error error-right">
              <span>Confirm Email</span>
            </div>
          </div>
        </div>

        <div className="input-category">
          <label>
            <strong>
              Are you authorized to work in the US?{" "}
              <span className="asterisk">*</span>
            </strong>
          </label>
          <div>
            {" "}
            <select
              className="width-sixty"
              {...register("workAuth", { required: true })}
            >
              <option value="">Please select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            {errors.workAuth && (
              <span className="required-field">This field is required</span>
            )}
          </div>
        </div>

        <div className="input-category">
          <label>
            <strong>
              Towns/Area preferred for work <span className="asterisk">*</span>
            </strong>
          </label>
          <div>
            {" "}
            <input
              className="width-sixty"
              {...register("areaPreferred", { required: true })}
            />
          </div>
          <div>
            {errors.areaPreferred && (
              <span className="required-field">This field is required</span>
            )}
          </div>
        </div>

        <div className="input-category">
          <label>
            <strong>Days of the week available</strong>
          </label>
          <div>
            {" "}
            <input className="width-sixty" {...register("daysAvailable")} />
          </div>
        </div>

        <div className="input-category">
          <label>
            <strong>Time of day available</strong>
          </label>
          <div>
            {" "}
            <input className="width-sixty" {...register("timeAvailable")} />
          </div>
        </div>

        <div>
          <button type="submit" className="input-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
