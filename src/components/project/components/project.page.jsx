"use client"
import { pageAtom, activePage } from "@/jotai/page"
import { useAtomValue, useAtom } from "jotai"

export const ProjectPage = () => {
    const pages = useAtomValue(pageAtom)
    const [active,setActive] = useAtom(activePage)



    return (
        <div className="h-[calc(100vh-64px)] bg-white w-96 border-t-1 border-gray-200 px-4 py-4 overflow-y-auto">
            <h1 className="text-sm font-medium">Page Navigation</h1>
            <div className="mt-4 space-y-4">
                {
                    pages?.map((page,index) => {
                        return (
                            <div onClick={() => setActive(index)} className={`px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 ${active == index ? 'bg-gray-200' : 'bg-gray-50'}`}>
                                Page {index + 1}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}