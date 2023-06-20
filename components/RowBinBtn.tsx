"use client";

import { useState } from "react";
import Link from "next/link";

export default function RowBinBtn({ data }: any) {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const handleMore = ()=>{
    setIsMoreVisible(!isMoreVisible);
  }

  const disableMore = ()=>{
    setIsMoreVisible(false);
  }

  return (

    // (view row's btn)
    <div className={`w-full transition-all duration-300 ease-in-out flex justify-between hover:bg-zinc-200 dark:hover:bg-zinc-500/20 md:hover:bg-zinc-300 px-4 md:px-10 lg:px-20 border border-transparent items-center focus-within:outline-none focus-within:ring-1 focus-within:ring-violet-600 `}>

      {/* (view row's btn): link to page */}
      <Link href={`/pg/${data.id}`} className={`w-full py-2.5 flex focus:outline-none focus:ring-0`}>
        <div className={`w-full flex items-start space-x-2.5`}>

          {/* ~ link to page: icon */}
          <div className="flex">
            <i className={`icon icon-ic_fluent_text_align_left_20_regular flex text-xl text-zinc-700 bg-amber-500 rounded p-1`}></i>
          </div>

          {/* ~ link to page: info */}
          <div className={`relative flex flex-col w-8/12 md:w-5/12 `}>
            <p className={`font-medium w-full text-ellipsis overflow-hidden whitespace-nowrap`}>{data.title}</p>
            <time className="text-xs opacity-70">{data.id}4:26, June 5 2023</time>
          </div>
        </div>
      </Link>

      {/* (view row's btn): more btn */}
      <div onClick={handleMore} tabIndex={-1} className="hiddenmd:flex p-1 hover:bg-transparent/10 rounded-full hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-violet-600">
        <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-lg"></i>
        
        {/* (modal): <sm> */}
        <div className={`${isMoreVisible ? "flex" : "hidden"} fixed md:absolute left-0 top-0 md:top-auto z-40 h-full w-full md:rounded-2xl`}>
          {/* (modal): overlay */}
          <div onClick={disableMore} className="absolute w-full h-full md:rounded-2xl bg-transparent/10 dark:bg-transparent/20 md:bg-transparent md:dark:bg-transparent"></div>
          
          {/* (modal): <sm> */}
          <div className={`w-full md:w-60 h-fit z-50 absolute bottom-0 md:right-14 lg:right-24 md:top-3 flex flex-col p-3 bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md rounded-t-xl md:rounded-xl text- shadow-lg md:shadow `}>

            {/* (modal): <sm> : upper */}
            <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex md:hidden items-start justify-between space-x-4">
              {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
              <div className="w-full flex items-start space-x-2">
                  <i className="icon icon-ic_fluent_text_align_left_20_regular flex text-xl text-gray-700 bg-amber-500 rounded p-0.5"></i>
                <div className="flex flex-col justify-start">
                  <h5 className="text- font-medium w-44 text-ellipsis overflow-hidden whitespace-nowrap">{data.title}</h5>
                  <p className="text-sm opacity-70 leading-5">t/Shanks</p>
                </div>
              </div>

              <button onClick={disableMore} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
                <i className="icon icon-ic_fluent_chevron_down_20_regular flex text-lg"></i>
              </button>
            </div>
            
            {/* (modal): <sm> : lower */}
            <div className="w-full pt-2 md:pt-0 space-y-3">
              <section className="w-full flex flex-col space-y-1 ">
                <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-300 dark:hover:bg-gray-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <i className="icon icon-ic_fluent_archive_20_regular flex text-xl"></i>
                  <p className="font-medium">Restore page</p>
                </button>
              </section>
              <section className="w-full flex flex-col space-y-1 ">
                <button className="w-full flex items-center space-x-2 p-2 text-rose-500 hover:bg-rose-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <i className="icon icon-ic_fluent_delete_20_regular flex text-xl"></i>
                  <p className="font-medium">Delete Permanently</p>
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* (modal): overlay */}
      <div onClick={disableMore} className={`${isMoreVisible ? "md:flex hidden" : "hidden"} fixed md:absolute top-0 left-0 z-20 h-full w-full md:rounded-2xl bg-transparent/5 dark:bg-transparent/10`}></div>
      
    </div>
  )
}
