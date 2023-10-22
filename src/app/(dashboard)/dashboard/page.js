import { DashboardHome } from '@/components/dashboard/components/dashboard.home'
import { auth } from '@clerk/nextjs'

const fetchProject = async (userId) => {
  const request = await fetch(
    `http://localhost:3000/api/v1/projects?authorId=${userId}`,
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
  return <DashboardHome listProject={data} />
}
