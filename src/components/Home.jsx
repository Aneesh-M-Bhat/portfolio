import React from "react";
import { Section } from "./Section";
import TypeWriter from "./Typewriter";

const Home = () => {
  const hats = [
    { suffix: "Aneesh M Bhat" },
    {
      prep: "a",
      suffix: "Web Developer",
    },
    {
      prep: "an",
      suffix: "App Developer",
    },
    {
      prep: "a",
      suffix: "Competitive Programmer",
    },
    {
      prep: "a",
      suffix: "Developer at RedHat",
    },
  ];
  return (
    <Section id="home" bg="bg-gradient-to-b from-c1 to-c3">
      <>
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-2 text-c4">
          Hi, I'm Aneesh M Bhat
        </h1> */}
        <TypeWriter hats={hats} prefix={"I'm"} />
        {/* <p className="text-sm md:text-lg mb-8 text-c5 opacity-60">
          I'm a Fullstack Developer with expertise in Frontend Development,
          Backend Development, and Mobile App Development.
        </p> */}
        {/* <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700">
              View Projects
            </button> */}
      </>
    </Section>
  );
};

export default Home;
