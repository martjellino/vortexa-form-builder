import Link from "next/link"
import { useAtomValue } from "jotai"
import { currentProjectId } from "@/jotai/page"
import { usePathname } from "next/navigation"

export const NavbarLink = () => {
    const pathname = usePathname()
    const projectId = useAtomValue(currentProjectId)
    return (
        <div className='flex gap-4'>
            <Link href={`/projects/${projectId}`} className={`text-gray-400 hover:border-b hover:border-gray-400 ${pathname.startsWith("/projects") && !pathname.startsWith("/projects/responses") ? 'navlink-active' : ''}`}>
                Editor
            </Link>
            <Link href={`responses/${projectId}`} className={`text-gray-400 hover:border-b hover:border-gray-400 ${pathname.startsWith("/projects/responses") ? 'navlink-active' : ''}`}>Result</Link>
        </div>
    )
}