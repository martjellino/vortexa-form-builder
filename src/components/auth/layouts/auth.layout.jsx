import Image from "next/image";
import { Toaster } from "react-hot-toast";

export const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center bg-secondary xl:px-40 lg:px-20 px-10 py-10 gap-20">
      <img src="/auth-img.png" alt="Auth Image" className="w-4/12 lg:block hidden" />
      {children}
      <Toaster/>
    </div>
  );
};
