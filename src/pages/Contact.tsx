import { Github, Linkedin, Briefcase } from 'lucide-react';

export function Contact() {
  return (
    <section className="mx-6 space-y-4 m-4">
      <header className="flex flex-col items-start gap-4 mb-6 font-bold bg-pink-600 border-b-2 border-gray-400 pb-4 text-gray-50">
        <h2 className="text-xl">
          <span className="text-purple-500">../</span>Contact:
        </h2>
        <h3 className="text-4xl ">Contact</h3>
      </header>

      <article>
        <h1 className="text-7xl font-bold w-[50%] text-gray-50">
          Let's{" "}
          <span className="mx-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Build
          </span>{" "}
          something togueder
        </h1>
        <p className="text-md mt-4 text-gray-300">
          Open to oportunities, collaborations, and freelance work. Feel free to
          reach out for any inquiries or project proposals.
        </p>
      </article>

      <article className="border border-purple-900 rounded-md p-4 space-y-4">
        <header className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-xl mb-4">
          // Send message
        </header>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-full space-y-2">
            <p className="text-gray-300">NAME</p>
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-md p-2 mb-4 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:bg-gray-800 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col w-full space-y-2">
            <p className="text-gray-300">EMAIL</p>
            <input
              type="text"
              placeholder="your@email.com"
              className="border border-gray-300 rounded-md p-2 mb-4 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:bg-gray-800 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col w-full space-y-2">
          <p className="text-gray-300">Subject</p>
          <input
            type="text"
            placeholder="Topic of your message"
            className="border border-gray-300 rounded-md p-2 mb-4 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:bg-gray-800 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-col w-full space-y-2">
          <p className="text-gray-300">Message</p>
          <textarea
            placeholder="Tell me your idea or project proposal"
            className="border border-gray-300 rounded-md p-2 mb-4 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:bg-gray-800 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <button className="bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-2 rounded-md transition-colors">
          Send Message
        </button>
      </article>

      <article className="border border-purple-900 rounded-md p-4 flex items-center space-x-4">
        <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-5 h-5 rounded-full flex items-center justify-center">
        </div>

        <div className="flex flex-col">
          <h3 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-xl mb-4">Disponible to work</h3>
          <p className="text-gray-300 text-xs">
            I'm currently open to new opportunities and collaborations. If you.
          </p>
        </div>
      </article>

      <article className="border border-purple-900 rounded-md p-4 flex flex-col items-center">
        <a href="https://github.com/P3dr0PRR" target="_blank" rel="noopener noreferrer" className="p-4 flex justify-between w-full border-b border-gray-700 ">
          <div className="p-2 rounded-md border">
            <Github size={24} className="text-gray-300" />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-300 text-sm">GitHub</p>
            <p className="text-gray-300 text-xs">github.com/P3dr0PRR</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/pedrocadev" target="_blank" rel="noopener noreferrer" className="p-4 flex justify-between w-full border-t border-gray-700 ">
          <div className="p-2 rounded-md border">
            <Linkedin size={24} className="text-gray-300" />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-300 text-sm">LinkedIn</p>
            <p className="text-gray-300 text-xs">linkedin.com/in/pedrocadev</p>
          </div>
        </a>
      </article>

      <article className="border border-purple-900 rounded-md p-4 flex flex-col items-center">
<header className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-xl mb-4">
          <Briefcase size={24} className="inline-block mr-2" /> Projects tipes
        </header>
         <div className="flex gap-4 flex-wrap justify-center">
          <p className="text-lg bg-purple-700 hover:bg-purple-600 text-gray-50 px-2 py-1 rounded-full">
              Freelance
            </p>
                <p className="text-lg bg-purple-700 hover:bg-purple-600 text-gray-50 px-2 py-1 rounded-full">
              Full-time
            </p>
             <p className="text-lg bg-purple-700 hover:bg-purple-600 text-gray-50 px-2 py-1 rounded-full">
              UI/UX
            </p>
             <p className="text-lg bg-purple-700 hover:bg-purple-600 text-gray-50 px-2 py-1 rounded-full">
              FRONT-END
            </p>
             <p className="text-lg bg-purple-700 hover:bg-purple-600 text-gray-50 px-2 py-1 rounded-full">
             StartUp
            </p>
             <p className="text-lg bg-purple-700 hover:bg-purple-600 text-gray-50 px-2 py-1 rounded-full">
              OpenSource
            </p>
            </div>
      </article>
    </section>
  )
}
