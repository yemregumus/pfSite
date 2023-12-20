const path = require("path");

module.exports = {
  reactStrictMode: true,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "images/",
        },
      },
    });

    return config;
  },
};
