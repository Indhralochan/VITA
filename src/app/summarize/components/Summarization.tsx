"use client";
import React from 'react'
import Video from './Summarization/Video'
import Feature from './Summarization/Feature';
const Summarization = ({videoId}) => {
  videoId="https://www.youtube.com/watch?v=ZLc2F8QHka4";
  return (
    <>
    <div className="w-full flex flex-col justify-center align-center">
      <div className="w-[80%] flex  justify-center mx-auto ">
        <Video url={videoId}/>
      </div>
      <div className="w-full flex justify-center pb-10"  style={{marginTop: "-50px"}}>
    <div className="w-[80%] flex flex-col justify-center items-center" style={{minWidth:"80%"}}>
      <Feature url={videoId}/>
    </div>
  </div>
    </div>
    </>
  )
}

export default Summarization
