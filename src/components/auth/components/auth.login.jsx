"use client";

import { Input, Button, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";
import { useOAuth } from "../hooks/useOAuth";

export const AuthLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { isLoading, handleChange, handleSubmit } = useLogin()
  const { oauthGoogle } = useOAuth()
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="bg-white rounded-md  h-full lg:w-4/5 flex flex-col justify-center px-16 pt-8">
        <h1 className="font-bold text-xl">Sign In</h1>
        <p className="font-light text-sm text-gray-400">
          Type your detail and start crafting!
        </p>
        <form className="space-y-4 mt-8">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm">
              Email
            </label>
            <Input
              isClearable
              size="md"
              type="email"
              name="email"
              placeholder="johndoe@example.com"
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
              name="password"
              onChange={handleChange}
              placeholder="******"
              isRequired
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
          <div className="flex justify-between">
            <Checkbox>
              <p className="text-sm">Remember Me</p>
            </Checkbox>
            <Link href="" className="text-sm underline">
              Forgot Password
            </Link>
          </div>
          <Button onClick={handleSubmit} isLoading={isLoading} color="primary" className="w-full" size="md">
            Sign In
          </Button>
        </form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-300 text-sm">Or</span>
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
          Don't have an account ?&nbsp;
          <Link href="" className="font-bold underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
