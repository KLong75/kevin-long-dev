"use client";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
//import icons
import { FiMenu } from "react-icons/fi";
// import from headless ui
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import components
import NavListItem from "./nav-list-item";

interface MobileMenuProps {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}

export default function MobileNav({ navListItems }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-gray-200 rounded-lg"
        value={isMenuOpen ? "Close menu" : "Open menu"}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        <FiMenu size={20} className="text-black" />
      </button>

      {/* Dialog */}
      <Dialog
        open={isMenuOpen}
        as="div"
        className="relative z-50"
        onClose={toggleMenu}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Dialog Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-[80vw] border-2 border-red-500 bg-gray-200 text-black flex flex-col justify-center rounded-lg">
            {/* Dialog Title */}
            <DialogTitle as="h2" className="sr-only">
              Menu
            </DialogTitle>

            {/* Logo */}
            <div
              className="flex items-center justify-center mt-6"
              onClick={toggleMenu}>
              <Link href="/">
                {/* <ShiftAutoLogoTransparentBGBlackText
                  priority={true}
                  width={178.125}
                  height={43.75}
                /> */}
              </Link>
            </div>

            {/* Navigation */}
            <nav className="my-4">
              <ul className="flex flex-col gap-8 font-semibold text-black">
                {navListItems.map((item) => (
                  <NavListItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    htmlElement={item.htmlElement}
                    onClick={toggleMenu}
                  />
                ))}
              </ul>
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
