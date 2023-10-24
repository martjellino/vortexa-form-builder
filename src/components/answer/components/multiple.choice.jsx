import { Button } from "@nextui-org/react"
import { useAnswer } from "../hooks/useAnswer"
import ContentEditable from "react-contenteditable"
import { useEffect, useRef } from "react"
import { XCircle } from "lucide-react"

export const MultipleChoice = () => {

    const { addChoice, pages, active, removeAnswer, setTextAnswer } = useAnswer()
    const answerRef = useRef()

    useEffect(() => {
        const currentPage = [...pages]
        // currentPage[active].choices = JSON.parse(currentPage[active].choices)
        console.log(currentPage[active].choices)
        // return () => {
        //     cleanup
        // };
    }, [pages,active]);
    
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-2">
                {/* {
                    typeof pages[active]?.choices != "string" && pages[active]?.choices.contents.length != 0 ? 
                    (
                        pages[active]?.choices.contents.map((choice,index) => {
                            return (
                                <div key={choice.id} className="bg-gray-400 font-semibold bg-opacity-20 text-gray-400 w-fit px-4 py-2 rounded-md cursor-pointer flex justify-between gap-2">
                                    <div className="flex gap-2">
                                        {choice.key}. <ContentEditable onChange={(e) => setTextAnswer(index,e)} innerRef={answerRef} html={choice.label} tagName="article" className="focus:outline-none" />
                                    </div>
                                    <XCircle onClick={() => removeAnswer(choice.id)}/>
                                </div>
                            )
                        })
                    ) : ""
                } */}
            </div>
            <Button color="primary" size="sm" onClick={addChoice}>New Choice</Button>
        </div>
    )
}