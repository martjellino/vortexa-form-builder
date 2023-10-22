import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const useProject = (initialProjects) => {
  const router = useRouter()
  const [projects, setProject] = useState(initialProjects)
  const [selectedProject, setSelectedProject] = useState({})
  const [isEdited, setIsEdited] = useState(false)

  const addProject = () => {
    setIsEdited(true)
    setProject([
      ...projects,
      {
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
  }
}
