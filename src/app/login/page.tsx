"use client";

import React, { useState } from "react";

import Button from "@/components/UI/Button";
import InputField from "@/components/UI/InputField";
import Sprinkle from "@/icons/Sprinkle.svg";

const Login = () => {
  // LOCAL STATE
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // FUNCTION SUBMIT
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-screen bg-red-300 flex items-stretch">
      <div className="w-[20%] bg-darkBlue relative overflow-hidden">
        <Sprinkle className="text-[10rem] absolute top-0 -left-10 brightness-50" />
        <Sprinkle className="text-[20rem] absolute bottom-0 -right-20 brightness-50" />
      </div>

      {/* FORM */}
      <div className="bg-white w-[80%] flex">
        <div className="m-auto p-8 max-w-[480px] w-[480px]">
          <div className="w-full py-6 text-3xl text-primaryBlack font-bold">
            Login
          </div>
          <form
            className="w-full flex flex-col gap-8 py-4"
            onSubmit={submitHandler}
          >
            <InputField
              label="Username"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full" variants="primary">
              Login
            </Button>
          </form>
          <div className="w-full h-6 flex items-center text-sm text-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
