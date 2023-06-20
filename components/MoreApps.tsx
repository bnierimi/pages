"use client";

import { useState } from "react";
import Link from "next/link";
import Avatar from "boring-avatars";

export default function MoreAppsApps() {
  const [isMoreAppsVisible, setIsMoreAppsVisible] = useState(false);

  const handleMoreApps = ()=>{
    setIsMoreAppsVisible(!isMoreAppsVisible);
  }

  const disableMoreApps = ()=>{
    setIsMoreAppsVisible(false);
  }

  const listOfMoreApps = [
    "CaGPA", "Itemize", "Mangafy", "Memeflix", "Kyu", "Umuvid", "Ghostflames", "Henjin", "Sadeikuma",
  ];

  return(
    <>
      <div onClick={handleMoreApps} tabIndex={-1} title='More apps' className="rounded-full p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 focus:outline-none focus:ring-1 focus:ring-violet-600">
        <i className="icon icon-ic_fluent_grid_dots_20_filled flex text-2xl"></i>
      </div>
      
        {/* (modal): <sm> */}
      <div className={`${isMoreAppsVisible ? "flex" : "hidden"} w-fit h-fit z-50 absolute right-10 top-auto flex flex-col p-3 bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md rounded-tl-xl md:rounded-b-xl text- shadow-lg md:shadow`}>

        {/* (modal): <sm> : upper */}
        <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex items-start justify-between space-x-4">
          {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
          <div className="w-full flex items-start space-x-2">
              {/* <i className="icon icon-ic_fluent_text_align_left_20_regular flex text-xl text-gray-700 bg-amber-500 rounded p-0.5"></i> */}
              <div className="w-full flex items-center space-x-2">
                <i className="icon icon-ic_fluent_apps_20_filled flex text-xl rounded p-0.5bg-amber-500/5"></i>
                <p className="text-sm leading-5">More apps from Tcitrogg</p>
              </div>
          </div>

          <button onClick={disableMoreApps} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_chevron_up_20_regular flex text-lg"></i>
          </button>
        </div>
        
        {/* (modal): <sm> : lower */}
        <div className="w-full pt-2 space-y-3">
          <ul className={`w-full grid grid-flow-row grid-cols-3 gap-2 space-y-1`}>
            {
              listOfMoreApps.map((eachData, key):any => <li key={key} className="">
                <Link href={"/"} className="w- flex flex-col items-center space-y-2 p-2 hover:bg-gray-300 dark:hover:bg-gray-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  {/* <i className="icon icon-ic_fluent_share_ios_20_regular flex text-xl"></i> */}
                  <Avatar
                    size={35}
                    name={`${eachData}`}
                    variant="marble"
                  />
                  <p className="text-xs">{eachData}</p>
                </Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
}