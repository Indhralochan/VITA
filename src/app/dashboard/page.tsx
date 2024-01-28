"use client";
import React, { use, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../my-app/firebase";
import { TypeAnimation } from 'react-type-animation';
import '@/app/style.css';
import MainCard from './components/MainCard';
const Dashboard = () => {
  const [name, setName] = React.useState<string>("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        console.log(user.displayName);
        const fullName = user.displayName;
        const firstName = fullName?.split(" ")[0];
        setName(firstName);
      } else {
      }
    });
  }, [])

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
        <div className="relative flex flex-row">
          <div className="w-full  text-5xl px-20 flex flex-row relative ">
            <h1 className="text-4xl font-bold">
              <TypeAnimation
                className="text-4xl font-bold  bg-gradient-animation pb-5"
                sequence={[
                  "Hello!",
                  1000,
                  " Hola!",
                  1000,
                  "Ciao!",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
            <div className="absolute ml-10 pl-10 justify-content-center align-items-center">
              <div className="mt-1 text-3xl font-bold px-10 flex flex-row">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-100 to-sky-400 flex items-center">{name}</div>
                <span className="text-3xl">👋</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80% flex flex-col justify-center align-center mx-auto border-gray-300 border-lg pb-20">
          <MainCard/>
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

export default Dashboard