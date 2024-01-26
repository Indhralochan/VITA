"use client";
import React,{useState,useEffect, use} from 'react';
import Navbar from '@/components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import './style.css';
import {Button} from '../components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from '@/components/Footer';
const Page = () => {
  // const [backgroundColor, setBackgroundColor] = useState('#22c1c3'); // Initial color

  // useEffect(() => {
  //   const updateBackgroundColor = () => {
  //     const bgElement = document.querySelector('.bg-gradient');
  //     console.log(bgElement);
  //     if (bgElement) {
  //       const bgColor = getComputedStyle(bgElement).backgroundColor;
  //       setBackgroundColor(bgColor);
  //       console.log(bgColor);
  //     }
  //   };

  //   const colorInterval = setInterval(updateBackgroundColor, 5000); // Adjust the interval as needed

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(colorInterval);
  // }, []);

  // useEffect(() => {
  //   console.log(backgroundColor);
  // }, [backgroundColor]);

  return (
    <ScrollArea>
    <div className="relative h-screen overlay">
      <div className="w-full h-full flex items-center justify-center relative bg-gradient blur-3xl">
        <div className="text-start text-4xl text-white z-10 pb-20 font-semibold">
          {/* Your text or content here */}
        </div>
      </div>

      {/* Navbar */}
      <div className="top-0 fixed w-full z-20">
        <Navbar />
      </div>

      {/* Content */}
      <div className="flex flex-col relative items-center text-center justify-center mt-[-3rem]">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full   bg-slate-900 px-7 py-2  backdrop-blur transition-all">
          <p className="text-sm font-semibold text-white">
            Zues is now public!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
          <h2 className="text-5xl font-bold bg-gradient-animation ">Generate</h2>
          
          <TypeAnimation
            className="text-5xl font-bold text-6xl bg-gradient-animation pb-5"
            sequence={[
              " Video Summarization",
              1000,
              " Video Query Answering",
              1000,
              " Video Answer Generation",
              1000,
            ]}
            wrapper="span"
            speed={5}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          </div>
        </div>
        <p className="max-w-xl font-medium  ">
          Effortlessly transform any video into captivating narratives with our <br/>AI-powered caption generator.
        </p>
        <div className="flex flex-row py-5 px-10">
          <div className="px-10">
        <Button variant="secondary" className='text-center py-5'>
          Get Started
        </Button>
        </div>
        <Button variant="secondary" className='text-center py-5'>
          Learn More
        </Button>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center relative bg-gradient1 blur-3xl b-0 pt-30">
        <div className="text-start text-4xl  z-10 pb-20 font-semibold">
        </div>
      </div>
      <footer className='w-full'>
      <Footer/>
      </footer>
    </div>
    </ScrollArea>
  );
};

export default Page;
