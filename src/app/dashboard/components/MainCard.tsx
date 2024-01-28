"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from 'react'
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
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const MainCard = () => {
    const prompts = ["Summarization", "Query Response", "Answer generation"];
    const [link, setLink] = useState("");
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedPrompts, setSelectedPrompts] = useState<boolean[]>(new Array(prompts.length).fill(false));
    const [loading, setLoading] = useState(true);
    const [fileUrl , SetfileUrl] = useState('');
    const [progress, setProgress] = React.useState(13)
    const handleCheckboxChange = (index: number) => {
        const newSelectedPrompts = [...selectedPrompts];
        newSelectedPrompts[index] = !newSelectedPrompts[index];
        setSelectedPrompts(newSelectedPrompts);
    };
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
      }, [])

    const handleSelectAll = () => {
        setSelectedPrompts(new Array(prompts.length).fill(true));
    };

    const handleUnselectAll = () => {
        setSelectedPrompts(new Array(prompts.length).fill(false));
    };

    const handleSelectChange = (event) => {
        setSelectedValue(event)
    };
    const handleFileChange = (file) => {
        // Check if a file was selected
        if (file) {
          // Log the file information
          setLoading(true);
          console.log('Selected file:', file);
          
          // Perform further actions such as uploading the file, processing it, etc.
          // Example: Upload the file using Axios
          const formData = new FormData();
          formData.append('file', file);

          axios.post('http://localhost:4000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log('File uploaded successfully:', response.data);
            console.log(response.data.filePath);
            SetfileUrl(response.data.filePath)
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
        } else {
          console.log('No file selected.');
        }
      };

      useEffect(() => {
        console.log(selectedPrompts);
    }, [selectedPrompts]);

      const handleGenerate = () => {
        console.log("Started")
        console.log(link)
        console.log(selectedPrompts)
        console.log(selectedValue)
            if(link !== '' && selectedPrompts.length !== 0){
                axios.post('http://localhost:4000/generate', {
                    "link": link,
                    "prompt": JSON.stringify(selectedPrompts),
                    "format": "video"
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
                console.log("Ended")
            }
            else if(fileUrl !== '' && selectedPrompts.length !== 0){
                axios.post('http://localhost:4000/generate', {
                    "link": fileUrl,
                    "prompt": JSON.stringify(selectedPrompts),
                    "format": selectedValue
                }).then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                })
            }
            else{
                console.log("Please select a file or enter a link")
            }
        }

    const styles = {
        border: "1px solid rgba(255, 255, 255, 0.20)",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(86px)",
        overflow: "hidden",
    };
    useEffect(() => {
        console.log(selectedValue);
        console.log(link)
    }, [selectedValue, link]);

    return (
        <>
            <Card className='maincard w-[650px] ' style={styles}>
                <CardHeader>
                    {/* <CardTitle className='text-2xl'>Enter Details Below to get Started!</CardTitle> */}
                    <CardDescription>
                        <div className="w-full flex flex-col">
                            <div className="flex flex-col">
                                <div className="mt-5">
                                    <div className="pb-3">
                                        <label className="pb-5">Youtube Video Link</label></div>
                                    <Input className="p-6 border-gray-300" type="text" placeholder="www.youtube.com/asdfadsfdasf" onChange={(e) => { setLink(e.target.value) }} />
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
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 rounded-t-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">mp4,mpeg,mp3 Etc (MAX. 10MB file)</div>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFileChange(e.target.files[0])}/>
                                        </label>
                                    </div>
                                    {/* <div className="mt-1">
                                    {
                                        loading ? <Progress className="w-full" value={curr}/> : null
                                    }
                                    </div> */}
                                </div>
                                <Progress className="w-full" value={progress}/>
                                <div className="mx-auto p-6">
                                    <Select onValueChange={(e) => { handleSelectChange(e) }}>
                                        <SelectTrigger className="w-[180px] border-gray-300">
                                            <SelectValue placeholder="Select Format" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="audio">Audio</SelectItem>
                                            <SelectItem value="video">Video</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-sm mt-5 pl-10">
                            {prompts.map((prompt, index: number) => (
                                <div className="flex items-center space-x-2 border-1 border-gray-300 pb-3" key={index}>
                                    <input
                                        type="checkbox"
                                        id={`prompt-${index}`}
                                        checked={selectedPrompts[index]} // Use the state value to determine the checked state
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <label
                                        htmlFor={`prompt-${index}`}
                                        className={`text-sm font-medium leading-none ${selectedPrompts[index] ? '' : 'peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                            }`}
                                    >
                                        <span>{prompt}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-row mx-auto">
                                <div className="flex items-center space-x-2 border-1 border-gray-300 pb-3 pr-3">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        onChange={handleSelectAll}
                                        checked={selectedPrompts.every((prompt) => prompt)} // Check if all prompts are selected
                                    />
                                    <label
                                        htmlFor="selectAll"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Select All
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2 border-1 border-gray-300 pb-3" onChange={handleUnselectAll}>
                                    <input
                                        type="checkbox"
                                        id="unselectAll"
                                        checked={!selectedPrompts.some((prompt) => prompt)} // Check if no prompts are selected
                                    />
                                    <label
                                        htmlFor="unselectAll"
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
                        <Button variant='secondary' className='p-5 px-20 bg-gradient-to-r from-pink-600 via-pink-500 to-indigo-400' onClick={()=>{handleGenerate()}}>Generate</Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default dynamic(() => Promise.resolve(MainCard), { ssr: false })
