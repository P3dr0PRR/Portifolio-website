import Pedro from "../assets/pedro/Pedro.jpg";
import CSS from "../assets/techs/CSSWhite.png";
import GoodPractices from "../assets/techs/GoodPraticesWhite.png";
import HTML from "../assets/techs/HTMLWhite.png";
import JS from "../assets/techs/JSWhite.png";
import React from "../assets/techs/REACTWhite.png";
import Tailwind from "../assets/techs/TAILWINDWhite.png";
import TS from "../assets/techs/TSWhite.png";

const techs = [
  { name: "HTML5", img: HTML },
  { name: "CSS3", img: CSS },
  { name: "Tailwind CSS", img: Tailwind },
  { name: "JavaScript", img: JS },
  { name: "React", img: React },
  { name: "Good Practices", img: GoodPractices },
  { name: "TypeScript", img: TS },
];
export function About() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-6 gap-4 bg-lime-400">
        <img
          src={Pedro}
          alt="Pedro"
          className="w-full h-auto sm:w-96 sm:h-96 rounded-xl"
        />
        <div className="flex flex-col justify-between p-6">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-gray-50">
              <span className="text-purple-500">../</span>About Me
            </h1>
            <p className="text-lg mb-4 text-gray-300">
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
          <div className="flex flex-wrap gap-4 mt-4">
            {techs.map((tech) => (
              <p
                key={tech.name}
                className="bg-purple-500 text-gray-50 px-4 py-2 rounded-full inline-flex items-center justify-center text-base md:text-lg leading-tight whitespace-nowrap"
              >
                {tech.name}
              </p>
            ))}
            
          </div>
        </div>
      </div>

      <section aria-labelledby="skills-title" className="my-4 bg-gray-400">
        <h2 id="skills-title" className="sr-only">
          Technical Skills
        </h2>

        <div className="flex gap-2 justify-evenly">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="border border-gray-300 rounded-md flex flex-col items-center"
            >
              <img
                src={tech.img}
                alt={`${tech.name} logo`}
                className="w-30 h-24"
              />
              <p className="text-gray-300 text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
