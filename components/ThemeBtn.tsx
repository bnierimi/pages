"use client";

import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme:dark)").matches)) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(!isDarkMode);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [])
  
  const handleMode = ()=>{
    localStorage.theme = isDarkMode ? "light" : "dark"
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    // on:click={handleMode}
    <button onClick={handleMode} title="Theme" className="p-0.5 relative hover:bg-transparent/10 dark:hover:bg-gray-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 overflow-hidden">
    {
      isDarkMode
        ? <i className={`relative icon icon-ic_fluent_weather_sunny_20_regular flex text-xl rounded-full bg-amber-500 text-gray-700 p-0.5 transition-all ease-in-out`}></i>
        : <i className={`relative icon icon-ic_fluent_weather_moon_20_regular flex text-xl rounded-full bg-gray-300 p-0.5 transition-all ease-in-out`}></i>
    }
    {/* {
      isDarkMode
        ? <i className={`relative icon icon-ic_fluent_weather_sunny_20_regular flex text-xl rounded-full bg-amber-500 text-gray-700 p-0.5 transition-all ease-in-out ${ isDarkMode ? "translate-x-4" : "-translate-x-4"}`}></i>
        : <i className={`relative icon icon-ic_fluent_weather_moon_20_regular flex text-xl rounded-full bg-gray-300 p-0.5 transition-all ease-in-out ${ isDarkMode ? "translate-x-4" : "-translate-x-0"}`}></i>
    } */}
    
    </button>
  )
}
