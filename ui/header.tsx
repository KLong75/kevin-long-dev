// import from next
import Link from "next/link";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import ContactIconLinks from "./contact-icon-links";

export default function Header() {
  return (
    <header className="w-full px-4">
      <div className="flex items-center justify-between w-full px-4 py-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div>
            <Link href="/">
              <h1 className="text-2xl text-green-500 text-shadow-black-background-black">
                Kevin Long
              </h1>
            </Link>
          </div>
          <div>
            <ContactIconLinks orientation="horizontal" />
          </div>
        </div>

        {/* <div className="hidden lg:flex items-center">
          <ContactIconLinks orientation="horizontal" />
        </div> */}
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
