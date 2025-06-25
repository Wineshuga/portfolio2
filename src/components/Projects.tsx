import data from "../data/projects.json";

const Projects = () => {
  return (
    <section className="text-white py-10 my-10">
      <h3 className="md:text-4xl text-2xl my-10 text-center font-semibold">
        Projects
      </h3>
      {data.map((project, index) => (
        <section
          key={index}
          className="flex md:flex-row flex-col justify-between items-start my-8 md:w-10/12 mx-auto md:gap-20"
        >
          <div className="w-3/12">
            <img src={project.image} alt={project.title} />
          </div>
          <article className="w-9/12">
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            <ul className="flex gap-3 items-start flex-wrap">
              {project.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="text-xs text-purple-700 bg-gray-900 p-2 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <section className="flex gap-3 items-center my-3 text-sm">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="p-2 border-2 rounded-md cursor-pointer"
                  >
                    Live Link
                  </button>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="p-2 border-2 rounded-md cursor-pointer"
                  >
                    GitHub Link
                  </button>
                </a>
              )}
            </section>
          </article>
        </section>
      ))}
    </section>
  );
};

export default Projects;
