"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  value: string;
  onChange: (e: { target: HTMLInputElement }) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="overflow-hidden flex items-center rounded-xl border-[1px] border-black/10">
      <input
        type="string"
        value={value}
        onChange={onChange}
        className="py-4 px-6 text-xs border-none outline-none w-[80%] text-primaryBlack"
        placeholder="Search ..."
      />
      <BiSearch className="w-[20%] border-l-[1px] border-l-black/10 text-black/30" />
    </div>
  );
};

export default SearchInput;
