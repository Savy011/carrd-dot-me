import { RenderPlugin } from "@11ty/eleventy";

import * as extenstions from "./src/lib/extensions.js";
import * as filters from "./src/lib/filters.js";
import * as transforms from "./src/lib/transforms.js";

const isProd = process.env.NODE_ENV === "production";

export default function (cfg) {
  cfg.setServerOptions({
    port: 1212,
  });

  cfg.addDataExtension("yaml,yml", extenstions.yaml);

  cfg.addExtension("scss", extenstions.sass);

  cfg.addFilter("titlecase", filters.titlecase);

  cfg.addPlugin(RenderPlugin);

  cfg.addPassthroughCopy({ static: "/", assets: "/assets" });

  cfg.addWatchTarget("./src/lib/styles/");

  if (isProd) {
    cfg.addTransform("htmlmin", transforms.minifyHtml);
  }

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
