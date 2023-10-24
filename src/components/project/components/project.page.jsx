"use client"
import { pageAtom, activePage, currentProjectId } from "@/jotai/page"
import { defaultPage } from "@/types/defaultPage"
import { Button } from "@nextui-org/react"
import { useAtomValue, useAtom } from "jotai"
import { Trash, Trash2 } from "lucide-react"
import toast from "react-hot-toast"

export const ProjectPage = () => {
    const [pages,setPages] = useAtom(pageAtom)
    const projectId = useAtomValue(currentProjectId)
    const [active,setActive] = useAtom(activePage)

    const createPage = async () => {
        defaultPage.projectId = projectId
        const result = await fetch("http://localhost:3000/api/v1/pages",{
            method: "POST",
            cache: "no-store",
            body: JSON.stringify(defaultPage)
        })

        if (result.status == 201){
            toast.success("Success created page!")
            const data = await result.json()
            const currentPages = [...pages,data.data]
            setPages(currentPages)
        } else {
            toast.error("Something error")
        }
    }

    const removePage = async (pageId) => {
        const result = await fetch(`http://localhost:3000/api/v1/pages/${pageId}`,{
            method: "DELETE",
            cache: "no-store"
        })

        if(result.status == 200){
            toast.success("Page deleted!")
            setActive(active - 1)
            const currentPages = [...pages]
            const filtered = currentPages.filter((curr) => { return curr.id != pageId })
            setPages(filtered)
        } else {
            toast.error("Something error")
        }
    }

    return (
        <div className="h-[calc(100vh-64px)] bg-white w-96 border-t-1 border-gray-200 px-4 py-4 overflow-y-auto">
            <h1 className="text-sm font-medium">Page Navigation</h1>
            <div className="mt-4 space-y-4">
                {
                    pages?.map((page,index) => {
                        return (
                            <div key={index} onClick={() => setActive(index)} className={`px-4 py-2 flex items-center justify-between rounded-md  ${active == index ? 'bg-gray-200' : 'bg-gray-50 hover:bg-gray-300 cursor-pointer'}`}>
                                Page {index + 1}
                                {
                                    active == index && <Trash2 size={20} className="text-red-400 cursor-pointer" onClick={() => removePage(page.id)} />
                                }
                            </div>
                        )
                    })
                }
            </div>
            <Button color="primary" onClick={createPage} className="w-full mt-4">+ New</Button>
        </div>
    )
}