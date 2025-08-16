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
          <ContactIconLinks orientation="horizontal"/>
        </div>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-center mb-12">
            Let&apos;s Talk!
          </h2>
          <div className=" items-center justify-center max-w-200">
            {/* <p className="px-8 py-4">{contactPageCopy.text_block_one}</p> */}
            {/* <p className=" px-8 p-4">{contactPageCopy.text_block_two}</p> */}
          </div>
          <ContactForm setFormSubmitted={setFormSubmitted} />
        </>
      )}
    </div>
  );
}
