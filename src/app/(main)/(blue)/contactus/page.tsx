"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";

 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    state: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA!");
      return;
    }

    // Submit form data
    const response = await fetch(
      "https://go.pardot.com/l/1085292/2025-01-30/8q2gt6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      },
    );

    if (response.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Error submitting form!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F0F5FE] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-12 w-full max-w-2xl rounded-xl p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-[#4DAADC]">
          Contact Us
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Have a question? Fill out the form and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="input-field"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="input-field"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input-field"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="input-field"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                className="input-field"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                className="input-field"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              className="input-field"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          {/* reCAPTCHA Component */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
