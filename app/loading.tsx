"use client";

import { useState } from "react";
import Avatar from "boring-avatars";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed bottom-0 right-0 w-full h-full bg-zinc-100 dark:bg-zinc-900 flex flex-col items- justify-center p-5">
      <div className="w-full md:w-5/12 lg:w-4/12 md:mx-auto h-5/6 flex flex-col justify-between">
        <div className="flex items-center p-2">
          <Avatar
            size={27}
            name="Pages"
            variant="bauhaus"
            colors={["#f59e0b", "#f43f5e", "#663399"]}
          />
          <h1 className="text-lg font-medium flex items-center space-x-2 py-1 pl-1 pr-3 rounded-full">Pages</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-2 space-y-1">
          <p className="">Loading</p>
          <div className="w-full px-10">
            <div className="p-1 w-full bg-rose-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
