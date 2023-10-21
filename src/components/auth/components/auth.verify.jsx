"use client"
import VerificationInput from "react-verification-input";
import { Button } from "@nextui-org/react";
import { useVerify } from "../hooks/useVerify";

export const AuthVerify = () => {
    const { handleChange, isLoading, verifyUser } = useVerify()
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="bg-white rounded-md h-full lg:w-4/5 flex flex-col justify-center px-16 pt-8">
                <h1 className="font-bold text-xl">User Verification</h1>
                <p className="font-light text-sm text-gray-400">
                    We've send you code to your email address. Please type the code in form below to verify and activate your account.
                </p>
                <div className="mt-8">
                    <VerificationInput onChange={handleChange} classNames={{ character: "border border-none bg-secondary rounded-md" }}/>
                </div>
                <Button isLoading={isLoading} onClick={verifyUser} color="primary" className="w-full mt-8" size="md">
                    Verify
                </Button>
            </div>
        </div>
    )
}