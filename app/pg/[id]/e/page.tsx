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
      <header className="w-full px-2 md:rounded-t-2xl">
        <div className="pt-2 pb-1 border-bborder-b-gray-300dark:border-b-gray-500/20 flex items-center justify-between">

          <div className="flex items-center">
            
            {/* ~ header: go back home link */}
            <button onClick={handleSubmit} title="Save page" className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2 flex md:hidden items-center mr-1.5">
              
              {/* ~ go back home link: icon */}
              <i className="icon icon-ic_fluent_checkmark_20_filled flex text-2xl opacity- dark:text-amber-500"></i>

              {/* ~ go back home link: page avatar */}
              <div className="overflow-hidden rounded-full">
                <Avatar
                  size={27}
                  name={`${params?.id}`}
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
                  name={`${params?.id}`}
                  variant="bauhaus"
                />
              </div>
            </div>

            {/* ~ header: page title */}
            {/* make editable onClick */}
            <h1 className="text-lg font-medium flex items-center bg-transparent/10dark:bg-zinc-500/20 pl-1 pr-3 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2">
              Page {`${params?.id}`}
            </h1>
          </div>

          <div className="flex relative items-center">

            {/* ~ header: more btn */}
            {/* <button onClick={handleMore} title="More" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-2xl"></i>
            </button> */}
          </div>
            
            {/* (modal): <sm> */}
            <div className={`${isMoreVisible ? "flex" : "hidden"} fixed md:absolute left-0 top-0 md:top-auto z-50 h-full w-full md:rounded-2xl`}>
              {/* (modal): overlay */}
              <div onClick={disableMore} className="absolute w-full h-full md:rounded-2xl bg-transparent/10 dark:bg-transparent/20 md:bg-transparent md:dark:bg-transparent"></div>
              
              {/* (modal): <sm body> */}
              <div className={`w-full md:w-60 h-fit z-50 absolute bottom-0 md:right-10 lg:right-10 md:top-5 flex flex-col p-1.5`}>

                <div className="w-full h-full p-3 bg-zinc-100 dark:bg-zinc-800 backdrop-blur-md rounded-xl text- shadow-lg md:shadow ">

                  {/* (modal): <sm> : upper */}
                  <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex md:hidden items-start justify-between space-x-4">
                    {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
                    <div className="w-full flex items-center space-x-2">
                        <i className="icon icon-ic_fluent_text_align_left_20_regular flex text-xl text-gray-700 bg-amber-500 rounded p-0.5"></i>
                      <div className="flex flex-col justify-start -space-y-2">
                        <h5 className="text- font-medium w-44 text-ellipsis overflow-hidden whitespace-nowrap">Page {`${params?.id}`}</h5>
                        <p className="text-xs opacity-70 leading-5">t/Shanks</p>
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
        </div>

      </header>

      {/* (app page): content */}
      <section className="w-full h-full overflow-y-auto scrollbar px-4 md:px-2 lg:px-0">
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
