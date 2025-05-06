import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-black p-4">
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
