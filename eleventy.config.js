import YAML from "yaml";

export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

  cfg.addDataExtension("yaml,yml", contents => YAML.parse(contents));

  cfg.addFilter("titlecase", str => str.replace(/\b\w/g, c => c.toUpperCase()));

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
