import { useAtom, useAtomValue } from 'jotai'
import { activePage, pageAtom } from '@/jotai/page'

export const useEditor = () => {
  const active = useAtomValue(activePage)
  const [pages, setPages] = useAtom(pageAtom)

  const handleIsRequired = (e) => {
    const currentPage = [...pages]
    currentPage[active].config.is_required = !currentPage[active].config
      .is_required

    setPages(currentPage)
  }

  const handleType = (e) => {
    const currentPage = [...pages]
    const value = e.target.value

    if (value == 'rating') {
      currentPage[active].config.rating_total = 1
    }

    currentPage[active].type = value
    setPages(currentPage)
  }

  const handleTypeRating = (e) => {
    const currentPage = [...pages]
    currentPage[active].config.rating_type = e.target.value
    setPages(currentPage)
  }

  const handleRatingNumber = (e) => {
    const currentPage = [...pages]
    currentPage[active].config.rating_total = parseInt(e.target.value)
    currentPage[active].config.rating_start_label = ''
    currentPage[active].config.rating_end_label = ''
    setPages(currentPage)
  }

  const handleStartLabel = (e) => {
    const currentPage = [...pages]
    currentPage[active].config.rating_start_label = e.target.value
    setPages(currentPage)
  }

  const handleEndLabel = (e) => {
    const currentPage = [...pages]
    currentPage[active].config.rating_end_label = e.target.value
    setPages(currentPage)
  }

  const savePage = () => {
    console.log(pages)
  }

  return {
    handleIsRequired,
    handleType,
    pages,
    active,
    handleRatingNumber,
    handleStartLabel,
    handleEndLabel,
    handleTypeRating,
    savePage
  }
}
