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

  return { handleIsRequired, pages, active }
}
