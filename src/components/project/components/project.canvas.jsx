"use client"
import { useAtomValue, useAtom } from "jotai"
import { useRef, useState, useEffect } from "react"
import { activePage, pageAtom } from "@/jotai/page"
import ContentEditable from "react-contenteditable"
import { AnswerText } from "@/components/answer/components/answer.text"
import { MultipleChoice } from "@/components/answer/components/multiple.choice"
import { AnswerRating } from "@/components/answer/components/answer.rating"

export const ProjectCanvas = () => {

    const [title, setTitle] = useState({ html: "" });
    const [description, setDescription] = useState({html: ""})

    const active = useAtomValue(activePage)
    const [pages,setPages] = useAtom(pageAtom)

    useEffect(() => {
        setTitle({ html: pages[active]?.questionTitle })
        setDescription({html: pages[active]?.description})
        return () => {
            setTitle({html: ""})
            setDescription({html: ""})
        };
    }, [pages,active]);

    const handleTitleChange = (e) => {
        const currentPage = [...pages]
        currentPage[active].questionTitle = e.target.value
        setPages(currentPage)
    }
    
    const handleDescription = (e) => {
        const currentPage = [...pages]
        currentPage[active].description = e.target.value
        setPages(currentPage)
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
                    <ContentEditable html={title.html} onChange={handleTitleChange} tagName="article" className={`w-full text-2xl italic focus:outline-none empty:before:content-[attr(aria-placeholder)] empty:before:block empty:before:text-gray-400 pb-1`} aria-placeholder="Type your question..." />
                </div>
                <ContentEditable html={description.html} onChange={handleDescription} tagName="article" className="w-full text-gray-600 text-lg font-extralight focus:outline-none empty:before:content-[attr(aria-placeholder)] empty:before:block empty:before:text-gray-400" aria-placeholder="Type description (optional)" />
                <div className="mt-8">
                    {
                        pages[active]?.type == "short_text" && (<AnswerText/>)
                    }
                    {
                        pages[active]?.type == "multiple_choice" && (<MultipleChoice/>)
                    }
                    {
                        pages[active]?.type == "rating" && (<AnswerRating/>)
                    }
                </div>
            </div>
        </div>
    )
}