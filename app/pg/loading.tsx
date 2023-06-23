"use client";

import { useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed bottom-0 right-0 w-full h-full bg-zinc-100 dark:bg-zinc-900 flex flex-col items- justify-center p-5">
      <div className="w-full md:w-5/12 lg:w-4/12 md:mx-auto h-5/6 flex flex-col justify-between">
        <p className="">Loading</p>
      </div>
    </div>
  );
};

export default Loading;
