export const ResultMultiple = ({choices}) => {
    return (
        <div className="flex flex-col gap-2">
            {
                choices.map((choice) => {
                    return (
                        <div className="bg-gray-400 font-semibold bg-opacity-20 text-gray-400 w-fit px-4 py-2 rounded-md flex justify-between gap-2">
                            {choice.key}. <p>{choice.label}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}