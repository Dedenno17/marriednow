"use client";

import React, { useState } from "react";
import ClickOutside from "../UI/ClickOutside";
import { GoTriangleDown } from "react-icons/go";
import { RiLogoutBoxRFill } from "react-icons/ri";
import getInitialName from "@/helpers/getInitialName";

interface Props {
  name: string;
  email: string;
}

const UserComponent: React.FC<Props> = ({ name, email }) => {
  // LOCAL STATE
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* INITIAL NAME */}
      <div
        className="flex bg-white border-[1px] border-black/10 rounded-lg p-2 items-center gap-2 text-sm cursor-pointer"
        onClick={() => setShowDropdown(true)}
      >
        <div className="py-1 px-1 rounded-full bg-darkBlue flex items-center justify-center font-bold text-white">
          {getInitialName(name)}
        </div>
        <span className="text-primaryBlack text-xs">{name}</span>
        <GoTriangleDown className="text-primaryBlack" />
      </div>

      {/* DROPDOWN */}
      {showDropdown && (
        <ClickOutside onClickOutside={() => setShowDropdown(false)}>
          <div className="absolute w-60 top-[60px] right-0 bg-white border-[1px] border-black/10 shadow-lg rounded-xl overflow-hidden">
            {/* name */}
            <div className="w-full py-4 flex flex-col gap-2 items-center border-b-[1px] border-b-black/10 text-primaryBlack">
              <h3 className="text-sm font-semibold">{name}</h3>
              <span className="text-xs">{email}</span>
            </div>

            {/* feature */}
            <ul className="w-full flex flex-col text-sm gap-4 text-primaryBlack">
              <li className="cursor-pointer w-full hover:bg-black/5 py-4 px-6 flex items-center gap-2">
                <RiLogoutBoxRFill className="text-lg" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </ClickOutside>
      )}
    </div>
  );
};

export default UserComponent;
