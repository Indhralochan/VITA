"use client";
import React from 'react'
import Video from './Summarization/Video'
import Feature from './Summarization/Feature';
import { useDataContext } from '@/app/context/index';
const Summarization = () => {
  const {url} = useDataContext();
  return (
    <>
    <div className="w-full flex flex-col justify-center align-center">
      <div className="w-[80%] flex  justify-center mx-auto ">
        <Video url={url}/>
      </div>
      <div className="w-full flex justify-center pb-10"  style={{marginTop: "-50px"}}>
    <div className="w-[60%] flex flex-col justify-center items-center" style={{minWidth:"80%"}}>
      <Feature url={url}/>
    </div>
  </div>
    </div>
    </>
  )
}

export default Summarization
