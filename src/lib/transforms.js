import htmlmin from "html-minifier-next";

export function minifyHtml(content) {
  if ((this.page.outputPath || "").endsWith(".html")) {
    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
  }
  return content;
}
