import { useState } from "react";
import GalleryModal from "../GalleryModal";
import { heroImages, galleries } from "../../data/galleries";

function Sticker({ href, onClick, label, imgSrc, className = "" }) {
  if (!imgSrc) return null;

  const baseClass = [
    "block overflow-hidden rounded-2xl cursor-pointer pointer-events-auto",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
    "transition-transform duration-200 hover:scale-[1.02]",
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} aria-label={label} className={baseClass}>
        <div className="h-full w-full p-1 md:p-2 lg:p-0">
          <img
            src={imgSrc}
            alt={label}
            className="h-full w-full object-contain object-center"
            draggable="false"
          />
        </div>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={baseClass}
    >
      <div className="h-full w-full p-1 md:p-2 lg:p-0">
        <img
          src={imgSrc}
          alt={label}
          className="h-full w-full object-contain object-center"
          draggable="false"
        />
      </div>
    </button>
  );
}

export default function HeroStickers() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-1 py-6 md:py-8">
        <div
          className={[
            "grid gap-1",
            "grid-cols-2 auto-rows-[120px]",
            "sm:auto-rows-[200px]",
            "lg:grid-cols-3 lg:grid-rows-2 lg:auto-rows-fr lg:h-[370px] lg:gap-4",
          ].join(" ")}
        >
          {/* hero-1 -> about */}
          <Sticker href="#about" label="Sobre mi" imgSrc={heroImages[1]} />

          {/* hero-2 -> g2 modal */}
          <Sticker
            label="Galería 2"
            imgSrc={heroImages[2]}
            onClick={() => setOpenKey("g2")}
          />

          {/* hero-3 -> g3 modal */}
          <Sticker
            label="Galería 3"
            imgSrc={heroImages[3]}
            onClick={() => setOpenKey("g3")}
          />

          {/* hero-4 -> g4 modal */}
          <Sticker
            label="Galería 4"
            imgSrc={heroImages[4]}
            onClick={() => setOpenKey("g4")}
          />

          {/* hero-5 -> contact */}
          <Sticker href="#contact" label="Contacto" imgSrc={heroImages[5]} />

          {/* hero-6 -> tech */}
          <Sticker href="#tech" label="Tech" imgSrc={heroImages[6]} />
        </div>
      </div>

      {openKey && (
        <GalleryModal
          open={true}
          title={galleries?.[openKey]?.title ?? "Galería"}
          images={galleries?.[openKey]?.images ?? []}
          onClose={() => setOpenKey(null)}
        />
      )}
    </section>
  );
}