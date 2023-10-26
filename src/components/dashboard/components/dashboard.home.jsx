"use client"
import { Button,Input } from "@nextui-org/react"
import { useProject } from "../hooks/useProject"
import { Trash2, XCircle, Eye } from "lucide-react"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { activeProject } from "@/jotai/project";

export const DashboardHome = ({listProject}) => {
    const { projects, addProject, submitProject, isEdited, removeProject, handleChange, editProject, cancelEdited, submitEditedProject } = useProject(listProject.data)
    const {user} = useUser()
    const { push } = useRouter()
    const setActiveProject = useSetAtom(activeProject)

    return (
        <div className="my-8 px-20">
            <div className="flex justify-between items-center">
                <h1 className="text-lg">My Projects</h1>
                <Button isDisabled={isEdited} color="primary" onClick={addProject}>
                    + Create new project
                </Button>
            </div>
            <hr className="h-px my-4 bg-gray-300 border-0"></hr>

            <div className="bg-white p-4 shadow-md rounded-md">
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Project Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Question
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Response
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created At
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Update
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(projects).length != 0 ? projects.map((project, index) => {
                                    return (
                                        <tr key={index} className={`bg-white border-b dark:bg-gray-800 ${project.edited || project.existedEdited ? '' : 'hover:bg-gray-50'}`} onDoubleClick={() => { !project.existedEdited ? editProject(index): {} }}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {
                                                    !project.edited & !project.existedEdited ? project.name : (
                                                        <Input onChange={(event) => handleChange(event, index)} type="text" size="sm" value={project.name} />
                                                    )
                                                }
                                            </th>
                                            <td className="px-6 py-4">
                                                {project._count?.pages}
                                            </td>
                                            <td className="px-6 py-4">
                                                {project.total_responses}
                                            </td>
                                            <td className="px-6 py-4">
                                                {project.createdAt}
                                            </td>
                                            <td className="px-6 py-4">
                                                {project.updatedAt}
                                            </td>
                                            <td className="px-6 py-4">
                                                {
                                                    project.edited && (
                                                        <div className="flex gap-4 items-center">
                                                            <Button onClick={() => submitProject(index, user.id)} color="primary" size="sm">Save</Button>
                                                            <Trash2 onClick={() => removeProject(index)} className="text-red-500 cursor-pointer" size={20} />
                                                        </div>
                                                    )
                                                }
                                                {
                                                    project.existedEdited && (
                                                        <div className="flex gap-4 items-center">
                                                            <Button onClick={() => submitEditedProject(index, project.id)} color="primary" size="sm">Save</Button>
                                                            <XCircle onClick={() => cancelEdited(index)} className="text-red-500 cursor-pointer" size={20}/>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    !project.edited && !project.existedEdited && (
                                                        <Eye className="cursor-pointer" onClick={() => {
                                                            setActiveProject(index)
                                                            push(`projects/${project.id}`)
                                                        }}/>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    )
                                }) : (
                                    <tr>
                                        <td colSpan={6} className="py-8 text-center">
                                            No data to display
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}