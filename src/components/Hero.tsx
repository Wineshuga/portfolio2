import Winnie from "/images/winnie.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex text-[#E9E6E1] flex-col md:flex-row items-end justify-between md:gap-10 lg:gap-5 gap-5 my-20 sm:px-5 mx-auto w-fit"
    >
      <section className="md:w-1/2">
        <h1
          className="text-5xl"
          data-aos="slide-right"
          data-aos-offset="100"
          data-aos-delay="10"
          data-aos-duration="2500"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          Uzochukwu Winnie
        </h1>
        <h2
          className="text-2xl md:my-10 my-5 font-mono"
          data-aos="slide-right"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="2500"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          Frontend Engineer
        </h2>
        <article
          className="text-sm sm:text-base"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2500"
          data-aos-easing="ease"
          data-aos-once="true"
        >
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
          <button
            type="button"
            className="p-2 border-2 border-gray-700 hover:border-gray-500 transition-all duration-500 my-3 font-poppins rounded-md"
          >
            <a
              href="https://docs.google.com/document/d/1xsZPS6DaaYLctuXM9-Gph73Iv8v7_Cdb/edit?usp=sharing&ouid=102071174469387905389&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </article>
      </section>
      <section className="md:w-2/5 max-w-[30rem] mx-auto">
        <figure
          data-aos="fade"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="3000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <img src={Winnie} alt="uzochukwu winnie" />
        </figure>
      </section>
    </section>
  );
};

export default Hero;
