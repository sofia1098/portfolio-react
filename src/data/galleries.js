const assets = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,svg,avif}",
  {
    eager: true,
    as: "url",
  }
);

// obtiene imágenes por prefijo (g2, g3, etc)
function getGallery(prefix) {
  return Object.entries(assets)
    .filter(([path]) =>
      path.toLowerCase().includes(`/${prefix}-`)
    )
    .sort(([a], [b]) => {
      // ordenar por num (g3-1, g3-2, etc)
      const getNumber = (str) => {
        const match = str.match(/-(\d+)\./);
        return match ? parseInt(match[1]) : 0;
      };
      return getNumber(a) - getNumber(b);
    })
    .map(([, url]) => url);
}

// HERO IMAGES
function getImage(name) {
  const entry = Object.entries(assets).find(([path]) =>
    path.toLowerCase().includes(`/${name}.`)
  );
  return entry ? entry[1] : null;
}

export const heroImages = {
  1: getImage("hero-1"),
  2: getImage("hero-2"),
  3: getImage("hero-3"),
  4: getImage("hero-4"),
  5: getImage("hero-5"),
  6: getImage("hero-6"),
};

export const galleries = {
  g2: { title: "Galería 2", images: getGallery("g2") },
  g3: { title: "Galería 3", images: getGallery("g3") },
  g4: { title: "Galería 4", images: getGallery("g4") },
};