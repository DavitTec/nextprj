// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const basePath = process.env.NODE_ENV === "production" ? "/nextprj" : "";

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    }
  ]

  // your other plugins here
]);

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId}
  ) {
    return {
      "/": {page: "/"},
     '/about': { page: '/about' },
    };
  }
};

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
