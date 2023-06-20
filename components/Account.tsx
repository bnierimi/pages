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
    "CaGPA", "Itemize", "Mangafy", "Memeflix", "Kyu", "Umuvid", "Ghostflames", "Henjin", "Sadeikuma",
  ];

  return(
    <>
      <div onClick={handleAccount} tabIndex={-1} title='Account' className="rounded-full p-1 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 focus:outline-none focus:ring-1 focus:ring-violet-600">
        <Avatar
          size={30}
          name={`shisho`}
          variant="bauhaus"
        />
      </div>
      
        {/* (modal): <sm> */}
      <div className={`${isAccountVisible ? "flex" : "hidden"} w-fit h-fit z-50 absolute right-10 bottom-24 flex flex-col p-3 bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md rounded-bl-xl md:rounded-t-xl text- shadow-lg md:shadow`}>

        {/* (modal): <sm> : upper */}
        <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex items-start justify-between space-x-4">
          {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
          <div className="w-full flex items-start space-x-2">
              {/* <i className="icon icon-ic_fluent_text_align_left_20_regular flex text-xl text-gray-700 bg-amber-500 rounded p-0.5"></i> */}
              <div className="w-full flex items-center space-x-2">
                <i className="icon icon-ic_fluent_person_20_regular flex text-xl rounded p-0.5bg-amber-500/5"></i>
                <p className="text-sm leading-5">Account</p>
              </div>
          </div>

          <button onClick={disableAccount} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_chevron_up_20_regular flex text-lg"></i>
          </button>
        </div>
        
        {/* (modal): <sm> : lower */}
        <div className="w-full pt-2 space-y-3">
          <p className="text-xs leading-5 opacity-40 italic">details</p>
        </div>
      </div>
    </>
  )
}