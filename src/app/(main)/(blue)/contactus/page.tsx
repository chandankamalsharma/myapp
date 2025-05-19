"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import ThankYouModal from "@/components/ThankYouModal";

// @ts-ignore

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

  const [status, setStatus] = useState({
    submitting: false,
    error: null as string | null,
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null });

    // Log the form data being sent
    console.log("Form data being sent:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log the response status
      console.log("Response status:", response.status);

      const data = await response.json();
      // Log the full response data
      console.log("Full response data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      // Log success details if available
      if (data.details) {
        console.log("Submission details:", data.details);
      }

      // Clear form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        city: "",
        state: "",
      });

      // Show thank you modal
      setShowThankYou(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Log detailed error information
      console.error("Error details:", {
        name: error instanceof Error ? error.name : "Unknown",
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      });

      setStatus({
        submitting: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit form. Please try again later.",
      });
    } finally {
      setStatus((prev) => ({ ...prev, submitting: false }));
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[#F0F5FE] px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-12 w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg"
        >
          <h1 className="mb-6 text-center text-3xl font-bold text-[#4DAADC]">
            Contact Us
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Have a question? Fill out the form and we&apos;ll get back to you
            soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {status.error && (
              <div className="rounded-md bg-red-50 p-4 text-red-600">
                {status.error}
              </div>
            )}

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
                  placeholder="Enter your first name"
                  aria-label="First Name"
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
                  placeholder="Enter your last name"
                  aria-label="Last Name"
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
                placeholder="Enter your email address"
                aria-label="Email Address"
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
                placeholder="Enter your phone number"
                aria-label="Phone Number"
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
                  placeholder="Enter your company name"
                  aria-label="Company Name"
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
                  placeholder="Enter your city"
                  aria-label="City"
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
                placeholder="Enter your state"
                aria-label="State"
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                disabled={status.submitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700 ${
                  status.submitting ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {status.submitting ? "Submitting..." : "Submit"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
      />
    </>
  );
};

export default ContactForm;
