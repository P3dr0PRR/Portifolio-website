import {Projects} from "./Projects";
import {Contact} from "./Contact";
import {About} from "./About";
import { Github, Linkedin } from 'lucide-react';

export function Home() {
  return <>
          <section className="flex min-h-screen">
            <div className="flex flex-col bg-purple-300">
                <div className="flex flex-col justify-center items-start">
                <h1>Hello, I'm Pedro Paulo</h1>
                <p> I'm a Developer transforming ideas into reality on the digital world.</p>
                </div>
                <div className="flex justify-start items-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p className="ml-2">Open to opportunities</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/P3dr0PRR" target="_blank" rel="noopener noreferrer">
                    <Github />
                  </a>
                  <a href="https://www.linkedin.com/in/pedrocadev" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                  </a>
                </div>
              </div>
           
          </section>
          
          <About />
          <Projects />
          <Contact />
         </>;
}
