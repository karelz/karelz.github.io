export default {
  eleventyComputed: {
    permalink: (data) => `${data.page.filePathStem}.html`
  }
};
