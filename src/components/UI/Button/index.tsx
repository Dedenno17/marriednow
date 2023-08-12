import React, { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties | undefined;
  variants: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({
  children,
  className,
  style,
  variants,
  type,
}) => {
  const classes = `${className} py-3 px-8 text-sm font-semibold rounded-lg border-[2px] border-darkBlue ${
    variants === "outline"
      ? "bg-white text-darkBlue hover:bg-darkBlue hover:text-white"
      : "bg-darkBlue text-white hover:brightness-95"
  }`;

  return (
    <button type={type} style={style} className={classes}>
      {children}
    </button>
  );
};

export default Button;
