interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <section className="group border-3 border-gray-700 rounded-lg p-3 w-fit flex flex-col items-center hover:scale-105 transition-all duration-500 ease-in-out">
      <span className="group-hover:scale-125 transition-all duration-500 ease-in-out">
        {icon}
      </span>
      <p className="text-center text-sm font-semibold font-poppins mt-2 cursor-default">
        {name}
      </p>
    </section>
  );
};

export default SkillCard;
