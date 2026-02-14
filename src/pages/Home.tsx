import { CodePreviewCard } from "./CodePreviewCars";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { About } from "./About";
import { Github, Linkedin } from "lucide-react";




export function Home() {
  return (
    <>
  <section className="bg-pink-600 mt-8 mb-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
  <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-40 xl:gap-80">
        <div className="flex flex-col p-4 border border-purple-900 items-center text-center w-fit mx-auto lg:mx-0 lg:items-start lg:text-left">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-3xl text-gray-50">Hello, I&apos;m Pedro Paulo</h1>
            <p className="text-gray-300">
              I&apos;m a Developer transforming ideas into reality on the digital world.
            </p>
          </div>
          <div className="flex justify-start items-center">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <p className="ml-2 text-gray-200">Open to opportunities</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/P3dr0PRR" target="_blank" rel="noopener noreferrer">
              <Github className="w-10 h-10 text-gray-50 hover:scale-110 transition-transform duration-300 hover:text-purple-400" />
            </a>
            <a href="https://www.linkedin.com/in/pedrocadev" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-10 h-10 text-gray-50 hover:scale-110 transition-transform duration-300 hover:text-purple-400" />
            </a>
          </div>
        </div>

        <div className="hidden lg:block flex-1 flex items-center justify-center">
          <CodePreviewCard />
        </div>
      </div>
</section>

      <About />
      <Projects />
      <Contact />
    </>
  );
}
