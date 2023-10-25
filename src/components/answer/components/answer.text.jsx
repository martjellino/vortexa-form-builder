import { activePage, currentProjectId, isAnswered, pageAtom } from "@/jotai/page"
import { isFinished, responseAtom } from "@/jotai/response"
import { Button } from "@nextui-org/react"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { useRef, useState, useEffect } from "react"

export const AnswerText = () => {
    const answered = useAtomValue(isAnswered)
    const [typed,setTyped] = useState(false)
    const [payload,setPayload] = useState("")
    const [active,setActive] = useAtom(activePage)
    const pages = useAtomValue(pageAtom)
    const [response,setResponseAtom] = useAtom(responseAtom)
    const setIsFinished = useSetAtom(isFinished)

    useEffect(() => {
        setPayload(response[active]?.answer.text)
        if(response[active]?.answer.text){
            setTyped(true)
        }
        return () => {
            setPayload(response[active]?.answer.text)
        };
    }, [response]);

    const handleChange = (e) => {
        if(e.target.value != ""){
            setTyped(true)
        } else{
            setTyped(false)
        }
        setPayload(e.target.value)
    }

    const submitResponse = () => {
        const pageId = pages[active]?.id
        const textData = payload
        const responsePayload = {
            pageId,
            answer: {
                text: textData
            }
        }
        
        const currentResponse = [...response]
        currentResponse.push(responsePayload)

        setResponseAtom(currentResponse)
        if (pages.length == active + 1) {
            setIsFinished(true)
        } else {
            setActive(active + 1)
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <input className="text-2xl border-b border-gray-200 w-full focus:outline-none pb-1 bg-transparent" placeholder="Your answer" onChange={handleChange} disabled={!answered} value={payload || ""}/>
            <div className="flex gap-4">
                {
                    active > 0 && answered ? <Button color="primary" variant="bordered" onClick={() => { setActive(active - 1) }}>Back</Button> : <></>
                }
                {
                    answered && typed ? <Button color="primary" className="w-fit" onClick={submitResponse}>Next</Button> : <></>
                }
            </div>
        </div>
    )
}