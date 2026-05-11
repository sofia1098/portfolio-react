import TechImage from "../assets/tech-image.avif";

import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiFlutter,
  SiDart,
  SiReact,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

export default function Tech() {
  const techs = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "C", icon: SiC },
    { name: "Flutter", icon: SiFlutter },
    { name: "Dart", icon: SiDart },
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma },
  ];

  return (
    <section id="tech" className="min-h-screen w-full">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 sm:px-10 md:px-20 py-16 md:grid-cols-2">

        {/* Imagen */}
        <div className="order-1 flex justify-center md:justify-start md:pl-10">
          <img
            src={TechImage}
            alt="Tech"
            className="w-40 sm:w-52 md:w-64 h-auto object-contain"
          />
        </div>

        {/* Texto */}
        <div className="order-2">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Desarrollo
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
            Hace un año, me sumergí en el mundo del desarrollo web, comenzando con C, python y java. Desde entonces, he ampliado mis habilidades aprendiendo React, Next.js y Tailwind CSS. Mi enfoque se centra en crear interfaces de usuario atractivas y funcionales, siempre buscando mejorar la experiencia del usuario. Estoy emocionado por seguir creciendo como desarrollador y enfrentar nuevos desafíos en el futuro.
          </p>

          {/* Tecnologías iconos */}
          <div className="mt-6 flex flex-wrap gap-4">
            {techs.map((tech) => {
              const Icon = tech.icon;
              return (
                <Icon
                  key={tech.name}
                  title={tech.name}
                  className="text-xl sm:text-2xl text-white/60 hover:text-white hover:scale-110 transition duration-300"
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}