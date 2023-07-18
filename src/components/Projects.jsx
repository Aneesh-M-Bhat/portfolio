import React from "react";
import { Section } from "./Section";
import H2 from "./H2";
import texts from "../texts.json";
import Project from "./Project";

const Projects = () => {
  return (
    <Section id="projects" bg="bg-gradient-to-b from-c1 to-c3">
      <>
        <H2 title="My Projects" />
        <div className="overflow-x-scroll overflow-y-scroll scrollbar-hide snap-x snap-mandatory">
          <div className="flex flex-nowrap -mx-3">
            {texts.projects
              .filter((i, index) => index % 2 == 0)
              .map((item, index) => {
                return (
                  <Project key={index} title={item.name} about={item.about} />
                );
              })}
          </div>
          <div className="flex flex-nowrap -mx-3">
            {texts.projects
              .filter((i, index) => index % 2 != 0)
              .map((item, index) => {
                return (
                  <Project key={index} title={item.name} about={item.about} />
                );
              })}
          </div>
        </div>
      </>
    </Section>
  );
};

export default Projects;
