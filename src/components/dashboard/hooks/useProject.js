import { useState } from 'react'

export const useProject = () => {
  const initialProjects = [
    {
      id: 1,
      name: 'My Project',
      total_questions: 1,
      total_responses: 1,
      created_at: '2023-10-19 20:00:00',
      updated_at: '2023-10-19 21:00:00',
    },
    {
      id: 2,
      name: 'Project List',
      total_questions: 1,
      total_responses: 1,
      created_at: '2023-10-19 20:00:00',
      updated_at: '2023-10-19 21:00:00',
    },
    {
      id: 3,
      name: 'Project Data',
      total_questions: 1,
      total_responses: 1,
      created_at: '2023-10-19 20:00:00',
      updated_at: '2023-10-19 21:00:00',
    },
  ]

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

  const submitProject = (id) => {
    setIsEdited(false)
    const currentProject = [...projects]
    delete currentProject[id].edited

    setProject(currentProject)
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
