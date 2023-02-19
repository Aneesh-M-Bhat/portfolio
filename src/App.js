import Project from "./components/Project";
import { useState } from "react";
import Skill from "./components/Skill";
import H2 from "./components/H2";
import texts from "./texts.json";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="h-screen overflow-scroll snap-y snap-mandatory scrollbar-hide">
      <div className="bg-white shadow fixed w-full">
        <div className="container mx-auto px-6 text-gray-800 py-3 flex justify-between items-center">
          <button className="text-xl font-bold ">Portfolio</button>
          {/* <div className="md:hidden">Fix</div> */}
          <ul className="hidden md:flex md:items-center">
            {texts.navs.map((item, index) => (
              <li key={index}>
                <button className="hover:text-gray-400 px-3 py-2 font-medium">
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Section
        bg="bg-gray-100 "
        getContent={() => (
          <div className="container m-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Hi, I'm Aneesh M Bhat
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              I'm a Freelance Developer with expertise in Frontend Development,
              Backend Development, and Mobile App Development.
            </p>
            {/* <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700">
              View Projects
            </button> */}
          </div>
        )}
      />
      <Section
        bg="bg-blue-100"
        getContent={() => (
          <div className="container m-auto px-6">
            <H2 title="About Me" />
            <p className="text-lg text-gray-700 mb-8 px-1">{texts.aboutDesc}</p>
          </div>
        )}
      />
      <Section
        bg="bg-green-100"
        getContent={() => (
          <div className="container m-auto px-6">
            <H2 title="Experience" />
            <div className="text-lg px-1 text-gray-700 mb-8 flex flex-wrap">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-3/4">
                      <p className="font-bold">
                        <span className="font-semibold">Intern @</span>Red Hat
                      </p>
                    </td>
                    <td className="w-1/4 text-right">
                      <p>2023</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-3/4">
                      <p className="font-bold">
                        <span className="font-semibold">Intern @</span>Kakunje
                        Software
                      </p>
                    </td>
                    <td className="w-1/4 text-right">
                      <p>2022</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-3/4">
                      <p className="font-bold">
                        <span className="font-semibold">Intern @</span>
                        Klientship Technologies
                      </p>
                    </td>
                    <td className="w-1/4 text-right">
                      <p>2022</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <H2 title="Education" />
            <div className="text-lg px-1 text-gray-700 mb-8 flex flex-wrap">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="w-3/4">
                      <p className="font-bold">
                        AJ Institute of Engineering & Technology
                      </p>
                      <p className="italic">
                        Bachelor of Engineering in Computer Science
                      </p>
                    </td>
                    <td className="w-1/4 text-right">
                      <p> 2019 - 2023</p>
                      <p className="font-bold">9.06/10</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <p className="font-bold">
                        National Institute of Open Schooling
                      </p>
                      <p className="italic">Senior Secondary Education </p>
                    </td>
                    <td className="w-fit text-right">
                      <p> 2017 - 2019</p>
                      <p className="font-bold"> 7.6/10</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-3/4">
                      <p className="font-bold">Mount Carmel Central School</p>
                      <p className="italic">Secondary Education</p>
                    </td>
                    <td className="w-1/4 text-right">
                      <p> 2016 - 2017</p>
                      <p className="font-bold">10/10</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      />
      <Section
        bg="bg-red-100"
        getContent={() => (
          <div className="container m-auto px-6">
            <H2 title="Skills" />
            <div className="text-lg text-gray-700 mb-8 flex flex-wrap">
              {texts.skills.map((item, index) => (
                <Skill key={index} title={item.title} />
              ))}
            </div>
          </div>
        )}
      />
      <Section
        bg="bg-yellow-100"
        getContent={() => (
          <div className="container w-full m-auto px-6">
            <H2 title="My Projects" />
            <div className="overflow-x-scroll">
              <div className="flex flex-nowrap -mx-3">
                {texts.projects
                  .filter((i, index) => index % 2 == 0)
                  .map((item, index) => {
                    return (
                      <Project
                        key={index}
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
                      <Project
                        key={index}
                        title={item.name}
                        about={item.about}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="container">
              <button></button>
            </div>
          </div>
        )}
      />
      <footer className="bg-gray-800 text-white fixed bottom-0 w-full">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-xs">DEVELOPEDBYAMB</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
