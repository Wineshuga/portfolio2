import Winnie from "/images/winnie.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex text-white flex-col md:flex-row items-end justify-between md:gap-10 lg:gap-5 gap-5 my-20"
    >
      <section className="md:w-1/2">
        <h1 className="sm:text-5xl text-2xl">Uzochukwu Winnie</h1>
        <h2 className="sm:text-2xl text-base md:my-10 my-5">
          Frontend Engineer
        </h2>
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
        <button type="button" className="p-2 border my-3">
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
