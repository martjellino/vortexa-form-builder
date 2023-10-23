"use client"
import { Select, SelectItem, Switch } from "@nextui-org/react";
import { activePage, pageAtom } from "@/jotai/page"
import { useAtom, useAtomValue } from "jotai";
import { useEditor } from "../hooks/useEditor";
import { formType } from "@/types/formType";

export const ProjectEditor = () => {

    const {handleIsRequired,pages,active} = useEditor()

    return (
        <div className="h-[calc(100vh-64px)] space-y-8 bg-white w-96 border-t-1 border-gray-200 px-4 py-4 overflow-y-auto">
            <div>
                <h1 className="text-sm font-medium">General</h1>
                <hr className="h-px mt-2 bg-gray-300 border-0"></hr>
                <div className="space-y-6 mt-4">
                    <Select label="Select form type" size="sm" defaultSelectedKeys={[pages[active]?.type]}>
                        {
                            formType.map((type) => {
                                return (
                                    <SelectItem key={type.key} value={type.value}>
                                        {type.label}
                                    </SelectItem>
                                )
                            })
                        }
                    </Select>
                    <div className="flex justify-between items-center">
                        <label htmlFor="" className="text-sm">Required</label>
                        <Switch isSelected={pages[active]?.config.is_required} onValueChange={handleIsRequired}></Switch>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="" className="text-sm">Image</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-sm font-medium">Themes</h1>
                <hr className="h-px mt-2 bg-gray-300 border-0"></hr>
                <div className="space-y-6 mt-4">
                    <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Background</label>
                        
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Question</label>
                        
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Description</label>
                        
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Answer</label>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}