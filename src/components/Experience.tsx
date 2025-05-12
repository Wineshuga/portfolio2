import data from "../data/experienceData.json";

const Experience = () => {
  return (
    <section className="text-white">
      <h3 className="md:text-4xl text-2xl my-10 text-center font-semibold">
        Experience
      </h3>
      {data.map(
        (
          experience: {
            company: string;
            date: string;
            description: string;
            skills: string[];
            position: string;
          },
          index: number
        ) => (
          <section
            key={index}
            className="flex md:flex-row flex-col justify-between items-start my-8 md:w-10/12 mx-auto md:gap-20"
          >
            <div>
              <p className="text-sm text-nowrap mb-3 md:mb-0">
                {experience.date}
              </p>
            </div>
            <article className="">
              <h3 className="text-2xl font-semibold mb-3">
                {experience.position} -{" "}
                <span className="text-purple-300">{experience.company}</span>
              </h3>
              <p className="mb-3">{experience.description}</p>
              <ul className="flex gap-3 items-start flex-wrap">
                {experience.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-xs text-purple-700 bg-gray-900 p-2 rounded-md"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </section>
        )
      )}
    </section>
  );
};

export default Experience;
