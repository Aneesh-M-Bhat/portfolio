import React from "react";
import { Section } from "./Section";
import H2 from "./H2";

const Contact = () => {
  return (
    <Section id="contacts" bg="bg-gradient-to-b from-c3 to-c1">
      <div className=" flex flex-col p-4 justify-center w-full  h-full">
        <div className=" pb-8">
          <H2 title="Contact Me"></H2>
          <p className="text-c5 opacity-80">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/4e722397-a9b1-4856-ba1f-99ef9055d257"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" p-2 placeholder-c5 opacity-80 bg-transparent border-2 rounded-md text-c5 focus:outline-none border-c3"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 placeholder-c5 opacity-80 bg-transparent border-2 rounded-md text-c5 focus:outline-none border-c3"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="p-2 placeholder-c5 opacity-80 bg-transparent border-2 rounded-md text-c5 focus:outline-none border-c3"
            />
            <button className=" text-c2 font-semibold bg-gradient-to-r from-yellow-200 to-yellow-600 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
