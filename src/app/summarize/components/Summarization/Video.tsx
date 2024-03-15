import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Video({url}:{url:string}) {
  return (
    <div className="relative isolate">
      <div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-28 flex items-center justify-center">
          <div className="mt-5 flow-root">
            <div className="-m-2 rounded-xl bg-gray-600/25 p-2 ring-1 ring-inset ring-gray-700/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <ReactPlayer
                url={url}
                controls
                height={360}
                width={720}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="w-full pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 557.5% 58.3%, 45.2% 34.5%, 27.5% 736.7%, 0.1% 64.9%, 17.9% 120%, 27.6% 76.8%, 76.1% 97.7%, 27.5% 736.7%, 0.1% 64.9%, 17.9% 120%, 85.1% 50.1%,85.1% 342.1%,85.1% 50.1%,85.1% 345.1%)",
          }}
          className="opacity-35 top-52 animate-gradient-x sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] relative left-[calc(50%-11rem)] aspect-[1155/678] w-[15.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 via-[#1ADE97] to-cyan-400"
        />
      </div>
    </div>
  );
}
