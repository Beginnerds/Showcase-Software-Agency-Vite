import React from "react";

import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyyrlgzd");
  if (state.succeeded) {
    return (
      <div className="font-body h-full grid place-content-center text-custom1 text-base sm:text-xl gap-4">
        <p className="text-center">We've received your message!</p>
        <p className="text-center">We will get in touch with you soon.</p>
      </div>
    );
  }
  return (
    <form method="POST" className="font-body" onSubmit={handleSubmit}>
      <div className="w-full">
        <label htmlFor="name" className="text-custom1/70">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-2 w-full bg-transparent border-b border-b-custom1/70 text-custom1/70 focus:outline-none pb-2"
          required
          maxLength={30}
        />
      </div>
      <div className="mt-8 w-full">
        <label htmlFor="company" className="text-custom1/70">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="mt-2 w-full bg-transparent border-b border-b-custom1/70 text-custom1/70 focus:outline-none pb-2"
          maxLength={40}
        />
      </div>
      <div className="mt-8 w-full">
        <label htmlFor="email" className="text-custom1/70">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-2 w-full bg-transparent border-b border-b-custom1/70 text-custom1/70 focus:outline-none pb-2"
          required
          maxLength={40}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mt-8 w-full">
        <label htmlFor="message" className="text-custom1/70">
          Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="mt-2 w-full bg-transparent border-b border-b-custom1/70 text-custom1/70 focus:outline-none pb-2"
          required
          rows={10}
          maxLength={500}
        />
      </div>
      <button
        className="mt-8 max-sm:w-full text-custom1 font-medium px-4 py-2 border border-custom1/70 rounded-full hover:bg-custom1 hover:text-black transition-all"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
