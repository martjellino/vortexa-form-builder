import { Project } from '@/components/project/components/project'

const fetchPage = async (id) => {
  const result = await fetch(
    `http://localhost:3000/api/v1/pages/?projectId=${id}&isPage=no`,
    {
      cache: 'no-store',
    },
  )
  const data = await result.json()
  return data
}

export default async function Page({ params }) {
  const id = params.id
  const pages = await fetchPage(id)
  return <Project projectId={id} pages={pages.data} />
}
