export default {
  permalink: function (data) {
    const criticalStyles = ["critical"];

    if (criticalStyles.includes(data.page.fileSlug)) {
      return false;
    }
  },
};
