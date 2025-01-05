import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";


const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125 ${darkMode ? "shadow-gray-400 shadow-sm bg-gray-900" : null}`}
    >
      {darkMode ?  <SunIcon className="h-8 w-8 cursor-pointer stroke-1 fill-yellow-400 stroke-yellow-400 " /> :
        <MoonIcon
          className={`h-8 w-8 cursor-pointer stroke-1 stroke-neutral-400 `}
        />}
    </button>
  );
};

export default ThemeIcon;