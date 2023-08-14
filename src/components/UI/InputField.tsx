"use client";

import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  label?: string;
}

const InputField: React.FC<Props> = ({
  type,
  id,
  name,
  className,
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-bold text-primaryBlack">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full py-4 px-6 border-[1px] border-black/20 rounded-lg text-xs outline-none bg-white"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
