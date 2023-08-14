import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex bg-primaryCream py-6">
      <span className="m-auto text-xs text-primaryBlack/80">
        Copyright &copy; {new Date().getFullYear()} MarriedNow.co All rights
        reserved
      </span>
    </footer>
  );
};

export default Footer;
