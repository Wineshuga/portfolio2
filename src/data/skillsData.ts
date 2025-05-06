import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiMui, SiRedux, SiRubyonrails } from "react-icons/si";
import type { ReactNode } from "react";

type Skill = {
  name: string;
  icon: ReactNode; // ReactNode allows JSX elements
};

const skillsData: Skill[] = [
  {
    name: "HTML",
    icon: React.createElement(FaHtml5, { color: "orange", size: "3rem" }),
  },
  {
    name: "CSS",
    icon: React.createElement(FaCss3Alt, { color: "blue", size: "3rem" }),
  },
  {
    name: "JavaScript",
    icon: React.createElement(IoLogoJavascript, { color: "yellow", size: "3rem" }),
  },
  {
    name: "React.js",
    icon: React.createElement(FaReact, { color: "blue", size: "3rem" }),
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript, { color: "blue", size: "3rem" }),
  },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss, { color: "green", size: "3rem" }),
  },
  {
    name: "Material UI",
    icon: React.createElement(SiMui, { color: "blue", size: "3rem" }),
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt, { color: "red", size: "3rem" }),
  },
  {
    name: "Firebase",
    icon: React.createElement(IoLogoFirebase, { color: "yellow", size: "3rem" }),
  },
  {
    name: "GitHub",
    icon: React.createElement(FaGithub, { size: "3rem" }),
  },
  {
    name: "NPM",
    icon: React.createElement(FaNpm, { color: "red", size: "3rem" }),
  },
  {
    name: "Redux",
    icon: React.createElement(SiRedux, { color: "purple", size: "3rem" }),
  },
  {
    name: "Ruby on Rails",
    icon: React.createElement(SiRubyonrails, { color: "red", size: "3rem" }),
  },
];

export default skillsData;