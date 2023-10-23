import { Project } from '@/components/project/components/project'

const fetchPage = async (id) => {
  const result = await fetch(
    `http://localhost:3000/api/v1/pages/?projectId=${id}`,
    {
      cache: 'no-store',
    },
  )
  const data = await result.json()
  // console.log(data.data[0].config)
  return data
}

export default async function Page({ params }) {
  const id = params.id
  const pages = await fetchPage(id)
  console.log(pages)
  return <Project projectId={id} pages={pages.data} />
}
