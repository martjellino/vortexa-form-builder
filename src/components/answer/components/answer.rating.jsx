import { activePage, isAnswered, pageAtom } from "@/jotai/page"
import { useAtomValue } from "jotai"
import { Star, StarIcon } from "lucide-react"
import { TextRating } from "./text.rating"
import { useAnswer } from "../hooks/useAnswer"
import { Button } from "@nextui-org/react"

export const AnswerRating = () => {
    const pages = useAtomValue(pageAtom)
    const answered = useAtomValue(isAnswered)
    const {submitRating,handleSetRate,rate,active,ratingChange,setActive} = useAnswer()

    let arrayNumber = []
    for (let i = 1; i <= pages[active]?.config.rating_total; i++) {
        arrayNumber.push(i)
        
    }
    return (
        <div className="flex flex-col gap-4 w-fit">
            <div className="flex gap-6">
                {
                    arrayNumber.map((num) => {
                        return (
                            <>
                                {
                                    pages[active]?.config.rating_type == "text" ? 
                                        <div onClick={answered ? () => { handleSetRate(num) } : () => { }} className={`bg-gray-200 bg-opacity-20 border border-gray-400 text-gray-400 font-semibold px-4 py-1 rounded-md ${answered ? 'hover:bg-opacity-40 cursor-pointer' : ''} ${num == rate ? 'bg-gray-400' : ''}`}>{num}</div> :
                                        <StarIcon onClick={answered ? () => { handleSetRate(num) } : () => {}} className={`stroke-gray-400 stroke-3 ${answered ? 'cursor-pointer' : ''} ${num <= rate ? 'fill-gray-400' : ''}`} size={28} /> 
                                }
                            </>
                        )
                    })
                }
            </div>
            <div className="flex justify-between">
                <p className="text-sm">{pages[active]?.config.rating_start_label}</p>
                <p className="text-sm">{pages[active]?.config.rating_end_label}</p>
            </div>
            <div className="flex gap-4">
                {
                    active > 0 && answered ? <Button color="primary" variant="bordered" onClick={() => { setActive(active - 1) }}>Back</Button> : <></>
                }
                {
                    answered && ratingChange ? <Button color="primary" className="w-fit" onClick={submitRating}>Next</Button> : <></>
                }
            </div>
        </div>
    )
}