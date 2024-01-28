"use client";
import React from 'react'
import LeftPanel from './Context/LeftPanel';
import RightPanel from './Context/RightPanel';
const ContextAnswering = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 "><LeftPanel/></div>
      <div className="absolute inset-y-0 left-1/4 w-0.5 bg-gray-400 h-[80%] flex items-center justify-center"></div>
      <div className="w-3/4 "><RightPanel/></div>
    </div>
  )
}

export default ContextAnswering