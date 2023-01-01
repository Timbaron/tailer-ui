import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

export const CallToAction = () => {
  return (
    <div className="container mx-auto -m-5">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center gap-5">
          <h1 className="text-left text-5xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 md:text-8xl">
            Prebuilt TailwindCss Components for faster development
          </h1>
          <p className="text-left text-2xl w-auto mt-3 text-gray-500 ">
            Tailer UI is a collection of easily accessible and reusable web
            application components. Provides responsive and color mode flexible
            components that are ready to use, allowing you to design faster than
            ever before.
          </p>
        </main>

        <div className="flex flex-row justify-center w-full flex-1 px-20 text-center gap-10">
          <button className="bg-gradient-to-r from-purple-400 to-blue-600 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 w-44 h-14 rounded-lg">
            Get Started
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-blue-600 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 w-44 h-14 rounded-lg">
            <div className="flex justify-center items-center gap-5 ">
            <FaGithub size={25} /> GitHub
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
