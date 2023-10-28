"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem, Button, Link, Input, } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { CopyIcon, Share2 } from 'lucide-react'
import { useProject } from '../hooks/useProject'
import { useAtomValue } from 'jotai'
import { activePage, currentProjectId, pageAtom } from '@/jotai/page'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { NavbarLink } from '../components/navbar.link'

export const DashboardHeader = () => {
    const pathname = usePathname()
    const {publishProject} = useProject()
    const projectId = useAtomValue(currentProjectId)
    const active = useAtomValue(activePage)
    const pages = useAtomValue(pageAtom)
    const router = useRouter()

    const copyLink = () => {
        const host = window.location.origin
        navigator.clipboard.writeText(`${host}/form/${projectId}`)
        toast.success("Link copied!")
    }
    
    return (
        <div className="w-full bg-white py-4 px-8 flex justify-between items-center shadow-sm">
            <Link href='/dashboard'>
                <h1 className="text-xl font-bold">Vortexa.</h1>
            </Link>
            {
                pathname.startsWith("/projects") && !pathname.startsWith("/projects/preview") ? (
                    <NavbarLink/> 
                ) : <></>
            }
            <div className="flex gap-4 items-center">
                {
                    pathname.startsWith("/projects") && !pathname.startsWith("/projects/preview") ? (
                        <div className='flex gap-2 items-center'>
                            <Button color='primary' size='sm' variant='ghost' onClick={() => { publishProject(projectId) }}>
                                {
                                    pages[0]?.project.isPublished ? 'Unpublish' : 'Publish'
                                }
                            </Button>
                            <Button as={Link} href={`/projects/preview/${projectId}`} color='primary' size='sm'>Preview</Button>
                            <Dropdown backdrop='blur'>
                                <DropdownTrigger>
                                    <Share2 className='cursor-pointer' />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions" onAction={copyLink}>
                                    <DropdownItem key="new" description="Share your form" startContent={<CopyIcon/>}>
                                        Copy Link
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    ) : <></>
                }
                {
                    pathname.startsWith("/projects/preview") && (
                        <Button color='primary' variant='ghost' size='sm' onClick={() => {router.back()}}>Back to Editor</Button>
                    )
                }
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}