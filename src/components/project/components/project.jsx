"use client"
import { useSetAtom, useAtom } from "jotai"
import { ProjectCanvas } from "./project.canvas"
import { ProjectEditor } from "./project.editor"
import { ProjectPage } from "./project.page"
import { pageAtom, selectedPageAtom,activeProjectId } from "@/jotai/page"
import { useEffect } from "react"

export const Project = ({projectId, pages}) => {

    const setPage = useSetAtom(pageAtom)

    useEffect(() => {
        setPage(pages)
        return () => {
            setPage([])
        };
    }, [pages]);

    return (
        <div className="flex">
            <ProjectPage/>
            <ProjectCanvas/>
            <ProjectEditor/>
        </div>
    )
}