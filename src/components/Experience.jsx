import React from "react";
import { Section } from "./Section";
import H2 from "./H2";

const Experience = () => {
  return (
    <Section id="exp-edu" bg="bg-gradient-to-b from-c1 to-c3">
      <>
        <H2 title="Experience" />
        <div className="text-sm md:text-lg px-1  mb-8 flex flex-wrap">
          <table className="w-full text-c5 opacity-60">
            <tbody>
              <tr>
                <td className="w-3/4">
                  <p className="font-bold">
                    <span className="font-semibold opacity-60">
                      Associate Software Engineer @
                    </span>
                    <a
                      className="hover:underline"
                      href="https://www.redhat.com/en"
                    >
                      Red Hat
                    </a>
                  </p>
                </td>
                <td className="w-1/4 text-right">
                  <p>2023</p>
                </td>
              </tr>
              <tr>
                <td className="w-3/4">
                  <p className="font-bold">
                    <span className="font-semibold opacity-60">Intern @</span>
                    <a
                      className="hover:underline"
                      href="https://www.redhat.com/en"
                    >
                      Red Hat
                    </a>
                  </p>
                </td>
                <td className="w-1/4 text-right">
                  <p>2023</p>
                </td>
              </tr>
              <tr>
                <td className="w-3/4">
                  <p className="font-bold">
                    <span className="font-semibold opacity-60">Intern @</span>
                    <a
                      className="hover:underline"
                      href="https://kakunjesoftware.com/"
                    >
                      Kakunje Software
                    </a>
                  </p>
                </td>
                <td className="w-1/4 text-right">
                  <p>2022</p>
                </td>
              </tr>
              <tr>
                <td className="w-3/4">
                  <p className="font-bold">
                    <span className="font-semibold opacity-60">Intern @</span>
                    <a
                      className="hover:underline"
                      href="https://www.klientship.com/"
                    >
                      Klientship Technologies
                    </a>
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
        <div className="text-sm md:text-lg px-1  mb-8 flex flex-wrap">
          <table className="w-full text-c5 opacity-60">
            <tbody>
              <tr>
                <td className="w-3/4">
                  <a
                    href="https://www.ajiet.edu.in/"
                    className="font-bold hover:underline"
                  >
                    AJ Institute of Engineering & Technology
                  </a>
                  <p className="italic opacity-60">
                    Bachelor of Engineering in Computer Science
                  </p>
                </td>
                <td className="w-1/4 text-right">
                  <p> 2019 - 2023</p>
                  <p className="font-bold">9.06/10</p>
                </td>
              </tr>
              <tr>
                <td className="w-3/4">
                  <a
                    href="https://www.nios.ac.in/"
                    className="font-bold hover:underline"
                  >
                    National Institute of Open Schooling
                  </a>
                  <p className="italic opacity-60">
                    Senior Secondary Education{" "}
                  </p>
                </td>
                <td className="w-1/4 text-right">
                  <p> 2017 - 2019</p>
                  <p className="font-bold"> 7.6/10</p>
                </td>
              </tr>
              <tr>
                <td className="w-3/4">
                  <a
                    href="https://www.mtcarmelcs.org/"
                    className="font-bold hover:underline"
                  >
                    Mount Carmel Central School
                  </a>
                  <p className="italic opacity-60">Secondary Education</p>
                </td>
                <td className="w-1/4 text-right">
                  <p> 2016 - 2017</p>
                  <p className="font-bold">10/10</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </Section>
  );
};

export default Experience;
