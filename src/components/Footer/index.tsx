"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer
      className={`w-full bg-primaryCream py-6 ${
        pathName !== "/login" ? "flex" : "hidden"
      }`}
    >
      <span className="m-auto text-xs text-primaryBlack/80">
        Copyright &copy; {new Date().getFullYear()} MarriedNow.co All rights
        reserved
      </span>
    </footer>
  );
};

export default Footer;
