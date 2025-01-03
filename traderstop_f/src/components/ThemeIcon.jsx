import React, { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeIcon = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

  return (
    <button
    //   onClick={toggleDarkMode}
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125 `}
    >
      <MoonIcon
        className={`h-8 w-8 cursor-pointer stroke-1`}
      />
    </button>
  );
};

export default ThemeIcon;