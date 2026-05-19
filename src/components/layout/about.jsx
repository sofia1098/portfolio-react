import AboutImage from "../../assets/about-image.avif";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 md:grid-cols-2 md:px-20">

        {/* Texto */}
        <div className="space-y-6">

          <h2 className="text-3xl sm:text-4xl font-semibold">
            Hola, soy Sofía
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            Este es mi portfolio digital, un pequeño espacio donde muestro la
            variedad de proyectos en los que trabajo.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
            Estudié diseño y comunicación visual, además de dibujo y pintura.
            Me dedico al tatuaje y la ilustración desde hace más de seis años.
            Como ilustradora, he realizado trabajos editoriales para distintos
            tipos de publicaciones, desde libros de poesía hasta novelas
            infantiles. También trabajo realizando ilustraciones personalizadas
            por encargo.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            En el último tiempo comencé a formarme en programación, y esta web
            fue diseñada y desarrollada por mí ♡
          </p>

        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end">
          <img
            src={AboutImage}
            alt="About me"
            className="w-44 sm:w-56 md:w-72 lg:w-80 h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}