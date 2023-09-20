"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../UI/Button";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { userProfile } from "@/features/user/actions";
import UserComponent from "./UserComponent";

interface NavLink {
  id: string;
  name: string;
  slug: string;
}

// ARRAY OF NAV LINKS
const navigationLinks: NavLink[] = [
  { id: "nl1", name: "Home", slug: "/" },
  { id: "nl3", name: "Themes", slug: "/themes" },
  { id: "nl2", name: "About Us", slug: "/about" },
];

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathName = usePathname();

  // GLOBAL STATE
  const { data: authData } = useAppSelector((state) => state.auth);
  const { data: userData } = useAppSelector((state) => state.user);

  // GET PROFILE USER IF ACCESS TOKEN NOT NULL
  useEffect(() => {
    if (authData.accessToken) {
      dispatch(userProfile(authData.accessToken));
    }
  }, [authData, dispatch]);

  return (
    <header
      className={`z-50 w-full bg-white ${
        pathName !== "/login" && pathName !== "/example" ? "fixed" : "hidden"
      }`}
    >
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

          {!userData ? (
            <Button
              type="button"
              variants="outline"
              onClick={() => router.push("login")}
            >
              Login
            </Button>
          ) : (
            <UserComponent name={userData.username} email={userData.email} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
