import skillData from "../data/skills.json";
import SkillCard from "./micro/SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiRedux,
  SiRubyonrails,
} from "react-icons/si";
import type { ReactNode } from "react";

// Map icon names to icon components
const iconMap: Record<
  string,
  React.ComponentType<{ color?: string; size?: string }>
> = {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  IoLogoJavascript,
  IoLogoFirebase,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiRedux,
  SiRubyonrails,
};

const devPractices = [
  {
    title: "Version Control",
    description: "Using Git for version control and collaboration.",
  },
  {
    title: "Responsive Design",
    description: "Creating responsive layouts with CSS and frameworks.",
  },
  {
    title: "Testing",
    description: "Writing unit tests and integration tests for code quality.",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web applications for speed and efficiency.",
  },
  {
    title: "Agile Methodology",
    description: "Following Agile practices for iterative development.",
  },
  {
    title: "API Integration",
    description: "Integrating with RESTful APIs and third-party services.",
  },
];

const Skills = () => {
  return (
    <section className="text-white py-10 my-10">
      <h3 className="md:text-4xl text-2xl text-center font-semibold">
        Skills & Tools
      </h3>
      <section className="flex flex-col flex-wrap gap-5 md:flex-row items-center my-20 justify-center">
        {devPractices.map((practice, index) => (
          <div
            key={index}
            className="p-4 max-w-80 border-2 rounded-lg text-center"
          >
            <h4 className="text-xl font-semibold mt-6">{practice.title}</h4>
            <p className="text-gray-400">{practice.description}</p>
          </div>
        ))}
      </section>
      <section className="flex flex-wrap gap-4 justify-center max-w-[600px] mx-auto my-20">
        {skillData.map((skill, index) => {
          const IconComponent = iconMap[skill.icon];
          const icon: ReactNode = IconComponent ? (
            <IconComponent color={skill.color} size="3rem" />
          ) : null;
          return <SkillCard key={index} icon={icon} name={skill.name} />;
        })}
      </section>
    </section>
  );
};

export default Skills;
