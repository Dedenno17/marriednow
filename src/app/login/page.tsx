"use client";

import React, { useEffect, useState } from "react";

import Button from "@/components/UI/Button";
import InputField from "@/components/UI/InputField";
import Sprinkle from "@/icons/Sprinkle.svg";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { login } from "@/features/auth/actions";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // GLOBAL STATE
  const {
    data: authData,
    isLoading: loadingAuthData,
    isError: errorAuthData,
    errorResponse: errorMessageAuth,
  } = useAppSelector((state) => state.auth);

  // LOCAL STATE
  const [username, setUsername] = useState<string>("");
  const [invalidUsername, setInvalidUsername] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [invalidPassWord, setInvalidPassword] = useState<boolean>(false);
  const [invalidErrorMessage, setInvalidErrorMessage] = useState<null | string>(
    null
  );

  // FUNCTION SUBMIT
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // validation
    const validUsername = username.trim().length !== 0;
    const validPassword = password.trim().length !== 0;

    // check if valid
    if (!validUsername) {
      setInvalidUsername(true);
      setInvalidPassword(false);
      setInvalidErrorMessage("Username is Invalid!");
      return;
    } else if (!validPassword) {
      setInvalidPassword(true);
      setInvalidUsername(false);
      setInvalidErrorMessage("Password is Invalid!");
      return;
    }

    setInvalidPassword(false);
    setInvalidUsername(false);
    setInvalidErrorMessage(null);

    // payload user
    const payload = {
      username,
      password,
    };

    // login
    dispatch(login(payload));
  };

  // REDIRECT TO HOME PAGE IF LOGIN SUCCESS
  useEffect(() => {
    if (authData.accessToken) {
      router.push("/");
    }
  }, [authData, router]);

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
              invalid={invalidUsername}
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              invalid={invalidPassWord}
            />
            <Button type="submit" className="w-full" variants="primary">
              {loadingAuthData ? "Loading ..." : "Login"}
            </Button>
          </form>

          {/* error message */}
          <div className="w-full h-6 flex items-center text-sm text-red-400">
            {invalidErrorMessage || errorMessageAuth?.response?.data?.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
