"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import './style.css';
import { Button } from "@/components/ui/moving-border";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation'
import { dummy } from '@/util/data';
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { BackgroundBeams } from '@/components/ui/background-beams';

const Page = () => {
  const router = useRouter();
  const [highlight, setHighlight] = useState('');
  useEffect(() => {
    console.log(highlight);
  }, [highlight]);
  const handleGetStarted = async () => {
    console.log("clicked")
    router.push('/register')
  }

  return (
    <ScrollArea>
      <div className="relative h-screen">
        <div className="w-full h-screen flex flex-col">
          <Navbar nav={false} />
          <div className="w-full h-full flex items-center justify-center relative bg-gradient blur-3xl ">
          </div>
          {/* Content */}
          <div className="flex flex-col relative items-center text-center justify-start mt-[-20%] py-[10%]">
            <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-slate-900 px-7 py-2  backdrop-blur transition-all">
              <p className="text-sm font-semibold text-white">
                Vita is now public!
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
              Effortlessly transform any video into captivating narratives with our <br />AI-powered caption generator.
            </p>
            <div className="flex flex-row py-5 px-10">
            <div className="px-10">
                <Button borderRadius="1.75rem" className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800' onClick={() => { router.push('/register') }}>
                  Get Started
                </Button>
              </div>
              <Button borderRadius="1.75rem" className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
        onClick={() => {
          const tracingBeamSection = document.getElementById("tracingBeamSection");
          if (tracingBeamSection) {
            tracingBeamSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>
          Learn More
        </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="p-10 pb-20">
          <BackgroundBeams />
          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {dummy.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="hidden bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>
                  <p
                    className={twMerge("text-xl mb-4")}
                    onMouseEnter={() => setHighlight(`${index}`)}
                    onMouseLeave={() => setHighlight('')}
                  >
                    {item.title}
                  </p>

                  <div className={`text-sm prose prose-sm dark:prose-invert`}>

                    {item?.image && (
                      <div className={`mb-10 ${highlight === `${index}` ? 'imageCard' : ''}`} style={{ height: highlight === `${index}` ? '300px' : '200px', width: highlight === `${index}` ? '670px' : '670px' }}>
                        <div className={`relative ${highlight === `${index}` ? 'highlighted' : ''}`} style={{ height: highlight === `${index}` ? '300px' : '200px', width: highlight === `${index}` ? '670px' : '670px' }}>
                          <Image
                            src={item.image}
                            alt="blog thumbnail"
                            layout="fill"
                            className="rounded-lg mb-10 object-cover"
                          />
                        </div>
                      </div>




                    )
                    }
                    <div className={`text-justify ${highlight === `${index}` ? 'text-lg' : ''}`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
        <div className="w-full h-full flex items-center justify-center relative bg-gradient1 blur-3xl b-0 pt-30">
        </div>
        <footer className='w-full'>
          <Footer />
        </footer>
      </div>
    </ScrollArea>
  );
};

export default Page;
