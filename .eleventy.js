// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");


    // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
    eleventyConfig.addShortcode("story", function(name, date) {
      return `<h2>${name}</h2>
  <h4>${date}</h4>`;
    })
};