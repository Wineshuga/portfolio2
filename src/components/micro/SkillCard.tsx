interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <section className="group border rounded-lg p-3 w-fit flex flex-col items-center hover:scale-105 transition-all duration-500 ease-in-out">
      <span className="group-hover:scale-125 transition-all duration-500 ease-in-out">
        {icon}
      </span>
      <p className="text-center text-sm font-semibold">{name}</p>
    </section>
  );
};

export default SkillCard;
