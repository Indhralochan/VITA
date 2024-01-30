"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between ">
<div className="p-20 h-[25vh] flex flex-col items-start">
  <p>VITA.{"  "}@2023</p>
  <div className="text-sm mt-5">
    <p>Have some queries? Feel free to write it down here.</p>
    <a className="text-blue-500"
      href="mailto: indra.lochans@gmail.com">
      Send Mail
    </a>
  </div>
</div>

      <div className="p-20 h-[25vh]  pr-32">
        <p className="px-7">Socials</p>
        <div className="text-sm mt-5 space-y-2 px-5">
          <a  className="pointer px-2" href="">Instagram</a>
          <a className="pointer px-2" href="">Facebook</a>
          <a className="pointer px-2" href="">Twitter</a>
        </div>
      </div>
    </div>
  );
}