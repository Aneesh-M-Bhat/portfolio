import React, { useState } from "react";
import { Section } from "./Section";
import H2 from "./H2";
import texts from "../texts.json";
import Project from "./Project";
import { useWindowDimensions } from "./useWindowDimensions";

const Projects = () => {
  const [pgNum, setPgNum] = useState(0);
  const windowDimensions = useWindowDimensions();

  const goToProject = (id) => {
    const section = document.getElementById("project-" + id);
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  const pageClickHandler = (pg) => {
    setPgNum(pg);
    goToProject(pg);
  };

  const getBg = (pg) => {
    if (windowDimensions.width >= 1024) {
      if (pgNum == texts.projects.length / 2 - 1)
        return pgNum == pg || pgNum - 1 == pg ? "bg-c5" : "bg-c1";
      return pgNum == pg || pgNum + 1 == pg ? "bg-c5" : "bg-c1";
    }
    return pgNum == pg ? "bg-c5" : "bg-c1";
  };

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
                  <Project
                    key={index}
                    id={"project-" + index}
                    title={item.name}
                    about={item.about}
                  />
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
        <div className="w-full flex">
          <div className="mx-auto">
            {[...Array(texts.projects.length / 2).keys()].map((pg) => (
              <button className="p-2" onClick={() => pageClickHandler(pg)}>
                <div
                  className={"px-1 rounded-lg text-sm mx-1 py-1 " + getBg(pg)}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </>
    </Section>
  );
};

export default Projects;
