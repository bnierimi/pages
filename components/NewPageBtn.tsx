"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewPageBtn({ isLong }: any) {
  const [isNewPageBtnVisible, setIsNewPageBtnVisible] = useState(false);

  const handleNewPageBtn = ()=>{
    setIsNewPageBtnVisible(!isNewPageBtnVisible);
  }

  const disableNewPageBtn = ()=>{
    setIsNewPageBtnVisible(false);
  }

  return (

    // (new page btn)
    <>
    
        {/* (view row's btn): more btn */}
      <div className="text-sm">

        {
          isLong
            ? <button onClick={handleNewPageBtn} title="New Page" className="w- p-2 pr-4 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 flex items-center space-x-2">
              <i className="icon icon-ic_fluent_add_20_filled flex text-xl"></i>
              <p className="font-semibold text-base">New page</p>
            </button>
            : <button onClick={handleNewPageBtn} title="New page" className="p-2 absolute bottom-5 right-10 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full ring-4 ring-zinc-100 dark:ring-zinc-900 focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg">
              <i className="icon icon-ic_fluent_add_20_filled flex text-2xl"></i>
            </button>
        }
        
        {/* (modal): <sm> */}
        <div className={`${isNewPageBtnVisible ? "flex" : "hidden"} fixed md:absolute left-0 top-0 z-50 h-full w-full bg-transparent/10 dark:bg-transparent/20`}>
          {/* (modal): overlay */}
          <div onClick={disableNewPageBtn} className="fixed bottom-0 left-0 w-full h-full"></div>
          
          {/* (modal): <sm body> */}
          <div className={`w-full md:w-5/12 lg:w-4/12 md:mx-auto h-3/4 md:h-fit z-50 absolute bottom-0 md:right-1/4 md:top-3 flex flex-col p-1.5 my-auto`}>

            <div className="w-full h-full p-2 md:p-1 bg-zinc-100 dark:bg-zinc-800 backdrop-blur-md rounded-2xl text- shadow-lg md:shadow space-y-3">

              {/* (modal): <sm> : upper */}
              <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex items-start justify-between space-x-4">
                {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
                <div className="w-full flex items-center space-x-1">
                <i className="icon icon-ic_fluent_add_circle_20_regular flex text-2xl rounded-full p-0.5bg-transparent/20"></i>
                <p className="text-sm leading-5">Create new page</p>
              </div>

                <button onClick={disableNewPageBtn} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <i className="icon icon-ic_fluent_dismiss_20_regular flex text-lg"></i>
                </button>
              </div>
              
              {/* (modal): <sm> : lower */}
              <div className="w-full md:pt-0 space-y-3">
                <form action="/" className="w-full">
                  <div className="w-full px-4 pb-4 space-y-4">

                    {/* (app page): pageTitle input */}
                    <div className="w-full space-y- flex flex-col">
                      <label htmlFor="pageTitle" className="text-sm opacity-60">Title</label>
                      <input type="text" name="pageTitle" id="pageTitle" required className="w-full rounded-full p-1.5 bg-transparent border border-zinc-300 dark:border-zinc-500/30 focus:outline-none focus:ring-1 focus:ring-violet-600" />
                    </div>

                    {/* (app page): pageTitle select tags */}
                    <div className="hidden w-full space-y- flex flex-col">
                      <label htmlFor="pageTags" className="text-sm opacity-60">Select Tags</label>
                      <select multiple name="pageTags" id="pageTags" className="w-full rounded-full p-2 bg-transparent border border-zinc-300 dark:border-zinc-500/30 focus:outline-none focus:ring-1 focus:ring-violet-600">
                        <option value="tag-1">moby dick</option>
                        <option value="tag-2">2023</option>
                        <option value="tag-3">log.book</option>
                      </select>
                    </div>

                    {/* (app page): submit btn */}
                    <button title="Create" className="py-2 px-4 font-medium relative bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600"> Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
