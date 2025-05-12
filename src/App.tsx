import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-black p-4">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

export default App;
