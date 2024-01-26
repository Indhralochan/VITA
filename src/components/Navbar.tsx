"use client";

import Link from "next/link";
import React from "react";
import Toggle from "./toggle";
import { url } from "inspector";
import Image from 'next/image'
import logo from '../../src/assets/navbar.svg'
export default function Navbar() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-600/50 backdrop-blur-2xl transition-all" >
      <div >
        <div className="flex h-14 items-center justify-between">
            <div className="pl-10"><Toggle/></div>
          <Link href={"/"} className="flex font-semibold justify-center">
            <span className="text-3xl pl-45">Zues</span>
          </Link>
          <div className="hidden items-center space-x-12 sm:flex md:pr-40 pr-20">
            <>
              <Link href={"/"} className={"text-lg"}>
                Contact Us
              </Link>
                <button onClick={() =>{console.log('signin')}} className={"text-lg"}>
                  Sign In
                </button>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
}