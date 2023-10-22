import { Toaster } from "react-hot-toast"
import { DashboardHeader } from "./dashboard.header"

export const DashboardLayout = ({children}) => {
    return (
        <div className="h-full min-h-screen bg-secondary">
            <DashboardHeader/>
            {children}
            <Toaster/>
        </div>
    )
}