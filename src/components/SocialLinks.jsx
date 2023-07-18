import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/aneesh-m-bhat-1a076b1a4/",
      style: "rounded-tl-md",
    },
    {
      child: (
        <>
          <FaGithub size={30} /> Github
        </>
      ),
      href: "https://github.com/Aneesh-M-Bhat",
    },
    {
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto:aneeshbhat3719@gmail.com",
    },
    {
      child: (
        <>
          <BsPersonLinesFill size={30} /> Resume
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
    {
      child: (
        <>
          <SiHackerrank size={30} /> Hackerrank
        </>
      ),
      href: "https://www.hackerrank.com/aneeshbhat3719?hr_r=1",
    },
    {
      child: (
        <>
          <SiLeetcode size={30} /> Leetcode
        </>
      ),
      href: "https://leetcode.com/aneeshbhat3719/",
      style: "rounded-bl-md",
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[30%] right-0 fixed z-10">
      <ul>
        {links.map(({ child, href, style, download }, id) => (
          <li
            key={id + 1}
            className={
              " flex justify-between items-center w-40 h-14 px-4 translate-x-[100px] bg-c1 hover:translate-x-2 hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-c3"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
