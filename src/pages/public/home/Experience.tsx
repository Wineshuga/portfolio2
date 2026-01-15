import data from "../../../data/experience.json";

const Experience = () => {
  return (
    <section className="text-[#E9E6E1]">
      <h3
        className="md:text-4xl text-2xl my-10 text-center font-semibold font-mono"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="2500"
        data-aos-easing="ease"
      >
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
            <div
              className="md:w-1/12"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="2500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <p className="text-sm text-nowrap mb-3 md:mb-0">
                {experience.date}
              </p>
            </div>
            <article
              className="md:w-11/12"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="2500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <h3 className="text-2xl font-semibold mb-3 font-mono">
                {experience.position} -{" "}
                <span className="text-[#c0a290] font-nunito">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-3 sm:text-base text-sm">
                {experience.description}
              </p>
              <ul className="flex gap-3 items-start flex-wrap">
                {experience.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-xs text-[#e1d3b6] bg-gray-900 p-2 rounded-md font-poppins cursor-default hover:bg-gray-800 transition-all duration-300"
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
