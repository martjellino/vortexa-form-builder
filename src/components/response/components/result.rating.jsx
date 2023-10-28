import { StarIcon } from "lucide-react"

export const ResultRating = ({rating, start_label, end_label, type}) => {

    let arrayNumber = []
    for (let i = 1; i <= rating; i++) {
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
                                    type == "text" ?
                                        <div className='bg-gray-200 bg-opacity-20 border border-gray-400 text-gray-400 font-semibold px-4 py-1 rounded-md'>{num}</div> :
                                        <StarIcon className="stroke-gray-400 stroke-3" size={28} />
                                }
                            </>
                        )
                    })
                }
            </div>
            <div className="flex justify-between">
                <p className="text-sm">{start_label}</p>
                <p className="text-sm">{end_label}</p>
            </div>
        </div>
    )
}