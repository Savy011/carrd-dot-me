export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
