"use client"
import { UserButton } from '@clerk/nextjs'
import { Button, Link } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { Share2 } from 'lucide-react'
import { useProject } from '../hooks/useProject'
import { useAtomValue } from 'jotai'
import { activePage, currentProjectId, pageAtom } from '@/jotai/page'
import { useRouter } from 'next/navigation'

export const DashboardHeader = () => {
    const pathname = usePathname()
    const {publishProject} = useProject()
    const projectId = useAtomValue(currentProjectId)
    const active = useAtomValue(activePage)
    const pages = useAtomValue(pageAtom)
    const router = useRouter()
    
    return (
        <div className="w-full bg-white py-4 px-8 flex justify-between shadow-sm">
            <h1 className="text-xl font-bold">Vortexa.</h1>
            <div className="flex gap-4 items-center">
                {
                    pathname.startsWith("/projects") && !pathname.startsWith("/projects/preview") ? (
                        <div className='flex gap-2 items-center'>
                            <Button color='primary' size='sm' variant='ghost' onClick={() => { publishProject(projectId) }}>
                                {
                                    pages[0]?.project.isPublished ? 'Unpublish' : 'Publish'
                                }
                            </Button>
                            <Button as={Link} href={`preview/${projectId}`} color='primary' size='sm'>Preview</Button>
                            <Share2 className='cursor-pointer'/>
                        </div>
                    ) : ""
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