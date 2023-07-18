import React from "react";
import { Section } from "./Section";
import H2 from "./H2";
import texts from "../texts.json";

const About = () => {
  return (
    <Section id="about" bg="bg-gradient-to-b from-c3 to-c1">
      <>
        <H2 title="About Me" />
        <p className="text-sm md:text-lg mb-8 px-1 text-c5 opacity-60">
          {texts.aboutDesc}
        </p>
      </>
    </Section>
  );
};

export default About;
