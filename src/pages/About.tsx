export function About() {
  return (
    <section>
      <div className="flex justify-between px-6 gap-4 bg-lime-800">
        <img
          src="/imgs/Pedro.jpg"
          alt="Pedro"
          className="w-96 h-96 rounded-xl"
        />
        <div className="flex flex-col bg-sky-800 justify-between p-6">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-50"><span className="text-purple-500">../</span>About Me</h1>
            <p className="text-lg mb-4">
              Hello! I'm Pedro, a passionate software developer with a love for
              creating innovative solutions. With experience in various
              programming languages and frameworks, I enjoy tackling complex
              problems and building user-friendly applications. In my free time,
              I like to explore new technologies. In these days I'm studying
              more <span className=""></span> and more about{" "}
              <span className="font-bold text-purple-500">React</span> and{" "}
              <span className="font-bold text-purple-500">TypeScript</span>.
            </p>
          </div>
          <div className="items-end flex space-x-4">
            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-1 rounded-full">
              Html5
            </p>

            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-1 rounded-full">Css3</p>

            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50  px-4 py-1 rounded-full">
              Tailwind
            </p>

            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-1 rounded-full">
              JavaScript
            </p>

            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-1 rounded-full">
              React
            </p>

            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-1 rounded-full">
              Good practices
            </p>

            <p className="text-lg bg-purple-500 hover:bg-purple-400 text-gray-50 px-4 py-1 rounded-full">
              TypeScript
            </p>
          </div>
        </div>
      </div>

      <section aria-labelledby="skills-title" className="my-4">
        <h2 id="skills-title" className="sr-only">
          Technical Skills
        </h2>

        <ul className="bg-transparent flex justify-evenly">
          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/HTMLWhite.png" alt="HTML5 logo" />
            <span className="text-gray-50">HTML5</span>
          </li>

          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/CSSWhite.png" alt="CSS3 logo" />
            <span className="text-gray-50">CSS3</span>
          </li>

          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/TAILWINDWhite.png" alt="Tailwind CSS logo" />
            <span className="text-gray-50">Tailwind CSS</span>
          </li>

          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/JSWhite.png" alt="JavaScript logo" />
            <span className="text-gray-50">JavaScript</span>
          </li>

          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/REACTWhite.png" alt="React logo" />
            <span className="text-gray-50">React</span>
          </li>

          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/GoodPraticesWhite.png" alt="Good practices badge" />
            <span className="text-gray-50">Good Practices</span>
          </li>

          <li className="border border-gray-300 rounded-md flex flex-col items-center">
            <img className="w-30 h-24" src="/imgs/TSWhite.png" alt="TypeScript logo" />
            <span className="text-gray-50">TypeScript</span>
          </li>
        </ul>
      </section>
    </section>
  );
}
