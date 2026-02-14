import { UserRound, Link as LinkIcon, Github } from "lucide-react";

import img1 from "../assets/projects/BestTripMethods/btm1.png";
import img2 from "../assets/projects/BestTripMethods/btm2.png";
import img3 from "../assets/projects/BestTripMethods/btm3.png";
import img4 from "../assets/projects/BestTripMethods/btm4.png";


const imgs = [
  { src: img1},
  { src: img2},
  { src: img3},
  { src: img4},
]

const tools = [
  { name: "Html5"},
  { name: "Tailwind"},
  { name: "React"},
  { name: "Good practices"},
]

export function BestTripMethods() {
  return (
    <section className="mx-32 bg-pink-400">
      <header className="mb-4 flex flex-col items-center">
        <p className="text-xl font-bold mb-4 text-purple-500">
          ../projetos/Best_trip_methods
        </p>

        <h1 className="text-4xl font-bold mb-4 text-gray-50">Best Trip Methods</h1>

        <p className="text-lg mb-4 text-gray-300">
          A site that helps you find the best way to travel based on your preferences.
        </p>

      <div className="grid-cols-2 md:flex gap-4 space-y-2">
        {tools.map((tool) => (
          <p
            key={tool.name}
            className="bg-purple-500 text-gray-50 px-4 py-2 rounded-full inline-flex items-center justify-center text-base md:text-lg leading-tight whitespace-nowrap m-1"
          >
            {tool.name}
          </p>
        ))}
      </div>

      </header>

      <article className="mb-4">
        <section className="my-4 border-y border-gray-300 py-4 px-2 flex justify-between text-gray-300">
          <div className="flex bg-lime-800 gap-2">
            <UserRound className="h-5 w-5" />
            <p className="text-sm">User Profile</p>
          </div>

          <nav className="flex gap-6">
            <a
              href="https://best-trip-methods-pot1-jvwcgw8lz-pedros-projects-dd604c73.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-gray-50 transition-colors"
            >
              <LinkIcon className="h-5 w-5" />
              <span>Visit Site</span>
            </a>

            <a
              href="https://github.com/P3dr0PRR/Best-Trip-Methods"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-gray-50 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>Repository</span>
            </a>
          </nav>
        </section>
      </article>

      <article className="mb-4 flex flex-col gap-4">
        <header>
          <div className="border-l-8 border-purple-500 pl-4">
            <h2 className="text-4xl text-gray-50 group bg-lime-400 w-fit">
              <span className="hover:underline">Overview</span>
              <span className="mx-2 opacity-0 group-hover:opacity-100 text-purple-500 transition-opacity">
                #
              </span>
            </h2>
          </div>
          <p className="text-gray-300 mt-2">
            This project is a web application that helps users find the best travel methods based on their preferences.
          </p>
        </header>

        <div>
          <div className="border-l-8 border-purple-500 pl-4">
            <h2 className="text-xl text-gray-50 group bg-lime-400 w-fit">
              <span className="hover:underline">Tech Stack</span>
              <span className="mx-2 opacity-0 group-hover:opacity-100 text-purple-500 transition-opacity">
                #
              </span>
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 ml-6 mt-2 space-y-2">
            <li>Frontend: React 18 + Vite</li>
            <li>Styling: TailwindCSS</li>
            <li>Routing: React Router DOM</li>
            <li>Deployment: Vercel</li>
            <li>Icons: Lucide React, React Icons</li>
            <li>Notifications: React Hot Toast</li>
          </ul>

        </div>

        <div>
          <div className="border-l-8 border-purple-500 pl-4">
            <h2 className="text-xl text-gray-50 group bg-lime-400 w-fit">
              <span className="hover:underline">Key Features</span>
              <span className="mx-2 opacity-0 group-hover:opacity-100 text-purple-500 transition-opacity">
                #
              </span>
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 ml-6 mt-2 space-y-2">
            <li>Interactive Travel Quiz - Multi-step questionnaire to recommend transportation methods</li>
            <li>Smart Algorithm - Calculates best travel option (car, airplane, boat, or train) based on user preferences</li>
            <li>Personalized Results - Custom recommendations with detailed descriptions and images</li>
            <li>Responsive Design - Mobile-friendly interface with smooth transitions</li>
            <li>Performance Optimized - Image preloading for faster load times</li>
            <li>Multi-language Support - Available in Portuguese, English, Russian, and Chinese</li>
          </ul>
        </div>

        <div>
          <div className="border-l-8 border-purple-500 pl-4">
            <h2 className="text-xl text-gray-50 group bg-lime-400 w-fit">
              <span className="hover:underline">Technical Challenges</span>
              <span className="mx-2 opacity-0 group-hover:opacity-100 text-purple-500 transition-opacity">
                #
              </span>
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 ml-6 mt-2 space-y-2">
            <li>State Management - Managing quiz flow, question progression, and score tracking across multiple components</li>
            <li>Algorithm Design - Creating scoring logic to accurately recommend transportation based on weighted user preferences</li>
            <li>Performance Optimization - Implementing image preloading and GZIP compression to reduce load times</li>
            <li>Responsive Layout - Ensuring consistent UX across mobile, tablet, and desktop devices</li>
            <li>Multi-language Support - Configuring build system to support 4 languages with dynamic language switching</li>
            <li>Production Deployment - Setting up Vercel with proper routing and serverless configuration</li>
          </ul>
        </div>
      </article>

      <article className="mb-4">
        <header>
          <div className="border-l-8 border-purple-500 pl-4">
            <h2 className="text-2xl md:text-4xl text-gray-50 group bg-lime-400 w-fit">
              <span className="hover:underline">Demonstration images of the project</span>
              <span className="mx-2 opacity-0 group-hover:opacity-100 text-purple-500 transition-opacity">
                #
              </span>
            </h2>
          </div>
        </header>

        <div className="flex flex-col md:grid lg:grid-cols-2 gap-4 mt-4">
        
          {imgs.map((img, index) => (
            <img
              key={index}
              className="rounded-lg"
              src={img.src}
            />
          ))}
        
        </div>
      </article>
    </section>
  );
}
