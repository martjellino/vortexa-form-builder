import { Button } from "@nextui-org/react"
import { useAnswer } from "../hooks/useAnswer"

export const MultipleChoice = () => {

    const {addChoice} = useAnswer()
    
    return (
        <Button color="primary" size="sm" onClick={addChoice}>New Choice</Button>
    )
}