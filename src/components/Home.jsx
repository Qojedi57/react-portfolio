import React from "react";
import Imageforlinkedin from "../assets/Image for linkedin.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link} from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-black
    via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xtl font-bold
          text-white pt-24"
          >
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience building and designing software. Currently, I love
            to work on web applications using technologies like React,
            Tailwind,Bootstrap and Chakra.
          </p>

          <div>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
            <button
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              <span>Projects</span>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Imageforlinkedin}
            alt="my profile image"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
