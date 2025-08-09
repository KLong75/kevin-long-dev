"use client";
// import navList items
import { navListItems } from "@/lib/nav-list-items";
// import components
import NavListItem from "./nav-list-item";

export default function DesktopNav({
  navItems,
}: {
  navItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}) {
  return (
    <nav className="lg:flex flex-col">
      <ul className="flex gap-2 xl:gap-4 2xl:gap-6 items-center flex-col sm:flex-row whitespace-nowrap">
        {navItems.map((item) => (
          <NavListItem 
            key={item.label}
            label={item.label}
            href={item.href}
            htmlElement={item.htmlElement}
            
          />
        ))}
      </ul>
    </nav>
  );
}
