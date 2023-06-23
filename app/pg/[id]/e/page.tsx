"use client"

// import Editor from "@/components/Editor";

import { useState } from "react"
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter, useParams } from "next/navigation";

import Avatar from "boring-avatars"
import { OutputData } from "@editorjs/editorjs";
import axios from "axios";

const EditorBlock = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

export default function EditPage() {

  const router = useRouter();
  const params = useParams();


  const [pageContent, setPageContent] = useState<OutputData>(JSON.parse(`{ "time": 1687344665422, "blocks": [ { "id": "j5X2QTtTgy", "type": "paragraph", "data": { "text": "make this the fact the known to the unknowing about that which is known amongst the known<br>" } } ], "version": "2.27.0" }`));
// `_start writing..._`

  const handleOnChange = (pageContent: any) => {
    setPageContent(pageContent.value)
  }

  const handleSubmit = async ({id, content}: any) => {
    // const { data } = await axios.post("/api/posts", {
    //   id,
    //   content
    // })
    // console.log(data)
    router.back()
  }

  return (

    // (app page)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-1">

      {/* (app page): header */}
      <header className="w-full bg-zinc-200 dark:bg-zinc-500/20 py-2 px-2 flex items-center justify-between md:rounded-t-2xl">
        <div className="flex items-center">
          
          {/* ~ header: go back home link */}
          <button onClick={handleSubmit} title="Save page" className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2 flex md:hidden items-center mr-1.5">
            
            {/* ~ go back home link: icon */}
            <i className="icon icon-ic_fluent_checkmark_20_filled flex text-2xl opacity- dark:text-amber-500"></i>

            {/* ~ go back home link: page avatar */}
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name={`${params.id}`}
                variant="bauhaus"
              />
            </div>
          </button>
          <div className="p-1 relative rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2 md:flex hidden items-center mr-1.5">
            
            {/* ~ go back home link: icon */}
            <i className="icon icon-ic_fluent_edit_20_regular text-xl opacity- dark:text-amber-500 flex"></i>

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
          <h1 contentEditable className="text-lg font-medium flex items-center bg-transparent/10dark:bg-zinc-500/20 pl-1 pr-3 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2">
            Page {`${params.id}`}
          </h1>
        </div>

        <div className="flex items-center">

          {/* ~ header: more btn */}
          <button title="More" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-2xl"></i>
          </button>
        </div>

      </header>

      {/* (app page): content */}
      <section className="w-full h-full overflow-y-auto scrollbar px-4 lg:px-0">
        <EditorBlock data={pageContent} onChange={setPageContent} holder="editorjs-container" />
        {/* <div className="">
          {`${JSON.stringify(pageContent, null, " ")}`}
        </div> */}
      </section>

      {/* (app page): edit page btn */}
      <button onClick={handleSubmit} title="Save page" className="hidden md:flex p-2 fixed z-40 bottom-3 right-3 md:bottom-7 md:right-20 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg transition-all ease-in-out">
        <i className="icon icon-ic_fluent_checkmark_20_filled flex text-2xl"></i>
      </button>
    </main>
  )
}
