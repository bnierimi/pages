"use client"

import Editor from "@/components/Editor";
import Avatar from "boring-avatars"
import Link from "next/link";

import { useState } from "react"
import { useRouter, useParams } from "next/navigation";

export default function EditPage() {

  const router = useRouter();
  const params = useParams();

  const [pageContent, setPageContent] = useState(`_start writing..._`)

  const handleOnChange = (pageContent: any) => {
    setPageContent(pageContent.value)
  }

  const handleSubmit = () => {
    router.back()
  }

  return (

    // (app page)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-1">

      {/* (app page): header */}
      <header className="w-full bg-zinc-300 text-zinc-700 py-2 px-2 flex items-center justify-between md:rounded-t-2xl">
        <div className="flex items-center space-x-1.5">
          
          {/* ~ header: go back home link */}
          <div className="p-1 relative hover:bg-transparent/10dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2 flex items-center">
            
            {/* ~ go back home link: icon */}
            <i className="icon icon-ic_fluent_edit_20_filled flex text-xl opacity-30"></i>

            {/* ~ go back home link: page avatar */}
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name={`${params.id}`}
                variant="bauhaus"
              />
            </div>
          </div>

          {/* ~ header: page title */}
          <h1 className="text-xl font-semibold flex items-center bg-transparent/10dark:bg-zinc-500/20 py-1 pl-1 pr-3 rounded-full">
            <span className="">Page {`${params.id}`}</span>
          </h1>
        </div>

        {/* ~ header: more btn */}
        <button id="eachViewRowMore-btn" title="More" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-xl"></i>
        </button>
      </header>
      <header className="hidden w-full bg-zinc-300 text-zinc-700 py-2 px-2 flex items-center justify-between md:rounded-t-2xl">
        <div className="flex items-center space-x-1">

          {/* ~ header: page title */}
          <h1 className="text-xl font-semibold flex items-center bg-transparent/10dark:bg-zinc-500/20 py-1 pl-1 pr-3 rounded-full space-x-1.5">

            {/* ~ page title: page avatar */}
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name="Pages"
                variant="bauhaus"
              />
            </div>
            <span className="">Page {`${params.id}`}</span>
          </h1>
        </div>

        {/* ~ header: more btn */}
        <button id="eachViewRowMore-btn" title="More" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-xl"></i>
        </button>
      </header>

      {/* (app page): content */}
      <textarea value={pageContent} onChange={handleOnChange} className="w-full h-full bg-transparent border-none overflow-y-auto scrollbar rounded-b-2xl resize-none focus:outline-none focus:ring-1 focus:ring-violet-600"/>
      {/*<section className="w-full h-full">
        <Editor data={pageContent} editable={true}/>
      </section>*/}

      {/* (app page): edit page btn */}
      <button onClick={handleSubmit} title="Save page" className="flex p-2 fixed bottom-3 right-3 md:bottom-7 md:right-20 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg transition-all ease-in-out">
        <i className="icon icon-ic_fluent_checkmark_20_filled flex text-2xl"></i>
      </button>
    </main>
  )
}
