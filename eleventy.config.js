import YAML from "yaml";

export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

  cfg.addDataExtension("yaml,yml", (contents, path) => {
    try {
      return YAML.parse(contents);
    } catch (err) {
      throw new Error(`Failed to parse YAML in ${path ?? "unknown file"}:\n${err.message}`);
    }
  });

  cfg.addFilter("titlecase", str => {
    if (!str) return "";
    return str.replace(/\b\w/g, c => c.toUpperCase());
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src/views",
      includes: "../lib/includes",
      data: "../data",
      output: "dist",
    },
  };
}
