"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../UI/Button";

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
  const router = useRouter();

  return (
    <header className="fixed z-50 w-full bg-white">
      <div className="max-w-[1200px] px-10 py-6 mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-darkBlue">MarriedNow</h1>
        </Link>

        {/* ACTION BUTTON LOGIN */}
        <div className="flex items-center gap-14">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigationLinks.map((item: NavLink) => (
                <Link key={item.id} href={item.slug}>
                  <li className="text-sm text-primaryBlack">{item.name}</li>
                </Link>
              ))}
            </ul>
          </nav>
          <Button
            type="button"
            variants="outline"
            onClick={() => router.push("login")}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
