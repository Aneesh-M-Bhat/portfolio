import React from "react";
import { Section } from "./Section";

const Home = () => {
  return (
    <Section id="home" bg="bg-gradient-to-b from-c1 to-c3">
      <>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-c4">
          Hi, I'm Aneesh M Bhat
        </h1>
        <p className="text-sm md:text-lg mb-8 text-c5 opacity-60">
          I'm a Freelance Developer with expertise in Frontend Development,
          Backend Development, and Mobile App Development.
        </p>
        {/* <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700">
              View Projects
            </button> */}
      </>
    </Section>
  );
};

export default Home;
