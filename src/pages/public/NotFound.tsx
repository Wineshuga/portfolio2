import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen py-12 px-4 pt-30 bg-black font-poppins">
      <article className="text-white text-center border border-[#ddd] md:w-3/5 mx-auto md:p-20 p-5">
        <h3 className="text-[#e1d3b6] font-semibold mb-5 font-mono md:text-4xl text-2xl">
          PAGE NOT FOUND
        </h3>
        <p className="text-[#ddd]">
          But don't leave 😭 <br /> Have you seen{" "}
          <Link
            to="/articles"
            className="underline cursor-pointer hover:no-underline"
          >
            my recent article? Click here
          </Link>
        </p>
      </article>
    </section>
  );
};

export default NotFound;
