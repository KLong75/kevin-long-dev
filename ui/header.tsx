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
    <header className="w-full px-8 pt-8 mx-auto max-w-[98vw]">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <div>
            {isHome ? (
              <div className="text-green-500 cursor-default select-none text-shadow-black-background-black">
                <h1
                  className="text-xl md:text-2xl "
                  aria-current="page">
                  Kevin Long
                </h1>
                <h2 className="text-xs md:text-sm">
                  Full Stack Developer
                </h2>
              </div>
            ) : (
              <Link href="/" className="relative group block">
                <div
                 className={clsx(
                      "text-green-500 lg:hover:text-white transition-colors duration-600 ease-in-out",
                      "text-shadow-black-background-black",
                      "group-hover:text-shadow-green-background-black"
                    )}
                >
                  <h1
                   className="text-xl md:text-2xl"
                  >
                    Kevin Long
                  </h1>
                  <h2 className="text-xs md:text-sm">
                    Full Stack Developer
                  </h2>
                </div>
              </Link>
            )}
          </div>

          <div className="mt-2 hidden md:block">
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
