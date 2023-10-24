"use client"
import { useSetAtom, useAtom } from "jotai"
import { ProjectCanvas } from "./project.canvas"
import { ProjectEditor } from "./project.editor"
import { ProjectPage } from "./project.page"
import { pageAtom, activePage, currentProjectId } from "@/jotai/page"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"

export const Project = ({projectId, pages}) => {

    const setPage = useSetAtom(pageAtom)
    const setActive = useSetAtom(activePage)
    const setCurrentProjectId = useSetAtom(currentProjectId)

    useEffect(() => {
        setPage(pages)
        setActive(0)
        setCurrentProjectId(projectId)
        return () => {
            setPage([])
        };
    }, [pages]);

    return (
        <div className="flex">
            <ProjectPage/>
            <ProjectCanvas/>
            <ProjectEditor/>
            <Toaster/>
        </div>
    )
}