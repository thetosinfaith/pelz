import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactUs.css";

import Chika from "../../assets/profile-picture2.jpg";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mqaavgoo"); // Replace with your Formspree ID
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    marketingConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-image">
          <img src={Chika} alt="Contact Us" />
        </div>

        <div className="contact-form-container">
          <h2>
            Need{" "}
            <span
              className="          hey-brand-name
"
            >
              SEX-PERT
            </span>{" "}
            Advice? Request a Consultation
          </h2>
          {state.succeeded && (
            <p className="success-message">
              Thanks for your message! I’ll get back to you soon.
            </p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                service: formData.service,
                message: formData.message,
                marketingConsent: formData.marketingConsent ? "Yes" : "No",
              });
            }}
            className="contact-form"
          >
            <div className="contact-form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
              />
            </div>

            <div className="contact-form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Service you're interested in</option>
                <option value="Individual Coaching">
                  Individual Sex Coaching
                </option>
                <option value="Community Management">
                  Community Management
                </option>
                <option value="Group Workshops">Group Workshops</option>
                <option value="Educational Programs">
                  Educational Programs{" "}
                </option>

                <option value="Full Social Media Management">
                  Sex Consulting Services{" "}
                </option>
              </select>
              <ValidationError
                prefix="Service"
                field="service"
                errors={state.errors}
              />
            </div>

            <textarea
              name="message"
              className="contact-textarea"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <div className="contact-checkbox-group">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
              />
              <label>I agree to receive marketing emails</label>
            </div>

            <button
              className="contact-submit-button"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
