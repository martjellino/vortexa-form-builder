"use client"
import { UserButton } from '@clerk/nextjs'
import { Button } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { Share2 } from 'lucide-react'

export const DashboardHeader = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="w-full bg-white py-4 px-8 flex justify-between shadow-sm">
            <h1 className="text-xl font-bold">Vortexa.</h1>
            <div className="flex gap-4 items-center">
                {
                    pathname.startsWith("/projects") && (
                        <div className='flex gap-2 items-center'>
                            <Button color='primary' size='sm' variant='ghost'>Publish</Button>
                            <Button color='primary' size='sm'>Preview</Button>
                            <Share2 className='cursor-pointer'/>
                        </div>
                    )
                }
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}