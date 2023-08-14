"use client";

import React, { ReactNode } from "react";

interface Props {
  type: "submit" | "button" | undefined;
  className?: string;
  children: ReactNode;
  variants: "outline" | "primary";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  type,
  className,
  children,
  variants,
  onClick,
}) => {
  const classes = `${className} py-3 px-8 text-sm font-semibold rounded-lg border-[2px] border-darkBlue ${
    variants === "outline"
      ? "bg-white text-darkBlue hover:bg-darkBlue hover:text-white"
      : variants === "primary"
      ? "bg-darkBlue text-white hover:brightness-95"
      : ""
  }`;

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
