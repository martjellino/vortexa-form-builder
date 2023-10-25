"use client"
import { activePage, isAnswered, pageAtom } from "@/jotai/page"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { useEffect } from "react"
import { AnswerText } from "@/components/answer/components/answer.text"
import { MultipleChoice } from "@/components/answer/components/multiple.choice"
import { isFinished, isPreview } from "@/jotai/response"
import { PreviewFinish } from "./preview.finish"
import { AnswerRating } from "@/components/answer/components/answer.rating"

export const PreviewContent = ({data, preview}) => {
    const [pages,setPages] = useAtom(pageAtom)
    const setIsAnswered = useSetAtom(isAnswered)
    const [active,setActive] = useAtom(activePage)
    const finished = useAtomValue(isFinished)
    const setPreview = useSetAtom(isPreview)

    useEffect(() => {
        setPages(data)
        setIsAnswered(true)
        setActive(0)
        setPreview(preview)
        return () => {
            setPages([])
            setIsAnswered(false)
            setActive(0)
            setPreview(preview)
        };
    }, [data,preview]);

    return (
        <>
            {
                !finished ? <div className="mt-4 w-[1024px] h-[600px] shadow-md bg-white flex flex-col justify-center px-8">
                    {
                        pages[active]?.config.is_required && (
                            <p className="text-red-500 italic text-sm">*Required</p>
                        )
                    }
                    <p className="text-3xl italic">{pages[active]?.questionTitle}</p>
                    <p className="text-gray-600 text-lg font-extralight">{pages[active]?.description}</p>
                    <div className="mt-8">
                        {
                            pages[active]?.type == "short_text" && (<AnswerText />)
                        }
                        {
                            pages[active]?.type == "multiple_choice" && (<MultipleChoice />)
                        }
                        {
                            pages[active]?.type == "rating" && (<AnswerRating />)
                        }
                    </div>
                </div> : <PreviewFinish/>
            }
        </>
    )
}