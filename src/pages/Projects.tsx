import { Backpack, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section>
      <header className="flex flex-col items-start gap-4 mb-6 font-bold mx-6 bg-pink-600 border-b-2 border-stone-200 pb-4 text-gray-50">
        <h2 className="text-xl">
          <span className="text-purple-500">../</span>featured:
        </h2>
        <h3 className="text-4xl ">Featured Projects</h3>
      </header>

      <div className="flex items-center justify-center gap-4 ">
        <div className="w-1/3 h-64 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg m-4 border border-gray-400 items-center justify-center flex flex-col text-gray-50">
          <div className="flex items-center justify-center ">
            <Backpack className="w-12 h-12 text-purple-400 mt-4 " />
            <p className=" mt-4 text-5xl">Best trip methods</p>
          </div>

          <p className=" mt-2 text-md">
            This site help you find the best method to travel for you
          </p>
        </div>

        <div className="flex-1 border border-gray-400 w-1/3 h-64 mr-4 rounded-lg bg-transparent">
          <div className="">
            <h2 className=" mt-4 text-5xl">Best trip methods</h2>
          </div>
          <div className="">
            <p className=" mt-2 text-md">
              This site help you find the best method to travel for you
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <p className=" mt-2 text-md">tools:</p>
          </div>
          <div className="flex justify-between items-center gap-4 p-4">
           <Link to="/best-trip-methods" className="border-2 border-gray-400 rounded-md p-2 bg-transparent text-md">
              See Project
            </Link>
            <div className="flex gap-2 justify-center items-center">
              <LinkIcon className="text-xs"></LinkIcon>
              <a
                href="https://best-trip-methods-pot1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md border-b-2 border-b-transparent hover:border-b-purple-500"
              >
                Site Online
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 ">
        <div className="flex-1 border border-gray-400 w-1/3 h-64 ml-4 rounded-lg bg-transparent">
          <div className="">
            <h2 className=" mt-4 text-5xl">Best trip methods</h2>
          </div>
          <div className="">
            <p className=" mt-2 text-md">
              This site help you find the best method to travel for you
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <p className=" mt-2 text-md">tools:</p>
          </div>
          <div className="flex justify-between items-center gap-4 p-4">
            <Link to="/best-trip-methods" className="border-2 border-gray-400 rounded-md p-2 bg-transparent text-md">
              See Project
            </Link>
            <div className="flex gap-2 justify-center items-center">
              <LinkIcon className="text-xs"></LinkIcon >
              <a
                href="https://best-trip-methods-pot1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md border-b-2 border-b-transparent hover:border-b-purple-500"
              >
                Site Online
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/3 h-64 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg m-4 border border-gray-400 items-center justify-center flex flex-col text-gray-50">
          <div className="flex items-center justify-center ">
            <Backpack className="w-12 h-12 text-purple-400 mt-4 " />
            <p className=" mt-4 text-5xl">Best trip methods</p>
          </div>

          <p className=" mt-2 text-md">
            This site help you find the best method to travel for you
          </p>
        </div>
      </div>
    </section>
  );
}
