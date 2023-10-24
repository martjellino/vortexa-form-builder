import { activePage, pageAtom } from "@/jotai/page"
import { useAtomValue } from "jotai"
import { Star, StarIcon } from "lucide-react"
import { TextRating } from "./text.rating"

export const AnswerRating = () => {
    const pages = useAtomValue(pageAtom)
    const active = useAtomValue(activePage)

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
                                        <TextRating value={num}/> :
                                        <StarIcon className="stroke-gray-400 stroke-3" size={28} /> 
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
        </div>
    )
}