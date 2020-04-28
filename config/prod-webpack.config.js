const baseConfig = require("./base-webpack.config");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = () => {
  baseConfig.mode = "production";
  baseConfig.devtool = "source-map";
  baseConfig.bail = true;

  baseConfig.plugins.push(
    //Lets us do `import _ from 'lodash'` without bloating our bundle size unnecessarily
    new LodashModuleReplacementPlugin()
  );

  return baseConfig;
};
