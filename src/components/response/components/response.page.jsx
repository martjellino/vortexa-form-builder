import { AnswerText} from "@/components/answer/components/answer.text"
import { ResultMultiple } from "./result.multiple"
import { ResultRating } from "./result.rating"
import { Result } from "./result"
export const ResponsePage = ({page}) => {
    console.log(page)
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white p-8 shadow-md flex flex-col justify-center">
                {
                    page.config.is_required && (
                        <p className="text-red-500 italic text-sm">*Required</p>
                    )
                }
                <p className="text-xl italic">{page.questionTitle}</p>
                <p className="text-gray-600 text-lg font-extralight">{page.description}</p>
                <div className="mt-8">
                    {
                        page.type == "short_text" && (<AnswerText />)
                    }
                    {
                        page.type == "multiple_choice" && (<ResultMultiple choices={page.choices.contents}/>)
                    }
                    {
                        page.type == "rating" && (<ResultRating rating={page.config.rating_total} start_label={page.config.rating_start_label} end_label={page.config.rating_end_label} type={page.config.rating_type} />)
                    }
                </div>
            </div>
            {
                page.responses.length != 0 ? (
                    <>
                        {
                            page.responses.map((response) => {
                                let answer = ""
                                if(page.type == "multiple_choice") {
                                    answer = `${response.answer.key}. ${response.answer.label}`
                                } else if(page.type == "short_text") {
                                    answer = response.answer.text
                                } else {
                                    answer = `Rating: ${response.answer.rate}`
                                }
                                return <Result answer={answer} submitted={response.createdAt}/>
                            })
                        }
                    </>
                ) : <div className="p-4 bg-blue-200 text-blue-800 rounded-md">No Response!</div>
            }
        </div>
    )
}