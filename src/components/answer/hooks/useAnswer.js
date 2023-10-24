import { useAtom, useAtomValue } from 'jotai'
import { activePage, pageAtom } from '@/jotai/page'
import { createId } from '@paralleldrive/cuid2'

export const useAnswer = () => {
  const active = useAtomValue(activePage)
  const [pages, setPages] = useAtom(pageAtom)

  const addChoice = () => {
    const currentPage = [...pages]
    let choices = null
    if (typeof currentPage[active].choices == 'string') {
      choices = JSON.parse(currentPage[active].choices)
    } else {
      choices = currentPage[active].choices
    }
    currentPage[active].choices = choices

    let key = ''
    if (currentPage[active].choices.contents.length != 0) {
      const length = currentPage[active].choices.contents.length
      const contens = currentPage[active].choices.contents
      const lastElement = contens[length - 1]
      const currentKey = lastElement.key

      const letterCode = currentKey.charCodeAt(0)
      const nextLetterCode = letterCode + 1
      key = String.fromCharCode(nextLetterCode)
    } else {
      key = 'A'
    }

    currentPage[active].choices.contents.push({
      id: createId(),
      key: key,
      label: 'Choices',
    })
    setPages(currentPage)
  }

  const removeAnswer = (choiceId) => {
    const currentPage = [...pages]
    const contents = currentPage[active].choices.contents

    const filtered = contents.filter((content) => {
      return content.id != choiceId
    })

    currentPage[active].choices.contents = filtered
    setPages(currentPage)
  }

  const setTextAnswer = (index, e) => {
    const currentPage = [...pages]
    const contents = currentPage[active].choices.contents
    contents[index].label = e.target.value
    currentPage[active].choices.contents = contents
    setPages(currentPage)
  }

  return { addChoice, pages, active, removeAnswer, setTextAnswer }
}
