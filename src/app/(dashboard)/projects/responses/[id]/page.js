import { ResponseForm } from '@/components/response/components/response.form'
import { API_URL } from '@/config/url'

const fetchPage = async (id) => {
  const result = await fetch(
    `${API_URL}/api/v1/pages/?projectId=${id}&isPage=no`,
    {
      cache: 'no-cache',
    },
  )
  const data = await result.json()
  return data
}

export default async function Page({ params }) {
  const id = params.id
  const { data } = await fetchPage(id)

  return <ResponseForm params={id} pagesList={data} />
}
