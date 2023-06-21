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

const EditorBlock = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});

export default function ViewPage() {

  const router = useRouter();
  const params = useParams();

  const [pageContent, setPageContent] = useState<OutputData>(JSON.parse(`{ "time": 1687344665422, "blocks": [ { "id": "j5X2QTtTgy", "type": "paragraph", "data": { "text": "make this the fact the known to the unknowing about that which is known amongst the known<br>" } } ], "version": "2.27.0" }`));
// `_start writing..._`

  return (

    // (app page)
    <>
      {/* (app page): header */}
      <header className="w-full bg-zinc-200 dark:bg-zinc-500/20 py-2 px-2 flex items-center justify-between md:rounded-t-2xl">
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
          <h1 className="text-lg font-semibold flex items-center bg-transparent/10dark:bg-zinc-500/20 pl-1 pr-3 rounded-full">
            Page {`${params.id}`}
          </h1>
        </div>

        {/* ~ header: more btn */}
        <button id="eachViewRowMore-btn" title="More" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
          <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-xl"></i>
        </button>
      </header>

      {/* (app page): content */}
      <section className="w-full h-full overflow-y-auto scrollbar">
        <div className="px-4 lg:px-10 py-2">{pageContent && <EditorRenderer data={pageContent} />}</div>
      </section>

      {/* (app page): edit page btn */}
      <Link href={`/pg/${params.id}/e`} title="Edit page" className="flex p-2 fixed z-40 bottom-3 right-3 md:bottom-7 md:right-20 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg transition-all ease-in-out">
        <i className="icon icon-ic_fluent_edit_20_filled flex text-2xl"></i>
      </Link>
    </>
  )
}
