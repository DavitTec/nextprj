const basePath = process.env.NODE_ENV === "production" ? "/nextprj" : "";
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
  images: {
    loader: "custom",
  },
}

// module.exports = {
//    basePath,
//    assetPrefix: `${basePath}/`
//  };
