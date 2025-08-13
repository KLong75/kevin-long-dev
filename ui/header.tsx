// import from next
import Link from "next/link";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="w-full p-4">
      <div className="flex items-center justify-between w-full px-4 py-4">
        <Link href="/">
          <h1 className="text-2xl text-green-500 text-shadow-black-background-black">Kevin Long</h1>
        </Link>
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
