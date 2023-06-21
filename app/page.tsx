"use client";

// import Image from 'next/image';
import Link from "next/link";
import Avatar from "boring-avatars";

import RowViewBtn from "@/components/RowViewBtn";
import ThemeBtn from "@/components/ThemeBtn";

import { useState } from "react";
import MoreApps from "@/components/MoreApps";

export default function Home() {

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isViewGrid, setIsViewGrid] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleFilter = ()=>{
    setIsFilterVisible(!isFilterVisible);
  }
  const disableFilter = ()=>{
    setIsFilterVisible(false);
  }

  const handleViewGrid = ()=>{
    setIsViewGrid(!isViewGrid);
  }

  const handleDrawerVisible = ()=>{
    setIsDrawerVisible(!isDrawerVisible);
  }
  const disableDrawerVisible = ()=>{
    setIsDrawerVisible(false);
  }
  
  const dbData = [
    "t/kagayaki.be-E", "log{book, pose}", "grandline", "Contract code sample", "henjin", "reishi", "night owl",
  ];

  return (
    <>

    {/* (app) */}
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col md:space-y-4">
      
      {/* (app): header */}
      <header className="w-full relative bg-zinc-200dark:bg-zinc-500/10 pt-2 pb-1 px-2 flex md:hidden items-center justify-between rounded-b-2xl">
        <div className="flex items-center space-x-4">
          
          {/* ~ header: menu drawer's btn */}
          <button onClick={handleDrawerVisible} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_navigation_20_regular flex text-lg"></i>
          </button>

          {/* ~ header: title */}
          <h1 className="text-xl font-semibold flex items-center space-x-2 bg-transparent/10 dark:bg-zinc-500/20 py-1 pl-1 pr-3 rounded-full">
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name="Pages"
                variant="bauhaus"
                colors={["#f59e0b", "#1a1a1a", "#663399"]}
              />
            </div>
            <span className="">Pages</span>
          </h1>
        </div>

        <div className="flex items-center space-x-2"></div>
      </header>
      
      {/* (app): list of pages */}
      <section className="w-full h-full overflow-y-auto scrollbar">
        
        {/* ~ list of pages: top bar */}
		    <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-1">
          
          {/* ~ top bar: filter select */}
            {/* <i className="icon icon-ic_fluent_arrow_down_20_regular flex text-xs"></i> */}
          <div onClick={handleFilter} tabIndex={-1} className="bg-zinc-200 dark:bg-zinc-500/20 hover:bg-zinc-300 dark:hover:bg-zinc-500/30 md:bg-zinc-300 md:hover:bg-zinc-400/50 text-xs flex items-center space-x-1 rounded-full px-2 py-1 hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-violet-600">
            <p className="">Last opened by me</p>
            
            {/* (filter modal): <sm> */}
            <div className={`${isFilterVisible ? "flex" : "hidden"} fixed md:absolute right-0 bottom-0 z-40 h-full w-full md:rounded-2xl bg-transparent/20 dark:bg-transparent/20 md:bg-transparent dark:md:bg-transparent`}>
              {/* (filter modal): overlay */}
              <div onClick={disableFilter} className="absolute w-full h-full md:rounded-2xl"></div>
              
              {/* (filter modal): <sm body> */}
              <div className={`w-full md:w-60 h-fit z-50 absolute bottom-0 md:right-14 lg:right-24 md:top-3 flex flex-col p-1.5`}>

                <div className="w-full h-full p-3 bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md rounded-xl text- shadow-lg md:shadow ">

                  {/* (modal): <sm> : upper */}
                  <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex md:hidden items-start justify-between space-x-4">
                    {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
                    <div className="w-full flex items-center space-x-2">
                      <i className="icon icon-ic_fluent_filter_20_regular flex text-xl rounded p-0.5bg-amber-500/5"></i>
                      <p className="text-sm leading-5">Filter</p>
                    </div>
                  </div>

                  {/* (filter modal): <sm> : lower */}
                  <div className="w-full pt-2 md:pt-0 space-y-3">
                    <section className="w-full flex flex-col space-y-1 ">
                      <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-300 dark:hover:bg-gray-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                        <i className="icon icon-ic_fluent_archive_20_regular flex text-xl"></i>
                        <p className="font-medium">Last opened</p>
                      </button>
                      <button className="w-full flex items-center space-x-2 p-2 hover:bg-gray-300 dark:hover:bg-gray-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                        <i className="icon icon-ic_fluent_archive_20_regular flex text-xl"></i>
                        <p className="font-medium">Last created</p>
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">

            {/* ~ top bar: search btn */}
            <button title="Search" className="p-1 relative bgzinc-200 hover:bg-zinc-300 dark:md:bg-zinc-500/20 dark:hover:bg-zinc-500/30 md:bg-zinc-300 md:hover:bg-zinc-400/50 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              <i className="icon icon-ic_fluent_search_20_regular flex text-lg"></i>
            </button>
            
            {/* ~ top bar: view btn */}
            <button onClick={handleViewGrid} className="p-1 relative bgzinc-200 hover:bg-zinc-300 dark:md:bg-zinc-500/20 dark:hover:bg-zinc-500/30 md:bg-zinc-300 md:hover:bg-zinc-400/50 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              {
                isViewGrid
                  ? <i className={`relative icon icon-ic_fluent_group_list_20_regular flex text-lg rounded-full p-0.5 transition-all ease-in-out`}></i>
                  : <i className={`relative icon icon-ic_fluent_grid_20_regular flex text-lg rounded-full p-0.5 transition-all ease-in-out`}></i>
              }
            </button>
          </div>
        </div>
        
        {/* ~ list of pages: display pages */}
        <ul className={`h-full w-full pb-10 py-1 space-y-1`}>
          {
            dbData.map((eachData, key):any => <li key={key} className="w-full">
              <RowViewBtn data={{id: key, title: eachData}} isViewGrid={isViewGrid}/>
            </li>)
          }
        </ul>
        
      </section>

      {/* (app): <sm> create new page btn */}
      <Link href="/pg/new" title="New page" className="flex md:hidden p-2 fixed bottom-3 right-3 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg">
        <i className="icon icon-ic_fluent_add_20_filled flex text-2xl"></i>
      </Link>
    </main>

    {/* <sm> (drawer): holder */}
    <div className={`${isDrawerVisible ? "flex" : "hidden"} absolute top-0 z-50 w-full h-full`}>

      {/* (drawer): overlay */}
      <div onClick={disableDrawerVisible} className="w-full h-full absolute bg-transparent/20 dark:bg-transparent/20"></div>

      {/* (drawer): drawer */}
      <div id="menuDrawer" className={`fixed top-0 left-full z-50 h-mobileScreenmd: h-screen py-4 overflow-y-auto transition-transform -translate-x-full w-11/12 bg-zinc-200 dark:bg-zinc-800 backdrop-blur-md flex flex-col space-y-6 shadow-lg`}>
        
        <div className="w-full flex items-center justify-between pb-4 border-b border-b-zinc-300 dark:border-b-zinc-500/40 px-4">
        
          {/* (drawer): title */}
          <div className="flex items-center space-x-2">
            <h1 className="text-zinc-500 dark:text-zinc-300 rounded-md flex items-center space-x-2 leading-3">
              <p className="opacity-60 text-sm">yours</p>
              <p className="text-lg ">Tcitrogg</p>
            </h1>
          </div>

          {/* (drawer): theme */}
          <ThemeBtn/>
        </div>

        <div className="w-full h-full flex flex-col justify-between overflow-y-auto">
            
            {/* (drawer): upper */}
            <section className="space-y-4 px-4">
              <section className="w-full space-y-1 pt-1">
                <Link href={"/archive"} className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <i className="icon icon-ic_fluent_archive_20_regular flex text-xl"></i>
                  <p className="font-medium">Archive</p>
                </Link>
                <Link href={"/bin"} className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <i className="icon icon-ic_fluent_delete_20_regular flex text-xl"></i>
                  <p className="font-medium">Bin</p>
                </Link>
                <MoreApps isLong={true}/>
              </section>
            </section>

            {/* (drawer): lower */}
            <section className="space-y-1 px-4 pb-1">
              <Link href={`/`} className="flex rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                <div className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl">
                  <i className="icon icon-ic_fluent_info_20_regular flex text-xl"></i>
                  <p className="font-medium">Help and feedback</p>
                </div>
              </Link>
            </section>
        </div>
      </div>
    </div>

    </>
  )
}

