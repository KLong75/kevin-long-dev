// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import DesktopNav from "./desktop-nav";

export default function Header() {
  return (
    <header>
      <div className="hidden lg:flex items-center justify-end p-6">
        <DesktopNav navItems={navListItems} />
      </div>
    </header>
  );
}
