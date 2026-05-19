import Navbar from "./components/layout/navbar";
import Fondo from "./assets/fondo.avif";
import About from "./components/layout/about";
import Tech from "./components/layout/tech";
import Contact from "./components/layout/contact";
import HeroStickers from "./components/layout/hero";
import Experience from "./components/layout/Experience";

function App() {
  return (
    <div className="overflow-hidden min-h-screen pt-20">
      <div
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          position: "fixed",
          inset: 0,
          opacity: 0.34,
          margin: 0,
          padding: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <section id="home">
          <HeroStickers />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tech">
          <Tech />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;