"use client";

import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";
import { useOAuth } from "../hooks/useOAuth";

export const AuthRegister = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { handleChange, submitData, isLoading } = useRegister()
  const { oauthGoogle } = useOAuth()

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white rounded-md h-auto lg:w-4/5 flex flex-col justify-center px-16 pt-8">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <p className="font-light text-sm text-gray-400">
          Welcome, join with us and get better data with forms and surveys.
        </p>
        <form className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <Input
              isClearable
              size="md"
              type="text"
              name="username"
              placeholder="John Doe"
              isRequired
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm">
              Email
            </label>
            <Input
              isClearable
              size="md"
              type="text"
              name="email"
              placeholder="johndoe@sample.com"
              isRequired
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <Input
              size="md"
              placeholder="******"
              isRequired
              name="password"
              onChange={handleChange}
              type={isVisible ? "text" : "password"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm">
              Confirm Password
            </label>
            <Input
              size="md"
              placeholder="******"
              isRequired
              name="confirm_password"
              type={isVisible ? "text" : "password"}
              onChange={handleChange}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </div>
          <Button isLoading={isLoading} onClick={submitData} color="primary" className="w-full" size="md">
            Sign Up
          </Button>
        </form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4  text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          onClick={oauthGoogle}
          className="border rounded-md hover:bg-gray-100 duration-100 transition-colors border-gray-200 p-1 flex justify-center items-center gap-2"
        >
          <img src="/google.svg" alt="" className="w-8 h-8" />
          <p className="text-base">Continue with Google</p>
        </button>
        <p className="text-sm text-center p-6">
          Already have an account ?&nbsp;
          <Link href="/login" className="font-bold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
