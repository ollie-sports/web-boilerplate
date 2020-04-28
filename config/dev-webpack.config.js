const path = require("path");
const baseConfig = require("./base-webpack.config");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = () => {
  baseConfig.mode = "development";
  baseConfig.devtool = "eval";

  baseConfig.devServer = {
    clientLogLevel: "error",
  };

  baseConfig.plugins.push(
    //Make typescript compilation faster
    new ForkTsCheckerWebpackPlugin({
      async: false,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      silent: true
    }),
    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebook/create-react-app/issues/240
    new CaseSensitivePathsPlugin(),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebook/create-react-app/issues/186
    new WatchMissingNodeModulesPlugin(
      path.resolve(__dirname, "..", "node_modules")
    )
  );

  return baseConfig;
};
