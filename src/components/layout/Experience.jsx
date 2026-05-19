import { useState } from "react";
import ModalText from "../modal-text";

import TattooImage from "../../assets/hero-4.avif";
import IllustrationImage from "../../assets/hero-1.avif";


export default function Experience() {
    const [selectedCard, setSelectedCard] = useState(null);

    const experiences = [
        {
            id: 1,
            title: "Tattoo",
            subtitle: "Más de 6 años de experiencia",
            image: TattooImage,
            shortDescription:
                "Trabajo creando piezas personalizadas y desarrollando proyectos artísticos enfocados en tatuaje e identidad visual.",
            content: {
                image: TattooImage,
                title: "Tattoo",
                subtitle: "Experiencia profesional en tatuaje e ilustración aplicada",
                paragraphs: [
                    "Trabajo como tatuadora independiente desde hace más de seis años, desarrollando proyectos personalizados y acompañando a cada cliente en el proceso creativo.",
                    "Mi trabajo está enfocado en la composición, la línea y la adaptación del dibujo al cuerpo, buscando siempre un equilibrio entre lo artístico y lo funcional.",
                ],
            },
        },
        {
            id: 2,
            title: "Illustration",
            subtitle: "Editorial y proyectos personalizados",
            image: IllustrationImage,
            shortDescription:
                "Realizo ilustraciones editoriales, encargos personalizados y proyectos gráficos para distintos formatos.",
            content: {
                image: IllustrationImage,
                title: "Illustration",
                subtitle: "Ilustración editorial y proyectos visuales",
                paragraphs: [
                    "Como ilustradora trabajé en proyectos editoriales, ilustraciones para libros y piezas visuales personalizadas.",
                    "También tengo experiencia en diseño editorial, maquetación y desarrollo visual para distintos formatos impresos y digitales.",
                ],
            },
        },
    ];

    return (
        <section
            id="experience"
            className="w-full min-h-screen px-6 py-20 sm:px-10 md:px-20"
        >
            <div className="mx-auto max-w-6xl">

                <h2 className="mb-12 text-3xl sm:text-4xl font-semibold">
                    Experience
                </h2>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2">

                    {experiences.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="mb-6 h-52 w-full object-contain"
                            />

                            <h3 className="text-2xl font-medium">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-white/60">
                                {item.subtitle}
                            </p>

                            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/80">
                                {item.shortDescription}
                            </p>

                            <button
                                onClick={() => setSelectedCard(item.content)}
                                className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
                            >
                                Leer más
                            </button>
                        </div>
                    ))}

                </div>
            </div>

            {/* Modal */}
            <ModalText
                isOpen={selectedCard !== null}
                onClose={() => setSelectedCard(null)}
                data={selectedCard}
            />
        </section>
    );
}
