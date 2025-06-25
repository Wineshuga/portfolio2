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

const Skills = () => {
  return (
    <section className="text-white py-10 my-10">
      <h3 className="md:text-4xl text-2xl text-center font-semibold">Skills</h3>
      <section className="flex flex-wrap gap-4 justify-center max-w-[600px] mx-auto my-10">
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
