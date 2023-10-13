import Image from "next/image";

export const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center bg-secondary px-40 py-10 gap-20">
      <img src="/auth-img.png" alt="Auth Image" className="md:w-2/5" />
      {children}
    </div>
  );
};
