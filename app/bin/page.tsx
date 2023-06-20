"use client";

import Link from "next/link";
import Avatar from "boring-avatars";

import RowBinBtn from "@/components/RowBinBtn";
import { useRouter} from "next/navigation";

export default function Home() {

  const router = useRouter();

  const dbData = [
    "past", "itami o", "sekai itami o", "going back", "egypt's life", "jobless re:", "brink",
    "daki", "felony"
  ];

  return (

    // (app page)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-4">
      
      {/* (app page): header */}
      <header className="w-full relative bg-zinc-200dark:bg-zinc-500/10 pt-2 pb-1 px-2 flex md:hidden items-center justify-between rounded-b-2xl">
        <div className="flex items-center space-x-4">
          
          {/* ~ header: go back home link */}
          <button onClick={() => router.back()} title="Back" className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 space-x-2 flex items-center">
            
            {/* ~ go back home link: icon */}
            <i className="icon icon-ic_fluent_chevron_left_20_filled flex text-xl"></i>
          </button>

          {/* ~ header: title */}
          <h1 className="text-xl font-medium flex items-center space-x-2 bg-transparent/10dark:bg-zinc-500/20 p-1 rounded-full">
            <span className="">Bin</span>
          </h1>
        </div>

        <div className="flex items-center space-x-2"></div>
      </header>
      
      {/* (app page): list of pages */}
      <section className="w-full overflow-y-auto scrollbar">
        
        {/* ~ list of pages: display pages */}
        <ul className={`h-full w-full pb-10 py-1 space-y-1`}>
          {
            dbData.map((eachData, key):any => <li key={key} className="w-full">
              <RowBinBtn data={{id: key, title: eachData}}/>
            </li>)
          }
        </ul>
        
      </section>

    </main>
  )
}

