"use client";

import Editor from "@/components/Editor";
import Avatar from "boring-avatars"
import Link from "next/link";

import { useRouter, useParams } from "next/navigation";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import { useEffect } from "react";

export default function ViewPage() {

  const router = useRouter();
  const params = useParams();

  const pageContent = `_start writing..._`

  return (

    // (app page)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-1">

      {/* (app page): header */}
      <header className="w-full bg-zinc-300 text-zinc-700 py-2 px-2 flex items-center justify-between md:rounded-t-2xl">
        <div className="flex items-center space-x-1.5">
          
          {/* ~ header: go back home link */}
          <button onClick={() => router.back()} title="Home" className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2 flex items-center">
            
            {/* ~ go back home link: icon */}
            <i className="icon icon-ic_fluent_chevron_left_20_filled flex text-xl"></i>

            {/* ~ go back home link: page avatar */}
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name={`${params.id}`}
                variant="bauhaus"
              />
            </div>
          </button>

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

      {/* (app page): content */}
      <textarea value={pageContent} readOnly={true} className="w-full h-full bg-transparent border-none focus:outline-none focus:ring-0 overflow-y-auto scrollbar rounded-b-2xl resize-none"/>
      {/*<section className="w-full h-full">
        <Editor data={pageContent}/>
      </section>*/}

      {/* (app page): edit page btn */}
      <Link href={`/pg/${params.id}/e`} title="Edit page" className="flex p-2 fixed bottom-3 right-3 md:bottom-7 md:right-20 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg transition-all ease-in-out">
        <i className="icon icon-ic_fluent_edit_20_filled flex text-2xl"></i>
      </Link>
    </main>
  )
}
