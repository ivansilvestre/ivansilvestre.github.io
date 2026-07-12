// import all photos from photos folder, lazily
const modules = import.meta.glob("./photos/*.jpg", { import: "default" });

const paths = Object.keys(modules).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
);

export const loadImages = async () => {
  const sources = await Promise.all(paths.map((path) => modules[path]()));
  return sources.map((src) => ({ src }));
};
