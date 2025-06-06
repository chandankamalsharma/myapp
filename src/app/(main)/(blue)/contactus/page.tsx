"use client";

import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F0F5FE] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-12 w-full max-w-4xl rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-[#4DAADC]">
          Contact Us
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Have a question? Fill out the form and we&apos;ll get back to you
          soon.
        </p>

        <iframe
          src="https://go.ichras.com/l/1085292/2025-01-30/8q2dgs"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowTransparency={true}
          title="Contact Form"
        />
      </motion.div>
    </div>
  );
};

export default ContactForm;
