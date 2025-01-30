import React from "react";

const ContactPage = () => {
  return (
    <div className="relative -mt-20 flex min-h-screen items-center justify-center pb-[100px] sm:mt-0 sm:pt-16">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-8 text-lg text-gray-600">
          Please fill out the form below to get in touch with us. We will get
          back to you as soon as possible.
        </p>
        <iframe
          src="/api/proxy" // ✅ Now uses the proxy instead of direct
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
