"use client";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// import clsx
import clsx from "clsx";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import ContactIconLinks from "./contact-icon-links";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="w-full px-4">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex flex-col items-center justify-center">
          <div>
            {isHome ? (
              <h1
                className={clsx(
                  "text-xl md:text-2xl text-green-500 cursor-default select-none",
                  "text-shadow-black-background-black"
                )}
                aria-current="page"
              >
                Kevin Long
              </h1>
            ) : (
              <Link href="/" className="relative group">
                <h1
                  className={clsx(
                    "text-xl md:text-2xl text-green-500 lg:hover:text-white transition-colors duration-600 ease-in-out",
                    "text-shadow-black-background-black",
                    "group-hover:text-shadow-green-background-black"
                  )}
                >
                  Kevin Long
                </h1>
              </Link>
            )}
          </div>
          <div className="mt-4">
            <ContactIconLinks orientation="horizontal" size={20} />
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <DesktopNav navItems={navListItems} />
        </div>
        <div className="flex lg:hidden items-center">
          <MobileNav navListItems={navListItems} />
        </div>
      </div>
    </header>
  );
}