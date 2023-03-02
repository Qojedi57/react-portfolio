import React from "react";
import connect4game from "../assets/connect 4 game.png";
import reactbooksapp from "../assets/react books app.png";
import { Link, Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: reactbooksapp,
      demoLink:"https://reactproject-booksapp-ihd4.vercel.app/",
      codeLink:"https://github.com/Qojedi57/reactproject-booksapp",
    },
    {
      id: 2,
      src: connect4game,
      demoLink:"https://eclectic-tanuki-5d58fc.netlify.app/",
      codeLink:"https://github.com/Qojedi57/connect4-game",
    },
  ];

  return (
    <Element name="projects">
    <div id="projects"
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            Projects
          </p>
          <p className="py-6">Check out some of my work right 
          here</p>
        </div>
        
        <div className="grid sm:grid-cols-2 mdZ:grid-cols-3 gap-8
        px-12 sm:px-0">
        {projects.map(({ id, src, codeLink,demoLink }) => (
          <div key={id} className="shadow-md shadow-gray-600 
          rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 
                duration-200 hover:scale-105">
                <a href={codeLink}>Code</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 
                duration-200 hover:scale-105">
                <a href={demoLink}>Demo</a>

                </button>
              </div>
            </div>
        ))}
      </div>
    </div>
    </div>
    </Element>
  );
};

export default Projects;
