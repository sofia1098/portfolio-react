import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const socials = [
    {
      label: "GitHub",
      url: "https://github.com/sofia1098",
      icon: SiGithub,
    },
    {
      label: "Instagram",
      url: "https://instagram.com/sofita.nunez",
      icon: SiInstagram,
    },

    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sofia-nunez1/",
      icon: FaLinkedin,
    },
    {
      label: "Mail",
      url: "sofianunez000@gmail.com",
      icon: MdEmail,
    },
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex items-center">
      <div className="mx-auto max-w-2xl px-6 sm:px-10 md:px-20 py-20">

        {/* Titulo*/}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-6">
          Hablemos de <span className="text-violet-500">algo</span>
          <br />
          que valga la pena.
        </h2>

        {/* Text body*/}
        <p className="text-sm sm:text-base leading-relaxed text-white/70 max-w-md mb-10">
          Te dejo mi contacto por si te interesa trabajar conmigo o realizar alguna colaboración.
        </p>

        {/* icons */}
        <div className="flex gap-6 flex-wrap items-center">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-xl sm:text-4xl text-white/60 hover:text-white hover:-translate-y-1 transition duration-200"
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}