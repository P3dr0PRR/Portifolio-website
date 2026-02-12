export function About() {
  return (
    <section>
      <div className="flex justify-between px-6 gap-4 bg-lime-200">
        <img
          src="/imgs/Pedro.jpg"
          alt="Pedro"
          className="w-96 h-96 rounded-xl"
        />
        <div className="flex flex-col bg-sky-200 justify-between p-6">
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
            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">
              Html5
            </p>

            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">Css3</p>

            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">
              Tailwind
            </p>

            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">
              JavaScript
            </p>

            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">
              React
            </p>

            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">
              Good practices
            </p>

            <p className="text-lg bg-purple-500 px-4 py-1 rounded-full">
              TypeScript
            </p>
          </div>
        </div>
      </div>
 <p>carrousel here</p>
    </section>
  );
}
