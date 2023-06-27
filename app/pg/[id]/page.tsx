"use client";

import EditorRenderer from "@/components/EditorRenderer";

import { useState } from "react";
// import { useEffect } from "react";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter, useParams } from "next/navigation";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Avatar from "boring-avatars"
import { OutputData } from "@editorjs/editorjs";
import PageComments from "@/components/PageComments";

const EditorBlock = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

export default function ViewPage() {

  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const handleMore = ()=>{
    setIsMoreVisible(true);
  }

  const disableMore = ()=>{
    setIsMoreVisible(false);
  }

  const router = useRouter();
  const params = useParams();

  const [pageContent, setPageContent] = useState<OutputData>(JSON.parse(`{ "time": 1687651733661, "blocks": [ { "id": "ELwkQJFfRD", "type": "header", "data": { "text": "Ochaco-chan,", "level": 2 } }, { "id": "uvY8ODmdhS", "type": "paragraph", "data": { "text": "&nbsp; <br>" } }, { "id": "fKk0o6SrUZ", "type": "paragraph", "data": { "text": "either far or near" } }, { "id": "mhJjHjSES4", "type": "paragraph", "data": { "text": "don't give up on a friend" } }, { "id": "BbXBvmDt1D", "type": "paragraph", "data": { "text": "&nbsp;&nbsp; <br>" } }, { "id": "w72kaSSFxn", "type": "paragraph", "data": { "text": "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; yours Nierimi<br>" } } ], "version": "2.27.0" }`));
// `_start writing..._`

  return (

    // (app page)
    <>
      {/* (app page): header */}
      <header className="w-full px-2 md:rounded-t-2xl">
        <div className="pt-2 pb-1 border-bborder-b-gray-300dark:border-b-gray-500/20 flex items-center justify-between">

          <div className="flex items-center space-x-1.5">
            
            {/* ~ header: go back home link */}
            <button onClick={() => router.back()} title="Home" className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-1 flex items-center">
              
              {/* ~ go back home link: icon */}
              <i className="icon icon-ic_fluent_chevron_left_20_filled flex text-2xl opacity-60"></i>

              {/* ~ go back home link: page avatar */}
              <div className="overflow-hidden rounded-full">
                <Avatar
                  size={27}
                  name={`${params?.id}`}
                  variant="bauhaus"
                />
              </div>
            </button>

            {/* ~ header: page title */}
            <h1 className="text-lg font-medium flex items-center bg-transparent/10dark:bg-zinc-500/20 pl-1 pr-3 rounded-full">
              Page {`${params?.id}`}
            </h1>
          </div>

          <div className="flex items-center">
            
            {/* ~ header: comments */}
            {/* fix for lg screen */}
            <PageComments/>

            {/* ~ header: more btn */}
            <button onClick={handleMore} className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-2xl"></i>
            </button>
            
            {/* (modal): <sm> */}
            <div className={`${isMoreVisible ? "flex" : "hidden"} fixed md:absolute left-0 top-0 md:right-auto md:top-bottom z-50 h-full w-full md:rounded-2xl`}>
              {/* (modal): overlay */}
              <div onClick={disableMore} className="absolute w-full h-full md:rounded-2xl bg-transparent/10 dark:bg-transparent/20 md:bg-transparent md:dark:bg-transparent"></div>
              
              {/* (modal): <sm body> */}
              <div className={`w-full md:w-60 h-fit z-50 absolute bottom-0 md:top-10 md:right-7 flex flex-col p-1.5`}>

                <div className="w-full h-full p-3 bg-zinc-100 dark:bg-zinc-800 backdrop-blur-md rounded-xl text- shadow-lg md:shadow ">

                  {/* (modal): <sm> : upper */}
                  <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex md:hidden items-start justify-between space-x-4">
                    {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
                    <div className="w-full flex items-center space-x-2">
                        <i className="icon icon-ic_fluent_text_align_left_20_regular flex text-xl text-gray-700 bg-amber-500 rounded p-0.5"></i>
                      <div className="flex flex-col justify-start -space-y-1">
                        <h5 className="text- font-medium w-44 text-ellipsis overflow-hidden whitespace-nowrap">Page {`${params?.id}`}</h5>
                        <p className="text-xs opacity-70">
                          <span className="opacity-50">t/</span>
                          Shanks
                        </p>
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
                        <p className="font-medium">Archive page</p>
                      </button>
                    </section>
                    <section className="w-full flex flex-col space-y-1 ">
                      <button className="w-full flex items-center space-x-2 p-2 text-rose-500 hover:bg-rose-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                        <i className="icon icon-ic_fluent_delete_20_regular flex text-xl"></i>
                        <p className="font-medium">Delete</p>
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* (modal): overlay */}
          <div onClick={disableMore} className={`${isMoreVisible ? "md:flex hidden" : "hidden"} fixed md:absolute top-0 left-0 z-10 h-full w-full md:rounded-2xl bg-transparent/5 dark:bg-transparent/10`}></div>

        </div>
      </header>

      {/* (app page): content */}
      <section className="w-full h-full overflow-y-auto scrollbar">
        <div className="px-4 lg:px-10 py-1 leading-5">{pageContent && <EditorRenderer data={pageContent} />}</div>
      </section>

      {/* (app page): edit page btn */}
      <Link href={`/pg/${params?.id}/e`} title="Edit page" className="flex p-2 fixed z-40 bottom-3 right-3 md:bottom-7 md:right-7 lg:right-20 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg transition-all ease-in-out">
        <i className="icon icon-ic_fluent_edit_20_filled flex text-2xl"></i>
      </Link>
    </>
  )
}
