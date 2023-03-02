import React, { useState } from "react";
import { Link, Element } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20 
   px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Eduardo</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium
            text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 
        md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center
             absolute top-0 left-0 w-full h-screen bg-gradient-to-b
             from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
             <Link  activeClass="active"
             to={link}
             spy={true}
             smooth={true}
             offset={50}
             duration={500} onClick={() => setNav(!nav)}>
            <li

              key={id}
              className="px-4 cursor-pointer capitalize py-6text-4xl"
            >
           {link} 
            </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
