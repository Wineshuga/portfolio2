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
          Full-Stack Web Developer
        </h2>
        <article className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          corrupti minima delectus vel culpa eum quis quam natus provident,
          ipsam sapiente distinctio accusamus enim expedita magnam quidem
          accusantium aut rem quae fuga voluptate exercitationem id. Quas magni
          eaque saepe possimus perspiciatis aliquid nihil facilis, natus
          mollitia cupiditate id, laborum quasi!
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
