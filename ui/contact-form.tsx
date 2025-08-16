"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from clsx
import { clsx } from "clsx";
// import from toastify
import { ToastContainer, Zoom, toast } from "react-toastify";
// import components
import ContactFormInput from "./contact-form-input";
// import from utils
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../utils/utils";
// import from emailjs
import emailjs from "@emailjs/browser";

export default function ContactForm({
  setFormSubmitted,
}: {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [, setEmailErrorMessage] = useState("");
  const [, setPhoneErrorMessage] = useState("");
  const [, setFirstNameErrorMessage] = useState("");
  const [, setLastNameErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [, setDeliveryErrorMessage] = useState("");
  const [buttonSubmitted, setButtonSubmitted] = useState(false);

  const showErrorToast = (msg: string) => {
    toast.error(msg, {
      transition: Zoom,
      position: "top-center",
      // icon: (
      //   <Image
      //     src="/logos/mark-only.png"
      //     alt="Shift Auto Solutions Logo"
      //     width={68}
      //     height={49}
      //   />
      // ),
      closeOnClick: true,
      pauseOnHover: true,
      className: "border-2 border-neutral-400 text-white",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = e.target;
    setState(value);
    // Check if the email is being updated and is valid
    if (name === "email" && validateEmail(value)) {
      setEmailErrorMessage("");
    }
    if (name === "first_name" && validateName(value)) {
      setFirstNameErrorMessage("");
    }
    if (name === "last_name" && validateName(value)) {
      setLastNameErrorMessage("");
    }
    if (name === "phone" && validatePhone(value)) {
      setPhoneErrorMessage("");
    }
    if (name === "message" && validateMessage(value)) {
      setMessageErrorMessage("");
    }
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // trim form data
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    // validation  for inputs, handle errors accordingly
    const isEmailValid = validateEmail(trimmedEmail);
    const isPhoneValid = validatePhone(trimmedPhone);
    const isFirstNameValid = validateName(trimmedFirstName);
    const isLastNameValid = validateName(trimmedLastName);
    const isMessageValid = validateMessage(message);

    const errors = [];
    if (!isEmailValid) errors.push("email");
    if (!isFirstNameValid) errors.push("first_name");
    if (!isLastNameValid) errors.push("last_name");
    if (!isPhoneValid) errors.push("phone");
    if (!isMessageValid) errors.push("message");

    if (errors.length === 0) {
      // All valid
      const emailTemplateParams = {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        email: trimmedEmail,
        phone_number: trimmedPhone,
        message: message,
      };

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          emailTemplateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        // .then((result) => {
        track("Contact form submission");
        setButtonSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFormSubmitted(true);
        // Reset the button's submitted state after 5 seconds
        setTimeout(() => {
          setButtonSubmitted(false);
        }, 5000);
        // });
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email me at kevinlong.dev@gmail.com. My apologies for the inconvenience."
        );
        toast.error(
          <div className="p-2">
            <p>
              There was an error delivering your message. Please send me an
              email.
            </p>
            <a
              href="mailto:kevinlong.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500 hover:text-blue-700">
              kevinlong.dev@gmail.com
            </a>
          </div>,
          {
            transition: Zoom,
            position: "top-center",
            // icon: (
            //   <img src="/logos/mark-only.png" alt="Shift Auto Solutions Logo" />
            // ),
            closeOnClick: true,
            pauseOnHover: true,
            className: "border-2 border-neutral-400 text-white",
          }
        );
      }
    } else if (errors.length === 1) {
      // One field is invalid
      if (errors[0] === "email")
        showErrorToast("Please enter a valid email address.");
      if (errors[0] === "name") showErrorToast("Please enter a name.");
      if (errors[0] === "phone")
        showErrorToast("Please enter a valid phone number.");
      if (errors[0] === "message") showErrorToast("Please enter a message.");
    } else {
      // Multiple fields invalid
      toast.error("Please fill in all required fields.", {
        transition: Zoom,
        position: "top-center",
        // icon: (
        //   <Image
        //     src="/logos/mark-only.png"
        //     alt="Shift Auto Solutions Logo"
        //     width={68}
        //     height={49}
        //   />
        // ),
        closeOnClick: true,
        pauseOnHover: true,
        className: "border-2 border-neutral-400 text-white",
      });
    }
  };

  return (
    <div className="w-full text-base">
      <form
        onSubmit={handleFormSubmit}
        className="px-12 py-6 max-w-200 mx-auto relative text-green-500">
        <ContactFormInput
          inputType="input"
          label="First Name"
          name="first_name"
          type="text"
          placeholder=""
          value={firstName}
          required={true}
          autoComplete="given-name"
          // errorMessage={firstNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setFirstName}
        />
        <ContactFormInput
          inputType="input"
          label="Last Name"
          name="last_name"
          type="text"
          placeholder=""
          value={lastName}
          required={true}
          autoComplete="family-name"
          // errorMessage={lastNameErrorMessage}
          handleChange={handleChange}
          setStateVariable={setLastName}
        />
        <ContactFormInput
          inputType="input"
          label="Phone"
          name="phone"
          type="tel"
          placeholder=""
          value={phone}
          required={false}
          autoComplete="tel"
          // errorMessage={phoneErrorMessage}
          handleChange={handleChange}
          setStateVariable={setPhone}
        />
        <ContactFormInput
          inputType="input"
          label="Email"
          name="email"
          type="text"
          placeholder=""
          value={email}
          required={true}
          autoComplete="email"
          // errorMessage={emailErrorMessage}
          handleChange={handleChange}
          setStateVariable={setEmail}
        />
        <ContactFormInput
          inputType="textarea"
          label="Message"
          name="message"
          type="text"
          placeholder=""
          value={message}
          required={true}
          autoComplete="off"
          // errorMessage={messageErrorMessage}
          handleChange={handleChange}
          setStateVariable={setMessage}
        />
        {/* <div className="flex flex-col justify-start text-base">
          <label htmlFor="message" className="m-2 text-left">
            Message*<span className="text-xs"> (required)</span>
          </label>
          <textarea
            autoComplete="off"
            maxLength={1000}
            onChange={(e) => handleChange(e, setMessage)}
            value={message}
            required
            name="message"
            id="message"
            className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black rounded-2xl h-80 w-60 resize-none bg-neutral-300"
          />
          <p className="p-2">{messageErrorMessage}</p>
        </div> */}
        <div className="flex justify-center items-center p-6 mt-4">
          <button
            style={{ textShadow: "2px 2px 0 black" }}
            onClick={handleFormSubmit}
            type="submit"
            className="border border-2 border-green-500 hover:border-neutral-800 rounded-2xl py-1 px-6 bg-neutral-800 hover:bg-green-500 text-green-500 hover:text-white transition-colors duration-600 ease-in-out"
          >
            <span className="font-semibold tracking-widest">
              {buttonSubmitted ? "Message Sent!" : "Send"}
            </span>
          </button>
        </div>
        {/* <div className="flex flex-col py-2">
          <label htmlFor="message" className="px-4 font-bold">
            {`Brief Project Description*`.toUpperCase()}
            <span className="text-xs"> (required)</span>
          </label>
          <textarea
            autoComplete="off"
            maxLength={1500}
            placeholder=""
            onChange={(e) => handleChange(e, setMessage)}
            value={message}
            required={true}
            name="message"
            id="message"
            className="resize-none h-36 rounded-3xl px-4 opacity-75"
          />
          <p className="">{messageErrorMessage}</p>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="tracking-wider border border-2 text-white rounded-full px-4 py-1 mt-4 hover:text-black hover:bg-white"
            onClick={handleFormSubmit}
            // isSubmitted={buttonSubmitted}
          >
            {buttonSubmitted ? "Message Sent!" : "SUBMIT"}
          </button>
        </div> */}
      </form>
      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </div>
  );
}
