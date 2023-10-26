import { PreviewContent } from '@/components/preview/components/preview.content'
import { API_URL } from '@/config/url'

async function fetchPage(id) {
  const result = await fetch(
    `${API_URL}/api/v1/pages?projectId=${id}`,
    {
      cache: 'no-store',
    },
  )
  const data = await result.json()
  return data
}

export default async function Page({ params }) {
  const id = params.id
  const { data } = await fetchPage(id)
  return (
    <div className="flex justify-center">
      <PreviewContent data={data} preview={false} />
    </div>
  )
}
