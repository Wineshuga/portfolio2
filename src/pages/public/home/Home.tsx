import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <main className="bg-black p-4 font-nunito">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
