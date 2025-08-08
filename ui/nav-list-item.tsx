"use client";
// import from next
import Link from "next/link";
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
    <li className="flex items-center">
      {htmlElement === "button" ? (
      <Button onClick={onClick}>
        <span>{label}</span>
      </Button>
      ) : htmlElement === "internalLink" ? (
      <Link href={href} className="flex items-center space-x-2">
        <span>{label}</span>
      </Link>
      ) : htmlElement === "externalLink" ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <span>{label}</span>
      </a>
      ) : null}
    </li>
  );
}
