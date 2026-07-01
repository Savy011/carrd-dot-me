import path from "node:path";

import * as SASS from "sass";
import YAML from "yaml";

export const yaml = (contents, path) => {
  try {
    return YAML.parse(contents);
  } catch (err) {
    throw new Error(`Failed to parse YAML in ${path ?? "unknown file"}:\n${err.message}`);
  }
};

export const sass = {
  outputFileExtension: "css",
  useLayouts: false,
  compile: async function (inputContent, inputPath) {
    let parsed = path.parse(inputPath);
    if (parsed.name.startsWith("_")) {
      return;
    }

    const compiled = SASS.compileString(inputContent, {
      loadPaths: [parsed.dir || ".", this.config.dir.includes],
    });

    this.addDependencies(inputPath, compiled.loadedUrls);

    return async data => {
      return compiled.css;
    };
  },
};
