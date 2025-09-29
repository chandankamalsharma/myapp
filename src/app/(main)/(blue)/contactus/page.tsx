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
          soon.</p> <p className="mb-6 text-center text-2xl font-bold text-[#0000EE]"> <a href="https://calendly.com/ichras_com/exploratory-meeting" target="_blank">Click here to book a meeting</a>
        </p>


  
      </motion.div>
    </div>
  );
};

export default ContactForm;
