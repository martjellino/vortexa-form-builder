import { UserButton } from '@clerk/nextjs'

export const DashboardHeader = () => {
    return (
        <div className="w-full bg-white py-4 px-8 flex justify-between shadow-sm">
            <h1 className="text-xl font-bold">Vortexa.</h1>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}