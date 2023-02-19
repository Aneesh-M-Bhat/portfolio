import H2 from "./H2";
import Project from "./Project";
import Skill from "./Skill";
import { useState } from "react";
export default function About() {
  const [seeAll, setSeeAll] = useState(false);

  const desc =
    "I'm a developer who loves exploring new domains & is avidly interested in technology. My primary language of choice is JavaScript for development & Java for Competitive Programming. I enjoy solving coding problems a lot. I'm also someone who loves craft, drawing, reading books, playing games & food. I'm always up for exploring anything new. My interests are ever-expanding. Hit me up if you want someone to do any project or just have a talk.";
  // additional: I am skilled in creating user interfaces, layouts, and designs using HTML, CSS, and JavaScript, as well as creating server-side logic, database management, and APIs using programming languages and frameworks such as PHP, Ruby, Python, Java, Django, Laravel, or Node.js. I have also developed mobile applications for iOS or Android devices using programming languages like Swift, Kotlin, or Java. As a freelancer, I have worked on various projects for clients and am capable of working independently to manage projects from start to finish.
  const projects = [
    {
      name: "Temple Finance",
      about: [
        "Concurrent Receipt Generation",
        "Search & Filtering",
        "Installed & Setup LAN on premise",
        "Internship/Client Project",
      ],
    },
    {
      name: "AAKAR 2022 Fest Portal",
      about: [
        "PHP & Laravel",
        "UI/UX Focus",
        "User role-based UI",
        "Responsive",
      ],
    },
    {
      name: "28 Card Game",
      about: [
        "Deployed using S3 & EC2",
        "Publish-Subscribe Model",
        "Web Sockets",
        "Designed using OOP",
      ],
    },
    {
      name: "Library DBMS",
      about: [
        "DBMS Project",
        "CRUD Functions",
        "MERN Stack",
        "Extensive Documentation",
      ],
    },
    {
      name: "HMK Fitness Portfolio",
      about: [
        "Single Page Website",
        "UI/UX Focus",
        "Internship/Client Project",
        "Portfolio Website",
      ],
    },
    {
      name: "Snake Game",
      about: [
        "Computer Graphics Project",
        "OpenGL & C++",
        "Designed using OOP",
        "2D Game",
      ],
    },
    {
      name: "External Camera App",
      about: [
        "Camera2API",
        "AndroidStudio + Java",
        "Pictures & Videos with Storage",
        "Supports External Camera",
      ],
    },
    {
      name: "Farewell Feud Portal",
      about: [
        "Portal for conducting Farewell Feud",
        "Game Logic Focus",
        "Frontend Project",
        "UI/UX Focus",
      ],
    },

    {
      name: "Crops DBMS",
      about: ["TailwindCSS", "DBMS Project", "CRUD Functions", "MERN Stack"],
    },
    {
      name: "Bike Platform Game",
      about: [
        "Computer Graphics Project",
        "OpenGL & C++",
        "Designed using OOP",
        "2D Game",
      ],
    },
    {
      name: "ToDo List",
      about: [
        "Built Different Implementations",
        "App using Jetpack Compose",
        "Web using ReactJS",
        "Frontend Project",
      ],
    },
    {
      name: "House Rental DBMS",
      about: [
        "React-Bootstrap",
        "DBMS Project",
        "CRUD Functions",
        "MERN Stack",
      ],
    },
    {
      name: "Internal Camera App",
      about: [
        "React Native Version",
        "AndroidStudio + Java Version",
        "Pictures & Videos with Storage",
        "Supports Inbuilt Camera",
      ],
    },
    {
      name: "RPA Website",
      about: [
        "Website to support UiPath RPA",
        "Login Functionality",
        "Salary Calculation Logic",
        "User role-based UI",
      ],
    },
    {
      name: "Insurance DBMS",
      about: ["MERN Stack", "DBMS Project", "CRUD Functions", "TailwindCSS"],
    },
    {
      name: "Calculator App",
      about: [
        "Reusable Components",
        "Jetpack Compose",
        "Kotlin",
        "Non-Scientific Calculator",
      ],
    },
  ];
  const skills = [
    { title: "Java" },
    { title: "JavaScript" },
    { title: "C++" },
    { title: "ReactJS" },
    { title: "NextJS" },
    { title: "NodeJS" },
    { title: "ExpressJS" },
    { title: "TailwindCSS" },
    { title: "Mongoose" },
    { title: "MySQL" },
    { title: "Sequelize" },
    { title: "Bootstrap" },
    { title: "Android Studio" },
    { title: "Axios" },
    { title: "Firebase" },
    { title: "CSS" },
    { title: "HTML" },
    { title: "C" },
    { title: "Python" },
    { title: "Laravel" },
    { title: "SQLite" },
    { title: "React Native" },
    { title: "Expo" },
    { title: "Kotlin" },
    { title: "Anypoint Studio" },
    { title: "OpenGL" },
    { title: "Bulma" },
    { title: "PHP" },
    { title: "Jetpack Compose" },
    ,
    { title: "Flutter" },
    { title: "Dart" },
    { title: "Go" },
    { title: "Redux" },
    { title: "PatternFly" },
    { title: "OpenShift" },
    { title: "Kubernetes" },
    { title: "Docker" },
  ];
  return (
    <div className="container mx-auto px-6 py-10">
      <H2 title="About Me" />
      <p className="text-lg text-gray-700 mb-8 px-1">{desc}</p>
      <H2 title="Skills" />
      <div className="text-lg text-gray-700 mb-8 flex flex-wrap">
        {skills.map((item, index) => (
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
        count={projects.length}
      />
      <div className="flex flex-wrap -mx-3">
        {projects.map((item, index) => {
          if (seeAll || index < 4)
            return <Project key={index} title={item.name} about={item.about} />;
        })}
      </div>
    </div>
  );
}
