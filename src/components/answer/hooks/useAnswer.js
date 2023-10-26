import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { activePage, pageAtom } from '@/jotai/page'
import { createId } from '@paralleldrive/cuid2'
import { useState, useEffect } from 'react'
import { isFinished, responseAtom } from '@/jotai/response'

export const useAnswer = () => {
  const [active, setActive] = useAtom(activePage)
  const [pages, setPages] = useAtom(pageAtom)
  const [choicePayload, setChoicePayload] = useState('')
  const [selected, setSelected] = useState(false)
  const [ratingChange, setRatingChange] = useState(false)
  const [response, setResponse] = useAtom(responseAtom)
  const [rate, setRate] = useState(0)
  const setIsFinished = useSetAtom(isFinished)

  useEffect(() => {
    setChoicePayload(response[active]?.answer.key)
    setRate(response[active]?.answer.rate)
    if (response[active]?.answer.key) {
      setSelected(true)
    }

    if (response[active]?.answer.rate) {
      setRatingChange(true)
    } else {
      setRatingChange(false)
    }
    return () => {
      setChoicePayload(response[active]?.answer.key)
      setRate(response[active]?.answer.rate)
    }
  }, [active])

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

  const selectChoice = (key) => {
    setChoicePayload(key)
    setSelected(true)
  }

  const submitChoice = () => {
    const currentResponse = [...response]
    const pageId = pages[active]?.id
    const payload = {
      pageId,
      answer: {
        key: choicePayload,
      },
    }
    currentResponse.push(payload)

    setResponse(currentResponse)
    if (pages.length == active + 1) {
      setIsFinished(true)
    } else {
      setActive(active + 1)
    }
  }

  const handleSetRate = (num) => {
    if (rate == num) {
      setRate(num - 1)
    } else {
      setRate(num)
    }
    setRatingChange(true)
  }

  const submitRating = () => {
    const currentResponse = [...response]
    const pageId = pages[active]?.id
    const payload = {
      pageId,
      answer: {
        rate: rate,
      },
    }

    currentResponse.push(payload)
    setResponse(currentResponse)

    if (pages.length == active + 1) {
      setIsFinished(true)
    } else {
      setActive(active + 1)
    }
  }

  return {
    addChoice,
    pages,
    active,
    removeAnswer,
    setTextAnswer,
    choicePayload,
    selectChoice,
    selected,
    submitChoice,
    response,
    submitRating,
    rate,
    handleSetRate,
    setActive,
    ratingChange,
  }
}
