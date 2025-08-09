// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import DesktopNav from "./desktop-nav";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between w-full px-6 py-4">
        <h1 className="text-xl text-green-500">Kevin Long</h1>
        <div className="hidden lg:flex items-center">
          <DesktopNav navItems={navListItems} />
        </div>
      </div>
    </header>
  );
}
