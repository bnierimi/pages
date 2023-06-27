"use client";

import { useState } from "react";
import Link from "next/link";
import Avatar from "boring-avatars";

export default function Account() {
  const [isAccountVisible, setIsAccountVisible] = useState(false);

  const handleAccount = ()=>{
    setIsAccountVisible(!isAccountVisible);
  }

  const disableAccount = ()=>{
    setIsAccountVisible(false);
  }

  const listOfAccount = [
    "Academia", "Tssue", "Itemize", "Mangafy", "Note", "Umuvid", "Ghostflames", "Henjin", "Sadeikuma",
  ];

  return(
    <>

      <button onClick={handleAccount} title='Account' className="rounded-full flex md:p-1 lg:p-1 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 focus:outline-none focus:ring-1 focus:ring-violet-600">
        <Avatar
          size={30}
          name={`kgyk`}
          variant="beam"
        />
      </button>
      
        {/* (modal): <sm> */}
      <div className={`${isAccountVisible ? "flex" : "hidden"} w-full h-72 md:w-fit md:h-fit fixed z-50 left-0 bottom-0 md:left-auto md:top-14 lg:right-10 lg:top-20 flex flex-col justify-between p-1 bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md rounded-t-2xl md:rounded-2xl text- shadow-lg md:shadow space-y-3`}>

        {/* (modal): <sm> : upper */}
        <div className="w-full px-3 py-3 flex items-start justify-between space-x-4 rounded-2xl bg-transparent/20">
          <div className="">
            <div className="flex space-x-2">
              <Avatar
                size={45}
                name={`kgyk`}
                variant="beam"
              />
              <div className="space-y-4">
                <p className="font-medium">
                  <span className="opacity-50">t/</span>
                  kgyk
                </p>
                <button className="px-4 py-1 rounded-xl font-medium  border border-zinc-300 dark:border-zinc-600  text-sm">
                  Manage your Tcitrogg Account
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* (modal): <sm> : lower */}
        <div className="w-full pb-1 space-y-3 md:space-y-2">

          <button className="w-full flex items-center justify-center p-2 space-x-2 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-500/20 focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_arrow_exit_20_regular flex text-xl"></i>
            <p className="text-sm">Sign out</p>
          </button>

          <div className="w-full flex items-center justify-between pl-3 pr-2">
            <div className="w-full flex items-center space-x-3 divide-x divide-zinc-300 dark:divide-zinc-600 text-sm md:text-xs">
              <Link href={"/"}>
                <p className="opacity-80 hover:opacity-100 hover:underline ">Privacy policy</p>
              </Link>
              <Link href={"/"}>
                <p className="opacity-80 hover:opacity-100 hover:underline pl-3">Terms of service</p>
              </Link>
            </div>

            {/* dismiss btn */}
            <button onClick={disableAccount} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              <i className="icon icon-ic_fluent_dismiss_20_regular flex text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}