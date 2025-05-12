import SkillData from "../data/skillsData.ts";
import SkillCard from "./micro/SkillCard";
import type { ReactNode } from "react";

const Skills = () => {
  return (
    <section className="text-white py-10 my-10">
      <h3 className="md:text-4xl text-2xl text-center font-semibold">Skills</h3>
      <section className="flex flex-wrap gap-4 justify-center max-w-[600px] mx-auto my-10">
        {SkillData.map(
          (skill: { name: string; icon: ReactNode }, index: number) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          )
        )}
      </section>
    </section>
  );
};

export default Skills;
