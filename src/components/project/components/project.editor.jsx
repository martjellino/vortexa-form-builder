"use client"
import { Select, SelectItem, Switch, Input, Button } from "@nextui-org/react";
import { useEditor } from "../hooks/useEditor";
import { formType } from "@/types/formType";
import { ratingNumber } from "@/types/ratingNumber";
import { useState, useEffect } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import OutsideClickHandler from "react-outside-click-handler";

export const ProjectEditor = () => {

    const { handleIsRequired, pages, active, handleType, handleRatingNumber, handleStartLabel, handleEndLabel, handleTypeRating, savePage } = useEditor()
    const [type, setType] = useState("");

    useEffect(() => {
        setType(pages[active]?.type)
        return () => {
            setType("")
        };
    }, [pages,active]);

    return (
        <div className="h-[calc(100vh-64px)] space-y-8 bg-white w-96 border-t-1 border-gray-200 px-4 py-4 overflow-y-auto">
            <div>
                <h1 className="text-sm font-medium">General</h1>
                <hr className="h-px mt-2 bg-gray-300 border-0"></hr>
                <div className="space-y-6 mt-4">
                    <Select label="Select form type" size="sm" onChange={handleType} defaultSelectedKeys={type != "" ? [type] : ""}>
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
                </div>
            </div>
            {
                pages[active]?.type == "rating" && (
                    <div>
                        <h1 className="text-sm font-medium">Options</h1>
                        <hr className="h-px mt-2 bg-gray-300 border-0"></hr>
                        <div className="space-y-4 mt-4">
                            <Select label="Select type of rating" size="sm" onChange={handleTypeRating}>
                                <SelectItem key="icon" value="icon">Icon</SelectItem>
                                <SelectItem key="text" value="text">Text</SelectItem>
                            </Select>
                            <Select label="Select number of rating" size="sm" onChange={handleRatingNumber}>
                                {
                                    ratingNumber.map((rating) => {
                                        return (
                                            <SelectItem  key={rating.value} value={rating.value}>
                                                {rating.label}
                                            </SelectItem>
                                        )
                                    })
                                }
                            </Select>
                            {
                                pages[active]?.config.rating_total > 3 && (
                                    <>
                                        <div className="space-y-2">
                                            <label htmlFor="" className="text-sm">Rating Label Start</label>
                                            <Input type="text" name="start" size="sm" onChange={handleStartLabel} />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="" className="text-sm">Rating Label End</label>
                                            <Input type="text" name="end" size="sm" onChange={handleEndLabel} />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }
            <div>
                <h1 className="text-sm font-medium">Themes</h1>
                <hr className="h-px mt-2 bg-gray-300 border-0"></hr>
                <div className="space-y-6 mt-4">
                    <div className="flex items-center relative justify-between">
                        <label htmlFor="" className="text-sm">Background</label>
                        {/* <div className="w-6 h-6 rounded-md bg-black cursor-pointer"></div> */}
                        <div className="absolute top-8 left-10">
                            {/* <HexColorPicker/>
                            <HexColorInput/> */}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Question</label>
                        
                    </div>
                    <div className="flex justify-between">
                        <label htmlFor="" className="text-sm">Answer</label>
                        
                    </div>
                </div>
            </div>
            <Button color="primary" className="w-full" onClick={savePage}>Save</Button>
        </div>
    )
}