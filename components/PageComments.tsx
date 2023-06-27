"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Avatar from "boring-avatars";
import Yuzaname from "./Yuzaname";

export default function PageComments() {

  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const handleMore = ()=>{
    setIsMoreVisible(true);
  }

  const disableMore = ()=>{
    setIsMoreVisible(false);
  }

  const handleCommentValue = (e: any)=>{
    setCommentValue(e.target.value);
  }

  const router = useRouter();
  const params = useParams();

  const commenters   = [
    "kagayaki", "archinade", "sanji", "rayleigh"
  ]
  const commentsData = [
    "nice this is cool!", "great stuff ;)", "nami-swwannn!", "keep rising kiddo!"
  ]

  return (
    <>
    
    {/* comment: btn */}
      <button onClick={handleMore} title="Comments" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
        <i className="icon icon-ic_fluent_chat_20_regular flex text-2xl"></i>
      </button>

    {/* comment: modal */}
    {/* needs fixing for the lg-screen */} 
        {/* (modal): overlay */}
        <div onClick={disableMore} className={`${isMoreVisible ? "flex" : "hidden"} flexmd: hidden fixed md:absolute z-10 top-0 right-0 w-full h-full md:rounded-2xl`}></div>
        
        {/* (modal): <sm body> */}
        <div className={`${isMoreVisible ? "flex" : "hidden"} w-full md:w-9/12 lg:w-6/12 h-3/5 z-50 fixed md:absolute bottom-0 right-0 md:bottom-0 flex flex-col md:p-1.5`}>

          <div className="w-full h-full p-3 bg-zinc-100 dark:bg-zinc-800 backdrop-blur-md rounded-t-xl md:rounded-xl text- shadow-lg md:shadow relative">

            {/* (modal): <sm> : upper */}
            <div className="w-full px-1.5 py-2 border-b border-b-gray-300 dark:border-b-gray-500/20 flex items-start justify-between space-x-4">
              {/* <!-- <p className="font-semibold">Modal 1</p> --> */}
              <div className="w-full flex items-center space-x-1">
                <i className="icon icon-ic_fluent_chat_20_regular flex text-2xl rounded-full p-0.5bg-transparent/20"></i>
                <p className="text-sm leading-5">Comments</p>
              </div>

              <button onClick={disableMore} className="p-1 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
                <i className="icon icon-ic_fluent_chevron_down_20_regular flex text-lg"></i>
              </button>
            </div>
            
            {/* (modal): <sm> : lower */}
            <div className="w-full pt-2 md:pt-0 space-y-3">
              <ul className="w-full space-y-1 px-2 py-2 overflow-y-auto scrollbar">
                {
                  commentsData.map((eachComment:any, key:any) => <li key={key} className="w-full">

                    {/* each comment */}
                    <div className="flex items-start space-x-">
                      <div className="py-1">
                        <Avatar
                          size={25}
                          name={commenters[key]}
                          variant="beam"
                        />
                      </div>
                      <div className="bg-transparent/1 rounded-lg p-1 space-y-0.5">
                        <Yuzaname title={commenters[key]} className="px-1 text-sm"/>
                        <summary className="bg-transparent/10 rounded-xl py-0.5 px-2 text-sm">
                          {eachComment}
                        </summary>
                      </div>
                    </div>
                  </li>)
                }
              </ul>
              <section className="w-full flex flex-col space-y-1 fixed bottom-0 right-0 bg-zinc-100 dark:bg-zinc-800">
                <form>
                  <div className="flex items-center rounded-full overflow-hidden space-x-2 px-2 py-0.5">
                    <input value={commentValue} onChange={handleCommentValue} type="text" name="commentInput" id="commentInput" placeholder="Write a comment..." className="w-full bg-transparent border border-zinc-300 dark:border-zinc-600  focus:outline-none focus:ring-1 focus:ring-violet-600 rounded-full py-1.5 px-2" />
                      {
                        !(commentValue.length === 0)
                        ? <button type="button" className="flex items-center bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full p-1.5">
                            <i className="icon icon-ic_fluent_send_20_regular flex text-xl"></i>
                          </button>
                        : <button type="button" className="flex items-center border border-amber-500 hover:border-amber-400 text-amber-500 rounded-full p-1.5">
                            <i className="icon icon-ic_fluent_heart_20_filled flex text-xl"></i>
                          </button>
                      }
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
    </>
  )
}
