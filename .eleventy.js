module.exports = function (eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function (date) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
