import AboutImage from "../assets/about-image.png";

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 sm:px-10 md:px-20 py-16 md:grid-cols-2">

        {/* Texto */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Hola, soy Sofía
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
            Este un lugar donde comparto mis proyectos, aprendizajes y experiencias en el mundo visual y del desarrollo it. Soy una apasionada de la creatividad y la tecnología, y me encanta explorar nuevas formas de crear. ¡Espero que disfrutes navegando por mi portafolio tanto como yo disfruté creándolo!
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end md:pr-10">
          <img
            src={AboutImage}
            alt="About me"
            className="w-40 sm:w-52 md:w-64 h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}