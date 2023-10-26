import { API_URL } from "@/config/url"
import { isFinished, isPreview, responseAtom } from "@/jotai/response"
import { Button } from "@nextui-org/react"
import { useAtom, useAtomValue } from "jotai"
import { useState } from "react"
import toast from "react-hot-toast"

export const PreviewFinish = () => {
    const [finished,setFinished] = useAtom(isFinished)
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const responses = useAtomValue(responseAtom)
    const preview = useAtomValue(isPreview)

    const submitAllResponse = async () => {
        setIsLoading(true)
        if(!preview) {
            const result = await fetch(`${API_URL}/api/v1/responses`,{
                method: "POST",
                cache: "no-store",
                body: JSON.stringify(responses)
            })

            if (result.status == 201) {
                setIsSubmitted(true)
            } else {
                toast.error("Unexpected error!")
            }
        } else {
            setIsSubmitted(true)
        }
        setIsLoading(false)
    }

    return (
        <div className={`${preview ? 'w-[1024px] h-[600px] mt-4 ' : 'w-full h-screen'} shadow-md flex flex-col gap-4 justify-center items-center ${isSubmitted ? "bg-primary" : 'bg-white'}`}>
            {
                !isSubmitted ? (
                    <>
                        <p className="text-center">You finish filled up form, do you want to submit ?</p>
                        <div className="flex gap-2">
                            <Button color="primary" variant="bordered" onClick={() => setFinished(false)}>Cancel</Button>
                            <Button color="primary" isLoading={isLoading} onClick={submitAllResponse}>Finish</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl font-bold text-white">THANK YOU!</h1>
                        <p className="text-lg text-white font-medium">Your form is submitted.</p>
                    </>
                )
            }
        </div>
    )
}