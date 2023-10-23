"use client"
import { useAtomValue } from "jotai"
import { useRef } from "react"
import { activePage, pageAtom } from "@/jotai/page"
import ContentEditable from "react-contenteditable"

export const ProjectCanvas = () => {
    const titleEditable = useRef("")
    const descEditable = useRef("")

    const active = useAtomValue(activePage)
    const pages = useAtomValue(pageAtom)

    const handleChange = (e) => {
        // console.log(e.target.value)
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white w-[948px] h-[512px] shadow-md px-8 flex gap-4 flex-col justify-center">
                <div>
                    {
                        pages[active]?.config.is_required ? (
                            <p className="text-red-500 italic text-sm">*Required</p>
                        ) : ''
                    }
                    <ContentEditable html="" onChange={handleChange} innerRef={titleEditable} tagName="article" className="w-full text-2xl border-b border-gray-200 focus:outline-none empty:before:content-[attr(aria-placeholder)] empty:before:block empty:before:text-gray-400 pb-2" aria-placeholder="Type your question..." />
                </div>
                <ContentEditable html="" innerRef={descEditable} tagName="article" className="w-full text-gray-600 text-lg focus:outline-none empty:before:content-[attr(aria-placeholder)] empty:before:block empty:before:text-gray-400" aria-placeholder="Type description (optional)" />
            </div>
        </div>
    )
}