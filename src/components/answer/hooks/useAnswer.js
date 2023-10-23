import { useAtom, useAtomValue } from 'jotai'
import { activePage, pageAtom } from '@/jotai/page'

export const useAnswer = () => {
  const active = useAtomValue(activePage)
  const [pages, setPages] = useAtom(pageAtom)

  const addChoice = () => {
    const currentPage = [...pages]
    const choices = JSON.parse(currentPage[active].choices)
    console.log(choices)
    // currentPage[active].choices = [
    //   {
    //     key: 'A',
    //     label: 'Choices',
    //   },
    // ]
    // setPages(currentPage)
  }

  return { addChoice }
}
