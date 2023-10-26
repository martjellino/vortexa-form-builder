import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { createId } from '@paralleldrive/cuid2'
import { useAtom, useAtomValue } from 'jotai'
import { activePage, pageAtom } from '@/jotai/page'
import { projectsAtom } from '@/jotai/project'
import { API_URL } from '@/config/url'

export const useProject = (initialProjects) => {
  const router = useRouter()
  // const [projects, setProject] = useState(initialProjects)
  const [projects, setProject] = useAtom(projectsAtom)
  const [selectedProject, setSelectedProject] = useState({})
  const [isEdited, setIsEdited] = useState(false)
  const active = useAtomValue(activePage)
  const pages = useAtomValue(pageAtom)

  useEffect(() => {
    setProject(initialProjects)
    return () => {
      setProject(initialProjects)
    }
  }, [initialProjects])

  const addProject = () => {
    setIsEdited(true)
    setProject([
      ...projects,
      {
        id: createId(),
        name: '',
        total_questions: 0,
        total_responses: 0,
        edited: true,
        created_at: '-',
        updated_at: '-',
      },
    ])
  }

  const handleChange = (e, id) => {
    const currentProject = [...projects]
    currentProject[id].name = e.target.value
    setSelectedProject(currentProject)
  }

  const editProject = (id) => {
    setIsEdited(true)
    const currentProject = [...projects]
    currentProject[id].existedEdited = true
    setProject(currentProject)
  }

  const submitProject = async (id, userId, isEdit = false) => {
    const currentProject = [...projects]
    const payload = {
      id: currentProject[id].id,
      authorId: userId,
      name: currentProject[id].name,
    }

    delete currentProject[id].edited

    try {
      const result = await fetch('/api/v1/projects', {
        method: 'POST',
        body: JSON.stringify(payload),
        cache: 'no-cache',
      })

      if (result.status == 201) {
        setIsEdited(false)
      } else {
        toast.error('Error submitted data please check again!')
      }
      router.refresh()
    } catch (error) {
      toast.error(error.message)
    }
  }

  const submitEditedProject = async (index, id) => {
    const currentProject = [...projects]
    const payload = {
      name: currentProject[index].name,
    }

    delete currentProject[index].existedEdited

    try {
      const result = await fetch(`/api/v1/projects/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        cache: 'no-store',
      })
      if (result.status == 200) {
        setIsEdited(false)
      } else {
        toast.error('Error submitted data please check again!')
      }
      router.refresh()
    } catch (error) {
      toast.error(error.message)
    }
  }

  const removeProject = (id) => {
    const currentProject = projects.filter((_, index) => index != id)
    setIsEdited(false)
    setProject([...currentProject])
  }

  const cancelEdited = (id) => {
    const currentProject = [...projects]
    if (currentProject[id].name == '') {
      toast.error('Value cannot be empty!')
    } else {
      currentProject[id].existedEdited = false
      setProject(currentProject)
      setIsEdited(false)
    }
  }

  const publishProject = async (id) => {
    const isPublished = pages[active].project.isPublished
    const result = await fetch(`${API_URL}/api/v1/projects/publish/${id}`, {
      method: 'PATCH',
      cache: 'no-store',
      body: JSON.stringify({
        isPublished: !isPublished,
      }),
    })

    if (result.status == 200) {
      toast.success('Project is published!')
      router.refresh()
    } else {
      toast.error('Error publishing')
    }
  }

  return {
    projects,
    addProject,
    submitProject,
    isEdited,
    removeProject,
    handleChange,
    editProject,
    cancelEdited,
    submitEditedProject,
    publishProject,
  }
}
