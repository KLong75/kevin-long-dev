"use client";
// import from next
import Link from "next/link";
// import clsx
import { clsx } from "clsx";
// import from headlessui
import { Button } from "@headlessui/react";

export default function NavListItem({
  label,
  href,
  htmlElement,
  onClick,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
}) {
  return (
    <li className="font-semibold px-6 text-green-500 tracking-widest">
      {label === "Contact" ? (
        <Link
          href={href}
          className={clsx(
            "cursor-pointer border border-2 border-green-500 hover:border-neutral-800 rounded-2xl py-2 px-6 bg-neutral-800 hover:bg-green-500 text-green-500 hover:text-neutral-800 transition-colors duration-600 ease-in-out",
            "hover:no-text-shadow-black-background-black" // custom utility, see below
          )}>
          <span onClick={onClick} className="contact-btn-label">
            {label}
          </span>
        </Link>
      ) : htmlElement === "button" ? (
        <Button onClick={onClick}>
          <span>{label}</span>
        </Button>
      ) : htmlElement === "internalLink" ? (
        <Link
          href={href}
          className="flex items-center space-x-2 relative group ">
          <span
            className="nav-link-label lg:hover:text-neutral-400 transition-colors duration-600 ease-in-out"
            onClick={onClick}>
            {label}
          </span>
          <span className="absolute bottom-[-.25rem] left-0 w-0 h-[2px] bg-green-500 transition-all ease-in-out duration-600 group-hover:w-[calc(100%-0.45rem)]"></span>
        </Link>
      ) : htmlElement === "externalLink" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2">
          <span>{label}</span>
        </a>
      ) : null}
    </li>
  );
}
