import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

const MainCard = () => {
    const prompts = ["Summarization", "Query Response", "Answer generation"];
    const [selectedPromptList, setSelectedPromptList] = useState([]);

    const handleSelectOption = (index: number) => {
        if (selectedPromptList.includes(index)) {
            setSelectedPromptList(selectedPromptList.filter(item => item !== index));
        } else {
            setSelectedPromptList([...selectedPromptList, index]);
        }
    };

    const handleSelectAll = () => {
        setSelectedPromptList([0,1,2])
    };
    const handleUnselectAll = () => {
        setSelectedPromptList([])
    };
    return (
        <>
            <Card className='maincard w-[650px] '>
                <CardHeader>
                    {/* <CardTitle className='text-2xl'>Enter Details Below to get Started!</CardTitle> */}
                    <CardDescription>
                        <div className="w-full flex flex-col">
                            <div className="flex flex-col">
                                <div className="mt-5">
                                    <div className="pb-3">
                                        <label className="pb-5">Youtube Video Link</label></div>
                                    <Input className="p-6 border-gray-300" type="text" placeholder="www.youtube.com/asdfadsfdasf" />
                                </div>
                            </div>
                        </div>
                    </CardDescription>
                </CardHeader>
                <hr className="my-8 border-t-2 border-gray-300 w-[90%] mx-auto"></hr>
                <CardContent>
                    <div className="flex flex-col">
                        <div className="border-2 border-gray-400 rounded rounded-lg">
                            <div className="flex flex-col">
                                <div className="">
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-t-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">mp4,mpeg,mp3 Etc (MAX. 10MB file)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                                <div className="mx-auto p-6">
                                    <Select>
                                        <SelectTrigger className="w-[180px] border-gray-300">
                                            <SelectValue placeholder="Select Format" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Audio</SelectItem>
                                            <SelectItem value="dark">Video</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-sm mt-5 pl-10">
                            {
                                prompts.map((prompt, index: number) => {
                                    return (
                                        <div className="flex items-center space-x-2 border-1 border-gray-300 pb-3" key={index}>
                                        <Checkbox id="terms" />
                                        <label
                                          htmlFor="terms"
                                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          {prompt}
                                        </label>
                                      </div>
                                    )
                                }
                                )
                            }
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-row mx-auto">
                            <div className="flex items-center space-x-2 border-1 border-gray-300 pb-3 pr-3" onChange={()=>{handleSelectAll()}}>
                                        <Checkbox id="terms" />
                                        <label
                                          htmlFor="terms"
                                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          Select All
                                        </label>
                                      </div>
                            <div className="flex items-center space-x-2 border-1 border-gray-300 pb-3" onChange={()=>{handleUnselectAll}}>
                                        <Checkbox id="terms" />
                                        <label
                                          htmlFor="terms"
                                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          Unselect All
                                        </label>
                                      </div>
                            </div>
                            </div>
                        </div>
                </CardContent>
                <CardFooter>
                    <div className="mx-auto">
                    <Button variant='secondary' className='p-5 px-20 bg-gradient-to-r from-pink-600 via-pink-500 to-indigo-400'>Generate</Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default MainCard