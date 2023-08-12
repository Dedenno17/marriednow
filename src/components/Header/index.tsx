import React from "react";
import Button from "../UI/Button";
import Link from "next/link";

interface NavLink {
  id: string;
  name: string;
  slug: string;
}

// ARRAY OF NAV LINKS
const navigationLinks: NavLink[] = [
  { id: "nl1", name: "Home", slug: "/" },
  { id: "nl2", name: "About Us", slug: "/about" },
  { id: "nl3", name: "Contact Us", slug: "/contact" },
];

const Header = () => {
  return (
    <header className="fixed w-full">
      <div className="max-w-[1200px] px-10 py-6 mx-auto flex items-center justify-between">
        {/* LOGO & LINKS */}
        <div className="flex items-center gap-14">
          <Link href="/">
            <h1 className="text-2xl font-bold text-darkBlue">MarriedNow</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigationLinks.map((item: NavLink) => (
                <Link key={item.id} href={item.slug}>
                  <li className="text-sm">{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        {/* ACTION BUTTON LOGIN */}
        <Button type="button" variants="outline" className="hidden md:block">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
