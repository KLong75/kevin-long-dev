"use client";
import { track } from "@vercel/analytics";
import Image from "next/image";
import { ChangeEvent, SetStateAction, useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateMessage,
} from "../utils/utils";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [, setEmailErrorMessage] = useState("");
  const [, setPhoneErrorMessage] = useState("");
  const [, setNameErrorMessage] = useState("");
  const [, setMessageErrorMessage] = useState("");
  const [, setDeliveryErrorMessage] = useState("");
  const [, setButtonSubmitted] = useState(false);

  const notifySuccess = () =>
    toast.success("Thank you. I will be in touch!", {
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
      className: "border-2 border-green-500 text-white",
    });

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
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    setState: (value: SetStateAction<string>) => void
  ) => {
    const { name, value } = e.target;
    setState(value);

    if (name === "email" && validateEmail(value)) setEmailErrorMessage("");
    else if (name === "name" && validateName(value)) setNameErrorMessage("");
    else if (name === "phone" && validatePhone(value)) setPhoneErrorMessage("");
    else if (name === "message" && validateMessage(value))
      setMessageErrorMessage("");
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    const isEmailValid = validateEmail(trimmedEmail);
    const isPhoneValid = validatePhone(trimmedPhone);
    const isNameValid = validateName(trimmedName);
    const isMessageValid = validateMessage(message);

    const errors = [];
    if (!isEmailValid) errors.push("email");
    if (!isNameValid) errors.push("name");
    if (!isPhoneValid) errors.push("phone");
    if (!isMessageValid) errors.push("message");

    if (errors.length === 0) {
      // All valid
      const emailTemplateParams = {
        name: trimmedName,
        email: trimmedEmail,
        phone_number: trimmedPhone,
        message: message,
      };
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          emailTemplateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        track("Contact form submission");
        setButtonSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTimeout(() => setButtonSubmitted(false), 5000);
        notifySuccess();
      } catch (error) {
        setDeliveryErrorMessage(
          "There was an error delivering your message. Please email me at kevinlong.dev@gmail.com."
        );
        console.error("Error sending email:", error);
        toast.error(
          <div className="p-2">
            <p>
              There was an error delivering your message. Please send me an email.
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
    <div className="w-full">
      <form
        onSubmit={handleFormSubmit}
        className="expand-on-load px-12 py-6 max-w-200 mx-auto relative ">
        <div className="flex flex-col justify-start">
          <label htmlFor="lastName" className="m-2 text-left">
            Name*<span className="text-xs"> (required)</span>
          </label>
          <input
            required
            autoComplete="family-name"
            onChange={(e) => handleChange(e, setName)}
            value={name}
            type="text"
            name="name"
            id="name"
            className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black placeholder-neutral-400 rounded-2xl bg-neutral-200"
          />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="phone" className="m-2 text-left">
            Phone*<span className="text-xs"> (required)</span>
          </label>
          <input
            required
            autoComplete="tel"
            onChange={(e) => handleChange(e, setPhone)}
            value={phone}
            type="tel"
            name="phone"
            id="phone"
            className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black placeholder-neutral-400 rounded-2xl bg-neutral-200"
          />
        </div>
        <div className="flex flex-col justify-start">
          <label htmlFor="email" className="m-2 text-left">
            Email*<span className="text-xs"> (required)</span>
          </label>
          <input
            autoComplete="email"
            onChange={(e) => handleChange(e, setEmail)}
            value={email}
            required
            type="email"
            name="email"
            id="email"
            className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black placeholder-neutral-400 rounded-2xl bg-neutral-200"
          />
        </div>
        <div className="flex flex-col justify-start">
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
            className="shadow-2xl shadow-green-500/50 border-2 border-neutral-600 p-2 w-full text-black  rounded-2xl h-80 w-60 resize-none w-full bg-neutral-200"
          />
        </div>
        <div className="flex justify-center items-center p-6 mt-4">
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="cursor-pointer border border-2 border-green-500 hover:border-neutral-600 rounded-2xl py-2 px-6 bg-neutral-800 hover:bg-green-500 text-green-500 hover:text-neutral-600 transition-colors duration-600 ease-in-out">
            <span className="font-semibold tracking-wide">Send</span>
          </button>
        </div>
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
