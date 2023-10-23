"use client"
import { useAtomValue } from "jotai"
import { useRef } from "react"
import { activePage, pageAtom } from "@/jotai/page"
import ContentEditable from "react-contenteditable"
import { AnswerText } from "@/components/answer/components/answer.text"
import { MultipleChoice } from "@/components/answer/components/multiple.choice"

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
            <div className="bg-white w-[948px] h-[512px] shadow-md px-8 flex gap-1 flex-col justify-center">
                <div>
                    {
                        pages[active]?.config.is_required ? (
                            <p className="text-red-500 italic text-sm">*Required</p>
                        ) : ''
                    }
                    <ContentEditable html="" onChange={handleChange} innerRef={titleEditable} tagName="article" className={`w-full text-2xl italic focus:outline-none empty:before:content-[attr(aria-placeholder)] empty:before:block empty:before:text-gray-400 pb-1`} aria-placeholder="Type your question..." />
                </div>
                <ContentEditable html="" innerRef={descEditable} tagName="article" className="w-full text-gray-600 text-lg font-extralight focus:outline-none empty:before:content-[attr(aria-placeholder)] empty:before:block empty:before:text-gray-400" aria-placeholder="Type description (optional)" />
                <div className="mt-8">
                    {
                        pages[active]?.type == "short_text" && (<AnswerText/>)
                    }
                    {
                        pages[active]?.type == "multiple_choice" && (<MultipleChoice/>)
                    }
                </div>
            </div>
        </div>
    )
}