import { Button } from "@nextui-org/react"
import { useAnswer } from "../hooks/useAnswer"
import ContentEditable from "react-contenteditable"
import { useEffect, useState } from "react"
import { Check, XCircle } from "lucide-react"
import { useAtomValue, useSetAtom } from "jotai"
import { activePage, isAnswered } from "@/jotai/page"
import { responseAtom } from "@/jotai/response"

export const MultipleChoice = () => {

    const { addChoice, pages, active, removeAnswer, setTextAnswer, selectChoice, choicePayload,selected, submitChoice,response } = useAnswer()
    const answered = useAtomValue(isAnswered)
    const setActive = useSetAtom(activePage)

    
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-2">
                
                {
                    pages[active]?.choices.contents.length != 0 ? 
                    (
                        pages[active]?.choices.contents.map((choice,index) => {
                            return (
                                <div key={choice.id} className={
                                    `bg-gray-400 font-semibold bg-opacity-20 text-gray-400 w-fit px-4 py-2 rounded-md cursor-pointer flex justify-between gap-2 ${!answered ? '' : 'hover:bg-gray-300'}`
                                } onClick={answered ? () => {selectChoice(choice.key)} : () => {}}>
                                    <div className="flex gap-2">
                                        {choice.key}. {
                                            !answered ? <ContentEditable onChange={(e) => setTextAnswer(index, e)} html={choice.label} tagName="article" className="focus:outline-none" /> : <p>{choice.label}</p>
                                        }
                                    </div>
                                    {
                                        !answered && <XCircle onClick={() => removeAnswer(choice.id)} />
                                    }
                                    {
                                        answered && choicePayload == choice.key ? <Check/> : <></>
                                    }
                                </div>
                            )
                        })
                    ) : ""
                }
            </div>
            <div className="flex gap-4">
                {
                    !answered ? <Button color="primary" size="sm" onClick={addChoice}>New Choice</Button> : <></>
                }

                {
                    active > 0 && answered ? <Button color="primary" variant="bordered" onClick={() => { setActive(active - 1) }}>Back</Button> : <></>
                }
                {
                    answered && selected ? (<Button color="primary" onClick={submitChoice}>Next</Button>) : <></>
                }
            </div>
        </div>
    )
}