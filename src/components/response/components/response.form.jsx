"use client"
import { activePage, currentProjectId, pageAtom } from "@/jotai/page"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { useEffect } from "react"
import { ResponsePage } from "./response.page"
import { isResult } from "@/jotai/response"

export const ResponseForm = ({params,pagesList}) => {
    const setCurrentProjectId = useSetAtom(currentProjectId)
    const [pages,setPages] = useAtom(pageAtom)
    const [active,setActive] = useAtom(activePage)
    const setIsResult = useSetAtom(isResult)

    useEffect(() => {
        setCurrentProjectId(params)
        setActive(0)
        setPages(pagesList)
        setIsResult(true)
        return () => {
            setCurrentProjectId(params)
            setActive(0)
            setPages([])
            setIsResult(false)
        };
    }, [params,pagesList]);
    
    return (
        <div className="flex flex-col gap-4 mt-8 pb-8 px-20 h-fit">
            <h1 className="text-lg">Form Submission</h1>
            <hr className="h-px bg-gray-300 border-0"></hr>
            <div className="flex flex-col gap-4">
                {
                    pages.map((page) => {
                        return <ResponsePage page={page}/>
                    })
                }
            </div>
        </div>
    )
}