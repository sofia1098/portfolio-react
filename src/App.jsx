import Navbar from "./components/navbar";
import Fondo from "./assets/fondo.png";
import About from "./components/about";
import Tech from "./components/tech";
import Contact from "./components/contact";
import HeroStickers from "./components/hero";

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

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;