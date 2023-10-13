import Image from "next/image";

export const AuthLayout = ({children}) => {
    return (
        <div className="flex h-screen items-center bg-secondary px-40 py-10 gap-20">
            <img src="/auth-img.png" alt="Auth Image" className="w-2/5"/>
            {children}
        </div>
    );
}
