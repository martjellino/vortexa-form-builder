import { DashboardHome } from '@/components/dashboard/components/dashboard.home'
import { API_URL } from '@/config/url'
import { auth } from '@clerk/nextjs'


const fetchProject = async (userId) => {
  const request = await fetch(
    `${API_URL}/api/v1/projects?authorId=${userId}`,
    {
      cache: 'no-store',
    },
  )
  const result = await request.json()
  return result
}

export default async function Page() {
  const { userId } = auth()
  const data = await fetchProject(userId)
  console.log(data)
  return <DashboardHome listProject={data} />
}
