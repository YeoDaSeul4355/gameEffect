export default {
  root: "src",
  build: {
    outDir: "../public",
  },
  esbuild: {
    define: {
      this: "window",
    },
  },
};
