import { RenderPlugin } from "@11ty/eleventy";

import * as extenstions from "./src/lib/extensions.js";
import * as filters from "./src/lib/filters.js";

export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

  cfg.addDataExtension("yaml,yml", extenstions.yaml);

  cfg.addExtension("scss", extenstions.sass);

  cfg.addFilter("titlecase", filters.titlecase);

  cfg.addPlugin(RenderPlugin);

  cfg.addPassthroughCopy({ static: "/" });

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
