import { isFinished, isPreview, responseAtom } from "@/jotai/response"
import { Button } from "@nextui-org/react"
import { useAtom, useAtomValue } from "jotai"
import { useState } from "react"

export const PreviewFinish = () => {
    const [finished,setFinished] = useAtom(isFinished)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const responses = useAtomValue(responseAtom)
    const preview = useAtomValue(isPreview)

    const submitAllResponse = async () => {
        if(!preview) {
            console.log(responses)
        }

        setIsSubmitted(true)
    }

    return (
        <div className={`${preview ? 'w-[1024px] h-[600px] mt-4 ' : 'w-full h-screen'} shadow-md flex flex-col gap-4 justify-center items-center ${isSubmitted ? "bg-primary" : 'bg-white'}`}>
            {
                !isSubmitted ? (
                    <>
                        <p className="text-center">You finish filled up form, do you want to submit ?</p>
                        <div className="flex gap-2">
                            <Button color="primary" variant="bordered" onClick={() => setFinished(false)}>Cancel</Button>
                            <Button color="primary" onClick={submitAllResponse}>Finish</Button>
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