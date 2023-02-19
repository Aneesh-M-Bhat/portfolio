import Project from "./components/Project";
import { useState } from "react";
import Skill from "./components/Skill";
import H2 from "./components/H2";
import texts from "./texts.json";

function App() {
  const navButtons = (content) => {
    return (
      <button className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
        {content}
      </button>
    );
  };
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div>
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <button className="text-xl font-bold text-gray-800">
              Portfolio
            </button>
            {/* <div className="md:hidden">Fix</div> */}
          </div>
          <ul className="hidden md:flex md:items-center">
            {texts.navs.map((item, index) => (
              <li key={index}>{navButtons(item.name, item.link)}</li>
            ))}
          </ul>
        </div>
      </div>
      <header className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hi, I'm Aneesh M Bhat
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            I am a freelance developer with expertise in frontend development,
            backend development, and mobile app development.
          </p>
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700">
            View Projects
          </button>
        </div>
      </header>
      <div className="container mx-auto px-6 py-10">
        <H2 title="About Me" />
        <p className="text-lg text-gray-700 mb-8 px-1">{texts.aboutDesc}</p>
        <H2 title="Skills" />
        <div className="text-lg text-gray-700 mb-8 flex flex-wrap">
          {texts.skills.map((item, index) => (
            <Skill key={index} title={item.title} />
          ))}
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
        <H2
          title="My Projects"
          setSeeAll={setSeeAll}
          seeAll={seeAll}
          count={texts.projects.length}
        />
        <div className="flex flex-wrap -mx-3">
          {texts.projects.map((item, index) => {
            if (seeAll || index < 4)
              return (
                <Project key={index} title={item.name} about={item.about} />
              );
          })}
        </div>
      </div>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-xs">
            {/* &copy; 2023 Aneesh M Bhat. All rights reserved. */}
            DEVELOPEDBYAMB
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
