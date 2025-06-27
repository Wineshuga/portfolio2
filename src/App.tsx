import { useEffect } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      <main className="bg-black p-4 font-nunito">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
