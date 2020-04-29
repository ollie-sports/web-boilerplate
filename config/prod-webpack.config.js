const baseConfig = require("./base-webpack.config");

module.exports = () => {
  baseConfig.mode = "production";
  baseConfig.devtool = "source-map";
  baseConfig.bail = true;

  return baseConfig;
};
