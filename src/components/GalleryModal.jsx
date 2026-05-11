import { useEffect, useState } from "react";

export default function GalleryModal({ open, title, onClose, images = [] }) {
  const [selected, setSelected] = useState(null);

  // Preload de img
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 animate-[fadeIn_.2s_ease-out]">
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Cerrar modal"
        type="button"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950/95 backdrop-blur-md p-6 text-white shadow-2xl border border-white/10">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-sm hover:bg-white/10"
            type="button"
          >
            Cerrar
          </button>
        </div>

        {/* Contenido */}
        {images.length === 0 ? (
          <p className="text-white/70">No hay imágenes para mostrar.</p>
        ) : (
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
              {images.slice(0, 12).map((src, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelected(src)}
                >
                  <img
                    src={src}
                    alt={`${title} ${i + 1}`}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 animate-[fadeIn_.2s_ease-out]"
            onClick={() => setSelected(null)}
          >
            <img
              src={selected}
              alt="preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain animate-scaleIn"
            />
          </div>
        )}
      </div>
    </div>
  );
}