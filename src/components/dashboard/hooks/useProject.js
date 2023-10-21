import { useState } from 'react'

export const useProject = (initialProjects) => {
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
    const currentProject = [...projects]
    currentProject[id].edited = true
    setProject(currentProject)
  }

  const submitProject = async (id, userId) => {
    setIsEdited(false)
    const currentProject = [...projects]
    const payload = {
      authorId: userId,
      name: currentProject[id].name,
    }

    console.log(payload)
  }
  const removeProject = (id) => {
    const currentProject = projects.filter((_, index) => index != id)
    setIsEdited(false)
    setProject([...currentProject])
  }

  return {
    projects,
    addProject,
    submitProject,
    isEdited,
    removeProject,
    handleChange,
    editProject,
  }
}
