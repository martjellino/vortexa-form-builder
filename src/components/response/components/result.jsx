export const Result = ({answer,submitted}) => {
    return (
        <div className="flex flex-col gap-2 bg-white p-4">
            <p className="font-semibold">{answer}</p>
            <p className="text-gray-500 text-sm">Submitted at {submitted}</p>
        </div>
    )
}