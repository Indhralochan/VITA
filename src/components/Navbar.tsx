"use client";

import Link from "next/link";
import React from "react";
import Toggle from "./toggle";
import { url } from "inspector";
import Image from 'next/image'
import logo from '../../src/assets/navbar.svg'
import { useRouter } from 'next/navigation'
export default function Navbar({nav}) {
  const router = useRouter()
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-600/50 backdrop-blur-2xl transition-all text-white" >
      <div >
        <div className="flex h-14 items-center justify-between">
          <Link href={"/"} className="flex font-semibold justify-center">
            <span className="text-2xl ml-10">Vita</span>
          </Link>
          <div className="hidden items-center space-x-12 sm:flex md:pr-40 pr-20">
            <>
              <Link href={"/"} className={"text-lg"}>
                Contact Us
              </Link>
              <button onClick={() => router.push(nav ? '/' : '/signin')} className={"text-lg"}>
                {nav ? "Sign Out" : "Sign In"}
              </button>
            </>
          </div>
        </div>
      </div>
    </nav>
  );
}