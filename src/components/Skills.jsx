import React from "react";
import Skill from "./Skill";
import texts from "../texts.json";
import { Section } from "./Section";
import H2 from "./H2";

const Skills = () => {
  return (
    <Section id="skills" bg="bg-gradient-to-b from-c3 to-c1">
      <>
        <H2 title="Skills" />
        <div className="text-lg mb-8 flex flex-wrap">
          {texts.skills.map((item, index) => (
            <Skill key={index} title={item.title} />
          ))}
        </div>
      </>
    </Section>
  );
};

export default Skills;
