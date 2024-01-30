"use client";
import React, { use, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Summarization from './components/Summarization';
import ContextAnswering from './components/ContextAnswering';
import AnswerGeneration from './components/AnswerGeneration';
import '@/app/style.css';
import { useRouter } from 'next/navigation'
import {  useDataContext } from '@/app/context/index';
const page = () => {
  const {url, 
    text, 
    summarizedText, setSummarizedText,
    selectedValues, 
    selectedPromptValues, } = useDataContext();

const convertBooleanToComponent = (booleanArray) => {
    const mapping = [
      { name: "Summarization", component: () => < Summarization/> },
      { name: "Context Query", component: () => <ContextAnswering /> },
      { name: "Answer Generation", component: () => <AnswerGeneration/> }
    ];
  
    return booleanArray.map((bool, index) => bool ? mapping[index] : null).filter(Boolean);
  };
  
  const convertedValues = convertBooleanToComponent(selectedPromptValues)
    const styles = {
        border: "1px solid rgba(255, 255, 255, 0.20)",
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(86px)",
        overflow: "hidden",
        minHeight: "600px",
        minWidth: "80%", // Adjusted to minWidth instead of minwidth
        maxWidth: "80%", // Added maxWidth for responsiveness
        borderRadius: "20px",
        margin: "auto",
      };
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full">
          <Navbar nav={true}/>
          <div className="w-full h-full flex items-center justify-center relative bg-gradient blur-3xl">
            <div className="text-start text-4xl text-white z-10 pb-5 font-semibold">
              {/* Your text or content here */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-center mx-auto border-gray-300 border-lg pb-20 " style={{minWidth:"90%"}}>
        <Tabs defaultValue={convertedValues[0]} className="mt-5" style={styles}>
          <TabsList className="flex justify-center">
            {convertedValues.map((tab, index) => (
              <TabsTrigger key={index} value={tab}>{tab.name}</TabsTrigger>
            ))}
          </TabsList>
          {convertedValues.map((tab, index) => (
            <TabsContent key={index} value={tab}>{tab.component()}</TabsContent>
          ))}
        </Tabs>
        </div>
        <div className="w-full h-full flex items-center justify-center relative bg-gradient blur-3xl">
            <div className="text-start text-4xl text-white z-10 pb-5 font-semibold">
              {/* Your text or content here */}
            </div>
          </div>
      </div>

    </>
  )
}

export default page;