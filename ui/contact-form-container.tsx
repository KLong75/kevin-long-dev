"use client";
// import from react
import { useState } from "react";
// import components
import ContactForm from "./contact-form";
import ContactIconLinks from "./contact-icon-links";
// import copy
// import { contactPageCopy } from "@/app/lib/copy/contact-page-copy";

export default function ContactFormContainer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="flex flex-col items-center sm:text-lg xl:text-xl 2xl:text-2xl">
      {formSubmitted ? (
        <div className="items-center justify-center ">
          <h2 className="text-4xl text-center">
            Thank you!
          </h2>
          <p className="m-8 ">
            I look forward to connecting with you.
          </p>
          <ContactIconLinks orientation="horizontal" include={["GitHub","LinkedIn"]} size={52}/>
        </div>
      ) : (
        <>
          <h2 className="text-2xl lg:text-4xl font-bold text-center mt-12 lg:mt-16">
            What can I do for you?
          </h2>
          <div className="mt-6 lg:mt-12 items-center justify-center max-w-200">
          </div>
          <ContactForm setFormSubmitted={setFormSubmitted} />
        </>
      )}
    </div>
  );
}
