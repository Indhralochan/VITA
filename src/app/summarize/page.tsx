"use client";
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Summarization from './components/Summarization';
import ContextAnswering from './components/ContextAnswering';
import AnswerGeneration from './components/AnswerGeneration';
import '@/app/style.css';
import { useRouter } from 'next/navigation'
import { Tabs } from "./tabs";
import {  useDataContext } from '@/app/context/index';
const Page = () => {
  const {url, 
    text, 
    summarizedText, setSummarizedText,
    selectedValues, 
    selectedPromptValues, } = useDataContext();

    const tabs = [
      {
        title: "summarization",
        value: "summarization",
        content: (
          <div className="w-[100%] relative h-[150%] rounded-2xl  text-xl md:text-4xl font-bold text-white maincard">
            <Summarization />
          </div>
        ),
      },
      {
        title: "context answering",
        value: "context answering",
        content: (
          <div className="w-[100%] relative h-[150%] rounded-2xl p-10 text-white maincard">
            
            <ContextAnswering />
          </div>
        ),
      },
      {
        title: "answer generation",
        value: "answer generation",
        content: (
          <div className="w-[100%] relative h-[150%] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white maincard">
            <AnswerGeneration />
          </div>
        ),
      }
    ];
    

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
      <div className="w-full flex flex-col justify-center ">
        <div className="w-full ">
          <Navbar nav={true}/>
          {/* <div className="w-full h-full flex items-center justify-center relative bg-gradient blur-3xl"> */}
            <div className="text-start text-4xl text-white z-10 pb-5 font-semibold">
              {/* Your text or content here */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-start mx-auto border-gray-300 border-lg pb-20 " style={{minWidth:"90%"}}>
        {/* <Tabs defaultValue={activeTab} className="mt-5" style={styles}>
          <TabsList className="flex justify-center">
            {convertedValues.map((tab, index) => (
              <TabsTrigger key={index} value={tab}>{tab.name}</TabsTrigger>
            ))}
          </TabsList>
          {convertedValues.map((tab, index) => (
            <TabsContent key={index} value={tab}>{tab.component()}</TabsContent>
          ))}
        </Tabs> */}
        <div className="h-[70%] md:h-[40rem] [perspective:1000px] relative b flex flex-col mx-auto w-[80%]  items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
        </div>
        {/* <div className="w-full h-full flex items-center justify-center relative bg-gradient blur-3xl"> */}
            <div className="text-start text-4xl text-white z-10 pb-5 font-semibold">
              {/* Your text or content here */}
            </div>
          {/* </div> */}
      {/* </div> */}

    </>
  )
}

export default Page;