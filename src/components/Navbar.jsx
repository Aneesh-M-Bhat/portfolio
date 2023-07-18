import React, { useState } from "react";
import texts from "../texts.json";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const goToSection = (id) => {
    const section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center w-full h-16 md:h-20 text-c3 bg-c1 fixed px-4 z-10 border-b-2 border-c4">
        <h1 className="text-4xl md:text-5xl font-signature ml-2">Aneesh</h1>
        <ul className="hidden md:flex">
          {texts.navs.map((link, id) => (
            <li
              key={id + 1}
              onClick={() => goToSection(link)}
              className="px-4 cursor-pointer capitalize font-medium text-c3 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 pr-4 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {texts.navs.map((link, id) => (
              <li
                key={id + 1}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <div className="bg-l1 shadow fixed w-full">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <button
            className="text-xl font-bold "
            onClick={() => goToSection("home")}
          >
            Portfolio
          </button>
          <ul className="flex items-center">
            {texts.navs.map((item, index) => (
              <li key={index}>
                <button
                  className="hover:text-gray-400 px-1 md:px-2 lg:px-3 font-medium"
                  onClick={() => goToSection(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
