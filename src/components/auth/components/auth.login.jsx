"use client"

import { Input, Button, Checkbox } from "@nextui-org/react";
import Link from "next/link";

export const AuthLogin = () => {
    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className="bg-white rounded-md  h-full lg:w-4/5 flex flex-col justify-center px-8">
                <h1 className='font-bold text-xl'>Sign In</h1>
                <p className='font-light text-sm text-gray-400'>Type your detail and start crafting!</p>
                <form className='space-y-4 mt-8'>
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm">Username or Email</label>
                        <Input size="md" type="text" placeholder="johndoe@example.com" isRequired/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <Input size="md" type="password" placeholder="******" isRequired />
                    </div>
                    <div className="flex justify-between">
                        <Checkbox>
                            <p className="text-sm">Remember Me</p>
                        </Checkbox>
                        <Link href="" className="text-sm underline">Forgot Password</Link>
                    </div>
                    <Button color="primary" className="w-full" size="md">
                        Sign In 
                    </Button>
                </form>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-300 text-sm">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <Link href="" className="border rounded-md hover:bg-gray-100 duration-100 transition-colors border-gray-200 p-1 flex justify-center items-center gap-2">
                    <img src="/google.svg" alt="" className="w-8 h-8"/>
                    <p className="text-base">Continue with google</p>
                </Link>
            </div>
        </div>
    );
}
