import { useRef } from "react";
import { useIntersection } from "./useIntersection";

export default function Project({ title, about, id }) {
  const ref = useRef();
  const inViewport = useIntersection(ref);

  return (
    <div
      id={id}
      ref={ref}
      className=" flex-none w-[80%] md:w-[60%] lg:w-[40%] px-4 mb-8 snap-start "
    >
      <button
        disabled
        className="bg-gradient-to-l from-c2 to-c3 rounded-lg w-full shadow-lg text-c4 shadow-c1 overflow-hidden hover:opacity-50"
      >
        {/* <img
          className="w-full h-56 object-cover object-center"
          src="https://dummyimage.com/720x400/ccc/000"
          alt="Project 3"
        /> */}
        {/* <div className="-rotate-90 absolute -translate-x-5 underline text-xl translate-y-20 ml-1">
          Features
        </div> */}
        <div className="p-4 flex flex-col">
          <h3
            className={
              "mx-auto font-bold text-xl md:text-2xl mb-2 " +
              (inViewport ? "" : " text-c2 bg-c2 rounded animate-pulse")
            }
          >
            {title}
          </h3>

          <ul className=" font-medium text-sm md:text-base text-left opacity-80">
            {about.map((item, index) => (
              <li
                className={
                  inViewport
                    ? "mb-1 w-fit"
                    : " text-c2 w-fit mb-1 bg-c2 rounded animate-pulse"
                }
                key={index}
              >
                # {item}
              </li>
            ))}
          </ul>
          {/* <a
            href="#"
            className="block bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-gray-700"
          >
            View Project
          </a> */}
        </div>
      </button>
    </div>
  );
}
