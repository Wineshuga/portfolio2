import Winnie from "/images/winnie.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex text-[#E9E6E1] flex-col md:flex-row items-end justify-between md:gap-10 lg:gap-5 gap-5 my-20 sm:px-5 mx-auto w-fit"
    >
      <section className="md:w-1/2">
        <h1 className="text-5xl">Uzochukwu Winnie</h1>
        <h2 className="text-2xl md:my-10 my-5 font-mono">Frontend Engineer</h2>
        <article className="text-sm sm:text-base">
          <p>
            I’m a frontend engineer passionate about building responsive,
            accessible, and user-centered web applications. My experience spans
            React, Next.js, TypeScript, and Tailwind — with growing skills in
            full-stack development.
          </p>
          <p>
            I’m always curious about new technologies, open source
            collaboration, and how great design meets clean code. Beyond
            development, I love sharing what I learn and building products that
            make a difference.
          </p>
        </article>
        <button
          type="button"
          className="p-2 border-2 border-gray-700 hover:border-gray-500 transition-all duration-500 my-3 font-poppins rounded-md"
        >
          Resume
        </button>
      </section>
      <section className="md:w-2/5 max-w-[30rem] mx-auto">
        <figure>
          <img src={Winnie} alt="uzochukwu winnie" />
        </figure>
      </section>
    </section>
  );
};

export default Hero;
